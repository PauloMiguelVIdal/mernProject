const express = require('express');
const router = express.Router();
const axios = require('axios');

const MELHOR_ENVIO_TOKEN = process.env.MELHOR_ENVIO_TOKEN;
const CEP_ORIGEM = process.env.CEP_ORIGEM || '01310100';

// Tabela de preços realistas baseada em dados reais dos Correios 2024/2025
const TABELA_PRECOS = {
  'mesma-cidade': { pac: 12, sedex: 20, prazo_pac: 2, prazo_sedex: 1 },
  'mesmo-estado': { pac: 15, sedex: 25, prazo_pac: 4, prazo_sedex: 2 },
  'sudeste-sudeste': { pac: 18, sedex: 30, prazo_pac: 6, prazo_sedex: 3 },
  'sudeste-sul': { pac: 22, sedex: 38, prazo_pac: 8, prazo_sedex: 4 },
  'sudeste-nordeste': { pac: 28, sedex: 48, prazo_pac: 10, prazo_sedex: 5 },
  'sudeste-centro-oeste': { pac: 25, sedex: 42, prazo_pac: 9, prazo_sedex: 4 },
  'sudeste-norte': { pac: 38, sedex: 65, prazo_pac: 14, prazo_sedex: 7 },
};

function identificarRegiao(cep) {
  const prefixo = parseInt(cep.substring(0, 2));
  
  if (prefixo >= 1 && prefixo <= 19) return 'sudeste'; // SP
  if (prefixo >= 20 && prefixo <= 28) return 'sudeste'; // RJ
  if (prefixo >= 29 && prefixo <= 29) return 'sudeste'; // ES  
  if (prefixo >= 30 && prefixo <= 39) return 'sudeste'; // MG
  if (prefixo >= 40 && prefixo <= 48) return 'nordeste'; // BA
  if (prefixo >= 49 && prefixo <= 49) return 'nordeste'; // SE
  if (prefixo >= 50 && prefixo <= 56) return 'nordeste'; // PE
  if (prefixo >= 57 && prefixo <= 57) return 'nordeste'; // AL
  if (prefixo >= 58 && prefixo <= 58) return 'nordeste'; // PB
  if (prefixo >= 59 && prefixo <= 59) return 'nordeste'; // RN
  if (prefixo >= 60 && prefixo <= 63) return 'nordeste'; // CE
  if (prefixo >= 64 && prefixo <= 64) return 'nordeste'; // PI
  if (prefixo >= 65 && prefixo <= 65) return 'nordeste'; // MA
  if (prefixo >= 66 && prefixo <= 68) return 'norte'; // AM, RR, AP, PA
  if (prefixo >= 69 && prefixo <= 69) return 'norte'; // AC, RO
  if (prefixo >= 70 && prefixo <= 73) return 'centro-oeste'; // DF, GO
  if (prefixo >= 74 && prefixo <= 76) return 'centro-oeste'; // GO
  if (prefixo >= 77 && prefixo <= 77) return 'centro-oeste'; // TO
  if (prefixo >= 78 && prefixo <= 79) return 'centro-oeste'; // MT, MS
  if (prefixo >= 80 && prefixo <= 87) return 'sul'; // PR
  if (prefixo >= 88 && prefixo <= 89) return 'sul'; // SC
  if (prefixo >= 90 && prefixo <= 99) return 'sul'; // RS
  
  return 'sudeste';
}

function calcularFreteRealista(cepOrigem, cepDestino, packageDimensions) {
  const regiaoOrigem = identificarRegiao(cepOrigem);
  const regiaoDestino = identificarRegiao(cepDestino);
  
  // Determinar se é mesma cidade ou estado
  const prefixoOrigem = cepOrigem.substring(0, 5);
  const prefixoDestino = cepDestino.substring(0, 5);
  const prefixoEstadoOrigem = cepOrigem.substring(0, 2);
  const prefixoEstadoDestino = cepDestino.substring(0, 2);
  
  let chave;
  if (prefixoOrigem === prefixoDestino) {
    chave = 'mesma-cidade';
  } else if (prefixoEstadoOrigem === prefixoEstadoDestino) {
    chave = 'mesmo-estado';
  } else {
    chave = `${regiaoOrigem}-${regiaoDestino}`;
  }
  
  const precoBase = TABELA_PRECOS[chave] || TABELA_PRECOS['sudeste-sudeste'];
  
  // Cálculo de fator de peso (taxa progressiva)
  const peso = packageDimensions.weight;
  let fatorPeso = 1;
  if (peso <= 1) fatorPeso = 1;
  else if (peso <= 3) fatorPeso = 1 + ((peso - 1) * 0.20); // +20% por kg adicional
  else if (peso <= 10) fatorPeso = 1.40 + ((peso - 3) * 0.15); // +15% por kg adicional
  else fatorPeso = 2.45 + ((peso - 10) * 0.10); // +10% por kg adicional
  
  // Cálculo de peso cubado
  const { height, width, length } = packageDimensions;
  const pesoCubado = (height * width * length) / 6000; // Fórmula dos Correios
  const pesoFinal = Math.max(peso, pesoCubado); // Usar o maior
  
  // Fator de volume (se peso cubado > peso real)
  const fatorVolume = pesoFinal > peso ? 1 + ((pesoFinal - peso) * 0.10) : 1;
  
  // Cálculo final
  const precoPAC = (precoBase.pac * fatorPeso * fatorVolume);
  const precoSEDEX = (precoBase.sedex * fatorPeso * fatorVolume);
  
  return {
    pac: {
      preco: Math.max(precoPAC, 10), // Mínimo R$ 10
      prazo: precoBase.prazo_pac,
      regiao: regiaoDestino
    },
    sedex: {
      preco: Math.max(precoSEDEX, 18), // Mínimo R$ 18
      prazo: precoBase.prazo_sedex,
      regiao: regiaoDestino
    }
  };
}

router.post('/calculate-shipping', async (req, res) => {
  try {
    const { cep, packageDimensions } = req.body;
    const cleanCep = cep.replace(/\D/g, '');
    
    if (cleanCep.length !== 8) {
      return res.status(400).json({ error: 'CEP inválido' });
    }

    console.log('📦 Calculando frete:', {
      from: CEP_ORIGEM,
      to: cleanCep,
      package: packageDimensions
    });

    // Calcular frete realista
    const frete = calcularFreteRealista(CEP_ORIGEM, cleanCep, packageDimensions);
    
    console.log(`📍 ${identificarRegiao(CEP_ORIGEM)} → ${frete.pac.regiao}`);
    console.log(`💰 PAC: R$ ${frete.pac.preco.toFixed(2)} (${frete.pac.prazo} dias)`);
    console.log(`⚡ SEDEX: R$ ${frete.sedex.preco.toFixed(2)} (${frete.sedex.prazo} dias)`);

    const options = [
      {
        id: 1,
        name: 'PAC',
        company: 'Correios',
        price: parseFloat(frete.pac.preco.toFixed(2)),
        deliveryTime: frete.pac.prazo,
        logo: 'https://melhorenvio.com.br/images/shipping-companies/correios.png'
      },
      {
        id: 2,
        name: 'SEDEX',
        company: 'Correios',
        price: parseFloat(frete.sedex.preco.toFixed(2)),
        deliveryTime: frete.sedex.prazo,
        logo: 'https://melhorenvio.com.br/images/shipping-companies/correios.png'
      }
    ];

    return res.json(options);

  } catch (error) {
    console.error('❌ Erro:', error.message);
    res.status(500).json({ error: 'Erro ao calcular frete' });
  }
});

// Rota para consultar CEP (bonus)
router.get('/cep/:cep', async (req, res) => {
  try {
    const { cep } = req.params;
    const cleanCep = cep.replace(/\D/g, '');
    
    if (cleanCep.length !== 8) {
      return res.status(400).json({ error: 'CEP inválido' });
    }

    const response = await axios.get(`https://viacep.com.br/ws/${cleanCep}/json/`);
    
    if (response.data.erro) {
      return res.status(404).json({ error: 'CEP não encontrado' });
    }

    res.json({
      cep: response.data.cep,
      logradouro: response.data.logradouro,
      complemento: response.data.complemento,
      bairro: response.data.bairro,
      localidade: response.data.localidade,
      uf: response.data.uf,
      regiao: identificarRegiao(cleanCep)
    });

  } catch (error) {
    res.status(500).json({ error: 'Erro ao consultar CEP' });
  }
});

module.exports = router;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Box } from '@mui/material';
import Grid from '@mui/material/Grid2'; // Grid2 é a versão mais recente
import CardProduct from '../components/CardProduct';
import Navbar from '../Navbar/Navbar';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/products");
        setProducts(Array.isArray(res.data) ? res.data : []);
        console.log("Produtos recebidos:", res.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
        setProducts([]);
      }
    };

    fetchProdutos();
  }, []);

  return (
    <Box 
      sx={{ 
        minHeight: '100vh',
        minWidth: '100vw',
        background: 'linear-gradient(to bottom, #FFF5F9, #FFE8F5)',
      }}
    >
      <Navbar />
      
      <Container 
        maxWidth="xl" 
        sx={{ 
          paddingTop: 4,
          paddingBottom: 4,
        }}
      >
        {/* Título da Página */}
        <Box sx={{ textAlign: 'center', marginBottom: 4 }}>
          <h1 
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              background: 'linear-gradient(90deg, #FC00FF, #FD7CFF)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '8px',
            }}
          >
            Nossos Produtos
          </h1>
          <p style={{ color: '#7C4A40', fontSize: '1.1rem' }}>
            Confira nossa coleção exclusiva
          </p>
        </Box>

        {/* Grid de Produtos */}
        <Grid 
          container 
          spacing={3}
          sx={{
            justifyContent: products.length < 4 ? 'center' : 'flex-start',
          }}
        >
          {products.map((product) => (
            <Grid 
              xs={12}      // 1 coluna em mobile muito pequeno
              sm={6}       // 2 colunas em mobile/tablet pequeno
              md={4}       // 3 colunas em tablet
              lg={3}       // 4 colunas em desktop
              xl={3}       // 4 colunas em telas grandes
              key={product._id || product.id}
            >
              <CardProduct
                id={product._id || product.id}
                image={`http://localhost:5000${product.imagem}`}
                title={product.nome}
                price={product.preco}
                description={product.descricao}
                qtdPequeno={product.qtdPequeno}
                qtdMedio={product.qtdMedio}
                qtdGrande={product.qtdGrande}
                qtdGGrande={product.qtdGGrande}
              />
            </Grid>
          ))}
        </Grid>

        {/* Mensagem quando não há produtos */}
        {products.length === 0 && (
          <Box 
            sx={{ 
              textAlign: 'center', 
              paddingY: 8,
            }}
          >
            <svg 
              style={{ 
                width: '120px', 
                height: '120px', 
                color: '#E0E0E0',
                marginBottom: '16px',
              }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" 
              />
            </svg>
            <h2 style={{ color: '#999', fontSize: '1.5rem' }}>
              Nenhum produto disponível no momento
            </h2>
            <p style={{ color: '#CCC', marginTop: '8px' }}>
              Volte em breve para conferir novidades!
            </p>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Home;
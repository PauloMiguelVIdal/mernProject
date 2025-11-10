import * as React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import InventoryIcon from "@mui/icons-material/Inventory";

export default function AccordionDescription({
  id,
  nome,
  preco,
  imagem,
  description,
  qtdPequeno,
  qtdMedio,
  qtdGrande,
  qtdGGrande,
}) {
  const navigate = useNavigate();
  const [quantidadeTamSel, setQuantidade] = useState(1);
  const [tamSelecionado, setTamSelecionado] = useState("P");

  const handleAddToCart = () => {
    // Verificar se está logado
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      alert("⚠️ Faça login para adicionar produtos ao carrinho");
      navigate("/login");
      return;
    }

    // Verificar estoque disponível
    const qtdAtual =
      tamSelecionado === "P"
        ? qtdPequeno
        : tamSelecionado === "M"
        ? qtdMedio
        : tamSelecionado === "G"
        ? qtdGrande
        : qtdGGrande;

    if (qtdAtual < 1) {
      alert("❌ Produto sem estoque neste tamanho!");
      return;
    }

    if (quantidadeTamSel > qtdAtual) {
      alert(`❌ Quantidade indisponível! Estoque: ${qtdAtual} unidades`);
      return;
    }

    // Buscar carrinho atual
    let cart = [];
    try {
      cart = JSON.parse(localStorage.getItem("cart") || "[]");
    } catch (e) {
      console.error("Erro ao ler carrinho:", e);
      cart = [];
    }

    // Verificar se item já existe no carrinho (mesmo produto e tamanho)
    const existingItemIndex = cart.findIndex(
      (item) => item.id === id && item.size === tamSelecionado
    );

    if (existingItemIndex >= 0) {
      // Atualizar quantidade do item existente
      const newQuantity = cart[existingItemIndex].quantity + quantidadeTamSel;
      
      if (newQuantity > qtdAtual) {
        alert(`❌ Quantidade total excede o estoque disponível (${qtdAtual} unidades)`);
        return;
      }
      
      cart[existingItemIndex].quantity = newQuantity;
      cart[existingItemIndex].preco = Number(preco); // Garantir que seja número
    } else {
      // Adicionar novo item ao carrinho
      cart.push({
        id,
        nome,
        preco: Number(preco), // Garantir que seja número
        imagem,
        size: tamSelecionado,
        quantity: quantidadeTamSel,
      });
    }

    // Salvar carrinho atualizado
    localStorage.setItem("cart", JSON.stringify(cart));

    // Disparar evento para atualizar badge do carrinho
    window.dispatchEvent(new Event("cartUpdated"));

    // Feedback visual
    alert(`✅ ${quantidadeTamSel}x ${nome} (${tamSelecionado}) (${preco}) adicionado ao carrinho!`);

    // Resetar quantidade
    setQuantidade(1);
  };

  const AumentarQuantidade = () => {
    const qtdMax =
      tamSelecionado === "P"
        ? qtdPequeno
        : tamSelecionado === "M"
        ? qtdMedio
        : tamSelecionado === "G"
        ? qtdGrande
        : qtdGGrande;

    if (quantidadeTamSel >= qtdMax) {
      return;
    }

    setQuantidade(quantidadeTamSel + 1);
  };

  const DiminuirQuantidade = () => {
    if (quantidadeTamSel <= 1) {
      return;
    }
    setQuantidade(quantidadeTamSel - 1);
  };

  const qtdAtual =
    tamSelecionado === "P"
      ? qtdPequeno
      : tamSelecionado === "M"
      ? qtdMedio
      : tamSelecionado === "G"
      ? qtdGrande
      : qtdGGrande;

  return (
    <Accordion
      elevation={0}
      sx={{
        borderRadius: 2,
        background: "linear-gradient(135deg, #fce4ec 0%, #f3e5f5 100%)",
        boxShadow: "0 4px 12px rgba(236, 64, 122, 0.2)",
        border: "2px solid #f8bbd0",
        "&:before": { display: "none" },
        overflow: "hidden",
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ color: "white", fontSize: 28 }} />}
        aria-controls="panel2-content"
        id="panel2-header"
        sx={{
          borderRadius: "8px 8px 0 0",
          background: "linear-gradient(135deg, #ec407a, #ab47bc)",
          border: "none",
          color: "white",
          minHeight: "56px",
          "&:hover": { 
            background: "linear-gradient(135deg, #d81b60, #8e24aa)",
          },
          "& .MuiAccordionSummary-content": {
            margin: "12px 0",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            width: "100%",
          }}
        >
          <ShoppingCartIcon sx={{ fontSize: 24 }} />
          <Typography
            component="span"
            sx={{
              fontWeight: "bold",
              letterSpacing: 1,
              fontSize: "1.1rem",
            }}
          >
            Detalhes e Compra
          </Typography>
        </Box>
      </AccordionSummary>

      <AccordionDetails
        sx={{
          borderRadius: "0 0 8px 8px",
          border: "none",
          padding: 3,
          backgroundColor: "white",
          fontSize: "0.95rem",
          fontWeight: 400,
        }}
      >
        {/* Descrição */}
        {description && (
          <Typography
            component="div"
            sx={{
              marginBottom: 3,
              padding: 2,
              backgroundColor: "#fce4ec",
              borderRadius: 2,
              border: "1px solid #f8bbd0",
              lineHeight: 1.6,
              color: "#424242",
            }}
          >
            {description}
          </Typography>
        )}

        {/* Seleção de Tamanhos */}
        <Box sx={{ marginBottom: 3 }}>
          <Typography
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontSize: "1rem",
              color: "#424242",
            }}
          >
            Selecione o Tamanho:
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 1.5,
            }}
          >
            {[
              { size: "P", qty: qtdPequeno },
              { size: "M", qty: qtdMedio },
              { size: "G", qty: qtdGrande },
              { size: "GG", qty: qtdGGrande },
            ].map(({ size, qty }) => (
              <Button
                key={size}
                onClick={() => {
                  setTamSelecionado(size);
                  setQuantidade(1);
                }}
                disabled={qty < 1}
                sx={{
                  color: tamSelecionado === size ? "white" : "#ec407a",
                  minWidth: "60px",
                  height: "60px",
                  borderRadius: "12px",
                  border: tamSelecionado === size 
                    ? "3px solid #ec407a" 
                    : "2px solid #f8bbd0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: tamSelecionado === size 
                    ? "#ec407a" 
                    : "white",
                  padding: 1,
                  fontWeight: "bold",
                  fontSize: "1.2rem",
                  transition: "all 0.2s ease",
                  "&:hover": { 
                    backgroundColor: tamSelecionado === size ? "#d81b60" : "#fce4ec",
                    transform: qty > 0 ? "scale(1.05)" : "none",
                  },
                  "&:disabled": {
                    opacity: 0.4,
                    cursor: "not-allowed",
                  }
                }}
              >
                {size}
                <Typography sx={{ fontSize: "0.7rem", opacity: 0.9, mt: 0.5 }}>
                  ({qty})
                </Typography>
              </Button>
            ))}
          </Box>
        </Box>

        {/* Estoque Disponível */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            marginBottom: 3,
            padding: 2,
            backgroundColor: "#f3e5f5",
            borderRadius: 2,
            border: "1px solid #e1bee7",
            justifyContent: "center",
          }}
        >
          <InventoryIcon sx={{ fontSize: 24, color: "#ab47bc" }} />
          <Typography sx={{ fontWeight: "bold", fontSize: "1rem", color: "#424242" }}>
            Estoque Disponível:
          </Typography>
          <Box
            sx={{
              backgroundColor: qtdAtual > 5 ? "#4CAF50" : qtdAtual > 0 ? "#FF9800" : "#F44336",
              color: "white",
              padding: "4px 12px",
              borderRadius: "20px",
              fontWeight: "bold",
              fontSize: "1.1rem",
            }}
          >
            {qtdAtual} unidades
          </Box>
        </Box>

        {/* Controles de Quantidade e Adicionar ao Carrinho */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          {/* Controle de Quantidade */}
          <Box 
            display="flex" 
            alignItems="center"
            sx={{
              backgroundColor: "#fce4ec",
              borderRadius: 3,
              padding: 1,
              border: "2px solid #f8bbd0",
            }}
          >
            <IconButton
              onClick={DiminuirQuantidade}
              disabled={quantidadeTamSel === 1}
              sx={{
                width: "48px",
                height: "48px",
                backgroundColor: "white",
                border: "2px solid #f8bbd0",
                color: "#ec407a",
                "&:hover": { 
                  backgroundColor: "#fce4ec",
                  borderColor: "#ec407a",
                },
                "&:disabled": {
                  opacity: 0.3,
                  color: "#ec407a",
                },
              }}
            >
              <RemoveIcon sx={{ fontSize: 24 }} />
            </IconButton>

            <Box
              sx={{
                mx: 2,
                width: "50px",
                height: "50px",
                borderRadius: 2,
                border: "2px solid #ec407a",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
              }}
            >
              <Typography
                color="#ec407a"
                fontWeight="bold"
                fontSize={24}
              >
                {quantidadeTamSel}
              </Typography>
            </Box>

            <IconButton
              onClick={AumentarQuantidade}
              disabled={quantidadeTamSel >= qtdAtual}
              sx={{
                width: "48px",
                height: "48px",
                backgroundColor: "white",
                border: "2px solid #f8bbd0",
                color: "#ec407a",
                "&:hover": { 
                  backgroundColor: "#fce4ec",
                  borderColor: "#ec407a",
                },
                "&:disabled": {
                  opacity: 0.3,
                  color: "#ec407a",
                },
              }}
            >
              <AddIcon sx={{ fontSize: 24 }} />
            </IconButton>
          </Box>

          {/* Botão Adicionar ao Carrinho */}
          <Button
            variant="contained"
            onClick={handleAddToCart}
            disabled={qtdAtual < 1}
            startIcon={<AddShoppingCartIcon />}
            sx={{
              background: "linear-gradient(135deg, #ec407a, #ab47bc)",
              color: "white",
              height: "56px",
              paddingX: 4,
              fontWeight: "bold",
              fontSize: "1rem",
              borderRadius: 3,
              boxShadow: "0 4px 12px rgba(236, 64, 122, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #d81b60, #8e24aa)",
                transform: "translateY(-2px)",
                boxShadow: "0 6px 16px rgba(236, 64, 122, 0.4)",
              },
              "&:disabled": {
                background: "#e0e0e0",
                color: "#9e9e9e",
              }
            }}
          >
            {qtdAtual < 1 ? "Sem Estoque" : "Adicionar ao Carrinho"}
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
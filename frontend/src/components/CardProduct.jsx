import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AccordionDescription from "./AccordionDescription";
import { Box } from "@mui/material";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

export default function CardProduct({
  id,
  title,
  price,
  description,
  image,
  qtdPequeno,
  qtdMedio,
  qtdGrande,
  qtdGGrande,
}) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: "100%",
        maxWidth: "350px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(135deg, #FFFFFF 0%, #FFF5F9 50%, #FFE8F5 100%)",
        borderRadius: 3,
        boxShadow: "0 4px 16px rgba(236, 64, 122, 0.12)",
        transition: "all 0.3s ease",
        position: "relative",
        overflow: "hidden",
        border: "2px solid transparent",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 8px 24px rgba(236, 64, 122, 0.2)",
          border: "2px solid #ec407a",
        },
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #ec407a, #ab47bc, #ec407a)",
        },
      }}
    >
      {/* Badge de Destaque */}
      <Box
        sx={{
          position: "absolute",
          top: 12,
          right: 12,
          backgroundColor: "#ec407a",
          color: "white",
          padding: "4px 10px",
          borderRadius: "16px",
          fontSize: "0.7rem",
          fontWeight: "bold",
          zIndex: 1,
          boxShadow: "0 2px 6px rgba(236, 64, 122, 0.3)",
          display: "flex",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <LocalOfferIcon sx={{ fontSize: 12 }} />
        Novo
      </Box>

      {/* Imagem do Produto */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{
          height: 180,
          objectFit: "contain",
          padding: 2,
          backgroundColor: "white",
          borderRadius: "12px 12px 0 0",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      />

      <CardContent sx={{ flexGrow: 1, padding: 2, paddingBottom: 2 }}>
        {/* Nome do Produto */}
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          title={title}
          sx={{
            color: "#424242",
            fontWeight: "bold",
            fontSize: "1.1rem",
            marginBottom: 1.5,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            minHeight: "3rem",
            lineHeight: 1.3,
          }}
        >
          {title}
        </Typography>

        {/* Preço */}
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "center",
            marginBottom: 2,
            padding: 1.5,
            background: "linear-gradient(135deg, #ec407a, #ab47bc)",
            borderRadius: 2,
            boxShadow: "0 3px 10px rgba(236, 64, 122, 0.18)",
          }}
        >
          <Typography
            sx={{
              fontSize: "0.85rem",
              color: "white",
              fontWeight: "600",
              marginRight: 0.5,
            }}
          >
            R$
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "white",
              fontWeight: "bold",
            }}
          >
            {typeof price === 'number' ? price.toFixed(2) : price}
          </Typography>
        </Box>

        {/* Accordion de Detalhes - PASSANDO TODAS AS PROPS NECESSÁRIAS */}
        <AccordionDescription
          id={id}
          nome={title}
          preco={price}
          imagem={image}
          description={description}
          qtdPequeno={qtdPequeno}
          qtdMedio={qtdMedio}
          qtdGrande={qtdGrande}
          qtdGGrande={qtdGGrande}
        />
      </CardContent>
    </Card>
  );
}
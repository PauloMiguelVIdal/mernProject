import React, { useState } from "react";
import {
    Container,
    TextField,
    Button,
    Typography,
    Box,
    Grid,
} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setLoading(true);

        const credentials = {
            username: email, // pode ser email ou username
            password,
        };

        try {
            const response = await fetch("http://localhost:5000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Erro ao fazer login");
            }

            // Salvar token e dados do usuário
            localStorage.setItem("authToken", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            setSuccess("Login realizado com sucesso! ✅");

            setTimeout(() => {
                navigate("/");
            }, 1500);
        } catch (err) {
            console.error("Erro no login:", err);
            setError(err.message || "Falha no login. Verifique suas credenciais.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                background: "linear-gradient(135deg, #fce4ec, #f3e5f5, #fce4ec)",
            }}
        >
            <Navbar />
            <Box
                sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 2,
                    py: { xs: 4, sm: 8 },
                }}
            >
                <Container maxWidth="sm">
                    <Box
                        sx={{
                            backgroundColor: "white",
                            borderRadius: 4,
                            p: { xs: 3, sm: 5 },
                            boxShadow: "0 8px 32px rgba(236, 64, 122, 0.2)",
                            border: "2px solid #f8bbd0",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        {/* Ícone de Login */}
                        <Box
                            sx={{
                                backgroundColor: "#ec407a",
                                borderRadius: "50%",
                                p: 2,
                                mb: 2,
                                boxShadow: "0 4px 12px rgba(236, 64, 122, 0.3)",
                            }}
                        >
                            <svg
                                style={{ width: "40px", height: "40px" }}
                                fill="white"
                                viewBox="0 0 24 24"
                            >
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </Box>

                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={{
                                background: "linear-gradient(135deg, #ec407a, #ab47bc)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontSize: { xs: "1.8rem", sm: "2.125rem" },
                                textAlign: "center",
                                mb: 1,
                            }}
                        >
                            Login
                        </Typography>

                        <Typography
                            sx={{
                                color: "#9c27b0",
                                fontSize: "0.9rem",
                                mb: 3,
                            }}
                        >
                            Bem-vindo de volta!
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, width: "100%" }}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email ou Usuário"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        sx={inputStyles}
                                        disabled={loading}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="password"
                                        label="Senha"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        sx={inputStyles}
                                        disabled={loading}
                                    />
                                </Grid>
                            </Grid>

                            {error && (
                                <Typography 
                                    sx={{ 
                                        mt: 2, 
                                        fontSize: "0.9rem",
                                        color: "#d32f2f",
                                        backgroundColor: "#ffebee",
                                        padding: "12px",
                                        borderRadius: "12px",
                                        textAlign: "center",
                                        border: "1px solid #ffcdd2",
                                    }}
                                >
                                    ❌ {error}
                                </Typography>
                            )}
                            {success && (
                                <Typography 
                                    sx={{ 
                                        mt: 2, 
                                        fontSize: "0.9rem",
                                        color: "#2e7d32",
                                        backgroundColor: "#e8f5e9",
                                        padding: "12px",
                                        borderRadius: "12px",
                                        textAlign: "center",
                                        border: "1px solid #c8e6c9",
                                    }}
                                >
                                    {success}
                                </Typography>
                            )}

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                disabled={loading}
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    background: "linear-gradient(135deg, #ec407a, #ab47bc)",
                                    fontWeight: "bold",
                                    color: "#fff",
                                    fontSize: { xs: "0.9rem", sm: "1rem" },
                                    py: 1.5,
                                    borderRadius: 2,
                                    boxShadow: "0 4px 12px rgba(236, 64, 122, 0.3)",
                                    "&:hover": {
                                        background: "linear-gradient(135deg, #d81b60, #8e24aa)",
                                        boxShadow: "0 6px 16px rgba(236, 64, 122, 0.4)",
                                    },
                                    "&:disabled": {
                                        background: "#f8bbd0",
                                        color: "#fff",
                                    },
                                }}
                            >
                                {loading ? "Entrando..." : "Entrar"}
                            </Button>

                            <Button
                                fullWidth
                                variant="outlined"
                                component={RouterLink}
                                to="/cadastrar"
                                disabled={loading}
                                sx={{
                                    borderColor: "#ec407a",
                                    color: "#ec407a",
                                    fontWeight: "bold",
                                    fontSize: { xs: "0.9rem", sm: "1rem" },
                                    py: 1.5,
                                    borderRadius: 2,
                                    borderWidth: 2,
                                    "&:hover": {
                                        backgroundColor: "#ec407a",
                                        color: "#fff",
                                        borderColor: "#ec407a",
                                        borderWidth: 2,
                                    },
                                }}
                            >
                                Criar Conta
                            </Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}

const inputStyles = {
    "& .MuiInputLabel-root": {
        color: "#9c27b0",
    },
    "& .MuiInputLabel-root.Mui-focused": {
        color: "#ec407a",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#f8bbd0",
            borderWidth: 2,
        },
        "&:hover fieldset": {
            borderColor: "#ec407a",
            borderWidth: 2,
        },
        "&.Mui-focused fieldset": {
            borderColor: "#ec407a",
            borderWidth: 2,
        },
    },
    "& .MuiOutlinedInput-input": {
        color: "#424242",
    },
};

export default Login;
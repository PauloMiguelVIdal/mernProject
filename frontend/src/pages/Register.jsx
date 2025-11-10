import React, { useState } from "react";
import {
    Button,
    Container,
    TextField,
    Typography,
    Box,
    Grid,
} from "@mui/material";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";

function Register() {
    const [username, setUsername] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastName, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const registerUser = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);
        setLoading(true);

        const user = {
            email,
            username,
            password,
            name: {
                firstname,
                lastname: lastName,
            },
        };

        try {
            const response = await fetch("http://localhost:5000/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Erro ao registrar");
            }

            // Salvar token no localStorage
            localStorage.setItem("authToken", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));

            setSuccess("Usuário registrado com sucesso! ✅");
            
            setTimeout(() => {
                navigate("/");
            }, 1500);
        } catch (err) {
            console.error("Erro ao registrar:", err);
            setError(err.message || "Erro ao registrar. Tente novamente.");
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
                            boxShadow: "0 8px 32px rgba(171, 71, 188, 0.2)",
                            border: "2px solid #e1bee7",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "100%",
                        }}
                    >
                        {/* Ícone de Cadastro */}
                        <Box
                            sx={{
                                backgroundColor: "#ab47bc",
                                borderRadius: "50%",
                                p: 2,
                                mb: 2,
                                boxShadow: "0 4px 12px rgba(171, 71, 188, 0.3)",
                            }}
                        >
                            <svg
                                style={{ width: "40px", height: "40px" }}
                                fill="white"
                                viewBox="0 0 24 24"
                            >
                                <path d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                        </Box>

                        <Typography
                            variant="h4"
                            fontWeight="bold"
                            sx={{
                                background: "linear-gradient(135deg, #ab47bc, #ec407a)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontSize: { xs: "1.8rem", sm: "2.125rem" },
                                textAlign: "center",
                                mb: 1,
                            }}
                        >
                            Cadastrar-se
                        </Typography>

                        <Typography
                            sx={{
                                color: "#9c27b0",
                                fontSize: "0.9rem",
                                mb: 3,
                            }}
                        >
                            Crie sua conta gratuitamente
                        </Typography>

                        <Box component="form" onSubmit={registerUser} sx={{ mt: 2, width: "100%" }}>
                            <Grid container spacing={2} justifyContent="center">
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="firstname"
                                        label="Nome"
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                        sx={inputStyles}
                                        disabled={loading}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="lastname"
                                        label="Sobrenome"
                                        value={lastName}
                                        onChange={(e) => setLastname(e.target.value)}
                                        sx={inputStyles}
                                        disabled={loading}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="username"
                                        label="Usuário"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        sx={inputStyles}
                                        disabled={loading}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        type="email"
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
                                        helperText="Mínimo 6 caracteres"
                                        FormHelperTextProps={{
                                            sx: { color: "#9c27b0" }
                                        }}
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
                                    background: "linear-gradient(135deg, #ab47bc, #ec407a)",
                                    fontWeight: "bold",
                                    color: "#fff",
                                    fontSize: { xs: "0.9rem", sm: "1rem" },
                                    py: 1.5,
                                    borderRadius: 2,
                                    boxShadow: "0 4px 12px rgba(171, 71, 188, 0.3)",
                                    "&:hover": {
                                        background: "linear-gradient(135deg, #8e24aa, #d81b60)",
                                        boxShadow: "0 6px 16px rgba(171, 71, 188, 0.4)",
                                    },
                                    "&:disabled": {
                                        background: "#e1bee7",
                                        color: "#fff",
                                    },
                                }}
                            >
                                {loading ? "Registrando..." : "Registrar"}
                            </Button>

                            <Button
                                fullWidth
                                variant="outlined"
                                component={RouterLink}
                                to="/Login"
                                disabled={loading}
                                sx={{
                                    borderColor: "#ab47bc",
                                    color: "#ab47bc",
                                    fontWeight: "bold",
                                    fontSize: { xs: "0.9rem", sm: "1rem" },
                                    py: 1.5,
                                    borderRadius: 2,
                                    borderWidth: 2,
                                    "&:hover": {
                                        backgroundColor: "#ab47bc",
                                        color: "#fff",
                                        borderColor: "#ab47bc",
                                        borderWidth: 2,
                                    },
                                }}
                            >
                                Voltar ao Login
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
        color: "#ab47bc",
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "#e1bee7",
            borderWidth: 2,
        },
        "&:hover fieldset": {
            borderColor: "#ab47bc",
            borderWidth: 2,
        },
        "&.Mui-focused fieldset": {
            borderColor: "#ab47bc",
            borderWidth: 2,
        },
    },
    "& .MuiOutlinedInput-input": {
        color: "#424242",
    },
};

export default Register;
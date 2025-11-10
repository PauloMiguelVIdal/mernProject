import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, useLocation } from "react-router-dom";

const drawerWidth = 240;

const navItems = [
  { label: "Produtos", path: "/" },
  { label: "Registrar Produto", path: "/registrar-produto" }
];

function Navbar(props) {
  const { window: windowFn } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Função para carregar dados do usuário
  const loadUser = () => {
    try {
      const authToken = localStorage.getItem("authToken");
      const userData = localStorage.getItem("user");
      
      if (authToken && userData) {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } else {
        setUser(null);
      }
    } catch (e) {
      console.error("Erro ao carregar usuário:", e);
      setUser(null);
    }
  };

  // Função para atualizar contador do carrinho
  const updateCartCount = () => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart") || "[]");
      const total = cart.reduce((sum, item) => sum + item.quantity, 0);
      setCartCount(total);
    } catch (e) {
      console.error("Erro ao carregar carrinho:", e);
      setCartCount(0);
    }
  };

  useEffect(() => {
    loadUser();
    updateCartCount();

    // Listeners para atualizar em tempo real
    const handleStorageChange = () => {
      loadUser();
      updateCartCount();
    };

    const handleCartUpdate = () => {
      updateCartCount();
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("cartUpdated", handleCartUpdate);
    window.addEventListener("userLoggedIn", loadUser);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("cartUpdated", handleCartUpdate);
      window.removeEventListener("userLoggedIn", loadUser);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prev) => !prev);
  };

  const handleNavigate = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const handleCartClick = () => {
    navigate("/carrinho");
  };

  const handleLogout = () => {
    if (window.confirm("Deseja realmente sair?")) {
      localStorage.removeItem("authToken");
      localStorage.removeItem("user");
      localStorage.removeItem("cart");
      setUser(null);
      setCartCount(0);
      navigate("/login");
    }
  };

  const container =
    windowFn !== undefined ? () => windowFn().document.body : undefined;

  const drawer = (
    <Box sx={{ textAlign: "center", paddingTop: 2 }}>
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          mb: 2,
          background: "linear-gradient(135deg, #ec407a, #ab47bc)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Rocheli
      </Typography>
      <Divider sx={{ borderColor: "#f8bbd0" }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{
                textAlign: "center",
                "&:hover": {
                  backgroundColor: "#fce4ec",
                },
              }}
              onClick={() => handleNavigate(item.path)}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  color: "#424242",
                  fontWeight: "500",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Botões de login/cadastro ou saudação */}
        {!user ? (
          <>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#fce4ec" },
                }}
                onClick={() => handleNavigate("/login")}
              >
                <ListItemText
                  primary="Login"
                  primaryTypographyProps={{
                    color: "#ec407a",
                    fontWeight: "bold",
                  }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#fce4ec" },
                }}
                onClick={() => handleNavigate("/register")}
              >
                <ListItemText
                  primary="Cadastrar-se"
                  primaryTypographyProps={{
                    color: "#ab47bc",
                    fontWeight: "bold",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </>
        ) : (
          <>
            <ListItem disablePadding>
              <ListItemText
                primary={`Olá, ${user.username || user.name?.firstname || "Usuário"}`}
                sx={{
                  textAlign: "center",
                  fontWeight: "bold",
                  color: "#ec407a",
                  my: 1,
                }}
              />
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  "&:hover": { backgroundColor: "#fce4ec" },
                }}
                onClick={handleLogout}
              >
                <LogoutIcon sx={{ mr: 1, color: "#d32f2f" }} />
                <ListItemText
                  primary="Sair"
                  primaryTypographyProps={{
                    color: "#d32f2f",
                    fontWeight: "bold",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </>
        )}

        {/* Carrinho */}
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              textAlign: "center",
              "&:hover": { backgroundColor: "#fce4ec" },
            }}
            onClick={handleCartClick}
          >
            <ShoppingCartIcon sx={{ mr: 1, color: "#ec407a" }} />
            <ListItemText
              primary={`Carrinho (${cartCount})`}
              primaryTypographyProps={{
                fontWeight: "bold",
                color: "#ec407a",
              }}
            />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }} className="navbar">
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: "linear-gradient(135deg, #ec407a, #ab47bc, #ec407a)",
          boxShadow: "0 4px 20px rgba(236, 64, 122, 0.4)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Ícone do menu hambúrguer e título da loja */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                letterSpacing: 1,
                color: "white",
              }}
            >
              Rocheli
            </Typography>
          </Box>

          {/* Seção de botões e usuário */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Itens só para desktop */}
            <Box
              sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  sx={{
                    color: "#fff",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.2)",
                    },
                  }}
                  onClick={() => handleNavigate(item.path)}
                >
                  {item.label}
                </Button>
              ))}
              {!user ? (
                <>
                  <Button
                    onClick={() => navigate("/login")}
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      "&:hover": {
                        backgroundColor: "rgba(255,255,255,0.2)",
                      },
                    }}
                  >
                    Login
                  </Button>
                  <Button
                    onClick={() => navigate("/register")}
                    sx={{
                      ml: 1,
                      background: "white",
                      color: "#ec407a",
                      fontWeight: "bold",
                      "&:hover": {
                        background: "#fce4ec",
                      },
                    }}
                  >
                    Cadastrar-se
                  </Button>
                </>
              ) : (
                <Button
                  onClick={handleLogout}
                  startIcon={<LogoutIcon />}
                  sx={{
                    ml: 1,
                    color: "#fff",
                    fontWeight: "bold",
                    border: "1px solid white",
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  Sair
                </Button>
              )}
            </Box>

            {/* Carrinho (visível sempre, exceto na rota /cart) */}
            {location.pathname !== "/cart" && (
              <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
                <IconButton
                  color="inherit"
                  onClick={handleCartClick}
                  sx={{
                    "&:hover": {
                      backgroundColor: "rgba(255,255,255,0.2)",
                    },
                  }}
                >
                  <ShoppingCartIcon />
                </IconButton>
                {cartCount > 0 && (
                  <Box
                    sx={{
                      backgroundColor: "white",
                      color: "#ec407a",
                      borderRadius: "50%",
                      padding: "0.3em 0.6em",
                      fontSize: "0.8rem",
                      ml: -1.5,
                      mt: -0.5,
                      fontWeight: "bold",
                    }}
                  >
                    {cartCount}
                  </Box>
                )}
              </Box>
            )}

            {/* Usuário (sempre visível, alinhado à direita) */}
            {user && (
              <Box
                sx={{
                  display: { xs: "none", sm: "flex" },
                  alignItems: "center",
                  ml: 2,
                }}
              >
                <PersonIcon sx={{ color: "white" }} />
                <Typography
                  variant="body1"
                  sx={{
                    ml: 1,
                    fontWeight: "bold",
                    color: "white",
                    fontSize: "0.95rem",
                  }}
                >
                  {user.username || user.name?.firstname || "Usuário"}
                </Typography>
              </Box>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer mobile */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      {/* Espaço abaixo do AppBar para conteúdo da página */}
      <Box component="main" sx={{ p: 0 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
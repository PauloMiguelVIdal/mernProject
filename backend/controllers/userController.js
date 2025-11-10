const User = require("../models/user");
const jwt = require("jsonwebtoken");

// ================================
// 📝 REGISTRAR USUÁRIO
// ================================
const registerUser = async (req, res) => {
  try {
    const { username, email, password, name } = req.body;

    // Validações básicas
    if (!username || !email || !password || !name?.firstname || !name?.lastname) {
      return res.status(400).json({ 
        message: "Todos os campos são obrigatórios" 
      });
    }

    // Verificar se usuário já existe
    const userExists = await User.findOne({ 
      $or: [{ email }, { username }] 
    });

    if (userExists) {
      return res.status(400).json({ 
        message: "Usuário ou email já cadastrado" 
      });
    }

    // Criar usuário
    const user = new User({
      username,
      email,
      password, // será hasheado automaticamente pelo pre-save
      name: {
        firstname: name.firstname,
        lastname: name.lastname,
      },
      cart: {
        products: [],
        total: 0,
      },
    });

    await user.save();

    // Gerar token JWT
    const token = jwt.sign(
      { 
        id: user._id, 
        username: user.username,
        isAdmin: user.isAdmin 
      },
      process.env.JWT_SECRET || "seu_secret_jwt_aqui",
      { expiresIn: "7d" }
    );

    // Retornar dados (sem senha)
    res.status(201).json({
      message: "Usuário registrado com sucesso!",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
      },
    });
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
    res.status(500).json({ 
      message: "Erro ao registrar usuário",
      error: error.message 
    });
  }
};

// ================================
// 🔐 LOGIN
// ================================
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validações
    if (!username || !password) {
      return res.status(400).json({ 
        message: "Username e senha são obrigatórios" 
      });
    }

    // Buscar usuário (pode ser username ou email)
    const user = await User.findOne({
      $or: [{ username }, { email: username }],
    });

    if (!user) {
      return res.status(401).json({ 
        message: "Credenciais inválidas" 
      });
    }

    // Verificar senha
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({ 
        message: "Credenciais inválidas" 
      });
    }

    // Gerar token JWT
    const token = jwt.sign(
      { 
        id: user._id, 
        username: user.username,
        isAdmin: user.isAdmin 
      },
      process.env.JWT_SECRET || "seu_secret_jwt_aqui",
      { expiresIn: "7d" }
    );

    // Retornar dados
    res.json({
      message: "Login realizado com sucesso!",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        name: user.name,
        isAdmin: user.isAdmin,
        cart: user.cart,
      },
    });
  } catch (error) {
    console.error("Erro no login:", error);
    res.status(500).json({ 
      message: "Erro ao fazer login",
      error: error.message 
    });
  }
};

// ================================
// 👤 BUSCAR PERFIL DO USUÁRIO
// ================================
const getUserProfile = async (req, res) => {
  try {
    // O ID vem do middleware de autenticação
    const user = await User.findById(req.user.id)
      .select("-password") // não retorna a senha
      .populate("cart.products.productId"); // popula os produtos do carrinho

    if (!user) {
      return res.status(404).json({ 
        message: "Usuário não encontrado" 
      });
    }

    res.json(user);
  } catch (error) {
    console.error("Erro ao buscar perfil:", error);
    res.status(500).json({ 
      message: "Erro ao buscar perfil",
      error: error.message 
    });
  }
};

// ================================
// 🛒 ATUALIZAR CARRINHO
// ================================
const updateCart = async (req, res) => {
  try {
    const { products } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ 
        message: "Usuário não encontrado" 
      });
    }

    // Atualizar carrinho
    user.cart.products = products;

    // Calcular total (você pode melhorar isso buscando preços reais)
    user.cart.total = products.reduce((acc, item) => {
      return acc + (item.price * item.quantity || 0);
    }, 0);

    await user.save();

    res.json({
      message: "Carrinho atualizado com sucesso!",
      cart: user.cart,
    });
  } catch (error) {
    console.error("Erro ao atualizar carrinho:", error);
    res.status(500).json({ 
      message: "Erro ao atualizar carrinho",
      error: error.message 
    });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  updateCart,
};
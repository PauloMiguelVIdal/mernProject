const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username é obrigatório"],
      unique: true,
      trim: true,
      minlength: [3, "Username deve ter no mínimo 3 caracteres"],
    },
    email: {
      type: String,
      required: [true, "Email é obrigatório"],
      unique: true,
      lowercase: true,
      trim: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Email inválido",
      ],
    },
    password: {
      type: String,
      required: [true, "Senha é obrigatória"],
      minlength: [6, "Senha deve ter no mínimo 6 caracteres"],
    },
    name: {
      firstname: {
        type: String,
        required: [true, "Nome é obrigatório"],
        trim: true,
      },
      lastname: {
        type: String,
        required: [true, "Sobrenome é obrigatório"],
        trim: true,
      },
    },
    cart: {
      products: [
        {
          productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
          },
          quantity: {
            type: Number,
            default: 1,
          },
          size: {
            type: String,
            enum: ["P", "M", "G", "GG"],
          },
        },
      ],
      total: {
        type: Number,
        default: 0,
      },
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { 
    timestamps: true 
  }
);

// 🔒 Hash da senha antes de salvar
userSchema.pre("save", async function (next) {
  // Só faz hash se a senha foi modificada
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// 🔍 Método para comparar senha
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
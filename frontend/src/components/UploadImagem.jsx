import React, { useState } from "react";

function UploadImagem({ form, setForm, fetchProdutos }) {
  const [imagem, setImagem] = useState(null);
  const [preview, setPreview] = useState(null);
  const [mensagem, setMensagem] = useState("");

  const handleChange = (e) => {
    const arquivo = e.target.files[0];
    setImagem(arquivo);
    setPreview(URL.createObjectURL(arquivo));
  };

  const handleUpload = async () => {
    // Validações
    if (!imagem) {
      setMensagem("❌ Selecione uma imagem!");
      return;
    }

    if (!form.nome || !form.preco) {
      setMensagem("❌ Preencha todos os campos obrigatórios!");
      return;
    }

    const formData = new FormData();
    formData.append("imagem", imagem);
    formData.append("nome", form.nome);
    formData.append("preco", form.preco);
    formData.append("descricao", form.descricao);
    formData.append("qtdPequeno", form.qtdPequeno);
    formData.append("qtdMedio", form.qtdMedio);
    formData.append("qtdGrande", form.qtdGrande);
    formData.append("qtdGGrande", form.qtdGGrande);

    try {
      const resposta = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        body: formData,
      });

      if (!resposta.ok) {
        const textoErro = await resposta.text();
        console.error("Erro do servidor:", textoErro);
        throw new Error(`Erro ${resposta.status}: ${resposta.statusText}`);
      }

      const dados = await resposta.json();
      setMensagem(dados.message || "Produto criado com sucesso ✅");
      console.log("Produto criado:", dados);

      // limpa formulário e preview
      setForm({
        nome: "",
        preco: "",
        descricao: "",
        qtdPequeno: "",
        qtdMedio: "",
        qtdGrande: "",
        qtdGGrande: "",
      });
      setImagem(null);
      setPreview(null);
      fetchProdutos();
    } catch (error) {
      console.error("Erro no upload:", error);
      setMensagem(`Erro no upload ❌: ${error.message}`);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 p-6">
          <h2 className="text-3xl font-bold text-white text-center tracking-wide">
            ✨ Cadastrar Novo Produto
          </h2>
          <p className="text-pink-100 text-center mt-2 text-sm">
            Preencha as informações do produto
          </p>
        </div>

        <div className="p-8">
          {/* Grid de campos principais */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* Nome do produto */}
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Nome do Produto *
              </label>
              <input
                type="text"
                placeholder="Ex: Camiseta Floral"
                value={form.nome}
                onChange={(e) => setForm({ ...form, nome: e.target.value })}
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-200"
                required
              />
            </div>

            {/* Preço */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Preço (R$) *
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold">
                  R$
                </span>
                <input
                  type="number"
                  placeholder="0,00"
                  value={form.preco}
                  onChange={(e) => setForm({ ...form, preco: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-200"
                  step="0.01"
                  required
                />
              </div>
            </div>

            {/* Descrição */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Descrição
              </label>
              <textarea
                placeholder="Descreva seu produto..."
                value={form.descricao}
                onChange={(e) => setForm({ ...form, descricao: e.target.value })}
                className="w-full px-4 py-3 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-200 resize-none"
                rows="3"
              />
            </div>
          </div>

          {/* Seção de tamanhos */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              📏 Estoque por Tamanho *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Tamanho P */}
              <div className="relative">
                <div className="absolute -top-2 left-3 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  P
                </div>
                <input
                  type="number"
                  placeholder="Qtd."
                  value={form.qtdPequeno}
                  onChange={(e) => setForm({ ...form, qtdPequeno: e.target.value })}
                  className="w-full px-4 py-3 pt-5 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-200"
                  min="0"
                />
              </div>

              {/* Tamanho M */}
              <div className="relative">
                <div className="absolute -top-2 left-3 bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  M
                </div>
                <input
                  type="number"
                  placeholder="Qtd."
                  value={form.qtdMedio}
                  onChange={(e) => setForm({ ...form, qtdMedio: e.target.value })}
                  className="w-full px-4 py-3 pt-5 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                  min="0"
                />
              </div>

              {/* Tamanho G */}
              <div className="relative">
                <div className="absolute -top-2 left-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  G
                </div>
                <input
                  type="number"
                  placeholder="Qtd."
                  value={form.qtdGrande}
                  onChange={(e) => setForm({ ...form, qtdGrande: e.target.value })}
                  className="w-full px-4 py-3 pt-5 border-2 border-pink-200 rounded-lg focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-200"
                  min="0"
                />
              </div>

              {/* Tamanho GG */}
              <div className="relative">
                <div className="absolute -top-2 left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  GG
                </div>
                <input
                  type="number"
                  placeholder="Qtd."
                  value={form.qtdGGrande}
                  onChange={(e) => setForm({ ...form, qtdGGrande: e.target.value })}
                  className="w-full px-4 py-3 pt-5 border-2 border-purple-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200"
                  min="0"
                />
              </div>
            </div>
          </div>

          {/* Upload de imagem */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-4">
              📸 Imagem do Produto *
            </label>
            
            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Área de upload */}
              <div className="flex-1">
                <label
                  htmlFor="file-upload"
                  className="flex flex-col items-center justify-center w-full h-48 border-3 border-dashed border-pink-300 rounded-xl cursor-pointer bg-pink-50 hover:bg-pink-100 transition-all duration-200 group"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      className="w-12 h-12 mb-3 text-pink-400 group-hover:text-pink-500 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <p className="mb-2 text-sm text-pink-600 font-semibold">
                      <span>Clique para fazer upload</span>
                    </p>
                    <p className="text-xs text-pink-400">PNG, JPG ou WEBP</p>
                  </div>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                    required
                  />
                </label>
              </div>

              {/* Preview da imagem */}
              {preview && (
                <div className="flex-1">
                  <div className="relative group">
                    <img
                      src={preview}
                      alt="preview"
                      className="w-full h-48 object-cover rounded-xl shadow-lg border-4 border-pink-200"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-200 rounded-xl flex items-center justify-center">
                      <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        Preview
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mensagem de feedback */}
          {mensagem && (
            <div
              className={`mb-6 p-4 rounded-lg text-center font-semibold ${
                mensagem.includes("✅")
                  ? "bg-green-100 text-green-700 border-2 border-green-300"
                  : "bg-red-100 text-red-700 border-2 border-red-300"
              }`}
            >
              {mensagem}
            </div>
          )}

          {/* Botão de cadastro */}
          <button
            type="button"
            onClick={handleUpload}
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Cadastrar Produto
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadImagem;
import { useEffect, useState } from "react";
import UploadImagem from "../components/UploadImagem";
import axios from "axios";
import React from "react";
import Navbar from "../Navbar/Navbar";

function RegisterProduct() {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    preco: "",
    descricao: "",
    qtdPequeno: "",
    qtdMedio: "",
    qtdGrande: "",
    qtdGGrande: "",
  });
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  // Buscar produtos
  const fetchProdutos = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/products");
      setProdutos(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      setProdutos([]);
    }
  };

  useEffect(() => {
    fetchProdutos();
  }, []);

  // Deletar produto
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Erro ao deletar produto");
      fetchProdutos();
      setShowDeleteModal(false);
      setProductToDelete(null);
    } catch (error) {
      console.error(error);
    }
  };

  const openDeleteModal = (product) => {
    setProductToDelete(product);
    setShowDeleteModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <Navbar />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-700 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="bg-white p-3 rounded-xl shadow-lg">
                <svg className="w-8 h-8 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">Painel Administrativo</h1>
                <p className="text-pink-100 text-sm">Gerencie seus produtos</p>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
              <p className="text-white font-semibold">{produtos.length} Produtos</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Formulário de Cadastro */}
        <div className="mb-8">
          <UploadImagem form={form} setForm={setForm} fetchProdutos={fetchProdutos} />
        </div>

        {/* Lista de Produtos */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              Produtos Cadastrados
            </h2>
          </div>

          <div className="p-6">
            {produtos.length > 0 ? (
              <ul className="space-y-4">
                {produtos.map((p) => (
                  <li
                    key={p._id}
                    className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-5 border-2 border-pink-200 hover:border-pink-400 transition-all duration-200 hover:shadow-lg"
                  >
                    <div className="flex gap-4 items-start">
                      {/* Miniatura da imagem */}
                      {p.imagem && (
                        <div className="flex-shrink-0">
                          <img
                            src={`http://localhost:5000${p.imagem}`}
                            alt={p.nome}
                            className="w-32 h-32 object-cover rounded-lg border-4 border-pink-300 shadow-md"
                          />
                        </div>
                      )}
                      
                      {/* Informações do produto */}
                      <div className="flex-1">
                        <h3 className="font-bold text-xl text-gray-800 mb-2">
                          {p.nome}
                        </h3>
                        <p className="text-3xl font-bold text-pink-600 mb-3">
                          R$ {p.preco.toFixed(2)}
                        </p>
                        
                        {p.descricao && (
                          <p className="text-sm text-gray-600 mb-4 bg-white/50 p-3 rounded-lg">
                            {p.descricao}
                          </p>
                        )}

                        {/* Estoque por tamanho */}
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-gray-700 mb-2">📦 Estoque Atual:</p>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {[
                              { label: "P", qty: p.qtdPequeno, color: "pink" },
                              { label: "M", qty: p.qtdMedio, color: "purple" },
                              { label: "G", qty: p.qtdGrande, color: "pink" },
                              { label: "GG", qty: p.qtdGGrande, color: "purple" },
                            ].map(({ label, qty, color }) => (
                              <div
                                key={label}
                                className={`bg-${color}-100 border-2 border-${color}-300 rounded-lg p-3 text-center`}
                              >
                                <p className="text-xs text-gray-600 font-semibold mb-1">
                                  Tamanho {label}
                                </p>
                                <p className={`text-2xl font-bold text-${color}-600`}>
                                  {qty}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Botão Excluir */}
                        <button
                          onClick={() => openDeleteModal(p)}
                          className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 group shadow-md hover:shadow-lg"
                        >
                          <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                          Excluir Produto
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-16">
                <svg className="w-32 h-32 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <p className="text-gray-500 text-xl font-semibold">Nenhum produto cadastrado</p>
                <p className="text-gray-400 text-sm mt-2">Comece adicionando seu primeiro produto acima!</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal de Confirmação de Exclusão */}
      {showDeleteModal && productToDelete && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Confirmar Exclusão
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-2">
                Tem certeza que deseja excluir o produto:
              </p>
              <p className="font-bold text-lg text-gray-900 mb-6 bg-gray-100 p-3 rounded-lg">
                {productToDelete.nome}
              </p>
              <p className="text-sm text-red-600 mb-6">
                ⚠️ Esta ação não pode ser desfeita!
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setShowDeleteModal(false);
                    setProductToDelete(null);
                  }}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg transition-all duration-200"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => handleDelete(productToDelete._id)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Sim, Excluir
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RegisterProduct;
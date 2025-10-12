import { useEffect, useState } from "react";
import UploadImagem from "./UploadImagem";

function App() {
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

  // Buscar produtos
  const fetchProdutos = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/products");
      const data = await res.json();
      setProdutos(Array.isArray(data) ? data : []);
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
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-[100vw] h-[100vh] text-black bg-white flex flex-col items-center justify-start p-4">
      <h1 className="text-2xl mb-4">Cadastro de Produtos</h1>

      {/* Upload de imagem - agora é o único formulário */}
      <UploadImagem form={form} setForm={setForm} fetchProdutos={fetchProdutos} />

      <ul className="mt-6 w-full max-w-2xl">
        {produtos.length > 0 ? (
          produtos.map((p) => (
            <li
              key={p._id}
              className="flex justify-between items-center p-2 border-b gap-4"
            >
              {/* Miniatura da imagem */}
              {p.imagem && (
                <img
                  src={`http://localhost:5000${p.imagem}`}
                  alt={p.nome}
                  className="w-16 h-16 object-cover rounded"
                />
              )}
              
              <span className="flex-1">
                {p.nome} - R${p.preco.toFixed(2)}<br/>
                Estoque atual<br/>
                Quantidade P : {p.qtdPequeno} -  <br/>
                Quantidade M : {p.qtdMedio} - <br/>
                Quantidade G : {p.qtdGrande} - <br/>
                Quantidade GG : {p.qtdGGrande} - <br/>
                {p.descricao && <span className="text-gray-600 text-sm block">{p.descricao}</span>}
              </span>
              
              <button
                onClick={() => handleDelete(p._id)}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
              >
                Excluir
              </button>
            </li>
          ))
        ) : (
          <li>Nenhum produto cadastrado.</li>
        )}
      </ul>
    </div>
  );
}

export default App;
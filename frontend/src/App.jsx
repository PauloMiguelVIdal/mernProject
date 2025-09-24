import { useEffect, useState } from "react";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [form, setForm] = useState({ nome: "", preco: "", descricao: "" });

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

  // Criar produto
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newProduct = {
        ...form,
        preco: parseFloat(form.preco), // garante que seja número
      };

      const res = await fetch("http://localhost:5000/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (!res.ok) throw new Error("Erro ao criar produto");

      setForm({ nome: "", preco: "", descricao: "" });
      fetchProdutos();
    } catch (error) {
      console.error(error);
    }
  };

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
    <div style={{ padding: "20px" }}>
      <h1>Cadastro de Produtos</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome"
          value={form.nome}
          onChange={(e) => setForm({ ...form, nome: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Preço"
          value={form.preco}
          onChange={(e) => setForm({ ...form, preco: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Descrição"
          value={form.descricao}
          onChange={(e) => setForm({ ...form, descricao: e.target.value })}
        />
        <button type="submit">Cadastrar</button>
      </form>

      <ul>
        {produtos.length > 0 ? (
          produtos.map((p) => (
            <li key={p._id}>
              {p.nome} - R${p.preco.toFixed(2)}
              <button onClick={() => handleDelete(p._id)}>Excluir</button>
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

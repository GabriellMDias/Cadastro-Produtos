import React, { useState } from "react";
import { API_URL } from "../config";

export default function Cadastro() {
    const [descricao, setDescricao] = useState("");
    const [stock, setStock] = useState(0);
    const [categoria, setCategoria] = useState("");
  
    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          const response = await fetch(API_URL + '/produtos', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              descricao,
              stock,
              categoria,
            }),
          });
      
          if (response.ok) {
            alert("Produto cadastrado com sucesso!");
          } else {
            alert("Erro ao cadastrar produto");
          }
        } catch (error) {
          alert("Ocorreu um erro ao cadastrar o produto: " + error.message);
        }
      };
  
    return (
      <div>
        <a href="/">&lt;</a>
        <h1>Cadastro de Produtos</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="descricao">Descrição:</label>
            <input
              type="text"
              id="descricao"
              value={descricao}
              onChange={(event) => setDescricao(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="stock">Stock:</label>
            <input
              type="number"
              id="stock"
              value={stock}
              onChange={(event) => setStock(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="categoria">Categoria:</label>
            <input
              type="text"
              id="categoria"
              value={categoria}
              onChange={(event) => setCategoria(event.target.value)}
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
  
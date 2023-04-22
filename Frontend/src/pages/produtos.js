import React from "react";
import { API_URL } from "../config";
import styles from '../styles/styles.module.css';

function Produtos({ produtos }){
    return(       
        <div className={styles.container}>
            <table className={styles.produtosTable}>
                <caption>Produtos</caption>
                <thead>
                <tr>
                    <th>Cód</th>
                    <th>Descrição</th>
                    <th>Estoque</th>
                </tr>
                </thead>
                <tbody>
                {produtos.map((produto) => (
                    <tr key={produto.id_produto}>
                    <td>{produto.id_produto}</td>
                    <td>{produto.descricao}</td>
                    <td>{produto.stock}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export async function getStaticProps() {
    try {
      const res = await fetch(API_URL + '/produtos')
      const produtos = await res.json()
      return { props: { produtos } }
    } catch (error) {
      console.log(error)
      return { props: { produtos: [] } }
    }
  }

  export default Produtos;
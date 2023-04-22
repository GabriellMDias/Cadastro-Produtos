import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Cadastro de Produtos</h1>
      <Link href="/produtos">
        Ver produtos cadastrados
      </Link>
      <br></br>
      <Link href="/cadastro">
        Cadastrar produto
      </Link>
    </div>
  );
}

import Acomodacoes from "@/widgets/Acomodacoes";

import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import NavegacaoAbaHorizontal from "@/widgets/NavegacaoAbaHorizontal";

export default function Home() {
  return (
    <>
      <header className="container mx-auto">
        <BarraSuperior />
        <BarraPesquisa />
      </header>

      <main className="my-6 container mx-auto">
        <NavegacaoAbaHorizontal />
        <Acomodacoes />
      </main>

      <hr className="my-6" />

      <footer className="container mx-auto">Rodapé</footer>
    </>
  );
}

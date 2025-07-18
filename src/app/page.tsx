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


      <main className="container mx-auto">
        <NavegacaoAbaHorizontal />
      </main>


      <hr className="my-3" />
      
      

      <footer className="container mx-auto">
        Rodapé
      </footer>
    </>
  );
}

import { fetchData, fetchDataById } from "@/utils/api";
import AcomodacaoDepoimentos from "@/widgets/AcomodacoesDepoimentos";
import AcomodacaoDetalhes from "@/widgets/AcomodacoesDetalhes";
import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import Galeria from "@/widgets/Galeria";
import Rodape from "@/widgets/Rodape";
import { notFound } from "next/navigation";

// Função obrigatória para rotas dinâmicas com output: 'export'
export async function generateStaticParams() {
  const dados = await fetchData();
  
  return dados.accommodation.map((acomodacao) => ({
    id: encodeURIComponent(acomodacao.slug),
  }));
}

interface PageProps {
  id: string;
}

export default async function Page({ params }: { params: Promise<PageProps> }) {

  const {id} = await params; // Aguarda a execução da Promise - params, e exibe os dados
  const acomodacao = await fetchDataById(id)

  if (!acomodacao) {
    notFound()
  }

  return (
    <div>
      <header className="container mx-auto">
        <BarraSuperior />
        <BarraPesquisa />
      </header>

      <main className="container mx-auto py-6">
        <h1 className="text-3xl">{acomodacao.title}</h1>
        <Galeria fotos={acomodacao.photos} />
        <div className="flex flex-col md:flex-row">
          <AcomodacaoDetalhes accommodation={acomodacao}/>
          <AcomodacaoDepoimentos testemonials={acomodacao.testimonials}/>

        </div>
      </main>

      <footer className="bg-gray-200">
        <Rodape />
      </footer>
    </div>
  ); //<div>url: {dados.id}</div>; // Retorna a url da página com o id
}

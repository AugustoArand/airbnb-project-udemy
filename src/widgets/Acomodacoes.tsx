// import { IconSearch } from "@tabler/icons-react"
import Acomodacao from "@/components/Acomodacao";
import { Accommodation } from "@/types/Airbnb";
import Image from "next/image";
import Link from "next/link";


interface AcomodacoesProps {
  accommodation: Accommodation[]
}
const Acomodacoes = (props: AcomodacoesProps) => {

  const listaAcomodacoes = props.accommodation;

  return (
    <section className="py-6 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
      {listaAcomodacoes.map((item, indice) => (
        <div key={indice}>
          <Link href={item.slug}>
            <Acomodacao
              local={item.location.description}
              anfitriao={item.host}
              data={item.date}
              preco={item.price}
              avaliacao={item.rating}
              preferidoHospedes={item.hasBadge}
            >
              {/*Recurso aspect-square e object-cover para ajustar imagens de tamanhos diferentes*/}
              <Image
                className="w-full aspect-square object-cover rounded-xl"
                src={item.photos[0].source}
                alt={item.photos[0].description}
                width={300}
                height={300}
              />
            </Acomodacao>
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Acomodacoes;

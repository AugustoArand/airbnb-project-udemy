import { IconHeart, IconStar } from "@tabler/icons-react";

interface AcomodacaoProps {
  children: React.ReactNode;
  local: string;
  anfitriao: string;
  data: string;
  preco: number;
  avaliacao: number;
  preferidoHospedes: boolean;
}

const Acomodacao = ({
  children,
  local,
  anfitriao,
  data,
  preco,
  avaliacao,
  preferidoHospedes,
}: AcomodacaoProps) => {
  return (
    <figure className="relative">
      <div className="p-2 absolute w-full flex flex-row justify-between items-center">
        <span className="bg-white rounded-full px-4 py-1 font-semibold">
          Preferido dos Hospedes
        </span>
        <IconHeart
          aria-label="Icone de coração"
          size={30}
          className="stroke-white opacity-80"
        />
      </div>

      {children}
      <figcaption className="pt-2">
        <div className="flex flex-row justify-between items-center">
          <span className="font-semibold">{local}</span>
          <div className="flex flex-row justify-between items-center">
            <IconStar aria-label="Icone de Favoritos" size={20} />
            <span className="font-semibold">{avaliacao}</span>
          </div>
        </div>
        <div>{anfitriao}</div>
        <div>{data}</div>
        <div className="font-semibold">R$ {preco}</div>
      </figcaption>
    </figure>
  );
};

export default Acomodacao;

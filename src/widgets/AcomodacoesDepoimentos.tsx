import { Testimonials } from "@/types/Airbnb";
import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";

interface AcomodacaoDepoimentosProps {
    testemonials: Testimonials[]
}


const AcomodacaoDepoimentos = (props: AcomodacaoDepoimentosProps) => {

    const depoimentos = props.testemonials;
    
    return (
        <div className="w-full">
            <h2 className="text-xl font-semibold py-4"> Espaço inteiro da casa....</h2>
            <div className="flex gap-2 items-center">
                <IconStarFilled className="size-4" />
                <span>4.9 (400+ avaliações)</span>
                </div>

                {depoimentos.map((depoimento, indice) => (
                    <div className="flex flex-row gap-2 py-4 items-start" key={indice}>
                        <Image
                            className="aspect-square object-cover rounded-full"
                            src={depoimento.image}
                            alt={depoimento.name}
                            width={40}
                            height={40}
                        />
                        <div>
                            <span className="text-md font-semibold pb-2">{depoimento.name}</span>
                            <p>{depoimento.comment}</p>
                        </div>
                    </div>
                ))}
              

        </div>
    );
};
export default AcomodacaoDepoimentos;

import { IconStarFilled } from "@tabler/icons-react";
import Image from "next/image";


const depoimentos = [
    {
        "id": "aa625d67-8316-4996-970e-e13b36150cc4",
        "name": "Guterre",
        "image": "https://web.codans.com.br/airbnb/img/feedback/aa625d67-8316-4996-970e-e13b36150cc4.jpg",
        "comment": "Bacon ipsum dolor amet drumstick cupim ribeye bacon alcatra chislic kielbasa chicken, tri-tip spare ribs turkey meatball.",
        "rating": 5,
        "customerTime": 5,
        "createdAt": 5,
        "stayedAt": 5
    },
    {
        "id": "a01fd4e8-510c-46d2-a79a-c9dc8e8fbd22",
        "name": "Adónis",
        "image": "https://web.codans.com.br/airbnb/img/feedback/a01fd4e8-510c-46d2-a79a-c9dc8e8fbd22.jpg",
        "comment": "Bacon ipsum dolor amet porchetta tri-tip doner, chicken pork loin pork tenderloin meatball andouille frankfurter rump kevin.",
        "rating": 4,
        "customerTime": 5,
        "createdAt": 7,
        "stayedAt": 6
    },
    {
        "id": "e7450683-808f-4970-9d44-1154c9544639",
        "name": "Giovana",
        "image": "https://web.codans.com.br/airbnb/img/feedback/e7450683-808f-4970-9d44-1154c9544639.jpg",
        "comment": "Bacon ipsum dolor amet rump tri-tip picanha tail hamburger shank boudin pork cupim shoulder jerky pancetta.",
        "rating": 4.5,
        "customerTime": 3,
        "createdAt": 8,
        "stayedAt": 7
    }
]


const AcomodacaoDepoimentos = () => {
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

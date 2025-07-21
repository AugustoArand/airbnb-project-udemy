import BarraPesquisa from "@/widgets/BarraPesquisa";
import BarraSuperior from "@/widgets/BarraSuperior";
import Galeria from "@/widgets/Galeria";
import Rodape from "@/widgets/Rodape";

const acomodacao = {
  number: 1,
  date: "8 - 13 de jan",
  host: "Millena",
  id: "583d0cce-c4e1-42d6-9afb-8b3ba2c26d93",
  title: "Rancho da Lua, tranquilo e rodeado por montanhas",
  slug: "colonia-de-pescadores-brasil",
  location: {
    description: "Colônia de Pescadores, Brasil",
    city: "Bonito",
    state: "Mato Grosso do Sul",
    country: "Brasil",
  },
  hasBadge: true,
  price: 229,
  rating: 4.5,
  testimonials: [
    {
      id: "aa625d67-8316-4996-970e-e13b36150cc4",
      name: "Guterre",
      image:
        "https://web.codans.com.br/airbnb/img/feedback/aa625d67-8316-4996-970e-e13b36150cc4.jpg",
      comment:
        "Bacon ipsum dolor amet drumstick cupim ribeye bacon alcatra chislic kielbasa chicken, tri-tip spare ribs turkey meatball.",
      rating: 5,
      customerTime: 5,
      createdAt: 5,
      stayedAt: 5,
    },
    {
      id: "a01fd4e8-510c-46d2-a79a-c9dc8e8fbd22",
      name: "Adónis",
      image:
        "https://web.codans.com.br/airbnb/img/feedback/a01fd4e8-510c-46d2-a79a-c9dc8e8fbd22.jpg",
      comment:
        "Bacon ipsum dolor amet porchetta tri-tip doner, chicken pork loin pork tenderloin meatball andouille frankfurter rump kevin.",
      rating: 4,
      customerTime: 5,
      createdAt: 7,
      stayedAt: 6,
    },
    {
      id: "e7450683-808f-4970-9d44-1154c9544639",
      name: "Giovana",
      image:
        "https://web.codans.com.br/airbnb/img/feedback/e7450683-808f-4970-9d44-1154c9544639.jpg",
      comment:
        "Bacon ipsum dolor amet rump tri-tip picanha tail hamburger shank boudin pork cupim shoulder jerky pancetta.",
      rating: 4.5,
      customerTime: 3,
      createdAt: 8,
      stayedAt: 7,
    },
  ],
  photos: [
    {
      id: "bc78b53b-7ca1-4077-be48-04d33b7fa4fd",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0001.jpg",
      description:
        "Bacon ipsum dolor amet short loin strip steak cow, bresaola ground round tail chicken drumstick cupim.",
    },
    {
      id: "96be5596-e7ec-43da-a695-a863893a115b",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0002.jpg",
      description:
        "Bacon ipsum dolor amet biltong meatloaf pork ground round salami.",
    },
    {
      id: "6070df07-8f50-488a-a7cd-14a1b0e04cec",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0010.jpg",
      description:
        "Bacon ipsum dolor amet tongue kielbasa drumstick bacon pancetta doner biltong short loin prosciutto cow.",
    },
    {
      id: "3d8998ee-0ab8-4af3-80c1-57791d1c54cf",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0004.jpg",
      description:
        "Bacon ipsum dolor amet filet mignon frankfurter swine doner tongue sausage hamburger, bacon meatball picanha.",
    },
    {
      id: "0794ed1d-e6a6-4b78-b8ae-c2c90ca22d5b",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0005.jpg",
      description:
        "Bacon ipsum dolor amet chuck t-bone alcatra burgdoggen jowl tongue pork cupim ball tip.",
    },
    {
      id: "55e82a85-f4aa-4e8c-bf85-9f58e6c184a1",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0006.jpg",
      description:
        "Bacon ipsum dolor amet spare ribs rump cupim, meatball chicken flank frankfurter salami shank.",
    },
    {
      id: "2defff65-5079-4842-ac2f-361e7ed300f7",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0007.jpg",
      description:
        "Bacon ipsum dolor amet shank pork belly tri-tip, ham doner salami ribeye hamburger kevin.",
    },
    {
      id: "6402902e-5143-42f1-b530-b66bfe8afa12",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0008.jpg",
      description:
        "Bacon ipsum dolor amet sirloin porchetta landjaeger biltong swine filet mignon venison leberkas.",
    },
    {
      id: "b595856f-7dae-4e75-8fbd-e3a997966331",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0009.jpg",
      description:
        "Bacon ipsum dolor amet jerky kielbasa brisket andouille pig kevin venison alcatra boudin flank.",
    },
    {
      id: "73ad7c87-7ff3-40b0-8f0e-49747fa1e65f",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0010.jpg",
      description:
        "Bacon ipsum dolor amet swine pig kevin bacon, chuck fatback jerky porchetta alcatra turducken.",
    },
    {
      id: "0864e5a5-cda7-42aa-828a-a53768b64806",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0011.jpg",
      description:
        "Bacon ipsum dolor amet kielbasa prosciutto spare ribs pastrami meatloaf corned beef.",
    },
    {
      id: "121b71af-01e7-4300-9659-60108165aa66",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0012.jpg",
      description:
        "Bacon ipsum dolor amet shoulder jowl chicken beef, frankfurter ball tip pork belly filet mignon fatback brisket pork chop venison hamburger pancetta salami.",
    },
    {
      id: "3e67d3ce-e933-4664-bca9-7ba293835197",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0013.jpg",
      description:
        "Bacon ipsum dolor amet cupim pastrami strip steak hamburger, pork chop capicola beef ribs kielbasa.",
    },
    {
      id: "6da2c5a3-bf95-46a2-9d3b-584d65c784c6",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0014.jpg",
      description:
        "Bacon ipsum dolor amet alcatra leberkas kevin bresaola salami ham picanha pork chop pancetta tenderloin sirloin corned beef short loin.",
    },
    {
      id: "29be3c50-f868-4d07-8d7d-ae3f1b37c5d7",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0015.jpg",
      description:
        "Bacon ipsum dolor amet ham hock cupim leberkas boudin, salami meatball beef ribs flank chuck.",
    },
    {
      id: "c595cd31-7544-448f-98a4-04183b84a1a1",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0016.jpg",
      description:
        "Bacon ipsum dolor amet shankle pork brisket ball tip jowl pork belly tail ham.",
    },
    {
      id: "457effcf-e9ae-479a-867b-af39f55476d2",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0017.jpg",
      description:
        "Bacon ipsum dolor amet drumstick jerky turkey sausage shankle venison andouille ham hock pork belly pig jowl.",
    },
    {
      id: "84d53699-1a95-47b8-b7b9-fab9ba5a6c33",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0018.jpg",
      description:
        "Bacon ipsum dolor amet cupim tenderloin boudin doner, ground round chicken kevin turducken shank cow brisket fatback pig corned beef.",
    },
    {
      id: "918dbf0d-f493-423a-b8fe-5c2b415acf44",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0019.jpg",
      description:
        "Bacon ipsum dolor amet cow shoulder landjaeger, turkey frankfurter meatball boudin kielbasa porchetta beef turducken fatback venison.",
    },
    {
      id: "96a28377-8840-4845-97cc-613f272cddd5",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0020.jpg",
      description:
        "Bacon ipsum dolor amet beef ribs cow spare ribs picanha sausage tongue.",
    },
    {
      id: "123c1feb-ef74-4adc-a7a0-3e5ce098b40f",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0021.jpg",
      description:
        "Bacon ipsum dolor amet beef ribs pork loin pastrami flank tenderloin biltong.",
    },
    {
      id: "f04bdbcb-f028-4339-b0a6-4375be7c3a60",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0022.jpg",
      description:
        "Bacon ipsum dolor amet pork loin tenderloin pastrami, kevin chislic cow rump doner.",
    },
    {
      id: "34353d12-8107-4129-85c1-1a50efad0111",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0023.jpg",
      description:
        "Bacon ipsum dolor amet tongue kielbasa ham, swine filet mignon sausage tenderloin pork loin pig doner chuck venison bacon jowl brisket.",
    },
    {
      id: "8c2d50f9-dc90-4c28-972d-290e4e1b0a2a",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0024.jpg",
      description:
        "Bacon ipsum dolor amet turkey shoulder turducken shankle bresaola.",
    },
    {
      id: "eee74611-f751-45f1-93f4-e0573c980207",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0025.jpg",
      description:
        "Bacon ipsum dolor amet sirloin pastrami short loin sausage doner shoulder.",
    },
    {
      id: "b068d7ea-535a-4e87-a143-e3ba9dde0a5b",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0026.jpg",
      description:
        "Bacon ipsum dolor amet tail pork chop hamburger, kielbasa drumstick salami chicken pastrami jerky.",
    },
    {
      id: "ec245953-1942-4eea-9efb-e3f7512cda80",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0027.jpg",
      description:
        "Bacon ipsum dolor amet ribeye venison meatloaf bacon t-bone, drumstick swine frankfurter pork filet mignon shankle chuck alcatra ham kevin.",
    },
    {
      id: "c80c00eb-0b53-4bcb-8af9-0c2057a85931",
      source: "https://web.codans.com.br/airbnb/img/accommodation/01/0028.jpg",
      description:
        "Bacon ipsum dolor amet pastrami swine boudin burgdoggen tail, bacon meatball strip steak beef porchetta corned beef shank rump ham shankle.",
    },
  ],
};

interface PageProps {
  id: string;
}

export default async function Page({ params }: { params: Promise<PageProps> }) {
  const dados = await params; // Aguarda a execução da Promise - params, e exibe os dados
  return (
    <div>
      <header className="container mx-auto">
        <BarraSuperior />
        <BarraPesquisa />
      </header>

      <main className="container mx-auto py-6">
        <h1 className="text-3xl">{acomodacao.title}</h1>
        <Galeria fotos={acomodacao.photos} />
      </main>

      <footer className="bg-gray-200">
        <Rodape />
      </footer>
    </div>
  ); //<div>url: {dados.id}</div>; // Retorna a url da página com o id
}

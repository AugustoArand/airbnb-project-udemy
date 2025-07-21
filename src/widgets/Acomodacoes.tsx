// import { IconSearch } from "@tabler/icons-react"
import Acomodacao from "@/components/Acomodacao";
import Image from "next/image";
import Link from "next/link";

const listaAcomodacoes = [
  {
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
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0001.jpg",
        description:
          "Bacon ipsum dolor amet short loin strip steak cow, bresaola ground round tail chicken drumstick cupim.",
      },
      {
        id: "96be5596-e7ec-43da-a695-a863893a115b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0002.jpg",
        description:
          "Bacon ipsum dolor amet biltong meatloaf pork ground round salami.",
      },
      {
        id: "6070df07-8f50-488a-a7cd-14a1b0e04cec",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0010.jpg",
        description:
          "Bacon ipsum dolor amet tongue kielbasa drumstick bacon pancetta doner biltong short loin prosciutto cow.",
      },
      {
        id: "3d8998ee-0ab8-4af3-80c1-57791d1c54cf",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0004.jpg",
        description:
          "Bacon ipsum dolor amet filet mignon frankfurter swine doner tongue sausage hamburger, bacon meatball picanha.",
      },
      {
        id: "0794ed1d-e6a6-4b78-b8ae-c2c90ca22d5b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0005.jpg",
        description:
          "Bacon ipsum dolor amet chuck t-bone alcatra burgdoggen jowl tongue pork cupim ball tip.",
      },
      {
        id: "55e82a85-f4aa-4e8c-bf85-9f58e6c184a1",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0006.jpg",
        description:
          "Bacon ipsum dolor amet spare ribs rump cupim, meatball chicken flank frankfurter salami shank.",
      },
      {
        id: "2defff65-5079-4842-ac2f-361e7ed300f7",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0007.jpg",
        description:
          "Bacon ipsum dolor amet shank pork belly tri-tip, ham doner salami ribeye hamburger kevin.",
      },
      {
        id: "6402902e-5143-42f1-b530-b66bfe8afa12",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0008.jpg",
        description:
          "Bacon ipsum dolor amet sirloin porchetta landjaeger biltong swine filet mignon venison leberkas.",
      },
      {
        id: "b595856f-7dae-4e75-8fbd-e3a997966331",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0009.jpg",
        description:
          "Bacon ipsum dolor amet jerky kielbasa brisket andouille pig kevin venison alcatra boudin flank.",
      },
      {
        id: "73ad7c87-7ff3-40b0-8f0e-49747fa1e65f",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0010.jpg",
        description:
          "Bacon ipsum dolor amet swine pig kevin bacon, chuck fatback jerky porchetta alcatra turducken.",
      },
      {
        id: "0864e5a5-cda7-42aa-828a-a53768b64806",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0011.jpg",
        description:
          "Bacon ipsum dolor amet kielbasa prosciutto spare ribs pastrami meatloaf corned beef.",
      },
      {
        id: "121b71af-01e7-4300-9659-60108165aa66",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0012.jpg",
        description:
          "Bacon ipsum dolor amet shoulder jowl chicken beef, frankfurter ball tip pork belly filet mignon fatback brisket pork chop venison hamburger pancetta salami.",
      },
      {
        id: "3e67d3ce-e933-4664-bca9-7ba293835197",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0013.jpg",
        description:
          "Bacon ipsum dolor amet cupim pastrami strip steak hamburger, pork chop capicola beef ribs kielbasa.",
      },
      {
        id: "6da2c5a3-bf95-46a2-9d3b-584d65c784c6",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0014.jpg",
        description:
          "Bacon ipsum dolor amet alcatra leberkas kevin bresaola salami ham picanha pork chop pancetta tenderloin sirloin corned beef short loin.",
      },
      {
        id: "29be3c50-f868-4d07-8d7d-ae3f1b37c5d7",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0015.jpg",
        description:
          "Bacon ipsum dolor amet ham hock cupim leberkas boudin, salami meatball beef ribs flank chuck.",
      },
      {
        id: "c595cd31-7544-448f-98a4-04183b84a1a1",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0016.jpg",
        description:
          "Bacon ipsum dolor amet shankle pork brisket ball tip jowl pork belly tail ham.",
      },
      {
        id: "457effcf-e9ae-479a-867b-af39f55476d2",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0017.jpg",
        description:
          "Bacon ipsum dolor amet drumstick jerky turkey sausage shankle venison andouille ham hock pork belly pig jowl.",
      },
      {
        id: "84d53699-1a95-47b8-b7b9-fab9ba5a6c33",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0018.jpg",
        description:
          "Bacon ipsum dolor amet cupim tenderloin boudin doner, ground round chicken kevin turducken shank cow brisket fatback pig corned beef.",
      },
      {
        id: "918dbf0d-f493-423a-b8fe-5c2b415acf44",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0019.jpg",
        description:
          "Bacon ipsum dolor amet cow shoulder landjaeger, turkey frankfurter meatball boudin kielbasa porchetta beef turducken fatback venison.",
      },
      {
        id: "96a28377-8840-4845-97cc-613f272cddd5",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0020.jpg",
        description:
          "Bacon ipsum dolor amet beef ribs cow spare ribs picanha sausage tongue.",
      },
      {
        id: "123c1feb-ef74-4adc-a7a0-3e5ce098b40f",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0021.jpg",
        description:
          "Bacon ipsum dolor amet beef ribs pork loin pastrami flank tenderloin biltong.",
      },
      {
        id: "f04bdbcb-f028-4339-b0a6-4375be7c3a60",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0022.jpg",
        description:
          "Bacon ipsum dolor amet pork loin tenderloin pastrami, kevin chislic cow rump doner.",
      },
      {
        id: "34353d12-8107-4129-85c1-1a50efad0111",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0023.jpg",
        description:
          "Bacon ipsum dolor amet tongue kielbasa ham, swine filet mignon sausage tenderloin pork loin pig doner chuck venison bacon jowl brisket.",
      },
      {
        id: "8c2d50f9-dc90-4c28-972d-290e4e1b0a2a",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0024.jpg",
        description:
          "Bacon ipsum dolor amet turkey shoulder turducken shankle bresaola.",
      },
      {
        id: "eee74611-f751-45f1-93f4-e0573c980207",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0025.jpg",
        description:
          "Bacon ipsum dolor amet sirloin pastrami short loin sausage doner shoulder.",
      },
      {
        id: "b068d7ea-535a-4e87-a143-e3ba9dde0a5b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0026.jpg",
        description:
          "Bacon ipsum dolor amet tail pork chop hamburger, kielbasa drumstick salami chicken pastrami jerky.",
      },
      {
        id: "ec245953-1942-4eea-9efb-e3f7512cda80",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0027.jpg",
        description:
          "Bacon ipsum dolor amet ribeye venison meatloaf bacon t-bone, drumstick swine frankfurter pork filet mignon shankle chuck alcatra ham kevin.",
      },
      {
        id: "c80c00eb-0b53-4bcb-8af9-0c2057a85931",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/01/0028.jpg",
        description:
          "Bacon ipsum dolor amet pastrami swine boudin burgdoggen tail, bacon meatball strip steak beef porchetta corned beef shank rump ham shankle.",
      },
    ],
  },
  {
    number: 2,
    date: "15 - 20 de jan",
    host: "Carlos",
    id: "2c9bac43-c6d5-4a17-8d2f-4492d909c9c6",
    title: "Parque do memorial com vista incrível para a natureza",
    slug: "memorial-de-copacabana-brasil",
    location: {
      description: "Memorial de Copacabana, Brasil",
      city: "Rio de Janeiro",
      state: "Rio de Janeiro",
      country: "Brasil",
    },
    hasBadge: true,
    price: 300,
    rating: 4.7,
    testimonials: [
      {
        id: "560b7417-4280-4afc-ae1d-9159934fde2a",
        name: "Eufrásio",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/560b7417-4280-4afc-ae1d-9159934fde2a.jpg",
        comment: "Bacon ipsum dolor amet tenderloin swine t-bone flank.",
        rating: 5,
        customerTime: 5,
        createdAt: 7,
        stayedAt: 2,
      },
      {
        id: "63901507-1bf2-4e49-8798-eeaf2f4fc0a1",
        name: "Raquélen",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/63901507-1bf2-4e49-8798-eeaf2f4fc0a1.jpg",
        comment:
          "Bacon ipsum dolor amet tenderloin pastrami brisket bresaola, ham burgdoggen chicken shankle swine strip steak venison frankfurter.",
        rating: 5,
        customerTime: 2,
        createdAt: 7,
        stayedAt: 8,
      },
      {
        id: "df3745f0-175e-4831-9ac7-b94ae7e76c1f",
        name: "Cristina",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/df3745f0-175e-4831-9ac7-b94ae7e76c1f.jpg",
        comment:
          "Bacon ipsum dolor amet strip steak pork belly spare ribs, bacon tenderloin sausage cow.",
        rating: 3.5,
        customerTime: 4,
        createdAt: 5,
        stayedAt: 2,
      },
    ],
    photos: [
      {
        id: "f015df3d-d0da-4787-8aa9-95a696686c75",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0029.jpg",
        description:
          "Bacon ipsum dolor amet ball tip meatball swine filet mignon, shankle turkey tail rump biltong jerky kevin salami.",
      },
      {
        id: "94970bd2-454a-44dd-bd11-0219e6560a22",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0030.jpg",
        description:
          "Bacon ipsum dolor amet pastrami sausage jerky ham hock drumstick pig.",
      },
      {
        id: "e99e89a2-9fd2-406f-8f7a-52967a906c21",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0031.jpg",
        description:
          "Bacon ipsum dolor amet leberkas drumstick pork chop, jerky turducken shank meatloaf kielbasa beef brisket short ribs venison shankle.",
      },
      {
        id: "f26e644d-5f0c-488a-ade4-977c7a7fe2df",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0032.jpg",
        description:
          "Bacon ipsum dolor amet beef pork shankle, tri-tip pastrami jerky andouille pork belly alcatra ham hock.",
      },
      {
        id: "934d00e6-0075-48b6-a76c-181e3518c4ed",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0033.jpg",
        description:
          "Bacon ipsum dolor amet tri-tip cupim chuck rump pork buffalo pork loin kevin jowl sirloin fatback hamburger alcatra tenderloin.",
      },
      {
        id: "48ee043e-14c9-4dd7-b11f-b1fa91412f11",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0034.jpg",
        description:
          "Bacon ipsum dolor amet ball tip shankle fatback, meatloaf tail boudin strip steak kevin shoulder pancetta short loin.",
      },
      {
        id: "2d95556a-6d6f-456f-b107-2522b5cc082e",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0035.jpg",
        description:
          "Bacon ipsum dolor amet jerky cupim burgdoggen leberkas, tenderloin shoulder chuck ham drumstick frankfurter capicola pork buffalo.",
      },
      {
        id: "f75c3847-0569-4ee1-adbf-088781c3968c",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0036.jpg",
        description:
          "Bacon ipsum dolor amet pig porchetta prosciutto tail pork loin biltong landjaeger shoulder sausage.",
      },
      {
        id: "012a07ce-d140-4e73-a109-249bae4f26f0",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0037.jpg",
        description:
          "Bacon ipsum dolor amet meatloaf tri-tip salami tail bacon ball tip shank.",
      },
      {
        id: "63da9412-f499-4376-a96f-101464a77d7a",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0038.jpg",
        description:
          "Bacon ipsum dolor amet ribeye frankfurter fatback pancetta kielbasa cow buffalo swine pork chop pork beef ribs capicola.",
      },
      {
        id: "5fa21c91-1e99-4d55-8551-77a7165e9a7f",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0039.jpg",
        description:
          "Bacon ipsum dolor amet pork tri-tip shoulder turducken venison.",
      },
      {
        id: "4999ff3a-207f-4f24-b708-6988a119cacf",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0040.jpg",
        description:
          "Bacon ipsum dolor amet turducken capicola cupim, boudin tail hamburger tri-tip ribeye brisket meatball ham corned beef landjaeger.",
      },
      {
        id: "e2b2b8fb-9bc2-41c7-a58c-f8d399abccca",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0041.jpg",
        description:
          "Bacon ipsum dolor amet andouille cow hamburger turducken, chuck meatloaf ground round boudin ham shank porchetta swine t-bone flank tongue.",
      },
      {
        id: "4d2e020d-7ea6-405f-af44-b1e6a2112a47",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0042.jpg",
        description:
          "Bacon ipsum dolor amet bresaola pork boudin pork chop, beef ribs ribeye venison.",
      },
      {
        id: "d87c0022-3404-477c-bcd7-eefd06aadf2c",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0043.jpg",
        description:
          "Bacon ipsum dolor amet brisket t-bone tri-tip, picanha chicken shank flank biltong short ribs bacon landjaeger andouille boudin shoulder drumstick.",
      },
      {
        id: "bc168c1f-69d2-454b-9c97-33fff2a27bb5",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0044.jpg",
        description:
          "Bacon ipsum dolor amet flank biltong kevin burgdoggen pork hamburger.",
      },
      {
        id: "059aa13e-4f33-4c48-8d34-35d2db7512ce",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0045.jpg",
        description:
          "Bacon ipsum dolor amet doner pastrami bacon flank tri-tip burgdoggen drumstick chislic short loin corned beef prosciutto strip steak.",
      },
      {
        id: "7c600229-c524-46eb-a417-90eb35e8158b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0046.jpg",
        description:
          "Bacon ipsum dolor amet tail corned beef landjaeger biltong, jerky picanha drumstick shank cupim sirloin ribeye ball tip.",
      },
      {
        id: "ef3bfb74-a025-45bc-86f9-cddfbc8fff65",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0047.jpg",
        description:
          "Bacon ipsum dolor amet beef ribs flank landjaeger, venison turkey chislic cow pork belly frankfurter ham hock pork loin t-bone rump.",
      },
      {
        id: "2aea7c20-16e3-43e9-80c3-f08d73fecf56",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0048.jpg",
        description:
          "Bacon ipsum dolor amet t-bone boudin pork leberkas, ribeye sirloin salami landjaeger.",
      },
      {
        id: "175f5252-a125-4167-ba7b-25a2d4c4dac0",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0049.jpg",
        description:
          "Bacon ipsum dolor amet pancetta pork turkey, prosciutto shankle shank bresaola frankfurter drumstick porchetta shoulder.",
      },
      {
        id: "6e3f34b7-a356-4ff1-8cea-d4e33d307ea4",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0050.jpg",
        description:
          "Bacon ipsum dolor amet kevin chislic chicken corned beef tri-tip, biltong ground round filet mignon bacon t-bone flank shankle tongue brisket.",
      },
      {
        id: "546793eb-e74b-44c2-a954-11b19962e7cb",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0051.jpg",
        description:
          "Bacon ipsum dolor amet ribeye biltong ham, pork chop cow pancetta salami doner beef alcatra shank corned beef turducken.",
      },
      {
        id: "c87990ea-3425-4a3f-86e9-db17910f53e3",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0052.jpg",
        description:
          "Bacon ipsum dolor amet kielbasa short ribs landjaeger sausage cupim filet mignon turkey drumstick ground round.",
      },
      {
        id: "05317d50-f0d7-4c41-b00b-6a2009f308fe",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0053.jpg",
        description:
          "Bacon ipsum dolor amet venison cow meatloaf beef cupim bacon pig chicken pork chop.",
      },
      {
        id: "055284ef-800a-4e51-8562-54228d3bdcae",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0054.jpg",
        description:
          "Bacon ipsum dolor amet tri-tip pork chop frankfurter t-bone pork shoulder pancetta landjaeger short ribs.",
      },
      {
        id: "8e846b65-5eec-4bfc-a1d5-2957b65e98dd",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0055.jpg",
        description:
          "Bacon ipsum dolor amet pork loin venison bacon, sausage picanha frankfurter salami shoulder prosciutto fatback chislic ham hock turducken tenderloin.",
      },
      {
        id: "1a965774-9dd3-4d3d-bad3-a533d5edc8fc",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0056.jpg",
        description:
          "Bacon ipsum dolor amet short loin andouille pork filet mignon tenderloin, kevin ball tip ham corned beef short ribs biltong.",
      },
      {
        id: "bf844a9c-1e09-4276-b0fc-3b7cdf0beaf3",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/02/0057.jpg",
        description:
          "Bacon ipsum dolor amet strip steak hamburger beef ribs short loin venison.",
      },
    ],
  },
  {
    number: 3,
    date: "22 - 27 de jan",
    host: "Ana",
    id: "e9807385-6ffd-49e8-ad67-746435402c70",
    title: "Campo aberto para acampamento ao ar livre",
    slug: "campo-celeste-brasil",
    location: {
      description: "Campo Celeste, Brasil",
      city: "São Paulo",
      state: "São Paulo",
      country: "Brasil",
    },
    hasBadge: true,
    price: 150,
    rating: 4.3,
    testimonials: [
      {
        id: "d2eef1e5-1b9f-4c88-bb83-89c3039f3e74",
        name: "Loeci",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/d2eef1e5-1b9f-4c88-bb83-89c3039f3e74.jpg",
        comment: "Bacon ipsum dolor amet kielbasa landjaeger bacon shoulder.",
        rating: 5,
        customerTime: 6,
        createdAt: 4,
        stayedAt: 2,
      },
      {
        id: "8ad8a15f-d374-4178-8f2d-13562e15aef0",
        name: "Palmira",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/8ad8a15f-d374-4178-8f2d-13562e15aef0.jpg",
        comment:
          "Bacon ipsum dolor amet kevin strip steak beef ball tip beef ribs biltong landjaeger.",
        rating: 5,
        customerTime: 5,
        createdAt: 7,
        stayedAt: 8,
      },
      {
        id: "92b6f8ca-e1ff-4ba7-8559-a1121d54befc",
        name: "Telo",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/92b6f8ca-e1ff-4ba7-8559-a1121d54befc.jpg",
        comment:
          "Bacon ipsum dolor amet spare ribs jerky hamburger, tail pork andouille porchetta beef tenderloin ribeye flank shankle tongue landjaeger chuck.",
        rating: 4,
        customerTime: 6,
        createdAt: 2,
        stayedAt: 4,
      },
    ],
    photos: [
      {
        id: "5619a8b7-dcb1-44f5-b377-6f8989e2689e",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0058.jpg",
        description:
          "Bacon ipsum dolor amet chuck porchetta drumstick burgdoggen shankle, bacon meatloaf filet mignon venison leberkas brisket turkey biltong shoulder pork chop.",
      },
      {
        id: "3c1cd04f-b5db-4712-a8f3-369847037eaf",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0059.jpg",
        description:
          "Bacon ipsum dolor amet sausage corned beef turkey spare ribs capicola jerky shank, flank meatloaf beef tongue.",
      },
      {
        id: "9493ba0a-58bd-47c2-968b-94a5cacbda7f",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0060.jpg",
        description: "Bacon ipsum dolor amet flank short loin ball tip rump.",
      },
      {
        id: "eb49dba5-bd56-4724-9002-ce1697b7f6e7",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0061.jpg",
        description:
          "Bacon ipsum dolor amet rump tri-tip pig fatback prosciutto bacon ball tip.",
      },
      {
        id: "d4b88f23-b407-447c-9e11-5694027b1a2e",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0062.jpg",
        description:
          "Bacon ipsum dolor amet burgdoggen venison tongue fatback.",
      },
      {
        id: "e675a5b8-067d-4c04-8707-ff0f4a7e2ccb",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0063.jpg",
        description:
          "Bacon ipsum dolor amet burgdoggen rump jerky capicola buffalo tongue ribeye.",
      },
      {
        id: "3e9bebfd-1c91-48fd-9a9f-abd7dea1cb87",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0064.jpg",
        description:
          "Bacon ipsum dolor amet jowl meatloaf picanha strip steak tri-tip ground round meatball chicken.",
      },
      {
        id: "8bcd4b7d-85d5-42bc-bdad-52e9741d18ed",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0065.jpg",
        description:
          "Bacon ipsum dolor amet bresaola porchetta fatback, landjaeger pastrami shank shankle salami jowl beef ribs turkey.",
      },
      {
        id: "d73d5c53-15e3-46a1-adec-9dd7868cab37",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0066.jpg",
        description:
          "Bacon ipsum dolor amet tenderloin frankfurter doner boudin, jowl rump bresaola shank.",
      },
      {
        id: "795c6101-5de9-41af-92dc-9789e5bc62d5",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0067.jpg",
        description:
          "Bacon ipsum dolor amet landjaeger filet mignon tenderloin chuck turducken alcatra pork loin tongue burgdoggen strip steak biltong.",
      },
      {
        id: "771304ae-f4a2-4855-8234-29e38824afc6",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0068.jpg",
        description:
          "Bacon ipsum dolor amet shankle rump tri-tip, brisket jowl shoulder doner frankfurter capicola strip steak boudin burgdoggen sausage.",
      },
      {
        id: "86b5011f-1a7e-4ba5-9d86-5a34cabfd46c",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0069.jpg",
        description:
          "Bacon ipsum dolor amet venison ball tip shankle tail chuck fatback turkey salami tenderloin doner pancetta flank filet mignon cupim.",
      },
      {
        id: "d70697c1-e94d-44a4-ab45-41d99052840a",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0070.jpg",
        description:
          "Bacon ipsum dolor amet meatloaf ham hock beef ribs, flank kevin rump prosciutto hamburger pastrami swine alcatra drumstick picanha jerky bresaola.",
      },
      {
        id: "7465e385-3d77-4973-b353-b2420ae54f08",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0071.jpg",
        description:
          "Bacon ipsum dolor amet pork belly t-bone biltong, cupim chuck turkey ground round fatback drumstick brisket swine beef pork loin meatloaf ball tip.",
      },
      {
        id: "8ceb7e05-da5d-4025-8876-a0b462e36142",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0072.jpg",
        description:
          "Bacon ipsum dolor amet boudin tail doner, strip steak shankle shoulder capicola swine bresaola ham hock andouille prosciutto chuck.",
      },
      {
        id: "a3a56a0e-eaec-47d7-bd88-f25f9daf8957",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0073.jpg",
        description:
          "Bacon ipsum dolor amet venison cupim pork loin jerky pig buffalo rump, kielbasa tri-tip ribeye.",
      },
      {
        id: "941440af-1219-4548-9235-c23ffe1e9094",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0074.jpg",
        description:
          "Bacon ipsum dolor amet flank shankle tri-tip leberkas sirloin ground round.",
      },
      {
        id: "13e7d101-6106-43fe-93aa-39feccdfa67b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0075.jpg",
        description:
          "Bacon ipsum dolor amet pig jerky jowl prosciutto shank ham burgdoggen boudin ham hock drumstick turducken frankfurter pancetta chislic.",
      },
      {
        id: "42c69f31-ddb5-42a1-9686-74eac95815b0",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0076.jpg",
        description:
          "Bacon ipsum dolor amet ground round turducken bresaola filet mignon, swine sausage beef ribs.",
      },
      {
        id: "bee89629-0379-49b7-bf27-7fb491cf10df",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0077.jpg",
        description:
          "Bacon ipsum dolor amet boudin filet mignon meatloaf chislic venison tail leberkas.",
      },
      {
        id: "e8072217-d4b5-4fde-89ef-7c7d924dbc44",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0078.jpg",
        description:
          "Bacon ipsum dolor amet meatloaf hamburger short ribs, chislic sausage ground round chicken.",
      },
      {
        id: "55e2aee6-a5bc-437f-92d8-0e9f3fdbd2ea",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0079.jpg",
        description:
          "Bacon ipsum dolor amet kielbasa chuck short ribs, meatball pig strip steak jerky leberkas porchetta.",
      },
      {
        id: "52052acd-efa1-4eef-be00-564a2bb54c50",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0080.jpg",
        description:
          "Bacon ipsum dolor amet drumstick chicken ground round sirloin, alcatra pork chop beef chuck pig leberkas.",
      },
      {
        id: "2a0056f7-796c-4e57-9b26-1df6fec58505",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0081.jpg",
        description:
          "Bacon ipsum dolor amet meatloaf corned beef short loin, alcatra drumstick landjaeger chicken biltong bacon spare ribs beef leberkas shank kielbasa porchetta.",
      },
      {
        id: "9efa08ac-6b00-4ee5-89dd-34aaf5eb7442",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0082.jpg",
        description:
          "Bacon ipsum dolor amet tongue short ribs brisket, tenderloin cow sirloin pig burgdoggen shankle beef ribs alcatra leberkas chuck.",
      },
      {
        id: "231ac6e0-aca2-4981-bc54-e2de33b748fe",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0083.jpg",
        description:
          "Bacon ipsum dolor amet pastrami venison ground round, short ribs bacon pork belly pork loin sirloin shankle ribeye brisket ham.",
      },
      {
        id: "b48c9785-f397-4cea-9fe7-60d5838d241c",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0084.jpg",
        description:
          "Bacon ipsum dolor amet shank alcatra venison chicken landjaeger ham hock turducken pancetta flank ham bacon kielbasa cow doner.",
      },
      {
        id: "357426f2-bd2a-492b-bffa-3ba6a7732adf",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/03/0085.jpg",
        description:
          "Bacon ipsum dolor amet leberkas bacon corned beef shoulder drumstick andouille hamburger, shankle ball tip salami.",
      },
    ],
  },
  {
    number: 4,
    date: "29 de jan - 3 de fev",
    host: "João",
    id: "a7d16c80-4898-4700-bb25-2414eb863212",
    title: "Acampamento romântico para casais rodeado pela floresta",
    slug: "savassi-brasil",
    location: {
      description: "Savassi, Brasil",
      city: "Belo Horizonte",
      state: "Minas Gerais",
      country: "Brasil",
    },
    hasBadge: true,
    price: 200,
    rating: 4.6,
    testimonials: [
      {
        id: "69575505-e07e-4cc9-83f4-d95459511193",
        name: "Demilde",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/69575505-e07e-4cc9-83f4-d95459511193.jpg",
        comment:
          "Bacon ipsum dolor amet meatball pig turkey, kevin tenderloin meatloaf biltong rump capicola tongue tri-tip ball tip.",
        rating: 3.5,
        customerTime: 4,
        createdAt: 6,
        stayedAt: 3,
      },
      {
        id: "3957a2d5-dfca-4bc3-846d-e2bdf9f08dae",
        name: "Hilde",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/3957a2d5-dfca-4bc3-846d-e2bdf9f08dae.jpg",
        comment:
          "Bacon ipsum dolor amet prosciutto sirloin strip steak, meatball doner fatback picanha chislic pastrami andouille buffalo hamburger alcatra short loin tenderloin.",
        rating: 4.5,
        customerTime: 2,
        createdAt: 3,
        stayedAt: 5,
      },
      {
        id: "f6c89bff-23fc-4949-a9e4-568c2ff05bbb",
        name: "Ruperto",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/f6c89bff-23fc-4949-a9e4-568c2ff05bbb.jpg",
        comment:
          "Bacon ipsum dolor amet chicken shank turkey pork loin salami, pork tenderloin spare ribs brisket kielbasa corned beef strip steak prosciutto meatloaf.",
        rating: 4.5,
        customerTime: 3,
        createdAt: 4,
        stayedAt: 4,
      },
    ],
    photos: [
      {
        id: "8ee3eb9f-4d5a-47ba-87fe-e55249b0e944",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0086.jpg",
        description:
          "Bacon ipsum dolor amet fatback boudin bresaola chicken, ground round short ribs buffalo chislic pancetta shankle.",
      },
      {
        id: "4bc7d4fc-7e06-42ac-83dc-aebe73c6c34f",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0087.jpg",
        description:
          "Bacon ipsum dolor amet hamburger turducken cupim jowl t-bone.",
      },
      {
        id: "dfed578d-ba93-4d9a-a216-8781de83ecf3",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0088.jpg",
        description:
          "Bacon ipsum dolor amet kielbasa beef ribs meatball alcatra hamburger ball tip turkey chislic pastrami tail boudin ground round kevin.",
      },
      {
        id: "ab134876-e8af-415e-aacb-a79ef75581b8",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0089.jpg",
        description:
          "Bacon ipsum dolor amet porchetta cupim swine, pig sirloin andouille short loin picanha biltong tri-tip.",
      },
      {
        id: "f81ea5ae-a614-45b3-a1bb-fe4843f89802",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0090.jpg",
        description:
          "Bacon ipsum dolor amet tenderloin flank tri-tip kielbasa.",
      },
      {
        id: "75752a3e-3be3-4cc0-acc8-22c1440ff31b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0091.jpg",
        description:
          "Bacon ipsum dolor amet buffalo tongue landjaeger bacon chuck swine, cupim chislic.",
      },
      {
        id: "16338517-17ea-4208-b06e-e360bdc348c1",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0092.jpg",
        description:
          "Bacon ipsum dolor amet swine leberkas salami kevin meatloaf jowl pork rump boudin meatball pig strip steak drumstick tail t-bone.",
      },
      {
        id: "e84c82a4-6aaa-4b3d-9f66-0b93c5898361",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0093.jpg",
        description:
          "Bacon ipsum dolor amet chislic cupim prosciutto meatball t-bone tenderloin buffalo shoulder jowl bacon bresaola andouille pig rump.",
      },
      {
        id: "39c848e0-71fe-4dac-89d1-9710e9112b46",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0094.jpg",
        description:
          "Bacon ipsum dolor amet sausage ribeye turducken jowl, pork chop pork loin chicken corned beef prosciutto.",
      },
      {
        id: "bc053eb9-5b4b-44f3-9ecf-ae0ad7f6dfda",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0095.jpg",
        description:
          "Bacon ipsum dolor amet short loin ribeye ham pork loin venison shankle rump chuck frankfurter biltong meatball chicken turkey.",
      },
      {
        id: "8485696f-64a9-4e75-a7ec-6a3dc422360a",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0096.jpg",
        description:
          "Bacon ipsum dolor amet sirloin short loin pork loin chuck ball tip.",
      },
      {
        id: "766a2f86-3303-4520-8d15-aee39041f309",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0097.jpg",
        description: "Bacon ipsum dolor amet bacon shank short loin doner.",
      },
      {
        id: "342e7bcf-3141-46cd-93f5-742ac0fc2bc5",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0098.jpg",
        description:
          "Bacon ipsum dolor amet short loin turkey hamburger doner prosciutto drumstick corned beef pork chop kielbasa chicken.",
      },
      {
        id: "ec52d109-aa00-4efb-97c0-50063281b5b5",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0099.jpg",
        description:
          "Bacon ipsum dolor amet meatball shank filet mignon, tenderloin shankle bacon tongue biltong beef hamburger pig chislic alcatra turducken spare ribs.",
      },
      {
        id: "1f7d2942-5c06-4134-9825-ac0e3826bb70",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0100.jpg",
        description:
          "Bacon ipsum dolor amet sausage hamburger pancetta meatball prosciutto.",
      },
      {
        id: "94d5af95-18a4-4cf7-ae74-46b69f2025d8",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0101.jpg",
        description:
          "Bacon ipsum dolor amet andouille tri-tip boudin pork belly, ball tip corned beef turkey kevin biltong drumstick pancetta ribeye sirloin.",
      },
      {
        id: "5ce6b700-02b3-43a1-ba6f-bd40c8d43ac0",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0102.jpg",
        description:
          "Bacon ipsum dolor amet flank andouille pork loin turkey leberkas bresaola, biltong capicola.",
      },
      {
        id: "2beb4038-6c4b-4e3a-8456-243ea6b2295c",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0103.jpg",
        description:
          "Bacon ipsum dolor amet short ribs picanha meatloaf, kevin pork belly porchetta ham cow brisket pig landjaeger.",
      },
      {
        id: "a125efd5-9d5e-4fa8-8486-614db97e50d7",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0104.jpg",
        description:
          "Bacon ipsum dolor amet spare ribs tenderloin drumstick ribeye beef salami, frankfurter tongue pancetta brisket.",
      },
      {
        id: "f960d48b-e2b0-4b9d-abb6-616054646a17",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0105.jpg",
        description:
          "Bacon ipsum dolor amet ham porchetta salami, boudin pastrami shank ball tip beef pancetta venison swine burgdoggen drumstick.",
      },
      {
        id: "f429f8b5-327b-4cde-a93a-627389cda66f",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0106.jpg",
        description:
          "Bacon ipsum dolor amet ham hock rump chuck brisket burgdoggen.",
      },
      {
        id: "fc80c423-c038-4f6a-8d96-151f4f36ed87",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0107.jpg",
        description:
          "Bacon ipsum dolor amet shoulder ham salami, chislic sirloin biltong rump hamburger beef ribs kevin.",
      },
      {
        id: "01b86e0d-35c8-4d40-9d81-aeae8e5d7fea",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0108.jpg",
        description:
          "Bacon ipsum dolor amet chicken bresaola porchetta, turducken tail kielbasa flank boudin cow burgdoggen.",
      },
      {
        id: "59755a8f-95c4-4fb5-a0d3-b8bdef7cec49",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0109.jpg",
        description: "Bacon ipsum dolor amet shank ham hock cupim capicola.",
      },
      {
        id: "b08d22cc-2a78-4518-881e-d0c1e31ea6df",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0110.jpg",
        description:
          "Bacon ipsum dolor amet boudin jerky andouille, meatloaf jowl cupim corned beef.",
      },
      {
        id: "4e16b433-f165-4e02-bdf4-50ec7fd9e333",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0111.jpg",
        description:
          "Bacon ipsum dolor amet venison jowl picanha sausage chislic pig turducken frankfurter tongue.",
      },
      {
        id: "06476f1b-d66e-49b6-8ef7-61f2fe29f0b6",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0112.jpg",
        description:
          "Bacon ipsum dolor amet buffalo strip steak flank capicola beef ribs pig, shank short ribs.",
      },
      {
        id: "7d8bcd5e-95b7-4399-9684-4ca758ace7e9",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/04/0113.jpg",
        description:
          "Bacon ipsum dolor amet brisket kielbasa tongue beef ribs t-bone chuck pork loin pork fatback shankle corned beef chislic buffalo.",
      },
    ],
  },
  {
    number: 5,
    date: "5 - 10 de fev",
    host: "Mariana",
    id: "a882e2f1-4b77-4184-bca9-e4aaa534852f",
    title: "Casa triangulada rodeada por belas montanhas no Morro da Barra",
    slug: "morro-da-barra-brasil",
    location: {
      description: "Morro da Barra, Brasil",
      city: "Salvador",
      state: "Bahia",
      country: "Brasil",
    },
    hasBadge: true,
    price: 180,
    rating: 4.4,
    testimonials: [
      {
        id: "13f4fb17-7fcb-49e3-9338-b87cac2bb810",
        name: "Hugo",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/13f4fb17-7fcb-49e3-9338-b87cac2bb810.jpg",
        comment:
          "Bacon ipsum dolor amet bacon pork loin boudin shankle meatloaf tail salami cupim biltong jerky spare ribs brisket leberkas buffalo bresaola.",
        rating: 4,
        customerTime: 4,
        createdAt: 5,
        stayedAt: 2,
      },
      {
        id: "4ee7ba7e-2dfb-4959-8ab5-8952f7505b8d",
        name: "Elgar",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/4ee7ba7e-2dfb-4959-8ab5-8952f7505b8d.jpg",
        comment:
          "Bacon ipsum dolor amet jowl bresaola spare ribs capicola pork belly kielbasa, tongue salami.",
        rating: 3.5,
        customerTime: 6,
        createdAt: 2,
        stayedAt: 8,
      },
      {
        id: "5ade60a8-58b7-4925-b219-3a0f624c1b72",
        name: "Emily",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/5ade60a8-58b7-4925-b219-3a0f624c1b72.jpg",
        comment:
          "Bacon ipsum dolor amet tail pork belly meatloaf jerky ribeye.",
        rating: 3.5,
        customerTime: 8,
        createdAt: 2,
        stayedAt: 2,
      },
    ],
    photos: [
      {
        id: "b25db537-111f-4b0a-88bd-56bf53bc7db5",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0114.jpg",
        description:
          "Bacon ipsum dolor amet shankle jowl short loin short ribs shank pork alcatra.",
      },
      {
        id: "85353446-9c64-4569-9427-d5c71d72146b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0115.jpg",
        description:
          "Bacon ipsum dolor amet brisket boudin ball tip tongue cow, shoulder doner landjaeger spare ribs pork chop chislic ribeye.",
      },
      {
        id: "a2cc1b4f-d40a-4d2d-9799-70bbf485fa29",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0116.jpg",
        description:
          "Bacon ipsum dolor amet pork chop meatloaf rump, prosciutto t-bone alcatra chicken beef ball tip.",
      },
      {
        id: "b4116fc7-1600-49c5-936d-a1d960dadbaa",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0117.jpg",
        description:
          "Bacon ipsum dolor amet boudin fatback tongue strip steak picanha chislic shankle kielbasa swine.",
      },
      {
        id: "43bfafb9-f2dc-4c21-87d2-534f0bc1dcc6",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0118.jpg",
        description:
          "Bacon ipsum dolor amet flank ground round buffalo pancetta drumstick burgdoggen, bresaola andouille chislic venison turkey.",
      },
      {
        id: "fe6fcce8-282b-4975-b62c-913fb2e43fc2",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0119.jpg",
        description:
          "Bacon ipsum dolor amet picanha leberkas alcatra chicken, turducken landjaeger pork bresaola strip steak beef filet mignon chuck fatback.",
      },
      {
        id: "7525a97c-32da-4b7e-a35f-7de9c5156990",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0120.jpg",
        description:
          "Bacon ipsum dolor amet salami rump strip steak brisket shank prosciutto drumstick tail beef ribs.",
      },
      {
        id: "7757513c-9e8d-44f4-80a0-1bce24d3f942",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0121.jpg",
        description: "Bacon ipsum dolor amet buffalo t-bone kielbasa meatloaf.",
      },
      {
        id: "ce8cf338-748c-43eb-ac31-08c66d5c87ff",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0122.jpg",
        description:
          "Bacon ipsum dolor amet brisket venison beef ribs, jerky pork belly pig boudin spare ribs buffalo rump meatloaf.",
      },
      {
        id: "391ab56d-b45a-4c0c-9f48-de2a98ee8bd0",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0123.jpg",
        description:
          "Bacon ipsum dolor amet rump cupim tail bresaola hamburger jowl pork belly.",
      },
      {
        id: "aca26128-7f52-4f1b-966a-60b5c35ba654",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0124.jpg",
        description:
          "Bacon ipsum dolor amet tenderloin bacon cow meatloaf alcatra chuck kielbasa shankle brisket turducken pork loin chicken prosciutto.",
      },
      {
        id: "37c38907-518c-4764-942c-523a64dfdcf7",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0125.jpg",
        description:
          "Bacon ipsum dolor amet filet mignon porchetta ribeye shoulder t-bone turducken cupim chuck ham.",
      },
      {
        id: "2eaf0b57-6b12-4a29-b1ff-0f90cf1e4600",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0126.jpg",
        description: "Bacon ipsum dolor amet alcatra meatloaf jowl shoulder.",
      },
      {
        id: "0d4237ec-bcf5-49d1-ba87-da2eff66b3db",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0127.jpg",
        description:
          "Bacon ipsum dolor amet rump short loin alcatra burgdoggen shank venison sausage drumstick jerky.",
      },
      {
        id: "c576b06f-2433-4e12-a2d7-adc43ab9ed75",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0128.jpg",
        description:
          "Bacon ipsum dolor amet jowl chislic landjaeger flank beef ribs.",
      },
      {
        id: "b78230fb-6cd3-4055-814e-eb8b8d5057e4",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0129.jpg",
        description:
          "Bacon ipsum dolor amet shoulder spare ribs pork chop tail kielbasa corned beef pig jerky boudin chuck swine meatloaf doner venison shankle.",
      },
      {
        id: "45f604e6-3171-43bf-86d1-4d58161f7438",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0130.jpg",
        description:
          "Bacon ipsum dolor amet strip steak spare ribs boudin ball tip, short ribs salami sausage short loin porchetta andouille doner.",
      },
      {
        id: "c052972f-e1cb-4624-b99f-2e611e63052e",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0131.jpg",
        description:
          "Bacon ipsum dolor amet kevin pig andouille, ham ground round cow turkey salami brisket jerky frankfurter.",
      },
      {
        id: "0eec227f-f9ee-4fc4-a8d8-3866c2968260",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0132.jpg",
        description: "Bacon ipsum dolor amet chuck leberkas spare ribs swine.",
      },
      {
        id: "5380c86a-b7fa-42b6-aaf7-c625b69c0c10",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0133.jpg",
        description:
          "Bacon ipsum dolor amet leberkas bacon short loin tail landjaeger andouille ball tip turkey doner pastrami jowl frankfurter beef ribs cupim.",
      },
      {
        id: "75c8f72a-0b03-439a-93f7-37fb5999a767",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0134.jpg",
        description:
          "Bacon ipsum dolor amet t-bone chislic venison alcatra cow beef ribs kielbasa prosciutto spare ribs meatloaf chicken chuck turducken pork chop ball tip.",
      },
      {
        id: "1c5b01c4-1841-4f3d-ad0f-256942d37a1a",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0135.jpg",
        description:
          "Bacon ipsum dolor amet hamburger swine jowl kielbasa sausage.",
      },
      {
        id: "dbf14532-64d7-4b7e-a9cd-dcef9e552ed2",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0136.jpg",
        description:
          "Bacon ipsum dolor amet hamburger sirloin rump beef ribs, tongue ground round buffalo capicola corned beef leberkas pork belly shoulder ribeye porchetta swine.",
      },
      {
        id: "3596bf29-1da0-4d65-886e-de7e35747a15",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0137.jpg",
        description:
          "Bacon ipsum dolor amet kielbasa burgdoggen strip steak pancetta shank, short ribs chicken ribeye sirloin flank salami.",
      },
      {
        id: "73dbb3be-549d-48d4-b9ff-f9790d26965c",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0138.jpg",
        description:
          "Bacon ipsum dolor amet tongue shank andouille, flank kielbasa beef ribs meatball prosciutto pancetta.",
      },
      {
        id: "fd2f7f4d-a0ad-4662-adb6-877d90885b62",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0139.jpg",
        description:
          "Bacon ipsum dolor amet beef ribs brisket swine pork leberkas short loin venison jerky buffalo ball tip.",
      },
      {
        id: "df3e4a57-72a3-43a3-9bba-40aaa898a412",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0140.jpg",
        description:
          "Bacon ipsum dolor amet ball tip fatback chislic prosciutto leberkas, spare ribs meatloaf short ribs cupim shankle drumstick sirloin turducken jerky.",
      },
      {
        id: "b5700681-f185-4aef-afcd-417f8b435934",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0141.jpg",
        description:
          "Bacon ipsum dolor amet pancetta hamburger jerky short loin cupim porchetta sausage spare ribs meatloaf turducken shoulder buffalo ground round.",
      },
      {
        id: "70104d8f-d514-4437-829e-71c44e98adbd",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/05/0142.jpg",
        description:
          "Bacon ipsum dolor amet tenderloin cow prosciutto meatloaf alcatra frankfurter.",
      },
    ],
  },
  {
    number: 6,
    date: "12 - 17 de fev",
    host: "Pedro",
    id: "136b628c-d0ab-40b8-a913-2107066b0fe3",
    title: "Acampamento ao ar livre para descanso e meditação",
    slug: "meireles-brasil",
    location: {
      description: "Meireles, Brasil",
      city: "Fortaleza",
      state: "Ceará",
      country: "Brasil",
    },
    hasBadge: true,
    price: 220,
    rating: 4.5,
    testimonials: [
      {
        id: "6fd0dd65-5d0c-463f-96a5-e95b8b5fa31b",
        name: "Leopoldo",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/6fd0dd65-5d0c-463f-96a5-e95b8b5fa31b.jpg",
        comment:
          "Bacon ipsum dolor amet bresaola t-bone chislic, tenderloin porchetta cow tail andouille pastrami.",
        rating: 4,
        customerTime: 6,
        createdAt: 8,
        stayedAt: 4,
      },
      {
        id: "eeaecb4f-5126-4006-8d5f-5b23cc9e7106",
        name: "Vero",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/eeaecb4f-5126-4006-8d5f-5b23cc9e7106.jpg",
        comment:
          "Bacon ipsum dolor amet capicola sausage beef, pork chop prosciutto venison flank tri-tip tenderloin beef ribs kevin.",
        rating: 3.5,
        customerTime: 8,
        createdAt: 5,
        stayedAt: 2,
      },
      {
        id: "151cb009-96ac-47ee-a572-e55a1853421c",
        name: "Elisane",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/151cb009-96ac-47ee-a572-e55a1853421c.jpg",
        comment:
          "Bacon ipsum dolor amet porchetta prosciutto beef, brisket kielbasa ham corned beef swine tenderloin.",
        rating: 4,
        customerTime: 5,
        createdAt: 3,
        stayedAt: 6,
      },
    ],
    photos: [
      {
        id: "f5652882-254a-4f35-97f3-45c79c6a79cc",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0143.jpg",
        description:
          "Bacon ipsum dolor amet cow t-bone capicola, ribeye pork chop ham drumstick frankfurter corned beef.",
      },
      {
        id: "fec94154-c0d0-4e03-82cb-3a6bb9095e46",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0144.jpg",
        description:
          "Bacon ipsum dolor amet short ribs biltong prosciutto, flank doner bacon ground round pork drumstick.",
      },
      {
        id: "a5262a05-37e1-4a31-9fdc-bb343d498a46",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0145.jpg",
        description:
          "Bacon ipsum dolor amet pork loin beef ribs bacon short ribs kevin venison.",
      },
      {
        id: "201693f9-7c3f-418c-93eb-b1f652f9b977",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0146.jpg",
        description:
          "Bacon ipsum dolor amet frankfurter meatloaf jerky leberkas short loin rump pork loin boudin ham.",
      },
      {
        id: "5b4a2c75-e691-4947-81bb-fcd1a80461e0",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0147.jpg",
        description:
          "Bacon ipsum dolor amet leberkas picanha shoulder, brisket fatback andouille chislic burgdoggen alcatra pork chuck meatball jowl ham hock.",
      },
      {
        id: "9450d423-50a2-4297-849d-9b0413f1ad21",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0148.jpg",
        description:
          "Bacon ipsum dolor amet swine pork t-bone, drumstick meatloaf beef ribs shank sirloin chislic.",
      },
      {
        id: "d8283e52-1d00-4dbc-a577-018156d154d6",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0149.jpg",
        description: "Bacon ipsum dolor amet meatloaf chicken bresaola salami.",
      },
      {
        id: "f0419f9a-2bb8-467b-b615-4a6bf83d6d1e",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0150.jpg",
        description:
          "Bacon ipsum dolor amet meatball leberkas rump ball tip pastrami, picanha kielbasa cupim bresaola venison doner corned beef beef ribs sausage.",
      },
      {
        id: "9c0b3261-4030-4679-962a-8c280f7cddc1",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0151.jpg",
        description:
          "Bacon ipsum dolor amet bacon strip steak cupim t-bone beef ribs meatloaf boudin pork chop cow pancetta kielbasa filet mignon meatball.",
      },
      {
        id: "fdc5bc05-31a1-4eaf-bad9-987f7a1a919b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0152.jpg",
        description:
          "Bacon ipsum dolor amet salami bresaola sirloin drumstick cow meatball kevin rump shoulder pork spare ribs pork loin pork belly boudin ribeye.",
      },
      {
        id: "d39d3e99-ef0a-47c1-a6a6-183ac86f9531",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0153.jpg",
        description:
          "Bacon ipsum dolor amet kevin capicola prosciutto rump t-bone pancetta.",
      },
      {
        id: "9282ee60-40b2-4510-a60b-8429c4bb9acd",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0154.jpg",
        description:
          "Bacon ipsum dolor amet biltong turkey chicken pork belly cupim, buffalo pastrami porchetta turducken shoulder ball tip pancetta chislic.",
      },
      {
        id: "a3a47d14-1769-454c-ad96-2d9d293b9a2b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0155.jpg",
        description:
          "Bacon ipsum dolor amet pastrami doner short loin, bresaola pancetta t-bone alcatra frankfurter turducken biltong ham bacon corned beef cupim ground round.",
      },
      {
        id: "234e8a26-08b1-44c2-8b80-99df9d7c15df",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0156.jpg",
        description:
          "Bacon ipsum dolor amet tenderloin strip steak ball tip, sausage drumstick porchetta spare ribs short ribs buffalo picanha meatball.",
      },
      {
        id: "815b8e30-2b8e-4234-8ed9-391bd1563947",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0157.jpg",
        description:
          "Bacon ipsum dolor amet chislic ham hock bresaola cupim kielbasa.",
      },
      {
        id: "b0a2af80-fc56-42a0-b055-6c61573607fc",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0158.jpg",
        description:
          "Bacon ipsum dolor amet pancetta pork chop turkey, sirloin flank swine ham hock meatball tongue biltong.",
      },
      {
        id: "a36a0e5a-d268-4951-ba3b-858978e74601",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0159.jpg",
        description:
          "Bacon ipsum dolor amet ground round corned beef cow chislic, strip steak beef shoulder kielbasa ham hock pancetta tri-tip drumstick short ribs filet mignon shank.",
      },
      {
        id: "5e149fc6-0697-4f46-814d-dbe24b94ada2",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0160.jpg",
        description:
          "Bacon ipsum dolor amet landjaeger kielbasa rump jerky tenderloin shoulder swine sausage meatball.",
      },
      {
        id: "90763406-45f0-47e0-af5c-b3b6b0ca4e5f",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0161.jpg",
        description:
          "Bacon ipsum dolor amet short loin hamburger short ribs picanha andouille tenderloin meatloaf kielbasa leberkas brisket ground round.",
      },
      {
        id: "8d02525c-a286-4c9f-a712-5439fc611a3a",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0162.jpg",
        description:
          "Bacon ipsum dolor amet ham beef ribs spare ribs salami, tongue buffalo shoulder.",
      },
      {
        id: "b9c2b7b3-c32f-44f5-ae58-c5cdb71decc0",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0163.jpg",
        description:
          "Bacon ipsum dolor amet turkey andouille meatball tail hamburger leberkas prosciutto pork belly shankle pancetta tenderloin tri-tip alcatra picanha jowl.",
      },
      {
        id: "103ec871-43cb-4cc8-ae12-3589c9b7c250",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0164.jpg",
        description:
          "Bacon ipsum dolor amet beef ribs ham hock cupim salami, drumstick beef chicken cow alcatra.",
      },
      {
        id: "c90eb5aa-ff21-4af5-a2c6-33c3a05d293e",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0165.jpg",
        description:
          "Bacon ipsum dolor amet beef porchetta jowl sirloin pancetta pork belly, corned beef t-bone leberkas flank shank meatloaf buffalo turkey beef ribs.",
      },
      {
        id: "b08cbbaa-9557-4a65-9620-7dee4adf2a43",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0166.jpg",
        description:
          "Bacon ipsum dolor amet turkey pork andouille biltong hamburger leberkas flank.",
      },
      {
        id: "f9dd36f5-ac7a-483a-9ba4-6c7c98f4acb7",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0167.jpg",
        description:
          "Bacon ipsum dolor amet alcatra cow beef ribs frankfurter.",
      },
      {
        id: "f0a449a1-8608-4115-b677-cc76f18ff239",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0168.jpg",
        description:
          "Bacon ipsum dolor amet brisket picanha chicken boudin frankfurter kielbasa prosciutto biltong drumstick tri-tip jowl ribeye chuck.",
      },
      {
        id: "f2411aa5-263b-4286-87af-89e83623a016",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0169.jpg",
        description:
          "Bacon ipsum dolor amet shank prosciutto pastrami porchetta capicola cow swine.",
      },
      {
        id: "b5a72aaa-d2ca-43b9-a03e-33733e63fb7e",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/06/0170.jpg",
        description:
          "Bacon ipsum dolor amet short ribs spare ribs pancetta buffalo sausage flank.",
      },
    ],
  },
  {
    number: 7,
    date: "19 - 24 de fev",
    host: "Lucas",
    id: "950d028f-eea1-4930-b6e2-85a956a21967",
    title: "Espaço aberto para descobrimento e reflexão no Centro Histórico",
    slug: "centro-historico-brasil",
    location: {
      description: "Centro Histórico, Brasil",
      city: "Curitiba",
      state: "Paraná",
      country: "Brasil",
    },
    hasBadge: true,
    price: 160,
    rating: 4.2,
    testimonials: [
      {
        id: "de5447d8-e465-4615-83e2-a9c9e1caa1ed",
        name: "Marito",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/de5447d8-e465-4615-83e2-a9c9e1caa1ed.jpg",
        comment:
          "Bacon ipsum dolor amet leberkas chicken pork belly, jerky kevin boudin frankfurter tail fatback biltong.",
        rating: 5,
        customerTime: 7,
        createdAt: 7,
        stayedAt: 4,
      },
      {
        id: "8c9dd784-b860-4d5e-95c6-9e0041dec51d",
        name: "Lois",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/8c9dd784-b860-4d5e-95c6-9e0041dec51d.jpg",
        comment:
          "Bacon ipsum dolor amet filet mignon alcatra capicola doner biltong.",
        rating: 4,
        customerTime: 6,
        createdAt: 2,
        stayedAt: 2,
      },
      {
        id: "db98cc1a-f2a2-4509-8c9e-18ceabbf0ddc",
        name: "Ester",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/db98cc1a-f2a2-4509-8c9e-18ceabbf0ddc.jpg",
        comment:
          "Bacon ipsum dolor amet flank filet mignon jowl salami pancetta.",
        rating: 4.5,
        customerTime: 3,
        createdAt: 7,
        stayedAt: 5,
      },
    ],
    photos: [
      {
        id: "227290fa-8152-4f60-9fd1-30b4f71c8af6",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0171.jpg",
        description:
          "Bacon ipsum dolor amet pancetta brisket pork belly pork loin ham hock hamburger buffalo.",
      },
      {
        id: "eb179b59-43eb-4397-95f7-1ad176180130",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0172.jpg",
        description:
          "Bacon ipsum dolor amet ham hock shank doner ribeye, pork salami bresaola capicola meatloaf short ribs swine alcatra.",
      },
      {
        id: "93ed1fe1-9e21-4c2e-b01f-c4406a4df116",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0173.jpg",
        description:
          "Bacon ipsum dolor amet sausage prosciutto short loin brisket.",
      },
      {
        id: "ee0bf2d7-5af1-451d-a6a2-51a1ff5d84be",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0174.jpg",
        description:
          "Bacon ipsum dolor amet salami kevin pork sausage, burgdoggen spare ribs shankle short ribs jerky frankfurter meatball prosciutto swine sirloin.",
      },
      {
        id: "4f1833e0-ffc5-48ab-8d61-5e91180ad34e",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0175.jpg",
        description:
          "Bacon ipsum dolor amet venison brisket capicola burgdoggen tri-tip meatball bacon pork belly kielbasa spare ribs pig ham cow.",
      },
      {
        id: "251a2dbc-faaf-4216-8e9c-1c46b4b40bbb",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0176.jpg",
        description:
          "Bacon ipsum dolor amet ham cupim buffalo leberkas beef, burgdoggen alcatra.",
      },
      {
        id: "2698fbb0-ee59-44e2-a831-e0dd591e1538",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0177.jpg",
        description:
          "Bacon ipsum dolor amet cupim pastrami brisket pancetta cow.",
      },
      {
        id: "75350259-a59d-4c04-bc07-7c184ae96398",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0178.jpg",
        description:
          "Bacon ipsum dolor amet alcatra prosciutto filet mignon shoulder, chislic short loin pork jerky frankfurter.",
      },
      {
        id: "b7f6f49e-7d2d-4a9f-a964-1f4c4b260c56",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0179.jpg",
        description:
          "Bacon ipsum dolor amet leberkas sirloin kevin ribeye sausage ham buffalo turducken tri-tip jowl.",
      },
      {
        id: "1ba57cea-b667-4e90-8b46-5fba3f0cdb4c",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0180.jpg",
        description:
          "Bacon ipsum dolor amet buffalo pastrami kevin t-bone bacon strip steak salami chislic.",
      },
      {
        id: "b3d101e0-576d-448b-835b-9c2ece0ebe7a",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0181.jpg",
        description:
          "Bacon ipsum dolor amet capicola turkey boudin kielbasa shankle bacon biltong cupim short loin jowl buffalo brisket.",
      },
      {
        id: "c6e994e7-6a9b-4d15-8987-68118967f7b9",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0182.jpg",
        description:
          "Bacon ipsum dolor amet biltong spare ribs chuck burgdoggen andouille short ribs.",
      },
      {
        id: "b7059cf7-3f84-4aff-aa74-df6749c8b09e",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0183.jpg",
        description:
          "Bacon ipsum dolor amet venison rump andouille, short ribs shank shoulder picanha hamburger meatball.",
      },
      {
        id: "fd5ccab7-086d-4cd3-b2ef-98c96fa6f96d",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0184.jpg",
        description: "Bacon ipsum dolor amet shankle jowl kevin ham hock.",
      },
      {
        id: "e102ad02-20b1-416c-a36b-7b0d0bd1752d",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0185.jpg",
        description:
          "Bacon ipsum dolor amet drumstick cow turducken jowl, hamburger porchetta tri-tip short loin rump biltong meatball pork loin.",
      },
      {
        id: "3dd6dc9b-fa36-4ee3-bf10-39b0780496cd",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0186.jpg",
        description:
          "Bacon ipsum dolor amet brisket pork loin sirloin, turkey sausage short ribs bresaola meatball pork meatloaf beef pig.",
      },
      {
        id: "440a933e-720e-40dc-acac-01f310b1300a",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0187.jpg",
        description:
          "Bacon ipsum dolor amet rump jowl porchetta kevin pork loin beef strip steak shankle flank buffalo chislic t-bone beef ribs.",
      },
      {
        id: "c58c6b9c-348f-43d0-b05a-20b78d8a3cb0",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0188.jpg",
        description:
          "Bacon ipsum dolor amet tail filet mignon short loin shank ham fatback venison landjaeger kevin chicken sirloin.",
      },
      {
        id: "0c8e4220-cd6c-4150-9fe5-c792f90583a1",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0189.jpg",
        description:
          "Bacon ipsum dolor amet andouille drumstick doner shank cow pig pork belly meatloaf fatback picanha ham venison kielbasa.",
      },
      {
        id: "42f4fca3-adc3-412f-a835-21d0554b8bc3",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0190.jpg",
        description:
          "Bacon ipsum dolor amet pastrami leberkas shank, salami flank short loin prosciutto cupim pork belly buffalo boudin.",
      },
      {
        id: "5a6a0156-520a-43b9-b1a5-19e747561a28",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0191.jpg",
        description:
          "Bacon ipsum dolor amet kevin buffalo porchetta tenderloin, pork belly bacon ribeye filet mignon corned beef salami swine shank shoulder sausage.",
      },
      {
        id: "78d284d5-997c-427d-a534-3b7d009b4ccf",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0192.jpg",
        description:
          "Bacon ipsum dolor amet ham swine meatloaf, boudin jerky short ribs venison strip steak pastrami chicken ball tip.",
      },
      {
        id: "3f35ab82-f0f1-4056-944f-b610f3e117ae",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0193.jpg",
        description:
          "Bacon ipsum dolor amet doner short ribs boudin turkey turducken chislic tri-tip.",
      },
      {
        id: "e78c23b7-4f38-4777-97c0-cf0abee769c6",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0194.jpg",
        description:
          "Bacon ipsum dolor amet doner capicola porchetta tenderloin kielbasa pork loin.",
      },
      {
        id: "b447f87b-a49c-4159-a3b7-92e7acf5a364",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0195.jpg",
        description:
          "Bacon ipsum dolor amet ball tip pork loin pork belly bresaola, swine burgdoggen jerky landjaeger chislic shankle.",
      },
      {
        id: "b57d5db9-1b06-4953-8b96-294cf17cc078",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0196.jpg",
        description:
          "Bacon ipsum dolor amet ham hock pork belly picanha chuck shoulder prosciutto.",
      },
      {
        id: "9dbbcc77-0751-417e-8420-75f6ed29f23d",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0197.jpg",
        description:
          "Bacon ipsum dolor amet andouille rump alcatra, venison ground round chislic frankfurter.",
      },
      {
        id: "e1f73758-843b-455d-834d-855c620c86d3",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0198.jpg",
        description:
          "Bacon ipsum dolor amet prosciutto short ribs ball tip flank ham.",
      },
      {
        id: "24d487fe-a3c5-4c5c-82a1-83033ad1cc2d",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/07/0199.jpg",
        description:
          "Bacon ipsum dolor amet rump pork chop sausage beef ribs drumstick.",
      },
    ],
  },
  {
    number: 8,
    date: "26 de fev - 3 de mar",
    host: "Fernanda",
    id: "3f23bbd7-ff5b-4d8d-ae34-948b1e25ce83",
    title: "Espaço aberto nas montanhas para aventuras e descanso",
    slug: "jurere-brasil",
    location: {
      description: "Jurerê, Brasil",
      city: "Florianópolis",
      state: "Santa Catarina",
      country: "Brasil",
    },
    hasBadge: false,
    price: 250,
    rating: 4.8,
    testimonials: [
      {
        id: "2fb2bdf4-7863-44fe-9852-2b2fdee2c4ee",
        name: "Alarico",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/2fb2bdf4-7863-44fe-9852-2b2fdee2c4ee.jpg",
        comment:
          "Bacon ipsum dolor amet porchetta salami burgdoggen tail rump biltong.",
        rating: 4,
        customerTime: 5,
        createdAt: 5,
        stayedAt: 7,
      },
      {
        id: "6178ea99-3fad-4f07-add7-7503f4773004",
        name: "Rolim",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/6178ea99-3fad-4f07-add7-7503f4773004.jpg",
        comment:
          "Bacon ipsum dolor amet tenderloin short loin porchetta ribeye, meatball pastrami drumstick hamburger beef ribs venison landjaeger chuck.",
        rating: 3.5,
        customerTime: 5,
        createdAt: 7,
        stayedAt: 4,
      },
      {
        id: "8466c27b-5604-424b-9971-01695447ae46",
        name: "Samuel",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/8466c27b-5604-424b-9971-01695447ae46.jpg",
        comment:
          "Bacon ipsum dolor amet kielbasa swine hamburger burgdoggen, t-bone chicken ham hock beef tri-tip pork cow sausage pig.",
        rating: 5,
        customerTime: 7,
        createdAt: 5,
        stayedAt: 4,
      },
    ],
    photos: [
      {
        id: "fef0b517-9359-4f30-99c4-e7d573b1ce69",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0200.jpg",
        description: "Bacon ipsum dolor amet boudin sirloin cupim hamburger.",
      },
      {
        id: "051e15c2-da5b-4e22-b5dd-2328b1401f78",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0201.jpg",
        description:
          "Bacon ipsum dolor amet drumstick jowl sirloin boudin hamburger cow pastrami frankfurter buffalo biltong ham hock ribeye pork loin tongue.",
      },
      {
        id: "58847e52-fc09-47e2-a4b5-0c38ce1cb99b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0202.jpg",
        description:
          "Bacon ipsum dolor amet t-bone porchetta hamburger landjaeger short ribs jerky ball tip.",
      },
      {
        id: "e572af9b-e059-43fd-80b5-180ca86b7fe8",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0203.jpg",
        description:
          "Bacon ipsum dolor amet frankfurter tenderloin capicola, bresaola meatloaf sirloin t-bone tri-tip chuck chislic leberkas.",
      },
      {
        id: "1b1a04b8-fe37-4209-8a54-c7007299f4f7",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0204.jpg",
        description:
          "Bacon ipsum dolor amet chicken pig tenderloin short loin hamburger pastrami beef ribs turkey cupim biltong andouille boudin swine.",
      },
      {
        id: "417fe4b6-8745-436d-8f71-1bc997bda776",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0205.jpg",
        description: "Bacon ipsum dolor amet buffalo turkey tongue venison.",
      },
      {
        id: "4e66caa9-be4d-4962-bf3f-ff17c90af469",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0206.jpg",
        description:
          "Bacon ipsum dolor amet doner turkey short loin picanha beef ribs ground round, shank shoulder fatback.",
      },
      {
        id: "79e34d50-bcc7-4d0c-a4a0-3ff931aaaa14",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0207.jpg",
        description:
          "Bacon ipsum dolor amet cupim tail sausage kielbasa chuck short loin doner shoulder jerky chicken ball tip cow pork chop ham.",
      },
      {
        id: "791102ed-fcc4-4847-ba97-79122d3cb82c",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0208.jpg",
        description:
          "Bacon ipsum dolor amet pork corned beef shankle, short loin leberkas tenderloin filet mignon chislic bacon boudin ground round flank.",
      },
      {
        id: "9b396c30-db8b-455b-bc2a-e4ece64e4daa",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0209.jpg",
        description:
          "Bacon ipsum dolor amet drumstick hamburger capicola tri-tip short ribs ham, flank jowl turducken spare ribs turkey shank kevin picanha tenderloin.",
      },
      {
        id: "df08d2b1-2fb6-4529-a268-54740ead1f4f",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0210.jpg",
        description:
          "Bacon ipsum dolor amet pork chop porchetta meatloaf biltong strip steak.",
      },
      {
        id: "3c4288a1-f6ed-4910-9480-7ed468473854",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0211.jpg",
        description: "Bacon ipsum dolor amet boudin capicola chuck doner.",
      },
      {
        id: "85de437f-03bc-4fff-b42b-c2ec460278f6",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0212.jpg",
        description:
          "Bacon ipsum dolor amet doner shankle beef ham hock jerky salami.",
      },
      {
        id: "09ee6548-3763-4fd6-a066-5ec102035f51",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0213.jpg",
        description:
          "Bacon ipsum dolor amet pork loin sirloin pig, picanha shoulder corned beef shank fatback hamburger pastrami ribeye meatball t-bone doner.",
      },
      {
        id: "ff9b61ea-59d9-45cb-b9b0-a6ce4c82a6d1",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0214.jpg",
        description:
          "Bacon ipsum dolor amet fatback andouille pork chop swine rump.",
      },
      {
        id: "cceb813e-7431-4ded-8cdd-8f7a09bb6cb2",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0215.jpg",
        description:
          "Bacon ipsum dolor amet tail burgdoggen salami sirloin turkey prosciutto shankle filet mignon buffalo tenderloin shank.",
      },
      {
        id: "e9d85b98-e887-4a46-ae17-e9d6c13eba01",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0216.jpg",
        description:
          "Bacon ipsum dolor amet burgdoggen pork belly sausage ham hock ball tip leberkas short ribs beef ribs.",
      },
      {
        id: "840b2316-c8bb-4d76-ba5d-7423f7c8f239",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0217.jpg",
        description:
          "Bacon ipsum dolor amet bresaola rump ball tip corned beef sausage jowl venison burgdoggen swine shoulder frankfurter kielbasa short ribs beef shank.",
      },
      {
        id: "2892b0d4-167b-46e1-b288-0ec46fe16b45",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0218.jpg",
        description:
          "Bacon ipsum dolor amet pork belly ball tip short loin bacon doner pig kielbasa chuck salami filet mignon.",
      },
      {
        id: "e4d88b02-8405-4db1-9676-50981bb39b15",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0219.jpg",
        description:
          "Bacon ipsum dolor amet ground round short loin rump, flank venison shankle pork loin jerky capicola beef sausage ribeye.",
      },
      {
        id: "fe0c2988-25af-4f3d-9c1c-8775f21206f3",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0220.jpg",
        description:
          "Bacon ipsum dolor amet ribeye biltong leberkas spare ribs, pork chop kielbasa turkey pork belly tenderloin pastrami fatback.",
      },
      {
        id: "dc77b324-d1a3-4954-af86-4d60b7df9f48",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0221.jpg",
        description:
          "Bacon ipsum dolor amet frankfurter t-bone cow jowl hamburger ham.",
      },
      {
        id: "fe2a13f0-0f8f-4f79-9db6-0626908e4ac8",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0222.jpg",
        description:
          "Bacon ipsum dolor amet ground round jerky venison shoulder, biltong jowl ham hock.",
      },
      {
        id: "255edddd-d5c4-477a-a76a-c4453cd9d8bb",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0223.jpg",
        description:
          "Bacon ipsum dolor amet picanha jowl cow hamburger, salami tongue ham hock rump fatback.",
      },
      {
        id: "ec17f4c1-907c-40e7-bc7a-a6a469c7d9ae",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0224.jpg",
        description:
          "Bacon ipsum dolor amet filet mignon beef ribs hamburger landjaeger.",
      },
      {
        id: "1943b6f8-6abb-4562-a523-81672c57282c",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0225.jpg",
        description:
          "Bacon ipsum dolor amet pork belly turkey pig, boudin sausage jowl ball tip short loin bresaola drumstick alcatra bacon frankfurter andouille capicola.",
      },
      {
        id: "42dd1eeb-1476-4c36-b2bb-a49a64b3edf5",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0226.jpg",
        description:
          "Bacon ipsum dolor amet strip steak flank fatback beef pork belly brisket.",
      },
      {
        id: "42b795c3-887a-4ce5-b2f9-d90cfc9f8024",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0227.jpg",
        description:
          "Bacon ipsum dolor amet porchetta jowl turkey chicken bresaola, t-bone fatback cupim capicola cow.",
      },
      {
        id: "80969245-74da-4db1-9ffd-149b4af1ee80",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/08/0228.jpg",
        description:
          "Bacon ipsum dolor amet pork chop ham hock prosciutto pancetta, salami shoulder turkey chislic rump andouille buffalo.",
      },
    ],
  },
  {
    number: 9,
    date: "5 - 10 de mar",
    host: "Rafael",
    id: "6f8981e8-a502-4a6e-93a9-d87a45adf5c8",
    title: "Local para descansar perto das árvores e dos pássaros",
    slug: "moinhos-de-vento-brasil",
    location: {
      description: "Moinhos de Vento, Brasil",
      city: "Porto Alegre",
      state: "Rio Grande do Sul",
      country: "Brasil",
    },
    hasBadge: false,
    price: 190,
    rating: 4.5,
    testimonials: [
      {
        id: "6d9174c0-24aa-41d2-854a-7fdfca0d205f",
        name: "Enilda",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/6d9174c0-24aa-41d2-854a-7fdfca0d205f.jpg",
        comment:
          "Bacon ipsum dolor amet ham sausage pork porchetta burgdoggen capicola corned beef shoulder flank pastrami.",
        rating: 3.5,
        customerTime: 6,
        createdAt: 6,
        stayedAt: 2,
      },
      {
        id: "3cf02dbe-6102-42ba-8715-0d797afc0065",
        name: "Irma",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/3cf02dbe-6102-42ba-8715-0d797afc0065.jpg",
        comment: "Bacon ipsum dolor amet ham meatloaf sirloin hamburger rump.",
        rating: 4,
        customerTime: 3,
        createdAt: 8,
        stayedAt: 6,
      },
      {
        id: "a4d9dde2-51f8-4946-9b3c-69cea80b963c",
        name: "Clídio",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/a4d9dde2-51f8-4946-9b3c-69cea80b963c.jpg",
        comment:
          "Bacon ipsum dolor amet pork belly frankfurter capicola, chicken prosciutto jowl boudin beef shank pig.",
        rating: 3.5,
        customerTime: 5,
        createdAt: 3,
        stayedAt: 5,
      },
    ],
    photos: [
      {
        id: "39cbfaac-cb2d-4f91-88a1-1eccf09f9866",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0229.jpg",
        description:
          "Bacon ipsum dolor amet chicken ham pork, short loin picanha turducken pastrami.",
      },
      {
        id: "b5022443-800c-4cd8-b7b6-378fd79ccf89",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0230.jpg",
        description:
          "Bacon ipsum dolor amet andouille landjaeger kevin corned beef short ribs chislic hamburger pork chop short loin biltong pork loin leberkas bresaola cow shank.",
      },
      {
        id: "a2c1aadd-d8f3-425f-b3d9-65187f734965",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0231.jpg",
        description:
          "Bacon ipsum dolor amet tenderloin meatball ball tip filet mignon bresaola jerky, ham hock burgdoggen kielbasa buffalo pork frankfurter corned beef ham shoulder.",
      },
      {
        id: "e3e9d23a-26d3-4ef6-be2c-3cf52ee0f4c5",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0232.jpg",
        description:
          "Bacon ipsum dolor amet sirloin alcatra pastrami t-bone turkey.",
      },
      {
        id: "1ea535a7-92a7-4fb8-bdcc-3b4e2ef48bc0",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0233.jpg",
        description:
          "Bacon ipsum dolor amet jerky meatloaf porchetta t-bone beef ribs.",
      },
      {
        id: "c86bc92b-d37c-4b23-bdf9-e84e6e15f31d",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0234.jpg",
        description:
          "Bacon ipsum dolor amet chuck beef alcatra ham pig kielbasa drumstick meatloaf leberkas boudin frankfurter kevin.",
      },
      {
        id: "858dca87-7067-4ff7-ada7-0acb0e0a548a",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0235.jpg",
        description:
          "Bacon ipsum dolor amet jerky sausage prosciutto, filet mignon ham short loin t-bone corned beef buffalo burgdoggen.",
      },
      {
        id: "b2ef04e1-8dd4-4c4e-b7e0-48f114b9c91e",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0236.jpg",
        description:
          "Bacon ipsum dolor amet t-bone venison bacon andouille, bresaola biltong tenderloin strip steak kielbasa corned beef shankle chicken.",
      },
      {
        id: "135f9492-6907-4c40-b332-d8b9e58802ca",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0237.jpg",
        description:
          "Bacon ipsum dolor amet buffalo bacon kielbasa chislic capicola tongue.",
      },
      {
        id: "ba26cf43-7eff-4085-9ab0-85fc1ca1b3df",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0238.jpg",
        description:
          "Bacon ipsum dolor amet flank short loin leberkas, shoulder tongue meatball tenderloin sirloin jerky pancetta ribeye short ribs.",
      },
      {
        id: "bc32be4b-110a-4ba3-8a32-4e41b478c34d",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0239.jpg",
        description:
          "Bacon ipsum dolor amet meatloaf pig beef ribs kielbasa boudin prosciutto shoulder frankfurter cupim jowl alcatra short ribs sausage ham hock sirloin.",
      },
      {
        id: "2956a25a-0fad-440d-9f5f-ff6112f4e39b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0240.jpg",
        description:
          "Bacon ipsum dolor amet burgdoggen hamburger pork chop, ribeye shoulder brisket jowl pastrami cupim buffalo sausage meatball.",
      },
      {
        id: "7c4622a6-11d1-456c-b245-4532d6827b59",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0241.jpg",
        description:
          "Bacon ipsum dolor amet brisket swine sirloin, spare ribs meatball leberkas drumstick porchetta.",
      },
      {
        id: "b5c045ee-1921-4be8-9172-c889be320bb9",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0242.jpg",
        description:
          "Bacon ipsum dolor amet doner ground round brisket jowl tongue picanha, pork loin capicola kielbasa corned beef shankle strip steak pork kevin.",
      },
      {
        id: "4649d522-bef3-441b-8a4a-133728771f7e",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0243.jpg",
        description:
          "Bacon ipsum dolor amet pork belly tongue t-bone bresaola, strip steak pork loin meatloaf drumstick buffalo flank frankfurter swine ground round boudin tenderloin.",
      },
      {
        id: "b98bbba2-3b3e-40d0-8921-64fd906508f3",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0244.jpg",
        description:
          "Bacon ipsum dolor amet brisket sausage leberkas jerky cupim tri-tip pork loin short ribs shoulder spare ribs.",
      },
      {
        id: "8cd11dc5-e13f-4b7e-a093-a64c03c34d00",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0245.jpg",
        description:
          "Bacon ipsum dolor amet sirloin buffalo porchetta drumstick beef cupim beef ribs flank jerky burgdoggen chislic pork chop chuck bacon.",
      },
      {
        id: "608b7270-b944-476e-9717-3ef7126d0ed6",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0246.jpg",
        description:
          "Bacon ipsum dolor amet rump meatloaf beef kielbasa boudin.",
      },
      {
        id: "5bf84dfa-f750-405b-a0e6-b87e488d360b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0247.jpg",
        description:
          "Bacon ipsum dolor amet beef pork loin pork t-bone, salami shank pancetta bacon ham hock leberkas ground round tail.",
      },
      {
        id: "5409ee64-f699-4822-8cf9-aa8daf4e7bf7",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0248.jpg",
        description:
          "Bacon ipsum dolor amet jerky pig bresaola ground round burgdoggen prosciutto pork spare ribs pork chop sirloin meatloaf drumstick strip steak cow.",
      },
      {
        id: "bfb90100-b043-4905-be06-e962dedfa4a9",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0249.jpg",
        description:
          "Bacon ipsum dolor amet rump kevin short ribs t-bone meatloaf tri-tip.",
      },
      {
        id: "13162cb1-6ba1-48ff-8f0b-a72812ec60ae",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0250.jpg",
        description:
          "Bacon ipsum dolor amet venison ham corned beef, ball tip shankle pig rump t-bone cow kevin biltong jerky pork loin porchetta beef.",
      },
      {
        id: "b2b0723d-c1d9-4105-87bf-6b32e5904337",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0251.jpg",
        description: "Bacon ipsum dolor amet shank short loin corned beef pig.",
      },
      {
        id: "d764e6af-8616-4bb0-81d2-0473d1e0170f",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0252.jpg",
        description:
          "Bacon ipsum dolor amet tongue tenderloin bresaola, bacon landjaeger frankfurter beef ribs beef.",
      },
      {
        id: "35ba8a34-4e48-4415-bc97-5d0b11cfbc0d",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0253.jpg",
        description:
          "Bacon ipsum dolor amet salami ground round strip steak t-bone beef ribs jowl swine.",
      },
      {
        id: "519544b4-e4f4-47d7-87d1-72bfe0f14fe1",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0254.jpg",
        description:
          "Bacon ipsum dolor amet shank prosciutto sirloin turkey kielbasa chislic.",
      },
      {
        id: "f4fc763c-a96a-4711-80a3-4bfb5f762528",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0255.jpg",
        description:
          "Bacon ipsum dolor amet burgdoggen andouille tail prosciutto kielbasa frankfurter brisket.",
      },
      {
        id: "2d7f2f1a-cdde-4f81-9562-b4e7da2c6ac0",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0256.jpg",
        description:
          "Bacon ipsum dolor amet tenderloin tri-tip capicola sirloin kielbasa short loin doner flank biltong meatball.",
      },
      {
        id: "c5aee94a-3f76-4d28-a910-6b5663ceb9e4",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/09/0257.jpg",
        description:
          "Bacon ipsum dolor amet hamburger brisket corned beef, pastrami swine chuck salami.",
      },
    ],
  },
  {
    number: 10,
    date: "12 - 17 de mar",
    host: "Beatriz",
    id: "aa336a94-bf83-4dc7-abcf-797ec0d6b90d",
    title: "Acampamento nos arredores do Lago da Ponta Negra",
    slug: "ponta-negra-brasil",
    location: {
      description: "Ponta Negra, Brasil",
      city: "Manaus",
      state: "Amazonas",
      country: "Brasil",
    },
    hasBadge: true,
    price: 210,
    rating: 4.6,
    testimonials: [
      {
        id: "b359aba9-4c0e-4992-a460-ac4609bd280c",
        name: "Guarani",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/b359aba9-4c0e-4992-a460-ac4609bd280c.jpg",
        comment:
          "Bacon ipsum dolor amet boudin meatball rump pork belly, jowl tail landjaeger salami buffalo shank kevin ham hock.",
        rating: 5,
        customerTime: 3,
        createdAt: 7,
        stayedAt: 5,
      },
      {
        id: "cfa6f02f-087a-4f08-9e75-f4604fadac47",
        name: "Paulino",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/cfa6f02f-087a-4f08-9e75-f4604fadac47.jpg",
        comment:
          "Bacon ipsum dolor amet cow pork loin andouille tri-tip doner ham hock tongue chuck jowl bacon.",
        rating: 4.5,
        customerTime: 7,
        createdAt: 6,
        stayedAt: 5,
      },
      {
        id: "b07fb261-620a-4b13-bfb3-85ae6f4d23a4",
        name: "Filomeno",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/b07fb261-620a-4b13-bfb3-85ae6f4d23a4.jpg",
        comment:
          "Bacon ipsum dolor amet frankfurter short loin boudin, pancetta venison flank tongue buffalo t-bone bresaola meatloaf.",
        rating: 4.5,
        customerTime: 7,
        createdAt: 2,
        stayedAt: 5,
      },
    ],
    photos: [
      {
        id: "45fd280b-2d80-4a7e-a008-ad8dccfa82e2",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0258.jpg",
        description:
          "Bacon ipsum dolor amet sirloin t-bone chuck pork chop turkey pork loin pastrami beef ribs drumstick tail burgdoggen brisket fatback.",
      },
      {
        id: "d6d1296c-efef-4283-915f-c0ad08f03490",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0259.jpg",
        description:
          "Bacon ipsum dolor amet ribeye bresaola landjaeger, cupim sirloin capicola pork chop tail pastrami burgdoggen pig pancetta.",
      },
      {
        id: "ca99aead-38ee-4958-883c-beae827a10f5",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0260.jpg",
        description:
          "Bacon ipsum dolor amet brisket meatloaf ground round bresaola tri-tip sirloin short ribs ball tip biltong kevin short loin burgdoggen frankfurter pork belly.",
      },
      {
        id: "0b4eaed2-14e6-4165-bcd2-b56a6888fea7",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0261.jpg",
        description:
          "Bacon ipsum dolor amet ribeye tenderloin capicola sirloin porchetta buffalo rump.",
      },
      {
        id: "43cc736f-044b-447e-9ffb-77ab3c62d90e",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0262.jpg",
        description:
          "Bacon ipsum dolor amet filet mignon leberkas spare ribs jerky chicken beef ribs tri-tip porchetta landjaeger drumstick buffalo strip steak boudin.",
      },
      {
        id: "ccaf4c44-e396-40e8-bc6a-8d173d8aee9d",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0263.jpg",
        description:
          "Bacon ipsum dolor amet beef ribs kielbasa bacon, filet mignon meatloaf rump strip steak flank boudin pork chop beef t-bone chuck pork belly.",
      },
      {
        id: "850f493a-653e-48ca-b3eb-42e588665d6b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0264.jpg",
        description:
          "Bacon ipsum dolor amet tenderloin swine biltong pig filet mignon boudin drumstick ham hock shank brisket tri-tip kielbasa chicken sirloin turducken.",
      },
      {
        id: "b335354c-9595-4201-943c-d56dda7a23fa",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0265.jpg",
        description:
          "Bacon ipsum dolor amet ham frankfurter meatloaf, corned beef filet mignon kevin jerky picanha hamburger doner ham hock turducken andouille brisket.",
      },
      {
        id: "34eba3bb-3988-4306-abbe-ca8902647dd5",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0266.jpg",
        description:
          "Bacon ipsum dolor amet short ribs hamburger pastrami, tail pork ham shank beef bacon jerky doner spare ribs.",
      },
      {
        id: "91bf011c-f63d-4935-bf0b-b30790beef86",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0267.jpg",
        description:
          "Bacon ipsum dolor amet prosciutto spare ribs sirloin leberkas ham hock.",
      },
      {
        id: "13814d52-143b-46a3-8e77-a390693aa858",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0268.jpg",
        description:
          "Bacon ipsum dolor amet filet mignon tail chislic flank ball tip beef pastrami.",
      },
      {
        id: "b6d1f678-25ab-497d-83ef-0c11b8108101",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0269.jpg",
        description:
          "Bacon ipsum dolor amet shoulder shank filet mignon, jowl ribeye tail meatball meatloaf jerky ham kevin spare ribs alcatra.",
      },
      {
        id: "5d6589dc-d142-4636-85bb-5cffaf365ff9",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0270.jpg",
        description:
          "Bacon ipsum dolor amet spare ribs pastrami pork chop pork belly t-bone ribeye.",
      },
      {
        id: "98a9a1d3-457d-4807-be59-9cd68ec0281f",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0271.jpg",
        description:
          "Bacon ipsum dolor amet tenderloin andouille kevin prosciutto shoulder bresaola turducken spare ribs.",
      },
      {
        id: "280a995c-5011-490f-99d8-39e401f6b1b9",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0272.jpg",
        description:
          "Bacon ipsum dolor amet bacon prosciutto cow brisket meatloaf shank.",
      },
      {
        id: "58a6ef7d-c45c-4ca0-8884-c018d92e2027",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0273.jpg",
        description:
          "Bacon ipsum dolor amet sirloin flank biltong buffalo filet mignon.",
      },
      {
        id: "c9825743-d88c-4d69-b2fb-a4dbac2f5098",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0274.jpg",
        description:
          "Bacon ipsum dolor amet pork loin andouille ground round pork chop prosciutto beef ribs.",
      },
      {
        id: "88e570d9-2151-4538-abc6-1c5440917ad1",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0275.jpg",
        description:
          "Bacon ipsum dolor amet porchetta cupim rump chislic fatback jerky tri-tip chicken ribeye.",
      },
      {
        id: "948f0c91-198e-436f-9325-d83009ee8cc1",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0276.jpg",
        description:
          "Bacon ipsum dolor amet ribeye pork chislic short loin kevin strip steak pastrami bacon sirloin.",
      },
      {
        id: "59b1ceeb-17f5-43bc-b6ab-be35e6877fab",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0277.jpg",
        description:
          "Bacon ipsum dolor amet filet mignon sirloin drumstick tri-tip flank shoulder t-bone shankle turducken chicken meatball pork tenderloin tail tongue.",
      },
      {
        id: "67a8dbc7-9899-4d81-8076-e6c946df5582",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0278.jpg",
        description:
          "Bacon ipsum dolor amet beef ribs landjaeger boudin t-bone turducken jowl short loin.",
      },
      {
        id: "862f7333-9053-46c9-a01b-20f35331b35e",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0279.jpg",
        description:
          "Bacon ipsum dolor amet chicken leberkas meatball ham hock bresaola.",
      },
      {
        id: "814a84ee-e1ee-471f-8515-8713b95a65a3",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0280.jpg",
        description:
          "Bacon ipsum dolor amet jerky rump sausage turducken cow pastrami.",
      },
      {
        id: "2fd4285c-3acb-492d-be74-24d7339aa54f",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0281.jpg",
        description:
          "Bacon ipsum dolor amet filet mignon ball tip hamburger turkey pork loin.",
      },
      {
        id: "beb6798d-f56e-492a-9c8d-a716b03c886d",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0282.jpg",
        description:
          "Bacon ipsum dolor amet swine filet mignon porchetta tail, rump buffalo cupim shank ham chicken turkey fatback biltong frankfurter.",
      },
      {
        id: "75fd560c-715b-4b78-9c59-9bf5abd3dd23",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0283.jpg",
        description:
          "Bacon ipsum dolor amet ribeye pork loin picanha strip steak.",
      },
      {
        id: "d8798c4b-aa76-45d4-82ee-8b736951a3e9",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0284.jpg",
        description:
          "Bacon ipsum dolor amet filet mignon t-bone shankle kevin cupim pig leberkas.",
      },
      {
        id: "6f020bcd-01d3-4375-8e28-436c2458ea2d",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/10/0285.jpg",
        description:
          "Bacon ipsum dolor amet jowl swine porchetta ham jerky ground round strip steak pork chop prosciutto.",
      },
    ],
  },
  {
    number: 11,
    date: "19 - 24 de mar",
    host: "Gabriel",
    id: "62546b80-a3b3-4edc-9ff4-1ecda385f715",
    title: "Casebre na floresta para proximidade com a natureza",
    slug: "boa-viagem-brasil",
    location: {
      description: "Boa Viagem, Brasil",
      city: "Recife",
      state: "Pernambuco",
      country: "Brasil",
    },
    hasBadge: true,
    price: 230,
    rating: 4.7,
    testimonials: [
      {
        id: "d9cd6c28-3953-45c8-9a51-8a9cde0ac511",
        name: "Pedrino",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/d9cd6c28-3953-45c8-9a51-8a9cde0ac511.jpg",
        comment:
          "Bacon ipsum dolor amet cupim meatball tail ham hock turkey meatloaf shoulder shankle capicola alcatra jowl fatback chuck ham.",
        rating: 3.5,
        customerTime: 8,
        createdAt: 4,
        stayedAt: 5,
      },
      {
        id: "79bbcae5-2442-43d2-a89c-1e833ba4b61b",
        name: "Lénio",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/79bbcae5-2442-43d2-a89c-1e833ba4b61b.jpg",
        comment:
          "Bacon ipsum dolor amet chicken filet mignon burgdoggen, shoulder porchetta alcatra chislic pig cow short ribs flank jowl sirloin.",
        rating: 4,
        customerTime: 8,
        createdAt: 3,
        stayedAt: 3,
      },
      {
        id: "b27c6e6b-4813-4796-b81d-a9c69f60f02c",
        name: "Jucimara",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/b27c6e6b-4813-4796-b81d-a9c69f60f02c.jpg",
        comment:
          "Bacon ipsum dolor amet meatloaf corned beef beef ribs, chuck sirloin chicken biltong beef turkey capicola salami andouille.",
        rating: 5,
        customerTime: 3,
        createdAt: 5,
        stayedAt: 2,
      },
    ],
    photos: [
      {
        id: "9c244256-fafc-4579-b942-27e9b19684a7",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/11/0286.jpg",
        description:
          "Bacon ipsum dolor amet salami leberkas sausage doner cupim.",
      },
      {
        id: "5ce6882d-8e83-43e9-a312-a963464063fc",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/11/0287.jpg",
        description:
          "Bacon ipsum dolor amet andouille turkey cow ribeye swine.",
      },
      {
        id: "63c91568-65e7-4a43-8c08-5b08d7c2dd6a",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/11/0288.jpg",
        description:
          "Bacon ipsum dolor amet shankle frankfurter bresaola picanha spare ribs pig flank.",
      },
      {
        id: "09dcc039-8f58-43fb-bcd7-4f3831b1216b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/11/0289.jpg",
        description:
          "Bacon ipsum dolor amet meatball short loin turducken ribeye flank.",
      },
      {
        id: "419ac9d9-e94c-421c-b54c-0346258696c5",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/11/0290.jpg",
        description:
          "Bacon ipsum dolor amet strip steak boudin flank fatback turkey meatloaf shankle pastrami alcatra sirloin prosciutto bacon.",
      },
      {
        id: "20acaf99-0bf5-4a7a-8f97-310dd3c00a18",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/11/0291.jpg",
        description:
          "Bacon ipsum dolor amet chuck meatball frankfurter meatloaf salami shoulder.",
      },
      {
        id: "3113dda4-0867-4a59-a520-674d7ef25166",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/11/0292.jpg",
        description:
          "Bacon ipsum dolor amet cupim picanha drumstick chislic sirloin tail.",
      },
      {
        id: "f96af6be-5cf5-4991-981e-b2271ec69cde",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/11/0293.jpg",
        description:
          "Bacon ipsum dolor amet pancetta buffalo cupim chicken fatback t-bone filet mignon cow salami kielbasa meatloaf venison.",
      },
      {
        id: "e376350f-afbe-4c83-876f-b69f8ec79c2d",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/11/0294.jpg",
        description:
          "Bacon ipsum dolor amet venison t-bone short ribs jerky, bresaola tongue meatloaf.",
      },
      {
        id: "e877b7a9-b7ef-4f19-ac62-32376b9a3645",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/11/0295.jpg",
        description:
          "Bacon ipsum dolor amet chuck pork loin shankle brisket pancetta ribeye biltong porchetta short ribs.",
      },
      {
        id: "772e1077-0dd9-49b7-b40d-e02eb4a3aee0",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/11/0296.jpg",
        description:
          "Bacon ipsum dolor amet meatball chislic alcatra chuck, kielbasa ground round prosciutto chicken tri-tip meatloaf pig buffalo biltong.",
      },
      {
        id: "1129405b-699c-49c5-b7da-d6dccd1df73e",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/11/0297.jpg",
        description:
          "Bacon ipsum dolor amet beef ribs porchetta tongue ribeye doner fatback strip steak flank biltong chicken pastrami chuck ham.",
      },
      {
        id: "c183f8ab-5cae-4e10-a35a-5e04f58f33fd",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/11/0298.jpg",
        description: "Bacon ipsum dolor amet tail chuck venison kielbasa.",
      },
      {
        id: "5aad542f-b425-4675-8a88-6fd82094eedc",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/11/0299.jpg",
        description: "Bacon ipsum dolor amet tongue bacon sirloin ham shankle.",
      },
      {
        id: "b7a87970-8873-4dff-8c32-a5c6ddc7c73a",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/11/0300.jpg",
        description:
          "Bacon ipsum dolor amet short loin pastrami beef ribs, salami bresaola pig rump capicola ham.",
      },
    ],
  },
  {
    number: 12,
    date: "26 - 31 de mar",
    host: "Larissa",
    id: "c1b9e57e-189f-4588-bbab-582282db59bd",
    title: "Casebre ao ar livre nos arredores do Lago da Ponta Negra",
    slug: "ponta-negra-brasil-2",
    location: {
      description: "Ponta Negra, Brasil",
      city: "Natal",
      state: "Rio Grande do Norte",
      country: "Brasil",
    },
    hasBadge: false,
    price: 240,
    rating: 4.8,
    testimonials: [
      {
        id: "7ee1c568-6d47-4827-af65-fa1397cba8df",
        name: "Veneranda",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/7ee1c568-6d47-4827-af65-fa1397cba8df.jpg",
        comment:
          "Bacon ipsum dolor amet ball tip burgdoggen kevin cupim, boudin meatball shoulder beef beef ribs andouille ham pig pork belly jerky chuck.",
        rating: 4.5,
        customerTime: 2,
        createdAt: 3,
        stayedAt: 4,
      },
      {
        id: "bd60becf-8f45-4e84-9bac-e275b926ce53",
        name: "Neuci",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/bd60becf-8f45-4e84-9bac-e275b926ce53.jpg",
        comment:
          "Bacon ipsum dolor amet jowl fatback pastrami spare ribs cow, doner t-bone short loin frankfurter.",
        rating: 4.5,
        customerTime: 4,
        createdAt: 6,
        stayedAt: 7,
      },
      {
        id: "f9e97bc1-55ef-4bc5-adc7-1255b0a16abc",
        name: "Olivier",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/f9e97bc1-55ef-4bc5-adc7-1255b0a16abc.jpg",
        comment:
          "Bacon ipsum dolor amet shankle strip steak burgdoggen, brisket tongue venison ground round cow shank hamburger.",
        rating: 4.5,
        customerTime: 6,
        createdAt: 5,
        stayedAt: 3,
      },
    ],
    photos: [
      {
        id: "2c837a05-891b-49b8-aed5-9ec070b427ee",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0301.jpg",
        description:
          "Bacon ipsum dolor amet pig short ribs beef, capicola kielbasa ground round rump strip steak flank ribeye buffalo drumstick.",
      },
      {
        id: "68d035db-ae49-42fb-ba7c-a7a09d2a6f08",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0302.jpg",
        description:
          "Bacon ipsum dolor amet doner ball tip t-bone meatball bresaola jowl pastrami.",
      },
      {
        id: "a5bf3450-83c6-4458-bd4f-08f2a4749a83",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0303.jpg",
        description:
          "Bacon ipsum dolor amet alcatra chuck meatloaf cupim chislic.",
      },
      {
        id: "c17ae9f1-582b-461e-a69b-c66f21c2e745",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0304.jpg",
        description:
          "Bacon ipsum dolor amet cow corned beef turkey, doner cupim tail spare ribs ribeye ham hock ham jowl bresaola frankfurter filet mignon.",
      },
      {
        id: "a60aa5be-f486-49b4-97ac-8cbbb084f592",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0305.jpg",
        description:
          "Bacon ipsum dolor amet pig bacon jerky tenderloin flank kevin.",
      },
      {
        id: "4cedbc52-c3f7-4b07-9ffc-3958dc22b894",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0306.jpg",
        description:
          "Bacon ipsum dolor amet chislic short ribs ham jowl, ham hock sirloin tenderloin rump.",
      },
      {
        id: "ab6d9dd2-7a5c-4121-9312-990490230143",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0307.jpg",
        description: "Bacon ipsum dolor amet short loin beef turkey tongue.",
      },
      {
        id: "a7419956-c280-468a-b4c6-ee2c4806b764",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0308.jpg",
        description:
          "Bacon ipsum dolor amet beef ribs pig hamburger shankle shank, bacon corned beef tri-tip pork brisket tenderloin buffalo tongue ribeye filet mignon.",
      },
      {
        id: "f6746ec7-96ef-47ca-8b4e-035f4f88b035",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0309.jpg",
        description: "Bacon ipsum dolor amet sausage swine jowl alcatra.",
      },
      {
        id: "4b66d62c-ca40-4a58-9739-09b5e9073ea1",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0310.jpg",
        description:
          "Bacon ipsum dolor amet short ribs landjaeger shank, meatball pork chop prosciutto venison.",
      },
      {
        id: "52aa220d-6aa1-4381-bf81-6804ca8190fc",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0311.jpg",
        description:
          "Bacon ipsum dolor amet pork loin pork belly picanha shank capicola leberkas, chuck prosciutto ground round.",
      },
      {
        id: "8e49d6dc-52a4-4edc-a84d-44ae69fd0a5f",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0312.jpg",
        description:
          "Bacon ipsum dolor amet short ribs kielbasa cow, boudin tri-tip ribeye burgdoggen ground round tongue brisket.",
      },
      {
        id: "1155d480-2dd9-4a97-a3a8-b58a563eca6a",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0313.jpg",
        description:
          "Bacon ipsum dolor amet chuck chicken capicola t-bone, leberkas cupim bresaola pig turkey corned beef.",
      },
      {
        id: "fbb0db9d-1a4b-44af-8dd2-cc892dbb7e72",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0314.jpg",
        description:
          "Bacon ipsum dolor amet capicola leberkas salami burgdoggen biltong corned beef.",
      },
      {
        id: "e4af0546-a14d-4324-8f6c-eeb7b4b7ad69",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0315.jpg",
        description:
          "Bacon ipsum dolor amet hamburger brisket cow, prosciutto corned beef t-bone short ribs tail pork belly fatback biltong buffalo porchetta.",
      },
      {
        id: "dacdaced-d02a-4c4e-bf0a-9ea51ff73571",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0316.jpg",
        description:
          "Bacon ipsum dolor amet shank filet mignon andouille, jowl short loin porchetta drumstick.",
      },
      {
        id: "1d7a3298-1ab9-464b-b201-7c3376014c88",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0317.jpg",
        description:
          "Bacon ipsum dolor amet tenderloin pork loin salami spare ribs brisket leberkas jowl sirloin sausage corned beef ham buffalo pork belly.",
      },
      {
        id: "9258aa26-139d-4df6-ab17-d3464c14d339",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0318.jpg",
        description:
          "Bacon ipsum dolor amet pork belly pork loin pastrami ham shank pig pork chop alcatra.",
      },
      {
        id: "6f342728-65e3-46ea-ac7b-5b8aeb4f7c1d",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0319.jpg",
        description:
          "Bacon ipsum dolor amet buffalo meatloaf pork meatball bresaola corned beef.",
      },
      {
        id: "e983a999-c314-496a-b7e5-dbf378507537",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0320.jpg",
        description:
          "Bacon ipsum dolor amet shoulder rump beef capicola ribeye.",
      },
      {
        id: "be3c2719-9c74-40a5-bac3-b5f3fb74804f",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0321.jpg",
        description:
          "Bacon ipsum dolor amet picanha drumstick ground round pork chop burgdoggen landjaeger.",
      },
      {
        id: "8843fcab-80b6-476f-9122-d8e64592eaa6",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0322.jpg",
        description:
          "Bacon ipsum dolor amet beef ribs pork belly pork loin shoulder andouille spare ribs t-bone strip steak venison cupim kevin short loin buffalo biltong.",
      },
      {
        id: "4e546447-7b63-4801-b70b-4beb8279abdf",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0323.jpg",
        description:
          "Bacon ipsum dolor amet strip steak sausage salami porchetta prosciutto pork.",
      },
      {
        id: "97d4967a-d19c-4923-aef3-a25fb39e9405",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0324.jpg",
        description:
          "Bacon ipsum dolor amet tenderloin hamburger strip steak cupim pig capicola.",
      },
      {
        id: "3b9c1435-461b-4cd7-be12-92c6697e0fc0",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0325.jpg",
        description: "Bacon ipsum dolor amet pork chop doner chuck short ribs.",
      },
      {
        id: "758a1a07-691d-4b57-a979-614dd18540fc",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0326.jpg",
        description:
          "Bacon ipsum dolor amet doner jerky swine venison pork loin cupim pork belly short loin chislic fatback buffalo ground round.",
      },
      {
        id: "0f2138dd-ee5b-4f66-8c19-27b81a96403b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0327.jpg",
        description:
          "Bacon ipsum dolor amet pig ball tip turducken doner rump picanha bresaola short loin.",
      },
      {
        id: "8d59f55f-e8e4-4fe3-b1c3-0c3952fc5be9",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0328.jpg",
        description:
          "Bacon ipsum dolor amet turducken ground round beef, pork belly tri-tip strip steak pastrami.",
      },
      {
        id: "558aaeaa-1c0a-404d-b00f-8c2c476b0ca2",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/12/0329.jpg",
        description:
          "Bacon ipsum dolor amet jowl chuck cupim short loin pork loin rump beef swine alcatra turducken filet mignon porchetta brisket andouille.",
      },
    ],
  },
  {
    number: 13,
    date: "2 - 7 de jan",
    host: "Thiago",
    id: "65c7ff18-f38e-4055-b61f-e39f80d79641",
    title: "Acampamentos com chaminés para festividades e conexões",
    slug: "asa-sul-brasil",
    location: {
      description: "Asa Sul, Brasil",
      city: "Brasília",
      state: "Distrito Federal",
      country: "Brasil",
    },
    hasBadge: false,
    price: 170,
    rating: 4.4,
    testimonials: [
      {
        id: "2acaf6b8-3da1-4449-8d56-3c3fbe3fb0ff",
        name: "Adrualdo",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/2acaf6b8-3da1-4449-8d56-3c3fbe3fb0ff.jpg",
        comment:
          "Bacon ipsum dolor amet tongue drumstick buffalo, pork loin pork chop kevin short ribs pork sausage biltong bresaola picanha.",
        rating: 5,
        customerTime: 7,
        createdAt: 8,
        stayedAt: 7,
      },
      {
        id: "edebe852-c885-4180-bc88-8cf8772fc7f0",
        name: "Cedrico",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/edebe852-c885-4180-bc88-8cf8772fc7f0.jpg",
        comment:
          "Bacon ipsum dolor amet beef ribs cupim salami doner short ribs short loin.",
        rating: 4.5,
        customerTime: 8,
        createdAt: 7,
        stayedAt: 6,
      },
      {
        id: "320b5536-6880-4a1f-8066-d3747b46a93e",
        name: "Narsélio",
        image:
          "https://web.codans.com.br/airbnb/img/feedback/320b5536-6880-4a1f-8066-d3747b46a93e.jpg",
        comment:
          "Bacon ipsum dolor amet t-bone sirloin fatback alcatra beef ribs brisket salami shankle pastrami ground round picanha.",
        rating: 4,
        customerTime: 4,
        createdAt: 8,
        stayedAt: 5,
      },
    ],
    photos: [
      {
        id: "3b6c990c-c507-4e8a-ba33-490338b0844a",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0330.jpg",
        description:
          "Bacon ipsum dolor amet tail boudin rump, shank prosciutto swine hamburger bresaola porchetta fatback chuck pancetta pork alcatra.",
      },
      {
        id: "8372c1c4-eb67-42ec-a381-c72314570d0d",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0331.jpg",
        description:
          "Bacon ipsum dolor amet tongue picanha corned beef brisket tenderloin t-bone cow ribeye drumstick short loin sirloin pork loin.",
      },
      {
        id: "3bcd7ec0-8e87-42d1-bae5-0a61c6af1ba9",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0332.jpg",
        description:
          "Bacon ipsum dolor amet swine tenderloin ham, ball tip shoulder jowl turducken tri-tip cupim biltong pastrami pig pork belly capicola alcatra.",
      },
      {
        id: "79a4af6f-8bf6-4c5a-8568-f91744f80f15",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0333.jpg",
        description:
          "Bacon ipsum dolor amet rump kielbasa landjaeger strip steak pork venison.",
      },
      {
        id: "8dfcabce-bdcc-4213-9e5a-8dbf9643babf",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0334.jpg",
        description:
          "Bacon ipsum dolor amet capicola andouille cupim ham hock strip steak ground round.",
      },
      {
        id: "ebc22b49-04b3-4212-b6ec-9664b4369121",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0335.jpg",
        description:
          "Bacon ipsum dolor amet bacon flank shoulder, pastrami chicken ball tip ground round brisket pork belly burgdoggen hamburger prosciutto.",
      },
      {
        id: "6038b95f-4795-45de-b234-0951d43952c6",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0336.jpg",
        description:
          "Bacon ipsum dolor amet capicola turducken biltong hamburger boudin beef chislic ham cow pork jerky buffalo short ribs spare ribs pig.",
      },
      {
        id: "2916505b-d951-4aba-9153-e085fcebb059",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0337.jpg",
        description:
          "Bacon ipsum dolor amet ham hock prosciutto swine capicola frankfurter cow sirloin pork bacon pancetta meatloaf.",
      },
      {
        id: "c53c57d0-b04e-435a-a7a8-6bff633531eb",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0338.jpg",
        description:
          "Bacon ipsum dolor amet chislic boudin shoulder strip steak bresaola ham tail.",
      },
      {
        id: "b7e59662-b22c-4386-9da8-94fef57cca4b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0339.jpg",
        description:
          "Bacon ipsum dolor amet chuck meatloaf frankfurter flank, doner pork belly pancetta bacon filet mignon alcatra tail spare ribs jerky tongue.",
      },
      {
        id: "218822f4-33b8-470a-9d4b-53523432413a",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0340.jpg",
        description:
          "Bacon ipsum dolor amet bacon turkey beef ribs prosciutto, alcatra porchetta bresaola pork chop.",
      },
      {
        id: "abf77d21-9e54-4b67-a218-abe7bf8c4c0b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0341.jpg",
        description:
          "Bacon ipsum dolor amet ham tri-tip tongue fatback strip steak pork chop.",
      },
      {
        id: "a86a5c4e-be5c-42f8-875c-6e50bd06fb74",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0342.jpg",
        description:
          "Bacon ipsum dolor amet jerky venison cow ham tri-tip shoulder alcatra chicken bresaola doner shankle.",
      },
      {
        id: "6a58d35b-531c-4dbe-a130-f4503b1b808b",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0343.jpg",
        description:
          "Bacon ipsum dolor amet porchetta prosciutto meatloaf, beef ham hock pork leberkas picanha chislic t-bone shank chuck pancetta turducken landjaeger.",
      },
      {
        id: "6b4ea497-1d4c-465e-b726-5a2f84c4b0a6",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0344.jpg",
        description:
          "Bacon ipsum dolor amet sausage venison beef ribeye jowl, leberkas cow meatloaf chislic alcatra.",
      },
      {
        id: "d5603022-50a9-4073-b164-cef99eecf9e2",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0345.jpg",
        description:
          "Bacon ipsum dolor amet ground round pastrami buffalo turkey filet mignon.",
      },
      {
        id: "0e4fb47a-7cb2-4d22-9485-8c46c15134a2",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0346.jpg",
        description:
          "Bacon ipsum dolor amet shoulder prosciutto burgdoggen, filet mignon fatback pork t-bone.",
      },
      {
        id: "f5c7311c-2f9d-4ec6-a731-0abc6b0de920",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0347.jpg",
        description:
          "Bacon ipsum dolor amet pork loin beef ribs tongue cupim tail pancetta short loin fatback brisket rump porchetta shoulder ground round.",
      },
      {
        id: "712cb31d-7357-4c29-9560-8e621e75a54f",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0348.jpg",
        description:
          "Bacon ipsum dolor amet chicken boudin rump chislic corned beef bacon beef bresaola meatball beef ribs turducken jerky.",
      },
      {
        id: "9ff4a064-98c7-4d4d-87d7-8c73332ae1e2",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0349.jpg",
        description:
          "Bacon ipsum dolor amet prosciutto meatloaf pork chop kevin pig jerky.",
      },
      {
        id: "8c3586d2-79f3-459d-b982-687f03269776",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0350.jpg",
        description:
          "Bacon ipsum dolor amet jerky prosciutto rump chislic pastrami venison tenderloin.",
      },
      {
        id: "48fec83c-474d-4305-9616-339fa6baa68e",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0351.jpg",
        description:
          "Bacon ipsum dolor amet corned beef meatloaf tail cupim pork chop spare ribs doner chicken brisket strip steak prosciutto beef ribs shoulder.",
      },
      {
        id: "6ff738a1-1914-4e3e-a176-b82ffb34049f",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0352.jpg",
        description:
          "Bacon ipsum dolor amet sirloin pork chop kevin, swine cow chuck ground round pancetta t-bone salami picanha tenderloin prosciutto bacon alcatra.",
      },
      {
        id: "66082845-80f6-424b-ba7a-4091e733b7e5",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0353.jpg",
        description:
          "Bacon ipsum dolor amet pastrami cupim ball tip brisket pork chop leberkas, shankle meatloaf cow pig flank.",
      },
      {
        id: "1444d5be-9614-4f20-a9dd-bab26eab23c5",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0354.jpg",
        description: "Bacon ipsum dolor amet kielbasa t-bone leberkas picanha.",
      },
      {
        id: "798a2bbf-f3af-4d21-a7e8-52747a2c3970",
        source:
          "https://web.codans.com.br/airbnb/img/accommodation/13/0355.jpg",
        description:
          "Bacon ipsum dolor amet burgdoggen pork belly beef ribs, pork loin buffalo shank picanha flank sausage sirloin meatball turducken biltong boudin chislic.",
      },
    ],
  },
];
const Acomodacoes = () => {
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

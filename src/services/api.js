import * as I from "../assets/img";
import * as H from "../assets/img/hoteis";
import { filterTypes } from "../components/Filter";

export const cards = [
  {
    id: 1,
    description:
      "Vai viajar? Veja as melhores opções do que fazer com seu gato",
    image: I.pet1,
  },
  {
    id: 2,
    description: "O Guia completo para viajar com o dog de avião",
    image: I.pet2,
  },
  {
    id: 3,
    description: "Arrumando os Docs para voar com seu cachorro",
    image: I.pet3,
  },
  {
    id: 4,
    description: "Partiu! Veja 12 hotéis no Brasil para levar seu pet",
    image: I.pet4,
  },
  {
    id: 5,
    description:
      "Quais vacinas meu Pet precisa tomar para viajar com segurança?",
    image: I.pet5,
  },
  {
    id: 6,
    description: "Veja dicas de como levar seu pet para o intercâmbio",
    image: I.pet6,
  },
  {
    id: 7,
    description:
      "Vai viajar? Veja as melhores opções do que fazer com seu gato",
    image: I.pet7,
  },
  {
    id: 8,
    description: "Arrumando os Docs para voar com seu cachorro",
    image: I.pet8,
  },
];

export const allBusiness = [
  {
    id: 1,
    name: "Belmond Copacabana",
    image: H.hotel1,
    nota: "5.0",
    price: "R$ 1559,00",
    categoria: [
      filterTypes.HOT_FRIENDLY,
      filterTypes.HOT_PET,
      filterTypes.REST_PET,
      filterTypes.CLIN_VET,
      filterTypes.PET_PARK,
    ],
    uf: "RJ",
    municipio: "Rio de Janeiro",
  },
  {
    id: 2,
    name: "Ibbis Copacabana",
    image: H.hotel2,
    nota: "4,7",
    price: "R$ 203,00",
    categoria: [filterTypes.HOT_FRIENDLY, filterTypes.REST_PET],
    uf: "RJ",
    municipio: "Rio Bonito",
  },
  {
    id: 3,
    name: "L'Homme de Rio...",
    image: H.hotel3,
    nota: "3,9",
    price: "R$ 440,00",
    categoria: [filterTypes.HOT_PET, filterTypes.CLIN_VET],
    uf: "RJ",
    municipio: "Seropédica",
  },
  {
    id: 4,
    name: "Selina Copacabana",
    image: H.hotel4,
    nota: "3,7",
    price: "R$ 120,00",
    categoria: [filterTypes.HOT_PET, filterTypes.PET_PARK],
    uf: "RJ",
    municipio: "Itaboraí",
  },
  {
    id: 5,
    name: "Ritz Leblon ",
    image: H.hotel5,
    nota: "3,5",
    price: "R$ 581,00",
    categoria: [filterTypes.HOT_FRIENDLY],
    uf: "RJ",
    municipio: "Guapimirim",
  },
  {
    id: 6,
    name: "Mirasol Copacabana",
    image: H.hotel6,
    nota: "3,5",
    price: "R$ 231,00",
    categoria: [
      filterTypes.HOT_FRIENDLY,
      filterTypes.HOT_PET,
      filterTypes.REST_PET,
      filterTypes.PET_PARK,
    ],
    uf: "RJ",
    municipio: "Duque de Caxias",
  },
  {
    id: 7,
    name: "Promenade Palladium",
    image: H.hotel7,
    nota: "3,5",
    price: "R$ 604,00",
    categoria: [
      filterTypes.HOT_FRIENDLY,
      filterTypes.REST_PET,
      filterTypes.PET_PARK,
    ],
    uf: "RJ",
    municipio: "Cabo Frio",
  },
  {
    id: 8,
    name: "Miramar Hotel",
    image: H.hotel8,
    nota: "3,5",
    price: "R$ 540,00",
    categoria: [filterTypes.HOT_FRIENDLY, filterTypes.PET_PARK],
    uf: "RJ",
    municipio: "Campos dos Goytacazes",
  },
  {
    id: 9,
    name: "Americas Copacabana",
    image: H.hotel9,
    nota: "3,3",
    price: "R$ 187,00",
    categoria: [
      filterTypes.HOT_PET,
      filterTypes.CLIN_VET,
      filterTypes.PET_PARK,
    ],
    uf: "RJ",
    municipio: "Cabo Frio",
  },
  {
    id: 10,
    name: "Real Palace Hotel",
    image: H.hotel10,
    nota: "3,3",
    price: "R$ 174,00",
    categoria: [filterTypes.HOT_FRIENDLY],
    uf: "RJ",
    municipio: "Angra dos Reis",
  },
];

// export const County = [
//   {
//     id: 1,
//     uf: "RJ",
//     municipio: "Angra dos Reis",
//   },
//   {
//     id: 2,
//     uf: "RJ",
//     municipio: "Cabo Frio",
//   },
//   {
//     id: 3,
//     uf: "RJ",
//     municipio: "Campos dos Goytacazes",
//   },
//   {
//     id: 4,
//     uf: "RJ",
//     municipio: "Duque de Caxias",
//   },
//   {
//     id: 5,
//     uf: "RJ",
//     municipio: "Guapimirim",
//   },
//   {
//     id: 6,
//     uf: "RJ",
//     municipio: "Itaboraí",
//   },
//   {
//     id: 7,
//     uf: "RJ",
//     municipio: "Seropédica",
//   },
//   {
//     id: 8,
//     uf: "RJ",
//     municipio: "Rio de Janeiro",
//   },
//   {
//     id: 9,
//     uf: "RJ",
//     municipio: "Rio Bonito",
//   },
//   {
//     id: 10,
//     uf: "RJ",
//     municipio: "Teresópolis",
//   },
// ];

import * as I from "../assets/img";
import * as H from "../assets/img/hoteis";
import { filterTypes } from "../components/Filter";

const pais = "Brasil";

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
    images: [H.hotel1, H.hotel11, H.hotel12, H.hotel13, H.hotel14, H.hotel15],
    nota: "5.0",
    price: "R$ 1559,00",
    categoria: [filterTypes.HOT_FRIENDLY],
    uf: "RJ",
    municipio: "Rio de Janeiro",
    endereco: "Rua José Martins Pereira Filho 23,",
    pais,
    descricao:
      "O Belmond Copacabana Posto 5 é um hotel econômico, moderno e com excelente localização. Esse hotel no Rio de Janeiro está a apenas 5m minutos da Praia de Copacabana onde acontece o famosos Révelillon, além de maratonas e blocos de Carnaval. Os quartos são equipados com TV a cabo, ar-condicionado e wi-fi grátis. O café da manhã tem uma variedade de pães, frios, geleia caseira, suco natural e chá mate. Oferece também aluguel de bike e empréstimo de guarda-sol, cooler e toalhas para quem quer curtir o sol e mar.",
    comodidades: [
      "Cama casal",
      "Ar condicionado",
      "Serviço de limpeza",
      "Frigobar",
      "Internet",
      "Aceitamos Pets",
    ],
  },
  {
    id: 2,
    name: "Ibbis Copacabana",
    images: [H.hotel2, H.hotel11, H.hotel12, H.hotel13, H.hotel14, H.hotel15],
    nota: "4,7",
    price: "R$ 203,00",
    categoria: [filterTypes.HOT_FRIENDLY],
    uf: "RJ",
    municipio: "Rio de Janeiro",
    endereco: "Rua Doutor Francisco de Souza 187 ",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
    comodidades: [
      "Cama casal",
      "Ar condicionado",
      "Serviço de limpeza",
      "Frigobar",
      "Internet",
      "Aceitamos Pets",
    ],
  },
  {
    id: 3,
    name: "L'Homme de Rio...",
    images: [H.hotel3, H.hotel11, H.hotel12, H.hotel13, H.hotel14, H.hotel15],
    nota: "3,9",
    price: "R$ 440,00",
    categoria: [filterTypes.HOT_FRIENDLY],
    uf: "RJ",
    municipio: "Rio de Janeiro",
    endereco: "Rua Oito 9,",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
    comodidades: [
      "Cama casal",
      "Ar condicionado",
      "Serviço de limpeza",
      "Frigobar",
      "Internet",
      "Aceitamos Pets",
    ],
  },
  {
    id: 4,
    name: "Selina Copacabana",
    images: [H.hotel4, H.hotel11, H.hotel12, H.hotel13, H.hotel14, H.hotel15],
    nota: "3,7",
    price: "R$ 120,00",
    categoria: [filterTypes.HOT_FRIENDLY],
    uf: "RJ",
    municipio: "Rio de Janeiro",
    endereco: "Avenida Virgínia Paula dos Santos Alves 179,",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
    comodidades: [
      "Cama casal",
      "Ar condicionado",
      "Serviço de limpeza",
      "Frigobar",
      "Internet",
      "Aceitamos Pets",
    ],
  },
  {
    id: 5,
    name: "Ritz Leblon ",
    images: [H.hotel5, H.hotel11, H.hotel12, H.hotel13, H.hotel14, H.hotel15],
    nota: "3,5",
    price: "R$ 581,00",
    categoria: [filterTypes.HOT_FRIENDLY],
    uf: "RJ",
    municipio: "Rio de Janeiro",
    endereco: "Rua Dona Del Carmem 89,",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
    comodidades: [
      "Cama casal",
      "Ar condicionado",
      "Serviço de limpeza",
      "Frigobar",
      "Internet",
      "Aceitamos Pets",
    ],
  },
  {
    id: 6,
    name: "Mirasol Copacabana",
    images: [H.hotel6, H.hotel11, H.hotel12, H.hotel13, H.hotel14, H.hotel15],
    nota: "3,5",
    price: "R$ 231,00",
    categoria: [filterTypes.HOT_FRIENDLY],
    uf: "RJ",
    municipio: "Rio de Janeiro",
    endereco: "Rua Costa Paes 34,",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
    comodidades: [
      "Cama casal",
      "Ar condicionado",
      "Serviço de limpeza",
      "Frigobar",
      "Internet",
      "Aceitamos Pets",
    ],
  },
  {
    id: 7,
    name: "Promenade Palladium",
    images: [H.hotel7, H.hotel11, H.hotel12, H.hotel13, H.hotel14, H.hotel15],
    nota: "3,5",
    price: "R$ 604,00",
    categoria: [filterTypes.HOT_FRIENDLY],
    uf: "RJ",
    municipio: "Rio de Janeiro",
    endereco: "Avenida Caminho de Búzios 45,",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
    comodidades: [
      "Cama casal",
      "Ar condicionado",
      "Serviço de limpeza",
      "Frigobar",
      "Internet",
      "Aceitamos Pets",
    ],
  },
  {
    id: 8,
    name: "Miramar Hotel",
    images: [H.hotel8, H.hotel11, H.hotel12, H.hotel13, H.hotel14, H.hotel15],
    nota: "3,5",
    price: "R$ 540,00",
    categoria: [filterTypes.HOT_FRIENDLY],
    uf: "RJ",
    municipio: "Rio de Janeiro",
    endereco: "Rua Professor Castro 90,",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
    comodidades: [
      "Cama casal",
      "Ar condicionado",
      "Serviço de limpeza",
      "Frigobar",
      "Internet",
      "Aceitamos Pets",
    ],
  },
  {
    id: 9,
    name: "Americas Copacabana",
    images: [H.hotel9, H.hotel11, H.hotel12, H.hotel13, H.hotel14, H.hotel15],
    nota: "3,3",
    price: "R$ 187,00",
    categoria: [filterTypes.HOT_FRIENDLY],
    uf: "RJ",
    municipio: "Rio de Janeiro",
    endereco: "Rua Suíça 66,",
    pais,
    descricao:
      "Fusce finibus sit amet enim sit amet sagittis. Proin placerat non urna id tempus. Phasellus sit amet ultricies justo. Fusce vel enim congue, scelerisque sapien eu, sodales lectus. Duis congue tincidunt laoreet. Duis nec massa porta, eleifend nisl non, aliquam mi. Sed sed ligula a lacus posuere vehicula a vitae lorem. Proin vulputate urna sit amet nunc porttitor rhoncus. Vivamus condimentum dignissim dolor ut aliquam. Nulla cursus gravida porta. Aliquam erat volutpat. In congue elit nulla, nec pulvinar mauris aliquam non. Nulla a nisi vestibulum, hendrerit nulla ut, interdum justo. Mauris ut ipsum semper turpis rhoncus finibus. Donec sit amet augue in turpis vehicula sodales ultrices at dolor. Fusce aliquet purus felis, eu cursus neque vehicula eu.",
    comodidades: [
      "Cama casal",
      "Ar condicionado",
      "Serviço de limpeza",
      "Frigobar",
      "Internet",
      "Aceitamos Pets",
    ],
  },
  {
    id: 10,
    name: "Alessandro e Frederico",
    images: [H.restaurante1, H.restaurante2, H.restaurante3],
    nota: "4,3",
    price: "R$ 174,00",
    categoria: [filterTypes.REST_PET],
    uf: "RJ",
    municipio: "Cabo Frio",
    endereco: "Rua Garcia d'Avila,134 ,",
    pais,

    descricao:
      "A marca Alessandro e Frederico, batizada em homenagem aos filhos do empresário italiano Fabrizio Giuliodori, surgiu há 17 anos no Rio de Janeiro, e se tornou uma referência na gastronomia da cidade. O Restaurante também conta com uma unidade em Curitiba Localizado no coração de Ipanema, na Rua Garcia D’Ávila, o charmoso bistrô projetado pelos arquitetos Ricardo Bruno e Ricardo Campos oferece ambiente agradável e acolhedor, que tem como destaque sua varanda, bem ao estilo de vida carioca No cardápio, receitas com base na gastronomia italiana são apresentadas em deliciosas opções de saladas, massas, carnes, peixes, frutos do mar, paninis e pizzas. Merecem destaque também os pães produzidos artesanalmente na casa e o serviço de café da manhã, com menu especial para começar bem o dia. As massas – ou pastas, como dizem os italianos – são feitas com ingredientes de alta qualidade. Vale destacar que as massas recheadas são produzidas artesanalmente na casa, garantindo sabor especial às receitas A variada seleção Pizzas artesanais é outro carro-chefe do local. Feitas com farinha do tipo “00” italiana, pomodori pelati italiano e uma fermentação de 24 horas, as pizzas podem ser saboreadas com os exclusivos azeites perfumados oferecidos na casa De segunda a sexta, no horário do almoço, é servido o Mezzogiornio dello Chef, um menu executivo com sugestões de entrada, prato principal e sobremesa, a preço convidativo Restaurante também possui adega com mais de 200 opções de vinhos, que harmonizam com os pratos do menu, tornando-os ainda mais saborosos",

    comodidades: [
      "Possui cobertura",
      "Mantinhas para os pets",
      "Petiscos para pets",
    ],
  },
  {
    id: 11,
    name: "Iraja Gastro",
    images: [H.restaurante4, H.restaurante2, H.restaurante3],
    nota: "3,3",
    price: "R$ 444,00",
    categoria: [filterTypes.REST_PET],
    uf: "RJ",
    municipio: "Cabo Frio",
    endereco: "Rua Garcia d'Avila,134 ,",
    pais,

    descricao:
      "A marca Alessandro e Frederico, batizada em homenagem aos filhos do empresário italiano Fabrizio Giuliodori, surgiu há 17 anos no Rio de Janeiro, e se tornou uma referência na gastronomia da cidade. O Restaurante também conta com uma unidade em Curitiba Localizado no coração de Ipanema, na Rua Garcia D’Ávila, o charmoso bistrô projetado pelos arquitetos Ricardo Bruno e Ricardo Campos oferece ambiente agradável e acolhedor, que tem como destaque sua varanda, bem ao estilo de vida carioca No cardápio, receitas com base na gastronomia italiana são apresentadas em deliciosas opções de saladas, massas, carnes, peixes, frutos do mar, paninis e pizzas. Merecem destaque também os pães produzidos artesanalmente na casa e o serviço de café da manhã, com menu especial para começar bem o dia. As massas – ou pastas, como dizem os italianos – são feitas com ingredientes de alta qualidade. Vale destacar que as massas recheadas são produzidas artesanalmente na casa, garantindo sabor especial às receitas A variada seleção Pizzas artesanais é outro carro-chefe do local. Feitas com farinha do tipo “00” italiana, pomodori pelati italiano e uma fermentação de 24 horas, as pizzas podem ser saboreadas com os exclusivos azeites perfumados oferecidos na casa De segunda a sexta, no horário do almoço, é servido o Mezzogiornio dello Chef, um menu executivo com sugestões de entrada, prato principal e sobremesa, a preço convidativo Restaurante também possui adega com mais de 200 opções de vinhos, que harmonizam com os pratos do menu, tornando-os ainda mais saborosos",

    comodidades: [
      "Possui cobertura",
      "Mantinhas para os pets",
      "Petiscos para pets",
    ],
  },
];

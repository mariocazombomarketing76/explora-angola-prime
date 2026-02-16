
import { Province, Category, Business, SubscriptionPlan } from './types';

export const PROVINCES: Province[] = [
  { id: '1', name: 'Bengo', slug: 'bengo', description: 'Porta de entrada para Luanda, famosa pelas praias de Cabo Ledo e pelo Rio Dande.', heroImage: 'https://images.unsplash.com/photo-1518391846015-55a9cc003b25?auto=format&fit=crop&q=80&w=1200', cities: ['Caxito', 'Ambriz', 'Nambuangongo'] },
  { id: '2', name: 'Benguela', slug: 'benguela', description: 'A "Cidade das Acácias Rubras", conhecida pelas suas praias paradisíacas e o porto do Lobito.', heroImage: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200', cities: ['Benguela', 'Lobito', 'Baía Farta', 'Catumbela'] },
  { id: '3', name: 'Bié', slug: 'bie', description: 'O centro geográfico de Angola, com terras férteis e uma história de resiliência.', heroImage: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200', cities: ['Cuito', 'Andulo', 'Camacupa'] },
  { id: '4', name: 'Cabinda', slug: 'cabinda', description: 'O enclave norte, rico em petróleo e com a majestosa Floresta do Maiombe.', heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200', cities: ['Cabinda', 'Cacongo', 'Buco-Zau'] },
  { id: '5', name: 'Cuando Cubango', slug: 'cuando-cubango', description: 'As "Terras do Progresso", lar de uma fauna selvagem incrível e parte do projecto Okavango-Zambeze.', heroImage: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80&w=1200', cities: ['Menongue', 'Cuito Cuanavale', 'Calai'] },
  { id: '6', name: 'Cuanza Norte', slug: 'cuanza-norte', description: 'Belezas naturais como as Cascatas de Binga e jardins botânicos exuberantes.', heroImage: 'https://images.unsplash.com/photo-1433086566041-91fe89a944de?auto=format&fit=crop&q=80&w=1200', cities: ['Ndalatando', 'Lucala', 'Cambambe'] },
  { id: '7', name: 'Cuanza Sul', slug: 'cuanza-sul', description: 'Conhecida pelas praias do Sumbe e as incríveis águas termais do Conda.', heroImage: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&q=80&w=1200', cities: ['Sumbe', 'Porto Amboim', 'Waku Kungo'] },
  { id: '8', name: 'Cunene', slug: 'cunene', description: 'Cultura pastoril vibrante e as Quedas do Monte Negro na fronteira com a Namíbia.', heroImage: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200', cities: ['Ondjiva', 'Cunhama', 'Namacunde'] },
  { id: '9', name: 'Huambo', slug: 'huambo', description: 'A "Cidade Jardim" de Angola, com clima ameno e o ponto mais alto do país, o Monte Moco.', heroImage: 'https://images.unsplash.com/photo-1444464666168-49d633b867ad?auto=format&fit=crop&q=80&w=1200', cities: ['Huambo', 'Caála', 'Bailundo'] },
  { id: '10', name: 'Huíla', slug: 'huila', description: 'Famosa pela Fenda da Tundavala e a icónica Serra da Leba.', heroImage: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200', cities: ['Lubango', 'Humpata', 'Chibia'] },
  { id: '11', name: 'Luanda', slug: 'luanda', description: 'A vibrante capital, onde a modernidade dos arranha-céus se mistura com a tradição da Ilha.', heroImage: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=1200', cities: ['Luanda', 'Belas', 'Talatona', 'Viana'] },
  { id: '12', name: 'Lunda Norte', slug: 'lunda-norte', description: 'Terra de diamantes e de uma cultura artística Lunda-Cokwe riquíssima.', heroImage: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&q=80&w=1200', cities: ['Dundo', 'Chitato', 'Lucapa'] },
  { id: '13', name: 'Lunda Sul', slug: 'lunda-sul', description: 'Coração do leste angolano, centro mineiro e cultural.', heroImage: 'https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=1200', cities: ['Saurimo', 'Cacolo', 'Dala'] },
  { id: '14', name: 'Malanje', slug: 'malanje', description: 'Lar das gigantes Quedas de Kalandula e das misteriosas Pedras Negras.', heroImage: 'https://images.unsplash.com/photo-1433086566041-91fe89a944de?auto=format&fit=crop&q=80&w=1200', cities: ['Malanje', 'Kalandula', 'Cacuso'] },
  { id: '15', name: 'Moxico', slug: 'moxico', description: 'A maior província do país, banhada pelos rios Zambeze e Lungué-Bungo.', heroImage: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80&w=1200', cities: ['Luena', 'Cameia', 'Luau'] },
  { id: '16', name: 'Namibe', slug: 'namibe', description: 'Onde o deserto encontra o mar, terra da Welwitschia Mirabilis.', heroImage: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&q=80&w=1200', cities: ['Moçâmedes', 'Tômbwa', 'Bibala'] },
  { id: '17', name: 'Uíge', slug: 'uige', description: 'Capital do Café, região de colinas verdes e cascatas escondidas.', heroImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200', cities: ['Uíge', 'Negage', 'Maquela do Zombo'] },
  { id: '18', name: 'Zaire', slug: 'zaire', description: 'História pura em M\'banza Kongo, património da UNESCO e a foz do Rio Congo.', heroImage: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1200', cities: ['M\'banza Kongo', 'Soyo', 'Nzeto'] }
];

export const MOCK_BUSINESSES: Business[] = [
  {
    id: 'b1',
    name: 'Hotel Serra da Chela',
    description: 'Um dos mais prestigiados hotéis do Lubango, oferecendo luxo e conforto no coração da Huíla.',
    category: Category.HOTELS,
    province: 'Huíla',
    city: 'Lubango',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    phone: '+244 923 000 001',
    whatsapp: '244923000001',
    email: 'reservas@serradachela.com',
    location: 'Bairro Nossa Senhora do Monte, Lubango',
    verified: true,
    plan: SubscriptionPlan.PREMIUM,
    rating: 4.8,
    reviewCount: 156
  },
  {
    id: 'b2',
    name: 'Epic Sana Luanda',
    description: 'O pináculo do luxo em Luanda, com vistas deslumbrantes sobre a baía e serviço de classe mundial.',
    category: Category.HOTELS,
    province: 'Luanda',
    city: 'Luanda',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4df85b?auto=format&fit=crop&q=80&w=800',
    phone: '+244 222 000 000',
    whatsapp: '244222000000',
    email: 'info.luanda@epic.sanahotels.com',
    location: 'Rua da Missão, Luanda',
    verified: true,
    plan: SubscriptionPlan.PREMIUM,
    rating: 4.9,
    reviewCount: 520
  },
  {
    id: 'b3',
    name: 'Restaurante Lookal Mar',
    description: 'Frutos do mar frescos e ambiente sofisticado na Ilha de Luanda.',
    category: Category.RESTAURANTS,
    province: 'Luanda',
    city: 'Luanda',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800',
    phone: '+244 923 000 777',
    whatsapp: '244923000777',
    email: 'reservas@lookal.com',
    location: 'Ilha de Luanda',
    verified: true,
    plan: SubscriptionPlan.PREMIUM,
    rating: 4.6,
    reviewCount: 342
  },
  {
    id: 'b4',
    name: 'Pousada de Kalandula',
    description: 'Acorde com o som das quedas de água. Uma experiência única em Malanje.',
    category: Category.RESORTS,
    province: 'Malanje',
    city: 'Kalandula',
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800',
    phone: '+244 923 444 555',
    whatsapp: '244923444555',
    email: 'kalandula@pousadas.ao',
    location: 'Próximo às Quedas de Kalandula',
    verified: true,
    plan: SubscriptionPlan.PREMIUM,
    rating: 4.7,
    reviewCount: 88
  }
];

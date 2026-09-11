// Edit everything about the site's content here — text, contact info, services, portfolio items.
// The page templates just read from this file, so changes here update the whole site.

export const business = {
  name: 'Lacerda Drone Films',
  tagline: 'Vídeos e fotos aéreas que vendem imóveis mais rápido',
  description:
    'Produção de vídeo e fotografia aérea com drone para imobiliárias, corretores e proprietários que querem anunciar casas e apartamentos à venda ou para alugar.',
  whatsapp: '5500000000000', // digits only, with country + area code, e.g. 55 11 99999-9999
  email: 'contato@lacerdadrone.com.br',
  instagram: 'https://instagram.com/lacerdadrone',
  location: 'Sua cidade, Estado',
};

export const services = [
  {
    title: 'Vídeo Aéreo com Drone',
    description: 'Imagens aéreas cinematográficas do imóvel, do bairro e dos arredores.',
  },
  {
    title: 'Tour Virtual em Vídeo',
    description: 'Vídeo guiado por todos os cômodos, ideal para anúncios online.',
  },
  {
    title: 'Fotografia Profissional',
    description: 'Fotos internas, externas e aéreas em alta resolução para anúncios e redes sociais.',
  },
  {
    title: 'Golden Hour',
    description: 'Fotos e vídeos ao entardecer para destacar o imóvel com luz natural.',
  },
  {
    title: 'Reels para Redes Sociais',
    description: 'Vídeos curtos e dinâmicos prontos para Instagram e TikTok.',
  },
  {
    title: 'Vídeo Institucional',
    description: 'Vídeo de apresentação para imobiliárias e lançamentos de empreendimentos.',
  },
];

export type PortfolioItem = {
  title: string;
  location: string;
  type: string;
  thumbnail: string;
  videoUrl?: string;
};

export const portfolio: PortfolioItem[] = [
  {
    title: 'Casa Alto Padrão',
    location: 'Exemplo, SP',
    type: 'Vídeo Aéreo',
    thumbnail: '/images/portfolio-placeholder-1.svg',
  },
  {
    title: 'Apartamento com Vista',
    location: 'Exemplo, SP',
    type: 'Tour em Vídeo',
    thumbnail: '/images/portfolio-placeholder-2.svg',
  },
  {
    title: 'Condomínio Fechado',
    location: 'Exemplo, SP',
    type: 'Fotografia Aérea',
    thumbnail: '/images/portfolio-placeholder-3.svg',
  },
  {
    title: 'Chácara com Piscina',
    location: 'Exemplo, SP',
    type: 'Golden Hour',
    thumbnail: '/images/portfolio-placeholder-4.svg',
  },
];

export const about = {
  heading: 'Sobre',
  body: [
    'Sou piloto de drone e videomaker especializado em conteúdo para o mercado imobiliário.',
    'Ajudo corretores, imobiliárias e proprietários a apresentar seus imóveis com vídeos e fotos que chamam a atenção e vendem mais rápido.',
  ],
};

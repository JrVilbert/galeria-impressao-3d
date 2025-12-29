export type Category = 'infantil' | 'letreiros' | 'chaveiros' | 'quadros' | 'vasos';

export interface ProductSize {
  label: string;
  value: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  image: string;
  images?: string[]; // Múltiplas imagens
  sizes?: ProductSize[]; // Opções de tamanho
  featured?: boolean;
}

export const categories: { id: Category; label: string; description: string }[] = [
  { 
    id: 'infantil', 
    label: 'Infantil', 
    description: 'Brinquedos, figuras de ação e decoração para o quarto dos pequenos.' 
  },
  { 
    id: 'letreiros', 
    label: 'Letreiros', 
    description: 'Letras caixa, logotipos e sinalização personalizada para seu negócio ou casa.' 
  },
  { 
    id: 'chaveiros', 
    label: 'Chaveiros', 
    description: 'Chaveiros teste personalizados, temáticos e brindes corporativos únicos.' 
  },
  { 
    id: 'quadros', 
    label: 'Quadros', 
    description: 'Arte em relevo, litofanias e decorações de parede modernas.' 
  },
  { 
    id: 'vasos', 
    label: 'Vasos', 
    description: 'Vasos geométricos, texturizados e designs exclusivos para suas plantas.' 
  },
];

export const products: Product[] = [
  // Infantil
  {
    id: 'inf-1',
    name: 'Dinossauro Articulado teste',
    category: 'infantil',
    description: 'T-Rex articulado impresso em uma peça única, flexível e resistente.',
    image: '/images/products/dino-articulated.jpg',
    images: [
      '/images/products/dino-articulated.jpg',
      '/images/products/dino-articulated.jpg',
    ],
    sizes: [
      { label: 'Pequeno', value: 'small', description: '10cm' },
      { label: 'Médio', value: 'medium', description: '15cm' },
      { label: 'Grande', value: 'large', description: '20cm' },
    ],
    featured: true,
  },
  {
    id: 'inf-2',
    name: 'Kit Astronauta',
    category: 'infantil',
    description: 'Conjunto de miniaturas espaciais para pintar e brincar.',
    image: '/images/products/astronaut-kit.jpg',
    images: [
      '/images/products/astronaut-kit.jpg',
    ],
    sizes: [
      { label: 'Padrão', value: 'standard', description: '5 peças' },
      { label: 'Deluxe', value: 'deluxe', description: '10 peças' },
    ],
  },
  {
    id: 'inf-3',
    name: 'Luminária Nuvem',
    category: 'infantil',
    description: 'Luminária de parede em formato de nuvem com luz suave.',
    image: '/images/products/cloud-lamp.jpg',
    images: [
      '/images/products/cloud-lamp.jpg',
    ],
    sizes: [
      { label: 'Pequena', value: 'small', description: '20cm' },
      { label: 'Grande', value: 'large', description: '30cm' },
    ],
  },
  
  // Letreiros
  {
    id: 'let-1',
    name: 'Logo Corporativo 3D',
    category: 'letreiros',
    description: 'Logotipo em relevo com acabamento premium para recepção.',
    image: '/images/products/corp-logo.jpg',
    images: [
      '/images/products/corp-logo.jpg',
    ],
    sizes: [
      { label: 'Pequeno', value: 'small', description: '15cm' },
      { label: 'Médio', value: 'medium', description: '25cm' },
      { label: 'Grande', value: 'large', description: '40cm' },
    ],
    featured: true,
  },
  {
    id: 'let-2',
    name: 'Nome Personalizado',
    category: 'letreiros',
    description: 'Nome em fonte cursiva para decoração de festas ou quartos.',
    image: '/images/products/custom-name.jpg',
    images: [
      '/images/products/custom-name.jpg',
    ],
    sizes: [
      { label: 'Pequeno', value: 'small', description: '20cm' },
      { label: 'Grande', value: 'large', description: '35cm' },
    ],
  },
  {
    id: 'let-3',
    name: 'Sinalização Neon LED',
    category: 'letreiros',
    description: 'Base impressa em 3D preparada para fitas de LED neon.',
    image: '/images/products/neon-sign.jpg',
    images: [
      '/images/products/neon-sign.jpg',
    ],
    sizes: [
      { label: 'Compacta', value: 'compact', description: '30cm' },
      { label: 'Padrão', value: 'standard', description: '50cm' },
    ],
  },

  // Chaveiros
  {
    id: 'cha-1',
    name: 'Chaveiro Spotify teste',
    category: 'chaveiros',
    description: 'Chaveiro escaneável com sua música favorita do Spotify.',
    image: '/images/products/spotify-keychain.jpg',
    images: [
      '/images/products/spotify-keychain.jpg',
    ],
    sizes: [
      { label: 'Padrão', value: 'standard', description: '5cm' },
    ],
  },
  {
    id: 'cha-2',
    name: 'Mini Personagens',
    category: 'chaveiros',
    description: 'Coleção de cabeças de personagens famosos em estilo low-poly.',
    image: '/images/products/character-keychain.jpg',
    images: [
      '/images/products/character-keychain.jpg',
    ],
    sizes: [
      { label: 'Pequeno', value: 'small', description: '3cm' },
      { label: 'Médio', value: 'medium', description: '5cm' },
    ],
    featured: true,
  },
  {
    id: 'cha-3',
    name: 'Tag de Identificação Pet',
    category: 'chaveiros',
    description: 'Tag resistente e leve com nome e telefone para coleira.',
    image: '/images/products/pet-tag.jpg',
    images: [
      '/images/products/pet-tag.jpg',
    ],
    sizes: [
      { label: 'Padrão', value: 'standard', description: '6cm' },
    ],
  },

  // Quadros
  {
    id: 'qua-1',
    name: 'Mapa Topográfico',
    category: 'quadros',
    description: 'Mapa em relevo 3D de qualquer cidade ou região.',
    image: '/images/products/topo-map.jpg',
    images: [
      '/images/products/topo-map.jpg',
    ],
    sizes: [
      { label: 'Pequeno', value: 'small', description: '20x20cm' },
      { label: 'Médio', value: 'medium', description: '30x30cm' },
      { label: 'Grande', value: 'large', description: '40x40cm' },
    ],
    featured: true,
  },
  {
    id: 'qua-2',
    name: 'Arte Geométrica Abstrata',
    category: 'quadros',
    description: 'Painel modular com formas geométricas entrelaçadas.',
    image: '/images/products/geo-art.jpg',
    images: [
      '/images/products/geo-art.jpg',
    ],
    sizes: [
      { label: 'Pequeno', value: 'small', description: '25x25cm' },
      { label: 'Grande', value: 'large', description: '40x40cm' },
    ],
  },
  {
    id: 'qua-3',
    name: 'Litofania Personalizada',
    category: 'quadros',
    description: 'Foto que se revela quando iluminada por trás.',
    image: '/images/products/lithophane.jpg',
    images: [
      '/images/products/lithophane.jpg',
    ],
    sizes: [
      { label: 'Pequena', value: 'small', description: '15x15cm' },
      { label: 'Média', value: 'medium', description: '20x20cm' },
      { label: 'Grande', value: 'large', description: '30x30cm' },
    ],
  },
  {
    id: 'qua-4',
    name: 'Quadro Circuitos F1 2026',
    category: 'quadros',
    description: 'Quadro com todos os circuitos da temporada F1 2026 em relevo 3D com moldura de madeira.',
    image: '/images/products/f1-2026-circuits.png',
    images: [
      '/images/products/f1-2026-circuits.png',
    ],
    sizes: [
      { label: 'Pequeno', value: 'small', description: '30x40cm' },
      { label: 'Médio', value: 'medium', description: '40x60cm' },
      { label: 'Grande', value: 'large', description: '50x70cm' },
    ],
    featured: true,
  },

  // Vasos
  {
    id: 'vas-1',
    name: 'Vaso Voronoi',
    category: 'vasos',
    description: 'Estrutura orgânica complexa impossível de fazer em cerâmica tradicional.',
    image: '/images/products/voronoi-vase.jpg',
    images: [
      '/images/products/voronoi-vase.jpg',
    ],
    sizes: [
      { label: 'Pequeno', value: 'small', description: '12cm' },
      { label: 'Médio', value: 'medium', description: '18cm' },
      { label: 'Grande', value: 'large', description: '25cm' },
    ],
    featured: true,
  },
  {
    id: 'vas-2',
    name: 'Cachepot Low Poly',
    category: 'vasos',
    description: 'Design moderno facetado para suculentas e cactos.',
    image: '/images/products/lowpoly-planter.jpg',
    images: [
      '/images/products/lowpoly-planter.jpg',
    ],
    sizes: [
      { label: 'Pequeno', value: 'small', description: '8cm' },
      { label: 'Médio', value: 'medium', description: '12cm' },
    ],
  },
  {
    id: 'vas-3',
    name: 'Vaso Espiral',
    category: 'vasos',
    description: 'Textura suave em espiral, elegante e minimalista.',
    image: '/images/products/spiral-vase.jpg',
    images: [
      '/images/products/spiral-vase.jpg',
    ],
    sizes: [
      { label: 'Pequeno', value: 'small', description: '15cm' },
      { label: 'Grande', value: 'large', description: '25cm' },
    ],
  },
];

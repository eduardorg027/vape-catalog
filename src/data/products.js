// ===== PRODUCTOS =====
// Ordenados de más puffs a menos (los productos sin puffs van al final).
//
// Campos:
//   id          → número único
//   categoria   → 'desechables' | 'especiales'
//   nombre      → marca + modelo
//   descripcion → texto corto
//   precio      → número sin símbolo (o null = "precio a consultar")
//   cantidad    → unidades disponibles (0 = agotado automático)
//   sabor       → sabor o variante (null si no aplica)
//   puffs       → número de caladas (null si no aplica)
//   imagen      → '/productos/archivo.jpg' o null
//   badge       → 'nuevo' | 'top' | 'agotado' | null

export const products = [
  {
    id: 1,
    categoria: 'desechables',
    nombre: 'NEXA PIX 35K — Velvet Latte',
    descripcion: 'Vape recargable.',
    precio: 240,
    cantidad: 1,
    sabor: 'Velvet Latte',
    puffs: 35000,
    imagen: null,
    badge: null,
  },
  {
    id: 2,
    categoria: 'desechables',
    nombre: 'NEXA PIX 35K — Frozen Banana',
    descripcion: 'Vape recargable.',
    precio: 240,
    cantidad: 1,
    sabor: 'Frozen Banana',
    puffs: 35000,
    imagen: '/productos/nexa-pix2.jpg',
    badge: null,
  },
  {
    id: 3,
    categoria: 'desechables',
    nombre: 'VNM — Peach Ice',
    descripcion: 'Vape recargable sabor durazno.',
    precio: 200,
    cantidad: 2,
    sabor: 'Peach Ice',
    puffs: 25000,
    imagen: null,
    badge: null,
  },
  {
    id: 4,
    categoria: 'desechables',
    nombre: 'EVO DOZO — Cool Mint',
    descripcion: 'Vape recargable sabor menta.',
    precio: 160,
    cantidad: 1,
    sabor: 'Cool Mint',
    puffs: 18000,
    imagen: null,
    badge: null,
  },
  {
    id: 5,
    categoria: 'desechables',
    nombre: 'Tequila Vape — Banana',
    descripcion: 'Vape recargable sabor banana.',
    precio: 160,
    cantidad: 1,
    sabor: 'Banana',
    puffs: 15000,
    imagen: null,
    badge: null,
  },
  {
    id: 6,
    categoria: 'desechables',
    nombre: 'Wave — Gummy Mint',
    descripcion: 'Vape recargable, 5% de nicotina.',
    precio: 160,
    cantidad: 6,
    sabor: 'Gummy Mint',
    puffs: 8000,
    imagen: null,
    badge: 'nuevo',
  },
  {
    id: 7,
    categoria: 'desechables',
    nombre: 'Lost Vape Orion Bar — Dragon Fruit Berry',
    descripcion: 'Vape recargable, 5% de nicotina.',
    precio: 150,
    cantidad: 4,
    sabor: 'Dragon Fruit Berry',
    puffs: 7500,
    imagen: null,
    badge: null,
  },
  {
    id: 8,
    categoria: 'desechables',
    nombre: 'Lost Vape Orion Bar — Blueberry Pie',
    descripcion: 'Vape recargable, 5% de nicotina.',
    precio: 150,
    cantidad: 3,
    sabor: 'Blueberry Pie',
    puffs: 7500,
    imagen: null,
    badge: null,
  },
  {
    id: 9,
    categoria: 'desechables',
    nombre: 'Lost Vape Orion Bar — Grape Delight',
    descripcion: 'Vape recargable, 5% de nicotina.',
    precio: 150,
    cantidad: 2,
    sabor: 'Grape Delight',
    puffs: 7500,
    imagen: null,
    badge: null,
  },
  {
    id: 10,
    categoria: 'especiales',
    nombre: 'Packman Wax — Con Pre Rolado',
    descripcion: '3 gramos. Pluma recargable con pre-rolado.',
    precio: 620,
    cantidad: 1,
    sabor: null,
    puffs: null,
    imagen: null,
    badge: null,
  },
];

export const categories = [
  { id: 'todos', label: 'Todos', icon: '✨' },
  { id: 'desechables', label: 'Desechables', icon: '🚬' },
  { id: 'especiales', label: 'Especiales', icon: '⭐' },
];

// ===== PRODUCTOS DE EJEMPLO =====
// Reemplaza estos datos por tus productos reales.
// Categorías: "desechables" | "sabores" | "especiales"
// badge: "nuevo" | "top" | "agotado" | null

export const products = [
  // ---------- DESHABLES ----------
  {
    id: 1,
    categoria: 'desechables',
    nombre: 'NEXA PIX 35K — Sour Chill Apple',
    descripcion: 'Desechable compacto, 35000 puffs',
    precio: 230,
    puffs: 35000,
    imagen: '/productos/nexaPixSourChillApple.jpg',
    badge: 'top',
  },
  {
    id: 2,
    categoria: 'desechables',
    nombre: 'NEXA PIX 35K - Frozen Banana',
    descripcion: '35000 puffs, sabor frambuesa azul.',
    precio: 250,
    puffs: 35000,
    imagen: '/productos/nexa-pix2.jpg',
    badge: 'top',
  },
  {
    id: 3,
    categoria: 'desechables',
    nombre: 'Vaporesso 5000 — Mango Peach',
    descripcion: '5000 puffs recargable por USB-C.',
    precio: 320,
    puffs: 5000,
    imagen: null,
    badge: 'nuevo',
  },
  {
    id: 4,
    categoria: 'desechables',
    nombre: 'Geek Bar Pulse — Meta Moon',
    descripcion: '15000 puffs, pantalla LED de batería.',
    precio: 450,
    puffs: 15000,
    imagen: null,
    badge: 'nuevo',
  },

  // ---------- SABORES ----------
  {
    id: 5,
    categoria: 'sabores',
    nombre: 'Líquido Frutal — Fresa Kiwi 10ml',
    descripcion: 'Sales de nicotina 20mg. Perfil dulce y ácido.',
    precio: 120,
    puffs: null,
    imagen: null,
    badge: null,
  },
  {
    id: 6,
    categoria: 'sabores',
    nombre: 'Líquido Menta — Ice Blast 10ml',
    descripcion: 'Mentol intenso, frescor extremo.',
    precio: 120,
    puffs: null,
    imagen: null,
    badge: 'top',
  },
  {
    id: 7,
    categoria: 'sabores',
    nombre: 'Líquido Postre — Vainilla Custard 10ml',
    descripcion: 'Cremoso, estilo postre clásico.',
    precio: 140,
    puffs: null,
    imagen: null,
    badge: null,
  },
  {
    id: 8,
    categoria: 'sabores',
    nombre: 'Líquido Tropical — Piña Colada 10ml',
    descripcion: 'Mezcla tropical suave, 10mg.',
    precio: 130,
    puffs: null,
    imagen: null,
    badge: 'agotado',
  },

  // ---------- ESPECIALES ----------
  {
    id: 9,
    categoria: 'especiales',
    nombre: 'Cartucho Live Resin 1ml',
    descripcion: 'Cartucho 510 de alta pureza, sabor natural.',
    precio: 650,
    puffs: null,
    imagen: null,
    badge: 'top',
  },
  {
    id: 10,
    categoria: 'especiales',
    nombre: 'Wax Crumble 1g',
    descripcion: 'Concentrado tipo crumble, edición limitada.',
    precio: 550,
    puffs: null,
    imagen: null,
    badge: 'nuevo',
  },
  {
    id: 11,
    categoria: 'especiales',
    nombre: 'Batería 510 Variable',
    descripcion: 'Batería con voltaje ajustable y USB-C.',
    precio: 280,
    puffs: null,
    imagen: null,
    badge: null,
  },
  {
    id: 12,
    categoria: 'especiales',
    nombre: 'Kit Dab Pen Portátil',
    descripcion: 'Dispositivo compacto para concentrados.',
    precio: 750,
    puffs: null,
    imagen: null,
    badge: null,
  },
];

export const categories = [
  { id: 'todos', label: 'Todos', icon: '✨' },
  { id: 'desechables', label: 'Desechables', icon: '🚬' },
  { id: 'sabores', label: 'Sabores', icon: '🍓' },
  { id: 'especiales', label: 'Especiales', icon: '⭐' },
];

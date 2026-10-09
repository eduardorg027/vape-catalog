# Catálogo Vapes — Landing (Astro + Tailwind)

Landing page tipo catálogo sin carrito: los clientes ven productos y precios, y contactan por WhatsApp (mensaje prellenado por producto).

## Stack
- **Astro 4** + **Tailwind CSS 3** (sitio estático, sin framework JS pesado)
- Productos y configuración en archivos de datos fáciles de editar

## Comandos
```bash
npm install     # instalar dependencias
npm run dev     # desarrollo en http://localhost:4321
npm run build   # genera dist/ (estático, listo para Vercel/Netlify)
npm run preview # previsualizar el build
```

## Dónde editar
| Qué | Archivo |
|-----|---------|
| Nombre del negocio, WhatsApp, redes, moneda | `src/data/config.js` |
| Productos (nombre, precio, categoría, badge...) | `src/data/products.js` |
| Estructura de la página | `src/pages/index.astro` |
| Componentes (hero, cards, tabs, footer...) | `src/components/` |
| Colores/tema (night, neon, aqua) | `tailwind.config.mjs` |

## Modelo de producto
```js
{
  id: 1,
  categoria: 'desechables', // 'desechables' | 'sabores' | 'especiales'
  nombre: '...',
  descripcion: '...',
  precio: 8,            // número, sin símbolo (la moneda está en config.js)
  puffs: 600,           // o null si no aplica
  imagen: null,         // o ruta/URL a la foto
  badge: 'nuevo',       // 'nuevo' | 'top' | 'agotado' | null
}
```
- `badge: 'agotado'` desactiva el botón "Consultar" y atenúa la tarjeta.
- Las imágenes propias van en `public/` y se referencian como `/foto.jpg`.

## Notas
- Verificación +18 con `localStorage` (no se repite al volver).
- Contacto principal: WhatsApp (`wa.me` con mensaje prellenado incluyendo nombre y precio del producto).

## Git / GitHub
- Repo público: https://github.com/eduardorg027/vape-catalog (remoto `origin`, rama `main`)
- Autenticado con GitHub CLI (`gh`), usuario `eduardorg027`, protocolo HTTPS
- Flujo: `git add -A` → `git commit -m "..."` → `git push`

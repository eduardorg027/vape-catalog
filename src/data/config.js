// ===== CONFIGURACIÓN DEL NEGOCIO =====
// Cambia estos valores por los tuyos.
export const siteConfig = {
  nombre: 'VaporHouse',
  tagline: 'Catálogo exclusivo · Calidad garantizada',
  // Número de WhatsApp en formato internacional, sin "+" ni espacios:
  whatsapp: '34600000000',
  instagram: 'https://instagram.com/tuusuario',
  telegram: 'https://t.me/tuusuario',
  moneda: '€',
};

// Mensaje base que se prellena al consultar por WhatsApp
export function whatsappLink(producto) {
  const msg = encodeURIComponent(
    `Hola! Me interesa el producto: *${producto.nombre}* (${siteConfig.moneda}${producto.precio}). ¿Está disponible?`
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${msg}`;
}

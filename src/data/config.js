// ===== CONFIGURACIÓN DEL NEGOCIO =====
// Cambia estos valores por los tuyos.
export const siteConfig = {
  nombre: 'Vapes Skull Gv',
  tagline: 'Catálogo exclusivo · Calidad garantizada',
  // Número de WhatsApp en formato internacional, sin "+" ni espacios:
  whatsapp: '34600000000',
  instagram: 'https://instagram.com/tuusuario',
  moneda: '$',
};

// Mensaje que se prellena al consultar por WhatsApp
export function whatsappLink(producto) {
  const precio = producto.precio != null ? ` (${siteConfig.moneda}${producto.precio})` : '';
  const msg = encodeURIComponent(
    `Hola! Me interesa el producto: *${producto.nombre}*${precio}. ¿Está disponible?`
  );
  return `https://wa.me/${siteConfig.whatsapp}?text=${msg}`;
}

// ===== CONFIGURACIÓN DEL NEGOCIO =====
// Cambia estos valores por los tuyos.
export const siteConfig = {
  nombre: 'Vapes Skull Gv',
  tagline: 'Catálogo exclusivo · Calidad garantizada',
  // Número de WhatsApp en formato internacional, sin "+" ni espacios:
  // 52 = México, luego los 10 dígitos. Ej: 525551674653
  whatsapp: '525551674653',
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

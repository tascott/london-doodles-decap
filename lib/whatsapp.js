/** E.164 digits only (e.g. UK 447584010292) → https://wa.me/… */
export function whatsAppHref(phone) {
  if (!phone) return null;
  const digits = String(phone).replace(/\D/g, '');
  return digits ? `https://wa.me/${digits}` : null;
}

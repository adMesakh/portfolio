/** Shared by the form and the API so both sides validate the same way. */
const EMAIL = /^[^\s@<>()[\]\\,;:"]+@[^\s@<>()[\]\\,;:"]+\.[A-Za-z]{2,}$/;

export function isValidEmail(value: string): boolean {
  const v = value.trim();
  return v.length >= 6 && v.length <= 254 && EMAIL.test(v);
}

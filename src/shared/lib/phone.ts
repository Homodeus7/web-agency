export function formatPhone(digits: string): string {
  if (digits.length === 0) return "+7";

  let formatted = "+7";
  if (digits.length > 0) formatted += ` (${digits.slice(0, 3)}`;
  if (digits.length >= 3) formatted += `)`;
  if (digits.length > 3) formatted += ` ${digits.slice(3, 6)}`;
  if (digits.length > 6) formatted += `-${digits.slice(6, 8)}`;
  if (digits.length > 8) formatted += `-${digits.slice(8, 10)}`;

  return formatted;
}

export function parsePhoneDigits(input: string): string {
  return input.replace(/\D/g, "").replace(/^7/, "").slice(0, 10);
}

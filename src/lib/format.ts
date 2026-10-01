/** Two-digit index, 01, 02 …, used wherever the verksamheter are numbered. */
export function indexNumber(index: number) {
  return String(index + 1).padStart(2, "0");
}

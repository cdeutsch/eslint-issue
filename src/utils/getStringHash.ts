/**
 * Creates a deterministic hash from a string
 * @param str - The string to hash
 * @returns A number that can be used as an index
 */
export function getStringHash(str: string): number {
  return Math.abs(
    str.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0)
  );
}

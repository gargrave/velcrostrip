/**
 * Generates a new empty Array of `len` length, with each index filled with undefined.
 *
 * Use this when you need an Array to map over, but do not need any existing values.
 */
export function arr<T>(len: number): T[] {
  return len > 0 ? Array.from(Array(len)) : []
}

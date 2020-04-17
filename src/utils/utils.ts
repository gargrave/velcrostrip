/**
 * Generates a new empty Array of `len` length, with each index filled with undefined.
 *
 * Use this when you need an Array to map over, but do not need any existing values.
 */
export const arr = (len: number) => (len > 0 ? Array.from(Array(len)) : [])

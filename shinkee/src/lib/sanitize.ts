/**
 * Example sanitizers for quirky API arrays, e.g. Jelly Belly ingredients lines split oddly.
 */
export function normalizeIngredients(input: unknown): string[] | undefined {
  if (!input) return undefined
  if (Array.isArray(input)) {
    // Flatten nested arrays and split long lines by ")" edge case if present
    return input
      .flatMap((x) => (typeof x === 'string' ? splitWeirdLine(x) : []))
      .map((s) => s.trim())
      .filter(Boolean)
  }
  if (typeof input === 'string') return splitWeirdLine(input)
  return undefined
}

function splitWeirdLine(line: string): string[] {
  // Treat parentheses-misaligned lines as separate items, otherwise return as single
  if (/Jewel\s+[^)]+\)/.test(line)) {
    // naive split example; adapt per real API quirks
    return line.replace(/[()]/g, '').split(/,\s*/)
  }
  return [line]
}
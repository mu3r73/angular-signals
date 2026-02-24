const DEFAULT_VALUES_FOR_MAP: Array<[string, number]> = [
  ['key1', 1],
  ['key2', 2],
  ['key3', 3],
]

export const mkDefaultMap = () => {
  return new Map(DEFAULT_VALUES_FOR_MAP)
}

export const mkNewMapItem = (map: Map<string, number>) => {
  const value = map.size + 1
  const key = `key${value}`
  return { key, value }
}


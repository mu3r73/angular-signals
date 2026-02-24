const DEFAULT_VALUE_FOR_OBJECT = { key1: 1, key2: 2, key3: 3 }

export const mkDefaultObject = () => {
  return {
    ...DEFAULT_VALUE_FOR_OBJECT,
  }
}

export const mkNewObjectItem = (obj: { [key: string]: number }) => {
  const value = Object.keys(obj).length + 1
  const key = `key${value}`
  return { key, value }
}

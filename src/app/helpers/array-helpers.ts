const DEFAULT_VALUE_FOR_ARRAY = [1, 2, 3]

export const mkDefaultArray = () => {
  return [
    ...DEFAULT_VALUE_FOR_ARRAY
  ]
}

export const mkNewArrayItem = (arr: Array<any>) => {
  return arr.length + 1
}

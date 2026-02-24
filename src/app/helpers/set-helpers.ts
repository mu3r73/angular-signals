const DEFAULT_VALUES_FOR_SET = [1, 2, 3]

export const mkDefaultSet = () => {
  return new Set(DEFAULT_VALUES_FOR_SET)
}

export const mkNewSetItem = (set: Set<any>) => {
  return set.size + 1
}

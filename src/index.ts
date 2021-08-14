/**
 * Zips corresponding elements from a collection of enumerables into a list of tuples.
 *
 * By default, the zipping finishes as soon as any enumerable in the given collection completes.
 *
 * @param arrays List of enumerables
 * @returns List of tuples
 */
export const zip = <T>(arrays: T[][]) => {
  const shortestArrayLength = Math.min(...arrays.map(array => array.length))
  const parentArray = Array.from(Array(shortestArrayLength).keys())

  return parentArray.map((_item, index) => arrays.map(array => array[index]))
}

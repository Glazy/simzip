type ZipOptions = {
  truncate: true
  placeholder?: never
} | {
  truncate: false
  placeholder: any
}

/**
 * Zips corresponding elements from a collection of enumerables into a list of tuples.
 * By default, the zipping finishes as soon as any enumerable in the given collection completes.
 */
export const zip = <T>(arrays: T[][], userOptions?: ZipOptions) => {
  const defaultOptions: ZipOptions = {
    truncate: true,
  }

  const options = {
    ...defaultOptions,
    ...userOptions,
  }

  const arrayLengths = arrays.map(array => array.length)
  const desiredArrayLength = options?.truncate
    ? Math.min(...arrayLengths)
    : Math.max(...arrayLengths)

  const parentArray = Array.from(Array(desiredArrayLength).keys())

  return parentArray.map((_item, index) =>
    arrays.map(array => typeof array[index] === 'undefined'
        ? options?.placeholder
        : array[index]
    )
  )
}

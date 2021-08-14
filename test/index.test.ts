import { zip } from '../src'

describe('zip', () => {
  describe('no options', () => {
    it('handles a single array', () => {
      expect(zip([[1, 2, 3]])).toEqual([[1], [2], [3]])
    })

    it('handles two arrays', () => {
      expect(
        zip<string | number>([
          [1, 2],
          ['a', 'b', 'c'],
        ])
      ).toEqual([
        [1, 'a'],
        [2, 'b'],
      ])
    })

    it('handles five arrays', () => {
      expect(
        zip([
          ['a', 'b', 'c', 'd'],
          ['d', 'e', 'f'],
          ['x', 'y', 'z', '.'],
          ['f', 'g', 'h', 'i', 'j'],
          ['k', 'l', 'm'],
        ])
      ).toEqual([
        ['a', 'd', 'x', 'f', 'k'],
        ['b', 'e', 'y', 'g', 'l'],
        ['c', 'f', 'z', 'h', 'm'],
      ])
    })
  })
})
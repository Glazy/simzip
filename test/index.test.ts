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

  describe('with options', () => {
    it('handles truncate false', () => {
      expect(
        zip(
          [
            [1, 2, 3, 4, 5],
            [1, 2, 3],
          ],
          { truncate: false }
        )
      ).toEqual([
        [1, 1],
        [2, 2],
        [3, 3],
        [4, null],
        [5, null],
      ])
    })

    it('handles placeholder value with truncation disabled', () => {
      expect(
        zip(
          [
            [1, 2, 3],
            [4, 5],
          ],
          { truncate: false, placeholder: '-' }
        )
      ).toEqual([
        [1, 4],
        [2, 5],
        [3, '-'],
      ])
    })
  })
})

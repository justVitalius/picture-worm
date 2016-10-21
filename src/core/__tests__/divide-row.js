import { getLeftLine } from '../divide-row';
import { getRightLine } from '../divide-row';

// x0 - current coordinate (X or Y)
// 0 - head coordinate of row (X or Y)
// xL - end coordinate of row (X or Y)

describe('divide row functions', () => {

  it('returns x0 in both cut lines at start position', () => {
    const row = [0,1,2,3,4,5,6,7,8,9];
    row.map( (el, i) => {
      expect(
        getLeftLine(row, i)[0]
      ).toEqual(
        getRightLine(row, i)[0]
      );
    });
  });

  describe('getLeftLine', () => {

    it('returns elements from 0 to x0 ', () => {
      expect(
        getLeftLine([0,1,2,3,4,5,6,7,8,9], 3)
      ).toEqual(
        [0,1,2,3]
      );
    });

    it('returns null if x0 out of map left', () => {
      expect(
        getLeftLine([0,1,2,3,4,5,6,7,8,9], -1)
      ).toEqual(
        null
      );
    });

    it('returns null if x0 out of map right', () => {
      expect(
        getLeftLine([0,1,2,3,4,5,6,7,8,9], 100)
      ).toEqual(
        null
      );
    });

  });

  describe('getRightRow', () => {

    it('returns elements from x0 to xL', () => {
      expect(
        getRightLine([0,1,2,3,4,5,6,7,8,9], 3)
      ).toEqual(
        [3,4,5,6,7,8,9]
      );
    });

    it('returns null if x0 out of map left', () => {
      expect(
        getRightLine([0,1,2,3,4,5,6,7,8,9], -1)
      ).toEqual(
        null
      );
    });

    it('returns null if x0 out of map right', () => {
      expect(
        getRightLine([0,1,2,3,4,5,6,7,8,9], 100)
      ).toEqual(
        null
      );
    });

  });

});
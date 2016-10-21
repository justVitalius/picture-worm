import { getHorizontalRow } from '../cut-row';
import { getVerticalRow } from '../cut-row';

const map = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [10,11,12],
];

describe('cut row functions', () => {
  
  describe('getHorizontalRow', () => {

    it('returns array', () => {
      expect(
        getHorizontalRow(map, 1)
      ).toEqual(
        jasmine.any(Array)
      );
    });

    it('returns horizontal row by <y> coordinate', () => {
      const coordY = 1;
      expect(
        getHorizontalRow(map, coordY)
      ).toEqual(
        map[coordY]
      );
    });

    it('returns null if <y> coordinate out of map', () => {
      expect(
        getHorizontalRow(map, -1)
      ).toEqual(null);

      expect(
        getHorizontalRow(map, map.length + 1)
      ).toEqual(null);
    })

  });
  
  describe('getVerticalRow', () => {

    it('returns array', () => {
      expect(
        getVerticalRow(map, 1)
      ).toEqual(
        jasmine.any(Array)
      );
    });

    it('returns an element by <x> coordinate from each row', () => {
      const coordX = 1;
      expect(
        getVerticalRow(map, coordX)
      ).toEqual(
        [2,5,8,11]
      );
    });

    it('returns null if <x> coordinate out of map', () => {
      expect(
        getVerticalRow(map, -1)
      ).toEqual(null);

      expect(
        getVerticalRow(map, map[0].length + 1)
      ).toEqual(null);
    })
    
  });

});

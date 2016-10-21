const calculateNextPosition = () => {};

const cellA = {};
const cellB = {};
const cellC = {};

describe('calculate new position', () => {

  describe('next position depends on history and direction way', () => {

    describe('way A-A-A-A-A', () => {
      const way = [cellA, cellA, cellA, cellA, cellA];
      
      describe('current position |A|-A-A-A-A', () => {
        describe('history empty', () => {
          it('go forward by 1 step', () => {
            expect(
              calculateNextPosition(
                way,
                [],
                0,
              )
            ).toEqual(1);
          })
        });

        describe('history A', () => {
          it('go forward by 1 step', () => {
            expect(
              calculateNextPosition(
                way,
                [cellA],
                0,
              )
            ).toEqual(1);
          })
        });

        describe('history A-A', () => {
          it('go forward by 1 step', () => {
            expect(
              calculateNextPosition(
                way,
                [cellA, cellA],
                0,
              )
            ).toEqual(1);
          })
        });
      });

      describe('current position A-A-|A|-A-A', () => {
        describe('history empty', () => {
          it('go forward by 1 step', () => {
            expect(
              calculateNextPosition(
                way,
                [],
                2,
              )
            ).toEqual(3);
          })
        });

        describe('history A', () => {
          it('go forward by 1 step', () => {
            expect(
              calculateNextPosition(
                way,
                [cellA],
                2,
              )
            ).toEqual(3);
          })
        });

        describe('history A-A', () => {
          it('go forward by 1 step', () => {
            expect(
              calculateNextPosition(
                way,
                [cellA, cellA],
                2,
              )
            ).toEqual(3);
          })
        });
      });

      describe('current position A-A-A-A-|A|', () => {
        describe('history empty', () => {
          it('stay on current position if no step forward', () => {
            expect(
              calculateNextPosition(
                way,
                [],
                way.length,
              )
            ).toEqual(way.length);
          })
        });

        describe('history A', () => {
          it('stay on current position if no step forward', () => {
            expect(
              calculateNextPosition(
                way,
                [cellA],
                way.length,
              )
            ).toEqual(way.length);
          })
        });

        describe('history A-A', () => {
          it('stay on current position if no step forward', () => {
            expect(
              calculateNextPosition(
                [cellA, cellA, cellA, cellA, cellA],
                [cellA, cellA],
                way.length,
              )
            ).toEqual(way.length);
          })
        });
      });

    });

    describe('way B-B-B-B-B', () => {
      const way = [cellB, cellB, cellB, cellB, cellB];

      describe('current position |B|-B-B-B-B', () => {
        describe('history empty', () => {
          it('go forward by 1 step', () => {
            expect(
              calculateNextPosition(
                way,
                [],
                0,
              )
            ).toEqual(1);
          })
        });

        describe('history B', () => {
          it('go forward by 1 step', () => {
            expect(
              calculateNextPosition(
                way,
                [cellB],
                0,
              )
            ).toEqual(1);
          })
        });

        describe('history B-B', () => {
          it('go forward by 3 steps', () => {
            expect(
              calculateNextPosition(
                way,
                [cellB, cellB],
                0,
              )
            ).toEqual(3);
          })
        });
      });

      describe('current position B-|B|-B-B-B', () => {
        describe('history empty', () => {
          it('go forward by 1 step', () => {
            expect(
              calculateNextPosition(
                way,
                [],
                1,
              )
            ).toEqual(2);
          })
        });

        describe('history B', () => {
          it('go forward by 1 step', () => {
            expect(
              calculateNextPosition(
                way,
                [cellB],
                1,
              )
            ).toEqual(2);
          })
        });

        describe('history B-B', () => {
          it('go forward by 3 steps', () => {
            expect(
              calculateNextPosition(
                way,
                [cellB, cellB],
                1,
              )
            ).toEqual(4);
          })
        });
      });

      describe('current position B-B-B-|B|-B', () => {
        describe('history B-B', () => {

          it('rebound of edge of the way and stay on the last step', () => {
            expect(
              calculateNextPosition(
                way,
                [cellB, cellB],
                way.length,
              )
            ).toEqual(way.length);
          });

        });
      });

      describe('current position B-B-B-B-|B|', () => {
        describe('history empty', () => {
          it('stay on current position', () => {
            expect(
              calculateNextPosition(
                way,
                [],
                way.length,
              )
            ).toEqual(way.length);
          })
        });

        describe('history B', () => {
          it('go forward by 1 step', () => {
            expect(
              calculateNextPosition(
                way,
                [cellB],
                way.length,
              )
            ).toEqual(way.length);
          })
        });

        describe('history B-B', () => {
          it('go forward by 3 steps', () => {
            expect(
              calculateNextPosition(
                way,
                [cellB, cellB],
                way.length,
              )
            ).toEqual(way.length);
          })
        });
      });
    });

  });

});

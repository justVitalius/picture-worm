const cellA = {};
const cellB = {};
const cellC = {};

const map = [
  [cellA, cellA, cellC, cellA, cellA],
  [cellA, cellC, cellC, cellC, cellA],
  [cellC, cellB, cellB, cellB, cellC],
  [cellA, cellC, cellC, cellC, cellA],
  [cellA, cellA, cellC, cellA, cellA],
];

const startPoint = {};
const goRight = () => {};
const goBottom = () => {};

const init = () => {};

describe('integration rules example', () => {

  it('collect rights points', () => {
    const store = init(map, startPoint);

    goRight();
    goRight();
    goBottom();
    goRight();
    goBottom();

    expect(store.points).toEqual(10);
  });

});

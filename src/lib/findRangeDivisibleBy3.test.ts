import {findRangeDivisibleBy3} from "./findRangeDivisibleBy3";


test('findRangeDivisibleBy3 ', () => {
  expect(findRangeDivisibleBy3(1, 5)).toBe(1);
  expect(findRangeDivisibleBy3(1, 9)).toBe(3);
});
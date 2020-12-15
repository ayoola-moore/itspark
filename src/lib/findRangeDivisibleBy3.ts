const findRangeDivisibleBy3 = (A: number, B: number) => {
  const totalDivisibles = Math.floor(B / 3),
    excludeDivisibles = Math.floor(A / 3),
    divisiblesInArray = totalDivisibles - excludeDivisibles;
  console.log(divisiblesInArray);

  return divisiblesInArray;
};

export { findRangeDivisibleBy3 };


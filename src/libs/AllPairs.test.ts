import AllPairs from './AllPairs';

describe('AllPairs()', () => {
  test('Empty array should return empty array', () => {
    let params = [
      ['Brand X', 'Brand Y'],
      ['98', 'NT', '2000', 'XP'],
      ['Internal', 'Modem'],
      ['Salaried', 'Hourly', 'Part-Time', 'Contr.'],
      [6, 10, 15, 30, 60]
    ];
    console.log(new AllPairs(params).next());
  });
});

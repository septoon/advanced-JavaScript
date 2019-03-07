import { getHealth } from './app';

test('Если здоровье меньше 15', () => {
  const received = getHealth('Маг', 14);
  const expected = 'critical';

  expect(received).toBe(expected);
});

test('Если здоровье больше 15, но меньше 50', () => {
  const received = getHealth('Маг', 34);
  const expected = 'wounded';

  expect(received).toBe(expected);
});

test('Если здоровье больше 50', () => {
  const received = getHealth('Маг', 64);
  const expected = 'healthy';

  expect(received).toBe(expected);
});

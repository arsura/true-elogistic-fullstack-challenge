const user = require('../../controller/user');

test('jest.fn recalls what it has been called with', () => {
  const mock = jest.fn();
  mock('a', 'b', 'c');
  expect(mock).toHaveBeenCalledTimes(1);
  expect(mock).toHaveBeenCalledWith('a', 'b', 'c');
});
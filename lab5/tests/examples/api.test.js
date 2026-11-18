const axios = require('axios');
const fetchPosts = require('../../src/api');

jest.mock('axios');

test('Отримання постів із замоканого API (приклад методички)', async () => {
  axios.get.mockResolvedValue({
    data: [
      { userId: 1, id: 1, title: 'Тестова назва 1', body: 'Тестовий контент 1' },
      { userId: 1, id: 2, title: 'Тестова назва 2', body: 'Тестовий контент 2' }
    ]
  });

  const posts = await fetchPosts();
  expect(axios.get).toHaveBeenCalledTimes(1);
  expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
  expect(posts).toBeInstanceOf(Array);
  expect(posts).toHaveLength(2);
  expect(posts[1].id).toBe(2);
  expect(posts[1].title).toBe('Тестова назва 2');
});

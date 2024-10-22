const fetchData = require('./2_2');
const axios = require('axios');

jest.mock('axios');

test('fetches successfully data from an API', async () => {
  const data = { data: 'some data' }; 
  axios.get.mockResolvedValueOnce(data);

  const result = await fetchData('https://jsonplaceholder.typicode.com/posts/1');

  expect(result).toEqual(data.data); 
});

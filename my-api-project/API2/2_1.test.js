const fetchWrongUrl = require('./2_1');
const axios = require('axios');

jest.mock('axios'); 

test('handles error for invalid URL', async () => {
  const errorMessage = 'Network Error';
  
  axios.get.mockRejectedValueOnce(new Error(errorMessage));

  await expect(fetchWrongUrl()).rejects.toThrow(errorMessage);
});

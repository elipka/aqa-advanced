const fetchData = require('./2_3.js');
const axios = require('axios');

jest.mock('axios');

describe('fetchData', () => {
    it('should fetch data successfully', async () => {
        const data = 'some data'; 
        axios.get.mockResolvedValueOnce({ data }); 

        const result = await fetchData('https://jsonplaceholder.typicode.com/posts/1');

        expect(result).toEqual(data); 
        expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts/1');
    });

    it('should handle error for failed request', async () => {
        const errorMessage = 'Network Error';
        axios.get.mockRejectedValueOnce(new Error(errorMessage));

        await expect(fetchData('https://jsonplaceholder.typicode.com/posts/1')).rejects.toThrow(errorMessage);
    });
});

const axios = require('axios');

const fetchWrongUrl = async () => {
  const url = 'https://invalid-url.com'; 
  const response = await axios.get(url);
  return response.data;
};

module.exports = fetchWrongUrl;

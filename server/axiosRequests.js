const axios = require('axios');

let getItems = () => {
  return axios.get('http://gloomhavendb.com/api/items', { params: { numbers: [1,2,3,4,5,6,7,8,9,10] }})
};

module.exports.getItems = getItems;
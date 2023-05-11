const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  const httpLink = 'https://api.thecatapi.com/v1/breeds/search?name=' + breedName;

  request(httpLink, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (!data.length) {
        callback("Error to find the material of the cat.", null);
      } else {
        callback(null, data[0].description);
      }
    }
  });
};

module.exports = { fetchBreedDescription }


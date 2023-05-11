const request = require('request');

const args = process.argv.slice(2);
if (!args.length) {
  console.log("No name was inputted");
  process.exit();
}
const catName = args[0];


const httpLink = 'https://api.thecatapi.com/v1/breeds/search?name=' + catName;

request(httpLink, (error, response, body) => {
  if (error) {
    console.log('Error on retrieving from the website.');
    console.log(error.message);
  }

  const data = JSON.parse(body);
  if (!data.length) {
    console.log("Error to find the material of the cat.");
  } else {
    console.log(data[0].description);

  }
});



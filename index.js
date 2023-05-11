const { fetchBreedDescription } = require('./breedFetcher');

const args = process.argv.slice(2);
if (!args.length) {
  console.log("No name was inputted");
  process.exit();
}
const breedName = args[0];

fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});
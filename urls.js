const fs = require('fs');
const axios = require('axios');
const path = require('path');
const { URL } = require('url');

//Check if the correct number of arguments is provided
if (process.argv.length !== 3) {
  console.error("Usage: node urls.js FILENAME");
  process.exit(1);
}

const filename = process.argv[2];





//Function to fetch the content of a URL and save it to a file
async function fetchAndSaveUrl(url) {
  try {
    console.log(`Processing URL: ${url}`);
    const response = await axios.get(url.trim());
    const hostname = new URL(url.trim()).hostname;
    const outputFilename = path.join(__dirname, hostname);
    fs.writeFile(outputFilename, response.data, 'utf8', (err) => {
      if (err) {
        console.error(`Error writing to file: ${outputFilename}`);
      } else {
        console.log(`Wrote to ${hostname}`);
      }
    });
  } catch (error) {
    console.error(`Couldn't download ${url}`);
  }
}

//Read the input file
fs.readFile(filename, 'utf8', (err, data) => {
  if(err) {
    copnsole.error(`Error reading file: ${filename}`);
    process.exit(1);
  }

  const urls = data.split('/n').filter(Boolean);
  console.log('URLs to process:', urls);
  urls.forEach(fetchAndSaveUrl);
});
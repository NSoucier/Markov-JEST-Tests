/** Command-line tool to generate Markov text. */

const fs = require('fs');
const process = require('process');
const axios = require('axios');
const { MarkovMachine } = require("./markov");

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if (err) {
            console.log(`Error reading ${path}: \n ${err}`);
            process.exit(1);
        }
        let mm = new MarkovMachine(data);
        mm.makeText(50);
    });
}

async function webCat(url) {
    try {
        let response = await axios.get(url);
        let mm = new MarkovMachine(response.data);
        mm.makeText(50);
    } catch (err) {
        console.log(`Error fetching ${url}: \n ${err}`);
        process.exit(1);
    }
}

let type = process.argv[2];

if (type == 'url') {
    webCat(process.argv[3]);
} else {
    cat(process.argv[3]);
}

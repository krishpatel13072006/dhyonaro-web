import fs from 'fs';
import * as pdfParse from 'pdf-parse';

console.log("Exported keys:", Object.keys(pdfParse));
// Let's see if we can find the parsing function
const func = pdfParse.default || pdfParse.pdfParse || pdfParse;

let dataBuffer = fs.readFileSync('public/dhyanora_google_ranking_seo.pdf');

try {
  func(dataBuffer).then(function(data) {
      console.log("PDF TEXT:\n", data.text);
  }).catch(err => {
      console.error("Promise Error: ", err);
  });
} catch (e) {
  console.log("Not a function!", e);
}

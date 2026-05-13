const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('public/dhyanora_google_ranking_seo.pdf');
console.log(typeof pdf, pdf);
let pdfFunc = typeof pdf === 'function' ? pdf : pdf.default;
if (typeof pdfFunc !== 'function') {
  console.log("Still not a function. Keys:", Object.keys(pdf));
} else {
  pdfFunc(dataBuffer).then(function(data) {
      console.log("PDF TEXT:\n", data.text);
  }).catch(err => {
      console.error("Error parsing PDF: ", err);
  });
}

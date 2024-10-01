const fs = require("fs");

const inputFile = "10000-most-common-passwords.csv";
const outputFile = "statistics.csv";
const delimiter = ",";

function deleteExistingOutputFile() {
  if (fs.existsSync(outputFile)) {
    fs.unlinkSync(outputFile);
  }
}
// const count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const count = Array(21).fill(0);


function processData() {
  const data = fs.readFileSync(inputFile, "utf-8");
  const lines = data.split(/\n/);
  
  for (let line of lines) {
    elements = line.split(delimiter);
    
    count[elements[1].length] += 1;
    
  }
  
  for (let i = 0; i <= count.length -1; i++) {
    fs.appendFileSync(outputFile, `Chars: ${i}, Count: ${count[i]}\n`, "utf-8");
  }


}


// Main execution
deleteExistingOutputFile(); 
processData();

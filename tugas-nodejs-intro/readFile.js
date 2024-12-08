const fs = require("fs");

const fileName = "file.txt";

fs.readFile(fileName, "utf-8", (err, data) => {
  if (err) {
    console.log(`Error reading file: ${err.message}`);
    return;
  }
  console.log(`Isi file dari ${fileName} adalah ${data}`);
});

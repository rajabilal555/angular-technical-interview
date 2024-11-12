const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'NotoNaskhArabic-Regular.ttf');

fs.readFile(filePath, (err, data) => {
  if (err) {
    console.error('Error reading the TTF file:', err);
    return;
  }

  const base64String = data.toString('base64');
  console.log('Base64 Encoded String:');
  console.log(base64String);
});
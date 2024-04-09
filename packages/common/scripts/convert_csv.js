const fs = require('fs');

// Define input and output file paths
const inputFile = 'exercise_data.csv';
const outputFile = 'exercise_list.json';

// Read CSV file line by line and convert to JSON
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading CSV file:', err);
    return;
  }

  // Split CSV data into an array of lines
  const lines = data.trim().split('\n');

  // Extract headers
  let headers = lines[0].split(',');

  // Drop last 2 because we don't care.
  headers = headers.slice(0, headers.length - 2).map(header => header.toLowerCase());

  // Initialize array to store JSON data
  const jsonData = [];

   // Loop through each line (excluding headers) to create JSON objects
   for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();

    // Initialize array to store parsed values
    const values = [];

    // Regular expression to match quoted fields and non-quoted fields
    const regex = /(?:^|,)(?:"([^"]*(?:""[^"]*)*)"|([^",]*))/g;

    let match;
    // Iterate through matched values
    while ((match = regex.exec(line)) !== null) {
      // Choose the appropriate match group (quoted or non-quoted)
      const value = match[1] !== undefined ? match[1].replace(/""/g, '"') : match[2];
      values.push(value);
    }

    // Create JSON object with headers as keys and corresponding line values as values
    const obj = {};
    for (let j = 0; j < headers.length; j++) {
        if (j == 0) {
            obj[headers[j]] = parseInt(values[j]);
            continue;
        }
      obj[headers[j]] = values[j];
    }

    // Push JSON object to the array
    jsonData.push(obj);
  }

  // Write JSON data to output file
  fs.writeFile(outputFile, JSON.stringify(jsonData, null, 2), (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
    } else {
      console.log('JSON file has been created successfully!');
    }
  });
});
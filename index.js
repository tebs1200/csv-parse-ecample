'use strict';

let parse = require('csv-parse'),
    fs = require('fs');

fs.readFile('sample.csv', 'utf8', (fileReadErr, data) => {
    if(fileReadErr) {
        console.log('Error: Unable to read sample.csv');
        console.log(fileReadErr.message);
        return;
    }

    parse(data, {columns: true, trim: true}, (parseErr, records) => {
        if(parseErr){
            console.log('Error: Unable to parse sample.csv');
            console.log(parseErr.message);
            return;
        }

        records.forEach((record) => {

            if(record.Name) {
                console.log(record.Name);
            } else {
                console.log('Error: Name column missing from sample data');
                return;
            }

        });

    });
});

Example of issue with csv-parse 1.1.8/1.1.9
===========================================

`npm install`
`node index.js`

When you run this with version 1.1.8 or 1.1.9, you'll notice that after parsing the file, there are 6 records with the last one being null.

Running this with 1.1.7, only 5 records are generated, which matches the number of records in the sample csv.

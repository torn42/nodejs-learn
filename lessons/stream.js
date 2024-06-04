const fs = require('fs');
const path = require('path');

// READING FILE WITH FS
// fs.readFile(path.resolve(__dirname, 'test.txt'), (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data)
// })

// READING FILE WITH STREAM
// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'))
//
// stream.on('data', (chunk) => {
//   console.log(chunk);
// })
// stream.on('open', () => console.log('Начали читать'));
// stream.on('end', () => console.log('Закончили читать'));
// stream.on('error', (e) => console.log(e))

// WRITING FILE WITH STREAM
// const writableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
// for (let i = 1; i <= 20; i++) {
//   writableStream.write(i + '\n');
// }
// writableStream.end();

// const http = require('http');
//
// http.createServer((req, res) => {
//   //req - readable stream
//   //res - writable stream
//   const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'))
//
//  // Stream will end reading before the user will download
//   stream.pipe(res)
// })
const path = require('path');

console.log(path.join(__dirname, '..', '..'));
const fullpath = path.resolve(__dirname, 'first', 'second', 'third');
console.log('Парсинг пути', path.parse(fullpath));

// ------------------------------

const siteURL = 'http://localhost:8888/users?id=5123';

const url = new URL(siteURL);

console.log(url);
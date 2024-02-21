const path = require('path');
// console.log(path.sep);



const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

// console.log(__dirname);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);

// .join() & .resolve() -----> These 2 functions deal with segments starting with / in very different ways
// join will concatenate with the previous arguement
// resolve will ignore previous paths if there is a /

// path.join('/a', '/b') // Outputs '/a/b'
// path.resolve('/a', '/b') // Outputs '/b'
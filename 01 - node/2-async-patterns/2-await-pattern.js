const {readFile, writeFile} = require('fs').promises;

// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// We're doing it in Promise style, rest of the course we will use async-await Insha Allah
// we need to understand what is happening behind the scenes so we need to take a look at such an example

// const getText = (path) => {

//     return new Promise( (resolve, reject) => {

//         readFile(path,'utf-8', (err, data) => {
//             if(err) {
//                 reject(err);
//             }
//             else {
//                 resolve(data);
//             }
//         })

//     })

// }

const start = async () => {

    try {
        const first = await readFile('./content/first.txt', 'utf-8');
        const second = await readFile('./content/second.txt', 'utf-8');

        await writeFile('./content/result-mind-grenade.txt', `This is Awesome: ${first} & ${second}`);
        
        console.log(first,second);
    } catch (error) {
        console.log(error);
    }

    

}

start();

// getText('../content/first.txt')
//     .then(result => console.log(result))
//     .catch((err) => console.log(err))
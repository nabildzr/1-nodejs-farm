// "file system" = fs
const fs = require('fs');



// BLOCKING SYNCHRONOUS WAY
// sinkronasi
//  2 arguments
// 1. path
// 2. character encoding
// const textIn = fs.readFileSync('./final/txt/input.txt', 'utf-8')


// console.log(textIn)

// // Template literals menggunakan tanda backtick (``) dan ${} untuk memasukkan nilai variabel ke dalam string
// const textOut = `this is what we know about the avocado: ${textIn}\nCreated on ${Date.now()}` 

// fs.writeFileSync('./final/txt/output.txt', textOut)

// console.log('File written!')

// // traditional use
// const hello = "hello world";
// console.log(hello)



// Non-blocking, asynchronous way

fs.readFile('./final/txt/startttt.txt', 'utf-8', (err, data1) => {
    if (err) return console.log(`ERROR! 💥: ${err}`);

    fs.readFile(`./final/txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./final/txt/append.txt', 'utf-8', (err, data3) => {
            console.log(data3);

            // write a file

            fs.writeFile('./final/txt/final.txt', `${data2}\n${data3}\n${Date.now()}`,  'utf-8', (err) => {
                console.log('Your file has been written 😁');
            })
        })
    })
})
console.log('Will read the file')
// console.log('Hello world');


/*
const os = require('os');

console.log('Architecture ' + os.arch());
os.cpus().forEach(element => {
    console.log(element);
});
console.log('OS ' + os.platform());
*/




// const fs = require('fs');
/*

const fileName = __dirname + '/test.txt';

fs.readFile(fileName, (err, data) => {
 if (err) {
 console.error(err);
 }
 console.log(data.toString());
});
*/
/*
const fileName = __dirname + '/test.txt';
const outFileName = __dirname + '/test-copy.txt';

const readStream = fs.createReadStream(fileName);
const writeStream = fs.createWriteStream(outFileName);

readStream.pipe(writeStream);

writeStream.on('close', ()=>{
console.log('writing is completed');
});
readStream.on('close', ()=>{
    console.log('Reading is completed');
    });
    */




    
/*
const http = require('http');

http.createServer((req, res) => {
 res.setHeader('Content-Type', 'text/html');
 res.write('<h1>Hello World</h1>');
 res.end();
}).listen(3000);
*/


/*
const http = require('http');
http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) {
        case 'GET':
            res.write('<html> <body> <form action="/message" method = "POST"><input type ="text"  name ="message"><button type ="submit">SEND</button></form> </body> </html>');
            res.end();
            break;
        case 'POST':
            req.on('data', (data) => {
                
                res.write('<h1>Hello ' + data.toString().split('=')[1]+ '</h1>');
                res.end();
            });
            break;
    }
}).listen(3000, (err) => {
    console.log('Server is listening to port 3000')
});
*/
const http = require('http');
const fs = require('fs');
const PORT = 3005;

const Server = http.createServer((req, res) => {

    let log = `${Math.floor(Math.random() * 100)} : New Request...\n `;
    console.log(log);

    fs.appendFile('Index.txt', "Hello", (err, data) => {

        if(!err){
            console.log("Append File");
        }

    })

    if(req.url == "/"){

        const log = `${req.url} : Default Request\n`

        fs.readFile('Index.html', 'utf-8', (err, data) => {

            fs.appendFile('Index1.txt', log, (err) => {
    
                if(!err){
                    console.log(`${log} : Default Request`);
                    res.statusCode = 200;
                    res.setHeader("Content-type", 'text/html');
                    res.end(data);
                }
    
            })
        })

    }

    else if(req.url == "/about"){

        const log = `${req.url} : About Request\n`

        fs.appendFile('Index1.txt', log, (err,data) => {

            if(!err){
                console.log(`${log} : About Request`);
                res.statusCode = 200;
                res.setHeader("Content-type", 'text/plain');
                res.end("Welcome to About");
            }

        })

    }
    else{

        const log = `${req.url} : Unknown Request\n`

        fs.appendFile('Index1.txt', log, (err, data) => {

            if(!err){
                console.log(`${log} : Unknown Request`);
                res.statusCode = 400;
                res.setHeader("Content-type", 'text/plain');
                res.end("Page Not Found");
            }

        })
    }


        
})

Server.listen(PORT, (err) => {

    if(!err){
        console.log(`Server running on http://localhost:${PORT}`);
    }

})








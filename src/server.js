const {DbClientGallery} = require("./dbClientGallery.js");
const http = require("http");
const fs = require('fs');
const path = require('path');
const connect = require("connect");
const express = require("express");
const errorhandler = require('errorhandler');
const app = express();
const mime = require('mime-types');
const dbClient = new DbClientGallery();

dbClient.start();
const server = new http.Server(app);

// server.listen(process.env.PORT ? process.env.PORT : 80);
server.listen(80, "127.0.0.1");

app.use(function (req, res, next) {
    if(req.url === "/"){
        res.setHeader("Content-Type", "text/html");
        let stream = fs.createReadStream("./build/index.html");
        stream.pipe(res);
        stream.on("end", ()=> res.end());
        stream.on('error', (e) => errH(res, next, e.toString()))
    } else next();
})

app.use(function (req, res, next) {
    if(req.method === "GET" && req.url === "/images"){
        res.setHeader('Content-Type', "application/json");
        fs.readdir("./images", (err, data) => {
            if(err){
                console.error(err);
            }
            let list = data.map(file => {
                return path.join("images", file);
            });
            res.end(JSON.stringify(list));
        });
    } else next();
})

app.use(function (req, res, next) {
    let path;
    req.url.indexOf("images") > -1 ? path = "./" + `${req.url}` : path = "./build" + `${req.url}`;
    if (req.method === "GET") {
        res.setHeader("Content-Type", mime.lookup(path));
        let stream = fs.createReadStream(path);
        stream.on("error", () => {
            errH(res, next, req.url);
        });
        stream.pipe(res);
        stream.on("end", () => res.end());
    } else next();

})

app.put("/signin", function (req, res) {
    req.on('data', async data => {
        let body = JSON.parse(data);
        try {
            await dbClient.checkUser(body.login, body.password);
            res.statusCode = 200;
            res.end();
        } catch (e) {
            console.error(e);
            res.statusCode = 500;
            res.end(e.message);
        }
    });
})

app.put("/signup", function (req, res) {
    req.on('data', async data => {
        console.log(data);
        let body = JSON.parse(data);
        try {
            await dbClient.addUser(body.login, body.password);
            res.statusCode = 200;
            res.end();
        } catch (e) {
            console.error(e);
            res.statusCode = 500;
            res.end(e.message);
        }
    });
})


app.use(function (req, res, next) {
    if (req.method === "DELETE") {
        fs.unlink("./" + req.url, (err) => {
            if (err) {
                console.error(err);
            } else {
                res.end();
                console.info("Файл удален");
            }
        })
    } else if(req.method === "PUT" && req.url.indexOf("images") > -1 ){
        let stream = fs.createWriteStream("./"+req.url);
        stream.on("error", () => {
            errH(res, next);
        });
        req.pipe(stream);
        req.on('end', () => res.end());
        console.info("Файл загружен");
    } else {
        errH(res, next);
    }
})



app.use(errorhandler());

function errH(res, next, filePath) {
    errorhandler.title = "404 NOT FOUND"
    res.statusCode = 404;
    next(new Error(`${filePath} not found`));
}



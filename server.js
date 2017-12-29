const express = require("express"),
    http = require("http"),
    path = require("path"),
    app = express(),
    twitterWorker = require("./twitter.js");
var $ = require('jQuery');


app.use(express.static('public'));
http.createServer(app).listen(3000, function () {
    console.log("Express server listening on port 3000");
});


app.get("/", (request, response) => {
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/search/tweets', (req, res) => {

    console.log("running app.get");

    const {
        q
    } = req.query;
    const myPromise = new Promise((resolve, reject) => {
        console.log("new promise");
        twitterWorker(q);

        try {
            setTimeout(() => {
                resolve(res.send(sendTweets));
                console.log("app tweets " + sendTweets);
            }, 1000);
        } catch (err) {
            reject(err);
        }
    });
    myPromise
        .then(result => {
            console.log(`First promise result is: ${result}`);
        });
});


module.exports = {
    app
};
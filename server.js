const express = require("express"),
    http = require("http"),
    path = require("path"),
    app = express(),
    twitterWorker = require("./twitter.js");



app.use(express.static('public'));
http.createServer(app).listen(3000, function () {
    console.log("Express server listening on port 3000");
});


app.get("/", (request, response) => {
    response.sendFile(__dirname + '/public/index.html');
});

app.get('/search/tweets', (req, res) => {

   

    const {
        q
    } = req.query;
    const myPromise = new Promise((resolve, reject) => {
        
        twitterWorker(q);

        try {
            setTimeout(() => {
                resolve(res.send(sendTweets));
                
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
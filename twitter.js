var worker = function (query) {
    var Twit = require('twit');

    var T = new Twit({

    });

    T.get('search/tweets', {
        q: query, //1st parameter: query string
        count: 100, //2nd parameter: number returned
    }, function (err, data, response) {
        var tweets = data.statuses;
        if (err) {
            console.log("This is not the status you are looking for");
        } else {
            for (var i = 0; i < tweets.length; i++) { //loop through all the details in the data.statuses array
                var buildTweets = [];
                for (var j = 0; j < tweets.length; j++) {
                    buildTweets.push(tweets[j]);
                }
            }
            sendTweets = buildTweets;
        }
    });
}

module.exports = worker;

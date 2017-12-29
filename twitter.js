var worker = function (query) {
    var Twit = require('twit');

    var T = new Twit({
        consumer_key: 'WaN2xehfkAoVEseXmcB5QQC9u',
        consumer_secret: 'cPKtFBxCHaT2zCKLFCPQZPUM3E9sc52aYhlfj7MTwPbTZ2XYee',
        access_token: '961464360-oXrO9PXi8uvRhm9E4NuRJj2C4eD34ijfMzQx0oxP',
        access_token_secret: 'kszSxYXnoNE0POgf3l3iZPVzIg0JHsXU3cIAVC1A2Xuul',
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
//let tweetText;

var worker = function (query){
    console.log('twit is running');

    var Twit = require('twit'); //require twitter package

    //later maybe move to a config.js file, module.export object, and require here.
    var T = new Twit({
        consumer_key: 'WaN2xehfkAoVEseXmcB5QQC9u',
        consumer_secret: 'cPKtFBxCHaT2zCKLFCPQZPUM3E9sc52aYhlfj7MTwPbTZ2XYee',
        access_token: '961464360-oXrO9PXi8uvRhm9E4NuRJj2C4eD34ijfMzQx0oxP',
        access_token_secret: 'kszSxYXnoNE0POgf3l3iZPVzIg0JHsXU3cIAVC1A2Xuul',
    });

   
    console.log("twit q is " + query);



    
    T.get('search/tweets', { //endpoint
        q: query, //1st parameter: query string
        count: 5//2nd parameter: number returned
    }, function (err, data, response) { //callback either error, the data, or response
        var tweets = data.statuses;

        if (err) {
            console.log("This is not the status you are looking for");
        } else {
            
                for (var i = 0; i < tweets.length; i++) { //loop through all the details in the data.statuses array
                    if (tweets[i].user.location == null) {
                        var place = "Location has not been found.";
                    } else {
                        var place = "The location is " + tweets[i].user.location;
                    }

                    console.log("RIGHT AFTER FOR LOOP " + tweets[i].text);
                    var buildTweets = [];
                    for (var j = 0; j < tweets.length; j++) {
                        buildTweets.push(tweets[j].user.screen_name, tweets[j].text, place);
                    }
                }
                    sendTweets = buildTweets;
//                    var tweetText = [
//                        tweets[i].text,
//                        tweets[i].id_str,
//                        place];
//                    
//                    for(var j= 0, l = tweetText.length; j< l; j++){
//                        twitterTweets = tweetText[j];
//                        console.log("yep " + tweetText[j]);
//                    }
                    
                    console.log("twitter tweets " + sendTweets); //log all with a property name of text
                    
                    
                //}
               
            

        }
    });
//    console.log("return value is " + tweetText);
//    return (tweetText);
}

module.exports = worker;
'use strict'

var Twit = require('twit'); //require twitter package

//later maybe move to a config.js file, module.export object, and require here.
var T = new Twit({
    consumer_key:         'WaN2xehfkAoVEseXmcB5QQC9u',
    consumer_secret:      'cPKtFBxCHaT2zCKLFCPQZPUM3E9sc52aYhlfj7MTwPbTZ2XYee',
    access_token:         '961464360-oXrO9PXi8uvRhm9E4NuRJj2C4eD34ijfMzQx0oxP',
    access_token_secret:  'kszSxYXnoNE0POgf3l3iZPVzIg0JHsXU3cIAVC1A2Xuul',
});

// Single state object

function getTweet(queryTerm, renderOutput) {
    T.get('search/tweets', { //endpoint
        q: queryTerm,  //1st parameter: query string
        count: 2 //2nd parameter: number returned
    },  function(err, data, response) { //callback either error, the data, or response
        var tweets = data.statuses; //the detail of the tweets are in an array called statuses, make this a variable
        return renderQuery(tweets);
    })
}
    
function renderQuery(data) {
        var results = data.statuses.map(function(item, index) {
            //return renderResult(item);
            console.log("the text is " + results)
        });
       // $('.js-search-results').html(results);
    }


// Event listeners
//Calls the state modification function, passing in the state and as the item the value of the input
//Calls the render function, passing in teh state and the class of the <ul> where the <li> should render
$('.search-form').submit(function(event) {
    event.preventDefault();
    var queryTarget = $(event.currentTarget).find('.js-query');
    var query = queryTarget.val();
    queryTarget.val("");
    getTweet(query, renderQuery);
});

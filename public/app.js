console.log("app is running");

function getRecentTweets(data) {
    setTimeout(function () {
        $.ajax({
            method: 'get'
        })
    }, 100);
}

var RESULT_HTML_TEMPLATE = (
    '<div class="card-width card">' +
    '<div class="left w_100 p_10 inline-flex">' +
    '<div>' +
    '<img class="js-user-img inline-block br_100" src="" target="_blank"/>' +
    '</div>' +
    '<div class="w_100 p_10 inline">' +
    '<p class="js-user-name inline-block p_10 v_top bold"></p>' +
    '<p class="inline-block p_10 v_top bold">' + "@" + '<span class="js-user-screen-name "></span></p>' +
    '<br/>' +
    '<p class="js-user-description inline-block p_10 p_5TB"></p>' +
    '<p class="js-tweet-text inline-block p_10 p_5TB"></p>' +
    '<p class="js-user-location inline-block p_10"></p>' +
    '</div>' +
    '</div>' +
    '</div>'
);

function renderResult(result) {
    var template = $(RESULT_HTML_TEMPLATE);
    template.find(".js-user-img").attr("src", result.user.profile_image_url);
    template.find(".js-user-name").text(result.user.name);
    template.find(".js-user-screen-name").text(result.user.screen_name);
    template.find(".js-user-description").text(result.user.description);
    template.find(".js-user-location").text(result.user.location);
    template.find(".js-tweet-text").text(result.text);

    return template;
}

function displayTweetUpdates(data) {
    if (data.length == 0) {
        console.log("There is no matching data");
        $('.js-search-results').html(
            '<p>' + "Sorry there are no matches" + '</p>',
            '<br />'
        );
    }

    console.log(data.length);

    var results = data.map(function (item, index) {
        return renderResult(item);
    });
    $('.js-counter').html(data.length);
    $('.js-search-results').html(results);
}

function getAndDisplayTweetUpdates() {
    console.log('get and display is running');
    getRecentTweets(displayTweetUpdates);
    console.log('get and display is running 2.0');
    $.get('search/tweets', {
        q: $('[name=tweet-search]').val()
    }, function (data) {
        console.log("search query is running");
        displayTweetUpdates(data);
    });
}

$(function () {
    console.log('onload function running');
    $('.search-form').submit(function () {
        event.preventDefault();
        let tweetQuery = $('[name=tweet-search]').val();
        let tweetQueryTrim = $.trim(tweetQuery);

        let tweetQueryTrimCase = tweetQueryTrim.replace(/[^-'\s]+/g, function (queryWord) {
            return queryWord.toLowerCase();
        });
        console.log("tweet query is " + tweetQueryTrimCase);
        $.get('/search/tweets', {
            q: tweetQueryTrimCase
        }, function (data) {
            console.log('getRecent working');
            console.log(data);
            displayTweetUpdates(data);

        });
        $('.search-form')[0].reset();
    });
});
console.log("app is running");
    
function getRecentTweets(data) {
    setTimeout(function () {
        $.ajax({
                method: 'get'
            })
            //        //        $.post
            //
    }, 100);
}

var RESULT_HTML_TEMPLATE = (
    '<div>' +
    '<img class="js-user-img" src="" target="_blank"/>' +
    '<p class="js-user-name"></p>' + 
    '<p class="js-user-screen-name"></p>' +
    '<p class="js-user-description"></p>' +
    '<p class="js-user-location"></p>' +
    '<p class="js-tweet-text"></p>' +
    '<br/>' + 
    '</div>'
);

function renderResult(result) {
    var template = $(RESULT_HTML_TEMPLATE);
    template.find(".js-user-img").attr("src", result.user.profile_image_url);
    template.find(".js-user-name").text(result.user.name);
    template.find(".js-user-screen-name").text(result.user.screen_name);
    template.find(".js-user-description").text(result.user.description);
    template.find(".js-user-location").text(result.user.location);
    template.find(".js-tweet-text").text(result.text );

    console.log("the result.text:" + result.text);
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
    
    var results = data.map(function(item, index) {
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
        $('.output-tweets').empty();
        $('.output-tweets').show();
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
        $('.output-tweets').empty();
        $('.search-form')[0].reset();
    });
    //
    //
    //
    //    $(".buttonNew").click(function () {
    //        event.preventDefault();
    //        $(".modalAdd").show();
    //
    //    });
    //
    //    $(".formAdd").submit(function () {
    //        event.preventDefault();
    //        console.log("running formadd in app");
    //        let name = $('[name=amusementParkName]').val();
    //        let nameTrim = $.trim(name);
    //
    //        let nameTrimCase = nameTrim.replace(/[^-'\s]+/g, function (word) {
    //            return word.replace(/^./, function (first) {
    //                return first.toUpperCase();
    //            });
    //        });
    //        $.post('/rides', {
    //            amusementParkName: nameTrimCase,
    //            rideName: $('[name=rideName]').val(),
    //            minutesWait: $('[name=minutesWait]').val(),
    //            typeOfRide: $('[name=typeOfRide]').val(),
    //            thrill: $('[name=thrill]').val(),
    //            rating: $('[name=rating]').val(),
    //            text: $('[name=text]').val()
    //        }, function (data) {
    //            console.log("postRides working");
    //            //            displayRideUpdates(data);
    //            $(".modalAdd").hide();
    //            getAndDisplayRideUpdates();
    //        });
    //        $(".list").empty();
    //        $(".list").show();
    //        $(".formAdd")[0].reset();
    //
    //    });
    //
    //    $(".buttonCloseModal").click(function () {
    //        event.preventDefault();
    //
    //        $(".modalAdd").hide();
    //        $(".list").show();
    //    });
    //
    //    $(".buttonDeleteYes").click(function () {
    //        event.preventDefault();
    //        $(".modalDelete").hide();
    //        $(".list").show();
    //    });
    //
    //    $(".buttonDeleteNo").click(function () {
    //        event.preventDefault();
    //        $(".modalDelete").hide();
    //        $(".list").show();
    //    });
    //
    //
    //
    //
    //
    //    $(".formEdit").submit(function (event) {
    //        event.preventDefault();
    //        console.log("start edit");
    //        console.log($(".buttonEditApply"))
    //        let name = $('[name=amusementParkNameEdit]').val();
    //        let nameTrim = $.trim(name);
    //
    //        let nameTrimCase = nameTrim.replace(/[^-'\s]+/g, function (word) {
    //            return word.replace(/^./, function (first) {
    //                return first.toUpperCase();
    //            });
    //        });
    //        $.ajax({
    //            url: '/rides/' + $(".buttonEditApply").attr('data-id'),
    //
    //            method: 'PUT',
    //            data: ({
    //                amusementParkName: nameTrimCase,
    //                rideName: $('[name=rideNameEdit]').val(),
    //                minutesWait: $('[name=minutesWaitEdit]').val(),
    //                typeOfRide: $('[name=typeOfRideEdit]').val(),
    //                thrill: $('[name=thrillEdit]').val(),
    //                rating: $('[name=ratingEdit]').val(),
    //                text: $('[name=textEdit]').val()
    //            }),
    //            success: function (data) {
    //
    //                $(".modalEdit").hide();
    //                $(".formEdit").empty();
    //            },
    //
    //
    //
    //        }).then(function () {
    //            console.log("edit working");
    //
    //            getAndDisplayRideUpdates();
    //
    //        });
    //
    //    });

});
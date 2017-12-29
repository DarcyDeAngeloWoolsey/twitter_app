console.log("app is running");
//
//var MOCK_Tweet_Status = {
//    "statuses": [
//        {
//            "created_at": "Wed Apr 12 04:53:25 +0000 2017",
//            "id": 852021818290352129,
//            "id_str": "852021818290352129",
//            "text": "Watch NASA's first 4K broadcast from space on April 26th - Engadget https:\/\/t.co\/EfwAYeJpjF",
//            "truncated": false,
//            "entities": {
//                "hashtags": [
//
//                    ],
//                "symbols": [
//
//                    ],
//                "user_mentions": [
//
//                    ],
//                "urls": [
//                    {
//                        "url": "https:\/\/t.co\/EfwAYeJpjF",
//                        "expanded_url": "http:\/\/ift.tt\/2orifBN",
//                        "display_url": "ift.tt\/2orifBN",
//                        "indices": [
//                                68,
//                                91
//                            ]
//                        }
//                    ]
//            },
//            "metadata": {
//                "iso_language_code": "en",
//                "result_type": "recent"
//            },
//            "source": "<a href=\"https:\/\/ifttt.com\" rel=\"nofollow\">IFTTT<\/a>",
//            "in_reply_to_status_id": null,
//            "in_reply_to_status_id_str": null,
//            "in_reply_to_user_id": null,
//            "in_reply_to_user_id_str": null,
//            "in_reply_to_screen_name": null,
//            "user": {
//                "id": 622857704,
//                "id_str": "622857704",
//                "name": "Crucial-Tech",
//                "screen_name": "crucial_tech",
//                "location": "Worldwide",
//                "description": "Technology News | Stories | Solutions | Workarounds | Gadgets",
//                "url": null,
//                "entities": {
//                    "description": {
//                        "urls": [
//
//                            ]
//                    }
//                },
//                "protected": false,
//                "followers_count": 1917,
//                "friends_count": 841,
//                "listed_count": 513,
//                "created_at": "Sat Jun 30 14:28:07 +0000 2012",
//                "favourites_count": 33,
//                "utc_offset": -14400,
//                "time_zone": "Eastern Time (US & Canada)",
//                "geo_enabled": true,
//                "verified": false,
//                "statuses_count": 559097,
//                "lang": "en",
//                "contributors_enabled": false,
//                "is_translator": false,
//                "is_translation_enabled": false,
//                "profile_background_color": "131516",
//                "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/530442443057942528\/jgQgrriz.jpeg",
//                "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/530442443057942528\/jgQgrriz.jpeg",
//                "profile_background_tile": true,
//                "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/810537113288482816\/AL7srBp3_normal.jpg",
//                "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/810537113288482816\/AL7srBp3_normal.jpg",
//                "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/622857704\/1415224702",
//                "profile_link_color": "3B94D9",
//                "profile_sidebar_border_color": "000000",
//                "profile_sidebar_fill_color": "000000",
//                "profile_text_color": "000000",
//                "profile_use_background_image": true,
//                "has_extended_profile": false,
//                "default_profile": false,
//                "default_profile_image": false,
//                "following": false,
//                "follow_request_sent": false,
//                "notifications": false,
//                "translator_type": "none"
//            },
//            "geo": null,
//            "coordinates": null,
//            "place": null,
//            "contributors": null,
//            "is_quote_status": false,
//            "retweet_count": 0,
//            "favorite_count": 0,
//            "favorited": false,
//            "retweeted": false,
//            "possibly_sensitive": false,
//            "lang": "en"
//            },
//     
function getRecentTweets(data) {
    setTimeout(function () {
        $.ajax({
                method: 'get'
            })
            //        //        $.post
            //
    }, 100);
}



function displayTweetUpdates(data) {
    console.log("displayTweetUpdates running");
    console.log("the data is " + data);
    if (data.length == 0) {
        console.log("There is no matching data");
        $('.output-tweets').append(
            '<p>' + "Sorry there are no matches" + '</p>',
            '<br />'
        );
    }
    /*for (index in data ) */

    // forEach
    //     data.forEach(ride => {
    //        $('main').append(
    //            '<p>' + ride.amusementParkName + '</p>',
    //            '<p>' + ride.rideName + '</p>',
    //            '<p>' + ride.minutesWait + '</p>',
    //            '<p>' + ride.typeOfRide + '</p>',
    //            '<p>' + ride.thrill + '</p>',
    //            '<p>' + ride.rating + '</p>',
    //            '<p>' + ride.text + '</p>',
    //            '<br />',
    //            '<button class="btnEdit">' + "Edit" + '</button>',
    //            '<button class="btnDelete">' + "Delete" + '</button>',
    //            '<br />',
    //            '</main>'
    //        );
    //    });

//REMOVE IF YOU CAN BUILD OBJECT ARRAY
    for (i = 0; i < data.length; i++) {//was data.statuses.length

    console.log("for loop running");
    //console.log(data.statuses);
    //let id = data.statuses[i].id_str;
    //console.log(id);
    //        $('.btnDelete').attr("data-id", id);
    //console.log("data-id", id);
    $('.output-tweets').append(
        '<p>' + data[i] + '</p>', //was data.statuses[i].text
        //'<p>' + data[i].user.location + '</p>' 
        +
        '<br style="display:block; margin-top:20px; line-height:30px;"/>'
    );

    }
}

/*Short version:
function displayRideUpdates(data) {
    data.rideStatus.forEach(function (ride) {
        Object.keys(ride).forEach(function (key) {
            console.log(ride[key])
            if (key !== 'id') {
                $('body').append('<p>' + ride[key] + '</p>' + ' ');
            }
        })

    });
}*/

//create a function whose purpose is to get and display the updates by passing the above functions as the argument
function getAndDisplayTweetUpdates() {
    console.log('get and display is running');
    getRecentTweets(displayTweetUpdates);
    //add .get ability
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


//create a JQuery function whose purpose is to run the above function

$(function () {
    console.log('onload function running');
    //    $(".modalAdd").hide();
    //    $(".modalDelete").hide();
    //    $(".modalEdit").hide();
    //    $(".list").hide();

    //getAndDisplayTweetUpdates();

    //search tweets
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
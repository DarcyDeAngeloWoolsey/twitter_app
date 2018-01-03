# twitter_app

The following is a demonstration of the Twitter API using HTML, CSS, JavaScript, jQuery, Node.js, Express and the Twit API Client.

I chose the Twitter API because I have previously utilized a Twitter Firehose, but more for research purposes for the back-end developers. This afforded me the opportunity to look under the hood a bit more.

Dependencies:

Twit is an API client for Node.js, has several updates, activity, and was recommended by Programming from A to Z – initially used by most programmers for building Twitter bots. 

Twitter recommends using some version of a library and does not recommend that Twitter is accessed directly through client-side JavaScript due to OAuth. Therefore, Twit is utilized in this case as a worker module for handling OAuth and is exported into an Express.js server.  Express is also being utilized for serving up project files.

    Twit: https://github.com/ttezel/twit
    Name of Author: Tolga Tezel
    Version: ^2.2.9
    License: (The MIT License)
    Copyright (c) by Tolga Tezel tolgatezel11@gmail.com
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Express is a web framework for Node.js:
•	Express.js: http://expressjs.com/

Accessing and running should be simple:

Clone from GitHub.

From the project file in your command line:
•	npm install
•	npm init
•	npm install --save express
•	npm install twit

Run the application:
•	node server.js from the command line
•	localhost:3000 in your browser

Use the application:
•	Simple use of searching keywords view the input element
•	Hide and show button will toggle tweets of interest

Twitter Status API Sample: 
Source: https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets

var MOCK_Tweet_Status = {
    "statuses": [
        {
            "created_at": "Wed Apr 12 04:53:25 +0000 2017",
            "id": 852021818290352129,
            "id_str": "852021818290352129",
            "text": "Watch NASA's first 4K broadcast from space on April 26th - Engadget https:\/\/t.co\/EfwAYeJpjF",
            "truncated": false,
            "entities": {
                "hashtags": [

                    ],
                "symbols": [

                    ],
                "user_mentions": [

                    ],
                "urls": [
                    {
                        "url": "https:\/\/t.co\/EfwAYeJpjF",
                        "expanded_url": "http:\/\/ift.tt\/2orifBN",
                        "display_url": "ift.tt\/2orifBN",
                        "indices": [
                                68,
                                91
                            ]
                        }
                    ]
            },
            "metadata": {
                "iso_language_code": "en",
                "result_type": "recent"
            },
            "source": "<a href=\"https:\/\/ifttt.com\" rel=\"nofollow\">IFTTT<\/a>",
            "in_reply_to_status_id": null,
            "in_reply_to_status_id_str": null,
            "in_reply_to_user_id": null,
            "in_reply_to_user_id_str": null,
            "in_reply_to_screen_name": null,
            "user": {
                "id": 622857704,
                "id_str": "622857704",
                "name": "Crucial-Tech",
                "screen_name": "crucial_tech",
                "location": "Worldwide",
                "description": "Technology News | Stories | Solutions | Workarounds | Gadgets",
                "url": null,
                "entities": {
                    "description": {
                        "urls": [

                            ]
                    }
                },
                "protected": false,
                "followers_count": 1917,
                "friends_count": 841,
                "listed_count": 513,
                "created_at": "Sat Jun 30 14:28:07 +0000 2012",
                "favourites_count": 33,
                "utc_offset": -14400,
                "time_zone": "Eastern Time (US & Canada)",
                "geo_enabled": true,
                "verified": false,
                "statuses_count": 559097,
                "lang": "en",
                "contributors_enabled": false,
                "is_translator": false,
                "is_translation_enabled": false,
                "profile_background_color": "131516",
                "profile_background_image_url": "http:\/\/pbs.twimg.com\/profile_background_images\/530442443057942528\/jgQgrriz.jpeg",
                "profile_background_image_url_https": "https:\/\/pbs.twimg.com\/profile_background_images\/530442443057942528\/jgQgrriz.jpeg",
                "profile_background_tile": true,
                "profile_image_url": "http:\/\/pbs.twimg.com\/profile_images\/810537113288482816\/AL7srBp3_normal.jpg",
                "profile_image_url_https": "https:\/\/pbs.twimg.com\/profile_images\/810537113288482816\/AL7srBp3_normal.jpg",
                "profile_banner_url": "https:\/\/pbs.twimg.com\/profile_banners\/622857704\/1415224702",
                "profile_link_color": "3B94D9",
                "profile_sidebar_border_color": "000000",
                "profile_sidebar_fill_color": "000000",
                "profile_text_color": "000000",
                "profile_use_background_image": true,
                "has_extended_profile": false,
                "default_profile": false,
                "default_profile_image": false,
                "following": false,
                "follow_request_sent": false,
                "notifications": false,
                "translator_type": "none"
            },
            "geo": null,
            "coordinates": null,
            "place": null,
            "contributors": null,
            "is_quote_status": false,
            "retweet_count": 0,
            "favorite_count": 0,
            "favorited": false,
            "retweeted": false,
            "possibly_sensitive": false,
            "lang": "en"
            },


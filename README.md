# twitter_app
App using twitters API

dependencies:
Twit is an API client for Node.js, has several updates, activity, and was recommended.
twit: https://github.com/ttezel/twit

Express is a web framework for Node.js
express: http://expressjs.com/

get references: https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets

post references: https://developer.twitter.com/en/docs/tweets/post-and-engage/api-reference/post-statuses-update


Twitter Status API Sample
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


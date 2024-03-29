'use strict';

const getstreamFeedManager = require( './getstreamFeedManager');
const timelineFeed = getstreamFeedManager.getTimelineFeed();


/**
 *	Transforms a tweet into a getstream activity
 */
exports.transformTweetToActivity = function(tweet) {
    let tweetActivity = {
            actor: tweet.user__screen_name,
            verb: 'post',
            object: {
				type: "twitter",
                body: tweet.text,
                fullname: tweet.user__name,
                username: tweet.user__screen_name,
                url: tweet.url,
                profilePicture: tweet.user__profile_image_url,
				location: tweet.user__location
            }
     }
	 return tweetActivity;
}

/**
 * Send the tweet activity to getstream timeline feed
 * @return returns a Promise object
 */
exports.sendTweetActivityToGetstream = function(tweetActivity) {
	return timelineFeed.addActivity(tweetActivity);
}

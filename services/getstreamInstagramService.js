'use strict';

const getstreamFeedManager = require('./getstreamFeedManager');
const timelineFeed = getstreamFeedManager.getTimelineFeed();


/**
 *	Transforms an Instagram post into a getstream activity
 */
exports.transformInstagramPostToActivity = function(post) {
    let postActivity = {
            actor: post.user.username,
            verb: 'post',
            object: {
				type: 'instagram',
				image: post.images.standard_resolution.url,
                body: post.comments.data[0].text,
                fullname: post.user.full_name,
                username: post.user.username,
                url: post.link,
                profilePicture: post.user.profile_picture
            }
     }
	 return postActivity;
}

/**
 * Send the post activity to getstream timeline feed
 * @return returns a Promise object
 */
exports.sendPostActivityToGetstream = function(postActivity) {
	return timelineFeed.addActivity(postActivity);
}
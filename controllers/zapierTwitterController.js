'use strict';

const getstreamTwitterService = require('../services/getstreamTwitterService');

/**
 * POST /webhooks/zapier/twitter
 * Transforms the tweet then send it to getstream
 */
exports.webhook = function(req, res, next) {
    let tweetActivity = getstreamTwitterService.transformTweetToActivity(req.body);
    getstreamTwitterService.sendTweetActivityToGetstream(tweetActivity)
      .then(() => res.status(200).send())
      .catch((err) => {
        res.status(500).send();
        console.error("ERROR WHILE SENDING ACTIVITY TO GETSTREAM");
        console.error(err.error);
      });
    
};


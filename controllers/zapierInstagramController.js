'use strict';

const getstreamInstagramService = require('../services/getstreamInstagramService');

/**
 * POST /webhooks/zapier/instagram
 */
exports.webhook = function(req, res, next) {
  let postActivity = getstreamInstagramService.transformInstagramPostToActivity(req.body);
  getstreamInstagramService.sendPostActivityToGetstream(postActivity)
    .then(() => res.status(200).send())
    .catch((err) => {
      res.status(500).send();
      console.error("ERROR WHILE SENDING ACTIVITY TO GETSTREAM");
      console.error(err.error);
    });
};
'use strict';

const ZAPIER_WEBHOOK_API_KEY = process.env.ZAPIER_WEBHOOK_API_KEY;


/**
 * Zapier Auth middleware.
 */
exports.isZapierAuthenticated = function(req, res, next) {
  if (req.headers['api-key'] === ZAPIER_WEBHOOK_API_KEY) {
    return next();
  }
  res.sendStatus(403);
};


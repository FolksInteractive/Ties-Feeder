import * as getstreamInstagramService from '../services/getstreamInstagramService';

/**
 * POST /webhooks/zapier/instagram
 */
export function webhook(req, res, next) {
  let postActivity = getstreamInstagramService.transformInstagramPostToActivity(req.body);
  getstreamInstagramService.sendPostActivityToGetstream(postActivity)
    .then(() => res.status(200).send())
    .catch((err) => {
      res.status(500).send();
      console.error("ERROR WHILE SENDING ACTIVITY TO GETSTREAM");
      console.error(err.error);
    });
};
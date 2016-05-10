import util from 'util';

/**
 * Validate the tweet object coming from Zapier
 */
export function validateTweet(req, res, next) {
    req.checkBody('user__name', 'twitter username missing').notEmpty();
    req.checkBody('text', 'tweet text missing').notEmpty();
    req.checkBody('url', 'tweet url missing').notEmpty();
    req.checkBody('user__screen_name', 'twitter user screen name missing').notEmpty();
    
    var errors = req.validationErrors();
    if (errors) {
        res.status(400).send('Invalid request, missing parameters');
        console.error("TWEET VALIDATION ERROR");
        console.error(errors);
        return errors;
    }
    next();
}

export function validateInstagramPost(req, res, next) {
    req.checkBody('images.standard_resolution.url', 'image url missing').notEmpty();
    req.checkBody('user', 'user infos missing').notEmpty();
    req.checkBody('link', 'post url missing').notEmpty();
    
    var errors = req.validationErrors();
    if (errors) {
        res.status(400).send('Invalid request, missing parameters');
        console.error("INSTAGRAM VALIDATION ERROR");
        console.error(util.inspect(errors));
        return errors;
    }
    next();         
}

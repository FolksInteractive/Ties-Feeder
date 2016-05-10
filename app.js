/**
 * Module dependencies.
 */
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import expressValidator from 'express-validator';


/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 *
 * Default path: .env
 */
dotenv.load({ path: '.env' });

/**
 * Controllers (route handlers).
 */
import * as zapierTwitterController from './controllers/zapierTwitterController';
import * as zapierInstagramController from './controllers/zapierInstagramController';

/**
 * Validators
 */
import * as validators from './controllers/validators';

/**
 * API keys and Passport configuration.
 */
import * as auth from './config/auth';

/**
 * Create Express server.
 */
const app = express();


/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());


app.get('/', function (req, res) {res.send("Ties webhooks handler");});

/**
 * Zapier webhooks.
 */
app.use('/webhooks/zapier/', auth.isZapierAuthenticated);
app.post('/webhooks/zapier/twitter', validators.validateTweet, zapierTwitterController.webhook);
app.post('/webhooks/zapier/instagram', validators.validateInstagramPost, zapierInstagramController.webhook);


/**
 * Start Express server
 */
app.listen(app.get('port'), function() {
  console.log('Express server listening on port %d in %s mode', app.get('port'), app.get('env'));
});

export default app;

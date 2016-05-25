'use strict';

const stream = require('getstream');
const dotenv = require('dotenv');
dotenv.load({ path: '.env' });

const client = stream.connect(process.env.GETSTREAM_KEY, process.env.GETSTREAM_SECRET, process.env.GETSTREAM_APPID, { location: 'us-east' });

/**
 *  Get the timeline feed as 'ties' user.
 **/
exports.getTimelineFeed =  function () {
   return client.feed('timeline', 'ties');
}
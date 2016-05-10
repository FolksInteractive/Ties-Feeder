import stream from 'getstream';
import dotenv from 'dotenv';
dotenv.load({ path: '.env' });

const client = stream.connect(process.env.GETSTREAM_KEY, process.env.GETSTREAM_SECRET, process.env.GETSTREAM_APPID, { location: 'us-east' });

/**
 *  Get the timeline feed as 'ties' user.
 **/
export function getTimelineFeed() {
   return client.feed('timeline', 'ties');
}
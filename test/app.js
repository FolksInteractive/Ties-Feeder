var request = require('supertest');
var app = require('../app.js');
var dotenv = require('dotenv');
dotenv.load({ path: '.env' });

describe('GET /', function() {
  it('should return 200 OK', function(done) {
    request(app)
      .get('/')
      .expect(200, done);
  });
});

describe('POST /webhooks/zapier/twitter', function() {
  it('should return 403 Unauthorized', function(done) {
    request(app)
      .post('/webhooks/zapier/twitter')
      .expect(403, done);
  });
});

describe('POST authenticated with no data to /webhooks/zapier/twitter', function() {
  it('should return 400 Bad request', function(done) {
    request(app)
      .post('/webhooks/zapier/twitter')
      .set('api-key', process.env.ZAPIER_WEBHOOK_API_KEY)
      .expect(400, done);
  });
});

describe('POST /webhooks/zapier/instagram', function() {
  it('should return 403 Unauthorized', function(done) {
    request(app)
      .get('/webhooks/zapier/instagram')
      .expect(403, done);
  });
});

describe('POST authenticated with no data to /webhooks/zapier/instagram', function() {
  it('should return 400 Bad request', function(done) {
    request(app)
      .post('/webhooks/zapier/instagram')
      .set('api-key', process.env.ZAPIER_WEBHOOK_API_KEY)
      .expect(400, done);
  });
});

describe('GET /random-url', function() {
  it('should return 404', function(done) {
    request(app)
      .get('/random')
      .expect(404, done);
  });
});
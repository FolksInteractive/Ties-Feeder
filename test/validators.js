var chai = require('chai');
var should = chai.should();
var validators = require('../controllers/validators');

describe('Tweet bad object validation', function() {
  it('should return errors', function(done) {
    var req = {};
    req.body = {
      user__name: "test",
      text: "test",
      url: "test",
      user__screen_name: undefined
    };
    var errors = validators.validateTweet(req, {}, function () {});
    errors.should.not.be.undefined
    done();
  });
  
describe('Tweet good object validation', function() {
  it('should not return errors', function(done) {
    var req = {};
    req.body = {
      user__name: "test",
      text: "test",
      url: "test",
      user__screen_name: "test"
    };
    var errors = validators.validateTweet(req, {}, function () {});
    errors.should.be.undefined
    done();
  });


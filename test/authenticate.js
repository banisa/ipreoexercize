var assert = require('chai').assert;
var authenticate = require('../test/dataServiceTest/authenticateTest');

describe('Authenticate User',function(){
    it('Authenticate should return true', function(){
        assert.equal(authenticate('admin','admin'), true);
    })
});
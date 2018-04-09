var assert = require('chai').assert;
var updateAccess = require('../test/dataServiceTest/updateUserIndexTest');

describe('Update User Index Access',function(){
    it('Update should return 4', function(){
        assert.equal(updateAccess(0,3), 4);
    })
});
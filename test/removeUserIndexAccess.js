var assert = require('chai').assert;
var removeAccess = require('../test/dataServiceTest/removeUserIndexAccessTest');

describe('Remove User Index Access',function(){
    it('Update should return 0', function(){
        assert.equal(removeAccess(0,3), 0);
    })
});
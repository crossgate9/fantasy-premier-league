var utility = require('../lib/utility'),
    assert = require('assert'),
    should = require('should');

suite('Utility Team Related Function', function() {
    test('Get Team Id', function() {
        assert.equal(0, utility.getTeamId('Arsenal'));
        assert.equal(8, utility.getTeamId('Liverpool'));
        (function() { utility.getTeamId('QPR'); }).should.throw('Team not found');
    });
});
var Player = require('../model/player'),
    assert = require('assert'),
    should = require('should');

suite('Player Related Function', function() {
    test('Init', function() {
        var p = new Player();
        (function () { p.init(null); }).should.throw('Object not match');
        (function () { p.init('abc'); }).should.throw('Object not match');
        p.init({ 'name': 'Allen', 'po': 'Forward' });
        assert.deepEqual({'name': 'Allen', 'po': 'Forward'}, p.getData());
    });

    test('Get Team', function() {
        var p = new Player();
        p.init({ 'name': 'Allen', 'team': 'Liverpool' });
        assert.deepEqual({'id': 8, 'name': 'Liverpool'}, p.getTeam());
    });
});
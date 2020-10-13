const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
    beforeEach(function(){
        room = new Room(100, false);
    })

    it('should have area', function(){
        const actual = room.area;
        assert.strictEqual(actual, 100);
    })

    it('should not be painted', function(){
        const actual = room.painted;
        assert.strictEqual(actual, false);
    })
})
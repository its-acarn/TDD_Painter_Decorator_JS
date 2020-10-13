const assert = require('assert');
const Decorator = require('../decorator.js');

describe('Decorator', function(){
    beforeEach(function(){
        decorator = new Decorator(0);
    })

    it('should have no stock', function(){
        const actual = decorator.stock;
        assert.strictEqual(actual, 0);
    })
})
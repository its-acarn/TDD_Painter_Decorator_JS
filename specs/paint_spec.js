const assert = require('assert');
const Paint = require('../paint.js');

describe('Paint', function() {
    beforeEach(function (){
        paint = new Paint(10, false);
    });

    it('should have a litres value', function(){
        const actual = paint.litres;
        assert.strictEqual(actual, 10);
    })

    it('is paint can empty', function(){
        actual = paint.empty;
        assert.strictEqual(actual, false);
    })
});
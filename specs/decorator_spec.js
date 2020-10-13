const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');

describe('Decorator', function(){
    beforeEach(function(){
        decorator = new Decorator();
        paint_1 = new Paint (10, false);
        paint_2 = new Paint (2, false);
    })

    it('should have no stock', function(){
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    })
    
    it('should add stock', function(){
        decorator.addStock(paint_1)
        decorator.addStock(paint_2)
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [paint_1, paint_2])
    })
})

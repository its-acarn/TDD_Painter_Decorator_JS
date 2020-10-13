const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function(){
    let decorator
    let paint_1
    let paint_2
    let room 
    // creating var outside of testing for use throughout

    beforeEach(function(){
        decorator = new Decorator();
        paint_1 = new Paint (10, false);
        paint_2 = new Paint (2, false);
        decorator.addStock(paint_1)
        decorator.addStock(paint_2)
        room = new Room(10, false)
    })

    it('should have no stock', function(){
        const decorator = new Decorator();
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, []);
    })
    
    it('should add stock', function(){
        const actual = decorator.stock;
        assert.deepStrictEqual(actual, [paint_1, paint_2])
    })

    it ('should calculate total paint litres', function() {
        const actual = decorator.calculatePaintLitres();
        assert.strictEqual(actual, 12);
    });

    it ('should have enough paint for room', function(){
        const actual = decorator.enoughPaint(room);
        assert.strictEqual(actual, true)
    })

    it ('should paint room', function(){
        decorator.paintRoom(room);
        const actual = room.painted;
        assert.strictEqual(actual, true)
    })

})

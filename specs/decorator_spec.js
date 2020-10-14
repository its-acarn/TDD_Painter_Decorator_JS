const assert = require('assert');
const Decorator = require('../decorator.js');
const Paint = require('../paint.js');
const Room = require('../room.js');

describe('Decorator', function () {
	let decorator;
	let paint_1;
	let paint_2;
	let room;
	// creating var outside of testing for use throughout

	beforeEach(function () {
		decorator = new Decorator();
		paint_1 = new Paint(3, false);
		paint_2 = new Paint(2, false);
		paint_3 = new Paint(1, false);
		paint_4 = new Paint(4, false);
		paint_5 = new Paint(2, false);
		paint_6 = new Paint(3, false);
		decorator.addStock(paint_1);
		decorator.addStock(paint_2);
		decorator.addStock(paint_3);
		decorator.addStock(paint_4);
		decorator.addStock(paint_5);
		decorator.addStock(paint_6);
		room = new Room(13, false);
	});

	it('should have no stock', function () {
		const decorator = new Decorator();
		const actual = decorator.stock;
		assert.deepStrictEqual(actual, []);
	});

	it('should add stock', function () {
		const actual = decorator.stock;
		assert.deepStrictEqual(actual, [
			paint_1,
			paint_2,
			paint_3,
			paint_4,
			paint_5,
			paint_6,
		]);
	});

	it('should calculate total paint litres', function () {
		const actual = decorator.calculatePaintLitres();
		assert.strictEqual(actual, 15);
	});

	it('should have enough paint for room', function () {
		const actual = decorator.enoughPaint(room);
		assert.strictEqual(actual, true);
	});

	it('should paint room', function () {
		decorator.paintRoom(room);
		const actual = room.painted;
		assert.strictEqual(actual, true);
	});

	it('should decrease paint when painting a room', function () {
		decorator.reducePaint(room, decorator.stock);
		const actual = decorator.calculatePaintLitres();
		assert.strictEqual(actual, 2);
		console.log(paint_1);
		console.log(paint_2);
		console.log(paint_3);
		console.log(paint_4);
		console.log(paint_5);
		console.log(paint_6);
	});
});

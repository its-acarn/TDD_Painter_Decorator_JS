const Decorator = function () {
	this.stock = [];
};

Decorator.prototype.addStock = function (paint) {
	this.stock.push(paint);
};

Decorator.prototype.calculatePaintLitres = function () {
	let stockLitres = 0;
	for (let paint of this.stock) {
		stockLitres = stockLitres + paint.litres;
	}
	return stockLitres;
	// for (let i=0; i < this.stock.length; i++) {
	//     stockLitres = stockLitres + this.stock[i].litres;
	// };
	// return stockLitres;
};

Decorator.prototype.enoughPaint = function (room) {
	const totalLitres = this.calculatePaintLitres();
	const roomArea = room.area;
	if (totalLitres >= roomArea) {
		return true;
	}
	return false;
};

Decorator.prototype.paintRoom = function (room) {
	if (this.enoughPaint(room) === true) {
		room.painted = true;
	}
};

Decorator.prototype.reducePaint = function (room) {
	let paintUsed = room.area;

	while (paintUsed > 0) {
		for (let paint of this.stock) {
			let paintValue;

			if (paint.litres > paintUsed) {
				paintValue = paintUsed;
			} else {
				paintValue = paint.litres;
			}

			paintUsed = paintUsed - paintValue;
			paint.litres = paint.litres - paintValue;

			if (paint.litres === 0) {
				paint.empty = true;
			}
		}
	}
};

module.exports = Decorator;

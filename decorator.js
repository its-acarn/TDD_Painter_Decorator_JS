const Decorator = function(){
    this.stock = [];
}

Decorator.prototype.addStock = function(paint){
    this.stock.push(paint)
}

Decorator.prototype.calculatePaintLitres = function() {
    let stockLitres = 0;
    for (let paint of this.stock) {
        stockLitres = stockLitres + paint.litres;
    };
    return stockLitres;
    // for (let i=0; i < this.stock.length; i++) {
    //     stockLitres = stockLitres + this.stock[i].litres;
    // };
    // return stockLitres;
};

Decorator.prototype.enoughPaint = function(room){
    const totalLitres = this.calculatePaintLitres();
    const roomArea = room.area 
    if (totalLitres >= roomArea){
        return true
    }
    return false
}

Decorator.prototype.paintRoom = function(room){
    if (this.enoughPaint(room) === true){
        room.painted = true
    }
}

module.exports = Decorator;



const Decorator = function(){
    this.stock = [];
}

Decorator.prototype.addStock = function(paint){
    this.stock.push(paint)
}


// Decorator.prototype.addStock = function() {
//     let stockLitres = 0;
//     for (let i=0; i < this.stock.length; i++) {
//         stockLitres = stockLitres + this.stock[i].litres;
//     };
//     return stockLitres;
// };



module.exports = Decorator;



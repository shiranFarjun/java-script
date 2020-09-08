function Square(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}
Square.prototype.isSquare = function(){
   return this.a ===this.b&&this.a ===this.c&&this.a ===this.d?true:false;

}


//Use it on page 
const square1=new Square(3, 3, 3, 3);
console.log(square1.isSquare());
const square2=new Square(3, 4, 3, 3);
console.log(square2.isSquare());
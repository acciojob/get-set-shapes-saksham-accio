//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width;
		this.height=height;
	}
	getArea(){
		return this.width * this.height;
	}
	get width(){
		return this.width;
	}
	get height(){
		return this.height;
	}
}

class Square extends Rectangle {
	constructor(width,height){
		super(width,height);
	}
	getPerimeter(){
		return this.width*4;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;

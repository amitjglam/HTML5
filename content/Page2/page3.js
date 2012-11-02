(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.page3 = function() {
	this.initialize();

	// tital
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,520);


// symbols:
(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,520);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
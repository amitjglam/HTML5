(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.page9 = function() {
	this.initialize();

	// feedback
	this.mcFeedBack = new lib.feadback();
	this.mcFeedBack.setTransform(480.7,248.9,1,1,0,0,0,194.1,126.8);

	// BUTTONS
	this.mcSubmitBtn = new lib.mcsubmit();
	this.mcSubmitBtn.setTransform(693.2,417.1,1,1,0,0,0,35,12.5);

	this.mcSolveBtn = new lib.mcSolve();
	this.mcSolveBtn.setTransform(860.8,417.1,1,1,0,0,0,35,12.5);

	this.mcTryAgainBtn = new lib.mcTryAgain();
	this.mcTryAgainBtn.setTransform(777,417.1,1,1,0,0,0,35,12.5);

	// TIC BUTTONS
	this.mcOption3 = new lib.checkBox();
	this.mcOption3.setTransform(340.6,389.9,1,1,0,0,0,12.9,12.9);

	this.mcOption2 = new lib.checkBox();
	this.mcOption2.setTransform(340.6,357.3,1,1,0,0,0,12.9,12.9);

	this.mcOption1 = new lib.checkBox();
	this.mcOption1.setTransform(340.6,326.2,1,1,0,0,0,12.9,12.9);

	this.mcOption0 = new lib.checkBox();
	this.mcOption0.setTransform(340.6,295.8,1,1,0,0,0,12.9,12.9);

	// tital
	this.instance = new lib.Bitmap8();

	this.addChild(this.instance,this.mcOption0,this.mcOption1,this.mcOption2,this.mcOption3,this.mcTryAgainBtn,this.mcSolveBtn,this.mcSubmitBtn,this.mcFeedBack);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,572);


// symbols:
(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,383,428);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,559,35);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,858,339);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,868,349);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,333,151);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,930,456);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,906,562);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,572);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


(lib.mcTryAgain = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Bitmap10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


(lib.mcsubmit = function() {
	this.initialize();

	// Layer 2
	this.instance_1 = new lib.Bitmap9();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


(lib.mcSolve = function() {
	this.initialize();

	// Layer 2
	this.instance_2 = new lib.Bitmap11();

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


(lib.feadback = function() {
	this.initialize();

	// Layer 2
	this.instance_3 = new lib.Bitmap5();
	this.instance_3.setTransform(29.7,53.3);

	// Layer 3
	this.instance_4 = new lib.Bitmap6();
	this.instance_4.setTransform(-270.6,-100.9);

	this.addChild(this.instance_4,this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270.6,-100.9,930,456);


(lib.checkBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#527F4A").s().p("AgYAbIgngWIApAyIBWhtIhYBR").cp();
	this.shape.setTransform(8.1,8,1,1,0,0,0,0.4,0.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("Ag/AFIApAyIBWhtIhYBRIgngW").cp();
	this.shape_1.setTransform(8.1,8.5,1,1,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3F3F3").s().p("AAygxIAABjIhjAAIAAhjIBjAA").cp();
	this.shape_2.setTransform(7.7,7.8,1.331,1.331);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#527F4A").s().p("ABAg+IAAB+Ih/AAIAAh+IB/AA").cp();
	this.shape_3.setTransform(7.7,7.9,1.331,1.331);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F3F3F3").s().p("ABnhmIAADNIjNAAIAAjNIDNAA").cp();
	this.shape_4.setTransform(7.8,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,20.7,20.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
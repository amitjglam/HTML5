(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.page8 = function() {
	this.initialize();

	// feedback
	this.mcFeedBack = new lib.feadback();
	this.mcFeedBack.setTransform(480.7,248.9,1,1,0,0,0,194.1,126.8);
	this.mcFeedBack.visible=false;

	// buttons
	this.mcSolve = new lib.mcSolve();
	this.mcSolve.setTransform(868.1,408.1,1,1,0,0,0,35,12.5);

	this.mcTryAgain = new lib.mcTryAgain();
	this.mcTryAgain.setTransform(868.1,370.5,1,1,0,0,0,35,12.5);

	this.mcSubmit = new lib.mcsubmit();
	this.mcSubmit.setTransform(868.1,330.5,1,1,0,0,0,35,12.5);

	// drags
	this.mcDrag5 = new lib.d6();
	this.mcDrag5.setTransform(209.2,420,1,1,0,0,0,16.6,16.7);

	this.mcDrag4 = new lib.d5();
	this.mcDrag4.setTransform(209.2,362.1,1,1,0,0,0,16.6,16.7);

	this.mcDrag3 = new lib.d4();
	this.mcDrag3.setTransform(209.2,304.2,1,1,0,0,0,16.6,16.7);

	this.mcDrag2 = new lib.d3();
	this.mcDrag2.setTransform(209.2,246.3,1,1,0,0,0,16.6,16.7);

	this.mcDrag1 = new lib.d2();
	this.mcDrag1.setTransform(209.2,188.4,1,1,0,0,0,16.6,16.7);

	this.mcDrag0 = new lib.d1();
	this.mcDrag0.setTransform(209.2,130.5,1,1,0,0,0,16.6,16.7);

	// Drop
	this.mcDrop4 = new lib.drop();
	this.mcDrop4.setTransform(338.5,363,1,1,0,0,0,16.6,16.7);

	this.mcDrop2 = new lib.drop();
	this.mcDrop2.setTransform(338.5,247.2,1,1,0,0,0,16.6,16.7);

	this.mcDrop1 = new lib.drop();
	this.mcDrop1.setTransform(338.5,189.3,1,1,0,0,0,16.6,16.7);

	this.mcDrop0 = new lib.drop();
	this.mcDrop0.setTransform(338.5,131.4,1,1,0,0,0,16.6,16.7);

	this.mcDrop5 = new lib.drop();
	this.mcDrop5.setTransform(338.5,420.9,1,1,0,0,0,16.6,16.7);

	this.mcDrop3 = new lib.drop();
	this.mcDrop3.setTransform(338.5,305.1,1,1,0,0,0,16.6,16.7);

	// BG
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance,this.mcDrop3,this.mcDrop5,this.mcDrop0,this.mcDrop1,this.mcDrop2,this.mcDrop4,this.mcDrag0,this.mcDrag1,this.mcDrag2,this.mcDrag3,this.mcDrag4,this.mcDrag5,this.mcSubmit,this.mcTryAgain,this.mcSolve,this.mcFeedBack);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,520);


// symbols:
(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,520);


(lib.Bitmap10 = function() {
	this.initialize(img.Bitmap10);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.Bitmap11 = function() {
	this.initialize(img.Bitmap11);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.Bitmap12 = function() {
	this.initialize(img.Bitmap12);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.Bitmap13 = function() {
	this.initialize(img.Bitmap13);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);

(lib.OkBtn = function() {
	this.initialize(img.Ok);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


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
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.Bitmap8 = function() {
	this.initialize(img.Bitmap8);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.Bitmap9 = function() {
	this.initialize(img.Bitmap9);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.d6 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap12();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.d5 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Bitmap11();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.d4 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Bitmap10();

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.d3 = function() {
	this.initialize();

	// Layer 1
	this.instance_3 = new lib.Bitmap9();

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.d2 = function() {
	this.initialize();

	// Layer 1
	this.instance_4 = new lib.Bitmap8();

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.d1 = function() {
	this.initialize();

	// Layer 1
	this.instance_5 = new lib.Bitmap7();

	this.addChild(this.instance_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.mcTryAgain = function() {
	this.initialize();

	// Layer 2
	this.instance_6 = new lib.Bitmap3();

	this.addChild(this.instance_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


(lib.mcSolve = function() {
	this.initialize();

	// Layer 2
	this.instance_7 = new lib.Bitmap2();

	this.addChild(this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


(lib.mcsubmit = function() {
	this.initialize();

	// Layer 2
	this.instance_8 = new lib.Bitmap4();

	this.addChild(this.instance_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


(lib.mcOk = function() {
	this.initialize();

	// Layer 2
	this.instance_8 = new lib.OkBtn();

	this.addChild(this.instance_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


(lib.feadback = function() {
	this.initialize();

	// Btn
	
	this.mcOkBtn = new lib.mcOk();
	this.mcOkBtn.setTransform(160,153.3);
	this.mcOkBtn.onClick = function(){this.parent.visible = false}

	// BG
	this.instance_9 = new lib.Bitmap5();
	this.instance_9.setTransform(29.7,53.3);
	
	// BGWhite
	this.instance_10 = new lib.Bitmap6();
	this.instance_10.setTransform(-270.6,-100.9);
	this.instance_10.onClick = function(){}
	
	
	
	
	this.addChild(this.instance_10,this.instance_9,this.mcOkBtn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-270.6,-100.9,930,456);


(lib.drop = function() {
	this.initialize();

	// Layer 1
	this.instance_11 = new lib.Bitmap13();

	this.addChild(this.instance_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);



(lib.mcStatus = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003300").s().p("AhVgqIA+A8IBthtIAABKIhtBtIg+g+IAAhI").cp();
	this.shape.setTransform(8.6,9.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#990000").s().p("AAUgBIA3BRIgoAAIgjg3IgjA3IgnAAIA3hSIgyhNIAmAAIAfA0IAfg0IAnAAIgyBO").cp();
	this.shape_1.setTransform(8.5,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.3,18.5);


})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
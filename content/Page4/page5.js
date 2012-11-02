(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.page5 = function() {
	this.initialize();

	// Layer 1
	this.mcSubmitBtn = new lib.mcSubmitBtn();
	this.mcSubmitBtn.setTransform(556.9,384.2,1,1,0,0,0,35,12.5);

	// feedbackText
	this.mcFeedback = new lib.mcFeedback();
	this.mcFeedback.setTransform(730.9,164.1,1,1,0,0,0,92.8,22.6);

	// buttons
	this.mcTryAgain = new lib.mcTryAgain();
	this.mcTryAgain.setTransform(556.9,384.2,1,1,0,0,0,35,12.5);

	// text
	this.instance = new lib.mcsubmit();
	this.instance.setTransform(470.1,384.2,1,1,0,0,0,35,12.5);

	this.mcOption4 = new lib.checkBox();
	this.mcOption4.setTransform(146,370.1,1,1,0,0,0,12.9,12.9);

	this.mcOption3 = new lib.checkBox();
	this.mcOption3.setTransform(146,338,1,1,0,0,0,12.9,12.9);

	this.mcOption2 = new lib.checkBox();
	this.mcOption2.setTransform(146,306.9,1,1,0,0,0,12.9,12.9);

	this.mcOption1 = new lib.checkBox();
	this.mcOption1.setTransform(146,275.8,1,1,0,0,0,12.9,12.9);

	this.mcOption0 = new lib.checkBox();
	this.mcOption0.setTransform(146,244.7,1,1,0,0,0,12.9,12.9);

	// tital
	this.instance_1 = new lib.Bitmap1();

	this.addChild(this.instance_1,this.mcOption0,this.mcOption1,this.mcOption2,this.mcOption3,this.mcOption4,this.instance,this.mcTryAgain,this.mcFeedback,this.mcSubmitBtn);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,520);


// symbols:
(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,520);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,281);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,12);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,202,14);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,122,14);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,205,113);


(lib.Bitmap7 = function() {
	this.initialize(img.Bitmap7);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


(lib.mcSubmitBtn = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.Bitmap7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


(lib.mcFeedback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 4
	this.instance_1 = new lib.Bitmap2();
	this.instance_1.setTransform(-21.9,-22.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(3));

	// Layer 2
	this.instance_2 = new lib.Bitmap3();
	this.instance_2.setTransform(3.3,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).wait(3));

	// Layer 1
	this.instance_3 = new lib.Bitmap4();
	this.instance_3.setTransform(3,28.5);

	this.instance_4 = new lib.Bitmap5();
	this.instance_4.setTransform(3.6,29);

	this.instance_5 = new lib.Bitmap6();
	this.instance_5.setTransform(2.7,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.9,-22.6,227,281);


(lib.gfButton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5573AF").s("rgba(0,0,0,0.098)").ss(0.1,1,1).p("AFdBpIAAjRQAAgUgUAAIqRAAQgUAAAAAUIAADRQAAAUAUAAIKRAAQAUAAAAgUIAAAA").cp();
	this.shape.setTransform(31,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#53854E").s("rgba(0,0,0,0.098)").ss(0.1,1,1).p("AFJh8IqRAAQgUAAAAAUIAADRQAAAUAUAAIKRAAQAUAAAAgUIAAjRQAAgUgUAAIAAAA").cp();
	this.shape_1.setTransform(31,12.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CCCCCC").s("rgba(0,0,0,0.098)").ss(0.1,1,1).p("AFJh8IqRAAQgUAAAAAUIAADRQAAAUAUAAIKRAAQAUAAAAgUIAAjRQAAgUgUAAIAAAA").cp();
	this.shape_2.setTransform(31,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.9,0,69.9,25.1);


(lib.gfButton_1 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.checkBox = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#527F4A").s().p("AgWA3IBWhtIhYBRIgngWIApAy").cp();
	this.shape_3.setTransform(8.1,8,1,1,0,0,0,0.4,0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("ABAg2IhYBRIgngWIApAyIBWht").cp();
	this.shape_4.setTransform(8.1,8.5,1,1,0,0,0,0.4,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3F3F3").s().p("AAygxIAABjIhjAAIAAhjIBjAA").cp();
	this.shape_5.setTransform(7.7,7.8,1.331,1.331);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#527F4A").s().p("ABAg+IAAB+Ih/AAIAAh+IB/AA").cp();
	this.shape_6.setTransform(7.7,7.9,1.331,1.331);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F3F3F3").s().p("ABnBnIjNAAIAAjNIDNAAIAADN").cp();
	this.shape_7.setTransform(7.8,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.5,-2.5,20.7,20.7);


(lib.mcTryAgain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer 2
	this.text = new cjs.Text("Try again", "16px Whitney Book", "#FFFFFF");
	this.text.lineHeight = 18;
	this.text.setTransform(2.6,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text}]}).wait(3));

	// Layer 1
	this.instance_6 = new lib.gfButton("single",0);
	this.instance_6.setTransform(37,12.5,1,1,0,0,0,33,12.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({startPosition:1},0).wait(1).to({startPosition:2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.9,25.1);


(lib.mcsubmit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.text_1 = new cjs.Text("Submit", "16px Whitney Book", "#FFFFFF");
	this.text_1.lineHeight = 18;
	this.text_1.setTransform(9.3,1.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1}]}).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9.3,1.4,51.4,22.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
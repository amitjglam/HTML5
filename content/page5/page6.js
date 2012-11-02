(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.page6 = function() {
	this.initialize();

	// buttons
	this.mcRadio1 = new lib.radiobutton();
	this.mcRadio1.setTransform(139.9,308.9,1,1,0,0,0,12.9,12.9);

	this.mcRadio0 = new lib.radiobutton();
	this.mcRadio0.setTransform(139.9,270.4,1,1,0,0,0,12.9,12.9);

	this.mcSubmitBtn = new lib.mcsubmit();
	this.mcSubmitBtn.setTransform(556.9,384.2,1,1,0,0,0,35,12.5);

	// feedbackText
	this.mcFeedBack = new lib.feedback();
	this.mcFeedBack.setTransform(723,275.4,1,1,0,0,0,99.7,139.7);

	// tital
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance,this.mcFeedBack,this.mcSubmitBtn,this.mcRadio0,this.mcRadio1);
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
p.nominalBounds = new cjs.Rectangle(0,0,70,25);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2,281);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,212,22);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,226,244);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,76,24);


(lib.feedback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{FrameCorrect:0,FrameIncorrect:1},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(14.8,5.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).wait(2));

	// Layer 4
	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(-0.9,-0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(2));

	// Layer 1
	this.instance_2 = new lib.Bitmap4();
	this.instance_2.setTransform(14.8,28.9);

	this.instance_3 = new lib.Bitmap5();
	this.instance_3.setTransform(14.8,28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.9,227.8,281);


(lib.radiobutton = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{unselected:0,selected:1},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#527F4A").s().p("AASATQgIAHgKAAQgJAAgIgHQgIgJAAgKQAAgJAIgIQAIgIAJAAQAKAAAIAIQAIAIAAAJQAAAKgIAJIAAAA").cp();
	this.shape.setTransform(12.9,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).wait(1));

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#EAEAEA").ss(2,1,1).p("AAdgcQANAMAAAQQAAARgNAMQgMANgRAAQgQAAgMgNQgNgMAAgRQAAgQANgMQAMgNAQAAQARAAAMANIAAAA").cp();
	this.shape_1.setTransform(12.8,12.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#527F4A").s().p("ABAg/QAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgaQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaIAAAAAAqgpQgRgSgZAAQgYAAgRASQgSARAAAYQAAAYASASQARASAYAAQAZAAARgSQASgSAAgYQAAgYgSgRIAAAA").cp();
	this.shape_2.setTransform(12.8,12.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.047)").s().p("ABmAAQAAAQgEAOQgHAYgTASIAAAAQgeAegqAAQgpAAgegeIAAAAQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeIAAAAQATASAHAYQAEAOAAAPIAAAAABkAAQAAgIgCgJQgFgegXgWQgdgdgpAAQgoAAgdAdQgdAdAAAoQAAApAdAdQAdAeAoAAQApAAAdgeQAXgWAFgeQACgJAAgJIAAAA").cp();
	this.shape_3.setTransform(12.8,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#527F4A").s().p("AAqgpQgRgSgZAAQgYAAgRASQgSARAAAYQAAAYASASQARASAYAAQAZAAARgSQASgSAAgYQAAgYgSgRIAAAAABAg/QAaAbAAAkQAAAlgaAbQgbAaglAAQgkAAgbgaQgagbAAglQAAgkAagbQAbgaAkAAQAlAAAbAaIAAAA").cp();
	this.shape_4.setTransform(12.8,12.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.047)").s().p("ABkAAQAAgIgCgJQgFgegXgWQgdgdgpAAQgoAAgdAdQgdAdAAAoQAAApAdAdQAdAeAoAAQApAAAdgeQAXgWAFgeQACgJAAgJIAAAAABmAAQAAAQgEAOQgHAYgTASIAAAAQgeAegqAAQgpAAgegeIAAAAQgegeAAgqQAAgpAegeQAegeApAAQAqAAAeAeIAAAAQATASAHAYQAEAOAAAPIAAAA").cp();
	this.shape_5.setTransform(12.8,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.6,2.6,20.6,20.6);


(lib.mcsubmit = function() {
	this.initialize();

	// Layer 2
	this.instance_4 = new lib.Bitmap2();

	this.addChild(this.instance_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70,25);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
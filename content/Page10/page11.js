(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.page11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_73 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(73).call(this.frame_73));

	// t4
	this.instance = new lib.t4();
	this.instance.setTransform(698.4,252.6,1,1,0,0,0,113.3,29.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(62).to({_off:false},0).to({x:747.9,alpha:1},11,cjs.Ease.get(1)).wait(1));

	// t3
	this.instance_1 = new lib.t3();
	this.instance_1.setTransform(204.6,388.6,1,1,0,0,0,109.5,17.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(49).to({_off:false},0).to({x:254.1,alpha:1},11,cjs.Ease.get(1)).wait(14));

	// t1
	this.instance_2 = new lib.t1();
	this.instance_2.setTransform(206.7,127.3,1,1,0,0,0,107.4,17.4);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(36).to({_off:false},0).to({x:256.2,alpha:1},11,cjs.Ease.get(1)).wait(27));

	// t2
	this.instance_3 = new lib.t2();
	this.instance_3.setTransform(118.8,258,1,1,0,0,0,134.6,33.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(23).to({_off:false},0).to({x:168.3,alpha:1},11,cjs.Ease.get(1)).wait(40));

	// page content
	this.instance_4 = new lib.mcThink();
	this.instance_4.setTransform(497.7,265.6,1,1,0,0,0,129.1,155.5);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({alpha:1},16).wait(58));

	// Layer 4
	this.instance_5 = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).wait(74));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,520);


// symbols:
(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,520);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,215,35);


(lib.Bitmap3 = function() {
	this.initialize(img.Bitmap3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,269,68);


(lib.Bitmap4 = function() {
	this.initialize(img.Bitmap4);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,219,35);


(lib.Bitmap5 = function() {
	this.initialize(img.Bitmap5);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,235,76);


(lib.Bitmap6 = function() {
	this.initialize(img.Bitmap6);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,18);


(lib.t4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,235,76);


(lib.t3 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Bitmap4();

	this.addChild(this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,219,35);


(lib.t2 = function() {
	this.initialize();

	// Layer 1
	this.instance_2 = new lib.Bitmap3();

	this.addChild(this.instance_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,269,68);


(lib.t1 = function() {
	this.initialize();

	// Layer 1
	this.instance_3 = new lib.Bitmap2();

	this.addChild(this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,215,35);


(lib.grar2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADnkmQgKAAgHAHIgjAjQgPASgUgNIhJgdQgVgGAAgWIAAgzQAAgVgVAAIg5AAQgXAAAAAVIAAAzQAAAXgUAFIhIAdQgUANgPgSIgjgjQgRgPgOAPIgqArQgPAOAPAQIAkAkQAQAQgLASIgeBJQgFAUgXAAIg0AAQgVAAAAAXIAAA4QAAAYAVAAIA0AAQAXAAAFATIAeBKQALARgQAQIgkAlQgHAGAAAJQAAAJAHAGIAqAqQAOAPARgPIAjgjQAHgHAKgBQAKgCAIAFIBIAcQAUAFAAAYIAAAzQAAAWAXAAIA5AAQAVAAAAgWIAAgzQAAgWAVgHIBJgcQAIgFAKACQAKABAHAHIAjAjQARARAOgRIArgqQAGgGAAgJQAAgJgGgGIgmglQgOgOAJgTIAghKQAFgTAWAAIA0AAQAVAAAAgYIAAg4QAAgXgVAAIg0AAQgWAAgFgUIgghJQgJgTAOgPIAmgkQAOgQgOgOIgrgrQgGgHgIAAIAAAAACsAAQAABHgyAzQgzAyhHAAQhGAAg0gyQgzgzAAhHQAAhHAzgzQA0gzBGAAQBHAAAzAzQAyAzAABHIAAAAABcAAQAAgmgZgcQgcgbgnAAQgmAAgbAbQgcAcAAAmQAAAmAcAcQAbAbAmAAQAnAAAcgbQAZgcAAgmIAAAA").cp();
	this.shape.setTransform(37.8,37.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,75.6,75.5);


(lib.grar1 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDFDFD").s().p("ACbjwIglgZQgQgFgJAOIgRAkQgLAMgNgEIg4gFQgTAAgFgQIgNglQgCgMgRAAIgpAOQgTAHAGAOIANAnQACAMgMALIgvAmQgMANgOgJIgkgTQgPgFgGAMIgXApQgGAPAPAJIAgAQQASAHgGASIgGA4QAAASgPAHIgmAHQgSAHAHAOIAOAtQAGARAPgFIAngMQALgDAMALIAlAwQANAMgJAOIgSAkQgMAMATAJIAoAUQAPAIAFgOIAVgjQAGgPATAGIA4AFQAUAAAAAQIAMAlQAHAQAOgHIAsgLQASgGgFgPIgNgmQgFgSAOgGIAwgmQALgLAPAIIAgASQASAGAGgMIAVgpQAIgPgOgKIgjgQQgMgEAAgUIAFg5QAAgSASgFIAmgMQAPAAgGgVIgMgpQgFgSgPAGIgmAMQgSAFgGgOIgmgwQgMgMAGgOIAUgjQAJgPgSgFIAAAAABBhyQAuAaAOA1QATAzgaAwQgbAxg1AQQgxAOgxgaQgwgbgSg1QgOgxAagxQAYgwA1gSQAzgOAzAbIAAAA").cp();
	this.shape_1.setTransform(28.4,28.3);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,56.9,56.7);


(lib.gear3 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AFSlaIg4AqQgUATgagTIhbgzQgbgNAEgdIAJhFQAEgdgdgDIhQgLQgbgEgEAdIgJBFQgDAdgeAFIhlAbQgeALgOgYIgtg3QgHgJgLgCQgNgBgKAHIhAAyQgWAQARAZIArA2QARAXgQAXIg0BeQgKAYghgEIhDgJQgfgEgEAfIgKBOQgEAdAfAEIBDAJQAhAEADAbIAaBnQAJAcgWASIg4ApQgKAHgBANQgCALAIAKIAxBAQATAYAWgSIA5gqQAUgTAaATIBbA0QAbAMgEAcIgJBGQgEAcAdAEIBQAKQAbAEAEgcIAJhGQAEgcAdgFIBlgbQAegLAPAYIArA3QASAVAYgQIA+gyQAMgHABgLQACgNgKgKIgpg2QgTgZASgWIA0hdQAKgZAfAEIBFAJQAfAEAEgfIAKhOQAEgdgfgEIhFgJQgfgEgDgaIgahoQgMgZAZgTIA2gqQAYgTgTgWIgvhAQgTgXgXARIAAAAAC6iOQA6BPgMBdQgNBghNA6QhOA7hegMQhggNg6hNQg7hMANheQAMhfBNg9QBMg7BeANQBgAMA9BNIAAAA").cp();
	this.shape_2.setTransform(51,51.1,1,1,0,0,0,-0.2,0);

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,102.4,102.2);


(lib.gearAnim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance_4 = new lib.grar1();
	this.instance_4.setTransform(141.8,94.9,1,1,0,0,0,28.4,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({rotation:-1079.9},140).wait(1));

	// Layer 3
	this.instance_5 = new lib.grar2();
	this.instance_5.setTransform(121,37.8,1,1,0,0,0,37.8,37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({rotation:720},140).wait(1));

	// Layer 4
	this.instance_6 = new lib.gear3();
	this.instance_6.setTransform(51.1,79,1,1,0,0,0,51.1,51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:-359.9},140).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.3,130.1);


(lib.mcThink = function() {
	this.initialize();

	// Symbol 3
	this.instance_7 = new lib.gearAnim();
	this.instance_7.setTransform(127.9,81.1,1,1,4.2,0,0,85,65);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5674AC").s().p("ANYmaQDXDYAXD3QA6IQvbCOQjKAdiqAAQs/AAg5qNQgCgOACgOQgCAAABgBIABABQABkAD1jhQAcgaAfgYQCPh0CxhGQC8hLDkgXQA/gHA+AAQD4AADWBpQBgAvBaBFQBMA6A9A+IAAAA").cp();
	this.shape_3.setTransform(138.4,83.1);

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#640D0D","#6E1616","#9C4242"],[0,0.486,0.914],54.2,179.8,-19.2,-97.9).s().p("AOXEfQgbAohRBrQhCBVAUCsQADAYAEAaQAFAaAFAZQAbCECBHnQADALADAMQARBWhYASQoyAjojglQh0gKgWhdIhOluQgSgii4BBQhiAghrgdQh1gcgThRQgRhDAshZQAPhAgfgiIhjhPQgpghBfhkQhqgxAXguQAIgIAGgKQAbgtgMhSQAAgBAAgBQheAAgRgIQiYg7BbiBQBbh+A3iOQA2iOgVhUQgVhUgJglQgBgRgBgQQAAgBAAAAIAAAAQgQlhEZkNQF1ljIPgPQIigQFoE6QFoE6gkHMQgXEfipDsQh3Chg5BUIAAAA").cp();
	this.shape_4.setTransform(129.1,155.5);

	// Layer 5
	this.instance_8 = new lib.Bitmap6();
	this.instance_8.setTransform(22.5,303.5);

	this.addChild(this.instance_8,this.shape_4,this.shape_3,this.instance_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,322.5,321.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
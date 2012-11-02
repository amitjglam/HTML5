(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.page1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_47 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47));

	// page content
	this.instance = new lib.mcThink();
	this.instance.setTransform(464.7,265.6,1,1,0,0,0,129.1,155.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},16).wait(32));

	// Layer 4
	this.instance_1 = new lib.Bitmap2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).wait(48));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,520);


// symbols:
(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,18);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,520);


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
	this.instance = new lib.grar1();
	this.instance.setTransform(141.8,94.9,1,1,0,0,0,28.4,28.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-1079.9},140).wait(1));

	// Layer 3
	this.instance_1 = new lib.grar2();
	this.instance_1.setTransform(121,37.8,1,1,0,0,0,37.8,37.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:720},140).wait(1));

	// Layer 4
	this.instance_2 = new lib.gear3();
	this.instance_2.setTransform(51.1,79,1,1,0,0,0,51.1,51.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:-359.9},140).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.3,130.1);


(lib.mcThink = function() {
	this.initialize();

	// Symbol 3
	this.instance_3 = new lib.gearAnim();
	this.instance_3.setTransform(127.9,81.1,1,1,4.2,0,0,85,65);

	// Layer 3
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5674AC").s().p("ANYmaQDXDYAXD3QA6IQvbCOQjKAdiqAAQs/AAg5qNQgCgOACgOQgCAAABgBIABABQABkAD1jhQAcgaAfgYQCPh0CxhGQC8hLDkgXQA/gHA+AAQD4AADWBpQBgAvBaBFQBMA6A9A+IAAAA").cp();
	this.shape_3.setTransform(138.4,83.1);

	// Layer 4
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#640D0D","#6E1616","#9C4242"],[0,0.486,0.914],54.2,179.8,-19.2,-97.9).s().p("AOXEfQgbAohRBrQhCBVAUCsQADAYAEAaQAFAaAFAZQAbCECBHnQADALADAMQARBWhYASQoyAjojglQh0gKgWhdIhOluQgSgii4BBQhiAghrgdQh1gcgThRQgRhDAshZQAPhAgfgiIhjhPQgpghBfhkQhqgxAXguQAIgIAGgKQAbgtgMhSQAAgBAAgBQheAAgRgIQiYg7BbiBQBbh+A3iOQA2iOgVhUQgVhUgJglQgBgRgBgQQAAgBAAAAIAAAAQgQlhEZkNQF1ljIPgPQIigQFoE6QFoE6gkHMQgXEfipDsQh3Chg5BUIAAAA").cp();
	this.shape_4.setTransform(129.1,155.5);

	// Layer 5
	this.instance_4 = new lib.Bitmap1();
	this.instance_4.setTransform(22.5,303.5);

	this.addChild(this.instance_4,this.shape_4,this.shape_3,this.instance_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,322.5,321.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
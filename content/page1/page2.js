(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// stage content:
(lib.page2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// timeline functions:
	this.frame_0 = function() {
		this.mcClose.visible = false; 
		this.mcBookFrame.visible = false;
	}
	this.frame_79 = function() {
		this.stop();
		this.mcBookFrame.visible = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(79).call(this.frame_79));

	// ActiveBooks
	this.mcBookFrame = new lib.mc_books();
	this.mcBookFrame.setTransform(452,149.8,1,1,0,0,0,289.5,118.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcBookFrame}]}).wait(80));

	// mcCloseBtn
	this.mcClose = new lib.close_btn();
	this.mcClose.setTransform(746.5,125.8,1,1,0,0,0,16.5,16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mcClose}]}).wait(80));

	// Layer 13
	this.instance = new lib.book1_1("single",0);
	this.instance.setTransform(448.8,141.9,0.785,0.785,-0.9,0,0,77.3,166.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(58).to({startPosition:0,_off:false},0).to({regX:77.4,regY:167,rotation:-52.3,x:300.7,y:225.8,alpha:1},20,cjs.Ease.get(0.99)).wait(2));

	// Layer 12
	this.instance_1 = new lib.book_2("single",0);
	this.instance_1.setTransform(447.9,147.2,0.785,0.785,0,0,0,79.1,162.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(58).to({startPosition:0,_off:false},0).to({y:158.3,alpha:1},20,cjs.Ease.get(0.99)).wait(2));

	// Layer 5
	this.instance_2 = new lib.book3_1("single",0);
	this.instance_2.setTransform(447.9,147.3,0.785,0.785,0.6,0,0,78.9,160);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(58).to({startPosition:0,_off:false},0).to({rotation:55.8,x:606.3,y:226.8,alpha:1},20,cjs.Ease.get(0.99)).wait(2));

	// Layer 11
	this.instance_3 = new lib.tonge();
	this.instance_3.setTransform(449.5,197.3,1,1,0,-4.3,175.6,14.8,57.8);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).to({alpha:1},2).wait(22));

	// Layer 6
	this.instance_4 = new lib.tonge();
	this.instance_4.setTransform(448.9,198.4,1,1,0,0,0,13.6,59.4);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(56).to({_off:false},0).to({alpha:1},2).to({rotation:60,x:561.1,y:252.4},20,cjs.Ease.get(1)).wait(2));

	// Layer 10
	this.instance_5 = new lib.tonge();
	this.instance_5.setTransform(450.3,196.6,1,1,-0.7,0,0,15,57.9);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(56).to({_off:false},0).to({alpha:1},2).to({rotation:-52.1,x:338.5,y:250.3},20,cjs.Ease.get(1)).wait(2));

	// Layer 9
	this.instance_6 = new lib.band();
	this.instance_6.setTransform(449.7,258.7,0.5,0.5,0,0,0,134.1,45.4);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(43).to({_off:false},0).to({scaleX:1,scaleY:1,y:243.7,alpha:1},12,cjs.Ease.get(1)).wait(25));

	// Layer 7
	this.instance_7 = new lib.face();
	this.instance_7.setTransform(468.9,246.6,1.3,1.3,0,0,0,91.2,113.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(24).to({scaleX:1,scaleY:1,x:443.5,y:343.1},17,cjs.Ease.get(0.96)).wait(39));

	// tital
	this.instance_8 = new lib.Bitmap2();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8}]}).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,520);


// symbols:
(lib.Bitmap1 = function() {
	this.initialize(img.Bitmap1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,271,16);


(lib.Bitmap2 = function() {
	this.initialize(img.Bitmap2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,520);


(lib.book1 = function() {
	this.initialize(img.book1);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,151,163);


(lib.book2 = function() {
	this.initialize(img.book2);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,239);


(lib.book3 = function() {
	this.initialize(img.book3);
}).prototype = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,185);


(lib.Tween18 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#559C96").s().p("AIGMvIwLAeIAA6ZIQLAeIAAZd").cp();

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.8,-84.4,103.7,169.1);


(lib.Tween17 = function() {
	this.initialize();

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#559C96").s().p("AF4MvIruA7IAA7TILuA7IAAZd").cp();

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-87.4,75.2,175);


(lib.Tween16 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#559C96").s().p("ADpMvInRBZIAA8PIHRBZIAAZd").cp();

	this.addChild(this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.3,-90.3,46.8,180.9);


(lib.Tween15 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#559C96").s().p("ABbsuIi1h2IAAdJIC1h2IAA5d").cp();

	this.addChild(this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.1,-93.3,18.3,186.8);


(lib.Tween14 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#559C96").s().p("AAjPJIAA+RIhFCaIAAZdIBFCa").cp();

	this.addChild(this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.4,-96.9,7.1,194);


(lib.Tween13 = function() {
	this.initialize();

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#559C96").s().p("Ai+MvIAA5dIF9h0IAAdFIl9h0").cp();

	this.addChild(this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.1,-93,38.3,186.3);


(lib.Tween12 = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#559C96").s().p("AlbsuIK3hNIAAb3Iq3hNIAA5d").cp();

	this.addChild(this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.7,-89.2,69.6,178.6);


(lib.Tween11 = function() {
	this.initialize();

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#559C96").s().p("An3suIPvgnIAAarIvvgnIAA5d").cp();

	this.addChild(this.shape_7);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.3,-85.3,100.9,170.9);


(lib.Tween10 = function() {
	this.initialize();

	// Layer 1
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#559C96").s().p("AKUMvIAA5dI0nAAIAAZdIUnAA").cp();

	this.addChild(this.shape_8);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66,-81.5,132.1,163.2);


(lib.Tween9 = function() {
	this.initialize();

	// Layer 1
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#559C96").s().p("AIGMvIwLAeIAA6ZIQLAeIAAZd").cp();

	this.addChild(this.shape_9);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-51.8,-84.4,103.7,169.1);


(lib.Tween8 = function() {
	this.initialize();

	// Layer 1
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#559C96").s().p("AF4MvIruA7IAA7TILuA7IAAZd").cp();

	this.addChild(this.shape_10);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-37.5,-87.4,75.2,175);


(lib.Tween7 = function() {
	this.initialize();

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#559C96").s().p("ADpMvInRBZIAA8PIHRBZIAAZd").cp();

	this.addChild(this.shape_11);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.3,-90.3,46.8,180.9);


(lib.Tween6 = function() {
	this.initialize();

	// Layer 1
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#559C96").s().p("ABbsuIi1h2IAAdJIC1h2IAA5d").cp();

	this.addChild(this.shape_12);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.1,-93.3,18.3,186.8);


(lib.Tween5 = function() {
	this.initialize();

	// Layer 1
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#559C96").s().p("AAjPJIAA+RIhFCaIAAZdIBFCa").cp();

	this.addChild(this.shape_13);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.4,-96.9,7.1,194);


(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#559C96").s().p("Ai+MvIAA5dIF9h0IAAdFIl9h0").cp();

	this.addChild(this.shape_14);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.1,-93,38.3,186.3);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#559C96").s().p("AlbsuIK3hNIAAb3Iq3hNIAA5d").cp();

	this.addChild(this.shape_15);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-34.7,-89.2,69.6,178.6);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#559C96").s().p("An3suIPvgnIAAarIvvgnIAA5d").cp();

	this.addChild(this.shape_16);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-50.3,-85.3,100.9,170.9);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#559C96").s().p("AKUMvIAA5dI0nAAIAAZdIUnAA").cp();

	this.addChild(this.shape_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-66,-81.5,132.1,163.2);


(lib.tonge = function() {
	this.initialize();

	// Layer 2
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AAGEdIgLo5");
	this.shape_18.setTransform(13.5,29.3);

	// Layer 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("ABahZQAmAmAAAzQAAA1gmAlQglAmg1AAQg0AAglgmQgmglAAg1QAAgzAmgmQAlglA0AAQA1AAAlAlIAAAA").cp();
	this.shape_19.setTransform(14.2,58.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AAqAqQgRASgZAAQgYAAgRgSQgSgRAAgZQAAgYASgRQARgSAYAAQAZAAARASQASARAAAYQAAAZgSARIAAAA").cp();
	this.shape_20.setTransform(14.2,58.3);

	this.addChild(this.shape_20,this.shape_19,this.shape_18);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.4,0.7,25.6,70.4);


(lib.brain = function() {
	this.initialize();

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AMjLrQk+ESnMgaQnLgZlOk3QlMk2gLmbQgLmcE+kSQFAkQHNAaQHKAaFME1QFOE2ALGaQAKGdk/ERIAAAA").cp();
	mask.setTransform(108,101.1);

	// Layer 1
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E28E34").s().p("ACUj2QAVAhAAAhQAAAlgsBDQgdAtgJAbQgvCHADAyQADAygSAUQgSAUgrAAQgpAAg5gqQgVgPhJhPQgLgTAAABQgCABgCABQgGAFgJAIQgVARgHAAQgPAAgEgLQgBgCAAgLQAAgYBCgYQBCgZARAZQgIAJgcALQgFACgDACQB/ByAIgaQADgPAEgTQAahtBAhPQAwg7APgUQAAAAAAgBIAAABQAGgHABgCQAWgmAAg0QAAgGgFgNQgEgMAAgGQAAgKABgFQAFgSAUAcQACADADAEIAAAAAEvhlQAGAggiAhQglAkgSASQggAkACBqQgtglAEg1QADg1A9hWQA+hZAJghQAEgVAPBvIAAAA").cp();
	this.shape_21.setTransform(180.2,107.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F0A24F").s().p("AG0ipQAZABAgAhQgjAAAMBFQALBDACAVQACAUhIA7QhJA8icgqQidgqhHgTQhKgUh/AAQg0AAhYApQggARgVAYQgXAbAMAXQg0gBAMhYQAKhXAhg0QANgVAMgIQgPAygVBeQAggXAbgMQBQggBoAAQByAACJAhQAVAGAZAFQDAAzBPgwQBOguAHgfQAHgfgsgwQgugwAbgBQAbgCAaABIAAAA").cp();
	this.shape_22.setTransform(129.1,88.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#BB0221","#F7BE81"],[0.286,1],-162.5,-46.4,129.6,-23.8).s().p("AGQEWQhZgeAAgGQABgIgMAAQgHAAhZgsQhZgrgmAAQgfAAhBAhQhFA/hKAUQhOAUiyAEQiqACgTACQghABhKAZQgQAFgNAFQAAAJgHAIQgJAKgPAAQgyAAgVggQgMgTAAgYQAAg8BdhAQBlhGCKgMIBwgDQBXgFA5gKQg2gGg5gCQlDgNAoiZQAoiaDegwQDfgwEzAYQE2AYDXBGQDXBFgMDBQgMDCiyA0QiyAzhZgeIAAAA").cp();
	this.shape_23.setTransform(125.9,104.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AI+jMQg1gGgXgwQgig8gYg5QgLgYgIgCQgziFAdAtQAeAwAHALQgBgCAAgDQAAg9ARBIQAFAbBWAIQhOAZBbBZQAUALAjAQIAAABIA1AKQAbAAgigZICaATQAzAKABAAQAQAEAAAMQAAALgNADQgbAFgcAFIg3AQQgOgMgTAEIiVgTAL5hMQAyBSAABJQAAAWgVApQgdA6grAAQgOAAgDgIQAAgJAAgBQAAgMAeggQAfggAAgcQAAgjgahJQgZhMAAAAQAAg2AyBUIAAAAAOjAXQAFACABACQAEAFAEAEQgBgBAAgBQgBgKgCgBIgKAAAOTAeQgDACgBADQACARAMAfQA7CHAEBzQADBygQggQgEAOgBAGIgFAAQgShBgwjdQgni4gBAMQAAgsAJgHQALgIChCSQg9gpgggKQAMAJAAAPQAAAGgFAAQgCAAgCgBIABABIAAAEIgGABQgIgCgGgHQgGgIgGgCQgCAAgCABIAAAAAItAxQgUAUgHAGQAVAzAAAcQAAAbgPAiQgXAwgkAAQgQAAgEgKQgCgDAAgJQAAgRAYgVQAXgVAAgeQAAgPgVgqQgVgrAAg2QAAhGALgeQAKgYATgaQAXgeAPgCQACACABgBIAAAHQAAAEgoBiQAABDAQAwQAQgXA/gfQBAghAlA1QAkA3g4gTQg4gTgRgBQgRgDgeAdIAAAAAFnm9QAAACAnAgQgpgYARBcQAQBcAADRQAACghDBNQAuBgg/AzQgIgCgBgBQgDgCgDAAQgDAAgfgMQgfgMAmiOQAmiOAlhbQgOgtgRAaQhgCYjLAAQg4AAglgcQABAIhKiDQhKiFAAgoQAAgdAhggQArgqBHAEQAAABABACQABACAAAHQAAAKgyAeQg0AeAAASQAAAOBVCYQBUCWCxhVQBNglAmg2QASgZAWgzQAIgTABhbQACAFgGhNQgFhNg2gMQAkgzAAgJQAAgbAXAEQAXAEAEAbQABAXAJArIAAAAABonvQgJgBghANQgqAQgGAoQgFAoAYAWQAKAIAtAdQBQAyAABEQAAAfgcAeQgmAnhFAAQgkAAgNgYQgFgXAAgBQAAgaAUAAQAHAAAKAMQAFAHAEAFQAyAAAZgTQATgOAAgQQAAgohOg1QhLg1AAg7QAAg1AdgpQAmg7BLAsIgBAHQgDACgMAAQgTAAAfATIAAAAAAAoTQAAAMhPBCQhRBCg/gDQg+gEhCgbQhDgcgPgKQgQgMgDgIQgCAEgCAEQgGAMgDAMQAIgIAKAAIAGABQAAACAAABQgFACgHAFQgMALgDAVQgBABAAAAQAAAKAAAMQAEAwAQAvQAQAugMA3QgMA1gXAgQgYAgg+AAQg+AAgxg9QgSgegKgQQgiAbgwAlQgPgHBAhOQBAhOAYASQAXARguAmQAkBIBBgDQBBgCACgqQAAgbAAgCQAAgPgIgtQgKguAAgLQAAgmADgbQgBgCAAgCQAAgJgMAAQgKADgEABIgGgCIAAgEQAAgEAQgHQAPgHAGAAIABAAQABgFABgEQARhDA2gKIABAAQABAAAAAIQAAACgHAQQAFgFAKgFQArgVAHgHQAGgFAGAAQAEAAA0gLQAzgKAGA3QhNBEDZgyQAkgSgWgVQAuAAAPgMQAqgiAAAhIAAAAAjIADQACAAAAAIQAABJg9BaQhUB6iMAAQiSAAAAhJQAAgFACgFQAFgLAMAAQACAAAcAWQAcAVBEAAQB6AAAshLQAOgXAbg3QAdg1ApgmQADACAEAAIAAAAAvRhrQgTAqAcg2QAcg4gcCBQgdB9AnBIQAyBvg6hDQgug1gXAUQgPgFAsirQAritADASQADATgUArIAAAAAqeBoQBWhhBrAYQAoAIAcAYQAbAVAAAUQgFAWgRAAQgEAAgZgZQgbgahBAAQhUAAhGBXQgWAggRAbQhnFHg+AAQgPAAgEgIQAAgBAAgIQAAAABIiQQAcg4ASgqQAOg6ALghIAFgVQgEALAAgDQAAhLg0gyQgognhAgSQBhg4A+BkQAjA3AJAzQAUgaAVgXIAAAA").cp();
	this.shape_24.setTransform(106.9,54.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#F0A24F","#E28E34"],[0,0.984],-45.8,-26.3,75.2,43.1).s().p("AMMLWQk1EKm/gaQm9gYlEkuQlDktgKmPQgLmQE1kKQE2kIHAAZQG9AZFCEtQFEEtAKGOQALGRk2EJIAAAA").cp();
	this.shape_25.setTransform(108,101.1);

	this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = mask;
	this.addChild(this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,216.1,198);


(lib.book3closed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance = new lib.book1();
	this.instance.setTransform(17.4,9.8,0.044,0.701,0,0,-53.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{scaleX:0.044,skewY:-53.4,x:17.4,y:9.8}}]},9).to({state:[{t:this.instance,p:{scaleX:0.137,skewY:-16.1,x:27.4,y:9.8}}]},1).to({state:[{t:this.instance,p:{scaleX:0.335,skewY:-4.6,x:28.1,y:9.8}}]},1).to({state:[{t:this.instance,p:{scaleX:0.509,skewY:0,x:28.7,y:9.9}}]},1).to({state:[{t:this.instance,p:{scaleX:0.701,skewY:0,x:29.4,y:9.9}}]},1).wait(1));

	// Layer 7
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_26.setTransform(1.4,81.6);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-2.9,0,9.2,0).s().p("ABjLuIjFAAIAA3bIDFAAIAAXb").cp();
	this.shape_27.setTransform(7.7,81.6);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-2.3,0,7.5,0).s().p("ABQrtIAAXbIifAAIAA3bICfAA").cp();
	this.shape_28.setTransform(9.6,81.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-1,0,3.7,0).s().p("AAnrtIAAXbIhNAAIAA3bIBNAA").cp();
	this.shape_29.setTransform(13.6,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},6).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[]},1).wait(5));

	// Layer 9
	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_30.setTransform(23.3,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30}]}).to({state:[{t:this.shape_30}]},6).to({state:[]},3).wait(5));

	// Layer 8
	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AHmLzIvLArIAA47IPLA2IAAXa").cp();
	this.shape_31.setTransform(-31.3,81);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AFeLrIq8BBIAA5XIK8A8IAAXa").cp();
	this.shape_32.setTransform(-17.7,81.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("ADSLrImjBWIAA6BIGjBRIAAXa").cp();
	this.shape_33.setTransform(-3.6,81.8);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AhONSIAA6jICdBdIAAXaIidBs").cp();
	this.shape_34.setTransform(9.3,82.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31}]},5).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[]},1).wait(5));

	// Layer 1
	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_35.setTransform(23.3,81.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_36.setTransform(1.4,81.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AUYLuMgovAAAIAA3bMAovAAAIAAXb").cp();
	this.shape_37.setTransform(11,81.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#346C67").s().p("AA+suIAAZdIh7AAIAA5dIB7AA").cp();
	this.shape_38.setTransform(13.3,81.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#559C96").s().p("AVjsuIAAZdIinAAIxJAAIgsAAI2pAAIAA5dIWpAAIAmAAIRPAAICnAA").cp();
	this.shape_39.setTransform(11.3,81.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#559C96").s().p("AIGMvIwLAeIAA6ZIQLAeIAAZd").cp();
	this.shape_40.setTransform(-36.1,81.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#559C96").s().p("Al2tpILuA7IAAZdIruA7IAA7T").cp();
	this.shape_41.setTransform(-21.9,81.6);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#559C96").s().p("AjouHIHRBZIAAZdInRBZIAA8P").cp();
	this.shape_42.setTransform(-7.6,81.6);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#559C96").s().p("ABbsuIi1h2IAAdJIC1h2IAA5d").cp();
	this.shape_43.setTransform(6.5,81.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#559C96").s().p("AAjPJIAA+RIhFCaIAAZdIBFCa").cp();
	this.shape_44.setTransform(20.6,81.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#559C96").s().p("Ai+suIF9h0IAAdFIl9h0IAA5d").cp();
	this.shape_45.setTransform(36.2,81.6);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#559C96").s().p("AlasuIK1hNIAAb3Iq1hNIAA5d").cp();
	this.shape_46.setTransform(51.8,81.6);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#559C96").s().p("An3suIPvgnIAAarIvvgnIAA5d").cp();
	this.shape_47.setTransform(67.5,81.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#559C96").s().p("AqTMvIUnAAIAA5dI0nAAIAAZd").cp();
	this.shape_48.setTransform(83.1,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35}]}).to({state:[]},4).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).wait(1));

	// Layer 4
	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#7FC9C2").s().p("AAMsuIAAZdIgXAAIAA5dIAXAA").cp();
	this.shape_49.setTransform(15.7,0.1,1,1,0,0,0,0,-81.5);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#466966").s().p("AAXsuIAAZdIgtAAIAA5dIAtAA").cp();
	this.shape_50.setTransform(14,0.1,1,1,0,0,0,0,-81.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#559C96").s().p("AgJsuIBBAAIAAZdIhBAAIgugnIAA4PIAugn").cp();
	this.shape_51.setTransform(11.4,81.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#559C96").s().p("AA4suIAAZdIhBAAIgugnIAA4PIAugnIBBAA").cp();
	this.shape_52.setTransform(11.4,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49}]},5).to({state:[{t:this.shape_52},{t:this.shape_50},{t:this.shape_49}]},1).wait(8));

	// Layer 3
	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_53.setTransform(23.3,81.6);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_54.setTransform(1.4,81.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AUYLuMgovAAAIAA3bMAovAAAIAAXb").cp();
	this.shape_55.setTransform(11,81.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#346C67").s().p("AA+suIAAZdIh7AAIAA5dIB7AA").cp();
	this.shape_56.setTransform(13.3,81.6);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#559C96").s().p("AVjsuIAAZdIinAAIxJAAIgsAAIg3AAIgxAAI1BAAIAA5dIVBAAIAxAAIA3AAIAmAAIRPAAICnAA").cp();
	this.shape_57.setTransform(11.3,81.6);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#559C96").s().p("AKrsuIAAZdIinAAIxHAAIgsAAIg7AAIAA5dIA7AAIAmAAIRNAAICnAA").cp();
	this.shape_58.setTransform(80.8,81.6);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],7.8,0,-8.3,0).s().p("AhjrtIAAXbIDIAAIAA3bIjIAA").cp();
	this.shape_59.setTransform(25.9,81.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AqMLuIUZAAIAA3bI0ZAAIAAXb").cp();
	this.shape_60.setTransform(77.6,81.6,0.979,1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#346C67").s().p("AA9suIAAZdIh5AAIAA5dIB5AA").cp();
	this.shape_61.setTransform(16.2,81.6);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#559C96").s().p("AKdsuIAAZdIikAAIwwAAIgrAAIg6AAIAA5dIA6AAIAmAAIQ1AAICkAA").cp();
	this.shape_62.setTransform(82.2,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]}).to({state:[{t:this.shape_58},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},5).to({state:[{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59}]},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.6,0,275.8,163.2);


(lib.book3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance_1 = new lib.book1();
	this.instance_1.setTransform(29.4,9.9,0.701,0.701);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{scaleX:0.701,x:29.4,skewY:0,y:9.9}}]}).to({state:[{t:this.instance_1,p:{scaleX:0.509,x:28.7,skewY:0,y:9.9}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.335,x:28.1,skewY:-4.6,y:9.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.137,x:27.4,skewY:-16.1,y:9.8}}]},1).to({state:[{t:this.instance_1,p:{scaleX:0.044,x:17.4,skewY:-53.4,y:9.8}}]},1).to({state:[]},1).wait(9));

	// Layer 7
	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-1,0,3.7,0).s().p("AAnrtIAAXbIhNAAIAA3bIBNAA").cp();
	this.shape_63.setTransform(13.6,81.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-2.3,0,7.5,0).s().p("ABQrtIAAXbIifAAIAA3bICfAA").cp();
	this.shape_64.setTransform(9.6,81.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-2.9,0,9.2,0).s().p("ABjLuIjFAAIAA3bIDFAAIAAXb").cp();
	this.shape_65.setTransform(7.7,81.6);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_66.setTransform(1.4,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_63}]},5).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).wait(6));

	// Layer 9
	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_67.setTransform(27.7,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_67}]},5).to({state:[{t:this.shape_67}]},3).wait(6));

	// Layer 8
	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AhONSIAA6jICdBdIAAXaIidBs").cp();
	this.shape_68.setTransform(9.3,82.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("ADSLrImjBWIAA6BIGjBRIAAXa").cp();
	this.shape_69.setTransform(-3.6,81.8);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AFeLrIq8BBIAA5XIK8A8IAAXa").cp();
	this.shape_70.setTransform(-17.7,81.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AHmLzIvLArIAA47IPLA2IAAXa").cp();
	this.shape_71.setTransform(-31.3,81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_68}]},5).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[]},1).wait(5));

	// Layer 1
	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#559C96").s().p("AqTMvIUnAAIAA5dI0nAAIAAZd").cp();
	this.shape_72.setTransform(83.1,81.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#559C96").s().p("An3MvIAA5dIPvgnIAAarIvvgn").cp();
	this.shape_73.setTransform(67.5,81.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#559C96").s().p("AlbMvIAA5dIK3hNIAAb3Iq3hN").cp();
	this.shape_74.setTransform(51.9,81.6);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#559C96").s().p("Ai+MvIAA5dIF9h0IAAdFIl9h0").cp();
	this.shape_75.setTransform(36.2,81.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#559C96").s().p("AAjPJIAA+RIhFCaIAAZdIBFCa").cp();
	this.shape_76.setTransform(20.6,81.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#559C96").s().p("ABbsuIi1h2IAAdJIC1h2IAA5d").cp();
	this.shape_77.setTransform(6.5,81.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#559C96").s().p("ADpMvInRBZIAA8PIHRBZIAAZd").cp();
	this.shape_78.setTransform(-7.6,81.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#559C96").s().p("AF4MvIruA7IAA7TILuA7IAAZd").cp();
	this.shape_79.setTransform(-21.9,81.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#559C96").s().p("AIGMvIwLAeIAA6ZIQLAeIAAZd").cp();
	this.shape_80.setTransform(-36.1,81.6);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_81.setTransform(23.3,81.6);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_82.setTransform(1.4,81.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AUYLuMgovAAAIAA3bMAovAAAIAAXb").cp();
	this.shape_83.setTransform(11,81.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#346C67").s().p("AA+suIAAZdIh7AAIAA5dIB7AA").cp();
	this.shape_84.setTransform(13.3,81.6);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#559C96").s().p("AVjsuIAAZdIinAAIxJAAIgsAAI2pAAIAA5dIWpAAIAmAAIRPAAICnAA").cp();
	this.shape_85.setTransform(11.3,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_72}]}).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[]},1).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]},4).wait(1));

	// Layer 4
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#7FC9C2").s().p("AAMsuIAAZdIgXAAIAA5dIAXAA").cp();
	this.shape_86.setTransform(15.7,0.1,1,1,0,0,0,0,-81.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#466966").s().p("AAXsuIAAZdIgtAAIAA5dIAtAA").cp();
	this.shape_87.setTransform(14,0.1,1,1,0,0,0,0,-81.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#559C96").s().p("AA4suIAAZdIhBAAIgugnIAA4PIAugnIBBAA").cp();
	this.shape_88.setTransform(11.4,81.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#559C96").s().p("AgJsuIBBAAIAAZdIhBAAIgugnIAA4PIAugn").cp();
	this.shape_89.setTransform(11.4,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]}).to({state:[{t:this.shape_89},{t:this.shape_87},{t:this.shape_86}]},8).to({state:[]},1).wait(5));

	// Layer 3
	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],7.8,0,-8.3,0).s().p("AhjrtIAAXbIDIAAIAA3bIjIAA").cp();
	this.shape_90.setTransform(25.9,81.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AqMLuIUZAAIAA3bI0ZAAIAAXb").cp();
	this.shape_91.setTransform(77.6,81.6,0.979,1);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#346C67").s().p("AA9suIAAZdIh5AAIAA5dIB5AA").cp();
	this.shape_92.setTransform(16.2,81.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#559C96").s().p("AKdsuIAAZdIikAAIwwAAIgrAAIg6AAIAA5dIA6AAIAmAAIQ1AAICkAA").cp();
	this.shape_93.setTransform(82.2,81.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_94.setTransform(23.3,81.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_95.setTransform(1.4,81.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AUYLuMgovAAAIAA3bMAovAAAIAAXb").cp();
	this.shape_96.setTransform(11,81.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#346C67").s().p("AA+suIAAZdIh7AAIAA5dIB7AA").cp();
	this.shape_97.setTransform(13.3,81.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#559C96").s().p("AKrsuIAAZdIinAAIxHAAIgsAAIg7AAIAA5dIA7AAIAmAAIRNAAICnAA").cp();
	this.shape_98.setTransform(80.8,81.6);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#559C96").s().p("AVjsuIAAZdIinAAIxJAAIgsAAIg3AAIgxAAI1BAAIAA5dIVBAAIAxAAIA3AAIAmAAIRPAAICnAA").cp();
	this.shape_99.setTransform(11.3,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90}]}).to({state:[{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},8).to({state:[{t:this.shape_99},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,0,143.4,163.2);


(lib.book1closed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance_2 = new lib.book3();
	this.instance_2.setTransform(19.7,12.3,0.021,0.728,0,0.4,-5.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{scaleX:0.021,x:19.7,y:12.3,skewY:-5.3,rotation:0,skewX:0.4}}]},9).to({state:[{t:this.instance_2,p:{scaleX:0.207,x:22.5,y:13,skewY:-5.3,rotation:0,skewX:0.4}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.426,x:23.2,y:14.3,skewY:-5.3,rotation:0,skewX:0.4}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.598,x:27.6,y:13.9,skewY:-1.7,rotation:0,skewX:0.4}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.728,x:34,y:14.4,skewY:0,rotation:0.4,skewX:0}}]},1).wait(1));

	// Layer 7
	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_100.setTransform(1.4,81.6);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-2.9,0,9.2,0).s().p("ABjLuIjFAAIAA3bIDFAAIAAXb").cp();
	this.shape_101.setTransform(7.7,81.6);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-2.3,0,7.5,0).s().p("ABQrtIAAXbIifAAIAA3bICfAA").cp();
	this.shape_102.setTransform(9.6,81.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-1,0,3.7,0).s().p("AAnrtIAAXbIhNAAIAA3bIBNAA").cp();
	this.shape_103.setTransform(13.6,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_100}]}).to({state:[{t:this.shape_101}]},6).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[]},1).wait(5));

	// Layer 9
	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_104.setTransform(23.3,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_104}]}).to({state:[{t:this.shape_104}]},6).to({state:[]},3).wait(5));

	// Layer 8
	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AHmLzIvLArIAA47IPLA2IAAXa").cp();
	this.shape_105.setTransform(-31.3,81);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AFeLrIq8BBIAA5XIK8A8IAAXa").cp();
	this.shape_106.setTransform(-17.7,81.8);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("ADSLrImjBWIAA6BIGjBRIAAXa").cp();
	this.shape_107.setTransform(-3.6,81.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AhONSIAA6jICdBdIAAXaIidBs").cp();
	this.shape_108.setTransform(9.3,82.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_105}]},5).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[]},1).wait(5));

	// Layer 1
	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_109.setTransform(23.3,81.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_110.setTransform(1.4,81.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("AUYLuMgovAAAIAA3bMAovAAAIAAXb").cp();
	this.shape_111.setTransform(11,81.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#346C67").s().p("AA+suIAAZdIh7AAIAA5dIB7AA").cp();
	this.shape_112.setTransform(13.3,81.6);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#559C96").s().p("AVjsuIAAZdIinAAIxJAAIgsAAI2pAAIAA5dIWpAAIAmAAIRPAAICnAA").cp();
	this.shape_113.setTransform(11.3,81.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#559C96").s().p("AIGMvIwLAeIAA6ZIQLAeIAAZd").cp();
	this.shape_114.setTransform(-36.1,81.6);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#559C96").s().p("AF4MvIruA7IAA7TILuA7IAAZd").cp();
	this.shape_115.setTransform(-21.9,81.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#559C96").s().p("ADpMvInRBZIAA8PIHRBZIAAZd").cp();
	this.shape_116.setTransform(-7.6,81.6);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#559C96").s().p("ABbsuIi1h2IAAdJIC1h2IAA5d").cp();
	this.shape_117.setTransform(6.5,81.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#559C96").s().p("AAjPJIAA+RIhFCaIAAZdIBFCa").cp();
	this.shape_118.setTransform(20.6,81.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#559C96").s().p("Ai+MvIAA5dIF9h0IAAdFIl9h0").cp();
	this.shape_119.setTransform(36.2,81.6);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#559C96").s().p("AlbMvIAA5dIK3hNIAAb3Iq3hN").cp();
	this.shape_120.setTransform(51.9,81.6);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#559C96").s().p("An3MvIAA5dIPvgnIAAarIvvgn").cp();
	this.shape_121.setTransform(67.5,81.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#559C96").s().p("AqTMvIUnAAIAA5dI0nAAIAAZd").cp();
	this.shape_122.setTransform(83.1,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]}).to({state:[]},4).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).wait(1));

	// Layer 4
	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#7FC9C2").s().p("AAMsuIAAZdIgXAAIAA5dIAXAA").cp();
	this.shape_123.setTransform(15.7,0.1,1,1,0,0,0,0,-81.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#466966").s().p("AAXsuIAAZdIgtAAIAA5dIAtAA").cp();
	this.shape_124.setTransform(14,0.1,1,1,0,0,0,0,-81.5);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#559C96").s().p("AgJsuIBBAAIAAZdIhBAAIgugnIAA4PIAugn").cp();
	this.shape_125.setTransform(11.4,81.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#559C96").s().p("AA4suIAAZdIhBAAIgugnIAA4PIAugnIBBAA").cp();
	this.shape_126.setTransform(11.4,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_125},{t:this.shape_124},{t:this.shape_123}]},5).to({state:[{t:this.shape_126},{t:this.shape_124},{t:this.shape_123}]},1).wait(8));

	// Layer 3
	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_127.setTransform(23.3,81.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_128.setTransform(1.4,81.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AUYLuMgovAAAIAA3bMAovAAAIAAXb").cp();
	this.shape_129.setTransform(11,81.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#346C67").s().p("AA+suIAAZdIh7AAIAA5dIB7AA").cp();
	this.shape_130.setTransform(13.3,81.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#559C96").s().p("AVjsuIAAZdIinAAIxJAAIgsAAIg3AAIgxAAI1BAAIAA5dIVBAAIAxAAIA3AAIAmAAIRPAAICnAA").cp();
	this.shape_131.setTransform(11.3,81.6);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#559C96").s().p("AKrsuIAAZdIinAAIxHAAIgsAAIg7AAIAA5dIA7AAIAmAAIRNAAICnAA").cp();
	this.shape_132.setTransform(80.8,81.6);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],5.4,0,-11.1,0).s().p("AhjrtIAAXbIDIAAIAA3bIjIAA").cp();
	this.shape_133.setTransform(25.9,81.6);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AqMLuIUZAAIAA3bI0ZAAIAAXb").cp();
	this.shape_134.setTransform(77.6,81.6,0.979,1);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#346C67").s().p("AA9suIAAZdIh5AAIAA5dIB5AA").cp();
	this.shape_135.setTransform(16.2,81.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#559C96").s().p("AKdsuIAAZdIikAAIwwAAIgrAAIg6AAIAA5dIA6AAIAmAAIQ1AAICkAA").cp();
	this.shape_136.setTransform(82.2,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]}).to({state:[{t:this.shape_132},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127}]},5).to({state:[{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133}]},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.6,0,275.8,163.2);


(lib.book_2closed = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance_3 = new lib.book2();
	this.instance_3.setTransform(17.1,14,0.031,0.551,0,0,-16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3,p:{scaleX:0.031,x:17.1,y:14,skewY:-16.8}}]},9).to({state:[{t:this.instance_3,p:{scaleX:0.157,x:22.4,y:13.9,skewY:-16.8}}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.296,x:27.3,y:14.5,skewY:-9.1}}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.41,x:32.7,y:13.8,skewY:-3.8}}]},1).to({state:[{t:this.instance_3,p:{scaleX:0.551,x:36,y:13.3,skewY:0}}]},1).wait(1));

	// Layer 7
	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_137.setTransform(1.4,81.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-2.9,0,9.2,0).s().p("ABjLuIjFAAIAA3bIDFAAIAAXb").cp();
	this.shape_138.setTransform(7.7,81.6);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-2.3,0,7.5,0).s().p("ABQrtIAAXbIifAAIAA3bICfAA").cp();
	this.shape_139.setTransform(9.6,81.6);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-1,0,3.7,0).s().p("AAnrtIAAXbIhNAAIAA3bIBNAA").cp();
	this.shape_140.setTransform(13.6,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_137}]}).to({state:[{t:this.shape_138}]},6).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[]},1).wait(5));

	// Layer 9
	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_141.setTransform(23.3,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_141}]}).to({state:[{t:this.shape_141}]},6).to({state:[]},3).wait(5));

	// Layer 8
	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AHmLzIvLArIAA47IPLA2IAAXa").cp();
	this.shape_142.setTransform(-31.3,81);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AFeLrIq8BBIAA5XIK8A8IAAXa").cp();
	this.shape_143.setTransform(-17.7,81.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("ADSLrImjBWIAA6BIGjBRIAAXa").cp();
	this.shape_144.setTransform(-3.6,81.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AhONSIAA6jICdBdIAAXaIidBs").cp();
	this.shape_145.setTransform(9.3,82.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_142}]},5).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[]},1).wait(5));

	// Layer 1
	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_146.setTransform(23.3,81.6);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_147.setTransform(1.4,81.6);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AUYLuMgovAAAIAA3bMAovAAAIAAXb").cp();
	this.shape_148.setTransform(11,81.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#346C67").s().p("AA+suIAAZdIh7AAIAA5dIB7AA").cp();
	this.shape_149.setTransform(13.3,81.6);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#559C96").s().p("AVjsuIAAZdIinAAIxJAAIgsAAI2pAAIAA5dIWpAAIAmAAIRPAAICnAA").cp();
	this.shape_150.setTransform(11.3,81.6);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#559C96").s().p("AIGMvIwLAeIAA6ZIQLAeIAAZd").cp();
	this.shape_151.setTransform(-36.1,81.6);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#559C96").s().p("AF4MvIruA7IAA7TILuA7IAAZd").cp();
	this.shape_152.setTransform(-21.9,81.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#559C96").s().p("ADpMvInRBZIAA8PIHRBZIAAZd").cp();
	this.shape_153.setTransform(-7.6,81.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#559C96").s().p("ABbsuIi1h2IAAdJIC1h2IAA5d").cp();
	this.shape_154.setTransform(6.5,81.6);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#559C96").s().p("AAjPJIAA+RIhFCaIAAZdIBFCa").cp();
	this.shape_155.setTransform(20.6,81.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#559C96").s().p("Ai+MvIAA5dIF9h0IAAdFIl9h0").cp();
	this.shape_156.setTransform(36.2,81.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#559C96").s().p("AlbMvIAA5dIK3hNIAAb3Iq3hN").cp();
	this.shape_157.setTransform(51.9,81.6);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#559C96").s().p("An3MvIAA5dIPvgnIAAarIvvgn").cp();
	this.shape_158.setTransform(67.5,81.6);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#559C96").s().p("AqTMvIUnAAIAA5dI0nAAIAAZd").cp();
	this.shape_159.setTransform(83.1,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146}]}).to({state:[]},4).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).wait(1));

	// Layer 4
	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#7FC9C2").s().p("AAMsuIAAZdIgXAAIAA5dIAXAA").cp();
	this.shape_160.setTransform(15.7,0.1,1,1,0,0,0,0,-81.5);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#466966").s().p("AAXsuIAAZdIgtAAIAA5dIAtAA").cp();
	this.shape_161.setTransform(14,0.1,1,1,0,0,0,0,-81.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#559C96").s().p("AgJsuIBBAAIAAZdIhBAAIgugnIAA4PIAugn").cp();
	this.shape_162.setTransform(11.4,81.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#559C96").s().p("AA4suIAAZdIhBAAIgugnIAA4PIAugnIBBAA").cp();
	this.shape_163.setTransform(11.4,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_162},{t:this.shape_161},{t:this.shape_160}]},5).to({state:[{t:this.shape_163},{t:this.shape_161},{t:this.shape_160}]},1).wait(8));

	// Layer 3
	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_164.setTransform(23.3,81.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_165.setTransform(1.4,81.6);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AUYLuMgovAAAIAA3bMAovAAAIAAXb").cp();
	this.shape_166.setTransform(11,81.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#346C67").s().p("AA+suIAAZdIh7AAIAA5dIB7AA").cp();
	this.shape_167.setTransform(13.3,81.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#559C96").s().p("AVjsuIAAZdIinAAIxJAAIgsAAIg3AAIgxAAI1BAAIAA5dIVBAAIAxAAIA3AAIAmAAIRPAAICnAA").cp();
	this.shape_168.setTransform(11.3,81.6);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#559C96").s().p("AKrsuIAAZdIinAAIxHAAIgsAAIg7AAIAA5dIA7AAIAmAAIRNAAICnAA").cp();
	this.shape_169.setTransform(80.8,81.6);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],7.8,0,-8.3,0).s().p("AhjrtIAAXbIDIAAIAA3bIjIAA").cp();
	this.shape_170.setTransform(25.9,81.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AqMLuIUZAAIAA3bI0ZAAIAAXb").cp();
	this.shape_171.setTransform(77.6,81.6,0.979,1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#346C67").s().p("AA9suIAAZdIh5AAIAA5dIB5AA").cp();
	this.shape_172.setTransform(16.2,81.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#559C96").s().p("AKdsuIAAZdIikAAIwwAAIgrAAIg6AAIAA5dIA6AAIAmAAIQ1AAICkAA").cp();
	this.shape_173.setTransform(82.2,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164}]}).to({state:[{t:this.shape_169},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164}]},5).to({state:[{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170}]},1).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.6,0,275.8,163.2);


(lib.band = function() {
	this.initialize();

	// Layer 1
	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f().s("#000000").ss(1.5,1,1).p("A08HGQBqjoC1jGQG1ndJoAAQJpAAG1HdQC1DGBqDo");
	this.shape_174.setTransform(134.1,45.4);

	this.addChild(this.shape_174);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,268.3,90.9);


(lib.close_btn = function() {
	this.initialize();

	// Layer 1
	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f().s("#FFFFFF").ss(4.9,1,1).p("AhBhBIBBBBIBChBABCBCIhChCIhBBC");
	this.shape_175.setTransform(16,17);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#666666").s("rgba(0,0,0,0.227)").ss(0.1,1,1).p("AB0B0QgwAxhEAAQhDAAgxgxQgwgwAAhEQAAhDAwgxQAxgwBDAAQBEAAAwAwQAxAxAABDQAABEgxAwIAAAA").cp();
	this.shape_176.setTransform(16.5,16.5);

	this.addChild(this.shape_176,this.shape_175);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,33,33);


(lib.face = function() {
	this.initialize();

	// Layer 1
	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("rgba(0,0,0,0.106)").ss(1.5,1,1).p("AGJgEQmMAWmFgX");
	this.shape_177.setTransform(114.1,227.6);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#CCCCCC").s().p("AKPOUQmOAZmEgaQhSgHgQhCIg2kDQgNgZiDAuQhGAXhLgVQhTgUgOg5QgLgwAfg/QAKgtgWgYIhGg4QgdgXBDhHQhLgjARghQAFgFAFgIQASgfgIg6QAAgBAAgBQhCAAgNgGQhsgnBBhcQBBhbAmhkQAnhlgPg8QgPg7gGgaQgBgMgBgMIAAAAQgJjEB5igQADgCAFAGQABABAAAAQExGGSxEYQgcA5glA0QhVBzgoA5QgUAdg5BLQgvA9AOB6QADARADASQADASAEASQATBeBbFZQACAIADAIQAMA9g/ANIAAAA").cp();
	this.shape_178.setTransform(87.9,135.3);

	this.instance_4 = new lib.brain();
	this.instance_4.setTransform(103.4,69.4,0.709,0.709,0,0,0,108,99.1);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#333333").s().p("ArwlUQExGNSxEdQr8mYrnkTQABAAAAABIAAAA").cp();
	this.shape_179.setTransform(100.4,76.3,1,1,0,0,0,0.1,0.5);

	// Layer 2
	this.instance_5 = new lib.Bitmap1();
	this.instance_5.setTransform(-18,221.9);

	this.addChild(this.instance_5,this.shape_179,this.instance_4,this.shape_178,this.shape_177);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18,0,271,237.9);


(lib.book1_Anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{close:42},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_41 = function() {
		this.stop();
	}
	this.frame_105 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(41).call(this.frame_41).wait(64).call(this.frame_105));

	// Layer 2
	
	this.text = new cjs.Text("Robert Ennis: Critical\n\nThinking is reasonable, \nreflective, thinking that is focused on deciding what to believe or do.", "16px Whitney Semibold", "#666666");
	this.text.lineHeight = 18;
	this.text.lineWidth = 159;
	this.text.setTransform(-48.6,75.4);
	
	
	

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text}]},24).to({state:[]},32).wait(50));

	// Layer 5
	this.instance_6 = new lib.book3closed("synched",0,false);
	this.instance_6.setTransform(43.9,299.3,1.765,1.765,0,0,0,78.9,160);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(47).to({startPosition:0,_off:false},0).to({_off:true},25).wait(34));

	// Layer 1
	this.instance_7 = new lib.book3_1("single",0);
	this.instance_7.setTransform(34.3,118.1,0.785,0.785,55.8,0,0,78.9,160);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({scaleX:1.77,scaleY:1.77,rotation:0,x:43.9,y:299.3},19,cjs.Ease.get(1)).wait(1).to({mode:"synched",loop:false},0).to({_off:true},27).wait(25).to({mode:"single",_off:false},0).to({scaleX:0.79,scaleY:0.79,rotation:55.8,x:34.3,y:118.1},19).wait(15));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,169.2,165);


(lib.book1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance_8 = new lib.book3();
	this.instance_8.setTransform(34,14.4,0.728,0.728,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8,p:{scaleX:0.728,rotation:0.4,skewX:0,skewY:0,x:34,y:14.4}}]}).to({state:[{t:this.instance_8,p:{scaleX:0.598,rotation:0,skewX:0.4,skewY:-1.7,x:27.6,y:13.9}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.426,rotation:0,skewX:0.4,skewY:-5.3,x:23.2,y:14.3}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.207,rotation:0,skewX:0.4,skewY:-5.3,x:22.5,y:13}}]},1).to({state:[{t:this.instance_8,p:{scaleX:0.021,rotation:0,skewX:0.4,skewY:-5.3,x:19.7,y:12.3}}]},1).to({state:[]},1).wait(9));

	// Layer 7
	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-1,0,3.7,0).s().p("AAnrtIAAXbIhNAAIAA3bIBNAA").cp();
	this.shape_180.setTransform(13.6,81.6);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-2.3,0,7.5,0).s().p("ABQrtIAAXbIifAAIAA3bICfAA").cp();
	this.shape_181.setTransform(9.6,81.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-2.9,0,9.2,0).s().p("ABjLuIjFAAIAA3bIDFAAIAAXb").cp();
	this.shape_182.setTransform(7.7,81.6);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_183.setTransform(1.4,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_180}]},5).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).wait(6));

	// Layer 9
	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_184.setTransform(27.7,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_184}]},5).to({state:[{t:this.shape_184}]},3).wait(6));

	// Layer 8
	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AhONSIAA6jICdBdIAAXaIidBs").cp();
	this.shape_185.setTransform(9.3,82.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("ADSLrImjBWIAA6BIGjBRIAAXa").cp();
	this.shape_186.setTransform(-3.6,81.8);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AFeLrIq8BBIAA5XIK8A8IAAXa").cp();
	this.shape_187.setTransform(-17.7,81.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AHmLzIvLArIAA47IPLA2IAAXa").cp();
	this.shape_188.setTransform(-31.3,81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_185}]},5).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[]},1).wait(5));

	// Layer 1
	this.instance_9 = new lib.Tween1("synched",0);
	this.instance_9.setTransform(83.1,81.6);

	this.instance_10 = new lib.Tween2("synched",0);
	this.instance_10.setTransform(67.5,81.6);

	this.instance_11 = new lib.Tween3("synched",0);
	this.instance_11.setTransform(51.9,81.6);

	this.instance_12 = new lib.Tween4("synched",0);
	this.instance_12.setTransform(36.2,81.6);

	this.instance_13 = new lib.Tween5("synched",0);
	this.instance_13.setTransform(20.6,81.6);

	this.instance_14 = new lib.Tween6("synched",0);
	this.instance_14.setTransform(6.5,81.6);

	this.instance_15 = new lib.Tween7("synched",0);
	this.instance_15.setTransform(-7.6,81.6);

	this.instance_16 = new lib.Tween8("synched",0);
	this.instance_16.setTransform(-21.9,81.6);

	this.instance_17 = new lib.Tween9("synched",0);
	this.instance_17.setTransform(-36.1,81.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_189.setTransform(23.3,81.6);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_190.setTransform(1.4,81.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AUYLuMgovAAAIAA3bMAovAAAIAAXb").cp();
	this.shape_191.setTransform(11,81.6);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#346C67").s().p("AA+suIAAZdIh7AAIAA5dIB7AA").cp();
	this.shape_192.setTransform(13.3,81.6);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#559C96").s().p("AVjsuIAAZdIinAAIxJAAIgsAAI2pAAIAA5dIWpAAIAmAAIRPAAICnAA").cp();
	this.shape_193.setTransform(11.3,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9}]}).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[]},1).to({state:[{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189}]},4).wait(1));

	// Layer 4
	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#7FC9C2").s().p("AAMsuIAAZdIgXAAIAA5dIAXAA").cp();
	this.shape_194.setTransform(15.7,0.1,1,1,0,0,0,0,-81.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#466966").s().p("AAXsuIAAZdIgtAAIAA5dIAtAA").cp();
	this.shape_195.setTransform(14,0.1,1,1,0,0,0,0,-81.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#559C96").s().p("AA4suIAAZdIhBAAIgugnIAA4PIAugnIBBAA").cp();
	this.shape_196.setTransform(11.4,81.6);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#559C96").s().p("AgJsuIBBAAIAAZdIhBAAIgugnIAA4PIAugn").cp();
	this.shape_197.setTransform(11.4,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_196},{t:this.shape_195},{t:this.shape_194}]}).to({state:[{t:this.shape_197},{t:this.shape_195},{t:this.shape_194}]},8).to({state:[]},1).wait(5));

	// Layer 3
	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],5.4,0,-11.1,0).s().p("AhjrtIAAXbIDIAAIAA3bIjIAA").cp();
	this.shape_198.setTransform(25.9,81.6);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AqMLuIUZAAIAA3bI0ZAAIAAXb").cp();
	this.shape_199.setTransform(77.6,81.6,0.979,1);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#346C67").s().p("AA9suIAAZdIh5AAIAA5dIB5AA").cp();
	this.shape_200.setTransform(16.2,81.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#559C96").s().p("AKdsuIAAZdIikAAIwwAAIgrAAIg6AAIAA5dIA6AAIAmAAIQ1AAICkAA").cp();
	this.shape_201.setTransform(82.2,81.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_202.setTransform(23.3,81.6);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_203.setTransform(1.4,81.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AUYLuMgovAAAIAA3bMAovAAAIAAXb").cp();
	this.shape_204.setTransform(11,81.6);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#346C67").s().p("AA+suIAAZdIh7AAIAA5dIB7AA").cp();
	this.shape_205.setTransform(13.3,81.6);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#559C96").s().p("AKrsuIAAZdIinAAIxHAAIgsAAIg7AAIAA5dIA7AAIAmAAIRNAAICnAA").cp();
	this.shape_206.setTransform(80.8,81.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#559C96").s().p("AVjsuIAAZdIinAAIxJAAIgsAAIg3AAIgxAAI1BAAIAA5dIVBAAIAxAAIA3AAIAmAAIRPAAICnAA").cp();
	this.shape_207.setTransform(11.3,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198}]}).to({state:[{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202}]},8).to({state:[{t:this.shape_207},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,0,143.4,163.2);


(lib.book_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 2
	this.instance_18 = new lib.book2();
	this.instance_18.setTransform(36,13.3,0.551,0.551);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18,p:{scaleX:0.551,skewY:0,x:36,y:13.3}}]}).to({state:[{t:this.instance_18,p:{scaleX:0.41,skewY:-3.8,x:32.7,y:13.8}}]},1).to({state:[{t:this.instance_18,p:{scaleX:0.296,skewY:-9.1,x:27.3,y:14.5}}]},1).to({state:[{t:this.instance_18,p:{scaleX:0.157,skewY:-16.8,x:22.4,y:13.9}}]},1).to({state:[{t:this.instance_18,p:{scaleX:0.031,skewY:-16.8,x:17.1,y:14}}]},1).to({state:[]},1).wait(9));

	// Layer 7
	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-1,0,3.7,0).s().p("AAnrtIAAXbIhNAAIAA3bIBNAA").cp();
	this.shape_208.setTransform(13.6,81.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-2.3,0,7.5,0).s().p("ABQrtIAAXbIifAAIAA3bICfAA").cp();
	this.shape_209.setTransform(9.6,81.6);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-2.9,0,9.2,0).s().p("ABjLuIjFAAIAA3bIDFAAIAAXb").cp();
	this.shape_210.setTransform(7.7,81.6);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_211.setTransform(1.4,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_208}]},5).to({state:[{t:this.shape_209}]},1).to({state:[{t:this.shape_210}]},1).to({state:[{t:this.shape_211}]},1).wait(6));

	// Layer 9
	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_212.setTransform(27.7,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_212}]},5).to({state:[{t:this.shape_212}]},3).wait(6));

	// Layer 8
	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AhONSIAA6jICdBdIAAXaIidBs").cp();
	this.shape_213.setTransform(9.3,82.3);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("ADSLrImjBWIAA6BIGjBRIAAXa").cp();
	this.shape_214.setTransform(-3.6,81.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AFeLrIq8BBIAA5XIK8A8IAAXa").cp();
	this.shape_215.setTransform(-17.7,81.8);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AHmLzIvLArIAA47IPLA2IAAXa").cp();
	this.shape_216.setTransform(-31.3,81);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_213}]},5).to({state:[{t:this.shape_214}]},1).to({state:[{t:this.shape_215}]},1).to({state:[{t:this.shape_216}]},1).to({state:[]},1).wait(5));

	// Layer 1
	this.instance_19 = new lib.Tween10("synched",0);
	this.instance_19.setTransform(83.1,81.6);

	this.instance_20 = new lib.Tween11("synched",0);
	this.instance_20.setTransform(67.5,81.6);

	this.instance_21 = new lib.Tween12("synched",0);
	this.instance_21.setTransform(51.9,81.6);

	this.instance_22 = new lib.Tween13("synched",0);
	this.instance_22.setTransform(36.2,81.6);

	this.instance_23 = new lib.Tween14("synched",0);
	this.instance_23.setTransform(20.6,81.6);

	this.instance_24 = new lib.Tween15("synched",0);
	this.instance_24.setTransform(6.5,81.6);

	this.instance_25 = new lib.Tween16("synched",0);
	this.instance_25.setTransform(-7.6,81.6);

	this.instance_26 = new lib.Tween17("synched",0);
	this.instance_26.setTransform(-21.9,81.6);

	this.instance_27 = new lib.Tween18("synched",0);
	this.instance_27.setTransform(-36.1,81.6);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_217.setTransform(23.3,81.6);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_218.setTransform(1.4,81.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AUYLuMgovAAAIAA3bMAovAAAIAAXb").cp();
	this.shape_219.setTransform(11,81.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#346C67").s().p("AA+suIAAZdIh7AAIAA5dIB7AA").cp();
	this.shape_220.setTransform(13.3,81.6);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#559C96").s().p("AVjsuIAAZdIinAAIxJAAIgsAAI2pAAIAA5dIWpAAIAmAAIRPAAICnAA").cp();
	this.shape_221.setTransform(11.3,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19}]}).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[]},1).to({state:[{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217}]},4).wait(1));

	// Layer 4
	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#7FC9C2").s().p("AAMsuIAAZdIgXAAIAA5dIAXAA").cp();
	this.shape_222.setTransform(15.7,0.1,1,1,0,0,0,0,-81.5);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#466966").s().p("AAXsuIAAZdIgtAAIAA5dIAtAA").cp();
	this.shape_223.setTransform(14,0.1,1,1,0,0,0,0,-81.5);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#559C96").s().p("AA4suIAAZdIhBAAIgugnIAA4PIAugnIBBAA").cp();
	this.shape_224.setTransform(11.4,81.6);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#559C96").s().p("AgJsuIBBAAIAAZdIhBAAIgugnIAA4PIAugn").cp();
	this.shape_225.setTransform(11.4,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_224},{t:this.shape_223},{t:this.shape_222}]}).to({state:[{t:this.shape_225},{t:this.shape_223},{t:this.shape_222}]},8).to({state:[]},1).wait(5));

	// Layer 3
	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],7.8,0,-8.3,0).s().p("AhjrtIAAXbIDIAAIAA3bIjIAA").cp();
	this.shape_226.setTransform(25.9,81.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AqMLuIUZAAIAA3bI0ZAAIAAXb").cp();
	this.shape_227.setTransform(77.6,81.6,0.979,1);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#346C67").s().p("AA9suIAAZdIh5AAIAA5dIB5AA").cp();
	this.shape_228.setTransform(16.2,81.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#559C96").s().p("AKdsuIAAZdIikAAIwwAAIgrAAIg6AAIAA5dIA6AAIAmAAIQ1AAICkAA").cp();
	this.shape_229.setTransform(82.2,81.6);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.lf(["#FFFFFF","#C6C6C6"],[0,1],8,0,-8.5,0).s().p("AhmrtIAAXbIDNAAIAA3bIjNAA").cp();
	this.shape_230.setTransform(23.3,81.6);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.lf(["#FFFFFF","#C6C6C6","#A19E9E"],[0,0.929,1],-3.6,0,11.5,0).s().p("AB7LuIj1AAIAA3bID1AAIAAXb").cp();
	this.shape_231.setTransform(1.4,81.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AUYLuMgovAAAIAA3bMAovAAAIAAXb").cp();
	this.shape_232.setTransform(11,81.6);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#346C67").s().p("AA+suIAAZdIh7AAIAA5dIB7AA").cp();
	this.shape_233.setTransform(13.3,81.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#559C96").s().p("AKrsuIAAZdIinAAIxHAAIgsAAIg7AAIAA5dIA7AAIAmAAIRNAAICnAA").cp();
	this.shape_234.setTransform(80.8,81.6);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#559C96").s().p("AVjsuIAAZdIinAAIxJAAIgsAAIg3AAIgxAAI1BAAIAA5dIVBAAIAxAAIA3AAIAmAAIRPAAICnAA").cp();
	this.shape_235.setTransform(11.3,81.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226}]}).to({state:[{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230}]},8).to({state:[{t:this.shape_235},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230}]},1).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(5.8,0,143.4,163.2);


(lib.book3_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{close:43},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_42 = function() {
		this.stop();
	}
	this.frame_91 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(42).call(this.frame_42).wait(49).call(this.frame_91));

	// Layer 2
	this.text_1 = new cjs.Text("Michael Scriven:\n\nCritical thinking is skilled and active interpretation and evaluation of observations \nand communications, information and argumentation.", "16px Whitney Semibold", "#666666");
	this.text_1.lineHeight = 16;
	this.text_1.lineWidth = 203;
	this.text_1.setTransform(358.4,100.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_1}]},24).to({state:[]},27).to({state:[]},40).wait(1));

	// Layer 5
	this.instance_28 = new lib.book1closed("synched",0,false);
	this.instance_28.setTransform(454.8,323.9,1.765,1.765,0,0,0,77.4,167.1);
	this.instance_28._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(42).to({startPosition:0,_off:false},0).to({_off:true},18).wait(32));

	// Layer 1
	this.instance_29 = new lib.book1_1("single",0);
	this.instance_29.setTransform(138.2,124.4,0.785,0.785,-52.4,0,0,77.4,167);

	this.timeline.addTween(cjs.Tween.get(this.instance_29).to({regY:167.1,scaleX:1.77,scaleY:1.77,rotation:0,x:454.8,y:322.4},19,cjs.Ease.get(1)).wait(1).to({y:323.9,mode:"synched",loop:false},0).to({_off:true},22).wait(18).to({y:322.4,mode:"single",_off:false},0).to({regY:167,scaleX:0.79,scaleY:0.79,rotation:-52.3,x:138.2,y:124.4},19).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.1,167.2);


(lib.book2_anim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{close:50},true);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_49 = function() {
		this.stop();
	}
	this.frame_95 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(49).call(this.frame_49).wait(46).call(this.frame_95));

	// Layer 2
	this.text_2 = new cjs.Text("Richard Paul: \nCritical thinking is the mode of thinking (about any subject, content, or problem) in which the thinking improves the quality of his or her thinking by skillfully taking charge of the structure’s inherent in thinking and imposing intellectual standards upon them. You will most likely encounter this definition in your coursework. ", "16px Whitney Semibold", "#666666");
	this.text_2.lineHeight = 16;
	this.text_2.lineWidth = 194;
	this.text_2.setTransform(126.4,104.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text_2}]},24).to({state:[]},34).to({state:[]},37).wait(1));

	// Layer 5
	this.instance_30 = new lib.book_2closed("synched",0,false);
	this.instance_30.setTransform(227.9,375.4,1.765,1.765,0,0,0,79.1,162.2);
	this.instance_30._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(49).to({startPosition:0,_off:false},0).to({_off:true},22).wait(25));

	// Layer 1
	this.instance_31 = new lib.book_2("single",0);
	this.instance_31.setTransform(57.5,127.3,0.785,0.785,0,0,0,79.1,162.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_31).to({scaleX:1.77,scaleY:1.77,x:227.9,y:375.4},19,cjs.Ease.get(1)).wait(1).to({mode:"synched",loop:false},0).to({_off:true},29).wait(22).to({mode:"single",_off:false},0).to({scaleX:0.79,scaleY:0.79,x:57.5,y:127.3},19).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112.5,128);


(lib.mc_books = function() {
	this.initialize();

	// Layer 3
	this.mcBook2 = new lib.book1_Anim();
	this.mcBook2.setTransform(494,160.2,1,1,0,0,0,84.5,82.5);

	// Layer 2
	this.mcBook1 = new lib.book2_anim();
	this.mcBook1.setTransform(284.1,64,1,1,0,0,0,56.2,64);

	// Layer 1
	this.mcBook0 = new lib.book3_anim();
	this.mcBook0.setTransform(85,154,1,1,0,0,0,85,83.6);

	this.addChild(this.mcBook0,this.mcBook1,this.mcBook2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,578.6,242.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
if (!window.lib) { window.lib = {}; }

var p; // shortcut to reference prototypes

// stage content:
(lib.understanding = function() {
	this.initialize();

	// Layer 1
	this.understanding = new lib.understanding_1();
	this.understanding.setTransform(512,383.8,1,1,0,0,0,512,383.8);

	this.addChild(this.understanding);
}).prototype = p = new Container();
p.constructor = lib.understanding;
p.nominalBounds = new Rectangle(-145.9,0,1170,767.6);


// symbols:
(lib.play = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.play_1();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.play;
p.nominalBounds = new Rectangle(0,0,94,94);

(lib.mcStartScreen = function() {
	this.initialize();

	// Layer 1
	this.mcPlay = new lib.play();
	this.mcPlay.setTransform(512,245.5,1,1,0,0,0,47,47);

	this.shape = new Shape();
	this.shape.graphics.f("rgba(0,0,0,0.337)").p("EBQBgmVMif/AAAMAAABMtMCf/AAAMAAAhMt").f();
	this.shape.setTransform(512,245.5);

	this.addChild(this.shape,this.mcPlay);
}).prototype = p = new Container();
p.constructor = lib.mcStartScreen;
p.nominalBounds = new Rectangle(0,0,1024,491);

(lib.base1A = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#005df0","#007bf0","#008cee","#4fade9"],[0,0.494,0.553,1],-79.2,13,-79.2,-12.9).p("AGIAeIAAg7QAAgqgegdQgcgcgpgBQgBAAAAAAIhZAAIAAEDIBZAAQAAAAABAAQAogBAdgcQAegeAAgp").lf(["#005df0","#007bf0","#008cee","#4fade9"],[0,0.494,0.553,1],-78.2,13,-78.2,-12.9).p("ABniBIAAEDIBkAAIAAkDIhkAA").lf(["#005df0","#007bf0","#008cee","#4fade9"],[0,0.494,0.553,1],-59.2,13,-59.2,-12.9).p("ABniBIkaAAIAAEDIEaAAIAAkD").lf(["#005df0","#007bf0","#008cee","#4fade9"],[0,0.494,0.553,1],0.7,13,0.7,-12.9).p("AkiiBQgqAAgdAdQgdAdAAAqIAAA7QAAApAdAeQAdAdAqAAIBvAAIAAkDIhvAA").f();
	this.shape.setTransform(38.1,13);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.base1A;
p.nominalBounds = new Rectangle(-0.9,0,78.3,26);

(lib.closeBtn = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cross();
	this.instance.setTransform(-0.9,-0.9);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.closeBtn;
p.nominalBounds = new Rectangle(-0.9,-0.9,25,25);

(lib.CrossMark = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.tick();
	this.instance.setTransform(-30.4,-30.4);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.CrossMark;
p.nominalBounds = new Rectangle(-30.4,-30.4,60,60);

(lib.okay_button = function() {
	this.initialize();

	// Layer 4
	this.text = new Text("OK", "bold 16px HelveticaNeueLT Std", "#ffffff");
	this.text.textAlign = "center";
	this.text.textBaseline = "top";
	this.text.lineHeight = 16;
	this.text.lineWidth = 78;
	this.text.setTransform(38.3,1.7);
	this.text.shadow = new Shadow("#000000",1,1,3);

	// Layer 6
	this.shape = new Shape();
	this.shape.graphics.lf(["#1c4069","#004187","#004793","#024997","#67a3e5","#70a5df","#3982d2"],[0,0.102,0.204,0.231,0.8,0.831,1],0.4,13,0.4,-12.9).p("AGIAeIAAg7QAAgqgdgdQgbgbgmgCQgDAAgDAAIpHAAQgqAAgdAdQgdAdAAAqIAAA7QAAApAdAeQAeAdApAAIJHAAQADAAADAAQAlgCAcgbQAdgeAAgp").f();
	this.shape.setTransform(38.3,13.3);

	// Layer 5
	this.instance = new lib.base1A();
	this.instance.setTransform(38.8,13,1,1,0,0,0,38.8,13);
	this.instance.shadow = new Shadow("#666666",1,1,2);

	this.addChild(this.instance,this.shape,this.text);
}).prototype = p = new Container();
p.constructor = lib.okay_button;
p.nominalBounds = new Rectangle(-0.9,0,78.4,26.3);

(lib.TickMark = function() {
	this.initialize();

	// Layer 3
	this.shape = new Shape();
	this.shape.graphics.f("#66cc00").p("ACQiQQg3Agg6A7Qg6A7glA+IgHgPQgUgugRAAQgUAAgYAZQAOAEAMAPQALAPANAfIAGAOQAKAYADAKQAHgHAUgOIARgLQAehAA4hJQA6hJAvgkIgIgL").f();
	this.shape.setTransform(-0.5,0.7);

	// Layer 1
	this.shape_1 = new Shape();
	this.shape_1.graphics.f().s("#66cc00").ss(4,1,1,3).p("AjFjFQBShSBzAAQB0AABSBSQBSBSAABzQAAB0hSBSQhSBSh0AAQhzAAhShSQhShSAAh0QAAhzBShS").cp();
	this.shape_1.setTransform(-0.4,4.2);

	this.shape_2 = new Shape();
	this.shape_2.graphics.lf(["#ffffff","#ffffff"],[0,1],-27.9,0,28,0).p("AjFjFQhSBSAABzQAAB0BSBSQBSBSBzAAQB0AABShSQBShSAAh0QAAhzhShSQhShSh0AAQhzAAhSBS").f();
	this.shape_2.setTransform(-0.4,4.2);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new Container();
p.constructor = lib.TickMark;
p.nominalBounds = new Rectangle(-28.4,-23.7,56,56);

(lib.boxes_01 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.fourBoxes();
	this.instance.setTransform(-7,0.6);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.boxes_01;
p.nominalBounds = new Rectangle(-7,0.6,183,120);

(lib.dogs_101 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#431d12","#5b403e"],[0,1],41.3,-3.3,41.4,-9.6).p("AMnhPIAGAoIAEALIBLAAIABgFQgGgDgGgDIAAgqQAFADAFADIAAgFIgDgIIhQACIgBAH").lf(["#431d12","#5b403e"],[0,1],-531.4,-61.2,-531.4,-61.2).p("AMnhPQthEptBk+IABALIACAYIgCAIQNREzNWkhIgGgo").f();
	this.shape.setTransform(437.7,104.4);

	this.shape_1 = new Shape();
	this.shape_1.graphics.lf(["#431d12","#5b403e"],[0,1],42.4,-3.5,42.3,-9.7).p("AOHhNIgBgKIgBgHIgDgIIhPAEIgBAHIAGAoIAEALIBMgCIAAgCIACgIIgDgZ").lf(["#431d12","#5b403e"],[0,1],-531.5,-46.1,-531.5,-46.1).p("AMyhbQs6E0stkeIABACIABAKIACAZIAAABQM4EYMxksIgGgo").lf(["#431d12","#5b403e"],[0,1],-129.8,-1.5,-129.9,-7.8).p("As1hLIgDgIIhPAEIgCAHIAHAoIAEALIBMgCIAAgCIABgGIAAgBIgCgZIgBgKIgBgCIAAgG").f();
	this.shape_1.setTransform(258.8,104);

	this.shape_2 = new Shape();
	this.shape_2.graphics.lf(["#431d12","#805e5c"],[0,1],55.7,1.9,55.9,-4.3).p("AL3ANQgPABgPABQgvAEgyAEQlgAXjegDQivgDjjgeQhfgLkzgyIgBAgQCEAREJAiQDkAaCoADQDHAFFtgSQA4gDBAgCQAPgCAPgBQAIAAAIgBIgBgbQgHABgJAA").lf(["#431d12","#5b403e"],[0,1],-58.1,-4.1,-58.4,-10.4).p("ArqgzIgBgKIgbACIAAAsIAZAEIACgHIAAgBIABgg").f();
	this.shape_2.setTransform(99.3,95.9);

	this.shape_3 = new Shape();
	this.shape_3.graphics.lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AghjpQAiAFAjgFQABgGABgIQgjgQgiAVQgBAFgBAE").p("AgkjWQgTBugCBJQgEBbARBVQAOAUAVANQAMAIAZAMQgShzADhmQABhTAThwQgmAIgfgI").lf(["#ffffff","#000000"],[0,1],11.8,11.5,-10.7,10.1).p("AgkjWQAfAIAmgIQAAAAACAAQAFgCAGgCIAHgbIgPgCIAAABIAAAMQgBAAgBABQgjAFgigFQgBAAgCgBIACgJIgPAAIAAABIgCAXIANAEQABABABAA").lf(["#662e1d","#723531"],[0,1],-265.6,-51.6,-265.6,-51.6).p("AgJCyQgVgNgOgUIAMA3QAZAeAXAPQAMAIAHAAIgCgTIAAgBQgBgDAAgDQgBgCAAAAQgDgbAAAAQgZgMgMgI").f("#460000").p("AAhDqIACATQAQADAIgGIgagQ").f();
	this.shape_3.setTransform(175.1,91.5);

	this.instance = new lib.dogMc();
	this.instance.setTransform(56.8,27.7);

	this.shape_4 = new Shape();
	this.shape_4.graphics.lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFgBAEQAiAGAjgGQABgGABgI").p("AANgTQABhTAThwQgmAIgfgIQgTBugCBKQgEBaARBVQAOAUAVANQAMAIAZAMQgShyADhn").lf(["#ffffff","#000000"],[0,1],11.8,11.6,-10.7,10.2).p("AAkjpQgjAGgigGQgBAAgCAAIACgKIgPAAIAAABIgCAXIANAEQABABABAAQAfAIAmgIQAAAAACAAQAFgCAGgCIAHgbIgPgCIAAABIAAANQgBAAgBAA").lf(["#662e1d","#723531"],[0,1],-265.6,-51.6,-265.6,-51.6).p("AAcDGQgZgMgMgIQgVgNgOgUIAMA3QAZAeAXAPQAMAIAHABIgCgUIAAAAQgBgEAAgDQgBgCAAAAQgDgbAAAA").f("#460000").p("AAhDqIACAUQAQADAIgHIgagQ").f();
	this.shape_4.setTransform(199.3,69.6);

	this.instance_1 = new lib.dogMc();
	this.instance_1.setTransform(81,5.8);

	this.shape_5 = new Shape();
	this.shape_5.graphics.lf(["#ffffff","#000000"],[0,1],11.9,11.6,-10.6,10.2).p("AAkjpQgjAGgigGQgBAAgCgBIACgJIgPAAIAAABIgCAXIANAEQABABABAAQAfAJAmgJQAAAAACAAQAGgCAFgCIAHgbIgPgCIAAABIAAAMQgBAAgBAB").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFgBAEQAiAGAjgGQABgGABgI").p("Ag5geQgEBaASBVQANAUAVANQAMAIAZAMQgShyADhnQABhTAThwQgmAJgfgJQgTBugCBK").lf(["#662e1d","#723531"],[0,1],-265.7,-51.6,-265.7,-51.6).p("AAcDGQgZgMgMgIQgVgNgNgUIALA3QAZAeAXAPQAMAIAIABIgDgUIAAAAQgBgEAAgDQgBgCAAAAQgDgbAAAA").f("#460000").p("AA7D6IgagQIADAUQAPADAIgH").f();
	this.shape_5.setTransform(347.6,92.8);

	this.instance_2 = new lib.dogMc();
	this.instance_2.setTransform(229.3,29);

	this.shape_6 = new Shape();
	this.shape_6.graphics.lf(["#431d12","#5b403e"],[0,1],-504.3,-78.1,-504.3,-78.1).p("AoFgyQAXAIAWAIQHrCfHzgsIAAgmQn4AvnmikQgWgIgXgIIAAAo").f();
	this.shape_6.setTransform(263.6,94.2);

	this.shape_7 = new Shape();
	this.shape_7.graphics.lf(["#431d12","#5b403e"],[0,1],46.5,-10.1,46.2,-16.3).p("ANdiBIAAAAIACAIIABACIAFAcIAAACIAAAAIACAGIAAABIACAEIBMgDIABgKIAAgBIgDgXIgCgRIAAgBIgCgIIhQAFIgBAFIgBAC").lf(["#431d12","#5b403e"],[0,1],-96,4.1,90.6,4.1).p("ANdiBQsiFdvwirIAPAkQOMCrOBlSIAAgBIgCgGIAAAAIAAgCIgFgcIgBgCIgCgIIAAAA").f();
	this.shape_7.setTransform(619.1,92);

	this.shape_8 = new Shape();
	this.shape_8.graphics.lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AggjpQAhAGAjgGQABgGABgIQgjgQgiAVQgBAFAAAE").p("AgrCRQAOAUAUANQAMAIAaAMQgThyADhnQAChTAShwQgmAIgegIQgTBugDBKQgEBaASBV").lf(["#ffffff","#000000"],[0,1],11.9,11.6,-10.6,10.2).p("AAjjWQAGgCAGgCIAGgbIgOgCIAAABIAAANQgCAAgBAAQgjAGghgGQgCAAgBAAIABgKIgPAAIAAABIgCAXIANAEQABABACAAQAeAIAmgIQABAAABAA").lf(["#662e1d","#723531"],[0,1],-265.6,-51.6,-265.6,-51.6).p("AgrCRIALA3QAZAeAYAPQAMAIAHABIgDgUIAAAAQgBgEAAgDQAAgCAAAAQgDgbAAAAQgagMgMgIQgUgNgOgU").f("#460000").p("AA7D6IgagQIADAUQAPADAIgH").f();
	this.shape_8.setTransform(712.3,80.6);

	this.instance_3 = new lib.dogMc();
	this.instance_3.setTransform(594,16.8);

	this.shape_9 = new Shape();
	this.shape_9.graphics.lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AggjpQAhAGAjgGQABgGABgIQgjgQgiAVQgBAFAAAE").p("Ag5geQgEBaASBVQAOAUAUANQAMAIAaAMQgThyADhnQAChTAShwQgmAJgegJQgTBugDBK").lf(["#ffffff","#000000"],[0,1],11.9,11.6,-10.6,10.2).p("AgjjWQAeAJAmgJQABAAABAAQAGgCAGgCIAGgbIgOgCIAAABIAAAMQgCAAgBABQgjAGghgGQgCAAgBgBIABgJIgPAAIAAABIgCAXIANAEQABABACAA").lf(["#662e1d","#723531"],[0,1],-265.6,-51.6,-265.6,-51.6).p("AAdDGQgagMgMgIQgUgNgOgUIALA3QAZAeAYAPQAMAIAHABIgDgUIAAAAQgBgEAAgDQAAgCAAAAQgDgbAAAA").f("#460000").p("AAhDqIADAUQAPADAIgHIgagQ").f();
	this.shape_9.setTransform(526.1,92.8);

	this.instance_4 = new lib.dogMc();
	this.instance_4.setTransform(407.8,29);

	this.shape_10 = new Shape();
	this.shape_10.graphics.lf(["#ffffff","#000000"],[0,1],11.8,11.5,-10.7,10.1).p("AAkjpQgjAFgigFQgBAAgCgBIACgJIgPAAIAAABIgCAWIANAFQABAAABABQAfAIAmgIQAAgBACAAQAFgBAGgCIAHgbIgPgCIAAABIAAAMQgBAAgBAB").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFgBAEQAiAFAjgFQABgHABgH").p("Ag5gfQgEBbARBVQAOATAVAOQAMAIAZAMQgShzADhmQABhTAThwQgmAIgfgIQgTBugCBJ").lf(["#662e1d","#723531"],[0,1],-265.7,-51.6,-265.7,-51.6).p("AAcDGQgZgMgMgIQgVgOgOgTIAMA3QAZAeAXAPQAMAIAHAAIgCgTIAAgBQgBgDAAgDQgBgCAAgBQgDgaAAAA").f("#460000").p("AAhDqIACATQAQADAIgGIgagQ").f();
	this.shape_10.setTransform(539.2,76.2);

	this.instance_5 = new lib.dogMc();
	this.instance_5.setTransform(420.9,12.4);

	this.shape_11 = new Shape();
	this.shape_11.graphics.lf(["#431d12","#5b403e"],[0,1],-502.3,-28.9,-502.3,-28.9).p("AJQgCQo5Buo4ipQgWgHgWgGQgCgBgCgBIABACIAIAqQAVAGAVAGQJACgIxhpIgDgl").f();
	this.shape_11.setTransform(618.3,84.4);

	this.shape_12 = new Shape();
	this.shape_12.graphics.lf(["#ffffff","#000000"],[0,1],11.9,11.6,-10.6,10.2).p("AAkjpQgjAGgigGQgBAAgCAAIACgKIgPAAIAAABIgCAXIANAEQABABABAAQAfAJAmgJQAAAAACAAQAGgCAFgCIAHgbIgPgBIAAAAIAAANQgBAAgBAA").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj2QgjgRgiAWQgBAEgBAEQAiAGAjgGQABgGABgH").p("AgrCSQANATAVANQAMAIAZAMQgShyADhmQABhUAThwQgmAJgfgJQgTBugCBKQgEBaASBW").lf(["#662e1d","#723531"],[0,1],-265.7,-51.5,-265.7,-51.5).p("AggDIQAZAfAXAOQAMAIAIABIgDgUIAAAAQgBgDAAgEQgBgBAAgBQgDgbAAAAQgZgMgMgIQgVgNgNgTIALA2").f("#460000").p("AAhDqIADAUQAPADAIgGIgagR").f();
	this.shape_12.setTransform(365.6,68.6);

	this.instance_6 = new lib.dogMc();
	this.instance_6.setTransform(273,4.9);

	this.shape_13 = new Shape();
	this.shape_13.graphics.lf(["#431d12","#5b403e"],[0,1],-501.4,39.1,-501.4,39.1).p("AJMhPQokC3pLhaQgWgEgXgDQgBgBgCAAIAAACIANAoQAWADAXADQJPBRIeixIgIgl").f();
	this.shape_13.setTransform(447,86.9);

	this.shape_14 = new Shape();
	this.shape_14.graphics.lf(["#431d12","#5b403e"],[0,1],19.5,-0.1,19.3,-6.4).p("AgOgWIAAASIgBAZIAbAEIACgHIAAgBIABgVIAAgKIAAgKIgdAC").f();
	this.shape_14.setTransform(-12.7,84.5);

	this.shape_15 = new Shape();
	this.shape_15.graphics.lf(["#431d12","#805e5c"],[0,1],30.4,1.6,30.3,-4.6).p("ACoArQEfgPEegdIgIgpQmLBAmFALIhGACQBWAABUgDQA8gCA5gBIACAO").lf(["#431d12","#805e5c"],[0,1],59.3,1,59.2,-5.1).p("ACmAdQg5ABg8ACQhUADhWAAQi2AAi1gKQirgKitgRIAAAeQCuAOCrAGQC2AHB4gBQB5gBAmgBQAogBA1gCIBhgGIgCgO").lf(["#431d12","#5b403e"],[0,1],30.4,1.6,30.3,-4.6).p("AM2g0IhXAEIgCAGIAIApIAEAKIBTgDIABgHIAAgBIgCgZIgCgNIgBgFIgCgH").f();
	this.shape_15.setTransform(71.2,83.3);

	this.addChild(this.shape_15,this.shape_14,this.shape_13,this.instance_6,this.shape_12,this.shape_11,this.instance_5,this.shape_10,this.instance_4,this.shape_9,this.instance_3,this.shape_8,this.shape_7,this.shape_6,this.instance_2,this.shape_5,this.instance_1,this.shape_4,this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new Container();
p.constructor = lib.dogs_101;
p.nominalBounds = new Rectangle(-14.2,4.9,833.7,142.6);

(lib.dogs_101copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#431d12","#5b403e"],[0,1],41.3,-3.3,41.4,-9.6).p("AMnhPIAGAoIAEALIBLAAIABgFQgGgDgGgDIAAgqQAFADAFADIAAgFIgDgIIhQACIgBAH").lf(["#431d12","#5b403e"],[0,1],-531.4,-61.2,-531.4,-61.2).p("AMnhPQthEptBk+IABALIACAYIgCAIQNREzNWkhIgGgo").f();
	this.shape.setTransform(437.7,104.4);

	this.shape_1 = new Shape();
	this.shape_1.graphics.lf(["#431d12","#5b403e"],[0,1],42.4,-3.5,42.3,-9.7).p("AOHhNIgBgKIgBgHIgDgIIhPAEIgBAHIAGAoIAEALIBMgCIAAgCIACgIIgDgZ").lf(["#431d12","#5b403e"],[0,1],-531.5,-46.1,-531.5,-46.1).p("AMyhbQs6E0stkeIABACIABAKIACAZIAAABQM4EYMxksIgGgo").lf(["#431d12","#5b403e"],[0,1],-129.8,-1.5,-129.9,-7.8).p("As1hLIgDgIIhPAEIgCAHIAHAoIAEALIBMgCIAAgCIABgGIAAgBIgCgZIgBgKIgBgCIAAgG").f();
	this.shape_1.setTransform(258.8,104);

	this.shape_2 = new Shape();
	this.shape_2.graphics.lf(["#431d12","#805e5c"],[0,1],55.7,1.9,55.9,-4.3).p("AL3ANQgPABgPABQgvAEgyAEQlgAXjegDQivgDjjgeQhfgLkzgyIgBAgQCEAREJAiQDkAaCoADQDHAFFtgSQA4gDBAgCQAPgCAPgBQAIAAAIgBIgBgbQgHABgJAA").lf(["#431d12","#5b403e"],[0,1],-58.1,-4.1,-58.4,-10.4).p("ArqgzIgBgKIgbACIAAAsIAZAEIACgHIAAgBIABgg").f();
	this.shape_2.setTransform(99.3,95.9);

	this.shape_3 = new Shape();
	this.shape_3.graphics.lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AghjpQAiAFAjgFQABgGABgIQgjgQgiAVQgBAFgBAE").p("AgkjWQgTBugCBJQgEBbARBVQAOAUAVANQAMAIAZAMQgShzADhmQABhTAThwQgmAIgfgI").lf(["#ffffff","#000000"],[0,1],11.8,11.5,-10.7,10.1).p("AgkjWQAfAIAmgIQAAAAACAAQAFgCAGgCIAHgbIgPgCIAAABIAAAMQgBAAgBABQgjAFgigFQgBAAgCgBIACgJIgPAAIAAABIgCAXIANAEQABABABAA").lf(["#662e1d","#723531"],[0,1],-265.6,-51.6,-265.6,-51.6).p("AgJCyQgVgNgOgUIAMA3QAZAeAXAPQAMAIAHAAIgCgTIAAgBQgBgDAAgDQgBgCAAAAQgDgbAAAAQgZgMgMgI").f("#460000").p("AAhDqIACATQAQADAIgGIgagQ").f();
	this.shape_3.setTransform(175.1,91.5);

	this.instance = new lib.dogMc();
	this.instance.setTransform(56.8,27.7);

	this.shape_4 = new Shape();
	this.shape_4.graphics.lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFgBAEQAiAGAjgGQABgGABgI").p("AANgTQABhTAThwQgmAIgfgIQgTBugCBKQgEBaARBVQAOAUAVANQAMAIAZAMQgShyADhn").lf(["#ffffff","#000000"],[0,1],11.8,11.6,-10.7,10.2).p("AAkjpQgjAGgigGQgBAAgCAAIACgKIgPAAIAAABIgCAXIANAEQABABABAAQAfAIAmgIQAAAAACAAQAFgCAGgCIAHgbIgPgCIAAABIAAANQgBAAgBAA").lf(["#662e1d","#723531"],[0,1],-265.6,-51.6,-265.6,-51.6).p("AAcDGQgZgMgMgIQgVgNgOgUIAMA3QAZAeAXAPQAMAIAHABIgCgUIAAAAQgBgEAAgDQgBgCAAAAQgDgbAAAA").f("#460000").p("AAhDqIACAUQAQADAIgHIgagQ").f();
	this.shape_4.setTransform(199.3,69.6);

	this.instance_1 = new lib.dogMc();
	this.instance_1.setTransform(81,5.8);

	this.shape_5 = new Shape();
	this.shape_5.graphics.lf(["#ffffff","#000000"],[0,1],11.9,11.6,-10.6,10.2).p("AAkjpQgjAGgigGQgBAAgCgBIACgJIgPAAIAAABIgCAXIANAEQABABABAAQAfAJAmgJQAAAAACAAQAGgCAFgCIAHgbIgPgCIAAABIAAAMQgBAAgBAB").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFgBAEQAiAGAjgGQABgGABgI").p("Ag5geQgEBaASBVQANAUAVANQAMAIAZAMQgShyADhnQABhTAThwQgmAJgfgJQgTBugCBK").lf(["#662e1d","#723531"],[0,1],-265.7,-51.6,-265.7,-51.6).p("AAcDGQgZgMgMgIQgVgNgNgUIALA3QAZAeAXAPQAMAIAIABIgDgUIAAAAQgBgEAAgDQgBgCAAAAQgDgbAAAA").f("#460000").p("AA7D6IgagQIADAUQAPADAIgH").f();
	this.shape_5.setTransform(347.6,92.8);

	this.instance_2 = new lib.dogMc();
	this.instance_2.setTransform(229.3,29);

	this.shape_6 = new Shape();
	this.shape_6.graphics.lf(["#431d12","#5b403e"],[0,1],-504.3,-78.1,-504.3,-78.1).p("AnYgiQHrCfHzgsIAAgmQn4AvnmikQgWgIgXgIIAAAoQAXAIAWAI").f();
	this.shape_6.setTransform(263.6,94.2);

	this.shape_7 = new Shape();
	this.shape_7.graphics.lf(["#431d12","#5b403e"],[0,1],43,-8.5,43.1,-14.7).p("AL7hjQsjHvtjnrQgGgDgFgEIgBArQAGACAGAEQOIHSMvoAQANgIANgJIgFgdQgjAXgjAX").lf(["#431d12","#5b403e"],[0,1],43.4,-12.7,43.2,-18.9).p("ANBiRIAFAdIAAABIAFALIBLgDIACgKIAAgBIgEgYIgBgQIAAgBIgDgIIhPAFIgCAHIACAIIAAAC").f();
	this.shape_7.setTransform(617.8,106.9);

	this.shape_8 = new Shape();
	this.shape_8.graphics.lf(["#ffffff","#000000"],[0,1],11.9,11.6,-10.6,10.2).p("AAjjWQAGgCAGgCIAGgbIgOgCIAAABIAAAMQgCAAgBABQgjAGghgGQgCAAgBgBIABgJIgPAAIAAABIgCAXIANAEQABABACAAQAeAJAmgJQABAAABAA").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFAAAEQAhAGAjgGQABgGABgI").p("AAhjWQgmAJgegJQgTBugDBKQgEBaASBVQAOAUAUANQAMAIAaAMQgThyADhnQAChTAShw").f("#460000").p("AAkD+QAPADAIgHIgagQIADAU").lf(["#662e1d","#723531"],[0,1],-265.6,-51.6,-265.6,-51.6).p("AAhDqIAAAAQgBgEAAgDQAAgCAAAAQgDgbAAAAQgagMgMgIQgUgNgOgUIALA3QAZAeAYAPQAMAIAHABIgDgU").f();
	this.shape_8.setTransform(707.6,92.8);

	this.instance_3 = new lib.dogMc();
	this.instance_3.setTransform(589.3,29);

	this.shape_9 = new Shape();
	this.shape_9.graphics.lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AghjpQAiAGAjgGQABgGABgIQgjgQgiAVQgBAFgBAE").p("AgjjWQgTBugDBKQgEBaASBVQAOAUAUANQAMAIAaAMQgThyADhmQAChUAShwQgmAIgegI").lf(["#ffffff","#000000"],[0,1],11.9,11.6,-10.6,10.2).p("AgjjWQAeAIAmgIQABAAABAAQAGgCAFgCIAHgbIgOgCIAAABIAAANQgCAAgBAAQgjAGgigGQgBAAgBAAIABgKIgPAAIAAABIgCAXIANAEQABABACAA").lf(["#662e1d","#723531"],[0,1],-265.7,-51.6,-265.7,-51.6).p("AggDIQAZAeAXAPQANAIAHABIgDgUIAAAAQgBgEAAgDQgBgCAAAAQgCgbAAAAQgagMgMgIQgUgNgOgUIALA3").f("#460000").p("AAhDqIADAUQAPADAIgHIgagQ").f();
	this.shape_9.setTransform(739.7,65.3);

	this.instance_4 = new lib.dogMc();
	this.instance_4.setTransform(621.4,1.5);

	this.shape_10 = new Shape();
	this.shape_10.graphics.lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AggjpQAhAGAjgGQABgGABgIQgjgQgiAVQgBAFAAAE").p("Ag5geQgEBaASBVQAOAUAUANQAMAIAaAMQgThyADhnQAChTAShwQgmAJgegJQgTBugDBK").lf(["#ffffff","#000000"],[0,1],11.9,11.6,-10.6,10.2).p("AgjjWQAeAJAmgJQABAAABAAQAGgCAGgCIAGgbIgOgCIAAABIAAAMQgCAAgBABQgjAGghgGQgCAAgBgBIABgJIgPAAIAAABIgCAXIANAEQABABACAA").lf(["#662e1d","#723531"],[0,1],-265.6,-51.6,-265.6,-51.6).p("AAdDGQgagMgMgIQgUgNgOgUIALA3QAZAeAYAPQAMAIAHABIgDgUIAAAAQgBgEAAgDQAAgCAAAAQgDgbAAAA").f("#460000").p("AAhDqIADAUQAPADAIgHIgagQ").f();
	this.shape_10.setTransform(526.1,92.8);

	this.instance_5 = new lib.dogMc();
	this.instance_5.setTransform(407.8,29);

	this.shape_11 = new Shape();
	this.shape_11.graphics.lf(["#ffffff","#000000"],[0,1],11.8,11.5,-10.7,10.1).p("AAkjpQgjAFgigFQgBAAgCgBIACgJIgPAAIAAABIgCAWIANAFQABAAABABQAfAIAmgIQAAgBACAAQAFgBAGgCIAHgbIgPgCIAAABIAAAMQgBAAgBAB").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFgBAEQAiAFAjgFQABgHABgH").p("Ag5gfQgEBbARBVQAOATAVAOQAMAIAZAMQgShzADhmQABhTAThwQgmAIgfgIQgTBugCBJ").lf(["#662e1d","#723531"],[0,1],-265.7,-51.6,-265.7,-51.6).p("AAcDGQgZgMgMgIQgVgOgOgTIAMA3QAZAeAXAPQAMAIAHAAIgCgTIAAgBQgBgDAAgDQgBgCAAgBQgDgaAAAA").f("#460000").p("AAhDqIACATQAQADAIgGIgagQ").f();
	this.shape_11.setTransform(539.2,76.2);

	this.instance_6 = new lib.dogMc();
	this.instance_6.setTransform(420.9,12.4);

	this.shape_12 = new Shape();
	this.shape_12.graphics.lf(["#431d12","#5b403e"],[0,1],-502.1,30,-502.1,30).p("AJOhIQooCupIhkQgWgEgYgEQgBgBgCAAIABACIAMAnQAWAEAXAEQJNBbIhioIgHgl").f();
	this.shape_12.setTransform(618.1,84.6);

	this.shape_13 = new Shape();
	this.shape_13.graphics.lf(["#ffffff","#000000"],[0,1],11.9,11.6,-10.6,10.2).p("AAkjpQgjAGgigGQgBAAgCAAIACgKIgPAAIAAABIgCAXIANAEQABABABAAQAfAJAmgJQAAAAACAAQAGgCAFgCIAHgbIgPgBIAAAAIAAANQgBAAgBAA").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj2QgjgRgiAWQgBAEgBAEQAiAGAjgGQABgGABgH").p("AgrCSQANATAVANQAMAIAZAMQgShyADhmQABhUAThwQgmAJgfgJQgTBugCBKQgEBaASBW").lf(["#662e1d","#723531"],[0,1],-265.7,-51.5,-265.7,-51.5).p("AggDIQAZAfAXAOQAMAIAIABIgDgUIAAAAQgBgDAAgEQgBgBAAgBQgDgbAAAAQgZgMgMgIQgVgNgNgTIALA2").f("#460000").p("AAhDqIADAUQAPADAIgGIgagR").f();
	this.shape_13.setTransform(365.6,68.6);

	this.instance_7 = new lib.dogMc();
	this.instance_7.setTransform(250.4,4.9);

	this.shape_14 = new Shape();
	this.shape_14.graphics.lf(["#431d12","#5b403e"],[0,1],-501.4,39.1,-501.4,39.1).p("AJMhPQokC3pLhaQgWgEgXgDQgBgBgCAAIAAACIANAoQAWADAXADQJPBRIeixIgIgl").f();
	this.shape_14.setTransform(447,86.9);

	this.shape_15 = new Shape();
	this.shape_15.graphics.lf(["#431d12","#5b403e"],[0,1],19.5,-0.1,19.3,-6.4).p("AAPgYIgdACIAAASIgBAZIAbAEIACgHIAAgBIABgVIAAgKIAAgK").f();
	this.shape_15.setTransform(-12.7,84.5);

	this.shape_16 = new Shape();
	this.shape_16.graphics.lf(["#431d12","#805e5c"],[0,1],30.4,1.6,30.3,-4.6).p("ACoArQEfgPEegdIgIgpQmLBAmFALIhGACQBWAABUgDQA8gCA5gBIACAO").lf(["#431d12","#805e5c"],[0,1],59.3,1,59.2,-5.1).p("ACmAdQg5ABg8ACQhUADhWAAQi2AAi1gKQirgKitgRIAAAeQCuAOCrAGQC2AHB4gBQB5gBAmgBQAogBA1gCIBhgGIgCgO").lf(["#431d12","#5b403e"],[0,1],30.4,1.6,30.3,-4.6).p("AM2g0IhXAEIgCAGIAIApIAEAKIBTgDIABgHIAAgBIgCgZIgCgNIgBgFIgCgH").f();
	this.shape_16.setTransform(71.2,83.3);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.instance_7,this.shape_13,this.shape_12,this.instance_6,this.shape_11,this.instance_5,this.shape_10,this.instance_4,this.shape_9,this.instance_3,this.shape_8,this.shape_7,this.shape_6,this.instance_2,this.shape_5,this.instance_1,this.shape_4,this.instance,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new Container();
p.constructor = lib.dogs_101copy;
p.nominalBounds = new Rectangle(-14.2,1.5,861.1,146);

(lib.dogs_101copy2 = function() {
	this.initialize();

	// Layer 2
	this.shape = new Shape();
	this.shape.graphics.lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AghjpQAiAFAjgFQABgGABgIQgjgQgiAVQgBAFgBAE").p("AgkjWQgTBugCBJQgEBbARBVQAOAUAVANQAMAIAZAMQgShzADhmQABhTAThwQgmAIgfgI").lf(["#ffffff","#000000"],[0,1],11.8,11.5,-10.7,10.1).p("AgkjWQAfAIAmgIQAAAAACAAQAFgCAGgCIAHgbIgPgCIAAABIAAAMQgBAAgBABQgjAFgigFQgBAAgCgBIACgJIgPAAIAAABIgCAXIANAEQABABABAA").lf(["#662e1d","#723531"],[0,1],-265.6,-51.6,-265.6,-51.6).p("AgJCyQgVgNgOgUIAMA3QAZAeAXAPQAMAIAHAAIgCgTIAAgBQgBgDAAgDQgBgCAAAAQgDgbAAAAQgZgMgMgI").f("#460000").p("AAhDqIACATQAQADAIgGIgagQ").f();
	this.shape.setTransform(175.1,91.5);

	this.shape_1 = new Shape();
	this.shape_1.graphics.lf(["#431d12","#805e5c"],[0,1],55.7,1.9,55.9,-4.3).p("AL3ANQgPABgPABQgvAEgyAEQlgAXjegDQivgDjjgeQhfgLkzgyIgBAgQCEAREJAiQDkAaCoADQDHAFFtgSQA4gDBAgCQAPgCAPgBQAIAAAIgBIgBgbQgHABgJAA").lf(["#431d12","#5b403e"],[0,1],-58.1,-4.1,-58.4,-10.4).p("ArqgzIgBgKIgbACIAAAsIAZAEIACgHIAAgBIABgg").f();
	this.shape_1.setTransform(99.3,95.9);

	// Layer 1
	this.instance = new lib.dogMc();
	this.instance.setTransform(159.9,93.3,1,1,0,0,0,112.7,59.3);

	this.shape_2 = new Shape();
	this.shape_2.graphics.lf(["#431d12","#5b403e"],[0,1],41.3,-3.3,41.4,-9.6).p("AMnhPIAGAoIAEALIBLAAIABgFQgGgDgGgDIAAgqQAFADAFADIAAgFIgDgIIhQACIgBAH").lf(["#431d12","#5b403e"],[0,1],-531.4,-61.2,-531.4,-61.2).p("AMnhPQthEptBk+IABALIACAYIgCAIQNREzNWkhIgGgo").f();
	this.shape_2.setTransform(437.7,104.4);

	this.shape_3 = new Shape();
	this.shape_3.graphics.lf(["#431d12","#5b403e"],[0,1],42.4,-3.5,42.3,-9.7).p("AOHhNIgBgKIgBgHIgDgIIhPAEIgBAHIAGAoIAEALIBMgCIAAgCIACgIIgDgZ").lf(["#431d12","#5b403e"],[0,1],-531.5,-46.1,-531.5,-46.1).p("AMyhbQs6E0stkeIABACIABAKIACAZIAAABQM4EYMxksIgGgo").lf(["#431d12","#5b403e"],[0,1],-129.8,-1.5,-129.9,-7.8).p("As1hLIgDgIIhPAEIgCAHIAHAoIAEALIBMgCIAAgCIABgGIAAgBIgCgZIgBgKIgBgCIAAgG").f();
	this.shape_3.setTransform(258.8,104);

	this.shape_4 = new Shape();
	this.shape_4.graphics.lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFgBAEQAiAGAjgGQABgGABgI").p("AANgTQABhTAThwQgmAIgfgIQgTBugCBKQgEBaARBVQAOAUAVANQAMAIAZAMQgShyADhn").lf(["#ffffff","#000000"],[0,1],11.8,11.6,-10.7,10.2).p("AAkjpQgjAGgigGQgBAAgCAAIACgKIgPAAIAAABIgCAXIANAEQABABABAAQAfAIAmgIQAAAAACAAQAFgCAGgCIAHgbIgPgCIAAABIAAANQgBAAgBAA").lf(["#662e1d","#723531"],[0,1],-265.6,-51.6,-265.6,-51.6).p("AAcDGQgZgMgMgIQgVgNgOgUIAMA3QAZAeAXAPQAMAIAHABIgCgUIAAAAQgBgEAAgDQgBgCAAAAQgDgbAAAA").f("#460000").p("AAhDqIACAUQAQADAIgHIgagQ").f();
	this.shape_4.setTransform(199.3,69.6);

	this.instance_1 = new lib.dogMc();
	this.instance_1.setTransform(81,5.8);

	this.shape_5 = new Shape();
	this.shape_5.graphics.lf(["#ffffff","#000000"],[0,1],11.9,11.6,-10.6,10.2).p("AAkjpQgjAGgigGQgBAAgCgBIACgJIgPAAIAAABIgCAXIANAEQABABABAAQAfAJAmgJQAAAAACAAQAGgCAFgCIAHgbIgPgCIAAABIAAAMQgBAAgBAB").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFgBAEQAiAGAjgGQABgGABgI").p("Ag5geQgEBaASBVQANAUAVANQAMAIAZAMQgShyADhnQABhTAThwQgmAJgfgJQgTBugCBK").lf(["#662e1d","#723531"],[0,1],-265.7,-51.6,-265.7,-51.6).p("AAcDGQgZgMgMgIQgVgNgNgUIALA3QAZAeAXAPQAMAIAIABIgDgUIAAAAQgBgEAAgDQgBgCAAAAQgDgbAAAA").f("#460000").p("AA7D6IgagQIADAUQAPADAIgH").f();
	this.shape_5.setTransform(347.6,92.8);

	this.instance_2 = new lib.dogMc();
	this.instance_2.setTransform(229.3,29);

	this.shape_6 = new Shape();
	this.shape_6.graphics.lf(["#431d12","#5b403e"],[0,1],-504.3,-78.1,-504.3,-78.1).p("AnYgiQHrCfHzgsIAAgmQn4AvnmikQgWgIgXgIIAAAoQAXAIAWAI").f();
	this.shape_6.setTransform(263.6,94.2);

	this.shape_7 = new Shape();
	this.shape_7.graphics.lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AggjpQAhAGAjgGQABgGABgIQgjgQgiAVQgBAFAAAE").p("Ag5geQgEBaASBVQAOAUAUANQAMAIAaAMQgThyADhnQAChTAShwQgmAJgegJQgTBugDBK").lf(["#ffffff","#000000"],[0,1],11.9,11.6,-10.6,10.2).p("AgjjWQAeAJAmgJQABAAABAAQAGgCAGgCIAGgbIgOgCIAAABIAAAMQgCAAgBABQgjAGghgGQgCAAgBgBIABgJIgPAAIAAABIgCAXIANAEQABABACAA").lf(["#662e1d","#723531"],[0,1],-265.6,-51.6,-265.6,-51.6).p("AAdDGQgagMgMgIQgUgNgOgUIALA3QAZAeAYAPQAMAIAHABIgDgUIAAAAQgBgEAAgDQAAgCAAAAQgDgbAAAA").f("#460000").p("AAhDqIADAUQAPADAIgHIgagQ").f();
	this.shape_7.setTransform(526.1,92.8);

	this.instance_3 = new lib.dogMc();
	this.instance_3.setTransform(407.8,29);

	this.shape_8 = new Shape();
	this.shape_8.graphics.lf(["#ffffff","#000000"],[0,1],11.8,11.5,-10.7,10.1).p("AAkjpQgjAFgigFQgBAAgCgBIACgJIgPAAIAAABIgCAWIANAFQABAAABABQAfAIAmgIQAAgBACAAQAFgBAGgCIAHgbIgPgCIAAABIAAAMQgBAAgBAB").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFgBAEQAiAFAjgFQABgHABgH").p("Ag5gfQgEBbARBVQAOATAVAOQAMAIAZAMQgShzADhmQABhTAThwQgmAIgfgIQgTBugCBJ").lf(["#662e1d","#723531"],[0,1],-265.7,-51.6,-265.7,-51.6).p("AAcDGQgZgMgMgIQgVgOgOgTIAMA3QAZAeAXAPQAMAIAHAAIgCgTIAAgBQgBgDAAgDQgBgCAAgBQgDgaAAAA").f("#460000").p("AAhDqIACATQAQADAIgGIgagQ").f();
	this.shape_8.setTransform(539.2,76.2);

	this.instance_4 = new lib.dogMc();
	this.instance_4.setTransform(420.9,12.4);

	this.shape_9 = new Shape();
	this.shape_9.graphics.lf(["#ffffff","#000000"],[0,1],11.9,11.6,-10.6,10.2).p("AAkjpQgjAGgigGQgBAAgCAAIACgKIgPAAIAAABIgCAXIANAEQABABABAAQAfAJAmgJQAAAAACAAQAGgCAFgCIAHgbIgPgBIAAAAIAAANQgBAAgBAA").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj2QgjgRgiAWQgBAEgBAEQAiAGAjgGQABgGABgH").p("AgrCSQANATAVANQAMAIAZAMQgShyADhmQABhUAThwQgmAJgfgJQgTBugCBKQgEBaASBW").lf(["#662e1d","#723531"],[0,1],-265.7,-51.5,-265.7,-51.5).p("AggDIQAZAfAXAOQAMAIAIABIgDgUIAAAAQgBgDAAgEQgBgBAAgBQgDgbAAAAQgZgMgMgIQgVgNgNgTIALA2").f("#460000").p("AAhDqIADAUQAPADAIgGIgagR").f();
	this.shape_9.setTransform(365.6,68.6);

	this.instance_5 = new lib.dogMc();
	this.instance_5.setTransform(241.6,4.9);

	this.shape_10 = new Shape();
	this.shape_10.graphics.lf(["#431d12","#5b403e"],[0,1],-501.4,39.1,-501.4,39.1).p("AJMhPQokC3pLhaQgWgEgXgDQgBgBgCAAIAAACIANAoQAWADAXADQJPBRIeixIgIgl").f();
	this.shape_10.setTransform(447,86.9);

	this.shape_11 = new Shape();
	this.shape_11.graphics.lf(["#431d12","#5b403e"],[0,1],19.5,-0.1,19.3,-6.4).p("AAPgYIgdACIAAASIgBAZIAbAEIACgHIAAgBIABgVIAAgKIAAgK").f();
	this.shape_11.setTransform(-12.7,84.5);

	this.shape_12 = new Shape();
	this.shape_12.graphics.lf(["#431d12","#805e5c"],[0,1],30.4,1.6,30.3,-4.6).p("ACoArQEfgPEegdIgIgpQmLBAmFALIhGACQBWAABUgDQA8gCA5gBIACAO").lf(["#431d12","#805e5c"],[0,1],59.3,1,59.2,-5.1).p("ACmAdQg5ABg8ACQhUADhWAAQi2AAi1gKQirgKitgRIAAAeQCuAOCrAGQC2AHB4gBQB5gBAmgBQAogBA1gCIBhgGIgCgO").lf(["#431d12","#5b403e"],[0,1],30.4,1.6,30.3,-4.6).p("AM2g0IhXAEIgCAGIAIApIAEAKIBTgDIABgHIAAgBIgCgZIgCgNIgBgFIgCgH").f();
	this.shape_12.setTransform(71.2,83.3);

	this.addChild(this.shape_12,this.shape_11,this.shape_10,this.instance_5,this.shape_9,this.instance_4,this.shape_8,this.instance_3,this.shape_7,this.shape_6,this.instance_2,this.shape_5,this.instance_1,this.shape_4,this.shape_3,this.shape_2,this.instance,this.shape_1,this.shape);
}).prototype = p = new Container();
p.constructor = lib.dogs_101copy2;
p.nominalBounds = new Rectangle(-14.2,4.9,660.6,147.6);

(lib.fgText = function() {
	this.initialize();

	// Layer 1
	this.text = new Text("Fg", "bold undefinedpx HelveticaNeueLT Std", "#000000");
	this.text.textBaseline = "top";
	this.text.lineHeight = NaN;
	this.text.setTransform(5,0.5);

	// Layer 2
	this.shape = new Shape();
	this.shape.graphics.f("#b8dde8").p("AERjJIohAAIAAGOIIhAAIAAmO").f().s("rgba(187,247,236,0.459)").ss(1,1,1,3).p("AERDFIAAAFIohAAIAAgF");
	this.shape.setTransform(20.5,20.7);

	this.addChild(this.shape,this.text);
}).prototype = p = new Container();
p.constructor = lib.fgText;
p.nominalBounds = new Rectangle(-6.7,0.5,54.6,40.4);

(lib.fnText = function() {
	this.initialize();

	// Layer 1
	this.text = new Text("Fn", "bold undefinedpx HelveticaNeueLT Std", "#000000");
	this.text.textBaseline = "top";
	this.text.lineHeight = NaN;
	this.text.setTransform(6,-9.4);

	this.shape = new Shape();
	this.shape.graphics.f("#b8dde8").p("AERjGIohAAIAAGOIIhAAIAAmO").f().s("rgba(187,247,236,0.459)").ss(1,1,1,3).p("AERjGIAAGOIohAAIAAmOIIhAA").cp();
	this.shape.setTransform(20.5,10.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new Container();
p.constructor = lib.fnText;
p.nominalBounds = new Rectangle(-6.7,-9.4,54.6,40);

(lib.fnText_fric = function() {
	this.initialize();

	// Layer 2
	this.text = new Text("Fapplied", "bold undefinedpx HelveticaNeueLT Std", "#000000");
	this.text.textBaseline = "top";
	this.text.lineHeight = NaN;
	this.text.setTransform(-21.7,0.6);

	this.shape = new Shape();
	this.shape.graphics.f("#b8dde8").p("AGdjHIs5AAIAAGPIM5AAIAAmP").f();
	this.shape.setTransform(14.5,20.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new Container();
p.constructor = lib.fnText_fric;
p.nominalBounds = new Rectangle(-26.7,0.5,82.6,39.9);

(lib.fnText_fric_new = function() {
	this.initialize();

	// Layer 1
	this.text = new Text("Ffriction", "bold undefinedpx HelveticaNeueLT Std", "#000000");
	this.text.textBaseline = "top";
	this.text.lineHeight = NaN;
	this.text.setTransform(-21.7,0.6);

	// Layer 2
	this.shape = new Shape();
	this.shape.graphics.f("#b8dde8").p("AGdjHIs5AAIAAGPIM5AAIAAmP").f();
	this.shape.setTransform(14.5,20.5);

	this.addChild(this.shape,this.text);
}).prototype = p = new Container();
p.constructor = lib.fnText_fric_new;
p.nominalBounds = new Rectangle(-26.7,0.5,82.6,39.9);

(lib.front55 = function() {
	this.initialize();

	// Layer 4
	this.shape = new Shape();
	this.shape.graphics.f().s("#000000").ss(3,0,1,3).p("AgWiMIAhAEQAQAOABAcIgLDRQgDAZgOAAIgbgB");
	this.shape.setTransform(194.1,-19.8);

	// Layer 1
	this.shape_1 = new Shape();
	this.shape_1.graphics.f("rgba(130,112,77,0.62)").p("AaGJFQgBAAgBgBQgggMg5ADQglAChGAgQhDAegkgBMgziAAAIgaAAQgDASApALQAWAFAxAEMA1eAAAQA1gFAigSQAegRADgTQADgUgdgM").f();
	this.shape_1.setTransform(-3.1,-14.1);

	this.instance = new lib.sledge();
	this.instance.setTransform(-196.5,-81.3);

	this.addChild(this.instance,this.shape_1,this.shape);
}).prototype = p = new Container();
p.constructor = lib.front55;
p.nominalBounds = new Rectangle(-198.7,-81.3,395.7,134.5);

(lib.head_arr_r_y = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#8bb0dd").p("AgggXIgvAAIAAAvIAvAAIgUBEICEhcIiDhaIATBD").f();
	this.shape.setTransform(8,0);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.head_arr_r_y;
p.nominalBounds = new Rectangle(0,-9,16,18.3);

(lib.learnmore_01 = function() {
	this.initialize();

	// Layer 6
	this.instance = new lib.Summary_forcevector_down("single",0);
	this.instance.setTransform(150.6,285,1,1,180,0,0,8.5,-36.4);

	this.instance_1 = new lib.Summary_forcevector("single",0);
	this.instance_1.setTransform(149.3,193.9,1,1,0,0,179.9,10.2,-36.5);

	this.shape = new Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").p("EAocgZUQgLAHgGAMQgGAMgBAQQABAQAFAMQAGAMALAHQALAHAPAAQATAAALgJQAMgJADgRIgRAAQgCAKgHAFQgHAFgKAAQgMAAgHgFQgIgEgDgIQgDgIAAgJIBOAAQAAgJgCgLQgCgKgFgJQgGgJgJgFQgJgGgOAAQgPAAgKAH").p("EApDgZIQAGAEAFAGQADAHABAIIg8AAQABgIAEgGQADgHAHgEQAGgEAJAAQAJAAAGAE").p("EAqSgYHIgXAAIAAAWIAXAAIAAgW").p("EAlagZZIAABoIARAAIAAguQAAgUAJgLQAJgLATAAIAAgSQgNAAgJAGQgJAGgGAMIgBAAIAAgWIgQAA").p("EAmagYkQAAAQAFAMQAGAMALAGQAKAHAQAAQAUAAALgKQALgLAEgTIgRAAQgCAMgHAGQgIAHgMAAQgLAAgHgFQgGgGgEgIQgCgJAAgKQAAgKACgJQAEgKAGgFQAIgGAMAAQAKAAAHAFQAHAGABAKIASAAQgBgNgHgIQgFgHgKgEQgKgEgLAAQgRAAgKAHQgMAIgFAMQgFANAAAP").p("EAjWgZxIAAgPQgCgBgDAAQgDgBgDAAQgOAAgHAHQgHAGAAANIAAAPIgSAAIAAAPIASAAIAABZIARAAIAAhZIAUAAIAAgPIgUAAIAAgOQAAgHADgCQADgDAHAAQACAAACABQADAAACAB").p("EAjhgYlQAAAPAGANQAGAMALAHQALAHARAAQAQAAALgHQALgHAGgMQAGgNAAgPQAAgPgGgMQgGgNgLgHQgLgHgQAAQgRAAgLAHQgLAHgGANQgGAMAAAP").p("EAkUgZMQAJAAAHAFQAHAEAFAJQAEAIAAANQAAANgEAIQgFAJgHAFQgHAEgJAAQgJAAgIgEQgHgFgEgJQgEgIgBgNQABgNAEgIQAEgJAHgEQAIgFAJAA").p("EAgMgZZQgIgCgKAAQgLAAgKADQgKAEgGAHQgGAIgBANIARAAQABgMAHgEQAHgEALAAQAGAAAFABQAFABAEAEQADAEAAAHQAAAGgFADQgEADgIABQgIABgKABQgJACgHADQgIADgFAGQgFAHgBALQABAKAEAHQAFAGAHADQAIADAKAAQAKAAAKgEQAJgEAHgIQAAAIAEAEQAEAEAGAAQAEAAADgBQADAAADgCIAAgNQgCABgBAAQgCAAgBAAQgEAAAAgDQgBgCAAgGIAAg2QAAgMgGgGQgGgGgJgC").p("Afn4dQAFgCAFgBQAJgBAIgBQAJgBAFgEIAAASQAAAFgDAFQgDAFgHAEQgHAEgMAAQgFAAgEgBQgFgCgDgDQgCgEgBgFQABgGACgEQADgEAFgC").p("EAhAgaAIAACPIARAAIAAiPIgRAA").p("Ab75UQgLAHgGANQgGAMAAAPQAAAPAGANQAGAMALAHQALAHARAAQAQAAALgHQALgHAGgMQAGgNAAgPQAAgPgGgMQgGgNgLgHQgLgHgQAAQgRAAgLAH").p("AcX5MQAJAAAHAFQAHAEAFAJQAEAIAAANQAAANgEAIQgFAJgHAFQgHAEgJAAQgJAAgIgEQgHgFgEgJQgEgIgBgNQABgNAEgIQAEgJAHgEQAIgFAJAA").p("AeP5bQgLAAgJAEQgIAFgGAKIAAgRIgQAAIAABoIARAAIAAg7QAAgJADgHQAEgIAHgEQAGgEALAAQAKAAAFAGQAGAFAAAKIAABGIARAAIAAhEQAAgLgEgJQgDgIgIgFQgHgFgOAA").p("AZx5ZIAAAPIASAAIAABCQAAAKACAEQADAFAFACQAGACAIAAIANAAIAAgPIgIAAQgHAAgDgCQgDgCABgFIAAhBIAUAAIAAgPIgUAAIAAgfIgRAAIAAAfIgSAA").p("AY55bQgQAAgLAHQgLAIgFAMQgGANAAAPQAAAQAGAMQAGAMAKAGQALAHAQAAQATAAAMgKQALgLADgTIgRAAQgCAMgHAGQgHAHgMAAQgLAAgHgFQgGgGgEgIQgDgJAAgKQAAgKADgJQADgKAHgFQAHgGANAAQAKAAAHAFQAGAGACAKIASAAQgBgNgHgIQgGgHgJgEQgKgEgMAA").p("Aa95ZIAABoIARAAIAAhoIgRAA").p("Aa95rIARAAIAAgVIgRAAIAAAV").p("AWT5xIAAgPQgCgBgDAAQgDgBgDAAQgOAAgHAHQgHAGAAANIAAAPIgSAAIAAAPIASAAIAABZIARAAIAAhZIAUAAIAAgPIgUAAIAAgOQAAgHADgCQADgDAHAAQACAAACABQADAAACAB").p("AWe5ZIAABoIARAAIAAguQAAgUAJgLQAJgLAUAAIAAgSQgOAAgJAGQgJAGgGAMIgBAAIAAgWIgQAA").p("AXy6AIgRAAIAAAVIARAAIAAgV").p("AXh5ZIAABoIARAAIAAhoIgRAA").p("ATL5UQgLAHgGANQgGAMAAAPQAAAPAGANQAGAMALAHQALAHARAAQAQAAALgHQALgHAGgMQAGgNAAgPQAAgPgGgMQgGgNgLgHQgLgHgQAAQgRAAgLAH").p("ATL46QAEgJAHgEQAIgFAJAAQAJAAAHAFQAHAEAFAJQAEAIAAANQAAANgEAIQgFAJgHAFQgHAEgJAAQgJAAgIgEQgHgFgEgJQgEgIgBgNQABgNAEgI").p("ASf5JQgDgIgIgFQgHgFgOAAQgLAAgJAEQgIAFgGAKIAAgRIgQAAIAABoIARAAIAAg7QAAgJADgHQAEgIAHgEQAGgEALAAQAKAAAFAGQAGAFAAAKIAABGIARAAIAAhEQAAgLgEgJ").p("APS5bQgJAAgKADQgIADgGAGQgGAHAAAKQAAAKAFAGQAFAGAIADQAHADAJACQAJABAHACQAIACAFAEQAFADAAAHQAAAGgEADQgEAEgGABQgGABgFAAQgIAAgGgCQgGgBgEgFQgEgEAAgIIgRAAQABANAGAIQAFAHAKAEQAKADAMAAQAKAAAKgDQALgDAGgHQAHgHAAgMQAAgKgGgGQgFgGgHgDQgIgDgIgCQgIgCgIgCQgIgBgFgEQgFgDAAgGQAAgFAEgDQADgDAFgBQAFgBAFAAQAFAAAGABQAFACAEAEQADAEABAGIARAAQgBgMgFgHQgGgHgJgDQgKgDgLAA").p("AMz5ZIAABoIARAAIAAguQAAgUAIgLQAKgLAUAAIAAgBIAQAAIAABCQAAAKADAEQACAFAGACQAFACAIAAIAOAAIAAgPIgJAAQgHAAgDgCQgCgCAAgFIAAhBIAVAAIAAgPIgVAAIAAgfIgRAAIAAAfIgQAAIAAgCQgOAAgJAGQgJAGgGAMIgBAAIAAgWIgQAA").p("AMV5HQgFgJgKgFQgIgGgOAAQgOAAgLAHQgLAHgHAMQgFAMgBAQQABAQAFAMQAFAMAMAHQALAHAQAAQASAAALgJQAMgJADgRIgRAAQgCAKgHAFQgHAFgKAAQgMAAgHgFQgHgEgEgIQgDgIAAgJIBOAAQAAgJgCgLQgDgKgFgJ").p("AMJ4+QADAHABAIIg8AAQABgIAEgGQADgHAHgEQAGgEAJAAQAIAAAHAEQAHAEAEAG").p("AI75VQgJgGgNAAQgPAAgLAHQgLAHgGAMQgGAMgBAQQABAQAGAMQAFAMALAHQALAHAQAAQASAAAMgJQALgJAEgRIgRAAQgDAKgGAFQgHAFgLAAQgLAAgHgFQgIgEgDgIQgDgIAAgJIBNAAQABgJgCgLQgDgKgFgJQgFgJgKgF").p("AI94+QAEAHAAAIIg7AAQABgIADgGQAEgHAGgEQAHgEAJAAQAIAAAHAEQAGAEAEAG").p("AJw5ZIgWAAIAkAxIgnA3IAUAAIAdgrIAdArIAWAAIgog4IAjgwIgUAAIgaAkIgYgk").p("AF/5bQgOAAgLAHQgLAHgGAMQgHAMAAAQQAAAQAGAMQAGAMALAHQALAHAQAAQASAAALgJQALgJAEgRIgRAAQgCAKgHAFQgHAFgLAAQgLAAgHgFQgHgEgEgIQgDgIAAgJIBNAAQABgJgCgLQgCgKgFgJQgGgJgJgFQgJgGgOAA").p("AFv5IQAGgEAJAAQAJAAAGAEQAHAEAEAGQADAHABAIIg8AAQABgIAEgGQADgHAHgE").p("ACh5bQgMAAgKADQgJAEgGAHQgGAIgBANIARAAQABgMAHgEQAHgEALAAQAGAAAFABQAFABADAEQAEAEAAAHQAAAGgFADQgEADgIABQgIABgKABQgJACgHADQgIADgFAGQgFAHgBALQABAKAEAHQAFAGAHADQAIADAKAAQAKAAAKgEQAJgEAHgIQAAAIAEAEQAEAEAGAAQAEAAADgBQADAAADgCIAAgNQgCABgBAAQgCAAgBAAQgEAAAAgDQgCgCABgGIAAg2QgBgMgFgGQgGgGgJgCQgIgCgKAA").p("AC34nIAAASQAAAFgEAFQgCAFgIAEQgGAEgMAAQgFAAgEgBQgFgCgDgDQgCgEgBgFQABgGACgEQADgEAFgCQAFgCAFgBQAJgBAIgBQAJgBAFgE").p("ADh4kQAAAQAGAMQAGAMAKAGQALAHAQAAQATAAALgKQAMgLADgTIgRAAQgCAMgHAGQgHAHgMAAQgLAAgHgFQgHgGgDgIQgDgJAAgKQAAgKADgJQADgKAHgFQAHgGANAAQAKAAAHAFQAGAGACAKIASAAQgBgNgHgIQgGgHgJgEQgKgEgMAAQgQAAgLAHQgLAIgFAMQgGANAAAP").p("AAP5ZIgPAAIAABoIAQAAIAAguQAAgUAIgLQAKgLAUAAIAAgBIARAAIAABZIARAAIAAhZIAUAAIAAgPIgUAAIAAgOQAAgHADgCQADgDAHAAQACAAACABQADAAACABIAAgPQgCgBgEAAQgCgBgDAAQgOAAgHAHQgHAGAAANIAAAPIgRAAIAAgCQgOAAgJAGQgJAGgGAMIgBAAIAAgW").p("Agt4eQAAAJgDAHQgEAIgGAEQgHAEgKAAQgKAAgGgGQgGgFAAgKIAAhGIgQAAIAABEQgBAMAEAIQADAJAHAEQAIAFAOAAQALAAAJgEQAIgFAFgKIABAAIAAARIAQAAIAAhoIgRAAIAAA7").p("AjH5YQgJADgFAGQgGAHAAAKQAAAKAFAGQAFAGAHADQAIADAIACQAJABAIACQAHACAFAEQAFADAAAHQAAAGgEADQgEAEgGABQgGABgFAAQgHAAgGgCQgHgBgDgFQgEgEgBgIIgRAAQABANAGAIQAGAHAKAEQAKADALAAQALAAAKgDQAKgDAGgHQAHgHAAgMQAAgKgFgGQgFgGgIgDQgHgDgJgCQgIgCgHgCQgJgBgFgEQgFgDAAgGQAAgFAEgDQADgDAFgBQAFgBAGAAQAFAAAGABQAFACADAEQADAEACAGIARAAQgBgMgGgHQgGgHgJgDQgJgDgMAAQgJAAgJAD").p("AmH5bQgQAAgLAHQgMAHgFANQgHAMAAAPQAAAPAHANQAFAMAMAHQALAHAQAAQARAAALgHQALgHAFgMQAGgNAAgPQAAgPgGgMQgFgNgLgHQgLgHgRAA").p("Amj46QAFgJAHgEQAHgFAJAAQAJAAAHAFQAIAEAEAJQAEAIAAANQAAANgEAIQgEAJgIAFQgHAEgJAAQgJAAgHgEQgHgFgFgJQgEgIAAgNQAAgNAEgI").p("Am95bQgOAAgJAGQgJAGgGAMIgBAAIAAgWIgQAAIAABoIARAAIAAguQAAgUAJgLQAJgLAUAAIAAgS").p("ApO5UQgLAHgGAMQgGAMAAAQQAAAQAFAMQAGAMALAHQALAHAQAAQASAAAMgJQALgJAEgRIgSAAQgBAKgHAFQgIAFgKAAQgLAAgIgFQgHgEgEgIQgCgIAAgJIBNAAQAAgJgBgLQgDgKgFgJQgGgJgJgFQgJgGgNAAQgPAAgLAH").p("Ao15MQAIAAAHAEQAGAEAEAGQADAHABAIIg7AAQABgIADgGQADgHAHgEQAHgEAJAA").p("Ap45ZIhRAAIAAAPIA7AAIg/BMIAAANIBYAAIAAgPIhCAAIA/hNIAAgM").p("Akq4HIgWAAIAAAWIAMAAQAAADgBAEQgBAEgDADQgCAEgFABIAAAKQALgDAGgJQAFgIAAgLIAAgU").p("AtL5YQgJADgGAGQgFAHAAAKQAAAKAFAGQAFAGAHADQAIADAIACQAJABAIACQAHACAFAEQAFADAAAHQAAAGgEADQgEAEgGABQgFABgGAAQgHAAgGgCQgGgBgEgFQgEgEgBgIIgQAAQAAANAGAIQAGAHAKAEQAKADALAAQAKAAAKgDQALgDAGgHQAHgHAAgMQAAgKgFgGQgFgGgHgDQgIgDgJgCQgIgCgIgCQgHgBgFgEQgFgDAAgGQAAgFADgDQADgDAFgBQAFgBAGAAQAFAAAFABQAFACAEAEQAEAEABAGIAQAAQAAgMgGgHQgGgHgJgDQgJgDgMAAQgJAAgJAD").p("Awc5UQgLAHgGAMQgFAMgBAQQABAQAFAMQAFAMALAHQALAHARAAQARAAAMgJQAMgJADgRIgRAAQgCAKgHAFQgHAFgKAAQgMAAgHgFQgHgEgEgIQgDgIAAgJIBOAAQAAgJgCgLQgCgKgFgJQgGgJgJgFQgKgGgNAAQgOAAgMAH").p("Av05IQAHAEADAGQAEAHAAAIIg7AAQABgIADgGQAEgHAGgEQAHgEAJAAQAJAAAGAE").p("AuH5ZIAABoIASAAIAAhoIgSAA").p("AuH6AIAAAVIASAAIAAgVIgSAA").p("Azd5ZIAABoIARAAIAAguQAAgUAJgLQAJgLAUAAIAAgSQgOAAgJAGQgKAGgGAMIAAAAIAAgWIgQAA").p("Aye4kQAAAQAHAMQAFAMALAGQAKAHAQAAQATAAAMgKQAMgLACgTIgQAAQgDAMgHAGQgHAHgMAAQgLAAgGgFQgHgGgDgIQgEgJAAgKQAAgKAEgJQACgKAIgFQAGgGANAAQALAAAGAFQAGAGADAKIARAAQgBgNgGgIQgHgHgJgEQgJgEgNAAQgQAAgKAHQgLAIgGAMQgGANAAAP").p("A1d5yQADAAACABIAAgPQgCgBgDAAQgDgBgDAAQgOAAgHAHQgHAGAAANIAAAPIgRAAIAAAPIARAAIAABZIARAAIAAhZIAUAAIAAgPIgUAAIAAgOQAAgHADgCQADgDAHAAQACAAACAB").p("A0/5UQgLAHgGANQgGAMAAAPQAAAPAGANQAGAMALAHQALAHARAAQAQAAALgHQALgHAGgMQAGgNAAgPQAAgPgGgMQgGgNgLgHQgLgHgQAAQgRAAgLAH").p("A0j5MQAIAAAIAFQAHAEAEAJQAEAIAAANQAAANgEAIQgEAJgHAFQgIAEgIAAQgJAAgIgEQgHgFgFgJQgEgIAAgNQAAgNAEgIQAFgJAHgEQAIgFAJAA").p("A545bQgOAAgMAHQgLAHgGAMQgFAMgBAQQABAQAFAMQAFAMALAHQALAHARAAQARAAAMgJQAMgJADgRIgRAAQgCAKgHAFQgHAFgKAAQgMAAgHgFQgHgEgEgIQgDgIAAgJIBOAAQAAgJgCgLQgDgKgFgJQgFgJgKgFQgJgGgNAA").p("A5c4vIg7AAQABgIADgGQAEgHAGgEQAHgEAJAAQAIAAAHAEQAHAEADAGQAEAHAAAI").p("A474lQAAAPAGAMQAFAMAKAIQALAHAQAAQAKAAAJgEQAJgEAFgIIAAAOIARAAIAAiPIgRAAIAAA1QgEgGgGgDQgFgEgHgCQgGgBgGAAQgQAAgKAHQgKAIgFAMQgGAMAAAP").p("A4m43QADgJAHgGQAGgGAMAAQAMAAAHAGQAHAFADAJQAEAJAAAKQAAAKgEAJQgCAJgIAFQgHAGgLAAQgLAAgHgFQgHgGgEgIQgDgJAAgKQAAgKADgJ").p("A8j5TQgLgIgPAAQgLAAgJAEQgJAEgEAIIgBAAIAAgOIgRAAIAACPIARAAIAAg1IABAAQADAGAGAEQAGADAHACQAGABAFAAQAQAAAKgHQALgIAGgMQAFgMAAgPQAAgOgGgNQgFgMgLgH").p("A8u5HQAIAGADAJQADAIAAAKQAAAKgDAKQgCAJgHAFQgHAGgLAAQgMAAgIgGQgGgFgEgJQgEgJABgKQgBgKAEgJQADgJAHgFQAHgGAMAAQALAAAGAF").p("A656AIgRAAIAAAVIARAAIAAgV").p("A7K5ZIAABoIARAAIAAhoIgRAA").p("A736AIAACPIARAAIAAiPIgRAA").p("A/i5ZIAACPIASAAIAAg1IAAAAQADAGAHAEQAFADAGACQAHABAFAAQAQAAALgHQAKgIAGgMQAFgMAAgPQAAgOgGgNQgFgMgKgHQgMgIgPAAQgLAAgJAEQgJAEgEAIIAAAAIAAgOIgSAA").p("A/E5GQAHgGAMAAQAKAAAHAFQAIAGADAJQADAIAAAKQAAAKgCAKQgEAJgGAFQgHAGgMAAQgLAAgIgGQgGgFgEgJQgEgJABgKQgBgKAEgJQADgJAHgF").p("EggQgZZQgIgCgKAAQgLAAgKADQgKAEgGAHQgGAIgBANIARAAQABgMAHgEQAHgEALAAQAGAAAFABQAFABAEAEQADAEAAAHQAAAGgFADQgEADgIABQgIABgKABQgJACgHADQgIADgFAGQgFAHgBALQABAKAEAHQAFAGAHADQAIADAKAAQAKAAAKgEQAJgEAHgIQAAAIAEAEQAEAEAHAAQAEAAACgBQAEAAACgCIAAgNQgCABgBAAQgCAAgBAAQgEAAAAgDQgBgCAAgGIAAg2QAAgMgGgGQgGgGgJgC").p("EggMgYnIAAASQAAAFgDAFQgDAFgHAEQgHAEgMAAQgFAAgEgBQgFgCgDgDQgCgEgBgFQABgGACgEQADgEAFgCQAFgCAFgBQAJgBAIgBQAJgBAFgE").p("EgjTgZXQgJAFgFAKIAAgRIgQAAIAABoIARAAIAAg7QAAgJADgHQADgIAHgEQAHgEAKAAQAKAAAGAGQAFAFAAAKIAABGIARAAIAAhEQAAgLgDgJQgDgIgIgFQgIgFgNAAQgMAAgIAE").p("EgmcgZbQgHAAgGACQgHACgFADQgFAEgDAGIAAg2IgRAAIAACPIARAAIAAg7QAAgJADgHQADgIAHgEQAHgEAKAAQAKAAAGAGQAFAFAAAKIAABGIARAAIAAhEQAAgLgDgJQgDgIgIgFQgIgFgNAA").p("EgllgYlQABAQAFAMQAGAMALAHQALAHAQAAQASAAALgJQAMgJADgRIgRAAQgCAKgHAFQgHAFgKAAQgMAAgHgFQgHgEgEgIQgDgIAAgJIBOAAQAAgJgCgLQgCgKgFgJQgGgJgJgFQgJgGgOAAQgOAAgLAHQgLAHgGAMQgGAMgBAQ").p("EglOgY9QADgHAHgEQAGgEAJAAQAJAAAGAEQAHAEAEAGQADAHABAIIg8AAQABgIAEgG").p("EgnvgaAIgdB3IAAAAIggh3IgVAAIggB3Igch3IgUAAIAlCPIAUAAIAhh4IAhB4IAUAAIAmiPIgTAA").f();
	this.shape.setTransform(268.2,180.3);

	// Layer 5
	this.instance_2 = new lib.boxes_01("single",0);
	this.instance_2.setTransform(151.6,207.4,1,1,0,0,0,81.3,79.6);

	// Layer 7
	this.text = new Text("m/s2", "20px HelveticaNeueLT Std", "#ffffff");
	this.text.textAlign = "center";
	this.text.textBaseline = "top";
	this.text.lineHeight = 20;
	this.text.setTransform(525.8,339.2);

	this.text_1 = new Text("0.00", "20px HelveticaNeueLT Std", "#ffffff");
	this.text_1.textBaseline = "top";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 52;
	this.text_1.setTransform(453.2,339.9);

	this.text_2 = new Text("Acceleration:", "20px HelveticaNeueLT Std", "#ffffff");
	this.text_2.textBaseline = "top";
	this.text_2.lineHeight = 20;
	this.text_2.setTransform(316.4,342.2);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#000000").p("ABgB/IRCAAIAAkXIxCAAIAAEX").f().s("#999999").ss(2,1,1,3).p("ABgB/IAAkXIRCAAIAAEXIxCAA").cp();
	this.shape_1.setTransform(434.9,354.2);

	// Layer 2
	this.shape_2 = new Shape();
	this.shape_2.graphics.f().s("#000000").ss(3,0,1,3).p("AgRhqIAaAEQAMAKABAVIgJCfQgCASgLABIgUgB");
	this.shape_2.setTransform(297.2,215.2);

	this.instance_3 = new lib.sledgeMc();
	this.instance_3.setTransform(147.3,219.5,1,1,0,0,0,148.3,51);

	this.instance_4 = new lib.front55("synched",0);
	this.instance_4.setTransform(153.1,223.3,0.624,0.624);

	// Layer 3
	this.grass_img_fea = new lib.n_grass_img();
	this.grass_img_fea.setTransform(1795.2,287,1,1,0,0,0,1829,338.1);

	// learn more buttons
	this.instance_5 = new lib.popup_101();
	this.instance_5.setTransform(467,198.7,1,1,0,0,0,490.8,205.3);

	this.addChild(this.instance_5,this.grass_img_fea,this.instance_4,this.instance_3,this.shape_2,this.shape_1,this.text_2,this.text_1,this.text,this.instance_2,this.shape,this.instance_1,this.instance);
}).prototype = p = new Container();
p.constructor = lib.learnmore_01;
p.nominalBounds = new Rectangle(-23.7,-6.6,2456.9,640.1);

(lib.learnmore_02 = function() {
	this.initialize();

	// Layer 11
	this.shape = new Shape();
	this.shape.graphics.f("#8bb0dd").p("AHqgpIjIACIAAgCIoxAEIAABMIDIgCIAAACIIxgFIAAhL").f();
	this.shape.setTransform(88.7,239.7);

	this.head = new lib.head_arr_r_y();
	this.head.setTransform(52.6,239.7,1.603,1.603,0,0,180,8,0);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.902)").p("EAkTgSGQgJgGgOAAQgOAAgLAHQgLAHgGAMQgGAMgBAQQABAQAFAMQAGAMALAHQALAHAQAAQASAAALgJQAMgJADgRIgRAAQgCAKgHAFQgHAFgKAAQgMAAgHgFQgHgEgEgIQgDgIAAgJIBOAAQAAgJgCgLQgCgKgFgJQgGgJgJgF").p("EAkVgRvQADAHABAIIg8AAQABgIAEgGQADgHAHgEQAGgEAJAAQAJAAAGAEQAHAEAEAG").p("EAhBgSGQgJAGgGAMIgBAAIAAgWIgQAAIAABoIARAAIAAguQAAgUAJgLQAJgLAUAAIAAgSQgOAAgJAG").p("EAiAgR3QAHgGAMAAQALAAAGAFQAHAGACAKIARAAQgBgNgGgIQgGgHgKgEQgJgEgMAAQgRAAgKAHQgLAIgGAMQgFANAAAPQAAAQAGAMQAFAMALAGQAKAHAQAAQAUAAALgKQAMgLADgTIgRAAQgCAMgHAGQgIAHgMAAQgLAAgGgFQgHgGgDgIQgDgJAAgKQAAgKADgJQADgKAHgF").p("EAlZgQiIAAgWIgWAAIAAAWIAWAA").p("AeiyjQACAAADABIAAgPQgDgBgDAAQgDgBgCAAQgOAAgIAHQgHAGAAANIAAAPIgSAAIAAAPIASAAIAABZIARAAIAAhZIAUAAIAAgPIgUAAIAAgOQAAgHADgCQAEgDAGAAQACAAADAB").p("AeoxWQAAAPAGANQAFAMAMAHQALAHARAAQAQAAALgHQALgHAGgMQAGgNAAgPQAAgPgGgMQgGgNgLgHQgLgHgQAAQgRAAgLAHQgMAHgFANQgGAMAAAP").p("Ae/xrQAEgJAHgEQAHgFAKAAQAJAAAGAFQAIAEAFAJQAEAIAAANQAAANgEAIQgFAJgIAFQgGAEgJAAQgKAAgHgEQgHgFgEgJQgEgIgBgNQABgNAEgI").p("AbYyFQgLAIgFAMQgFAMAAAPQAAAPAFAMQAGAMALAIQAKAHAQAAQALAAAJgEQAJgEAEgIIAAAOIARAAIAAiPIgRAAIAAA1QgEgGgGgDQgGgEgGgCQgGgBgFAAQgQAAgLAH").p("AbYxoQADgJAHgGQAHgGALAAQAMAAAHAGQAHAFAEAJQADAJAAAKQAAAKgDAJQgEAJgGAFQgHAGgMAAQgLAAgHgFQgHgGgDgIQgEgJAAgKQAAgKADgJ").p("AazxlQgCgKgFgJQgGgJgJgFQgJgGgOAAQgOAAgLAHQgLAHgGAMQgHAMAAAQQAAAQAGAMQAGAMALAHQALAHAQAAQASAAALgJQALgJAEgRIgRAAQgCAKgHAFQgHAFgLAAQgLAAgHgFQgHgEgEgIQgDgIAAgJIBNAAQABgJgCgL").p("AajxgIg8AAQABgIAEgGQADgHAHgEQAGgEAJAAQAJAAAGAEQAHAEAEAGQADAHABAI").p("AYHyxIAACPIARAAIAAiPIgRAA").p("AXcyEQgLgIgQAAQgLAAgJAEQgJAEgEAIIAAAAIAAgOIgRAAIAACPIARAAIAAg1IAAAAQAEAGAGAEQAFADAGACQAHABAGAAQAPAAALgHQAKgIAGgMQAFgMAAgPQAAgOgGgNQgFgMgKgH").p("AXfxXQAAAKgDAKQgEAJgGAFQgHAGgMAAQgLAAgHgGQgHgFgEgJQgDgJAAgKQAAgKADgJQADgJAHgFQAHgGAMAAQAKAAAIAFQAHAGADAJQAEAIAAAK").p("AY0yKIAABoIARAAIAAhoIgRAA").p("AY0ycIARAAIAAgVIgRAAIAAAV").p("AU7yIQgJAEgEAIIAAAAIAAgOIgRAAIAACPIARAAIAAg1IAAAAQAEAGAGAEQAFADAHACQAGABAGAAQAPAAALgHQAKgIAFgMQAFgMAAgPQAAgOgFgNQgFgMgKgHQgLgIgQAAQgLAAgJAE").p("AUwxpQADgJAHgFQAHgGALAAQAMAAAHAFQAGAGAEAJQAEAIAAAKQAAAKgDAKQgDAJgHAFQgHAGgLAAQgMAAgHgGQgIgFgDgJQgDgJAAgKQAAgKADgJ").p("AUGwvQgBAAgBAAQgEAAAAgDQgBgCAAgGIAAg2QAAgMgGgGQgGgGgJgCQgIgCgKAAQgLAAgKADQgKAEgGAHQgGAIgBANIARAAQABgMAHgEQAHgEALAAQAGAAAFABQAFABAEAEQADAEAAAHQAAAGgFADQgEADgIABQgIABgKABQgJACgHADQgIADgFAGQgFAHgBALQABAKAEAHQAEAGAIADQAIADAJAAQALAAAJgEQAKgEAHgIQAAAIADAEQAFAEAGAAQAEAAADgBQADAAADgCIAAgNQgCABgCAA").p("ATFxOQAFgCAFgBQAJgBAIgBQAIgBAGgEIAAASQAAAFgDAFQgDAFgHAEQgIAEgLAAQgFAAgEgBQgFgCgDgDQgCgEgBgFQABgGACgEQADgEAFgC").p("AQ5yMQgJAAgJADQgJADgFAGQgGAHAAAKQAAAKAFAGQAFAGAHADQAIADAIACQAJABAIACQAHACAFAEQAFADAAAHQAAAGgEADQgEAEgGABQgFABgGAAQgHAAgHgCQgFgBgFgFQgDgEgBgIIgQAAQAAANAGAIQAGAHAKAEQAKADALAAQALAAAKgDQAKgDAGgHQAHgHAAgMQAAgKgFgGQgFgGgHgDQgIgDgJgCQgIgCgHgCQgIgBgFgEQgFgDAAgGQAAgFADgDQADgDAFgBQAFgBAGAAQAFAAAGABQAFACADAEQAEAEAAAGIASAAQgBgMgGgHQgGgHgJgDQgJgDgMAA").p("AOhyMQgLAAgKADQgKAEgGAHQgGAIgBANIARAAQABgMAHgEQAHgEALAAQAGAAAFABQAFABAEAEQADAEAAAHQAAAGgFADQgFADgHABQgIABgKABQgJACgIADQgIADgFAGQgFAHAAALQAAAKAFAHQAFAGAHADQAIADAKAAQAKAAAKgEQAIgEAHgIQABAIAEAEQADAEAHAAQAEAAADgBQADAAADgCIAAgNQgDABAAAAQgCAAgBAAQgEAAAAgDQgBgCAAgGIAAg2QAAgMgGgGQgGgGgJgCQgIgCgKAA").p("AONxOQAFgCAGgBQAJgBAIgBQAJgBAFgEIAAASQAAAFgDAFQgEAFgGAEQgHAEgMAAQgFAAgFgBQgEgCgDgDQgDgEAAgFQAAgGADgEQADgEAEgC").p("APnyxIAACPIARAAIAAiPIgRAA").p("ALcyKIAAAOQgEgGgGgDQgGgEgGgCQgGgBgFAAQgQAAgLAHQgLAIgFAMQgFAMAAAPQAAAPAFAMQAGAMALAIQAKAHAQAAQAKAAAKgEQAJgEAEgIIAAA1IARAAIAAiPIgRAA").p("AK8x9QAMAAAHAGQAHAFADAJQAEAJAAAKQAAAKgEAJQgDAJgHAFQgGAGgMAAQgLAAgHgFQgHgGgDgIQgEgJAAgKQAAgKADgJQADgJAHgGQAHgGALAA").p("AMIxGQAAAMADAIQAEAJAIAEQAIAFANAAQALAAAIgEQAJgFAGgKIAAAAIAAARIAQAAIAAhoIgRAAIAAA7QAAAJgEAHQgDAIgHAEQgHAEgKAAQgKAAgFgGQgFgFAAgKIAAhGIgSAAIAABE").p("AHXyKIgUAAIAAgfIgRAAIAAAfIgSAAIAAAPIASAAIAABCQAAAKACAEQADAFAFACQAFACAJAAIANAAIAAgPIgIAAQgHAAgDgCQgDgCABgFIAAhBIAUAAIAAgP").p("AIixyQgFAMgBAQQABAQAFAMQAFAMAMAHQALAHAPAAQATAAALgJQAMgJADgRIgRAAQgCAKgHAFQgHAFgKAAQgMAAgHgFQgIgEgDgIQgDgIAAgJIBOAAQAAgJgCgLQgDgKgFgJQgFgJgKgFQgIgGgOAAQgPAAgKAHQgLAHgHAM").p("AIzxuQADgHAHgEQAGgEAJAAQAIAAAHAEQAGAEAFAGQADAHABAIIg8AAQABgIAEgG").p("AFNyFQgLAIgGAMQgFANAAAPQAAAQAGAMQAGAMAKAGQALAHAPAAQAUAAAMgKQALgLADgTIgRAAQgCAMgHAGQgIAHgMAAQgKAAgHgFQgGgGgEgIQgDgJAAgKQAAgKADgJQADgKAHgFQAHgGAMAAQALAAAHAFQAGAGACAKIARAAQAAgNgHgIQgGgHgKgEQgJgEgMAAQgQAAgLAH").p("AEgx4QgFgJgKgFQgJgGgNAAQgPAAgLAHQgLAHgGAMQgGAMgBAQQABAQAGAMQAFAMALAHQALAHAQAAQASAAAMgJQALgJAEgRIgRAAQgDAKgHAFQgGAFgLAAQgLAAgHgFQgIgEgDgIQgEgIAAgJIBOAAQABgJgCgLQgDgKgFgJ").p("AEXxgIg8AAQACgIADgGQAEgHAGgEQAHgEAIAAQAJAAAGAEQAHAEAEAGQAEAHAAAI").p("ACjycIARAAIAAgVIgRAAIAAAV").p("ABJyIQgJAEgEAIIgBAAIAAg1IgQAAIAACPIAQAAIAAgOIABAAQADAGAGAEQAGADAHACQAGABAFAAQAQAAAKgHQALgIAGgMQAFgMAAgPQAAgOgGgNQgFgMgLgHQgLgIgPAAQgLAAgJAE").p("ABsx4QAIAGADAJQAEAIAAAKQAAAKgEAKQgCAJgHAFQgHAGgLAAQgMAAgHgGQgHgFgEgJQgEgJABgKQgBgKAEgJQADgJAHgFQAHgGAMAAQALAAAGAF").p("ACjyKIAAByQAAAIgCADQgDADgFAAQgBAAgDAAQgBAAgCAAIAAAPQACAAADAAQACAAACAAQAMAAAGgGQAGgGABgOIAAh1IgRAA").p("AhDxxQgFAMAAAPQAAAPAFANQAGAMALAHQAMAHAQAAQAQAAAKgHQAMgHAGgMQAFgNAAgPQAAgPgFgMQgGgNgMgHQgKgHgQAAQgQAAgMAHQgLAHgGAN").p("AgyxrQAEgJAIgEQAHgFAJAAQAJAAAHAFQAHAEAEAJQAEAIAAANQAAANgEAIQgEAJgHAFQgHAEgJAAQgJAAgHgEQgIgFgEgJQgEgIgBgNQABgNAEgI").p("AlKyFQgLAHgGANQgFAMAAAPQAAAPAFANQAGAMALAHQAMAHAQAAQAQAAALgHQAMgHAGgMQAFgNAAgPQAAgPgFgMQgGgNgMgHQgLgHgQAAQgQAAgMAH").p("AlKxrQAEgJAIgEQAHgFAJAAQAJAAAHAFQAIAEAEAJQAEAIAAANQAAANgEAIQgEAJgIAFQgHAEgJAAQgJAAgHgEQgIgFgEgJQgEgIgBgNQABgNAEgI").p("Ai7yMQgLAAgJAEQgJAFgFAKIAAgRIgQAAIAABoIARAAIAAg7QAAgJADgHQAEgIAGgEQAHgEAKAAQAKAAAGAGQAGAFAAAKIAABGIAQAAIAAhEQAAgLgDgJQgDgIgIgFQgHgFgOAA").p("AnVyMQgOAAgMAHQgLAHgGAMQgGAMAAAQQAAAQAGAMQAFAMALAHQALAHARAAQARAAAMgJQAMgJADgRIgRAAQgCAKgHAFQgHAFgKAAQgMAAgHgFQgHgEgEgIQgDgIAAgJIBOAAQAAgJgCgLQgDgKgFgJQgFgJgKgFQgJgGgNAA").p("AnwxuQAEgHAGgEQAHgEAJAAQAIAAAHAEQAHAEADAGQAEAHAAAIIg7AAQABgIADgG").p("Aoax9QgHgHgJgEQgJgEgNAAQgQAAgLAHQgKAIgGAMQgGANAAAPQAAAQAHAMQAFAMAKAGQALAHAQAAQATAAAMgKQAMgLACgTIgRAAQgCAMgHAGQgHAHgMAAQgLAAgGgFQgHgGgDgIQgEgJAAgKQAAgKAEgJQACgKAIgFQAGgGANAAQALAAAGAFQAGAGADAKIARAAQgBgNgGgI").p("AqwyKIAABoIARAAIAAguQAAgUAIgLQAKgLAUAAIAAgSQgOAAgJAGQgKAGgGAMIAAAAIAAgWIgQAA").p("ArKxxQgGgNgLgHQgLgHgQAAQgRAAgLAHQgMAHgFANQgGAMAAAPQAAAPAGANQAFAMAMAHQALAHARAAQAQAAALgHQALgHAGgMQAGgNAAgPQAAgPgGgM").p("ArbxrQAEAIAAANQAAANgEAIQgEAJgIAFQgHAEgIAAQgKAAgHgEQgHgFgFgJQgEgIAAgNQAAgNAEgIQAFgJAHgEQAHgFAKAAQAIAAAHAFQAIAEAEAJ").p("Atcx7IAABZIARAAIAAhZIAUAAIAAgPIgUAAIAAgOQAAgHADgCQAEgDAGAAQACAAADABQACAAADABIAAgPQgDgBgDAAQgCgBgDAAQgOAAgIAHQgHAGAAANIAAAPIgRAAIAAAPIARAA").p("Ax7yMQgMAAgIAEQgJAFgFAKIAAgRIgQAAIAABoIARAAIAAg7QAAgJADgHQADgIAHgEQAHgEAKAAQAKAAAGAGQAFAFAAAKIAABGIARAAIAAhEQAAgLgDgJQgDgIgIgFQgIgFgNAA").p("Aw7xPQgFAHAAALQAAAKAFAHQAEAGAIADQAIADAJAAQALAAAJgEQAJgEAHgIQABAIAEAEQADAEAHAAQAEAAADgBQADAAACgCIAAgNQgCABAAAAQgCAAgBAAQgEAAgBgDQgBgCABgGIAAg2QgBgMgFgGQgGgGgJgCQgJgCgJAAQgMAAgKADQgJAEgGAHQgGAIgBANIARAAQABgMAHgEQAHgEALAAQAFAAAFABQAGABADAEQAEAEAAAHQAAAGgFADQgFADgIABQgHABgKABQgJACgIADQgIADgFAG").p("AwkxOQAFgCAGgBQAJgBAIgBQAIgBAGgEIAAASQAAAFgEAFQgDAFgHAEQgHAEgLAAQgFAAgFgBQgEgCgDgDQgDgEAAgFQAAgGADgEQADgEAEgC").p("AvKyxIAACPIARAAIAAiPIgRAA").p("A09yxIgRAAIAAAVIARAAIAAgV").p("A0PyFQgMAHgFANQgGAMAAAPQAAAPAGANQAFAMAMAHQALAHAQAAQARAAALgHQALgHAGgMQAFgNAAgPQAAgPgFgMQgGgNgLgHQgLgHgRAAQgQAAgLAH").p("Azkx4QAIAEAEAJQAEAIAAANQAAANgEAIQgEAJgIAFQgHAEgJAAQgJAAgHgEQgHgFgFgJQgEgIAAgNQAAgNAEgIQAFgJAHgEQAHgFAJAAQAJAAAHAF").p("A3RyMQgRAAgKAHQgLAIgGAMQgFANAAAPQAAAQAGAMQAFAMALAGQAKAHAQAAQAUAAALgKQAMgLADgTIgRAAQgCAMgHAGQgIAHgMAAQgLAAgGgFQgHgGgDgIQgDgJAAgKQAAgKADgJQADgKAHgFQAHgGAMAAQALAAAGAFQAHAGACAKIARAAQgBgNgGgIQgGgHgKgEQgJgEgMAA").p("A13ypIgRAAIAAAfIgRAAIAAAPIARAAIAABCQAAAKADAEQACAFAGACQAFACAJAAIANAAIAAgPIgIAAQgIAAgCgCQgDgCAAgFIAAhBIAVAAIAAgPIgVAAIAAgf").p("A09wiIAAhoIgRAAIAABoIARAA").p("A6byKIgSAAIAAAPIASAAIAABZIARAAIAAhZIAUAAIAAgPIgUAAIAAgOQAAgHADgCQADgDAHAAQACAAACABQADAAACABIAAgPQgCgBgDAAQgDgBgDAAQgOAAgHAHQgHAGAAANIAAAP").p("A4ZycIAAgVIgRAAIAAAVIARAA").p("A4qyKIAABoIARAAIAAhoIgRAA").p("A5syKIAABoIARAAIAAguQAAgUAIgLQAJgLAUAAIAAgSQgNAAgJAGQgKAGgGAMIAAAAIAAgWIgQAA").p("A9WyKIAAAPIASAAIAABCQAAAKACAEQADAFAFACQAGACAIAAIANAAIAAgPIgIAAQgHAAgDgCQgDgCABgFIAAhBIAUAAIAAgPIgUAAIAAgfIgRAAIAAAfIgSAA").p("A+ayJQgJADgGAGQgGAHAAAKQAAAKAFAGQAFAGAIADQAHADAJACQAJABAHACQAIACAFAEQAFADAAAHQAAAGgEADQgEAEgGABQgGABgFAAQgHAAgHgCQgGgBgEgFQgEgEAAgIIgRAAQABANAGAIQAGAHAJAEQAKADAMAAQAKAAAKgDQALgDAGgHQAHgHAAgMQAAgKgFgGQgFgGgIgDQgHgDgJgCQgIgCgIgCQgIgBgFgEQgFgDAAgGQAAgFAEgDQADgDAFgBQAFgBAFAAQAGAAAFABQAFACAEAEQADAEABAGIARAAQgBgMgFgHQgGgHgJgDQgKgDgLAAQgJAAgJAD").p("A8Nw4IAAAWIAMAAQAAADgBAEQgBAEgDADQgCAEgFABIAAAKQALgDAGgJQAFgIAAgLIAAgUIgWAA").p("Egg2gSGQgKAGgGAMIAAAAIAAgWIgQAAIAABoIARAAIAAguQAAgUAIgLQAJgLAUAAIAAgSQgNAAgJAG").p("EggbgRWQABAQAFAMQAGAMALAHQALAHAQAAQASAAALgJQAMgJADgRIgRAAQgCAKgHAFQgHAFgKAAQgMAAgHgFQgHgEgEgIQgDgIAAgJIBOAAQAAgJgCgLQgCgKgFgJQgGgJgJgFQgJgGgOAAQgOAAgLAHQgLAHgGAMQgGAMgBAQ").p("A/cx5QAHAEAEAGQADAHABAIIg8AAQABgIAEgGQADgHAHgEQAGgEAJAAQAJAAAGAE").p("Egj4gRNIAQArIAVAAIg4iPIgVAAIg4CPIAUAAIAQgrIA8AA").p("EgkugRdIAYhDIABAAIAXBDIgwAA").p("EgjUgSKIAAAPIASAAIAABCQAAAKACAEQADAFAFACQAGACAIAAIANAAIAAgPIgIAAQgHAAgDgCQgDgCABgFIAAhBIAUAAIAAgPIgUAAIAAgfIgRAAIAAAfIgSAA").f();
	this.shape_1.setTransform(236.5,134);

	// Layer 9
	this.instance = new lib.redCircle();
	this.instance.setTransform(-14,179.5);

	this.instance_1 = new lib.redCircle();
	this.instance_1.setTransform(154.5,194.2);

	// Layer 10
	this.txt = new lib.fnText_fric_new();
	this.txt.setTransform(67,268.2,0.577,0.577,0,0,0,20.6,16.9);

	this.txt_1 = new lib.fnText_fric();
	this.txt_1.setTransform(265.5,268.2,0.577,0.577,0,0,0,20.6,16.9);

	// Layer 2
	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#8bb0dd").p("AnoAiIIwAFIAAgCIDIACIAAhMIowgEIAAACIjIgCIAABL").f();
	this.shape_2.setTransform(210.2,239.7);

	this.head_1 = new lib.head_arr_r_y();
	this.head_1.setTransform(246.4,239.7,1.603,1.603,0,0,0,8,0);

	// Layer 6
	this.instance_2 = new lib.Summary_forcevector_down("single",0);
	this.instance_2.setTransform(150.6,285,1,1,180,0,0,8.5,-36.4);

	this.instance_3 = new lib.Summary_forcevector("single",0);
	this.instance_3.setTransform(149.3,193.9,1,1,0,0,179.9,10.2,-36.5);

	// Layer 8
	this.instance_4 = new lib.dogs_101copy2("single",0);
	this.instance_4.setTransform(399.4,217,0.663,0.663,0,0,0,164.4,97.1);

	// Layer 7
	this.text = new Text("m/s2", "20px HelveticaNeueLT Std", "#ffffff");
	this.text.textAlign = "center";
	this.text.textBaseline = "top";
	this.text.lineHeight = 20;
	this.text.setTransform(525.8,339.2);

	this.text_1 = new Text("0.00", "20px HelveticaNeueLT Std", "#ffffff");
	this.text_1.textBaseline = "top";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 52;
	this.text_1.setTransform(453.2,339.9);

	this.text_2 = new Text("Acceleration:", "20px HelveticaNeueLT Std", "#ffffff");
	this.text_2.textBaseline = "top";
	this.text_2.lineHeight = 20;
	this.text_2.setTransform(316.4,342.2);

	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#000000").p("ABgB/IRCAAIAAkXIxCAAIAAEX").f().s("#999999").ss(2,1,1,3).p("ABgB/IAAkXIRCAAIAAEXIxCAA").cp();
	this.shape_3.setTransform(434.9,354.2);

	// Layer 12
	this.instance_5 = new lib.sledgeMc();
	this.instance_5.setTransform(147.3,219.5,1,1,0,0,0,148.3,51);

	// Layer 3
	this.instance_6 = new lib.boxes_01("single",0);
	this.instance_6.setTransform(151.6,207.4,1,1,0,0,0,81.3,79.6);

	this.instance_7 = new lib.front55("synched",0);
	this.instance_7.setTransform(153.1,223.3,0.624,0.624);

	this.grass_img_fea = new lib.n_grass_img();
	this.grass_img_fea.setTransform(1795.2,287,1,1,0,0,0,1829,338.1);

	// learn more buttons
	this.instance_8 = new lib.popup_201();
	this.instance_8.setTransform(467,198.7,1,1,0,0,0,490.8,205.3);

	this.addChild(this.instance_8,this.grass_img_fea,this.instance_7,this.instance_6,this.instance_5,this.shape_3,this.text_2,this.text_1,this.text,this.instance_4,this.instance_3,this.instance_2,this.head_1,this.shape_2,this.txt_1,this.txt,this.instance_1,this.instance,this.shape_1,this.head,this.shape);
}).prototype = p = new Container();
p.constructor = lib.learnmore_02;
p.nominalBounds = new Rectangle(-23.7,-6.6,2456.9,640.1);

(lib.learnmore_03 = function() {
	this.initialize();

	// Layer 11
	this.shape = new Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").p("EAkTgAvQgJgFgOgBQgOABgLAGQgLAHgGAMQgGANgBAOQABAQAFAMQAGANALAHQALAHAQAAQASAAALgJQAMgJADgSIgRAAQgCAKgHAGQgHAFgKAAQgMAAgHgFQgHgFgEgHQgDgIAAgJIBOAAQAAgJgCgKQgCgKgFgJQgGgJgJgG").p("EAkVgAXQADAGABAJIg8AAQABgIAEgHQADgHAHgEQAGgDAJgBQAJABAGADQAHAEAEAH").p("EAhBgAvQgJAGgGANIgBAAIAAgWIgQAAIAABnIARAAIAAgvQAAgTAJgLQAJgKAUgBIAAgSQgOAAgJAG").p("EAiAgAgQAHgFAMgBQALABAGAFQAHAFACAKIARAAQgBgMgGgIQgGgIgKgEQgJgEgMAAQgRABgKAHQgLAHgGANQgFAMAAAPQAAAQAGALQAFAMALAHQAKAHAQAAQAUgBALgKQAMgKADgUIgRAAQgCAMgHAHQgIAHgMAAQgLgBgGgFQgHgFgDgJQgDgIAAgKQAAgKADgJQADgJAHgG").p("EAlZAA1IAAgXIgWAAIAAAXIAWAA").p("AeihMQACABADAAIAAgPQgDAAgDgBQgDAAgCAAQgOAAgIAGQgHAHAAAMIAAAQIgSAAIAAAPIASAAIAABYIARAAIAAhYIAUAAIAAgPIgUAAIAAgPQAAgGADgDQAEgCAGAAQACAAADAA").p("AeoABQAAAPAGAMQAFAMAMAIQALAGARABQAQgBALgGQALgIAGgMQAGgMAAgPQAAgPgGgMQgGgMgLgHQgLgHgQgBQgRABgLAHQgMAHgFAMQgGAMAAAP").p("Ae/gUQAEgIAHgFQAHgFAKAAQAJAAAGAFQAIAFAFAIQAEAJAAAMQAAAMgEAJQgFAJgIAEQgGAFgJAAQgKAAgHgFQgHgEgEgJQgEgJgBgMQABgMAEgJ").p("AbYgtQgLAHgFAMQgFAMAAAOQAAAPAFANQAGAMALAIQAKAGAQABQALAAAJgEQAJgEAEgJIAAAPIARAAIAAiPIgRAAIAAA2QgEgGgGgEQgGgEgGgBQgGgCgFAAQgQABgLAH").p("AbYgRQADgJAHgGQAHgFALgBQAMABAHAFQAHAGAEAIQADAJAAAKQAAAKgDAIQgEAJgGAGQgHAFgMABQgLgBgHgFQgHgFgDgJQgEgJAAgKQAAgJADgJ").p("AazgNQgCgKgFgJQgGgJgJgGQgJgFgOgBQgOABgLAGQgLAHgGAMQgHANAAAOQAAAQAGAMQAGANALAHQALAHAQAAQASAAALgJQALgJAEgSIgRAAQgCAKgHAGQgHAFgLAAQgLAAgHgFQgHgFgEgHQgDgIAAgJIBNAAQABgJgCgK").p("AajgIIg8AAQABgIAEgHQADgHAHgEQAGgDAJgBQAJABAGADQAHAEAEAHQADAGABAJ").p("AYHhaIAACPIARAAIAAiPIgRAA").p("AXcgtQgLgHgQgBQgLAAgJAEQgJAEgEAJIAAAAIAAgOIgRAAIAACOIARAAIAAg2IAAAAQAEAHAGADQAFAEAGABQAHACAGAAQAPgBALgGQAKgIAGgMQAFgMAAgPQAAgOgGgMQgFgNgKgH").p("AXfAAQAAAKgDAJQgEAJgGAGQgHAFgMABQgLAAgHgGQgHgFgEgJQgDgJAAgLQAAgIADgJQADgJAHgGQAHgFAMgBQAKABAIAFQAHAFADAJQAEAJAAAJ").p("AY0gyIAABnIARAAIAAhnIgRAA").p("AY0hFIARAAIAAgVIgRAAIAAAV").p("AU7gxQgJAEgEAJIAAAAIAAgOIgRAAIAACOIARAAIAAg2IAAAAQAEAHAGADQAFAEAHABQAGACAGAAQAPgBALgGQAKgIAFgMQAFgMAAgPQAAgOgFgMQgFgNgKgHQgLgHgQgBQgLAAgJAE").p("AUwgRQADgJAHgGQAHgFALgBQAMABAHAFQAGAFAEAJQAEAJAAAJQAAAKgDAJQgDAJgHAGQgHAFgLABQgMAAgHgGQgIgFgDgJQgDgJAAgLQAAgIADgJ").p("AUGAnQgBABgBAAQgEAAAAgDQgBgDAAgGIAAg0QAAgMgGgGQgGgHgJgCQgIgCgKAAQgLAAgKAEQgKADgGAIQgGAHgBANIARAAQABgLAHgEQAHgFALAAQAGAAAFACQAFABAEAEQADADAAAIQAAAGgFADQgEACgIABQgIABgKACQgJABgHADQgIACgFAHQgFAGgBAMQABAKAEAHQAEAGAIADQAIADAJAAQALAAAJgEQAKgEAHgIQAAAIADAEQAFAEAGAAQAEAAADgBQADgBADgBIAAgNQgCAAgCAA").p("ATFAJQAFgCAFgBQAJgCAIgBQAIAAAGgDIAAAQQAAAFgDAFQgDAGgHAEQgIADgLABQgFAAgEgCQgFgBgDgEQgCgDgBgGQABgGACgEQADgDAFgC").p("AQ5g1QgJAAgJADQgJADgFAHQgGAGAAALQAAAKAFAFQAFAGAHACQAIADAIACQAJACAIACQAHACAFADQAFAEAAAGQAAAHgEADQgEAEgGABQgFABgGAAQgHAAgHgCQgFgCgFgEQgDgEgBgIIgQAAQAAANAGAHQAGAIAKADQAKAEALAAQALAAAKgDQAKgDAGgIQAHgHAAgLQAAgKgFgHQgFgFgHgDQgIgDgJgBQgIgCgHgCQgIgCgFgDQgFgDAAgGQAAgGADgCQADgDAFgBQAFgCAGAAQAFAAAGACQAFACADADQAEAEAAAHIASAAQgBgNgGgHQgGgHgJgDQgJgDgMAA").p("AOhg1QgLAAgKAEQgKADgGAIQgGAHgBANIARAAQABgLAHgEQAHgFALAAQAGAAAFACQAFABAEAEQADADAAAIQAAAGgFADQgFACgHABQgIABgKACQgJABgIADQgIACgFAHQgFAGAAAMQAAAKAFAHQAFAGAHADQAIADAKAAQAKAAAKgEQAIgEAHgIQABAIAEAEQADAEAHAAQAEAAADgBQADgBADgBIAAgNQgDAAAAAAQgCABgBAAQgEAAAAgDQgBgDAAgGIAAg0QAAgMgGgGQgGgHgJgCQgIgCgKAA").p("AONAJQAFgCAGgBQAJgCAIgBQAJAAAFgDIAAAQQAAAFgDAFQgEAGgGAEQgHADgMABQgFAAgFgCQgEgBgDgEQgDgDAAgGQAAgGADgEQADgDAEgC").p("APnhaIAACPIARAAIAAiPIgRAA").p("ALcgyIAAAOQgEgGgGgEQgGgEgGgBQgGgCgFAAQgQABgLAHQgLAHgFAMQgFAMAAAOQAAAPAFANQAGAMALAIQAKAGAQABQAKAAAKgEQAJgEAEgJIAAA2IARAAIAAiOIgRAA").p("AK8gmQAMABAHAFQAHAGADAIQAEAJAAAKQAAAKgEAIQgDAJgHAGQgGAFgMABQgLgBgHgFQgHgFgDgJQgEgJAAgKQAAgJADgJQADgJAHgGQAHgFALgB").p("AMIARQAAALADAJQAEAIAIAFQAIAFANAAQALAAAIgFQAJgFAGgJIAAAAIAAARIAQAAIAAhnIgRAAIAAA6QAAAJgEAHQgDAHgHAEQgHAFgKAAQgKAAgFgGQgFgGAAgJIAAhFIgSAAIAABD").p("AHXgyIgUAAIAAgfIgRAAIAAAfIgSAAIAAAPIASAAIAABBQAAAJACAFQADAFAFACQAFACAJAAIANAAIAAgPIgIAAQgHAAgDgCQgDgCABgGIAAg/IAUAAIAAgP").p("AIigbQgFANgBAOQABAQAFAMQAFANAMAHQALAHAPAAQATAAALgJQAMgJADgSIgRAAQgCAKgHAGQgHAFgKAAQgMAAgHgFQgIgFgDgHQgDgIAAgJIBOAAQAAgJgCgKQgDgKgFgJQgFgJgKgGQgIgFgOgBQgPABgKAGQgLAHgHAM").p("AIzgXQADgHAHgEQAGgDAJgBQAIABAHADQAGAEAFAHQADAGABAJIg8AAQABgIAEgH").p("AFNgtQgLAHgGANQgFAMAAAPQAAAQAGALQAGAMAKAHQALAHAPAAQAUgBAMgKQALgKADgUIgRAAQgCAMgHAHQgIAHgMAAQgKgBgHgFQgGgFgEgJQgDgIAAgKQAAgKADgJQADgJAHgGQAHgFAMgBQALABAHAFQAGAFACAKIARAAQAAgMgHgIQgGgIgKgEQgJgEgMAAQgQABgLAH").p("AEgggQgFgJgKgGQgJgFgNgBQgPABgLAGQgLAHgGAMQgGANgBAOQABAQAGAMQAFANALAHQALAHAQAAQASAAAMgJQALgJAEgSIgRAAQgDAKgHAGQgGAFgLAAQgLAAgHgFQgIgFgDgHQgEgIAAgJIBOAAQABgJgCgKQgDgKgFgJ").p("AEXgIIg8AAQACgIADgHQAEgHAGgEQAHgDAIgBQAJABAGADQAHAEAEAHQAEAGAAAJ").p("ACjhFIARAAIAAgVIgRAAIAAAV").p("ABJgxQgJAEgEAJIgBAAIAAg2IgQAAIAACPIAQAAIAAgPIABAAQADAHAGADQAGAEAHABQAGACAFAAQAQgBAKgGQALgIAGgMQAFgMAAgPQAAgOgGgMQgFgNgLgHQgLgHgPgBQgLAAgJAE").p("ABsggQAIAFADAJQAEAJAAAJQAAAKgEAJQgCAJgHAGQgHAFgLABQgMAAgHgGQgHgFgEgJQgEgJABgLQgBgIAEgJQADgJAHgGQAHgFAMgBQALABAGAF").p("ACjgyIAABxQAAAIgCADQgDADgFAAQgBAAgDAAQgBAAgCgBIAAAPQACABADAAQACAAACAAQAMAAAGgGQAGgGABgPIAAhzIgRAA").p("AhDgaQgFAMAAAPQAAAPAFAMQAGAMALAIQAMAGAQABQAQgBAKgGQAMgIAGgMQAFgMAAgPQAAgPgFgMQgGgMgMgHQgKgHgQgBQgQABgMAHQgLAHgGAM").p("AgygUQAEgIAIgFQAHgFAJAAQAJAAAHAFQAHAFAEAIQAEAJAAAMQAAAMgEAJQgEAJgHAEQgHAFgJAAQgJAAgHgFQgIgEgEgJQgEgJgBgMQABgMAEgJ").p("AlKgtQgLAHgGAMQgFAMAAAPQAAAPAFAMQAGAMALAIQAMAGAQABQAQgBALgGQAMgIAGgMQAFgMAAgPQAAgPgFgMQgGgMgMgHQgLgHgQgBQgQABgMAH").p("AlKgUQAEgIAIgFQAHgFAJAAQAJAAAHAFQAIAFAEAIQAEAJAAAMQAAAMgEAJQgEAJgIAEQgHAFgJAAQgJAAgHgFQgIgEgEgJQgEgJgBgMQABgMAEgJ").p("Ai7g1QgLAAgJAFQgJAFgFAJIAAgQIgQAAIAABnIARAAIAAg6QAAgKADgHQAEgHAGgEQAHgEAKgBQAKABAGAFQAGAGAAAJIAABGIAQAAIAAhEQAAgLgDgIQgDgJgIgFQgHgFgOAA").p("AnVg1QgOABgMAGQgLAHgGAMQgGANAAAOQAAAQAGAMQAFANALAHQALAHARAAQARAAAMgJQAMgJADgSIgRAAQgCAKgHAGQgHAFgKAAQgMAAgHgFQgHgFgEgHQgDgIAAgJIBOAAQAAgJgCgKQgDgKgFgJQgFgJgKgGQgJgFgNgB").p("AnwgXQAEgHAGgEQAHgDAJgBQAIABAHADQAHAEADAHQAEAGAAAJIg7AAQABgIADgH").p("AoaglQgHgIgJgEQgJgEgNAAQgQABgLAHQgKAHgGANQgGAMAAAPQAAAQAHALQAFAMAKAHQALAHAQAAQATgBAMgKQAMgKACgUIgRAAQgCAMgHAHQgHAHgMAAQgLgBgGgFQgHgFgDgJQgEgIAAgKQAAgKAEgJQACgJAIgGQAGgFANgBQALABAGAFQAGAFADAKIARAAQgBgMgGgI").p("AqwgyIAABnIARAAIAAgvQAAgTAIgLQAKgKAUgBIAAgSQgOAAgJAGQgKAGgGANIAAAAIAAgWIgQAA").p("ArKgaQgGgMgLgHQgLgHgQgBQgRABgLAHQgMAHgFAMQgGAMAAAPQAAAPAGAMQAFAMAMAIQALAGARABQAQgBALgGQALgIAGgMQAGgMAAgPQAAgPgGgM").p("ArbgUQAEAJAAAMQAAAMgEAJQgEAJgIAEQgHAFgIAAQgKAAgHgFQgHgEgFgJQgEgJAAgMQAAgMAEgJQAFgIAHgFQAHgFAKAAQAIAAAHAFQAIAFAEAI").p("AtcgjIAABYIARAAIAAhYIAUAAIAAgPIgUAAIAAgPQAAgGADgDQAEgCAGAAQACAAADAAQACABADAAIAAgPQgDAAgDgBQgCAAgDAAQgOAAgIAGQgHAHAAAMIAAAQIgRAAIAAAPIARAA").p("Ax7g1QgMAAgIAFQgJAFgFAJIAAgQIgQAAIAABnIARAAIAAg6QAAgKADgHQADgHAHgEQAHgEAKgBQAKABAGAFQAFAGAAAJIAABGIARAAIAAhEQAAgLgDgIQgDgJgIgFQgIgFgNAA").p("Aw7AIQgFAGAAAMQAAAKAFAHQAEAGAIADQAIADAJAAQALAAAJgEQAJgEAHgIQABAIAEAEQADAEAHAAQAEAAADgBQADgBACgBIAAgNQgCAAAAAAQgCABgBAAQgEAAgBgDQgBgDABgGIAAg0QgBgMgFgGQgGgHgJgCQgJgCgJAAQgMAAgKAEQgJADgGAIQgGAHgBANIARAAQABgLAHgEQAHgFALAAQAFAAAFACQAGABADAEQAEADAAAIQAAAGgFADQgFACgIABQgHABgKACQgJABgIADQgIACgFAH").p("AwkAJQAFgCAGgBQAJgCAIgBQAIAAAGgDIAAAQQAAAFgEAFQgDAGgHAEQgHADgLABQgFAAgFgCQgEgBgDgEQgDgDAAgGQAAgGADgEQADgDAEgC").p("AvKhaIAACPIARAAIAAiPIgRAA").p("A09haIgRAAIAAAVIARAAIAAgV").p("A0PgtQgMAHgFAMQgGAMAAAPQAAAPAGAMQAFAMAMAIQALAGAQABQARgBALgGQALgIAGgMQAFgMAAgPQAAgPgFgMQgGgMgLgHQgLgHgRgBQgQABgLAH").p("AzkghQAIAFAEAIQAEAJAAAMQAAAMgEAJQgEAJgIAEQgHAFgJAAQgJAAgHgFQgHgEgFgJQgEgJAAgMQAAgMAEgJQAFgIAHgFQAHgFAJAAQAJAAAHAF").p("A3Rg1QgRABgKAHQgLAHgGANQgFAMAAAPQAAAQAGALQAFAMALAHQAKAHAQAAQAUgBALgKQAMgKADgUIgRAAQgCAMgHAHQgIAHgMAAQgLgBgGgFQgHgFgDgJQgDgIAAgKQAAgKADgJQADgJAHgGQAHgFAMgBQALABAGAFQAHAFACAKIARAAQgBgMgGgIQgGgIgKgEQgJgEgMAA").p("A13hRIgRAAIAAAfIgRAAIAAAPIARAAIAABBQAAAJADAFQACAFAGACQAFACAJAAIANAAIAAgPIgIAAQgIAAgCgCQgDgCAAgGIAAg/IAVAAIAAgPIgVAAIAAgf").p("A09A1IAAhnIgRAAIAABnIARAA").p("A6bgyIgSAAIAAAPIASAAIAABYIARAAIAAhYIAUAAIAAgPIgUAAIAAgPQAAgGADgDQADgCAHAAQACAAACAAQADABACAAIAAgPQgCAAgDgBQgDAAgDAAQgOAAgHAGQgHAHAAAMIAAAQ").p("A4ZhFIAAgVIgRAAIAAAVIARAA").p("A4qgyIAABnIARAAIAAhnIgRAA").p("A5sgyIAABnIARAAIAAgvQAAgTAIgLQAJgKAUgBIAAgSQgNAAgJAGQgKAGgGANIAAAAIAAgWIgQAA").p("A9WgyIAAAPIASAAIAABBQAAAJACAFQADAFAFACQAGACAIAAIANAAIAAgPIgIAAQgHAAgDgCQgDgCABgGIAAg/IAUAAIAAgPIgUAAIAAgfIgRAAIAAAfIgSAA").p("A+agyQgJADgGAHQgGAGAAALQAAAKAFAFQAFAGAIACQAHADAJACQAJACAHACQAIACAFADQAFAEAAAGQAAAHgEADQgEAEgGABQgGABgFAAQgHAAgHgCQgGgCgEgEQgEgEAAgIIgRAAQABANAGAHQAGAIAJADQAKAEAMAAQAKAAAKgDQALgDAGgIQAHgHAAgLQAAgKgFgHQgFgFgIgDQgHgDgJgBQgIgCgIgCQgIgCgFgDQgFgDAAgGQAAgGAEgCQADgDAFgBQAFgCAFAAQAGAAAFACQAFACAEADQADAEABAHIARAAQgBgNgFgHQgGgHgJgDQgKgDgLAAQgJAAgJAD").p("A8NAeIAAAXIAMAAQAAADgBADQgBAEgDAEQgCADgFACIAAAKQALgEAGgIQAFgIAAgMIAAgUIgWAA").p("Egg2gAvQgKAGgGANIAAAAIAAgWIgQAAIAABnIARAAIAAgvQAAgTAIgLQAJgKAUgBIAAgSQgNAAgJAG").p("EggbAAAQABAQAFAMQAGANALAHQALAHAQAAQASAAALgJQAMgJADgSIgRAAQgCAKgHAGQgHAFgKAAQgMAAgHgFQgHgFgEgHQgDgIAAgJIBOAAQAAgJgCgKQgCgKgFgJQgGgJgJgGQgJgFgOgBQgOABgLAGQgLAHgGAMQgGANgBAO").p("A/cgiQAHAEAEAHQADAGABAJIg8AAQABgIAEgHQADgHAHgEQAGgDAJgBQAJABAGAD").p("Egj4AAJIAQAsIAVAAIg4iPIgVAAIg4CPIAUAAIAQgsIA8AA").p("EgkugAGIAYhCIABAAIAXBCIgwAA").p("EgjUgAyIAAAPIASAAIAABBQAAAJACAFQADAFAFACQAGACAIAAIANAAIAAgPIgIAAQgHAAgDgCQgDgCABgGIAAg/IAUAAIAAgPIgUAAIAAgfIgRAAIAAAfIgSAA").f();
	this.shape.setTransform(236.5,22.9);

	// Layer 9
	this.instance = new lib.redCircle();
	this.instance.setTransform(-14,179.5);

	this.instance_1 = new lib.redCircle();
	this.instance_1.setTransform(154.5,194.2);

	// Layer 10
	this.txt = new lib.fnText_fric_new();
	this.txt.setTransform(46.5,268.2,0.577,0.577,0,0,0,20.6,16.9);

	this.txt_1 = new lib.fnText_fric();
	this.txt_1.setTransform(276,268.2,0.577,0.577,0,0,0,20.6,16.9);

	// Layer 2
	this.head = new lib.head_arr_r_y();
	this.head.setTransform(44,239.6,1.603,1.603,0,0,180,8,0);

	this.head_1 = new lib.head_arr_r_y();
	this.head_1.setTransform(254.7,239.7,1.603,1.603,0,0,0,8,0);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#8bb0dd").p("AjkgpIAAgBIgyABIAAgBIhkABIAAgBIoyAFIAABLIBkAAIAAAAIAyAAIAAAAIBkAAIAAAAIIygFIAAhLIhkAB").p("AB3AiIIyAEIAAAAIBkAAIAAAAIAyAAIAAAAIBkAAIAAhLIoygEIAAABIhkgBIAAAAIgyAAIAAABIhkgBIAABL").f();
	this.shape_1.setTransform(149.3,239.7);

	// Layer 6
	this.instance_2 = new lib.Summary_forcevector_down("single",0);
	this.instance_2.setTransform(150.6,285,1,1,180,0,0,8.5,-36.4);

	this.instance_3 = new lib.Summary_forcevector("single",0);
	this.instance_3.setTransform(149.3,193.9,1,1,0,0,179.9,10.2,-36.5);

	// Layer 8
	this.instance_4 = new lib.dogs_101("single",0);
	this.instance_4.setTransform(399.4,217,0.663,0.663,0,0,0,164.4,97.1);

	// Layer 5
	this.instance_5 = new lib.boxes_01("single",3);
	this.instance_5.setTransform(151.6,207.4,1,1,0,0,0,81.3,79.6);

	// Layer 7
	this.instance_6 = new lib.boxes_01("single",0);
	this.instance_6.setTransform(151.6,207.4,1,1,0,0,0,81.3,79.6);

	this.text = new Text("m/s2", "20px HelveticaNeueLT Std", "#ffffff");
	this.text.textAlign = "center";
	this.text.textBaseline = "top";
	this.text.lineHeight = 20;
	this.text.setTransform(525.8,339.2);

	this.text_1 = new Text("0.00", "20px HelveticaNeueLT Std", "#ffffff");
	this.text_1.textBaseline = "top";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 52;
	this.text_1.setTransform(453.2,339.9);

	this.text_2 = new Text("Acceleration:", "20px HelveticaNeueLT Std", "#ffffff");
	this.text_2.textBaseline = "top";
	this.text_2.lineHeight = 20;
	this.text_2.setTransform(316.4,342.2);

	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#000000").p("AVRSbIRDAAIAAkYIxDAAIAAEY").f().s("#999999").ss(2,1,1,3).p("AVRSbIAAkYIRDAAIAAEYIxDAA").cp();
	this.shape_2.setTransform(308.4,248.9);

	// Layer 3
	this.instance_7 = new lib.sledgeMc();
	this.instance_7.setTransform(147.3,219.5,1,1,0,0,0,148.3,51);

	this.instance_8 = new lib.front55("synched",0);
	this.instance_8.setTransform(153.1,223.3,0.624,0.624);

	this.grass_img_fea = new lib.n_grass_img();
	this.grass_img_fea.setTransform(1795.2,287,1,1,0,0,0,1829,338.1);

	// learn more buttons
	this.instance_9 = new lib.popup_301();
	this.instance_9.setTransform(467,198.7,1,1,0,0,0,490.8,205.3);

	this.addChild(this.instance_9,this.grass_img_fea,this.instance_8,this.instance_7,this.shape_2,this.text_2,this.text_1,this.text,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.shape_1,this.head_1,this.head,this.txt_1,this.txt,this.instance_1,this.instance,this.shape);
}).prototype = p = new Container();
p.constructor = lib.learnmore_03;
p.nominalBounds = new Rectangle(-107374182.3,-107374182.3,107376615.5,107374815.9);

(lib.learnmore_04 = function() {
	this.initialize();

	// Layer 9
	this.shape = new Shape();
	this.shape.graphics.f("rgba(0,0,0,0.902)").p("EAvRgBRIgRAAIAAAfIgSAAIAAAPIASAAIAABBQAAAJACAFQADAFAGACQAFACAJAAIAMAAIAAgPIgHAAQgIAAgCgCQgEgCABgGIAAg/IAUAAIAAgPIgUAAIAAgf").p("EAwNAAeIgWAAIAAAXIAWAAIAAgX").p("EAsBgAuQgLAHgGAMQgGANAAAOQAAAQAFAMQAGANALAHQALAHAQAAQASAAAMgJQALgJAEgSIgSAAQgBAKgHAGQgIAFgKAAQgLAAgIgFQgHgFgEgHQgCgIAAgJIBNAAQAAgJgBgKQgDgKgFgJQgGgJgJgGQgJgFgNgBQgPABgLAG").p("EAsAgAXQADgHAHgEQAHgDAJgBQAIABAHADQAGAEAEAHQADAGABAJIg7AAQABgIADgH").p("EAtqgAyQgJADgFAHQgGAGAAALQAAAKAFAFQAFAGAHACQAIADAIACQAJACAIACQAHACAFADQAFAEAAAGQAAAHgEADQgEAEgGABQgGABgFAAQgHAAgHgCQgGgCgEgEQgDgEgBgIIgRAAQABANAGAHQAGAIAKADQAKAEALAAQALAAAKgDQAKgDAGgIQAHgHAAgLQAAgKgFgHQgFgFgIgDQgHgDgJgBQgIgCgHgCQgJgCgFgDQgFgDAAgGQAAgGAEgCQADgDAFgBQAFgCAGAAQAFAAAGACQAFACADADQADAEABAHIASAAQgBgNgGgHQgGgHgJgDQgJgDgMAAQgJAAgJAD").p("EApAgAyIgSAAIAAAPIASAAIAABBQAAAJACAFQADAFAFACQAFACAJAAIANAAIAAgPIgIAAQgIAAgCgCQgDgCAAgGIAAg/IAVAAIAAgPIgVAAIAAgfIgQAAIAAAf").p("EArlgA1QgOAAgJAGQgJAGgHANIAAAAIAAgWIgQAAIAABnIARAAIAAgvQAAgTAIgLQAKgKAUgBIAAgS").p("EAomAAoQgEAAgBgDQgBgDABgGIAAg0QgBgMgFgGQgHgHgIgCQgJgCgJAAQgMAAgKAEQgJADgGAIQgHAHgBANIASAAQABgLAGgEQAIgFALAAQAFAAAFACQAGABADAEQADADAAAIQAAAGgFADQgEACgIABQgIABgKACQgIABgIADQgIACgFAHQgFAGgBAMQABAKAEAHQAFAGAIADQAHADAKAAQAKAAAKgEQAJgEAHgIQABAIADAEQAEAEAGAAQAEAAAEgBQACgBADgBIAAgNQgCAAgBAAQgBABgBAA").p("EAnmAAJQAFgCAFgBQAKgCAIgBQAIAAAFgDIAAAQQAAAFgDAFQgDAGgHAEQgHADgLABQgFAAgFgCQgFgBgCgEQgDgDAAgGQAAgGADgEQACgDAFgC").p("EAmCgANQgCgKgFgJQgGgJgJgGQgJgFgOgBQgPABgKAGQgLAHgGAMQgHANAAAOQAAAQAGAMQAGANALAHQALAHAPAAQATAAALgJQALgJAEgSIgRAAQgCAKgHAGQgHAFgLAAQgLAAgHgFQgIgFgDgHQgDgIAAgJIBNAAQABgJgCgK").p("EAlugAXQADAGABAJIg8AAQABgIAEgHQADgHAHgEQAGgDAJgBQAJABAGADQAGAEAFAH").p("EAjPgAtQgLAHgFANQgFAMAAAPQAAAQAFALQAGAMAKAHQALAHAQAAQAUgBALgKQALgKAEgUIgSAAQgBAMgHAHQgIAHgMAAQgLgBgHgFQgGgFgEgJQgCgIAAgKQAAgKACgJQAEgJAGgGQAIgFAMgBQAKABAHAFQAHAFABAKIASAAQgBgMgHgIQgFgIgKgEQgKgEgLAAQgRABgLAH").p("EAiagAvQgJAGgGANIgBAAIAAgWIgQAAIAABnIARAAIAAgvQAAgTAIgLQAJgKAUgBIAAgSQgNAAgJAG").p("Af2haQgDAAgCgBQgDAAgDAAQgOAAgIAGQgHAHAAAMIAAAQIgRAAIAAAPIARAAIAABYIARAAIAAhYIAUAAIAAgPIgUAAIAAgPQAAgGADgDQAEgCAGAAQACAAADAAQACABADAAIAAgP").p("EAgBAABQAAAPAGAMQAFAMAMAIQALAGAQABQARgBALgGQALgIAGgMQAFgMAAgPQAAgPgFgMQgGgMgLgHQgLgHgRgBQgQABgLAHQgMAHgFAMQgGAMAAAP").p("EAgYgAUQAEgIAHgFQAHgFAJAAQAKAAAGAFQAIAFAFAIQAEAJAAAMQAAAMgEAJQgFAJgIAEQgGAFgKAAQgJAAgHgFQgHgEgEgJQgEgJgBgMQABgMAEgJ").p("AcsgzQgIgCgKAAQgMAAgKAEQgJADgGAIQgGAHgBANIARAAQABgLAHgEQAHgFALAAQAGAAAFACQAFABADAEQAEADAAAIQAAAGgFADQgFACgHABQgIABgKACQgJABgIADQgIACgFAHQgFAGAAAMQAAAKAFAHQAFAGAHADQAIADAKAAQAKAAAKgEQAIgEAHgIQABAIAEAEQADAEAHAAQAEAAADgBQADgBADgBIAAgNQgDAAAAAAQgCABgBAAQgEAAAAgDQgCgDABgGIAAg0QgBgMgFgGQgGgHgJgC").p("AcGAJQAFgCAGgBQAJgCAIgBQAJAAAFgDIAAAQQAAAFgEAFQgDAGgHAEQgGADgMABQgFAAgFgCQgEgBgDgEQgDgDAAgGQAAgGADgEQADgDAEgC").p("AdghaIAACPIARAAIAAiPIgRAA").p("AZ9gyIAABnIARAAIAAg6QAAgKADgHQAEgHAGgEQAHgEAKgBQAKABAGAFQAGAGAAAJIAABGIAQAAIAAhEQAAgLgDgIQgDgJgIgFQgHgFgOAAQgLAAgJAFQgIAFgGAJIAAgQIgQAA").p("AY2g1QgQABgLAHQgMAHgFAMQgGAMAAAPQAAAPAGAMQAFAMAMAIQALAGAQABQARgBALgGQALgIAGgMQAFgMAAgPQAAgPgFgMQgGgMgLgHQgLgHgRgB").p("AZGghQAIAFAEAIQAFAJAAAMQAAAMgFAJQgEAJgIAEQgGAFgKAAQgJAAgHgFQgHgEgEgJQgFgJAAgMQAAgMAFgJQAEgIAHgFQAHgFAJAAQAKAAAGAF").p("AW0gyIAAgfIgRAAIAAAfIgSAAIAAAPIASAAIAABBQAAAJACAFQADAFAFACQAFACAJAAIANAAIAAgPIgIAAQgHAAgDgCQgDgCABgGIAAg/IAUAAIAAgPIgUAA").p("AV0gRIARAAQAAgMgHgIQgGgIgKgEQgJgEgMAAQgQABgLAHQgLAHgGANQgFAMAAAPQAAAQAGALQAFAMALAHQALAHAPAAQAUgBAMgKQALgKADgUIgRAAQgCAMgHAHQgIAHgMAAQgKgBgHgFQgGgFgEgJQgDgIAAgKQAAgKADgJQADgJAHgGQAHgFAMgBQALABAHAFQAGAFACAK").p("AXcgyIAABnIASAAIAAhnIgSAA").p("AXuhaIgSAAIAAAVIASAAIAAgV").p("ATegvQgKAGgGANIAAAAIAAgWIgQAAIAABnIARAAIAAgvQAAgTAJgLQAIgKAUgBIAAgSQgNAAgJAG").p("ASphMQACABADAAIAAgPQgDAAgCgBQgDAAgDAAQgOAAgIAGQgHAHAAAMIAAAQIgRAAIAAAPIARAAIAABYIARAAIAAhYIAUAAIAAgPIgUAAIAAgPQAAgGADgDQAEgCAGAAQACAAADAA").p("AUAhaIAAAVIASAAIAAgVIgSAA").p("AUAgyIAABnIASAAIAAhnIgSAA").p("AQNg1QgMAAgIAFQgJAFgFAJIAAgQIgQAAIAABnIARAAIAAg6QAAgKADgHQADgHAIgEQAGgEALgBQAKABAFAFQAFAGAAAJIAABGIASAAIAAhEQAAgLgEgIQgDgJgIgFQgIgFgNAA").p("AMRgtQgGAEgDAGIAAg3IgRAAIAACPIARAAIAAg6QAAgKADgHQAEgHAHgEQAGgEALgBQAKABAGAFQAFAGAAAJIAABGIARAAIAAhEQAAgLgEgIQgDgJgIgFQgHgFgOAAQgGAAgHACQgGACgFAE").p("AOogzQgIgCgKAAQgLAAgKAEQgJADgHAIQgGAHgBANIARAAQACgLAGgEQAHgFAMAAQAFAAAFACQAFABAEAEQADADAAAIQAAAGgFADQgEACgIABQgIABgKACQgJABgHADQgIACgFAHQgFAGgBAMQABAKAEAHQAFAGAIADQAHADAKAAQAKAAAKgEQAJgEAHgIQAAAIAEAEQAEAEAGAAQAEAAAEgBQACgBADgBIAAgNQgCAAgBAAQgCABAAAAQgFAAAAgDQgBgDABgGIAAg0QgBgMgGgGQgGgHgJgC").p("AONAGQAJgCAIgBQAJAAAFgDIAAAQQAAAFgDAFQgDAGgHAEQgHADgMABQgFAAgEgCQgFgBgDgEQgCgDgBgGQABgGACgEQADgDAFgCQAFgCAFgB").p("AI/g1QgJAAgIADQgKADgFAHQgGAGAAALQAAAKAFAFQAFAGAHACQAIADAIACQAJACAIACQAHACAFADQAFAEAAAGQAAAHgEADQgEAEgGABQgFABgGAAQgGAAgHgCQgGgCgEgEQgEgEgBgIIgQAAQAAANAGAHQAHAIAJADQAKAEALAAQALAAAKgDQAKgDAGgIQAIgHAAgLQAAgKgFgHQgFgFgIgDQgHgDgKgBQgIgCgHgCQgIgCgFgDQgFgDAAgGQAAgGADgCQADgDAFgBQAFgCAGAAQAGAAAFACQAFACADADQAEAEABAHIARAAQgBgNgGgHQgGgHgJgDQgJgDgMAA").p("AKugyIAAAPIARAAIAABBQAAAJADAFQACAFAGACQAFACAJAAIANAAIAAgPIgIAAQgIAAgCgCQgDgCAAgGIAAg/IAVAAIAAgPIgVAAIAAgfIgRAAIAAAfIgRAA").p("AF7g1QgPABgLAGQgKAHgHAMQgGANAAAOQAAAQAGAMQAFANAMAHQAKAHAQAAQATAAALgJQALgJAEgSIgRAAQgCAKgHAGQgHAFgLAAQgLAAgHgFQgIgFgDgHQgDgIAAgJIBNAAQABgJgCgKQgDgKgFgJQgFgJgKgGQgIgFgOgB").p("AGJgiQAGAEAEAHQAEAGABAJIg8AAQABgIAEgHQADgHAHgEQAGgDAJgBQAIABAHAD").p("AHPggQADgDAFgBQAFgCAFAAQAGAAAGACQAFACADADQADAEABAHIASAAQgCgNgFgHQgGgHgJgDQgKgDgLAAQgJAAgJADQgJADgFAHQgHAGAAALQAAAKAFAFQAFAGAIACQAHADAJACQAJACAHACQAIACAFADQAFAEAAAGQAAAHgEADQgEAEgGABQgGABgFAAQgHAAgHgCQgGgCgEgEQgEgEAAgIIgRAAQABANAGAHQAGAIAJADQAKAEAMAAQAKAAAKgDQALgDAGgIQAHgHAAgLQAAgKgFgHQgFgFgIgDQgHgDgJgBQgIgCgHgCQgJgCgFgDQgFgDAAgGQAAgGAEgC").p("ACqg1QgJAAgJADQgJADgFAHQgHAGAAALQAAAKAFAFQAFAGAIACQAHADAJACQAJACAHACQAIACAFADQAFAEAAAGQAAAHgEADQgEAEgGABQgGABgFAAQgHAAgHgCQgGgCgEgEQgEgEAAgIIgRAAQABANAGAHQAGAIAJADQAKAEAMAAQAKAAAKgDQALgDAGgIQAHgHAAgLQAAgKgFgHQgFgFgIgDQgHgDgJgBQgIgCgHgCQgJgCgFgDQgFgDAAgGQAAgGAEgCQADgDAFgBQAFgCAFAAQAGAAAGACQAFACADADQADAEABAHIASAAQgCgNgFgHQgGgHgJgDQgKgDgLAA").p("AEghaIAACPIARAAIAAiPIgRAA").p("AgigyIAAAPIARAAIAABBQAAAJADAFQACAFAGACQAFACAIAAIANAAIAAgPIgIAAQgIAAgCgCQgCgCAAgGIAAg/IAUAAIAAgPIgUAAIAAgfIgRAAIAAAfIgRAA").p("ABggyIAABnIARAAIAAhnIgRAA").p("ABxhaIgRAAIAAAVIARAAIAAgV").p("AjhguQgLAHgGAMQgGANgBAOQABAQAFAMQAGANALAHQALAHAQAAQASAAALgJQAMgJADgSIgRAAQgCAKgHAGQgHAFgKAAQgMAAgHgFQgHgFgEgHQgDgIAAgJIBOAAQAAgJgCgKQgCgKgFgJQgGgJgJgGQgJgFgOgBQgOABgLAG").p("AjigXQADgHAHgEQAGgDAJgBQAJABAGADQAHAEAEAHQADAGABAJIg8AAQABgIAEgH").p("Ah1gtQgLAHgGANQgFAMAAAPQAAAQAGALQAFAMALAHQAKAHAQAAQAUgBALgKQAMgKADgUIgRAAQgCAMgHAHQgIAHgMAAQgLgBgGgFQgHgFgDgJQgDgIAAgKQAAgKADgJQADgJAHgGQAHgFAMgBQALABAGAFQAHAFACAKIARAAQgBgMgGgIQgGgIgKgEQgJgEgMAAQgRABgKAH").p("Al5gxQgJAEgEAJIgBAAIAAg2IgRAAIAACPIARAAIAAgPIABAAQADAHAGADQAGAEAGABQAHACAFAAQAQgBAKgGQALgIAFgMQAFgMAAgPQAAgOgFgMQgFgNgLgHQgLgHgPgBQgLAAgJAE").p("AlogmQALABAHAFQAHAFAEAJQADAJAAAJQAAAKgDAJQgDAJgGAGQgHAFgMABQgLAAgIgGQgHgFgDgJQgEgJABgLQgBgIAEgJQADgJAHgGQAHgFALgB").p("AmtgaQgGgMgLgHQgLgHgQgBQgRABgLAHQgLAHgGAMQgGAMAAAPQAAAPAGAMQAGAMALAIQALAGARABQAQgBALgGQALgIAGgMQAGgMAAgPQAAgPgGgM").p("An1gUQAEgIAHgFQAIgFAJAAQAJAAAHAFQAHAFAFAIQAEAJAAAMQAAAMgEAJQgFAJgHAEQgHAFgJAAQgJAAgIgFQgHgEgEgJQgEgJgBgMQABgMAEgJ").p("AkOhFIAAgVIgRAAIAAAVIARAA").p("AkfgyIAABxQAAAIgDADQgCADgFAAQgCAAgCAAQgBAAgCgBIAAAPQACABACAAQADAAACAAQALAAAHgGQAGgGABgPIAAhzIgRAA").p("AppgwQgIgFgNAAQgMAAgIAFQgJAFgFAJIAAgQIgQAAIAABnIARAAIAAg6QAAgKADgHQADgHAHgEQAHgEAKgBQAKABAGAFQAFAGAAAJIAABGIARAAIAAhEQAAgLgDgIQgDgJgIgF").p("AskABQAAAPAGAMQAGAMALAIQALAGARABQAQgBALgGQALgIAGgMQAGgMAAgPQAAgPgGgMQgGgMgLgHQgLgHgQgBQgRABgLAHQgLAHgGAMQgGAMAAAP").p("AsNgUQAEgIAHgFQAIgFAJAAQAJAAAHAFQAHAFAFAIQAEAJAAAMQAAAMgEAJQgFAJgHAEQgHAFgJAAQgJAAgIgFQgHgEgEgJQgEgJgBgMQABgMAEgJ").p("AwDg1QgQABgLAHQgLAHgFANQgGAMAAAPQAAAQAGALQAGAMAKAHQALAHAQAAQATgBAMgKQALgKADgUIgRAAQgCAMgHAHQgHAHgMAAQgLgBgHgFQgGgFgEgJQgDgIAAgKQAAgKADgJQADgJAHgGQAHgFANgBQAKABAHAFQAGAFACAKIASAAQgBgMgHgIQgGgIgJgEQgKgEgMAA").p("AvJAAQAAAQAGAMQAFANALAHQALAHAQAAQASAAAMgJQALgJAEgSIgRAAQgCAKgHAGQgHAFgLAAQgLAAgHgFQgIgFgDgHQgDgIAAgJIBNAAQABgJgCgKQgDgKgFgJQgFgJgKgGQgJgFgNgBQgPABgLAGQgLAHgGAMQgGANAAAO").p("AupgiQAHgDAJgBQAIABAHADQAGAEAEAHQAEAGAAAJIg7AAQABgIADgHQAEgHAGgE").p("AzVgtQgMAHgFAMQgGAMAAAPQAAAPAGAMQAFAMAMAIQALAGAQABQARgBALgGQALgIAGgMQAFgMAAgPQAAgPgFgMQgGgMgLgHQgLgHgRgBQgQABgLAH").p("Ay6gmQAJAAAHAFQAIAFAEAIQAEAJAAAMQAAAMgEAJQgEAJgIAEQgHAFgJAAQgJAAgHgFQgHgEgFgJQgEgJAAgMQAAgMAEgJQAFgIAHgFQAHgFAJAA").p("AxzgyIAABnIARAAIAAgvQAAgTAIgLQAJgKAUgBIAAgSQgNAAgJAGQgKAGgGANIAAAAIAAgWIgQAA").p("A2NhaIAACPIARAAIAAiPIgRAA").p("Az3hLIAAgPQgDAAgDgBQgDAAgCAAQgOAAgIAGQgHAHAAAMIAAAQIgRAAIAAAPIARAAIAABYIARAAIAAhYIAUAAIAAgPIgUAAIAAgPQAAgGADgDQAEgCAGAAQACAAADAAQACABADAA").p("A2sAlQgBgDABgGIAAg0QgBgMgFgGQgGgHgJgCQgJgCgJAAQgMAAgKAEQgJADgGAIQgGAHgBANIARAAQABgLAHgEQAHgFALAAQAFAAAFACQAGABADAEQAEADAAAIQAAAGgFADQgFACgIABQgHABgKACQgJABgIADQgIACgFAHQgFAGAAAMQAAAKAFAHQAEAGAIADQAIADAJAAQALAAAJgEQAJgEAHgIQABAIADAEQAEAEAHAAQAEAAADgBQADgBACgBIAAgNQgCAAgBAAQgBABgBAAQgEAAgBgD").p("A3nAJQAFgCAGgBQAJgCAIgBQAIAAAGgDIAAAQQAAAFgEAFQgDAGgHAEQgHADgLABQgFAAgFgCQgEgBgDgEQgDgDAAgGQAAgGADgEQADgDAEgC").p("A4+g1QgMAAgIAFQgJAFgFAJIAAgQIgQAAIAABnIARAAIAAg6QAAgKADgHQADgHAHgEQAHgEAKgBQAKABAGAFQAFAGAAAJIAABGIARAAIAAhEQAAgLgDgIQgDgJgIgFQgIgFgNAA").p("A8RgyIAABnIARAAIAAhnIgRAA").p("A8AhaIgRAAIAAAVIARAAIAAgV").p("A86hRIgRAAIAAAfIgRAAIAAAPIARAAIAABBQAAAJADAFQACAFAGACQAFACAJAAIANAAIAAgPIgIAAQgIAAgCgCQgDgCAAgGIAAg/IAVAAIAAgPIgVAAIAAgf").p("A7pABQAAAPAGAMQAFAMAMAIQALAGAQABQARgBALgGQALgIAGgMQAFgMAAgPQAAgPgFgMQgGgMgLgHQgLgHgRgBQgQABgLAHQgMAHgFAMQgGAMAAAP").p("A63gmQAJAAAHAFQAIAFAEAIQAEAJAAAMQAAAMgEAJQgEAJgIAEQgHAFgJAAQgJAAgHgFQgHgEgFgJQgEgJAAgMQAAgMAEgJQAFgIAHgFQAHgFAJAA").p("A/chaIgRAAIAAAVIARAAIAAgV").p("A/FACQAAAQAGALQAFAMALAHQAKAHAQAAQAUgBALgKQAMgKADgUIgRAAQgCAMgHAHQgIAHgMAAQgLgBgGgFQgHgFgDgJQgDgIAAgKQAAgKADgJQADgJAHgGQAHgFAMgBQALABAGAFQAHAFACAKIARAAQgBgMgGgIQgGgIgKgEQgJgEgMAAQgRABgKAHQgLAHgGANQgFAMAAAP").p("A/5g1QgNAAgJAGQgKAGgGANIAAAAIAAgWIgQAAIAABnIARAAIAAgvQAAgTAIgLQAJgKAUgBIAAgS").p("A/tgyIAABnIARAAIAAhnIgRAA").p("Egg8gBbQgDAAgDAAQgOAAgHAGQgHAHAAAMIAAAQIgSAAIAAAPIASAAIAABYIARAAIAAhYIAUAAIAAgPIgUAAIAAgPQAAgGADgDQADgCAHAAQACAAACAAQADABACAAIAAgPQgCAAgDgB").p("Egi9AAyIAAgUIgXAAIAAAXIAMAAQAAADgBADQgBAEgCAEQgDADgEACIAAAKQALgEAFgIQAGgIAAgM").p("EglkgAaQgGgMgLgHQgLgHgRgBQgQABgLAHQgMAHgFAMQgGAMAAAPQAAAPAGAMQAFAMAMAIQALAGAQABQARgBALgGQALgIAGgMQAFgMAAgPQAAgPgFgM").p("EglxAABQAAAMgEAJQgEAJgIAEQgHAFgJAAQgJAAgHgFQgHgEgFgJQgEgJAAgMQAAgMAEgJQAFgIAHgFQAHgFAJAAQAJAAAHAFQAIAFAEAIQAEAJAAAM").p("EgksgAwQgJAFgFAJIAAgQIgQAAIAABnIARAAIAAg6QAAgKADgHQADgHAHgEQAHgEAKgBQAKABAGAFQAFAGAAAJIAABGIARAAIAAhEQAAgLgDgIQgDgJgIgFQgIgFgNAAQgMAAgIAF").p("EgoxgAyIAAAPIARAAIAABBQAAAJADAFQACAFAGACQAFACAJAAIANAAIAAgPIgIAAQgIAAgCgCQgDgCAAgGIAAg/IAVAAIAAgPIgVAAIAAgfIgRAAIAAAfIgRAA").p("EgpmgA1QgRABgLAHQgLAHgGAMQgGAMAAAPQAAAPAGAMQAGAMALAIQALAGARABQAQgBALgGQALgIAGgMQAGgMAAgPQAAgPgGgMQgGgMgLgHQgLgHgQgB").p("EgpWgAhQAHAFAFAIQAEAJAAAMQAAAMgEAJQgFAJgHAEQgHAFgJAAQgJAAgIgFQgHgEgEgJQgEgJgBgMQABgMAEgJQAEgIAHgFQAIgFAJAAQAJAAAHAF").p("EgnrgAyIAABnIARAAIAAhnIgRAA").p("EgnagBaIgRAAIAAAVIARAAIAAgV").p("EgsCgA1QgLAAgIAFQgJAEgGAJIAAgPIgQAAIAABnIARAAIAAhAQAAgDACgFQABgEADgEQAEgFAFgDQAFgCAIgBQALABAEAGQAEAGAAAKIAABEIARAAIAAhAQAAgMAHgHQAIgHAMgBQAIABAFADQAEADACAFQABAFAAAGIAABEIARAAIAAhMQAAgQgKgHQgJgHgPAAQgKAAgJAFQgIAFgGAIQgDgJgIgFQgIgEgJAA").p("EgvegAyIAABnIARAAIAAg6QAAgKADgHQADgHAHgEQAHgEAKgBQAKABAGAFQAFAGAAAJIAABGIARAAIAAhEQAAgLgDgIQgDgJgIgFQgIgFgNAAQgMAAgIAFQgJAFgFAJIAAgQIgQAA").p("Egv6gBaIgTAAIAACPIATAAIAAiP").f();
	this.shape.setTransform(307.6,22.9);

	this.instance = new lib.redCircle();
	this.instance.setTransform(1,193.5);

	// Layer 10
	this.txt = new lib.fnText_fric_new();
	this.txt.setTransform(71.5,268.2,0.577,0.577,0,0,0,20.6,16.9);

	this.txt_1 = new lib.fnText_fric();
	this.txt_1.setTransform(290,268.2,0.577,0.577,0,0,0,20.6,16.9);

	// Layer 2
	this.instance_1 = new lib.Bitmap7();
	this.instance_1.setTransform(55.9,224.6);

	// Layer 6
	this.instance_2 = new lib.forArrow();
	this.instance_2.setTransform(161.3,225.1);

	this.instance_3 = new lib.Summary_forcevector_down("single",0);
	this.instance_3.setTransform(150.6,285,1,1,180,0,0,8.5,-36.4);

	this.instance_4 = new lib.Summary_forcevector("single",0);
	this.instance_4.setTransform(149.3,193.9,1,1,0,0,179.9,10.2,-36.5);

	// Layer 8
	this.instance_5 = new lib.dogs_101copy("single",0);
	this.instance_5.setTransform(399.4,217,0.663,0.663,0,0,0,164.4,97.1);

	// Layer 5
	this.instance_6 = new lib.boxes_01("single",3);
	this.instance_6.setTransform(151.6,207.4,1,1,0,0,0,81.3,79.6);

	// Layer 7
	this.text = new Text("m/s2", "20px HelveticaNeueLT Std", "#ffffff");
	this.text.textAlign = "center";
	this.text.textBaseline = "top";
	this.text.lineHeight = 20;
	this.text.setTransform(525.8,339.2);

	this.text_1 = new Text("0.45", "20px HelveticaNeueLT Std", "#ffffff");
	this.text_1.textBaseline = "top";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 52;
	this.text_1.setTransform(453.2,339.9);

	this.text_2 = new Text("Acceleration:", "20px HelveticaNeueLT Std", "#ffffff");
	this.text_2.textBaseline = "top";
	this.text_2.lineHeight = 20;
	this.text_2.setTransform(316.4,342.2);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#000000").p("ABgB/IRCAAIAAkXIxCAAIAAEX").f().s("#999999").ss(2,1,1,3).p("ABgB/IAAkXIRCAAIAAEXIxCAA").cp();
	this.shape_1.setTransform(434.9,354.2);

	// Layer 3
	this.instance_7 = new lib.boxes_01("single",0);
	this.instance_7.setTransform(151.6,207.4,1,1,0,0,0,81.3,79.6);

	this.instance_8 = new lib.front55("synched",0);
	this.instance_8.setTransform(153.1,223.3,0.624,0.624);

	this.instance_9 = new lib.sledgeMc();
	this.instance_9.setTransform(147.3,219.5,1,1,0,0,0,148.3,51);

	this.grass_img_fea = new lib.n_grass_img();
	this.grass_img_fea.setTransform(1795.2,287,1,1,0,0,0,1829,338.1);

	// learn more buttons
	this.instance_10 = new lib.popup_401();
	this.instance_10.setTransform(467,198.7,1,1,0,0,0,490.8,205.3);

	this.addChild(this.instance_10,this.grass_img_fea,this.instance_9,this.instance_8,this.instance_7,this.shape_1,this.text_2,this.text_1,this.text,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.txt_1,this.txt,this.instance,this.shape);
}).prototype = p = new Container();
p.constructor = lib.learnmore_04;
p.nominalBounds = new Rectangle(-107374182.3,-107374182.3,107376615.5,107374815.9);

(lib.dogMc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.DogAnim08();
	this.instance.setTransform(112.7,59.3,0.232,0.199,0,0,0,486.5,297.5);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.dogMc;
p.nominalBounds = new Rectangle(0,0,225.4,118.5);

(lib.dog_01 = function() {
	this.initialize();

	// Layer 3
	this.shape = new Shape();
	this.shape.graphics.f("rgba(142,111,55,0.78)").p("ACJmBQgagQgRAQQAAANAJANIAVAAQANgNAAgN").f();
	this.shape.setTransform(472,221.8);

	this.instance = new lib.Symbol101();
	this.instance.setTransform(293.8,308.8,1,1,0,0,0,113.4,66.3);

	// Layer 21
	this.instance_1 = new lib.z01();
	this.instance_1.setTransform(634.9,191.3,0.785,0.618,0,126.7,127.5,62.8,57);
	this.instance_1.alpha = 0.43;

	this.instance_2 = new lib.z01();
	this.instance_2.setTransform(613.4,134.4,0.785,0.618,0,126.7,127.5,62.8,57);
	this.instance_2.alpha = 0.43;

	this.instance_3 = new lib.z01();
	this.instance_3.setTransform(436.4,209.8,0.785,0.618,0,0,0,62.6,57.7);
	this.instance_3.alpha = 0.24;

	this.instance_4 = new lib.z01();
	this.instance_4.setTransform(73.2,347,0.785,0.43,0,-75.5,-74.6,62.5,56.9);
	this.instance_4.alpha = 0.43;

	this.instance_5 = new lib.z01();
	this.instance_5.setTransform(176.7,215.5,1.302,0.43,-14.4,0,0,63.4,55.7);
	this.instance_5.alpha = 0.24;

	this.instance_6 = new lib.z01();
	this.instance_6.setTransform(306.4,212.8,1.302,0.43,0,0,0,62.6,56.3);
	this.instance_6.alpha = 0.24;

	this.instance_7 = new lib.z01();
	this.instance_7.setTransform(474.9,401.8,0.528,0.429,0,104.8,105.6,62.2,56.9);
	this.instance_7.alpha = 0.24;

	this.instance_8 = new lib.z01();
	this.instance_8.setTransform(442.8,299.8,0.785,0.618,0,76.3,77.1,62.6,57.5);
	this.instance_8.alpha = 0.24;

	this.instance_9 = new lib.z01();
	this.instance_9.setTransform(91.8,470.2,0.785,0.495,0,-64.2,-63.3,62.3,57.3);
	this.instance_9.alpha = 0.43;

	this.instance_10 = new lib.z01();
	this.instance_10.setTransform(176.7,428.9,0.785,0.495,0,-34.5,-33.6,62.9,57.1);
	this.instance_10.alpha = 0.43;

	this.instance_11 = new lib.z01();
	this.instance_11.setTransform(108.1,318.5,0.592,0.142,0,98.2,99,62.4,57.5);
	this.instance_11.alpha = 0.43;

	this.instance_12 = new lib.z01();
	this.instance_12.setTransform(90.3,445.2,0.592,0.24,0,98.2,99,62.8,57.6);
	this.instance_12.alpha = 0.43;

	this.instance_13 = new lib.z01();
	this.instance_13.setTransform(101.3,380.4,0.592,0.24,0,-87.5,-86.6,62.6,56.7);
	this.instance_13.alpha = 0.43;

	this.instance_14 = new lib.z01();
	this.instance_14.setTransform(152.6,307.7,0.785,0.43,0,-75.5,-74.6,62.5,57.6);
	this.instance_14.alpha = 0.43;

	this.instance_15 = new lib.z01();
	this.instance_15.setTransform(145.7,353.5,0.785,0.43,0,-75.5,-74.6,62.3,56.7);
	this.instance_15.alpha = 0.43;

	this.instance_16 = new lib.z01();
	this.instance_16.setTransform(209.1,338.6,0.785,0.43,0,-75.5,-74.6,62.5,57.4);
	this.instance_16.alpha = 0.24;

	this.instance_17 = new lib.z01();
	this.instance_17.setTransform(562.6,255.3,0.511,0.402,0,39.7,40.6,62.3,57.1);
	this.instance_17.alpha = 0.43;

	this.instance_18 = new lib.z01();
	this.instance_18.setTransform(578.8,232.2,0.511,0.402,0,39.7,40.6,62,56.4);
	this.instance_18.alpha = 0.43;

	this.instance_19 = new lib.z01();
	this.instance_19.setTransform(542.5,201.6,0.785,0.618,0,126.7,127.5,62.7,57);
	this.instance_19.alpha = 0.43;

	this.instance_20 = new lib.z01();
	this.instance_20.setTransform(396.2,272.5,0.785,0.618,0,109.5,110.3,62,56.6);
	this.instance_20.alpha = 0.24;

	this.instance_21 = new lib.z01();
	this.instance_21.setTransform(310.5,250.4,1.302,0.43,0,0,0,62.6,56.4);
	this.instance_21.alpha = 0.24;

	this.instance_22 = new lib.z01();
	this.instance_22.setTransform(329.6,323.2,0.785,0.619,20.5,0,0,62.8,56.4);
	this.instance_22.alpha = 0.24;

	this.instance_23 = new lib.z01();
	this.instance_23.setTransform(310.5,278.8,0.785,0.43,0,0,0,62.4,56.2);
	this.instance_23.alpha = 0.24;

	this.instance_24 = new lib.z01();
	this.instance_24.setTransform(232.3,257.4,1.066,0.667,0,0,0,63.5,56.8);
	this.instance_24.alpha = 0.24;

	this.instance_25 = new lib.z01();
	this.instance_25.setTransform(244,334.5,0.785,0.43,0,0,0,62.7,56.3);
	this.instance_25.alpha = 0.24;

	this.instance_26 = new lib.z01();
	this.instance_26.setTransform(266.2,301.8,0.785,0.43,0,0,0,62.5,56.9);
	this.instance_26.alpha = 0.24;

	this.instance_27 = new lib.z01();
	this.instance_27.setTransform(375.8,363,0.785,0.43,0,0,0,62.3,57.3);
	this.instance_27.alpha = 0.24;

	this.instance_28 = new lib.z01();
	this.instance_28.setTransform(399.4,362.2,0.785,0.785,0,0,0,62.6,56.5);
	this.instance_28.alpha = 0.24;

	// Layer 22
	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#000000").p("EBJogYeQgDgBgBgBQgEgBgFABQgEABgFABQgEAAgDABQgMAHgSAEQgYAEgVAJQgBABgCABQgHAFABALQAAADAAACQABAGADADQAJAJAJAJQACABAAABQAAALgGAIQgDACgBADQgBACgBABQgBACgBAEQgCAGADADQABABABABQACAFADADQAEAEAFABQADABABABQAJAEAMAAQAHgBAGgBQAZgFAdABQAIABAIABQALABAEAHQACACABABQAEABgCAEQgIARgWADQgLABgLACQgLABgDALQAAADgBABQgDAFAAADQABAEADADQABABAAABQAEALAJAHQACABACACQADAEAJgDQADgBADAAQAMgCAHgKQABgBABgBQAJgFAHgJQAGgHAKgFQAKgFALgGQAKgGAMgGQAHgDAFgDQAFgJAEgGIgFgEQgCACgFgBQgDAAgDABQgHACgMgCQgCAAgDAAQgKgBACgKQACgKACgKQABgEgDgDQgLgIgKgBQgCAAgCgBQgGgDgKgCQgDAAgCgBQgNgCAAgOQAAgHADgFQABgCgBgBQgGgIgMgCQgKgDgLgEQgBgHgBgHQgCgPAKgIQADgCAFgCIAAAA").p("EA93gfUQgQALgSANQgCACAAAEQgEADgCAEQABACgBABQgBAPABAPQgCACAAACQAAAFgBAFQABAGAFAFQACACACAAQALACANAAQAHAAAHABQACABADABQALAGAOACQANACAJgDQADAAABgBQAIgGAOgBQABAAACAAQAGgBAFgDQAKgCgBgOQAAgCABgCQADgGgFgFQgFgHgGgFQgIgIgOAGQgBABgDAAQgJAEgLAFQgGAEgHABQgNABgHgGQgDgBgBgDQgBgKAAgKQAAgHABgHQACgUAPgJQAFgCAGgCQgFABgCgDQgFgCgFABQgGACgEAAQAAACgBABQgEAEgFAD").p("EA8sgeWQgJAGgGAEQgBAEgFACIAAAAQgBABAAABQgBABABACQgHAHACAJQAAAFAEACQADABADADQAHAJAGAHQAMANAWAHQAJACAJABQACABADABQAGACAFACQACABADAAQAXACAXAFQAQAAAKgHQADAAABgBQADgJAKgCQACAAAAgBQABgHADgFQgBABgDgBQgCgBgCgCQgEgEgGgCQgBgBgDAAQgIgBgIgBQgZgCgaABQgBAAgDgBQgGgEgHABQgRACgGgNQAAgBgBgCQgFgIgJgJQgFgFgEgDQgFgDACgHQABgGADgGQgHADgDAEQgBACgBAA").f("#999999").p("EBKXgXuQACAQAXAGQAcAIAMAUQAJARAJAAQAFAAAHgLQAFgLAAgFQAAgFgogWIgpgVQgBgCABgOQAAgKgGgEQgIgHgPACQgMACAAAGIAAADQAKADAMAAQACAKgCAT").p("EA/FgfHQAAgLgKgBQgJAAAAAKIAAAFQABAGAJAAQAJAAAAgJ").p("EA+qgeqQAAgOgRgDQgTgDAAATQAAABAAAKQADAKAPAAQAJAAAFgHQAEgFAAgI").f("#958d8e").p("EBBvgtQQAIgigRgPQgEAUgVALQg8AhghAgQg3AxgtAqQgFAEgBAGQgEAIgEAFQgOAPgPASQggAlgnAlQgJACAFAHQgHArgOAiQAIABAIAAQALAAAKAEQAXAKAXAJQAJAEAKADQAegPAVggQAXg0AZggQAMgRAQgTQAbggAlABIAbADQANhXAbhUQADgJADgK").f("#402821").p("EA9ngnPQgKgDgJgEQgXgJgXgKQgKgEgLAAQgIAAgIgBQgaAAgagDQgGAKgGAAQgMAAgLgIQgQgLgOgIQgKgFgIgDQgPgFgRAEQgCABgCAAQgDADgDAEQgCACAAABQgIAMgGAOQgFANgEAOQgJAbgKAmQgBADAAACIAAAAQAUAoAHAoQAEAcgHAaQgEAOgHAOQgEAJgDALQgZBlgaBfQgOAvAtgEQBPgHAUg+QAEgPACgRQAGglgVgHQgSgGgDgTQAOgUAqAIQBUARAhg4QAEgGgCgMQgJg0gggXQgJgFgLgCQgngEAFgoQgLg0AqgDQAHAAAHABQAhADAGAnQABAHAFAGQAUAgAZAQQAUAOATAOQAWARAgADQAHABAGABQANACAGgVQATg7gFhDQgDglgagQQgFgEgEgOIAAAAQgIADgJgHQgIABgFgFQgIgCgJgDIAAAA").f("#382223").p("EA+CgnHQgFgBgFgCQAFAFAIgBQAJAHAIgDQgKgCgKgD").p("EA/1gm+QgDAAgEAAQgvAFgpgJQAEAOAFAEQAaAQADAlQAFBDgTA7QgGAVgNgCQgGgBgHgBQgggDgWgRQgTgOgUgOQgZgQgUggQgFgGgBgHQgGgnghgDQgHgBgHAAQgqADALA0QgFAoAnAEQALACAJAFQAgAXAJA0QACAMgEAGQghA4hUgRQgqgIgOAUQADATASAGQAVAHgGAlQgCARgEAPQgUA+hPAHQgtAEAOgvQAahfAZhlQADgLAEgJQAHgOAEgOQAHgagEgcQgHgogUgoIAAAAQgJAWgQALQgQAMgSAVQgDAFgEAFQgBAAAAAAQAAACAAAAQgFAqgEAsQAAABAAACQAAACAAABQgBAGgEAEIAAAAQgBABgCABQgEAEgGAEQgIAHgJAHQgfAXgjAUQgMAGgKAUQgKASgKASQgEAJgEAJQgBABgBACQgBADgCADQgOAdgQAkQgHAQAGALQADACABADQABACABAAQAAABABAAIAAAAIAAAAQAhARAUAeQAGAIgCAMQgDAlgNAXQgFAIAAAMQgCBGBSgIQA/gGAqgQQAPgGARgBQA0gCAlgMQAIgBAHgDQAZgJAOgPQASgTAFgdQABgGABgHQAEgWABgXQABgdAPgMQAGgEADgLQAFgWAJgIQAGgFACgLQADgQANgWQAFgIACgLQANgtAfgNQAaAQAVAXQATAXAPAdQABACAAACQALAAAIADQAOAHADANQADAAADAAQAQgBAJADQAJAEAIAEQAGADAFADQAlAUAYAOQAGAEAFADQABgCABgCQACgEACgFQAGgMAFgNQALgWALgXQAAgBABgBQAAgOgEgTQgFgXgJgWQgCgGgGgHQgRgWgLgaQALgfAIgWQADgHAEgHQATgggOgZQgJgQgGgRQgPgsgIgpQgNgFgMgIQgDgCgDgBQgHgCgIAB").f("#544b4b").p("EBA6glYQAGARAJAQQAOAZgTAgQgEAHgDAHQgIAWgLAfQALAaARAWQAGAHACAGQAJAWAFAXQAEATAAAOQAAAAAAgBQAGgLAFgKQAIgPAIgOQAEgFALgDQAGgCAHgCQAtgKAOAnQADAHAFAEQAGgDADgEQABgBgBgCQgEgYgRgTQAAAAAAgBIACgDQgYgngYgnQgCgCgCgDQgCgEgDgEQgXgjgBguQgLgPgCgSQgEgXgPgNQgCgKgIgHQgCgYgKgEQgTgFgTgKQAIApAPAs").f("#a49a8d").p("EBCggjOQAYAnAYAnIgCADQAAABAAAAQARATAEAYQABACgBABQgDAEgGADQgFgEgDgHQgOgngtAKQgHACgGACQgLADgEAFQgIAOgIAPQgFAKgGALQAAABAAAAQgBABAAABQgLAXgLAWQgFANgGAMQgCAFgCAEQgBACgBACQgFgDgGgEQgYgOglgUQgFgDgGgDQgIgEgJgEQgJgDgQABQgDAAgDAAQgDgNgOgHQgIgDgLAAQAAgCgBgCQgPgdgTgXQgMgFgNgDQgCAAgDAAQgCAAgEAAQgQABgOAHQgIAEgEAJQgCAEgBAEQgNAtgVArQgKAXgGAXQAAAEAAADQADAggNAcQgBADgDACQgRASACAZQAAACABAAQADACADACQABgDABgDQADACAFABQAAAAAAAAQAFgBAFgBQACAAADAAQABACAAABQAIgHADgLQAGgVAXgOIAAAAQAFgCABgEQAAgBABgCQASgNAPgTQAFgHAKgHQAIgGAEgHQACgCACgBQAKgJAOgDQABAAABgBQAFgCAEgCQAPgGAQgDQACAAABAAQAUAEAMALQACABABAAQAJAAAIABQAJACAFAHQAAACACABQAPARAOARQAIAJAKAIQAFAEAFACQAJAFAKACIgCAFQAGAHAAALQACACgJgDQgFAKgBAOQgCgJgNACQgCgBAAADQgMALgOAJQgHADgHACQgTAHgUAIQgDABgFAEQgCABgCABQgFADgEAFQgDgBAAABQgjADghgEQgIAAgIgDQgDgBgDgBQgQgGgOgJQgPgLgTABQgMAAgMABQgHABgGgCQADAGAGAFQAKAIARAGQAcAMAmADIACAAQAJABAJAAQAIABAHAAQAGAAAFAAQABACACABQAHAGANAAQAPAAAagKQALAAAKgDQAIgCAGgEQAGAAAFgBQAggCAQgFQAYgHAAgWQAAgDgBgEQAIAAAGgCQAHgBAFgCQADAHABAKQAAACAAABQALAFAMABQAAAAACgBQAHgDAFgGQAfgmA0ABQAqgJAcAZQAFACAFACQADACADAAQAKABAJADQABgNgDgLQgDgMgHgNQgBgDAAgDQgCgKgDgJQgEgNgDgMQgGgZgBgbQAAgZgFgYQgBgEgBgFQgCgRgFgTIgJACQgDgKgFgKQgJgMgNgJIALgTQgSgsgbgmQgGgHgHgGQgHgGgKgBQgEAAgCABQgDABgBAEQgCAIACAJQACADACAC").p("EBArgeXQgFACgFACQACgFAAgFQAAgBAAgDQADADADABQAAACABABQAAACABAB").f("#1a1a1a").p("EBAqgeaQgBgBAAgCQgDgBgDgDQAAADAAABQAAAFgCAFQAFgCAFgCQgBgBAAgC").p("EA7pgdUQABADABACQAAABAAAAQACACABACQAGAHAIAFQgGgFgDgGQgDgDgBgFQAAgBgBgCQgDAAgCAA").p("EA98gcfQgHAAgIgBQgJAAgJgBQABABACAAQABAAACAAQAOABAOABQADABADAAQAEABADAAQgCgBgBgCQgFAAgGAA").p("EA/cgcjQAOgDALgEQgFABgGAAQgGAEgIAC").f("#b8a78d").p("EA4tgroQgUgfgDgkQgCgXgCgWQgCgKAAgJQACgegMgEQgcA2grApQgoAmgpAkQgHAHgGAHQgMAPgTAKQgbAPgLAVQgNAZgYALQgCAGgEAFQgIAegPAZQgEAJgEAHQgJAXgEAPQgJAvgKAjQgHAFAGAFQgDAygOAjQgFAOgHAKQAKAAAJAAQAXgOAWggQAXgjAAgvQABgJAAgJQAEgpACgpQAAgFADgGQAEgFAHgGQAGgGAHgHQAhgnAXgYQAQgRASgNQAWgRAWgFQAGgBAFgBQAmgIANAYQADAIADAIQACAKADAJQAGASABATQAFA7A2gCQAjgBAFAZQABAGAHABQAAgBACgCQADgEADgDQACAAACgBQARgEAPAFQAIADAKAFQAAgCAAgCQAAgEAAgFQgBgUgLgPQgXgagRgqQgDgHgFgHQgWgigPg0QAFgIgDgG").f("#8e7b63").p("EAzngkrQgJgIAAAAQgcAAgbgBQgJAAgKAAQAHgKAFgOIgMgDQgQAMgTAZQgGAJgFACQgUASAFAfQgBABAAAAQAGAQgEAaQgEAiADAaQAAABAAABQAdAcABAoQAUAZAfAaQAKAIAKAHQAJAHAPAFIAAAAQACABABAAQAHADAJADQAdgBAKgNQAAgBAAgBQACgFACgGQAIgRAIgMQAFgGAEgFQAFgEALgCIAAAAQACgDABgDQABgBAAgCQAAAAABAAQAEgJAEgJQAKgSAKgSQAKgUAMgGQAjgUAfgXQAPgXAGgfQAAAAAAgBQgKgEgPACQgjAEgoATQgoATgfANQgRAHgUACQgbACAJgfQAJggADghQACgIgHgJQgDgFgEgF").f("#bca982").p("EAwagjWQgkATgZgQQgZgPgiAtQgjAugJASQgKATgFAAQglgCgMASQgDAHgIADQgyAVgaAoQgXAjgxAfQhGAuhmAhQgtAPgVAiQgHALgIAKQBQgzBcABQADgBACgBIBGAHQABABABABQAgAbAWAiQAYAmANAxQACALADAMQAFAVAEAWQAKBGgDBIQAIgIAIgJQAJgJAEgMQAMgjAEgoQADgYAAgaQAAgFAAgHQAFg+AFg/QADgfgOgLQgGgEAAgLQAAgdgDgiQApASACAsQABASAEARQADALACALIBdgWQgDAOATALQAmAWAPAuQAGAKgFAJQgLAVgEAQQgDALAAAMQAiAOAagEQAJgBAJgEQgFgWAEgeQAHhDAngmQAJgJAIgIQArglApghQAAgBAAgBQAFg4AtgGQAHgBAGAAIAGAMQgiAZgjAcQgBALgFAKQgYAtgiAjQgFAGgDAHQgOAhgMAiQgRAxgfAOQAPBHBmgRQBKgMgUBOQgJAjgHAjQgPBBAZAvQAeAZA7AJQAmAGAWgLQAJgFALgCQARgDASgDQAqgGAcAQQgNgXgHgPQgRgkAFgqQACgLAAgMQABgdAKgSQADgFADgFQAGgGgBgFQgBgZATgCQAOgCAMgHQAJgFAHgKQADgCACgEQAFgGAAgGQAAgMgFgMQgGgYgcgOQgQgKgfgCQgMAAgLABQghAEgagGQgZgGgTgPQgUgRgNgcQgBgEgBgEQgTg0AHg+QAFgsgIgmQgEgQgGgQQgBAAgBgCQgBgDgDgCQgCgBgCgBQgMgFgNgFQgIgCgHgDQgCAAgCgBQgDAAgCgBQgJgDgHgDQgBAAgCgBQgPgFgJgHQgKgHgKgIQgfgagUgZQgOgTgIgSQgGgPgCgSQgDgaAEgiQAEgagGgQQgEgKgHgGQgFAGgIAEQgKAIgJAIQgIAJgJAE").p("EAxfgMpQgigdgrgWQgGgEgFgGQgyg2glg1QgFgHgEgLQgCgGgDgHQgbg2gaghQgHgJgKgIQgigXgggZQgJgHgJgKQgOgSgEgTQABAMABALQAEAwAJAvQARBcAiBSQBCCmCFCEQArAqAwAmIAFAZQAahSAYhVQAFgSACgSQAEgYgJgOQgHACgIAAQgeABgHgUQgDgHAAgGQAAgJADgK").p("EArqgWtQgLgFgMgEQgXgKgYgJQgEAMgCAMQBGCFhFBnIALAFQA0gaAWhmQgFggAIgVQABgLABgLQAAAAAAAAQAAgMAAgLQgGgGgJgF").f("#dacfc5").p("EA7fgdSQgFABgFACQgKADgJAFQgHADgGAEQALAgAiASQAHADAGABQAcAFAcAEQAIAvAlAKQAHACAHACQA0ATA9gFQAhgCAMAiQABADALgCQAJgBAHgEQAVgLAJgcQAUgZAlgDQAMAAAIgJQBCADA/gEQAdgBAcgHQAhgJAkADQAGABAGAGQABACACABQAAgGgGgHQgGgGgPgHQgLgGgIgJQgZgbghgjQgOADgEgMQgBgCgCgCQgcgZgqAJQg0gBgfAmQgFAGgHADQgCABAAAAQgDABgCAAQgPAFgDgMQAAgBAAgCQgBgKgDgHQgFACgHABQgGACgIAAQABAEAAADQAAAWgYAHQgQAFggACQgLAEgOADQgKADgLAAQgaAKgPAAQgNAAgHgGQgDAAgEgBQgDAAgDgBQgOgBgOgBQgCAAgBAAQgCAAgBgBIgCAAQgmgDgcgMQgRgGgKgIQgIgFgGgHQgBgCgCgCQAAAAAAgBQgBgCgBgDQgFABgFAB").p("EA5GgbxIAAAAQABAAAAgBQAAABgBAAIAAAAQgLAFgOADQgsAIgxgCQgkgCghgHQg0gLgaARQANAcAUARQATAPAZAGQAaAGAhgEQALgBAMAAQAfACAQAKQAcAOAGAYQAFAMAAAMQAAAGgFAGQgCAEgDACQABArgeAgQgKAMgPAJQAKAZAYAKQANAFAJgCQAQgDARgBQAEAAAEgBQAJABAJAAQALAAAFgFQABAAAAAAQARgSAUgOQAIgGAIACQAJACAJAJQACADADABQAUATAkAGQApAHAjgJQAOgDANgGQALgFAMgDQALgCAKAEQAjAPAiALQAMAEALADQAHADACAGQADALAFAHIABAAQAcAnAcAeQAHAKAMADQALACAKAEQAEACAEACQAbALAaAMQAJAEAKAEQAAABACAAQAyAYA/gGIABAAQgCgBgCgBQgEgCgFgDQgWgPgMgjQgEgMgCgMQgEgWAFgWQAEgWAOAAQADAAAEgBQAOABANACQgBAAAAAAQgKgKgJgLQgKgKgIgMQgPgJgNgVQgOgDgWAGQgMADgIAJQgWAYgcAEQhAAKgbgeQgbggAagPQAHgEACgHQAJgiAGgiQgMAAgLAAIAAALQAFAigogEQgLgBgMABQhOAKg9gjQgJgFgLABQguABgWAiQgHAKgJAHQgIAFgLgEQgMgDgLgHQgWgNgTgYQgGgGAFgKQAOgbAKgOQAGgHgCgLQgEgMgJgIQgWgVgjgXQgIgFgGgFQgFgGgFgJQgHgOgIgD").p("EA+ygZ3QgNABgKAHQgGAFgGAFQgNAOAvADQAGABAGAAQAsAEAtABIgJg+QgGACgGACQgmAMgpAF").f("#a59988").p("EA5+gcaQgIADgHAFQgKAHgHAJIgBAAQgJAKgNAGQAAABgBAAIAAAAQAIADAHAOQAFAJAFAGQAGAFAIAFQAjAXAWAVQAJAIAEAMQACALgGAHQgKAOgOAbQgFAKAGAGQATAYAWANQALAHAMADQALAEAIgFQAJgHAHgKQAWgiAugBQALgBAJAFQA9AjBOgKQAMgBALABQAoAEgFgiIAAgLQgBAAgBAAQgtgBgsgEQgGAAgGgBQgvgDANgOQAGgFAGgFQAKgHANgBQApgFAmgMQAGgCAGgCQAKgDAJgFIgEgGQgHAEgJABQgLACgBgDQgMgighACQg9AFg0gTQgHgCgHgCQglgKgIgvQgcgEgcgFQgGgBgHgDQgigSgLggQgKAJgIAMQgFAKgMACQgLACgJAD").f("#d4c8ba").p("EA3hgX/QAAAEgBAEQAAABgBABQAAAHgBAFQgBAHgBAGQgBADgBACQgDAPgDARQADAMADALQABACABACQACANAFANQABADACADQAPATAEAZQABADABADQAIAXAIAWQAXAlAbAdQAFAHAEAKQADAHAAAGQAAAGgHAFQgPAMAHASQABABAAAAQAAABAAAAQACAEACADQAEAGAGAGQAFAJAGAHQAEAHAGAFQANAPARAJQALAGAMABQAnAFAoAAIAOgRQgPgKgKgVQgLgTgQgSQgCgBgBgCQgDgGgFgFQgBgBgBgBQgEgDgDgCQgDgCgBgBQgIgJgJgGQgBAAgBgBQgQgMgIgRQgCgCgCgCQgBgBgBgCQgEgEgEgIQgBgCgBgBQgCgDgCgFQgDgOABgQQABgaALgWQACgCABgBQABgCACgEQABgDACgDQABgCACgDQAGgHAGgIQAMgOAQgKQACgBABABQABAAACgBQAFgBACgDQAJgEAJgDQALgCALgEQAHgCAHAAQAHAAAHgBQASABASACQADAAADABQAiAJAhALQAEABAEAAQAFAEAFACQAEABAEADQAVAJAUAIQAFACAEAHQACAAACACQALADAHAHQAKAIAQAEQACABACACQAlAUArASQAWAJAYAGQADAAACACQAUAHAVAFQAVAGAWADQAOACAOACQADABADABQAFABAEABQAHACAGACQAOAFAOADQAGACAHABQAGAAADACQACABACABQASAFAVgBQAKAAAKgBQADAAACgBQANgCAMgBQAFAAAFgBIADgSQgEAAgEAAQgZACgXgEIAQgNQApAIApAFQAUgFAWgFQAYgFAYgJQAMgEAIgFQADgBABgBQALgEAKgGQAJgFAGgIQABgBgBgCQgBgCgBgCQgJgJgFgIQgBgCAAgCQgDgNAJgHQgBAAAAAAQAAgBABgCQABgKACgJQADgFAAgHQgCgCgIACQgFABgEgBQgWgCgTgLQgHgDgGgFQgKgHgHgIQgGgHgHgLQgCgEgCgGQgBgBgBgDQgBgBAAgBQgEgTADgSQADgRAKgRQAHgMAGgHQADgHgDgBIAAgBQgOACgOABQgEAAgEAAQgDABgCABQgJABgFADQgFAEgIAHQgEAFgGACQgHADgFADQgNAPgNANQgUAUgNAZQgEAJgDAJQgGgBgNgDQgTgDgRgJQgFAAgEgBQgHgDgDAEQgBACAAAAQAJALAKAKQAAAAABAAQgNgCgOgBQAAACgCgBQgLAFAAANQgBAIgDAGQgBADAAAEQAAANACAMQADALABAMQAAAHABAGQABACAAABQAGAOANAPQACACAFACQABAAABABQAGADADAHIAAAAIgBAAQg/AGgygYQgTgEgSgJQgDgCgEgBQgRgDgNgNQgEgCgEgCQgKgEgLgCQgMgDgHgKQgcgegcgnIgBAAQgIgGgIgHQgEgDgEgEQgIgGgJgEIABgEQgigLgjgPQgKgEgLACQgMADgLAFQgNAGgOADQgjAJgpgHQgkgGgUgTQgCABgBABQgXALgZAEQgFABgEABQgJABgIABQgFAFgLAAQgJAAgJgBQgEABgEAAQgRABgQADQgJACgNgFQgYgKgKgZQAPgJAKgMQACgBABgCQABgIAEgHQAFgPABgPQAAgEAAgFQgBgBAAgCQgMAHgOACQgTACABAZQABAFgGAGQgDAFgDAF").p("EBEfgUJQABACgBgBQgBAAABgCQAAABAAAA").p("EAwrgaIQgHAVgTATQgRAagZATQgIAIgDALQgMA8AiApQAnAvBVAiQAqAQArAZQAMARAFAYQAGAFAFADQAlBGBVABQAkgOgEAfQABAGgCAMQgEALAGAIQAhArAqAOQALAEAEAFIAAAAQgCgpgEgoQAAgkANgPQAMgOAYgSQALgHgBgGQAAgagVgpQgcgQgqAGQgSADgRADQgLACgJAFQgWALgmgGQg7gJgegZQgZgvAPhBQAHgjAJgjQAUhOhKAMQhmARgPhHQgJAEgJAB").p("EAzFgRWQgBgMAAgLQABgigOgaQgFgJgGgIQgFgJgJgJQg6hBhSgGQgGAAgHgCQgKgEgIgFQgFgEgHgGQAAAAgBAAQgNgLgPgRQgmgmADg4QABhGgOhCQgGgegHgeQgYhhgXhhQgCgLgDgLQgEgRgBgSQgCgsgpgSQADAiAAAdQAAALAGAEQAOALgDAfQgFA/gFA+QAAAHAAAFQAAAagDAYQgEAogMAjQgEAMgJAJQgIAJgIAIQAAATgCASQgBAMgCAMQgBAOgCAPQgBAMgBAKQAGAMgHAIQgBABAAABQgCAbgBAaQAFALgFAGQALA5gKA0QABACAAACQAEATAOASQAJAKAJAHQAgAZAiAXQAKAIAHAJQAaAhAbA2QADAHACAGQAEALAFAHQAlA1AyA2QAFAGAGAEQArAWAiAdQABgCABgCQAZhFgehGQgCgDgCgEQAnAKAQAtIAngMQgEgiAEgiQACgXAHgXQAKgmgEgq").p("EA1tgN9QABgsAJgsQgKAggaAMQgHAEgFAGQhQBUg9A9QgQARgXAFQAJAOgEAYQgCASgFASQgYBVgaBSIAUBcIAKAtIACALIgeBtQgEAAgGABQgJACgMAIQggAYgSAwQgCAFgBAGQgBAFAAAGQgCAOAAAPQACAfgCAbQAAAJABAJQACAYAFAXQAFAaAJAcQABAEACAFQgFALgHAMQgLAXgPAWQgIALgHALQgjAwgtAoQgaAWgdATQgBAJgFAIQgNAWgDAPQgFAUgTAHQgGACgCAGQgFAhACAmQgDAIgEAJQAeAmAMAxQgCBBAAA5QBHhNgQiHQAIgFADgKQADg1AEg0QABgXAMgPQAGgHAAgMQAAgLAAgMQAWAPgEAtQAKAIAFAMQATAvgGA4QBNhigHiDQgCgogCgpQAJghAaAXQAZAWAtACQATAAgDgZQgFgogFgnQAAgGgHgIQABgrAKgsQABgHAUgEQAjgZgJgsQgWgOgFgVQgBgGAAgHQAAgFABgHQAAgDAAgDQAEgbAMgXQAOAKAJAWQACAGACAHQACAGABAHQBHA6AYBDQAUgPgLgqQgCgLgDgNQgHg3gNgjQgKgTgQgKQADgEACgEQAagYAKgUQARgfACgoQALgJgCgOQARgkAXgfIgwghQAegoAQg2QAPgwAEg1QAEhAgPgoQgNggACgk").p("AZoyyQgMAuAVAeQAGAIAMAFQAXAKAWgDQAFAAADgMQADgLgBgNQgLhqghhhQgDAMgEAMQgNBEgHA3IgLgE").p("EAp1AKwQgGAKgHAIQgKAGgMAJQgBABgBABQgDACgDADQgBAAgBAAQgEAEgFAEQgDAAgCABQgcAGgQALQgGAEgGAEQgGBSgGBQQgIARgDAPQALgFAKgGQBIgqARhoQAAgKAJgIQAFgXAJgUQAJgVAMgSQAYgjAlgaQAEgOAEAoQAFBBgXAdQgCAQAbgfQAbgiAPg6QABgEABgEQADgMADgNQACgHADgGQAehFABhRQgKAWgUAbQgcAZgRARQgGAWgbAQQgcAYgGAUQgBANgJAEQgJAXgQASQgBACAAAA").f("#ac9b7e").p("EAxugVqQhVgigngvQgigpAMg8QADgLAIgIQAZgTARgaQATgTAHgVQgaAEgigOQAAgMADgLQAEgQALgVQAFgJgGgKQgPgugmgWQgTgLADgOIhdAWQAXBhAYBhQAHAeAGAeQAOBCgBBGQgDA4AmAmQAPARANALQABAAAAAAQAHAGAFAEQAIAFAKAEQAHACAGAAQBSAGA6BBQAJAJAFAJQAGAIAFAJQAOAagBAiQAAALABAMQAEAqgKAmQgHAXgCAXQgEAiAEAiIgnAMQgQgtgngKQACAEACADQAeBGgZBFQgBACgBACQAMALAKALQAKAJAJAGQAHAFAEAHQAXgFAQgRQA9g9BQhUQAFgGAHgEQAagMAKggQgJAsgBAsQgCAkANAgQAPAogEBAQgEA1gPAwQgQA2geAoIAwAhQAbglAjgdQAOgPAagYQAugegDhGQgBgBABgBQgDg8AhgoQALgNAGgOQASgqAMg6QAEgMgEgSQADgBACgCQAHgFAGgKQAIgJAOgPQAKgIAJgHQAWgPAWgSQAWgSAVgWQgoAAgngFQgMgBgLgGQgRgJgNgPQgGgFgEgHQgGgHgFgJQgGgGgEgGQgCgDgCgEQAAgBgBgBQgHgSAPgMQAHgFAAgGQAAgGgDgHQgEgKgFgHQgbgdgXglQgIgNgIgPQgEgGgDgGQAVApAAAaQABAGgLAHQgYASgMAOQgNAPAAAkQAEAoACApIAAAAQgEgFgLgEQgqgOghgrQgGgIAEgLQACgMgBgGQAEgfgkAOQhVgBglhGQgFgDgGgFQgFgYgMgRQgrgZgqgQ").p("EAwugF1QA9CjiYiyQgDALgEAMQBDAKgeA5QgFALgEAMQATA6AJAyQAEAUACATQAAgPACgOQAAgGABgFQABgGACgFQASgwAggYQAMgIAJgCQAGgBAEAAIAehtIgCgLQgYgSgSgJQgrgUgJAsQAMAFADAH").p("EAwKgBGQgCAIgBAJQAAAAAEABQgBgJAAgJ").f("#321e19").p("EA77gWNQgDgCgFABQgJACgJADQgOAGgNAFQgKADgEAGQgDAAgBABQgEAEgIABQgQACgKAMQgGAIgIAKQgCADgBADQgCAIgEAHQgLAXAGAaQABAKAAANQgBACAAACQgBAIACAGQABACABABQACACACACQAIARAQAMQABABABAAQAQAKAMAMIAAABQABABABABQAOAHAJANQABABAAACQAEALAJAEQACACACABQABABABAAQAKAGALACQADABADAAIABAAQAFABAFACQAHACAGAEQACABABABQAHAGAKAAQADAAABgBQACgCADgCQABAAAAgBQACAAACgBQgKgMgJgMQgMgQgLgMQgCgBgBgCQgDgGgCgFQAAgCgBgBQgEgDgEgFQgBgDgCgEQgEgGgEgEQgCgCgCgBQgIgGgFgLQgBgCgBgDQAAgEgCgDQgLgKgBgPQAAgDgCgDQgEgLAAgMQAAgDgBgCQAAgEAAgDQgCgMACgLQAAgCgBgCQgBgBgCgCQgCgDAAgEQABgQANgNQADgDADgCQADABADgBQADAAACAAQADAAAEgBQAKgCALgBQANgCAOAAQAEAAAFAAQgIgCgHgCQgEAEgFAAQgJAAgLgFIAAgDQAAgHAFAAQAEAAAGACQAPAAAOABQAFABAFAAQAGABAHABQAGAAAGACQAPAFATAFQABAAABABQAGAFAJAEQADABADABQAEABACADQABABACABQANAGAKAJQAIAEAIAFQABABACAAQABAAABAAQABABABAAQASAHASAKQAYAMAhASQAGACAGACQADABABABQAKAFALAEQAEABAFADQAGADAGADQABAAACgBQAHgDADAAQALAAATAXQABABACAAQAAABABAAQACABAEABIACgBQABgBALAAQAKAAATAHQABAAABABQAMgCANgBQADAAAEgBQgEgFgJgCQgCAAgDABQgHgGgJgCQgNgDgNgDQgJgCgIgCQgBAAgBgBQgLgCgMgEQgNgFgNgFQgEgBgCgBQgIgEgKgCQgCAAgBgBQgZgEgWgKQgBgBgCgBQgggSghgRQgCgBgCgCQgDgEgFgEQgFgDgFgCQgDAAgCgBQgGgDgGgCQgLgFgHgFQgCgBgDgBQgTgCgNgKQgDgCgEgCQgEgCgEgBQgIgEgJgBQgCgBgEAAQgLgCgNgCQgPgDgOgCQgDgBgDgB").p("EA9AgVnQAAABAAAAQAAAAAAAAQAAAAAAgB").p("EA9zgVNQgCAAgBgBQABACACAAQAAAAAAgB").p("EA9ZgVdQAMAGAIAHQgCgCAAgEQgJgDgJgE").p("EA8ngRNQAHAIAGAGQACADABABQAFAGAEAEQAGAEAHAFQADADADADQABACABACQAHALAGAHQABACACABQADAEAFAFQAFAEADAGQALARAMAOQACABAAABQAHANAHAGQAHAHAJALQACADABACQAHAIAKAJQACACABACQALALATAJQADABABAAQAWAEARALQACACADACQABACACABQAFAEAHAEQAEACAEABQADABAAACQAEAEAGADQAUAJAWAFQADABAEABQANADAMADQALACAMABQAWADAYABQAHAAAHgBQAGgBAHgBQAGAAAEgEQAEgEgEgFQgBgBgCAAQgEgBgFgBQgEgBgFAAQgOABgLgDQgNgEgMgDQgCgBgCgBQgBgCgFAAQgPACgMgGQgCgBgDAAQgOABgLgJQgGgFgHgEQgCgBgCgBQgMgGgOgEQgEgBgEgBQgMgDgJgFQgCgCgDgCQgKgJgMgIQgNgIgOgJQgRgLgLgSQgCgCgBgDQgEgLgKgIQgKgKgLgKQgCgDgDgDQgHgFgFgHQgPgUgTgQQgEgDgEgDQgUgPgUgPQgFgEgEgFIgMAL").f("#e9e9e9").p("EA7wgV3QALAFAJAAQAFAAAEgEQAHACAIACQARAFATAGQAAABAAAAQANAEAMAFQAJAEAJADQAkAPAkATQB9BEAIADQgDACgBAAQgCACAAAEQAAAGABgCIABABQABABAEAAQADAAADgDQADgDACAAQAWgGABAAQAGAAAFANQAGAOAFADQAFgBAPgJQABgBADgCIAAAAQAOABAHAMQAHAMAKAAQAHAAAFgFQAAgBABgBQADgDAFgIIAAgCQgBgCgCgBQAAgBgFAAQgDAAgRgFQgBgBgBAAQgTgHgKAAQgLAAgBABIgCABQgBACgCADQgEgFgDgEQgTgXgLAAQgDAAgHADQgCABgBAAQgGACgCAAQgcgPgWgMQghgSgYgMQgagNgOgFQgCAAgBgBQgIgFgIgEQgYgOgTgKQghgRgmgGQgFAAgFgBQgOgBgPAAQgGgCgEAAQgFAAAAAHIAAAD").f("#ffffff").p("EA8mgV9QAmAGAhARQATAKAYAOQgKgJgNgGQgCgBgBgBQgCgDgEgBQgDgBgDgBQgJgEgGgFQgBgBgBAAQgTgFgPgFQgGgCgGAAQgHgBgGgB").p("EBA4gTtQgIgDh9hEQgkgTgkgPQAAAEACACQAAABABAAQABABABAAQABABACAAQAAABAAAAQAAABgBABQgBACgCABQgFAEADADQAKAFAKADQABAAABAAQAPADALAFQACABAAABQAAADgFACQgEAAAGAFQAEADADACQAEADAHABQACABABAAQAHABAGABQACAAABAAQALAAAAAIQAAACAAABQgFADAFACQALAFAJADQADABABAAQAMACADANQABACAAACQADADAGABQAOABAHgHQAAADAAACQgCAGADACQAXAIAQAOQAFgFAJgHQADgBABgCQAKgIAHgGQADACgBAIQAAADABABQACACgBAGQgCAHAAALQAAAFgEAFQgFAFAFABQABgBABgBQAHgDAGgFQAJgGAKgJQAFgFADgJIAAAAQgPAJgFABQgFgDgGgOQgFgNgGAAQgBAAgWAGQgCAAgDADQgDADgDAAQgEAAgBgBIgBgBQgBACAAgGQAAgEACgCQABAAADgC").p("EBAxgUFQgLgEgKgFQgBgBgDgBQgGgCgGgCQAWAMAcAPQACAAAGgCQgGgDgGgDQgFgDgEgB").p("EA+rgVEQAOAFAaANQgSgKgSgHQgBAAgBgBQgBAAgBAA").p("EBC7gTGQgFAFgHAAQgKAAgHgMQgHgMgOgBQAKAPABAWQABAYgIANQAYgOANgUQAFgJADgHQABgDABgDQgBABAAAB").p("EBB7gTkQgEgBgCgBQgBAAAAgBQgCAAgBgBQADAEAEAFQACgDABgC").f("#d4cfd1").p("EBGSgbuQgGgGgGgBQgkgDghAJQgcAHgdABQg/AEhCgDQgIAJgMAAQglADgUAZQgJAcgVALIAEAGQgJAFgKADIAJA+QABAAABAAQALAAAMAAQgGAigJAiQgCAHgHAEQgaAPAbAgQAbAeBAgKQAcgEAWgYQAIgJAMgDQAWgGAOADQAMAEAGAJQAFAJAFAIQAOAIANAHQAFADAGACQARAJATADQANADAGABQADgJAEgJQANgZAUgUQANgNANgPQAAAAABgBQAUgYAhgFQAEAAAEAAQAOgBAOgCQAOgBAPgCQAGgCAHAAQAhAAAmAAQAHABAIAAQgdglgsgpQgggdgjgpQgKgBgBgJQgqgNgcgbQgCgBgBgC").f("#b5a381").p("EAxagIgQgwgmgrgqQgEAjABAiQAAAMgEAMQAJAQAMANQAJAJALAEQASAZAeATQAKAHANAGQAFADAGACIgUhcIgFgZ").f("#877457").p("EAwhgHpQgLgEgJgJQgMgNgJgQQgCALgDAAQhjgWgZAMQgDAMAEADQA1AzgtBfIgEAMQhOhAheAiQgNgEgLgFQgLgFgMgFQgHAYAFAXQAAAGANAFQALAFABAFQAKBZhBgmQgDAMgDAMQBOAUBogkIA1AFQAEgMACgMQBFgZAQgtQAAgCALAFQAEgMADgLQgMgFgGgJQgagmAWg+QA7A/AfgfQAHgHADgM").f("#9e8c6b").p("EAwXgHWQgfAfg7g/QgWA+AaAmQAGAJAMAFQCYCyg9ijQgDgHgMgFQAJgsArAUQASAJAYASIgKgtQgGgCgFgDQgNgGgKgHQgegTgSgZQgDAMgHAH").f("#bfb6af").p("EAwjAA6QgCgFgBgEQgHACgIAEQAGANAAANQAHgMAFgL").f("#dcd1ba").p("EAyCAYRQADABADABQAHACAIACQgGgFgHgEQgEABgEAC").p("EAxKAYdQAFANABANIgGAIQgGAHgRAAQgFAAgEAAQgBAAgBAAQh1gBhZgRQgFACgGABQgaAIgbAIQgKASgJATQgPAdgLAbQgIASgGASQAKgIAUAGQAAAAAAgBQAQgQAUgEQAogIAJAwQAHgHAOgDQAegIBpADQAAACADABQADACAAARQAAALgIAOQAKACALACQAuAKAhAWQAjAXAAAVQAAADgBADQANgLAeALQAtAQBJA9QBBA2A1A9QA2A8AAAWQAAAdgEgEQgBACgCADQgFAFgSAAQgLAAg/g5QAPAQALASQAQAZAQAtQATA2AJASQACAFADAGQAZAOAXAMQAIgGAIgDQAGADAFADQg+hgAAgEQAAgSAAgCIABADQBJAMBIBlQANASAKARQAxAMAwALQAOADAPADQgBgBgBgBQgRgXgNgdQgKACgHgEQgKgFgKgGQASgIASgGQgFgEgFgDIhXAAQgDgHgbgdQgWgZAAgOQAAgCAXhVQAAgFAAgFQgCAAgEAAQgiAAgdgzQgXgpAAgUQAAg6A5A1QATAQAPAVQgDgHgEgIQhfi3AAADQAAgEAAgDQhLg7hjhAQjIh/gagSQgDgLABgHQgCAAgCAA").p("EAw5Ad7QgPAAhVgdQhYgdgRgQQgFgBgFgCQgMgEgJgEQgIAGgTAAQgwAAgagjIgSgiQAAgCAAgCQAAABAAAAQgugBgtgFQgKgIgEgMQgkhYheAUQgKgJgKgKQgPgNgQgNQhAgzhBgkQgLgHgNgFQgLAKgKAKIgLAJQAuAkgnAcQAoAMAnAQQBVAhBSAuQAMAHAKAKQALAIAKAKQA2AtATAvQAQAGAQAGQASgFARgFQAKgSAKgQQgCAKgCAJQAJAFALAFQALAFAKAHQABgBACAAQATAAAVAKQADgBADgBQAIAHAHAHQAGAFAHAGQAFAGAGAFQAMAJALAIQAHAAAHAAQAMgGAPgEQBwgcDBCNQBQAdAzAoQgcgagkgjQiRiMAAAJQAAgGAAgFQgGAHgLAGIgdAL").p("EA5ZAeXQAwBEAiBDQAmBKAAAjQAAADAAACQAVAIAhAWQABhmi0i4QACADADAE").p("EA3hAkhQgTgCgTAAQAPAtAUBRQAeggAqggQgFgJgGgIQgIgMgGgLQgCAFgEAGQgIALgNAGQgSgFgJgJIgDgSQAAgGAKgJQACgBABAA").p("EA8NAntQgQAdgSAWQANASAWAgQAQgBAIARQACAFAEALQACgLADgDQAJgLA3gSQAAgBgMgNQgMgMAAgRQAAgSACgGIABgCQgCgBgBgDQADACAFABQAIgCAHAAQgOgTAPACQgVgEgXgIQAQgMANgIQAugiAfgOQACgCgDgIQgKABgKACQgKACgKACQgHABgIAAQADACACAEQgMATgHAGQgVATghAAQgIAAgMgEQgHAPgLAU").p("EA+tAqEQgBgEgBgEQgDAEgEAEQAFAAAEAA").p("EA+wArAIg0AAQgEAIgEAGQAXgEAfgFQADgDADgC").p("EA7EAp6QAFAIAFAHQgBgBgBgCIgFgMQgBAAgCAA").p("EA5mAoMIgCACQACADADADQgBgEgCgE").p("EA+6AkvIgJgFQADAEAFACQAAAAABgB").p("EA/CAmPQAGATAOAHIANAHQACgFAEgFQACgGACgHQgPgNgNgRQgEAHgBAIQABABgBACQgDACgHAA").p("EBDGAnRQgMgFgNgDQgRgHgUgGQgsgBgoAAQgFADgFgDQgyAZgZgdQgPAVgXARQgNAKgPADIAAABQAHAcABAUQAGAJAEALQAGARAAARQAFAAAGgBQADAAAFgBQAigHAIgUQALgWAXAKQAUAKAWAYQAIALAHALQANAUAPAQQASATAigNQAVgRgagcQgOgPgSABQgaAAgMgMQgogjAIgtQACgIAAgMQAXgjAnAIQAqAIAqAF").p("EAtUAb+QAAgBAAAAQAAABgBAAQABAAAAAA").p("Ac0d0IAKAGQALAEATAAQAAAEAAADQAAAbAdBMQAMAhANAVQAAAHABAIQAOCFAWBwQAOBDAQA1QAcBvAxBGQAYAjAcAXQAhBWAzAAQALAAALgEQAkAEAfAAQArAAAigEQA+AuAgAYIAkAbQAjAAAKgMQAFgGABgFQAGgMAAg6QAAgzg1gpQgQgMgSgKQgNgOgWgSQg0grhCgfQgngTgfgIQgchIgdg4QgMgXgKgSQgOgkgQgyQgmhzAAg0QAAgZAjh4QAih5AAgQQAAgkgSgJQgXgDgOgFQgBgBgCgBQgGAJgGAIQgGAHgHAIQgDgFgFgFQgBAAgBgBQgsgrg6gSQg/gSgpAXQguAbAABLQAAA5AGAD").p("EAhqAbtQAJAAALgBQgRgEgRgFQAHAFAHAF").f("#bfb397").p("EAyCAYRQgwgMgEAYQgBAHADALQAaASDIB/QBjBABLA7QAAADAAAEQAAgDBfC3QAEAIADAHQgPgVgTgQQg5g1AAA6QAAAUAXApQAdAzAiAAQAEAAACAAQAAAFAAAFQgXBVAAACQAAAOAWAZQAbAdADAHIBXAAQAFADAFAEQAoAbBQAAQAKAAAHgBQAnAnAjAnIgKACIADAJQAMgKAGgKQAHgLgBgLQATARASAVQACACABACQANARAPANQgCAHgCAGQAEAFAFAFQAFAEAGAAQAdAGAegIQAFgBAGAAQAUABAUgCQAcgCAcgCQgUgJgUgGQgDAAgDAAQgVgEgSgHQgjgIgmgFIgcgtQgEgFgEgEQgJgLgNgHQgJgGgJgHQgFgCgDgEIgagOIgig3QgVAAgWAAQgmgigdgVQghgWgVgIQAAgCAAgDQAAgjgmhKQgihDgwhEQgDgEgCgDQgdgngYgYQACgEACgDQABgFAAgQQAAgehOhBQhJg9hig6QhZg0g7gUQgIgCgHgCQgDgBgDgB").p("EAwzAX3QgVgBgUgBQgigQg2gPQhbgahAgCQgzgkgyglQhxgVhBguQhLg2gDhSQgEgEgEgDQAEgDAEgCQAAgsAIgiIgPABQgBAAAAACQgEAFgEAFIgBABIAAABQgGALAIAAQAAAigJAeQgJAEgKAEQAAABAAAAQAAABAAAAQABABAAAAQAGAFAEAFQARAQAQAPQgBAJAAAIQAFgCAFgDQABgBABAAQADADACACQADAXgDAUQAMgEANgEQAFANAGAKQghgOgXgHQgSgFgMAAQgBgBgBABQgDAAgCAAQgMACAAALQAAAAAAAAQACAHARANQAjAdBnA8QABABABABIgGAGQBcBHguBCQAfAaAfAcQAJAJAKAKQAKAIgDAFQgJAXgWATQA3AUA4gFQALgbAPgdQAJgTAKgSQAbgIAagIQgygIgxAHQgGgFAEgdQAnARAwAKQAMADANACQBZARB1ABQABAAABAAQAEAAAFAAQARAAAGgHIAGgIQgBgNgFgNQgHgVgQgR").p("EApKAWmQgKgIgKgKQAAAAgBgBQAJAFAIAEQAHAFAHAEQgFAAgFAB").p("EAkXATBQAHAJAHAKQAEAEADAEQANgGAMgHQgNgNgNgNQgJgJgJgKQgKgKgKgLQgehQhAhQQgUgZgUgaQgNAbgMAZQAAACABAAQAJANAFAMQAJAIAIAJQABABABACQACACACACQAEAGAFAFQAOATAQATQAGAGAFAGQARATATASQAAAGAIADQAHARAPAKQACAMANAFQAEAEAEAF").p("EAs+AcNQALgJAKgGQABAAAAgBQgLgKAAgCQAAgPAJgJQgJgwgoAIQgUAEgQAQQAAABAAAAQgUgGgKAIQgIAIgBATQAAACAAACIASAiQAaAjAwAAQATAAAIgGQgJgFgEgEIgCgQ").f("#c3b89f").p("EApUAWlQgHgEgHgFQACAFACAFQAFgBAFAA").p("EA+OAlyQgKADgKABQABAGACAFQABACABACQAAACABADQACAIAEAJQAKgCAKgCQAKgCAKgBQAKgCAKgDQAHAAADgCQABgCgBgBQABgIAEgHQgBgCgCgCQgSgVgTgRQABALgHALQgGAKgMAKIgDgJ").p("EArqAYUQgEAdAGAFQAxgHAyAIQgHgEgHgEQgwgKgngR").f("#d6cbb2").p("EApKAWmQgCgFgCgFQgIgEgJgFQABABAAAAQAKAKAKAI").p("EAmKAUKQACAAADAAQgCgBgBgBQgBABgBAB").f("#eadbbc").p("EAxWAdwQALgGAGgHQAAAFAAAGQAAgJCRCMQAkAjAcAaQARAOAOAPQA/A5ALAAQASAAAFgFQACgDABgCQAEAEAAgdQAAgWg2g8Qg1g9hBg2QhJg9gtgQQgegLgNALQABgDAAgDQAAgVgjgXQghgWgugKQgLgCgKgCQAIgOAAgLQAAgRgDgCQgDgBAAgCQhpgDgeAIQgOADgHAHQgJAJAAAPQAAACALAKQAAAAAAABQAVgLARACQAdACAYAkQgCAEgCANQgFAMgSAAQgRAAgXgHQARAQBYAdQBVAdAPAAIAdgL").p("EA2/Ai5QAAAEA+BgQAMAIAFAKQAAADgBADQAGALAIAMQAGAIAFAJQAZAmASAaQAAAIACAJQAAAPAAAMQA6gVAsBFQAjA3AAAmQAAAIAAAGQAigSAQAAQAAAAAAAAQgWgggNgSQASgWAQgdQALgUAHgPQAMAEAIAAQAhAAAVgTQAHgGAMgTQgCgEgDgCQgIgLgQgHQgDgBgDAAQgCgLgHgEQgLgEgGgCQgygSgngJQgPgDgOgDQg1gIgdALQgHgNgIgNQgKgRgNgSQhIhlhJgMIgBgDQAAACAAAS").p("EA69AmZQAFACAGADQgHADgHACQACgFABgF").p("EA7PAqKIAAAAQABADACACQgBgKAAgNQgEACgGAAIAFAMQABACABABIABAB").p("EA5jAoGQgNghgDgaQAAARACAHQADAUALAP").p("AbAJEQAAAEAAAEQABAEAAAEQAAACABACQAAAAABgBQAMgFALgGQACAAACAAQgBgFgCgDIADgMQgNAIgQADQAAABgBAAIAAAA").p("AaVMkQANAZAAAiQAAAXgKAqQAMACALADQDlAziRBDIAOAAQBYA5h6AqQgBAGAAAEQgDAIgNAhQAIAeAAANQAAAMgGBfQAAAAAAABQAWAUAAAfQAAALAAAPQACAAACgBQANAAAMADQAaAHAUAIIAAAAQAAADgBAEQAAALACAOQACALADAMIgNAAQAGADAFAEQANgLANgHQABgCABgCQADgHADgIQADAJADAKQAEABAEABQADABAAANQgCACgCACQABADAAAEQAdgVAdgVQAIAIAFAJQALAVgDAeIALgJQgJAVgIATQgDAIgDAIQgCAGgDAGQAJACAIACQBIhTBIBIIALgJQApBPA4BJQAMARANAQQB0AHCTAjQAOADAOAEQgFgHgDgKQgHgKgHgNQgHAGgGAFQgUARgHgDQgggTgmgXQgLgFgLgHQgJgFgJgFQgKgFgJgGQhBgkhMgrQgLgFgKgGQABgHABgFQAGgZAYgZQAHgGAHgHQALgJALgKQgJgIgNgDQgTgGgVABQABgTAIgRQAFgLAKgJQgKgKgNgGQgQgJgRgJQgMgHgNgIQgbgRgagUQgJAFgIAFQgXAPgVAOQgVgXgVgZQAUg1AWg1QAQgrARgqQgJgHgNgCQAAgNAAgMQgGg3gJgwQgXhogohHIABgNQgMALgQAJQgxAXhWgFQgMAAAAgCQgEg7gVgnQgQgggbgSQgDgCgBgBQgFgDgFgDQgWgMgcgEQgHgCgIgBQABADAAADQAkAQAAAwQAAAEgCAH").p("Ad4WwQgVgCgQgBQgIgEgJgDQAagBAdgDIgBAO").p("AaRO6QgCAIgCAHQAVBMAAANQAAALgbAiQACAOACAQQACAHABAGQAMgPAIgQQAAAAAAAAQAAg9APAVQAHgkgMglQgIgagRgcQgBADgBAD").p("EAobAckQAsAMApANQgTgvg2gtQgKgKgLgIQgLAJACAGQAMArAFAYQAAACABAB").p("AaQSPQAHAxAAAKQAAAEABAFQABgPAEgkQABgFAAgGQgGgDgIgD").p("AauUwQgCgOgKgaQgBgEgCgEQgCARgSAMQgBABgBABQAFAwAFAvQAHgEAIgDQAAgBAAAAQABgCAAgCQgBgMAAgQQAAgKAFgPQADgHAEgG").p("AdoX4QAJAAAIACQgCgHgCgGQgFAEgGAFQgBABgBAB").p("ATxWOQACgEADgDQACgEgIACQAAAEABAF").f("#c0b59c").p("EA3eAkiQgKAJAAAGIADASQAJAJASAFQANgGAIgLQAEgGACgFQABgDAAgDQgFgKgMgIQgFgDgGgDQgIADgIAGQgBAAAAABQgBAAgCAB").p("EA7EAp6QACAAABAAQAGAAAEgCQAAANABAKQgCgCgBgDIAAAAIgBgBQgBACgBABQADAFADAFQACAdAFAMQATAuBHAAQAPAAAIgKQADgDACgFQALADALABQAXgFAYgFQA2gLAwgGQAKgEAJgDQgBAAgBgBQAQgFAPgBQApgXAvgNQAOgBANgHQgiANgSgTQgPgQgNgUQgHgLgIgLQgWgYgUgKQgXgKgLAWQgIAUgiAHQgFABgDAAQgGABgFAAQAAgRgGgRQgEgLgGgJQgBgUgHgcIAAgBQgUAGgWgCQgBAAgBAAQgPgCAOATQgHAAgIACQgCAAgCABIgBAAIgBACQgCAGAAASQAAARAMAMQAMANAAABQg3ASgJALQgDADgCALQgEgLgCgFQgIgRgQABQAAAAAAAAQgQAAgiASQAAgGAAgIQAAgmgjg3QgshFg6AVIAAAAQAAABAAABQADAaANAhQABADACADQACAEABAEQAHAQAJAQQAmBEAfACQABAAABAAQACAAACAA").p("EA+kAqEQAEgEADgEQABAEABAEQgEAAgFAA").p("EA+qArFQgfAFgXAEQAEgGAEgIIA0AAQgDACgDAD").p("EBByAnEQgngIgXAjQAAAMgCAIQgIAtAoAjQAMAMAaAAQASgBAOAPQAaAcgVARQAagBATgMQAagKALgJQAOgNAKgLQAdgjgagwQgHgGgGgDQgEgVgQACQgFABgIABQgCgNgGgCQgGgDgIgCQgqgFgqgI").p("EBB7AmdQgWgGgXgFQASAHAVAEQADAAADAA").p("EAtAAcdQAEAEAJAFQAJAEAMAEQAFACAFABQAXAHARAAQASAAAFgMQACgNACgEQgYgkgdgCQgRgCgVALQAAAAgBAAQgKAGgLAJIACAQ").p("AZkWvQgeAwAAAbQAAASADADQACABAHAEIADACQAIADASAAQAFAAAGgEQAMAJASANQAIAGAJAFQAIAGAIAEQAHgCAHAAQArgFAaAcIAAAAQAFADABAFQALANAFASQAIADAMAAQAGAAAcAIQADABACABQAhgCArgCQgugpAAAAQAAgSAOgGQgBgBgCAAQgCgCgDgBQgCABgDABQgLAEgYAAQhIAAgtgrQgQgPgIgNQgVgOgTgIQgCgBgCgBQABgCABgBQgIgGgDgLQAAgaAAgCQAAgPALgxQgIADgHAEQgJAFgIAHQgKASgUAT").p("AanU9QgFAPAAAKQAAAQABAMQALgvAAgOQAAgCAAgDQgEAGgDAH").p("AdeX4QAFAFAEAFQAQAFAPAAQAAgGgCgBQgDgDAAAAQgEgCgEgBQgIgCgJAAQgEAAgGAA").f("#d2c4a5").p("EA6hAkWQAKAGAKAFQAHAEAKgCQANAdARAXQABABABABQAnAJAyASQAGACALAEQAHAEACALQADAAADABQAQAHAIALQAIAAAHgBQgEgJgCgIQgBgDAAgCQgBgCgBgCQgCgFgBgGQAKgBAKgDIAKgCQgjgngngnQgHABgKAAQhQAAgogbQgSAGgSAI").p("EAnXAZzQAKAKAKAJQBegUAkBYQAEAMAKAIQAtAFAuABQAAAAAAgBQABgTAIgIQAGgSAIgSQg4AFg3gUQAWgTAJgXQADgFgKgIQgLAJgDgCQiYhNighFQgDgBgCgBQgKAJgMAKQgIAHgGAGQgEACgEADQANAFALAHQBBAkBAAzQAQANAPAN").f("#d3c5a8").p("EA7AAp6QgBAAgBAAQAIAJAGAJQABgBABgCQgFgHgFgIQgCAAgCAA").p("EA/pAlYIgPgZIgggQQgBABAAAAQAJAHAJAGQANAHAJALQAEAEAEAF").p("EAhVAOgQABBHAPArQAEANAGAKQAPAbAYAJQAKAEALABQAEAAAEAAQgQgTgOgTQgFgFgEgGQgCgCgCgCQgBgCgBgBQgIgJgJgIQgFgMgJgNQgBAAAAgCQAMgZANgbQAUAaAUAZQBABQAeBQQAKALAKAKQAFhjhFggQABgNAHgGQALgLAEgQQAEgVgMgfQgCgEgCgFQgEgJgFgKQgNAAgKAFQgHAFgIAEQgUAIgRgBQgIgBgHgCQgagJgSgjQgBAMABAN").p("EAkPAS4QgNgFgCgMQgPgKgHgRQgIgDAAgGQgTgSgRgTQAAAGABAGQgBAkgKAeIAAAAQAfAoAhAmQgWAMgWAMQgbgWgfgWQgfgVgjgUQAYhMBQA7QgagggXghIgnhnQgGAPgGAPQAHAWgHAXIgJAIQgFgFgFgFQgUArgSAsQgRAqgQArQAOACANABQAKACAIAIQABABAAABQAVAFALAHQAjAUglAkQgPAPgcASIALAJQAIgFAJgFQAagRAbgQIBIA6QgFAPAjAbQAGgCAEgDQAYgQASgOQAvgnAQgkQAFgKACgKQABgFACgFQAEgFAGgFIAAgBQgLgIgJgLQgPgQgQgQQgBgBgCgBQgIAEgIAFQABgCAAgCQAFgUACgTQgEgFgEgE").p("EAmyASaQgEACgEADQAEADAEAEQAAgDAAgEQAAgCAAgD").p("EAmIASxIAAAAQAFASADAQQAEAWgCATQAAAHgBAHQAMAAASAFQACgSABgSQAAgIABgJQgQgPgRgQQgEgFgGgF").f("#e4dac5").p("EA+uAmUQADAIgCACQgfAOguAiQgNAIgQAMQAXAIAVAEQABAAABAAQAWACAUgGQAPgDANgKQAXgRAPgVQACgDACgEIgNgHQgOgHgGgTQgKADgKAC").f("#655752").p("EAgLgXmQgEANhBBEQgHAHgEAMQBCgPBHgEQAMgBALAFQAEgMgFgIQgVgsgRhSQANAEALAFQALAEAMAFQADgMgDgJQgIgWgUgQQgVAPgVARQgrAMgrAMQAhANAjAVQADABgDAL").p("AdY3yQgQAFgPAFQAbAIAEgS").f("#4e3b34").p("EAgLgXyQgjgVghgNQguAOgtAOQA/B8h0AeQgHACgCAMQA+gXBaASQADABADgNQgLgEgFgIQgEgJADgMQAEgMAHgHQBBhEAEgNQADgLgDgB").f("#412b27").p("AdY3yQgEASgbgIQhPAZhLAcQANBsBSBIQAJAJANAFQADgMgDgLQgLgjANguQALAEANAFQACgMAHgCQB0geg/h8QgKACgKAE").f("#5c4f4a").p("EAibgZ+QADgMAEAAQBCAAgPgmQgiAWgiAYQAFACAFAC").p("EAhjgYRQAYAKAXAJQAMAEAMAFQACgMgCgKQgPg5gTg3QghAWggAZQAUAQAIAWQADAJgDAM").f("#807260").p("EAiRgaCQgFADgEAEQATA3APA5QACAKgCAMQCSCJg4ieQgEgKADgMQgMgFgHgIQgjgsgyglQgFgCgFgC").f("#6a5e53").p("EAibgZ+QAyAlAjAsQAHAIAMAFIAMAFQgDgogNgtQALAEAMAFQADgMAAgMQAAgugZgeQgVANgWAOQAPAmhCAAQgEAAgDAM").f("#938470").p("EAg0gYjQARBSAVAsQAFAIgEAMQALAFANAFQALAEALAFQBqABAiAmQAEAFgDAMQBOAYAThbQACgNADgMIgLgEQBVgthZhYQgMgEgGgJQgXgcgugTQgMgFgLgEQANAtADAoIgMgFQgDAMAEAKQA4CeiSiJQgMgFgMgEQgXgJgYgKQgMgFgLgEQgLgFgNgE").f("#6a5949").p("AcUzxQBKBNAMBAQACAMgDALQBEAGAogsQAIgHACgMQgLgFgEgIQgFgIAEgMQBMAoArgZQAHgEADgMQgLgFgMgFQhKgkgBhIQANAFAHgEQAHgDADgMQAEgMADgNQgMgEgLgFQgYgJgYgKQgDANgDgBQhagSg+AXQgNgFgLgEQgNAuALAjQADALgDAM").f("#82796e").p("Aaf2zQgOAEgMAFQASAxgbBLIALAFQAEgMADgMQAhBhALBqQABANgDALQAMAFAHgEQAHgDAEgMQADgMADgMQADgMAEgLQBWATAGBBQAAAEAMAFQAMAFAHgEQAIgEADgMQADgLgCgMQgMhAhKhNQgNgFgJgJQhShIgNhs").f("#2e1512").p("AX910QgmAQglAQQgXAJgPASIg3ATQAiAiAvAdQAMAGAMAFQhQAeADAuQAAAMgDAMQASC8AIBXQACALgDAMQAIARADARQACALgDAMQAQCIA0B5QADAIAMAFQgFBrBSggQAIgCACgMQgJhYAlhwQADgLADgMQgLgFAAgCQAJhWglg2QgLgFgEgIQg8hvgUhiQBcgyAiAkQAOAOAgg/QgMgFgGgIQgVgeAMguQADgMgFgJQgUgpAAg0QgMgFgIgIQgggighgh").p("AOs0QIADgMQgsAGgeATQgLAHgMABQgpADgoAGIACAKQAwgGAUAaQgWAigiAOQgGAEgIAEQgnAXgfAhQgJAIgMACQgvAIgVATIDkALQAAAAAAABQAWABAWACQBuAGBsAJIAdARIABAAQAAAAAAAAIAbAQQAOAAALAAQAdAAAdgDQA8gGgHg2QgBgMgHgLQgFgMgIgIQgKgIgBgIQgJgrAUglQAOgagBgVQgYgagdgWQgogJgsAEQgoAEgoADQgMACgMAAIgeAlIhkB5IAWhjIAIgm").f("#4b3532").p("AY+0xQAIAIAMAFQAAA0AUApQAFAJgDAMIALAEQAHg3ANhEIgLgFQAbhLgSgxQhFAahDAcQAhAhAgAi").f("#41241a").p("AZVwoQgigkhcAyQAUBiA8BvQAEAIALAFQAEgMAHgCQBDgTgnhtQBZhFAQBpQAAAGAMAEQAMAFALACQBFANhghkQBgBCAogTQAHgEAEgMQgNgEgDgIQgphUhSg/QgEAMgHADQgHAEgMgFQgDAMgFAAQgWADgXgKQggA/gOgO").f("#5b4533").p("Ac/xHQgGhBhWgTQgEALgDAMQgDAMgDAMQBSA/ApBUQADAIANAEQAUAWAWASQAJAHAMAFQADgMgEgFQg3hFgdhPQgMgFAAgE").f("#7a6b58").p("EAhbgWRQgLgFgMABQhHAEhCAPQgDAMAEAJQAFAIALAEQAYAKAYAJQALAFAMAEQADgLADgMQAEgMACgMQBfBRAHhDQACgMACgMQgLgFgLgEQgNgFgLgF").f("#887963").p("EAgfgV0QgCAMgEAMQgDAMgDALQgDANgEAMQB9AZgaBdQgEAMgDALQBLAlAahLQAAAAALAEQAMAFAMAEQALAFAMAEQADgMgBgLQgShyhDgcQAuASAfgHQAJgCAMAFQADgMgEgFQgigmhqgBQgCAMgCAMQgHBDhfhR").f("#776855").p("Afu0eQABBIBKAkQAMAFALAFQAMAEAMAFQADgLAEgMQAahdh9gZQgDAMgHADQgHAEgNgF").f("#63513d").p("Adew9QgHAEgMgFQAdBPA3BFQAEAFgDAMQAMAFALAFQAEgMACgMQAsguBJBMQAEAFgDAMQA7AqA2APQABAAACgMQAEgMgEgIQgMgYgVgVQgMgFgKgIQiFhqgMiDQgCAMgIAHQgoAshEgGQgDAMgIAE").f("#584533").p("AfQyTQAEAIALAFQAMCDCFBqQAKAIAMAFQADgMAIgFQBKgxg1g1QgMgEgMgDQhmgZAbhWQAQgHALgLQAHgIADgMQgMgFgMgEQgDAMgHAEQgrAZhMgoQgEAMAFAI").f("#6b5b47").p("EAjNgTFQgaBLhLglQgDAMgHAIQgLALgQAHQgbBWBmAZQAMADAMAEQADgMADgMQAxACAEgTQgEgLgCgLQgCgCgBgDQgFgGAEgMQgNgEABgDQABgyAMgvQgLgEAAAA").f("#85765b").p("EAjXgRZQABAMADALQACALAEALQAbBTBcBEIADgMQgMgEgGgKQgWgcAMgwQAkgmAggqQAIgIACgMQgLgEgIADQhWAlgdh0QgMgEgLgFQgMgEgMgFQgMAvgBAyQgBADANAE").f("#746347").p("EAjbgRCQgDgLgBgMQgEAMAFAGQABADACAC").p("EAimgQDQA1A1hKAxQgIAFgDAMQAVAVAMAYQAEAIgEAMQANAFALAFQAEgMADgMQAGgYAHgYQBLA4ArgEQALAAALAFQADgMAIgFQA7gnhKgZIgDAMQhchEgbhTQgEATgxgCQgDAMgDAM").f("#91877e").p("EAqRgdhIhGgHQgCABgDABQhJAahIAgQBPCRB4gyQAHgDADgMQgLgEgFgJQgEgIADgMQAwgGAkgfQgWgigggbQgBgBgBgB").f("#c0ae94").p("EArugbLQgNgxgYgmQgkAfgwAGQgDAMAEAIQAFAJALAEQAnANgaAtQgFALgEAMQAQgIAPgBQALgBAMAFQACgMAEgMQAYgDAVgJQgDgMgCgL").f("#b5a691").p("EAr8gaJQgEgWgFgVQgVAJgYADQgEAMgCAMQALAEAMAFQAMAEAMAFQADgMADgLQADAFAEAH").f("#beb1a3").p("EAr1gaVQgDALgDAMQgJBTAUBDQAEAJADAJQACgSAAgTQADhIgKhGQgEgHgDgF").f("#a69884").p("EAqKgaLQgDAMgFAKQgQAmg7gpQgEArAfAfQAFAEgEAMQBqhQAuCqQADALgEAMQAJAFAGAGQABABABAAQACgPABgOQACgMABgMQgDgJgEgJQgUhDAJhTQgMgFgMgEQgMgFgLgEQgMgFgLABQgPABgQAI").f("#b1a492").p("EAqKgaLQAEgMAFgLQAagtgngNQgDAMgHADQh4AyhPiRQgCABgBABQgDAJgCAJQgDAMgEALQANAFABAIQA8Cgh0huQgGBLAKA5IgNgFQgDAMgDAMQBZBYhVAtIALAEQAjAkgjBGQgFALgEALQA7AqAbgdQAEgDALAEIAMAFQgJglAWg/QgLgEgBgGQgEgXAGgYQBBgXAcguQAGgJADgMQADgMADgMQAEgMgFgEQgfgfAEgrQA7ApAQgmQAFgKADgM").f("#bac0cf").p("EAmygcqQggAPgfAQQgHADgHAEQAAAFAMAEQAPgHAQgCQALAAALADQAEgLADgMQACgJADgJ").f("#978a79").p("EAlUgbtQggBbAuBDQAGAIALAEIANAFQgKg5AGhLQB0Bug8igQgBgIgNgFQgLgDgLAAQgQACgPAHQgDAMgHADQgIAEgLgF").f("#7f7778").p("EAlngbsQAHgDADgMQgMgEAAgFQgzAagyAfQAZAeAAAuQAAAMgDAMQAuATAXAcQAGAJAMAEQADgMADgMQgLgEgGgIQguhDAghbQALAFAIgE").f("#8d806a").p("EApNgYGQArAfAWApQAEAIAMAFQACgMAEgMQAYAJAXAKQAMAEALAFQAEgMgDgLQguiqhqBQQgDAMgDAM").f("#998f7c").p("EApEgXxQgcAuhBAXQgGAYAEAXQABAGALAEQAEgMADgMQBDgEAeAmQAJAIALAFQALAFACgCQAWgogQgiQALAEAIgDQAHgEAEgLQgMgFgEgIQgWgpgrgfQgDAMgGAJ").f("#a4967e").p("EAnxgVzQgWA/AJAlIgMgFQARCiBGhhQAAgCABgCQAAABAAAAQAkBUAQgPQAIgGAEgMQACgMgCgLQgShfAPhDQgLgFgJgIQgegmhDAEQgDAMgEAM").f("#918265").p("EAnJgUVQgbAdg7gqQgLgEgLAAQgbgBgbABQBHBvBVBTIgVACQgGABgDALQBHBXAnhCQACgCAMAEIALAFQgeg5AhhgQhGBhgRiiQgLgEgEAD").f("#837666").p("EAptgVcQgPBDASBfQACALgCAMQALAEALAFQAMAFAMAFQALAEAMAFQAQgHAQgCQAKgBALAFQAEgMACgMQAEgCAEgBQgBgLgBgMQAAgCgBgCQgEg9ADhBQgWBmg0AaIgLgFQBFhnhGiFQgEALgHAEQgIADgLgEQAQAigWAoQgCACgLgF").f("#9a8b70").p("EAl3gWJQgTBbhOgYQgMgFgJACQgfAHgugSQBDAcASByQABALgDAMQAdB0BWglQAIgDALAEQANAFALAEQADgLAGgBIAVgCQhVhThHhvQAbgBAbABQALAAALAEQAEgLAFgLQAjhGgjgkQgDAMgCAN").f("#716049").p("EAmNgRfQgCAMgIAIQggAqgkAmQgMAwAWAcQAGAKAMAEQADgMADgMQBZh6BIB/QAEAIAMAFQACgMAEgMQgLgEAAgDQAEg9AQg8QgMgEgCACQgnBChHhXQgLgEgNgF").f("#83745c").p("EApkgSRQgQAPgkhUQAAAAAAgBQgBACAAACQghBgAeA5IgLgFQgQA8gEA9QAAADALAEQADgLADgMQBFBJgQg4QgDgKAEgMQADgMADgMQAMAEALAFIAEgMQgzgRANglQBTABgchYQgCgLACgMQgLgFgLgEQgEAMgIAG").f("#695947").p("EAp1gP2IgEAMQAygkBaBvQAGAJALAFQAEgMgEgFQhYhfgBiGQgMgFgLgEQgMgFgMgFQgCAMACALQAcBYhTgBQgNAlAzAR").f("#5e4f40").p("EAr5gWiQAAALAAAMQAAAAAAAAQABgKABgMQgBAAgBgB").p("EAr3gV1QgIAVAFAgQABgaACgb").f("#aa9979").p("EArwgSkQgCAMgEAMQAOAiANAiQgJgvgEgwQgEABgEAC").f("#8e7f69").p("EAq1gSHQABCGBYBfQAEAFgEAMQAPgHARgCQAFgBAFABQgihSgRhcQgNgigOgiQgLgFgKABQgQACgQAH").f("#543d38").p("AiUwrQgXACgXACQAXABAXACQABgDgBgE").p("Az4weQAAAMAAANQgGBDAZAnQAGAJAAAMQABAJABAJQARBkAbBZQAEALAAANIAkgFQABADAAAEQAAABANACQAAgNAAgMQAAgZAAgZQA1gKAJAnQAAACANABQAAgMAAgNQAAgMAAgNQBiguANBbQABAIAAAJIgMgBQAiBzAtgaQAIgFANABQArA+hZAUQgEABAAAMQAMABAEAGQBHCAhwg+QABAxASAfQAGAKAAAMQBRhZAQBKQASBOAjgwQgNgBAAgEQgkiJBKgeQAAgNgGgHQgjgpg9hIQghgmgogvQAZACAZADQAMABANABQAAgMAAgNQgNgBgCgFQgKgVAAgZQgNgBgFgHQhsiPjHArQAAAMAAANQgNgCgGgGQgDgEgCgFQgBgFAAgGQAAgNgBgMQgEhHgUg5QAZgIAegEIgJgJQgkAAgjAAQAAAJAAAK").p("Egg9gPyQAWAVAVAYQAGAGAMABQAmAdAoAYQAKAGAMACQAIAsAmAVQAEACAAANQBCA1BVAiQAMAEAMABQApAIgNg3QgDgNAAgMQgMgBgGgHQgHgHAAgNQgMgBgLADQg5AMhGhPQgMgBgMgEQgVgIgTgLQg4gggeg7QgMgBgNgDQgPgEgLgIQgSAFgRAG").f("#3c2220").p("AiUwkQCUAKCZAQIAJgbQAcAOBYABQAMAAANACQABAAAAAAIACgOIAwgbIgLhKQgRADgSACQhEAIhHADQhCAChFgCQgdgBgbgFQhTgNhZgEIAAAYQAlAAAfAUQgFAMgIAKQgIANgBAUQABAEgBAD").p("AJOwdQAFAtAVA7QADAFABAEQAIAdgNAxIANABQhLAdguh2Ig/AVQAjBpBeBCQAFAEAAANQBwgZBRBkQAHAHAAANQB/AXA8g2IgMgBQgNgCgMgBQhlgKhKieQD4BGiohhQgFgDAAgMQgNgBgMgBQgogBAPg0QgJgBgHACQgBgKgDgHQgDgKAEgPQAAAAAAgBQgKgIgEgJIAAgBQgIgKgJgKQAJAAAIgBQACgiAXgRQAIAUAIAIQAFAFAFADQAYgLAOgWQAAgBAAAAIjkgLQgBACgCACQAAAJAAAKQgFAAgGgBQgCAHAAAF").p("ALzuvQgVAJgWgHQAXgBAYgDQgCABgCAB").p("AOkzqQBTAphLhPIgIAm").f("#604b41").p("Ah+xiQgfgUglAAIAAgYQgcgCgdAAQg5ABg5gFQgGgBgHAAQgogGgngCQgCAAgBgBQgQgDgQAAQgRgFgRAAQg6gEg3gQQg3gHg9gCQgLAAgMgBQhhgFhiADQg9ABgpgQQgMgFgMgBQgJgBgJgCQgtgFg5ABQADAGABAIQACAHAAAHQABAGACAEQADAHADAFQAIAEAAAHQARgBAJAFQA5AfAmArQAFAHgEAOQAZAkAgAXQAKAHAHALQAIABAHABQAPABANABQACAAABAAQAEABADAAQgBACgBABQgIAUgogQQAAAMAAANQA+AfA5AoQAGAEAAANQAeAKgaBDQgEAKAAANQAAAZAKAVQACAFANABQAAgMAAgNQAZgWAdgRQAIgFANACQAAgNgDgMQgKg0gMgzQBuAyg2hKQgGgIAAgNQAbgPAXgSQADgCADgDQAHAAAGgBQACAAAAgBQACAAACAAQAEAAAEgBQANgCANgBQAegEAfgDQBKgJBLgHQABAAABAAQABAAABAAQApgEApgEQgLAFgMAFQAAAAgBAAQgPABgQAAQAAAGAAAFQAAAHAAAHQDNADCSA2QAMAFAMABQAoAHgDg1IANABQAMABANACQBYAPBwAcQAMADANABQAMABAMAEQAfAKAIgDIAUBgQA3gNA5BnQAFAKAAANQAMABANABQAMABANACQAMgMAPgGQAKgDANABQAAgNgFgEQhehCgjhpIA/gVQgEgLAAgNQBcgVAVAuQgVg7gFgtQAAgFACgHQgHAAgHgBQgZgDgZgCQAAgHAAgHQAlABAmABQAAgCAAgCIADAAQAVgTAvgIQAMgCAJgIQAfghAngXQAIgEAGgEQAigOAWgiQgUgagwAGIgCgKQgcAFgcAFQhKAQhKASQhnAahcAfQgMAEgLACIALBKIgwAbIgCAOQAAAAgBAAQgNgCgMAAQhYgBgcgOIgJAbQiZgQiUgKQgXgCgXgBQAXgCAXgCQABgUAIgNQAIgKAFgM").p("ABnv2QAlAEAigJQAEAAAAgNQAyAFAyAFQAMABANACQAHABAIABQgBAAAAAAQgGACgHAAQgwAJgzAEQgLABgLgBQgqgBgngHQABgCAAgC").p("AhItAQgMgCgMgDQhagdhvgOQAAANAGAGQA8A4hbgCQAOBgBYgfQALgEAMABQAAgNAAgMQANABAMABQAAgMAAgNQAggbBDAAQABAAAAgM").f("#3a2324").p("ABmvyQAnAHAqABQALABALgBQAzgEAwgJQAHAAAGgCQAAAAABAAQgIgBgHgBQgNgCgMgBQgygFgygFQAAANgEAAQgiAJglgEQAAACgBAC").f("#95898d").p("AIQwvQAZACAZADQAHABAHAAQAGABAFAAQAAgKAAgJQgmgBglgBQAAAHAAAH").f("#584644").p("AL3uxQgYADgXABQAWAHAVgJQACgBACgB").p("AJbw7QACgCABgCIgDAAQAAACAAAC").p("AMCw2QgXARgCAiQAegDAVgMQgFgDgFgFQgIgIgIgU").p("AMEvIQgGgJgHgKQgEAPADAKQADAHABAKQAHgCAJABQAAgNgGgJ").p("ALpvtQAEAJAKAIQgGgJgIgJIAAAB").f("#492f26").p("AOv0cIgDAMQBLBPhTgpIgWBjIBkh5QgPgRgYgNQgLgGgOgFIgDAN").p("AOktdQgkgdhEgBQAAAMAFADQCoBhj4hGQBKCeBlAKQAMABANACQAAgNAAgMQAZACAZADQAMABANABIAAgMQhCgDAQhBQApAIgNg3QgDgNAAgMIAAgNQglAtgNglQgNgCgIgG").f("#402823").p("AOy0pQAOAFALAGQAYANAPARIAeglIANgOQAAgDAAgCQgzAEg2ACIgCAJ").p("ALYwCQAJAKAIAKQAIAJAGAJQAAABAAAAQAHAKAGAJQAGAJAAANQgPA0AoABQAMABANABQBEABAkAdQAIAGANACQAAgNADgLQAQg+hYhaQgDgDgDgEQAAgMAAgNQAAgGAAgFQgWgCgWgBQgOAWgYALQgVAMgeADQgIABgJAA").f("#422a24").p("AQd0zIAEgGQgCABgCAAQAAACAAAD").p("AN0wFQBYBagQA+QgDALAAANQANAlAlgtIAAANQAMABANABQAMACANABQAAgNAAgMQBWALgLhCIARgFQAjgLAfANIAAgfQhCg1hcAqIAAAMQg9guhegcQgKgDgKgDQADAEADAD").p("AUHzzQAGAEAHAFQASAOAPAYQADgMgDgJQgLgbgOgTQgog2hGgCQAPAKAPAMQAdAWAYAaQADADADAD").f("#331a19").p("AOCwGQAsgEApgMQA5gSA6AXQAMAFAPgEIgdgRQhsgJhugGQAAAFAAAGQAAANAAAMQAKADAKAD").p("AVV0mIgYAHIhNgVQgNgQgPgNQgZAFgbAEQAHAFAHAEQBGACAoA2QAOATALAbQADAJgDAMQAmAYAHAqQAAAFAMAFQADgMAAgMQgDguBQgeQgMgFgMgGQgvgdgigi").f("#4e3a31").p("AUHzzQCDCVgSEHQAFAGAKADQADgMgCgLQgIhXgSi8QgMgFAAgFQgHgqgmgYQgPgYgSgOQgHgFgGgE").p("AS7ueQgfgNgjALIgRAFQALBChWgLQAAAMAAANQCQAgBWBUQgKhpg+hDIAAgb").f("#695641").p("AV4tXQAAACAAACQgMCXgSCYIADACQAHg4ANhEQADgMAEgMQANgvAMgwQADgMgCgLQgDgRgIgRQgKgDgFgG").f("#70573a").p("AQ4odQAeCHhSAKQAAANAFAKQAgA4hXAqQAAAMAAANQAMACAHAFQAGAIAAAMQAyBRhJBGQgRARAeAPQB4A4igAFQAAANAAAMQAMAbATAUQAGAIANAAQBVBZAlhmQADgLAAgNQgNgBgEgHQgfgtgbhoQAtgZAZgtQAFgJAAgNIgNgBQAEh1gpg+QAogtAjgvIAAgBIAAAAQAKgNAKgOQAFgIAAgMQgNgCgKgGQgogYglgcQAAAMACAM").f("#5b4332").p("AQ2o1QAAgNgDgLQgKgcgMgaQgNgBgMgCQAAANgCAMQgJBYgnA5QgQBBBCADIAAAMQBSgKgeiHQgCgMAAgM").f("#7c6d5b").p("ATco1IAkg9QAEgkAAghQgDAAgDAAIgNgCQALBXhJgSQAWAlATAa").f("#8e7d66").p("ASzp0QgNgBgKgGQgPgJgMgOQAFBHARA5QADAMAAANQAMABADAFQAbBAhDgXIAAAAIAAABQAAAYAAAZQAAANAAAMQAxgcAzgZIgqhKIAhg3QgTgagWgl").f("#716254").p("ASzp0QBJASgLhXIANACQAAgNgCAAQhZgaiGApQAAAMAAANQAAAMAAANQAMAaAKAcQADALAAANQAlAcAoAYQAKAGANACQAAgNgDgMQgRg5gFhHQAMAOAPAJQAKAGANAB").f("#5d4b41").p("AUDrXQhWhUiQggQgNgBgMgCQgNgBgMgBQAAAMADANQANA3gpgIQgQBBBCADIAAAMQAAANAAAMQAAANAAAMQAMACANABQAAgNAAgMQAAgNAAgMQCGgpBZAaQACAAAAANQADAAADAAQgBgRAAgP").f("#4b3021").p("AVxqeQAiBhAaBpQABAGALAFQgvBOArBtQAEAKgEAMQAMAFAMAEQADgMAHgEQAmgUgRhTQAbgCAYAJIgEANQAYAHAXAKQAMAFALAEQADgLACgNQAFicADicQAEgMgFgJQgFgIgLgEQgDAMgDALQglBwAJBYQgCAMgIACQhSAgAFhrQgMgFgDgIQg0h5gQiIQgMAwgNAvQgEAMgDAM").f("#614930").p("AVdoiIgDgCQgDAXgDAWQA1CRAfBiQACAHALAFQAEgMgEgKQgrhtAvhOQgLgFgBgGQgahpgihhQgNBEgHA4").f("#4b3026").p("AMDqaQhRhkhwAZQgNgBgKADQgPAGgMAMQgTBoBAAkQAFACAAANQAAAMADACQDLBahRA7QgNgCgJgHQhRg5hIg0IgNgCQADByBVgEQAAAMgHAEQhTA8hVA4QBlAuhGBXQgGAHAAANQBVAfgJhKQgBgMAAgNQAAgMAAgNQAAgZAAgZQB+gaBkgWQALgDANABQADCbAqhmQAFgKAAgNQAfgCBeA1IAAgNQgNgBgCgGQgXgvgMgzQAygUA0gPQAKgEANABIAAgMQhCgDAQhBQAng5AJhYQACgMAAgNQAAgMAAgNQAAgMAAgNQgNgBgMgBQgZgDgZgCQAAAMAAANIAMABQg8A2h/gXQAAgNgHgH").f("#5c412c").p("AOHlmQAMAzAXAvQACAGANABQAMACANABQAAgNAAgMQBXgqggg4QgFgKAAgNQgNgBgKAEQg0APgyAU").f("#5a3d28").p("ALyk/QhkAWh+AaQAAAZAAAZQAAANAAAMQB7ASgLB3IAmAEQAZAbAvAQQADABAAAMQBEggBlhSQAGgFAAgMQg0hPB9gBQACAAAAgNQAAgMgGgIQgHgFgMgCQgNgBgMgCIAAANQheg1gfACQAAANgFAKQgqBmgDibQgNgBgLAD").f("#563b31").p("AK/mTQBRg7jLhaQgDgCAAgMQgNgBgMgCQhdgQhShNQBIAFAXgvQAFgKAAgMQAAgNgFgKQg5hng3ANQgqALgpBRQgNgBgLADQh0Agg8BgQAAANAFAJQA5BghwACIAAAMQhZg9gkA9QAcAzBFAVQADABAAANQA3AlAeBCQACAGANACQAZBxBfA6QAFADAAAMQBiAFBNgJQAMgBANABQAAgMAAgNQAMABANACQAAgNAGgHQBGhXhlguQBVg4BTg8QAHgEAAgMQhVAEgDhyIANACQBIA0BRA5QAJAHANAC").p("ACylkQBzgbCHAZQAMADANACQgQBdhChHQgGgGgMgBQgaAVguAIQgDABAAAMQhRgRgOgWQgFgIAAgN").f("#61493e").p("AC3lPQAOAWBRARQAAgMADgBQAugIAagVQAMABAGAGQBCBHAQhdQgNgCgMgDQiHgZhzAbQAAANAFAI").f("#5e422e").p("AKmg3IgmgEQALh3h7gSQAAANABAMQAJBKhVgfQgNgCgMgBQAAANAAAMQBRBTBegNQAMgBANABQhHBQA6AsIgMgCQhYBfBZgRQALgBANAAQAjhXANhrQACgMAAgM").f("#684d35").p("AKkgfQgNBrgjBXQgNAAgLABQhZARBYhfIAMACQg6gsBHhQQgNgBgMABQheANhRhTQgNgBgMABQhNAJhigFQAAgMgFgDQhfg6gZhxQgNgCgCgGQgehCg3glIgMgBQgBB5hXgeQAAAlAAAmQAAAMAAANQCFBghECbQgCAEgNgBQAAANgFAJQgHAOgNAMQAVCPCaAYQAMABANACIAAgMQg2gDAEgoQCEgqBxBMQAFAEAAAMQgYCIhPgpQgKgHgMgBQAKBCAhAsQAHAIAAANQBzACA1hBQAHgHAAgNQBRAbA/AuQAGAFAAAMQAXAMBgg5QAGgEAAgNQgNgBgMACQg1AHADgpQB6hKAZhvQADgMAAgNQApgMA1BNQAGAIAAANQAZgVAyADQAMACANABQghg8A0hEQAGgHAAgNQgNAAgGgIQgTgUgMgbQgNgBgBAEQgZBFhWhVQAAANgEAAQhaAWgfgvQAMgLAPgGQAKgEANABQAAgMgDgBQgvgQgZgbQAAAMgCAM").p("AETAhQgKgHgMAAQgZBlgXhrQgCgMAAgMQBpgVB4AHIAAAMQhKBahPgz").f("#745841").p("AGsgGIAAgMQh4gHhpAVQAAAMACAMQAXBrAZhlQAMAAAKAHQBPAzBKha").f("#64472b").p("APpjSQh9ABA0BPQAAAMgGAFQhlBShEAgQgNgBgKAEQgPAGgMALQAfAvBagWQAEAAAAgNQBWBVAZhFQABgEANABQAAgMAAgNQCggFh4g4QgegPARgRQBJhGgyhRQAAANgCAA").f("#7a6441").p("AU1kkQgCAPgDAPQADACAEABIgDALQAGATARAEQAHACAJAAQAPgBATgHIgDALQAVAfgFAvQgBAEgBAEQgDAWgIAZIAMAFQAKAEAJABQANADANgBQAFAAADgMQgMgFgCgGQgPg0AUhiQgLgFgCgHQgfhig1iRQgOBqgRBp").f("#ad9773").p("AURllQgbAngqASQAtBqAoAUQAFgZAEgYQACgOADgNQABgGAAgGQADgPACgPIgkhB").f("#897352").p("ASVnlQgKAOgKANQBDAXgbhAQgDgFgMgBQAAAMgFAI").p("ASBnJQgjAvgoAtQApA+gEB1IANABQAMACANABQAMABANABQAAgMAFgLQAbhFg5hvQAAgMAAgNQAAgZAAgY").f("#a38c63").p("ASBl/QA5BvgbBFQgFALAAAMQBEACAGA3QABANAAAMQAUAXASATQACgKACgMQAHggAGghQAIgJAEgUQADgUgBgfQgEAYgFAZQgogUgthqQAqgSAbgnIgshPQgzAZgxAc").p("AUvj6IAFACIADgLQgEgBgDgCQAAAGgBAG").f("#8c744a").p("AScibQAPBFgqAEQAMAOAIAPQAFALAAAMQAMACANAAQAAABAyA1QAAANAAAMQgEDIhgApQAAAMAAANQAlAEAjAPQADAAAAANQARhqAygQQgFgMgEgMQgFgTgDgSQgRhQAThYQAAAAAAgBQgNgtgOgyQAAgMgBgNQgGg3hEgCQAAANACAM").f("#795f3e").p("ASai0QgNgBgMgBQgNgBgMgCQAAANgFAJQgZAtgtAZQAbBoAfAtQAEAHANABQAlgVAKgxQADgLAAgNQAAgMgFgLQgIgPgMgOQAqgEgPhFQgCgMAAgN").f("#7f6743").p("ASageQAAANgDALQgKAxglAVQAAANgDALQglBmhVhZQAAANgGAHQg0BEAhA8QgNgBgMgCQgygDgZAVQgNgBgKADQgoARglAUQgKBUAeAvQAFAJAAANQALjLCeCBQAGAEAAANQAZACAUgIQAFgCAAgMIgNgBQAwheg8g6QBqgIAmA1QAGAIAAANQBggpAEjIQAAgMAAgNQgyg1AAgBQgNAAgMgC").f("#967e51").p("AV9jnQgTAHgPABQgJAAgHgCQgRgEgGgTIgFgCQgDANgCAOQABAfgDAUQgEAUgIAJQgGAhgHAgQAbAUgBAhQAAAQgGARQgDALgDAMQALAFADgDQALgSAJgUQAehIAAhsQAAgIAAgJQAAgBAAgCQAGACAEAAQAFAAADgCQAIgDADgMIADgL").f("#876e43").p("AVvjNQgDACgFAAQgEAAgGgCQAAACAAABQAAAJAAAIQAABsgeBIQgJAUgLASQgDADgLgFQgEAMgCAMQArgOA3AAQAIAAAJAAQAGABAHAAQAEABADgMIgMgFQAigwgbgpQgGgJgKgKIgMgFQAIgZADgWQABgEABgEQAFgvgVgfQgDAMgIAD").f("#af9562").p("AULg4QgFAbgGAaQAAABAAAAQgTBYARBQQAAACACADQADAHALAFQADgMADgMQADgLADgMQgLgFAAgEQgCggAHggQABgEACgEQACgMAEgMQADgMADgLQAGgRAAgQQABghgbgUQgCAMgCAK").f("#816742").p("AWZg/QAbApgiAwIAMAFQAzA5AaBHQADAIAMAEQADgMgCgLQgVh6gohxQgDAMgFAAQgNABgNgDQgJgBgKgEQAKAKAGAJ").f("#674e30").p("AW+hXQAoBxAVB6QACALgDAMQAXAKAWgCQAFgBADgMQADgMgDgKQgWhGAUhcQADgMgEgDQgqgjAWg/QgMgFgEAEQhIBSAXiEQgLgFgBgGQgFgWAHgYQgMgEgMgFQgUBiAPA0QACAGAMAF").f("#988155").p("ATlhiQAOAyANAtQAGgaAFgbQgSgTgUgX").f("#2f1718").p("AH7u2QAuB2BLgdIgNgBQANgxgIgdQgBgEgDgFQgVguhcAVQAAANAEAL").f("#4a302c").p("AEWuzQAAANgHAHQgvA7hgAGQAAANAAAMQAMCghXhcQgGBDAYAmQAHAKAAAMQAAANAAAMQA8hgB0ggQALgDANABQAphRAqgLIgUhgQgIADgfgKQgMgEgMgB").f("#533b34").p("AEWuzQgNgBgMgDQhwgchYgPQgNgCgMgBQBnBuhJBhQgFAIAAANQBXBcgMigQAAgMAAgNQBggGAvg7QAHgHAAgN").f("#5b453f").p("AHerWQAAAMgFAKQgXAvhIgFQBSBNBdAQQAMACANABQAAgNgFgCQhAgkAThoQgNgCgMgBQgNgBgMgB").f("#462b23").p("AgWu4QAAAMgFAKQgHAOgNALQBcARglArQgFAIAAAMQgIBDA0BbQAGAKAAANQAMABANABQAAgMgHgKQgYgmAGhDQAAgNAFgIQBJhhhnhuIgNgBQADA1gogH").f("#4e3631").p("AgWu4QgMgBgMgFQiSg2jNgDQBTAnAPBHQACANAAAMQBvAOBaAdQAMADAMACQAZACAZADQANABAMABQAAgMAFgIQAlgrhcgRQANgLAHgOQAFgKAAgM").f("#5a4034").p("AhJs0QhDAAggAbQAAANAAAMQAZAQAaALQAMAFAMABQAAgMAAgNQBLBGBLA6IAAgMQAAgNgGgKQg0hbAIhDQgMgBgNgBQgZgDgZgCQAAAMgBAA").f("#4c3026").p("AhhrfQA5A8gaAYQgGAGAAANQBzAngNBHQgCAMAAANQBwgCg5hgQgFgJAAgNQAAgMAAgNQgNgBgMgBIAAAMQhLg6hLhGQAAANAAAM").f("#50372d").p("AhhrfQgMgBgMgFQgagLgZgQQgMgBgNgBQAAAMAAANQAAAMAAANQArClBMg8QAGgFAAgMQAAgNAGgGQAagYg5g8").f("#594035").p("AhOpnQhMA8grilIgMgBQAUB0hTgXQAzCPBjgBQANAAAMABQAkg9BZA9IAAgMQAAgNACgMQANhHhzgnQAAAMgGAF").f("#4e3328").p("AADmPQAAgNgDgBQhFgVgcgzQgMgBgNAAQhjABgziPQBTAXgUh0IAMABQAAgNAAgMQgMgBgLAEQhYAfgOhgQgMgCgNgBQgZgCgZgDQAAAMAFALQBFCujHhuQAAANAAAMQANAOAHAQQAFAKAAANQANABAMABQB+AMAxBRQgMgBgIAGQgkAYipgCQhJAEAPhWQAFgihIgWQgNgBgMgBQgNgBgMgCQAAANgBAAQhFABhpgfQAMABAHgGQAGgFAAgNQgNgBgMgBQgZgDgZgCQAoAvAhAmQA9BIAjApQAGAHAAANQhKAeAkCJQAAAEANABQgjAwgShOQgQhKhRBZQAAANgFAJQgIAOgMAMQAABTAigxQADgGANACQA/ASgMBXQgBAMAAANQANAWAKA3QACANAAAMQAaAbAugGQADgBAAgMQAAgNAAgMQgNgCgCgFQgghDgDhrQBVgRBvgYQAEgBAAgMQgdhWBcg6IgNgBQA7gaAxg5QAFgGAMABQALA5BZBDIAAgNQA4A+gSByQAAADgNgBQhCAkgiABQgMABgNgBQAAAMgCAMQgFArgrADQAAAMAAANQAAAMAAANQANABAMABQANACAMABQAAgNAAgMQAAgNAAgMQBYAJA/gPQAMgDAMABQAJhOBbANQANACAMABQAAgMAAgNQANABAMACQAAgNAAgMQAAgmAAglQBXAeABh5IAMAB").p("AkQndQC8BFhJCjQgCAEgNgBQhtgrAIioQABgMAAgM").f("#44251a").p("AkRnFQgICoBtArQANABACgEQBJiji8hFQAAAMgBAM").f("#72573f").p("Ahti6QhEAmgtBMQAAAMAGAHQAHAHAMABQAmAEAhAPQAEACAAAMQAZAbAdAWQAJAHAMABQANABACgEQBEibiFhgQgMgCgNgBQAAANAAAMIANAB").f("#6b4f38").p("Ah6i7QgMgBgNgCQhbgNgJBOQgMgBgMADQg/APhYgJQAAAMAAANQAAAMAAANQAGAFBegHIAAAMQA2ARAXAMQALAFAMABQANABAGgFQAGgGAAgNQgMgBgHgHQgGgHAAgMQAthMBEgmIgNgB").f("#7c6247").p("AGlGdQg1BBhzgCQAAAMgFACQgUAIgZgDQAAANAAAMQAMABANACQAMAOAPAJQAKAGANABQBGhABQBcIAAgNQAAgMAAgNQBNhNAiCHQABAEANABQBHh1A9BKQAFAHANABQANgwAegdQAHgGAAgMIgNgCQADg0gogBQAAANgGAEQhgA5gXgMQAAgMgGgFQg/guhRgbQAAANgHAH").f("#5d432d").p("AFDDyQhxhMiEAqQgEAoA2ADIAAAMQBJgEgLBVIANABQAMABAKAHQBPApAYiIQAAgMgFgE").f("#866a46").p("Ah9DJQg1AMhehbQgMgBgKAEQgPAGgNAMQAAAMgFAIQhYCJhSjiQgMgBgNgBQgMgBgNgCQAZBaAWBbQADAMAAAMQBLgSBFBBQAGAHAAAMQAjiEBTCMQAVAjgngJQAAAZAKAWQADAFAMABQANgLAPgGQAKgEAMABQAAgNAAgMQBngmB6AMQAMAAANACQAAgMAAgNQgNgCgCgFIgKgUQiHA3goitQAAAMgDAB").f("#7d603f").p("Ah6C8IgMgCQBWhgh8hTQANgKAPgFQAKgFAMABQAAgMgEgCQghgPgmgEQAAANgGAGQgGAFgNgBQAAAMAEALQAKAehABCQAAAMAAANQBeBbA1gMQADgBAAgM").f("#765a3b").p("Ah6C8QAoCtCHg3IAKAUQACAFANACQBCAXgOhEQgCgMAAgNQgNgCgMgBQiagYgViPQANgMAHgOQAFgJAAgNQgMgBgJgHQgdgWgZgbQgMgBgKAFQgPAFgNAKQB8BThWBgIAMAC").f("#997d55").p("AAvHDQgTAbgZAWQAAANgGAFQgGAGgNgBQAAANAAAMQAAANAAAMQBLCfA6hZQAEgGANABQAAgMgFgDQgmgWAShBQAMANAPAJQAKAHANABQAAgNgDgMQgbiAhGASQAAAMgGAI").f("#8f7450").p("AA1GvQAAgNAAgMQAAgNAAgMQAMAAAGgFQAHgFAAgNQgNgCgMAAQh6gMhnAmQAAAMAAANQA+AvBaAoQALAFAMABQAZgWATgbQAGgIAAgM").p("AJbKuQB4gmA8gmQAHgEANAAQAAgMgDgNQgKgygMg1QgNAAgMgCQAAAMgHAGQgeAdgNAwQgNgBgFgHQg9hKhHB1QgNgBgBgEQgiiHhNBNQAAANAAAMQA3A9gyBFQgFAIAAAMQBkAHBLAYIAAgNQAAgMAAgNQAAgMAAgN").f("#765c3d").p("AA1GvQBGgSAbCAQADAMAAANQAZgKASgRQAHgGAAgNQAAgMAAgNQAZADAUgIQAFgCAAgMQAAgNgHgIQghgsgKhCIgNgBQALhVhJAEQAAANACAMQAOBEhCgXQAAANAAAMQAAANgHAFQgGAFgMAAQAAAMAAANQAAAMAAAN").f("#82653f").p("ADnIjQAvChiWhGQgNgBgEAGQg6BZhLifQAAANADAMQANA3gpgHQAAAMgFAKQgHAOgNALQCDAmBgA3QAKAHANAAQAygHAtgSQAFgCAAgNQAAgMAAgNQgBgxAzhHQgNgBgMgBQgpgBAQg0QgNgBgKgGQgPgJgMgOQAAANADAL").f("#8f754f").p("ADkILQgNgCgMgBQAAANgHAGQgSARgZAKQgNgBgKgHQgPgJgMgNQgSBBAmAWQAFADAAAMQCWBGgvihQgDgLAAgN").f("#7a5d3b").p("AADH0QgMgBgLgFQhagog+gvQgMgBgKAEQgPAGgNALQgPA0AlAMQADACAAAMQBMBKA3A6QAHAHAMACQApAHgNg3QgDgMAAgNQAAgMAAgNQAAgMAAgNQANABAGgGQAGgFAAgN").f("#6e4f2b").p("AgvKGQgMgCgHgHQg3g6hMhKQgMgBAAABQgIBNg3g7QAbA/AqAyQAGAHAAAMQBEABAkAdQAJAGAMACQANgLAHgOQAFgKAAgM").f("#dfc9a5").p("AhdKtQgkgdhEgBQgMgBgEgGQgphDhdgPQgMgCgNgBQgMgCgNgBQAAAJACAIQAPAMAQAMQAHACAKAAIAAAMQACABADACQAVANARASQANAMAOAMQATABATACQAiADAhAEQANABAMACQBHA9BoAdQAMADANACQBGAMA3ANIAAgNQgNAAgKgHQhgg3iDgmQgMgCgJgG").p("A+hMSQgVAJgWAJQASAAAQAAQAFgJAEgJ").p("Egg2ASaQgEgCgEgDQADADACAEQACgBABgB").p("EghjAWyQALAPAKANQAEgQABgIQgLgFh9iLQApA0BCBVQACABABAC").p("Egh4Ae3QgPgPgJgJQACAPAFAHQAEAFAJADQACgDACgD").p("EggOAG7QgFALAAAKQAAAQAMATQATAgAmAAQAjAAAZAGQAZAGATAAQADAAApgRQgKAQgBAMQBOgdBOgYQBmguAtgLQAAACADACQADABAAAOQBCgOA2gFQgFgZAAgSQAAgSABgFIACgCQAnhYAeB8QACgBABgCQAPAcAMAcQgMgIgKgGQAGAfAFAnQgLgMgQgIQgCACgEADQgIARgKAXQAAAAgBgBQgKAOgKARQgHgSgIgQQhaA2jVBfQgTAIgUAJQAAADAAAEQAAApg3ChQgxCQgNBcQACAYAAAhQAABDggCQQgkCigHBZQgGAAgPAGQgOAGgJAEQgGATgHATQgQArghBYQgDAgAAAYQgEAAgIAFQAMAWAABCQAAAegLArIAAAAQACACACACQgFAKgGAJQgNAugZA6QgbA+gtBhQACACABADQAPATAdALIAjgMQATgTAOgRQABABAAAAQANgCAUgLQARgJACAAQAGgcAthLQAVghAcgrQAqg/CcjcQBNhsA3hUQAFgDAGgDQAQgKAGAAQANglAMgmQBaiPAAgmQAAgBAAgCQAeg4ASguQAziBAAiNQAAgzgCgwQAZhzAKhTQAGg1AAgoQAAg4gDgNQgDgSgJgOQAOADALABQAIAdAGAfQAYhnBlA1QAfgCAhAHQApAIAhAVQAYgHAiAGQASADARgDQBoAfBygEQAhAEAhAKQAIgEAEAGQA/gFA2ALQAbAFAcAEQAHACAFABQABAAAAABIA4hMQgMgIgMgKQi2iCjahiIhIgXIiGgqIgUAAIhHACIgcgRIhIgqIgGgDIgJgFIgEgMIAAAAQAAAAAAgBIgEgLQgegLgbgbQgWgVgrgRQgKAOgTACQgRABgRAEQgMACgMAEQgTAGgTAHQg2AUgiAaQgQANAIAVQADAHAGAFQAkAnBCALQAMACAMAAQAdAAgCAeQgeAJg1ATQgFADgHACQgFACgFABQAGgFACgGQAFgJAAgKQAAgQgDgBQgDgBAAgDQg2ABg2AHQgBgEgBAAQgDgBAAgDQiBAChoAeQgrANgnASQhJAhgbAjQgGAIgEAJ").p("A8EGTQAAgCgBgCQALgDAFAAIgGACQgCACgHAD").p("A+9bhQAGAJAFAIQgCAAgDAAQgLAAgMAKQAKgPAHgM").p("EggAAc9QALgJAKgNQgKAXgNAgIgDgDQADgOACgQ").p("EgmwAOtQgEgFgFgEQgKgKgIgDQhiA0iDA0QgeAMiOAzIAAAAQiIgHirBgQgRAJgQAJQgmAYgiAaQgpAeAAAEQAAABAAACQgnAWg0AhQiRBagdAwQhZArhkCBQgsA6goBBQgSAegIAPQgGALAAACQAAATAIAGQADACASAFQATgNAVgRQBPhABsiBQBNhcAcgoQABAAAAgBQABAAABgBQB5hPBEgxQA0gkAggaQAIgHAGgGQAIgBAHgDQADgBAEgCQAAABABABQAFAEASAAQAQAACKg+QCCg7AkgVQBQgvC/hJQAygTAigSQAAAAAAAAQAAgbAdgIQAPgEAggBQALgIAWgOQAMgJAOgJQAogbA6gWQAzgaAUgLQAAgCAAgDQAAgQAIgRQiKBLhDAxQgQAMgMAL").p("EghkAJWIgUAcQAOArgUAuQAJgGAJgGQAjgZAsgZQgegegpgZ").p("Eg+GAeDQgGgDgFgCQgEgCgEgBQh6CPhJCuQgFAKgEALQhCCmAACUQAAADAEAtQAJAtAbAAQASAAAEgEIAEgFQADgBAAgdQAAgdACgdQAOi/BjjJQAVgsA5hlQAFgIAEgIQAbgxAAgPQAAgSgJgF").f("#ceae7b").p("AAcMIQhogdhHg9QgMgCgNgBQghgEgigDQgTgCgTgBQAVASAVAUQAFAFAAAMQAmAdAqAbQAtAeAxAcQA2AdA5AbQAxAFAfghQAFgFANABIAAgNQhZgIgLhAQgNgCgMgD").f("#e7cf9b").p("Ah1NqQASAGASAJQA3AbA1A0QAGAKAOADQAQAOAUAJQALARAdAHQANgEAMAEQAPAGANAGQBYAkBPAgQA4AWAvAKQA8ALA3AXQAKAEAMACQAXAEAXAGQAhAJAiAHQAHABAHABQA3ANA6AFQAdAEAcAFQAsAGAbANQAsAVA6AQQARAFASADQANAIAPAIQBOAoBcAAQDIAABlgSQAZgeALgGQAVAJALAKQAKgFAIgEQABgBABgBQASgMACgRQgIgYAAgMQAAgCABgHQgBgFAAgEQAAgKgHgxQgBgJgBgMQgBgGgCgHQgCgQgCgOQgWAdgrAuIhbBgQghAAgagaQgVgZgCgCIjGgDQgxgbgSguQgJgUgJhBQgGgigJgXQjwAbj0gKQABgCABgCQAMACAFgFQANgPibh3QgNgBgMgCQgZgCgZgDQAAANgFACQhwAthvAsQgLgCgKgCQAAgMgEgBQhNgchEggQg5gbg2gdQgxgcgtgeQgqgbgmgdQAAgMgFgFQgVgUgVgSQgOgMgNgMQgRgSgVgNQgDgCgCgBQgJgHgIgHQgQgMgPgMQgDgCgDgDIg4BMQAAgBgBAAQAEAoAeAMQAgAMAUAbQAJATAgAAQAFAEAEABQAAAXAegIQAAAGAJgCQAUAOAWAJQAHACAEAEQAgAAAXANQAYANAOAZQALACAJAL").p("AZ1NzQAAAAAWBRQABADABACQACgHACgIQABgDABgDQADgKACgKQAKgqAAgXQAAgigNgZQgEAOgLAXQgRAiAAAI").f("#b89a6b").p("ACZNiQA+AGA/AGQAMABANACQAAgNAAgMQD1AHB8hOQAGgDAAgNQgNgBAAgEQgJgmg1AKIAAANQhLgYhkgHQAAANgFAKQgxBehghSQAAANgFACQgtASgyAHIAAANQg3gNhGgMQALBABZAIIAAAN").f("#ddc087").p("AA3OCQBEAgBNAcQAEABAAAMQAKACALACQBvgsBwgtQAFgCAAgNQgNgBgJAEQgsAYhUgRQgNgCgMgBQg/gGg+gGQgNgBgFAFQgfAhgxgF").f("#a08357").p("AJbLHQAAANAAAMQA1gKAJAmQAAAEANABQAAgMAAgNQAAgZAAgZQBTBkA+gVQAFgCAAgMQAAgNAAgMQAAgZAAgZQgNgBgBgEQgLgjAAgmQgNAAgHAEQg8Amh4AmQAAANAAAM").f("#8f7452").p("AFIJgQgzBHABAxQAAANAAAMQBgBSAxheQAFgKAAgNQAAgMAFgIQAyhFg3g9IAAANQhQhchGBAQgQA0ApABQAMABANAB").f("#d1b581").p("AEvNxQBUARAsgYQAJgEANABQAZADAZACQAMACANABQFAgEB9BTQAFAEAAAMQAggUAegZQgHgBgHgCQgDgCAAgcQAAgUAMgHQAGgEAMgCQgcghhIgIQAAAMgCABQi1ANhchPQAAANgGADQh8BOj1gHQAAAMAAAN").f("#997d4a").p("AWXAqQgHAAgGgBQgJAAgIAAQg3AAgrAOQgCAEgBAEQgHAgACAgQAAAEALAFQARANAMATQAFAIADAJQALAWAHAdQAIAiAEAqQAAACAAABQAAABAAABQADAEAJAEQAEgMgBgMQgCgWgDgWQgBgGgBgHQACAAACAAQBMgDA1BBQAEAFgDAMQAyAHAkgRQAJgFALAFQAEgMgEgDQgpgehQhSQAMAFAHgDQAIgFADgMQgMgEgDgIQgahHgzg5QgDAMgEgB").f("#a9894d").p("AUUCfQgDAMgDAMQgEAKgEAKQAEAMAFAMQAQAsAbAqQACADADADIgIAaQAKAAAMgBQAKgBANAFQAAgDABgEQACgIACgIQgJgEgDgEQAAgBAAgBQAAgBAAgCQgEgqgIgiQgHgdgLgWQgDgJgFgIQgMgTgRgNQgDAMgDAL").f("#b99d66").p("AUOC3QgLgFgDgHQgCgDAAgCQADASAFATQAEgKAEgK").p("AU3FZIgFARIgCAEQACAAACAAQASgFAVgBQAFABAEgNQgNgFgKABQgMABgKAA").f("#8f7751").p("AR7EPQgmg1hqAIQA8A6gwBeIANABQBJgGAugnQAGgFAAgMQAAgNAAgMQAAgNgGgI").f("#a0885d").p("AR7FOQguAnhJAGQAAAMgFACQgUAIgZgCQgNgBgMgCQgZgCgZgDQAmBcgWAeQgEAFgMgCQBJBlA/ieQABgDANAAQAtB2A9gyQAGgGANABQAAgMAAgNQAyAEAdgPQAIgFANABQAAgMAAgNQAAgMAAgNQgNgBgJAFQhTAmAFh/QAMACANAAQAMACANABQAAgNgDAAQgjgPglgEQAAAMgGAF").f("#977f52").p("AToGxQAJgFANABQAAgMAAgNQApAIgEg2IANABQAAgMAAgNQAAgMAAgNQAFACAFACQgbgqgQgsQgyAQgRBqQgNgBgMgCQgNAAgMgCQgFB/BTgm").f("#a98f5b").p("AVnEBQADAWACAWQABAMgEAMQBPAZBEAJQALACANAFQBUgRB1AgQACAAACgMQgLgFgJgIQgXgSgUgUQgMgFgBADQgRAggvgjQgLgFgJAFQgkARgygHQADgMgEgFQg1hBhMADQgCAAgCAAQABAHABAG").f("#c3a66e").p("AVlFVQgBAEAAADQgEANgFgBQgVABgSAFQgCAAgCAAIgZBSQAJgBAKgBQAFAAADgMQADgLADgMQALgEALgEQAegIAhgCQALAAALAAQA5AABEASQACAAADgNQgMgEgFgIQgDgIADgMQgNgFgLgCQhEgJhPgZQgCAIgCAI").f("#a68d5e").p("AU/E/QgDgDgCgDQgFgCgFgCQAAANAAAMQAAANAAAMQABACABABIAFgRIAIga").f("#a48959").p("AUwFnIgNgBQAEA2gpgIQAAANAAAMQAAANAAAMQAAANAAAMQAGAGAGAGIABgFIAMgmIAZhSIACgEQgBgBgBgC").f("#c5a979").p("AU4GbQgDAMgDALQAagEAYgBQAMABALABQBGAFA6AoQAKAHAJAIQAIAHAMAFQAXAKAZAJQALAEALAFQADgMAAgMQgFhEhBgpQgDANgCAAQhEgSg5AAQgLAAgLAAQghACgeAIQgLAEgLAE").f("#d3b989").p("AUqG+QgKABgJABIgMAmQAlAPAyA0QAIAIAMAFQASAEANAGQBYAlhgBzQgDAEgLgFQAAACgBACQAAAVAJARQBkgjAmgHQAHgBAGgCQAFgJAFgJQABgCAAgBQABgFgKgXIAogYIAAAAQAAAAAAgBQAEgMgEgHQgkg5gChHQgMgFgIgHQgJgIgKgHQg6gohGgFQgLgBgMgBQgYABgaAEQgDAMgFAA").p("AdRIWIgNgDQAAgCABAAIg6AGIgJAGIgMAHQAEABAEACQADAAABABQAKAEAKACIgBAIQgEABgCABQgMAEgLAEQgHADgHADQgGADgGADQgCAAgCAAQACABADAAQALACAOAFQAHACAHADQAVAHAYALQAKAFANAAQAKgBAIgBQABAAAAAAQAJgBAHAAQBIADgNBKQgBAEAAAEQgGAbgTAmQgCAFgNAAQAAAEACAFQASA2BXAAIgBAMQA7gPAIAmQABAEANAAQgBgNACgNQAAgJAAgJQAAgDAAgEQAAgNgHgGQgHgGgNAAIgNgBQACgJABgJQAGgjAIgiQAEgPAEgQQAEgNAEgOQAEgPAFgPQgBgNgFgFQgNgKgLgMQgbgcgQglQgbAAgeADQgbAEgdAGQgPADgOAEQgDAAgCACQgFgFgKgDQAAAAgBgB").f("#745a3e").p("AMHDLQgZBvh6BKQgDApA1gHQAMgCANABQAoABgDA0IANACQAMACANAAQAAgMAAgNQAMACANABQAAgNgFgJQgegvAKhUQAlgUAogRQAKgDANABQAAgNgGgIQg1hNgpAMQAAANgDAM").f("#856a44").p("AMKHFQAAANAAAMQAMA1AKAyQADANAAAMQAAAmALAjQABAEANABQBLgdgXiNQgCgNAAgMIAAgNQgyAfgZgzQgNgBgMgC").f("#917a53").p("AO5GMQAMACANABQAAgNgGgEQieiBgLDLQAZAzAygfIAAANQAMABAHAIQAGAGAAAMQAMACAEgFQAWgegmhcQAZADAZAC").f("#997c4e").p("AQPHLQg/CehJhlQAAgMgGgGQgHgIgMgBQAAAMACANQAXCNhLAdQAAAZAAAZQAAAMAAANQCnhOA3jIQADgMAAgNQgNAAgBAD").f("#b19461").p("AM3MFQg+AVhThkQAAAZAAAZQAAANAAAMQBcBPC1gNQACgBAAgMQAAgNAAgMQAlAEAjgIQADgBAAgNQAAgMAAgNQAAglAAgmQA5h5AfCWIgIguQgIgpA1AWQAAgNAAgNQAAglAAgmQAMABAHgFQAGgGAAgNQgNgBgGAGQg9Aygth2QAAANgDAMQg3DIinBOQAAAMgFAC").f("#b99c66").p("AQEMLQB0gLAJgZQArgEgSheQgNgCgMAAQg1gWAIApIAIAuQgfiWg5B5QAAAmAAAlQAAANAAAM").f("#c8ab72").p("AQBMZQgjAIglgEQAAAMAAANQBIAIAcAhQgMACgGAEQgMAHAAAUQAAAcADACQAHACAHABQA5ARAZAjQAHAJAGANQAJAXAGAiQAJBBAJAUQASAuAxAbIDGADQACACAVAZQAaAaAhAAIBbhgQArguAWgdQAbgiAAgLQAAgNgVhMQgBgCgBgDQgWhRAAAAQAAgIARgiQALgXAEgOQACgHAAgEQAAgwgkgQQgHgDgJgCIAAgBQACgEADgFQAJgTALgTQAXgkAhgiQAFgDAFgCQACAAACgBQgBgCAAgCQAAgEgBgEQAAgEAAgEIAAgBIh4BIIAAAAQgBABAAAAQgJAnAOAeQgSAAgVACQgEABgDAAQgGACgHABQgmAHhkAjQgMAEgMAEQgMgfgYgZQgLgPgQgMIAAAQQgDgLgEgIQAAgBgBgBQgUgPgZgNIgFgUQgjgLg5APQASBegrAEQgJAZh0ALQAAANgDAB").p("AR4NuQBRg8AzAOIACAFQAJAJABACQAFACAKABQAAABAAABQgxAkgxAxQgUgqgpgS").p("ARRNiQgNgCgOgBQAAgBAAgCQAOABANAF").f("#d4b87f").p("AS1OqQAxgxAxgkQAAgBAAgBQgKgBgFgCQgBgCgJgJIgCgFQgzgOhRA8QApASAUAq").p("AZIKLIgoAYQAKAXgBAFQAAABgBACQgCAJgBAIQAVgCASAAQgOgeAJgnQAAAAABgB").f("#e0c68f").p("AQ2NcQAAACAAABQAOABANACQgNgFgOgB").p("AIQNvQCbB3gNAPQgFAFgMgCQgBACgBACQD0AKDwgbQgGgNgHgJQgZgjg5gRQgeAZggAUQAAgMgFgEQh9hTlAAE").f("#dbc49c").p("AViIpQgyg0glgPIgBAFIgfBhIALA1IAFAUQAZANAUAPQgCgEgCgGQgIgaABgrQAZAMASgBQAIgFALgBQAEgCADgEQAIgHAFgNQAEgLADgMQgMgFgIgI").p("AVLLRQAYAZAMAfQAMgEAMgEQgJgRAAgVQABgCAAgCQgDgBgDgBQgIgCgIAAQgRABgNgD").p("AcVI2IABgIQgKgCgKgEQgBgBgDAAQgEgCgEgBIgHADIguAbIgBABIAAABIAAAAQABAAAAgBQAQgDANgIIgDAMQAIgEAIgDQAIgDAHgCQABAAAAAAIABAAQAIgCALACQACgBAEgB").p("Ab4JUQgOgFgLgCQgDAAgCgBQgLAGgMAFQgBABAAAAQgCABgCAAQgFACgFADQghAigXAkQgLATgJATQgDAFgCAEIAAABQAJACAHADQAAgDgBgDQAIABAHACQAcAEAWAMQAFADAFADQABABADACQAbASAQAgQAVAnAEA7QAAACAMAAQBWAFAxgXQAQgJAMgLIgBANQAOgMAQgIQALgFANAAIABgMQhXAAgSg2QgCgFAAgEQgKAAgJACQgEAAgCACQgDABgCABQgDABgDABQgKADgJABQgDAAgCAAQgNAAgMgFQgIgEgHgIIAAAAQgVgVgNgwQAAgBAAgCQABABACgBQAaACARgHQAdgKAEgjQACgNAAgMQgNAAgKgFQgYgLgVgHQgHgDgHgC").p("EAlkAFFQhGAGgJACQgUADAAAVQAAAHAGAHQACACAUASQAAABABABQAGgDAhgEIACACIABABQAHAEATAAQAaAAA4gHQA8gIARgHQAHAAAGAAQAGgCANgFQAGgDACgIQACgGAAgIQAAgSgJgDQgMgCgIgDQgmAAgXABQgZgDgiAHQgMACgMADQgOABgMAB").p("EAmQAOdQgoAVAAAtQAAADAAACQABAOAGAFQAAAAAIADQgDAOgBATQAAAKAAAKQAAANAEAGQABAEADACQAAAAAVAHQAWgOAOgQQAMgOADgMQAAgDAAgDQAAgBAAAAQAAgBAAgBQAAgcgJgVQAAgBgBgCQgBgCgBgBQABgIAAgMQAAg8goAW").p("Aa+QQQgBARgFAdQgEgHgDgEQgPgVAAA9QAAAAAAAAQAAAPgEArQAAAGgBAFQgEAkgBAPQgBAHAAACQAAAMAIAYQACAEABAEQAKAaACAOQAAADAAACQAAAOgLAvQAAACgBACQAAAAAAABQgLAxAAAPQAAACAAAaQADALAIAGQAKAIASAAQAEAAADgBQABAJAGALQAIANAQAPQAtArBIAAQAYAAALgEQADgBACgBQADgCABgCQAOgJAAgVQAAgRgDgCQgDgCAAgBQgDAAgEgBQgPAAgQgFQgEgFgFgFQgJgLgQgJQgFgEgGgDQgDgCgDgBQg4gYgIgIQACgVAAgQQAAgPAAgLQAAgfgWgUQAAgBAAAAQAGhfAAgMQAAgNgIgeQANghADgIQAAgEABgGQADgSAAgkQAAgmgEgHQgJgXgnAM").p("EAg3AaCQgCgCgBgBQgigagrgTQgTgHgQgFQgIgCgJgCQgMgCgKABQgMAAgIADQgOAGAAASQAAAAAuApQArgBA1gCQATANAVASQAjAeAFAUQgBADgBAFQAHABAIAAQASAAAGgKQAEgMABgEQgWgsgmgPQgIgDgIgC").f("#dac293").p("AV2I2QgDAMgEALQgFANgIAHQgDAEgEACQgLABgIAFQgSABgZgMQgBArAIAaQACAGACAEQABABAAABQAEABADACQAQAMALAPQANADARgBQAIAAAIACQADABADABQALAFADgEQBghzhYglQgNgGgSgE").p("AdIKJQgEAjgdAKQgRAHgagCQgCABgBgBQAAACAAABQANAwAVAVIAAAAQAHAIAIAEQAMAFANAAQACAAADAAQAJgBAKgDQADgBADgBQACgBADgBQACgCAEAAQAJgCAKAAQANAAACgFQATgmAGgbQAAgEABgEQANhKhIgDQgHAAgJABQAAAAgBAAQgIABgKABQAAAMgCAN").f("#b89c6c").p("AT+HfQgNgBgIAFQgdAPgygEQAAANAAAMQAAANgGAGQgHAFgMgBQAAAmAAAlQAAANAAANQAMAAANACQA5gPAjALIgLg1IAfhhQgGgGgGgG").p("AUwK2QgDgCgEgBQAEAIADALIAAgQ").f("#96876d").p("EAsOgORQgJAjACAkQAAAFAMAEQAEgMADgMQADgMADgLQAtBcA4BXQAEAHgEAMQCAAfgXByQgBABALAFQAEgMAAgMQgBgiAEgjQiFiEhCimQgFgBgFABQgRACgPAH").f("#5a4737").p("EAr9gOfQhahvgyAkQgLgFgMgEQgDAMgDAMQAtA9A+BeQAEAHgCALQAsA0AWA7QAFAKgEAMQBjBvAng6QAGgJADgMQiKgvASiDQAAgBgMgFQgMgEAAgFQgCgkAJgjQgLgFgGgJ").f("#74654e").p("EAq2gMeQAHgEAEgMQACgLgEgHQg+hegtg9QgEAMADAKQAQA4hFhJQgDAMgDALQgEAMgCAMQAuAhgUBsQAAABAMAFQADgMAEgMQACgMAEgMQBHAmgPBZQAAABAMAEQAMAFAMADQBMAZhLiAQAMAFAIgE").f("#705e49").p("EAqigMfQBLCAhMgZQgMgDgMgFQgDAMAEAFQApAzhPgeQgCAMAEAIQAEAJAMAEQC2A/hOBKIgOBtQBegiBOBAIAEgMQAthfg1gzQgEgDADgMQAZgMBjAWQADAAACgLQgLgFABgBQAXhyiAgfQAEgMgEgHQg4hXgthcQgDALgDAMQgDAMgEAMQAMAFAAABQgSCDCKAvQgDAMgGAJQgnA6hjhvQAEgMgFgKQgWg7gsg0QgEAMgHAEQgIAEgMgF").f("#65523a").p("EAqJgLAQgMgEAAgBQAPhZhHgmQgEAMgCAMQgEAMgDAMQgDAMgIAHQgKAMgPAHQgDAMACAKQAOAzgEBYIALAFQhCAKhQhfQgLgFgMgEQgDAMgEAMQCZBfAKCaQABAMgEAMQBJAhBEALQADAAAEgLQgNgFAAgGQgFgXAHgYQgMgEgGgIQhLhkAyhzQgMgEgEgJQgEgIACgMQBPAegpgzQgEgFADgM").f("#614f3b").p("EAoCgO0QhIh/hZB6QgDAMgDAMQBKAZg7AnQgIAFgDAMQAJAQAMANQAIAJALAEQBuAgAKAKQAKAJALAFQAPgHAKgMQAIgHADgMQgMgFAAgBQAUhsgughQgMgFgEgI").f("#675338").p("EAlfgNQQgLgFgLAAQgrAEhLg4QgHAYgGAYQgDAMgEAMQDDAah6BvQgIAHgDAMQA7A/AxgpQAEgEALAFQAEgMADgMQAMAEALAFIAEgMQgmgPgKhgQAMAFAHgDQAIgEACgMQgLgEgIgJQgMgNgJgQ").f("#56402d").p("EAl9gMWQgHADgMgFQAKBgAmAPIgEAMQBQBfBCgKIgLgFQAEhYgOgzQgCgKADgMQgLgFgKgJQgKgKhuggQgCAMgIAE").f("#786444").p("EAlpgKPQgxApg7g/QgMgFgLgFQgYgJgXgJQgDAMgEALQAxAfgNAlQgFAKgCAMQALAFALAFQCTAPA+CXQAEAKgEANQAMADAMAFQALAFAMAFQAQgIAQgBQAKgBALAEQAEgMgBgMQgKiaiZhfQgLgFgEAE").f("#715c3f").p("EAkIgK4QB6hvjDgaQgLgFgNgFQgCAMgBAAQg2gPg7gqQgLgFgNgFQCoCTg2A4IANAEQALAFALAEQAEgLADgMQAXAJAYAJQALAFAMAFQADgMAIgH").f("#a38e65").p("EAncgFgQAEgLADgMQgMgFgLgFQgMgFgMgDQgLgFgKACQgxAKhMgoQgEAMAAAMQgEBFgpgIQgGBWAKBMQABAMgDAMQAnAMgQAxIALAFQAEgMADgMQAPgHALgMQAGgHAEgMQgMgFgBgCQACgyANgwQArAGB1gPQALgCAMAFIADgLQg/gWAfg5").f("#9d875f").p("EAn8gERIgDALQAHBFBeAkIgDAMQAIARANANQAHAIAMAFQADgMgDgKQgKgkAMgvQBKBgBBhZQACgDANAFQBSAgADgzQAAgMADgMQAEgMgFgJQgEgIgMgEIg1gFQhoAkhOgUQgNgFgLgCQg2gHAOgmQgMgEgGADQgqAcgjhAQgfA5A/AW").f("#846c48").p("EAoDgGAQgQABgQAIQgDAMgEALQAjBAAqgcQAGgDAMAEQgOAmA2AHQALACANAFQADgMADgMQBBAmgKhZQgBgFgLgFQgEALgDAAQhEgLhJghQgLgEgKAB").f("#998864").p("EAkrgHAQAcgwhkhWQgLgFgLgFIgNgEQgKA0glgTQAzAwgIBLQgCAMgDAMQBCAJgTA+IALAEQApAIAEhFQAAgMAEgMQADgMAGgK").f("#8f7c57").p("EAkigGqQBMAoAxgKQAKgCALAFQAEgNgEgKQg+iXiTgPQBkBWgcAwQgGAKgDAM").f("#7c694b").p("EAj1gCzQgKhMAGhWIgLgEQATg+hCgJQgMgFgLgFQgJBjAiBMQAEAIgDAMQALAFABAEQAJBphphfQgLgEgMgFQgDANgEALQA/CCBhhHQAIgFADgMQADgMgBgM").f("#b19b6d").p("EAlAgCXQACgMAEgMQCGBiB8hEQAHgEAMAEIADgMQhegkgHhFQgMgFgLACQh1APgrgGQgNAwgCAyQABACAMAF").f("#b9a37f").p("EAlAgCXQAzBEAtBGQAHAIAMAEQACgLADAAQDAAngqCkQgMgFgGgIQhfiHhdgnIgDAAQgLgEgEADQgZAdgqgJQgNgFgLgEQACBQBOA5IgpAKQCAAyCBA0QAMAFAMAEQACgLAEgNQADgMADgMQBxAOgZgrIBJgXQA6gSgcg/QADgMAEgMQACgLAEgNQgMgFAAgFQgJhfgvgaQgMgFgLgEQgTgHgPgDQgZgDgSAIQgMgFgHgIQgNgNgIgRQgMgEgHAEQh8BEiGhiQgEAMgCAM").f("#927f5f").p("EAkggAgQADgMgCgMQgDgRgJgQIgLgFQAQgxgngMQgDAMgIAFQhhBHg/iCQgLgFgGgJQgYgcgugTQgDAMgDAMQgDAMgEAMQgCAMgEALQAYAJAYAKQALAFALAEQBbDPCOhRQAHgEAMAF").f("#ad9774").p("EAkNgAhQiOBRhbjPQgFB0gdAfQgHAHgDALQAXAKAQARQAFAEgEAMQCBAzCBAzQAMAFAMAFIApgKQhOg5gChQQALAEANAFQADgLgCgLQgEgRgIgQQgMgFgHAE").f("#ae9977").p("EAkhgA4QACAMgDAMQAIAQAEARQACALgDALQAqAJAZgdQAEgDALAEIADAAQAWAJAUgCQAFAAAEgMQgMgEgHgIQgthGgzhEQgEAMgGAHQgLAMgPAHQgDAMgEAMQAJAQADAR").f("#927e63").p("EAtmgESQAMAEAEAIQAFAJgEAMQCDCuggjJIALAFIADgMQAEgMAFgLQAeg5hDgKQgLgFAAACQgQAthFAZQgCAMgEAM").f("#77654e").p("EAq4gGMQALAFANAEIAOhtQBOhKi2g/QgyBzBLBkQAGAIAMAEQAMAFALAF").f("#ab9771").p("EAsfgDGQgNgFgCADQhBBZhKhgQgMAvAKAkQADAKgDAMQASgIAZADQAPADATAHQALAEAMAFQADgMADgMQAYAJAVgCQAGAAACgMQACgHABgHQAAgFAAgFQgBgdgFgc").f("#a08e72").p("EAslgCNQAAAFAAAFQgBAHgCAHQBDA5BeATIgDANQA2AiAcgLQgFgXgCgYQgEgBAAAAQABgJACgIQACgbgCgfQgCgTgEgUQgJgygTg6IgDAMIgLgFQAgDJiDiuQgDAMAAAMQgDAzhSggQAFAcABAd").f("#b1a085").p("EArngBYQAvAaAJBfQAAAFAMAFQADgMADgMQADgLAEgLQA2B3BGhBQAEgEAMAEIADgMQg+gVAfg4QAMAFAMAFIADgNQhegThDg5QgCAMgGAAQgVACgYgJQgDAMgDAM").f("#b1a390").p("EAuogAmQgfA4A+AVIgDAMQAmAXAHAqQABAGALAEQAPgWALgXQAAgNgGgNQAIgEAHgCQgJgcgFgaQgcALg2giQgMgFgMgF").f("#756248").p("EAgygOJQhJhMgsAuQgCAMgEAMQAaBbgCBmQgBANgEALQAuApAQA4QACAHALAFQAYAyAzArQADADgDAMQALAFANAEQALAFALAEQAEgMgCgBQg5gqALhEQgMgEgLgFQg+ggALhCQAuA4BIgpQAIgFAEgMIgNgEQA2g4ioiTQANAFALAFQADgMgEgF").f("#503424").p("AeguZQgMgFgJgHQgWgSgUgWQgEAMgHAEQgoAThghCQBgBkhFgNQgLgCgMgFQgDALABAMQAOBIhIhCQgJAkABAkQABAEAMAFQhCAzA+BIQAHAJAMAEQADgMADgLQANgwANgvQCAgcgeBeIANAEQACgMAEgMQAygXAHApQABAFALAFQAEgLADgMQBBgfgMBNQgBABALAEQAEgLABgNQAChmgahbQgLgFgMgF").f("#482b1c").p("AfAq7QAMhNhBAfQgDAMgEALQAaDKBtgyQAIgEACgLQgLgFgCgHQgQg4gugpQgLgEABgB").f("#573c29").p("Ad4rcQgHgpgyAXQgEAMgCAMQA2BDADBZQABAMgDAMQBjA2AmBVQAEAJgDAMQA6AoAOhBIALAFQAMAFALgBQAkgCgohJQADgMgDgDQgzgrgYgyQgCALgIAEQhtAygajKQgLgFgBgF").f("#624e37").p("Adyo6QgDhZg2hDIgNgEQAeheiAAcQgNAvgNAwQgDALgDAMQgDAMgDANQgIAngugiQgDCcgFCcQgCANgDALQgDAMgDAMQANAFALAFQADgNAEgMQACgLADgMQAEgMgBgNQgBgbgGgdQBIiHBUieIgDAMQA7BNgOAuQgDAMgEAMQAjAiAEA5QABADALAFQADgMAEgMQAMgugQgiQADgMgBgM").f("#8b7a5b").p("EAiagKzQgEAMgIAFQhIApgug4QgLBCA+AgQALAFAMAEQgLBEA5AqQACABgEAMQAMAFAFAJQAEAIgDALQALAFAMAFQADgMACgMQAIhLgzgwQAlATAKg0IANAEQACgMAFgKQANglgxgfQgLgEgLgF").f("#482c1e").p("AbGumQgQhphZBFQAnBthDATQgHACgEAMQAlA2gJBWQAAACALAFQALAEAFAIQAFAJgEAMQAuAiAIgnQADgNADgMQgMgEgHgJQg+hIBCgzQgMgFgBgEQgBgkAJgkQBIBCgOhIQgBgMADgLQgMgEAAgG").f("#74634a").p("AcXq8QhUCehICHQAGAdABAbQABANgEAMQAMAFAHgEQAIgDADgNQADgMAEgLQBNgEA+ixQAAgBALAFQAEgMADgMQAOgug7hNIADgM").f("#867558").p("AcvohQg+CxhNAEQgEALgDAMQC2A6gJBAQgCAMgDAMQBeA5AsgyQAEgDALAEQAEgLACgMQgLgFgJADQh2AlA1jIQAEgNAEgKQAMgng2gFQgLgFgBgDQgEg5gjgiQgLgFAAAB").f("#7e6c52").p("AaSlFQgHAEgMgFQgDAMgCALQgEAMgDANQAWBOgJA6QgBAMgEAMQAMAFAMAFQADgMAHgDQAvgPgghBQAggiBiAiQALADAMAFQADgMACgMQAJhAi2g6QgDANgIAD").f("#492b1a").p("AXslmQARBTgmAUQgHAEgDAMQgHAYAFAWQABAGALAFQB4gdgzhrQgEgJADgLIAEgNQgYgJgbAC").f("#553b27").p("AYck+QAzBrh4AdQgXCEBIhSQAEgEAMAFQBGALgFiQQgBgMADgMQADgMADgMQgLgEgMgFQgXgKgYgHQgDALAEAJ").f("#6c5940").p("AZbkgQgDAMABAMQAFCQhGgLQgWA/AqAjQAEADgDAMQAzgIAVhDQADgNADgMQAEgMABgMQAJg6gWhOQgLgFgNgF").f("#7d6848").p("AZ1hdQgVBDgzAIQgUBcAWBGQADAKgDAMQBcgFAFg9QABgMAEgMQADgMAHgJQAkg2gwhtQgMgFgMgFQgDAMgDAN").f("#8e7a58").p("AaThsQAwBtgkA2QgHAJgDAMQARAhAXAdQAGAIAMAFQBIAjgehLQgEgKADgMQAEgLAHgHQAZgWgahXQgNgFgCgHQgRgthPgN").f("#9a8768").p("AbzgyQACAHANAFQACgMADgMIBvgZQAQAPAyAcQAMAFABgCQATgxgkgjQAlASACg4QAAgMADgMQgLgEgEADQgsAyheg5QgMgFgLgDQhigiggAiQAgBBgvAPQgHADgDAMQBPANARAt").f("#a9936c").p("AcCgmQAaBXgZAWQgHAHgEALQBQBWhHC0QgFALgDAMQAJARALANQAJAIALAFQAEgNACgMQAsjPgSiwQAfgyA6AKQAMACALAFQAEgMADgMQgygcgQgPIhvAZQgDAMgCAM").f("#5f472f").p("EAiOgHLQgLgEgLgFQgNgEgLgFQAoBJgkACQgLABgMgFQgkB5B5AtQAMAFAMAEQADgMgEgIQgihMAJhjQADgLgEgIQgFgJgMgF").f("#6a563c").p("EAhCgGbQgOBBg6goQgMgFgLgFQgEANgCALQAnBVBkA/QACABgEALQBpBfgJhpQgBgEgLgFQgMgEgMgFQh5gtAkh5IgLgF").f("#665139").p("Adtm6QA2AFgMAnQgEAKgEANQAjAOAjABQAEAAAEgMQACgLAEgNQALAFAMAFQADgMgEgJQgmhVhjg2QAQAigMAuQgEAMgDAM").f("#7c694d").p("AfVloQgjgBgjgOQg1DIB2glQAJgDALAFQAEgMADgMQADgMADgMQAuATAYAcQAGAJALAFQAEgLADgNQAMAFALAEQAEgLgCgBQhkg/gnhVQgEAMgEAA").f("#a19071").p("AfbijQgCA4glgSQAkAjgTAxQgBACgMgFQgDAMgEAMQgDAMgCALQgEALgDAMQAMAFALAEQAEgMACgMQAQgHAQgBQALgBALAEQADgLAHgHQAdgfAFh0QgLgEgLgFQgYgKgYgJQgDAMAAAM").f("#bba57e").p("AeagbQg6gKgfAyQASCwgsDPQgCAMgEANQgCAMgDALQgHAogvgjQASAqgJA8IAHgDIAMgHQAGgZAGgZQBBAAAThHIANAEQACgLABgMQADhIAHg4QAEgMgDgDQgrglAVg+QAuAiASggQABgDAMAFQADgMgEgFQgmguAYhKQADgMAEgLQACgLADgMQgLgFgMgC").f("#c1ae92").p("EAg2ACjQBIAvAUBHQADALgDAMQBRhLCBBgQAMgBAOgBQAMgDAMgCQAigHAZADQAXgBAmAAQAIADAMACQAJADAAASQAAAIgCAGIBOAVQAGgBAHgCIAAAAQAFgMADgLQgMgFgMgEQgJgDgJgDQgRgGgRgGQh3gqhpgqQj5hkirhmQgLgEgMgFQgYBKAmAuQAEAFgDAMQBZAUAcAvQAFAIANAFQACgMAAgNQgBgbgGgc").f("#d0bd9a").p("EAg9ADaQAAANgCAMQgEAMgIAEQgGAEgMgFQAABJAHAdQADAGALAFQAEgMACgLQB9A9gjhUQgEgJAEgMQADgMgDgLQgUhHhIgvQAGAcABAb").f("#c8b8a2").p("EAgfAAhQgQgRgXgKQgLgEgLABQgQABgQAHQgCAMgEAMQCrBmD5BkQBpAqB3AqQARAGARAGQAJADAJADQAMAEAMAFQgDALgFAMIAAAAQgHACgGABIhOgVQgCAIgGADQgNAFgGACQgGAAgHAAQgRAHg8AIQg4AHgaAAQgTAAgHgEIgBgBQgDAAgDAAQgaABgRAJQADgDAEgEQgUgSgCgCQgGgHAAgHQAAgVAUgDQAJgCBGgGQiBhghRBLQgEAMAEAJQAjBUh9g9QgCALgEAMQgDAMgHAJQheB8gnhhQgLgEgMgFQgCBBgGAwIA2gGIDOgWIAYgCQAAAAAAABQgLAbgPAUQAYAJAXALQATAKASAMQAUAOATAQQAJAGAIAJQACACADADQAcAcAZAiQAHAJAHAKQgFAOgFANQgFAFgDAHQAAAmgBAlQgBANABANQAAAMADAMQAAACABABQALAzgqgDQAAAMAGAFQArAZgsAGQgNACgUAAQAEAHAFAIQAoBLgWCIQANANANANQACAAADgBQAUASAUASQgCAEgCADQgHAOgNALQgDADgCADIAAABQgGAFgEAFQgCAFgBAFQgCAKgFAKQgQAkgvAnQgSAOgYAQQgEADgGACQgLAKgKAJQgKAJgFALQgIARgBATQAVgBATAGQANADAJAIQALgJAKgBQAMAAAKAKQAKgKALgKQAEgDAEgCQAGgGAIgHQAMgKAKgJQgKgIgKgLQAAgBACgBQAQg/A3hAQAHgJAKgJQgRgNgCgHQAAAAAAAAQAAgLAMgCQABgBABgBQABABACABQABgBABABQABgHAAgHQACgTgEgWQgDgQgFgSIAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQABgmAAgnIgBAAQgDAEgMABQgCgSABgSQgEgGAAgNQAAgKAAgKQgFgMgGgOQgEgJgEgLQAEgFAEgEQAAgCAAgDQAAgtAogVQAogWAAA8QAAAMgBAIQABABABACIAjAQIAAABQADgEAHgBQADgMACgXQAAgEAAgDQADgPAIgRQAGhQAGhSQAGgEAGgEQAQgLAcgGQACgBADAAQAFgEAEgEQABAAABAAQADgDADgCQABgBABgBQAMgJAKgGQAHgIAGgKQAAAAABgCQAQgSAJgXQAJgEABgNQAGgUAcgYQAbgQAGgWQARgRAcgZQAUgbAKgWIAAgBQAEgJADgIQgCgmAFghQACgGAGgCQATgHAFgUQADgPANgWQAFgIABgJQgZARgbAOQgBAAgBAAIAAABQgVALgXAKQgCgBgCgBQgggRAKgeQA6gcBAg8QAHgGADgLQADgNgEgEQgkgmgsgeQAcA/g6ASIhJAXQAZArhxgOQgDAMgDAMQgEANgCALQgMgEgMgFQiBg0iAgyQgMgFgMgFQiBgziBgzQAEgMgFgE").p("EAr0AFRQgRAHgSAGQgFgDgFgEQgBgBgBgBQgGgEgGgEQgQgPgQgSQApARArARQAEACADAB").p("EAoMAJfQg5AJgugNQgOgEgNgDQgLgBgLgEQgOgHgLgLQgGgGgGgIQgEgEgBgEQgPgXgEgdQAAgLAAgLIBHgIICRBNQgBAfgCAe").p("EAj7AJSQgShQAOg4QgBAtANAZQAEAKgBAKQAAAdgHAYQgCgCgBgCQgBgBAAgC").p("EAnbAPsIgggPIgBAAQAJAVAAAcIAHACIAOgfQABgDACgC").p("EAnDAQXIAEgCIACgEIgGAAQAAADAAAD").p("EAklATUQgBAGgCAIQAFgDAFgDQgDgEgEgE").p("EAhHARXIAJgIQAHgXgHgWQgKAVgJAWQAFAFAFAF").f("#ccc8c6").p("EArtAFOQgrgRgpgRQAQASAQAPQAGAEAGAEQABABABABQAFAEAFADQASgGARgHQgDgBgEgC").f("#ac946d").p("EAoPAIiIiRhNIhHAIQAAALAAALQAEAdAPAXQABAEAEAEQAGAIAGAGQALALAOAHQALAEALABQANADAOAEQAuANA5gJQACgeABgf").p("EAh/AIWQAGgUADgTIjOAWQABAEAAADQAegDAbAAQBKgDBAAVQAAgDABgC").p("EAhxAK+QAIAgAKAYQAZA1AoADQAuAEBBg7QAIgGANAAQABgMABgKQAAgCAAgBQACgRAAgQQgZgigcgcQgDgDgCgCQgIgJgJgGQgGAJgGAJQgQAVgXAQQglAZg4AJ").f("#c9b38e").p("AdnCfQgVA+ArAlQADADgEAMQgHA4gDBIQgBAMgCALQgWA4gGAwIAxgFQAGgwAChBQAMAFALAEQAEgLACgMQANhDAkgTIgLgEQAVg1gwhaQgMgFgBADQgSAggugi").f("#d0ba97").p("AejGjQAnBhBeh8QAHgJADgMQgLgFgDgGQgHgdAAhJQAMAFAGgEQAIgEAEgMQgNgFgFgIQgcgvhZgUQAwBagVA1IALAEQgkATgNBDQgCAMgEAL").f("#bea989").p("AdiGkQgTBHhBAAQgGAZgGAZIAJgGIA6gGIANgBIABAAQAGgwAWg4IgNgE").p("EAiIAHvQgDATgGAUQgBACAAADQAEABAEABQAPgUALgbQAAgBAAAAIgYAC").p("EAlMAK3QAAAQgCARQAAABAAACQgBAKgBAMQADgHAFgFQAFgNAFgOQgHgKgHgJ").f("#866e44").p("AaQBkQgFA9hcAFQgDAMgFABQgWACgXgKQgDAMgIAFQgHADgMgFQBQBSApAeQAEADgEAMQAvAjARggQABgDAMAFQADgMAHgDQBpgbhGh9QgMgFgGgIQgXgdgRghQgEAMgBAM").f("#998355").p("Ab5BvQAeBLhIgjQBGB9hpAbQgHADgDAMQAUAUAXASQAJAIALAFQANAEALAFQADgMAFgLQBHi0hQhWQgDAMAEAK").f("#b39a6b").p("AYUGCQAFAIAMAEQBBApAFBEQAAAMgDAMQA4g4AgBeQABAFAAAEIAugbQAJg8gSgqQAvAjAHgoQADgLACgMQgLgFgJgIQgLgNgJgRQgLgFgNgEQgCAMgCAAQh1gghUARQgDAMADAI").f("#bca379").p("AdSIQQAAADgBADQABABAAAAQAKADAFAFQACgCADAAQAOgEAPgDQAdgGAbgEQAAgDgBgEIg2AGIgxAFIgBAA").p("EAhlAK9QAAADAAACQAFA3ggAMQgKADgKACQgJAAgKgBQgBgBgCAAQAAADAAACQAAALAAAKQANAAAHAGQAHAGAAANQBIAzBOgBQAtAAAwgTQAMgEANAAQgBgNABgNQABglAAgmQgNAAgIAGQhBA7gugEQgogDgZg1QgKgYgIggIgMgB").f("#c2ab7f").p("AdFIRQgBAAAAACIANADQABgDAAgDIgNAB").p("AbBJCQAAgEgBgFQggheg4A4QgLgFgLgEQgZgJgXgKQACBHAkA5QAEAHgEAMQAAABAAAAIB4hIIABgB").p("AYoLCQgFAJgFAJQADAAAEgBQABgIACgJ").p("EAiGAIdQgEgBgEgBQhAgVhKADQAQAlAbAcQALAMANAKQAFAFABANQgFAPgEAPQgEAOgEANQgEAQgEAPQgIAigGAjQgBAJgCAJIANABQAAgKAAgLQAAgCAAgDQACAAABABQAKABAJAAQAKgCAKgDQAggMgFg3QAAgCAAgDIAMABQABgNgDgBQgFgBgEgBQgGgDgFgFQgJgIAAgRQAAgMAFgPQALACALACQBuASgmhXQgXgLgYgJ").f("#ddccad").p("Ab6I4QgHACgIADQgIADgIAEQACADABAFQAGgDAGgDQAHgDAHgDQALgEAMgEQgLgCgIACIgBAAQAAAAgBAA").p("AfRNYQgQAIgOAMQAoBHAXBoQAJAwAGA3QAAAMAAANQANACAJAHQASgsAUgrQAJgWAKgVQAGgPAGgPIAnBnQAXAhAaAgQAKgeABgkQgBgGAAgGQgFgGgGgGQgEAAgEAAQgLgBgKgEQgYgJgPgbQgGgKgEgNQgPgrgBhHQgBgNABgMQgOAAgGgHQgHgGAAgMQgNAAgBgEQgIgmg7APQgNAAgLAF").p("Af2WTQAVgOAXgPIgLgJQAcgSAPgPQAlgkgjgUQgLgHgVgFQAAgBgBgBQgIgIgKgCQgNgBgOgCQgWA1gUA1QAVAZAVAX").p("EAiBAWgQARAJAQAJQANAGAKAKQAKgJALgKQgjgbAFgPIhIg6QgbAQgaARQAaAUAbARQANAIAMAH").f("#f1e4c6").p("Ad5WiQgdADgaABQAJADAIAEQAQABAVACIABgO").p("Ab0W6QAIAIA4AYQADABADACIANAAQgDgMgCgLQgCgOAAgLQABgEAAgDIAAAAQgUgIgagHQgMgDgNAAQgCABgCAAQAAAQgCAV").p("Aa+XsQgSAAgKgIQgBABgBACQACABACABQATAIAVAOQgGgLgBgJQgDABgEAA").p("Aa5ZAQgIgEgIgGQABAHAAAHQAIgDAHgB").p("EAhHAaHQAmAPAWAsQgBAEgEAMQgGAKgSAAQgIAAgHgBQAAABgBACQADACADADQARAFARAEQAAAAAAAAQArgDAwACQgNgQgMgRQg4hJgphPIgLAJQhIhIhIBTQAQAFATAHQArATAiAaQABABACACQAIACAIAD").p("AfPX+IgLAJQADgegLgVQgFgJgIgIQgdAVgdAVQACAGACAHQAEABAEACQAAAAADADQACABAAAGQAEABADAAQAAABADACQADACAAARQAAAVgOAJQABAEAAADQACAAABABQAIgDAMAAQAKgBAMACQADgGACgGQADgIADgIQAIgTAJgV").p("AdfXSQgNAHgNALQAQAJAJALQAGAAAEAAQABgBABgBQAGgFAFgEQAAgEgBgDQACgCACgCQAAgNgDgBQgEgBgEgBQgDgKgDgJQgDAIgDAHQgBACgBAC").p("AdYaHQgBACgBAAQAEAAADAAQgCgBgDgB").f("#b7a179").p("EAi1AIxQAmBXhugSQgLgCgLgCQgFAPAAAMQAAARAJAIQAFAFAGADQAEABAFABQADABgBANQA4gJAlgZQAXgQAQgVQAGgJAGgJQgTgQgUgOQgSgMgTgK").f("#ccb593").p("EAg7ANCQAAAJAAAJQgCANABANQAAAMAHAGQAGAHAOAAQASAjAaAJQAHACAIABQARABAUgIQAIgEAHgFQAKgFANAAQAFAAAGAAQATAAASAAQADAAACAAQAOAAAOAAQAqADgLgzQgBgBAAgCQgDgMAAgMQgNAAgMAEQgwATgtAAQhOABhIgzQAAAEAAAD").f("#ccbda8").p("EAjkAO0QACAFACAEQAMAfgEAVQgEAQgLALQgHAGgBANQBFAggFBjQAJAKAJAJQAWiIgohLQgFgIgEgHQAUAAANgCQAsgGgrgZQgGgFAAgMQgOAAgOAAQgCAAgDAAQgSAAgTAAQgGAAgFAAQAFAKAEAJ").p("EAkiATiQACgIABgGQgHgKgHgJQgCATgFAUQAAACgBACQAIgFAIgEQACgBABAA").f("#b9a993").p("EAu0AAzQhGBBg2h3QgEALgDALQgDAMgDAMQgEANgCALQgEAMgDAMQAsAeAkAmQAEAEgDANQAxghBAADQAHAAAHACQAHgLAIgLQgLgEgBgGQgHgqgmgXQgMgEgEAE").f("#bfb09f").p("EAtlADBQhAA8g6AcQgKAeAgARQACABACABQAXgKAVgLIAAgBQABAAABAAQAbgOAZgRQAdgTAagWQAtgoAjgwQgHgCgHAAQhAgDgxAhQgDALgHAG").f("#c1ab88").p("EApOAC/QAqikjAgnQgDAAgCALQgEAMgFAAQgUACgWgJQBdAnBfCHQAGAIAMAF").f("#817678").p("A2gzuQgDABgCAAQgaAEgcAEQgFABgEAAQgbADgbACQgDABgDAAQgPACgOADQgCAAgDAAQgKABgFAEQgBABgCABQgBAAgBAAIgDgFQAGgFgJABQgFABgDABQgCAAgCABQgEABgEABQgGACgGACQgVAGgYAFQgDABgDABQgVALgcAHIAAABQgBAAgBAAQgFABgEABQgBAAgBAAQgDABgDABQgLAFgNACQgOACgOAFQgNAFgKACQgLADgJADQgNAFgOADQgXAMgZAPQgCABAAACQAAAEABACQACACABACQABADADACQAHAGADAJQAEACADAAQACABACABQAIAEADAKQABACABABQAEAOgMABIACAJQAEgBAEgBQAagEAagEQAGgBAGAAQAyBBAdhBQAMgBAMABQAgAaA8ACQANAAAMABQAAgMgEgCQgMgHgJgJQBJAABJgBQgDgDgBgIQgBgDgCgCQgFgIAGgHQANgQASgNQAFgEAFgDQAJgHAKgGQASgLAPgNQAGgHgBgJQgCgNgKgFQgHgDgDgEQgHgIgFgIQgBgBgBgDQgBgDAAgDQAAgJAFgFQABgBABgF").f("#a39898").p("A2izoQgFAFAAAJQAAADABADQABADABABQAFAIAHAIQADAEAHADQAKAFACANQABAJgGAHQgPANgSALQgKAGgJAHQgFADgFAEQgSANgNAQQgGAHAFAIQACACABADQABAIADADQADABACgBQAAACAAABQAAAIAAAIQAMAbATAUQAGAHANABIAMACQAAgZgMgbQBLAIBLAIQAMABANABQAAgNAAgMQAAgKAAgJQAjAAAkAAIAJAJIAUAUIAEADQA7AOA8AIQASADARACQAIABAGAAQgHgLgKgHQgggXgZgkQgIgIgMgJQgCgCgCgCQgDgFgEgBQgFgBgBgDQgFgJgIgFQgIgEgJgEQgPgGgKgJQgBgCgDgCQgVgQgNgWQgCgCgBgDQgCgDgBgEQgCgEgBgGQAAgHgCgHQgBgIgDgGQgCgFgEgEQgBgCgCAAQgDgBgEgBQgOgCgQAAQg6AAg7AAQgcAAgaADQAAAAgBAAQgBABgCgBQgBAFgBAB").f("#978989").p("A7kwtQgdBBgyhBQgGAAgGABQgaAEgaAEQA+BEB6ARQANACAMABQCIAag2hJQgHgIAAgNQgMgBgNAAQg8gCgggaQgMgBgMAB").f("#8d8388").p("A5XwQQBFANAkgVQAIgFANABQAAgIAAgIQAAgBAAgCQgCABgDgBQhJABhJAAQAJAJAMAHQAEACAAAM").f("#9a8f91").p("A5Qv7QA2BJiIgaQAAAZAKAVQADAFAMABQAAgMAAgNQBeA1AhgKQALgEANACQAAgNAAgMQAMABANABQAMACANABQAAgNgFgKQgIgQgMgOQAZADAUgIQAFgCAAgNQgNgBgGgHQgTgUgMgbQgNgBgIAFQgkAVhFgNQAAANAHAI").f("#796d6e").p("A0RwHQhLgIhLgIQAMAbAAAZIgMgCQAAANgFACQgUAIgZgDQAMAOAIAQQAFAKAAANQBMAqBkgVQALgCANABQAMABANABQAAgMgGgJQgZgnAGhDQgNgBgMgB").f("#978d8c").p("AzfwcQAUA5AEBHQABAMAAANQAAAGABAFQACAFADAEQAGAGANACQAAgNAAgMQAAgNAAgMQAoAHgMg3QgDgMAAgNQAAgMAAgNQAAgMAAgNIAAAAIgUgUQgeAEgZAI").p("AwZv7QACADAAAKQASgDAPgFQgRgCgSgD").f("#827371").p("AyUwUQAAANAAAMQAAANAAAMQBlBSA4g8QAFgFANABQAAgNAAgMQAoAQAIgUQABgBABgCQgDAAgEgBQgBAAgCAAQgNgBgPgBQgHgBgIgBQgGAAgIgBQgPAFgSADQAAgKgCgDQg8gIg7gOIgEgDIAAAA").f("#5c4947").p("Aq5vxQgXASgbAPQAAANAGAIQA2BKhugyQAMAzAKA0QADAMAAANQBEAlAFgeQACgMAAgNQAAgMAAgNQAZADAUgIQAFgCAAgNQAAgMgFgLQgIgPgMgOQBEAlAFgeQACgMAAgNQAAgMgEgMQgKghgXgXQgBgBgDgDQgNABgNACQgEABgEAAQgDABgDAAQgGABgHAAQgDADgDAC").f("#685754").p("Ap6v4QAXAXAKAhQAEAMAAAMQAgAiBDAOQABAAAAANQANgMAPgGQAKgDAMABQAAgNgGgKQgfg3g5gkQgRgKgTgIQgfADgeAEQADADABAB").f("#533f3e").p("AmqwTQgBAAgBAAQhLAHhKAJQATAIARAKQA5AkAfA3QAGAKAAANQCIAohiihIAMABQAAgHAAgHQAAgFAAgGQgMgBgNgCQgBAAgBAAQgBAAgBAA").f("#9e8d8e").p("AmmwTQANACAMABQAQAAAPgBQABAAAAAAQAMgFALgFQgpAEgpAEQABAAABAA").f("#5d4842").p("AmZv4QBiChiIgoQgMgBgKADQgPAGgNAMQgMgCgNgBQAAANAAAMQA/AHA8ARQACABAAANQAZADAZACQANABAMACQBbACg8g4QgGgGAAgNQAAgMgCgNQgPhHhTgnIgMgB").f("#593b35").p("EghhgQAQgBACgCAAQgIAHgMAFQgCABgCABQgEABgEABQgOAGgJAHQgOAKgPAHQgTAIgPAKQgNAGgQAKQgEADgFACQgNAGgEAOQAAABgCABQgBADgBAAIAAABIADAKQAIgDAHgCQAJAGAKAHQAGADAGAEQgJBJBTgVQAEgBAAgKQAAgBAAgCQAAgMAGgFQADgCACgCQBZhHhCgqIAbgUQAOgFAOgDQARgGASgFQBOgVBQgQIABAAIgCgJQgFAAgDgCQgGgCABgFQABgGgBgIQAAgDgBgDQAAgDgCgEQAAAAgBAAQgFgCAAgFQAAgCgBgBQgIgFgCgJQgDgBgEAAQgFAAgDABQgKAEgLAGQgrAbguAXQgCABgDACQgMAKgRANQgBABgCAAQgOAEgLAHQgEACgEAD").p("Egj1gOPQAJgEAKgEQABAGAAAHQgEAAgDAAIgNgF").f("#b09c8f").p("EgjogOKQADAAAEAAQAAgHgBgGQgKAEgJAEIANAF").p("EgkegN9QgFArgcBBQgCAGALALIAPACQgHgUACgbQAsgVAQg7QgKgHgJgGQgHACgIADQgEABgFACQAAACgDAD").f("#715d59").p("EggAgPxQANADAMABQAeA7A4AgQATALAVAIQAMAEAMABQAAgMAAgNQAAgMAAgNQBVASAogSIAAANQAOAWAJA4QACAMAAAMQAAANAHAHQAGAHAMABQAAgNAAgMQBdBBgehUIAMABQAAgMADgMQAOhBhDAJQgMgBgDgFQgKgVAAgZQgMgBgNgCQh6gRg+hEQgEABgEABIgBAAQhQAQhOAVQALAIAPAE").f("#776258").p("A9utAQgmgVgIgsQgMgCgKgGQgogYgmgdQAAANgFAKQggA/hDASQgVAFgZABQAAACAAABQAAAKgEABQhTAVAJhJQgGgEgGgDQgQA7gsAVQgCAbAHAUIBnAIQAHgCAGgCQAEgBAAgMQAAgNAAgMQAzgIA0gHQAZgDAagDQAXgDAYgDQAMgCAMACQgGAOgFAQQgCAIgCAIQgVBXAXBxQABADAMABQAAgMAEgCQBKgUhNimQgBAAAAAAQASAEARAFQBiAeA9A+QAGAGAAANQANABAMABIANABQAAgYgNgbQAZADAUgIQAFgCAAgNQgMgBgMgEQhVgihCg1QAAgNgEgC").f("#7c706d").p("A9RuTQAAANAAAMQBGBPA5gMQALgDAMABQAAgMgCgMQgJg4gOgWIAAgNQgoAShVgSQAAANAAAM").f("#5c433d").p("EggAgO+QgMgBgGgGQgVgYgWgVQgOADgOAFIgbAUQBCAqhZBHIAjAPQBDgSAgg/QAFgKAAgN").f("#a48d75").p("A/ZsdQAFgQAGgOQgMgCgMACQgYADgXADIA8AY").p("EghIgMvQg0AHgzAIQAAAMAAANQAbAKAXANIhDgGIhngIIgPgCQgLgLACgGQAchBAFgrQgFAHgMAIQgPAZgiAgQAAABgBAAQAKAEAJAFIgXgFQgMAMgNALQgsAogXAqQgDAHgCAHQgEAaARAXQAGAHABALQAIBMgtAlQg1ArgbAnQgPAWgUAjQgEAGgGAFQgRAOAGAVQAvgEAiAZQAKAIAGAJQAGAIgCALQgEAjAUAIQBJgxBegrQAWgKAHgfQACgHAAgGQADg7ATg2QAGgSAIgTQAEgKAEgJQAIgNAWgDQAsgEAZgRQAWgPAFgqQACgLAHgLQAOgTAegCQAmgDgCACIAAgBIAVAbIANCYQAMABAMACQAAgNgFgKQgHgQgNgOQAZADAUgIQAFgCAAgNQgMgBgBgDQgXhxAVhXQg6gQgxgS").p("EgkbgOCQAFgCAEgBIgDgKQgCAEgDADQAAABAAABQAAACgBAC").p("EgyOgFNQgCgGgEgDQgNgFgHgDQgwAchCBKQg+BHAAAUQAAASAHAIQg5BMhqCaQiDDCgjAwQhaB9iCCHQgBgDgEgCQgMgFgIgDQhYBbhhBPQiIBviaBZQiCBNhYAkQAAACAGAGQANALAMANQAwgLBxg4QB1g8ByhIQCThcBKhGQAJAMAAAPQB1htDOkUQCAirBlibQBjiXAAgYQAAgBAAgCQAAgHgDgFQAPgMAYgYQAUgUAYgaQBRhWAAgSQAAgJgDgG").p("Eg7YAP/Qg9AWhDAgQhGAigsAdQgFADgFADQAMAGAGAJQgIAYgSAZQggADhHAXQhjAhgLAoQgmAIhUANQgwAJgdALQhLgRhCgdQgUgJgPgCQAdgFAegNQAzgXAAgTQAAgRgEgBQgIgCgCgBQgJgDhKARQhSAUgaAUIADARQAOAOAoAAQAHAAAGgBQgTAIgcATIACAPIABACQAHACAHABQAzAOA6AVQBrAmAYAHIAvAAQgSANAAAOQAAAEAAAEQhxgChLgZQgigLgYgPQgCADgEAEQA2ApCMAXQCDARACAAQCMAABkhTQAjgdAUgdQAFgLAGgNQivCChbAAQgSAAgFgEQgEgGgFgFIgDgRQAsgZApgbQgeAJgsALIAAgBQAAgBAAgBQAOgGAQgHQAhgPASgMQAMACAOAAQBig/BbhEQA4gsAtgkQATgWANgFQACAAABAAQA0gpAkgcQADgDADgDQAJgJAIgI").p("EhJCATCQAZAAAGgIQAGgPAHgMQgVgchJgbQhOgcglAhQgEADgEAFIADARQARARBJAXQANAEALADQAsANAMAA").f("#60483c").p("A/NsJQBNCmhKAUQgEACAAAMQAaAbAxAFQANACAMABQApAHgDg1IAMABQCvAwh3hlQgGgFAAgMQAAgNgGgGQg9g+higeQgRgFgSgEQAAAAABAA").f("#e9d6bd").p("Egh6gKBQgFAqgWAPQgZARgsAEQgWADgIANQgEAJgEAKQgIATgGASQgTA2gDA7QAAAGgCAHQgHAfgWAKQheArhJAxQgBACgCABQgvAgABAxQABAZAJAVQAiBXg2BIQgMAQgLASQgGALgKAGQgIAFgIAHQABAFAAANQAAAPgiAYQAZAKAZALQAnASAnARQgNAeAFAaQACANACAMQBjgdApAAQACgQgCgSQgFgoAhgTQAHgDAJgIQgDgJgEgLQgPgoAGhBQABgLAEgKQASgqAjgyQgagVAjgSQAOgHANgJQAngaAzAFQAQACAOAUQALAOAKAOQAhAuAjAsQAbAiAkARQA9AcAkgmQATgUAXgRQAYBLBPANQA2AJAQgzQAEgMACgMQAKgzgJgjQgIgEgCgEQgYgSgXgTQgRgPgRgPQgagWgYgZQgzgzgvg5QgIgPgOgMQgkgvghgyIgJhkIgNiYIgVgbIAAABQACgCgmADQgeACgOATQgHALgCAL").p("EgtKADWQA0gbAzgYQAOgHAMgFQgOgFgPgEQgeAXhHAxQABABAAgB").p("EgnVAFkIAEgJQgUAIgUAIQAAABAAAAQAPAAAOgBQAEgDADgE").f("#846a53").p("A/soPQAFAKAAANQANABAGAGQAGAIAAAMQAyA3AsA7QAGAJAAAMQAaAoAyAPQAMAEAMABQALBBAsAjQAIAGAMACQAAgNAFgBQAlgOgqgvQgMgCgKgFQg6gigUhFQANABAGgFQAGgGAAgNQgMgBgLgFQhGgjg5gxQB0AQg7hDQgHgGAAgNQgMgBgNgCQgxgFgagbQAAANgFACQgUAIgZgDQANAOAHAQ").f("#4e3730").p("A8GqRQAAAMAGAFQB3BlivgwQgKBIBVgCIAAANQAagWAugIQADAAAAgNQAAgMAAgNQAyAEAdgPQAJgFAMACQAAgNAAgMQDiBkipiZQgHgFAAgNQgMgBgGgHQgHgHAAgMIg1AKQgfCBh0hVQgMgBgNgB").f("#654a39").p("A9joLQA7BDh0gQQA5AxBGAjQALAFAMABQAAgMAFgCQAlgOgqgvQANgLAHgOQAFgKAAgMIAAgNQhVACAKhIIgMgBQADA1gpgHQAAANAHAG").f("#e8e0d3").p("EgkbgOCQABgCAAgCQAAgBAAgBQAAgOgDgEQgDgEAAgCQjEAxjAB9QiFBXisCcQAAgcgcgQQhABehdCAQADAGAAAJQAAAShRBWQgYAagUAUQgRAYgTAYQAAACAAABQAAAYhjCXQhlCbiACrQjOEUh1BtQAAgPgJgMQhKBGiTBcQhyBIh1A8QhxA4gwALQgMgNgNgLQgGgGAAgCQBYgkCChNQCahZCIhvQj7Coj1BmQhAAZhRAeQgxAUAAAKQAAAGATAOQAlghBOAcQBJAbAVAcQgHAMgGAPQgGAIgZAAQgMAAgsgNQAKAHADADQgHAFgMADQgHAFAAASQAAAMgBADQgEAMgSAbIADARQAHAHAmAOIgCgPQAcgTATgIQgGABgHAAQgoAAgOgOIgDgRQAagUBSgUQBKgRAJADQACABAIACQAEABAAARQAAATgzAXQgeANgdAFQAPACAUAJQBCAdBLARQAdgLAwgJQBUgNAmgIQALgoBjghQBHgXAggDQASgZAIgYQgGgJgMgGQgDgCgFgBQgLgFgLAAQgBAAgCAAIADgDQABgBAAgBQAcgjAFgRQABgEABgLQAEgDADgDQAmgZAcgqQAFgIAEgHQAZgpAlgSQBCgjBUgdQAjgMAUgoQATglARglQAFgNAGgNQAVgoAZglQAJgNAHgLQAggzAeg0QAAgCACgBQgXgogEgwQALgSAMgUQBCh9AphNQAUgbAQgZQAWgYAQgaQALgLAHgMQAygiA4gfQABgEABgEQAJgaAQgXQAUgdAYgeQATgYAUgTQAGgFAHgFQAtgdAlgqQAHgGAFgJQAOgRAPgSQAFgIAGgIQAFgGAFgGQAMgPALgQQA0hGAwhKQAHgMAKgJQAfgeAdggQAGgGAHgFQAkgZAagkQAFgHAIgFQAJgHALgJQACgCABgBIABgBQAAAAABgBQAJgIAJgKQAEgEADgEQAEgBAEgDQBRgqAzgdQADgBACgBQABAAAAAAQACgBABgBQARgJAOgIQAGgDAFgDQAGgDAEgCQAlgVAVgPQAEgDAEgDQAMgIAFgHQADgDAAgC").p("Eg15ABCIABgDQgEAKgGAKQgHALgEAAQAAgHAHgIQABgBAMgM").p("EhANASOQgBgCgCgEQAGgCAEAAQgCAEgFAE").p("EhBTASzQgBACgBABQAAABgBgBQAAAAAAAAQACgCABgB").p("EhGjAUmIAAAAQABACAAABQgBAAgDABQgBgBAAAAQgBgBgBgCQAEAAACAA").p("EhFvAWPQgYgHhrgmQg6gVgzgOQApAOAJADQgCADgMAMQgNANgGANQADACADACQAYAPAiALQBLAZBxACQAAgEAAgEQAAgOASgNIgvAA").p("EhD3AVyQAsgLAegJQARgKAQgLQgOAAgMgCQgSAMghAPQgQAHgOAGQAAABAAABIAAAB").f("#d6c2ac").p("Egk3gNoQgZAYgiAUQgEgBgFgCQgFADgGADIAKADQgQAKgUAJQgCAIgJADQADgHADgJQgBABgCABQAAABgBABIgBAAQAAABgBABQgBADgCACQAAABgBAAQAAAAAAAAQAAACgBABQgBAAAAABQgBACgBABQgDAGgDAGQgOARgPAPQgCAFgCAFQgEAFgDAGQgHAHgIAIQgFADgGADQgDACgFgDIg6BWQgKALgKALQAAAFgFABQgEAGgFAFIgXAHQiUCsiFC2QgEADgDADQgLALgHALQgDAFgDADQgNASgQAQQACALAAAOQg2CUgyB/QACgDADgDQABgDACgDQAagJAbgFQgFACgFADQg6AdgOA9QgOA7gHAWQgCAFgEAFQgIAPgKAQQgcAvgTAiQgGAMgGALQgMAagHAPQgBAEgBADQgBACgCACQgTAYgXAXQgrAvg5AxQgjAfg4AuQgmAiAAAJQAAATAIAFQAAABAUAHQAngaAmgeQAFgEAFgFQAbgVAZgYQAegaAdgeQAZgZAbgeQAFACAHACQAAgBB9iEQBRhXAzgcQBygyBPgmQBPglAlgbQAigYAAgPQAAgNgBgFQAIgHAIgFQAKgGAGgLQALgSAMgQQA2hIgihXQgJgVgBgZQgBgxAvggQACgBABgCQgUgIAEgjQACgLgGgIQgGgJgKgIQgigZgvAEQgGgVARgOQAGgFAEgGQAUgjAPgWQAbgnA1grQAtglgIhMQgBgLgGgHQgRgXAEgaQACgHADgHQAXgqAsgoQANgLAMgMIAXAFQgJgFgKgEQABAAAAgBQAiggAPgZQgEADgEAD").p("EgrugFLQgBADAAADQgBgDgBgEQABgHACgGIADgBQgBAIgCAH").p("EgrogFmQgHACgHABQAKgJAKgLQgDAIgDAJ").p("Egr+gDGQAAABAAABQAFAIgHAFQAAAJAAAJQgFAfgJAcQAFAGgHAFQgBAIgCAHIAIhnQAFAAACgDQADgGADgG").p("EgswABfQgIAAgJABQAKg2AKg1IARgRQgBAHgBAIQgGANABAPQgGAWgCAXQgCAJgBAJQABAEgBAEQAAAAgCACQABADgBAE").p("EgubADBQgTANgkAbQgGgHgHgGQgFgFgIgGQgBgNgHgDQgGgCgFgCQAYgGAfgKQAVgGAMAAQAAAEADAHQADAKAGAF").p("EgtPADaQADgCABgCQBHgxAegXQAPAEAOAFQgMAFgOAHQgzAYg0AbQgCACgDAC").f("#c9a868").p("EgrrgFaIgDABQgCAGgBAHQABAEABADQAAgDABgDQACgHABgI").p("EgrigF3QgKALgKAJQAHgBAHgCQADgJADgI").p("EgsEgC6QgCADgFAAIgIBnQACgHABgIQAHgFgFgGQAJgcAFgfQAAgJAAgJQAHgFgFgIQAAgBAAgBQgDAGgDAG").p("EgswABYQACgCAAAAQABgEgBgEQABgJACgJQACgXAGgWQgBgPAGgNQABgIABgHIgRARQgKA1gKA2QAJgBAIAAQABgEgBgD").p("EgmugMkQgzAdhRAqQgEADgEABQgDAEgEAEQgJAKgJAIQgBABAAAAIgBABQgBABgCACQgLAJgJAHQgIAFgFAHQgaAkgkAZQgHAFgGAGQgdAggfAeQgKAJgHAMQgwBKg0BGQgLAQgMAPQgFAGgFAGQgGAIgFAIQgPASgOARQgFAJgHAGQglAqgtAdQgHAFgGAFQgUATgTAYQgYAegUAdQgQAXgJAaQgBAEgBAEQgbBMgmBIQgKARgKARQghA3goAzQgdAkgZAnQghAxgcA1QgOAagOAbQgCABAAACQgeA0ggAzQgHALgJANQgZAlgVAoQgGANgFANQgRAlgTAlQgUAogjAMQhUAdhCAjQglASgZApQgEAHgFAIQgcAqgmAZQgDADgEADQgBALgBAEQgFARgcAjQAAADgBACQALAAALAFQAFABADACQAFgDAFgDQAVgfAlgaQAMAAAMgIQAQgLAQACQAMACAMgFQBEgcAogTQADgBACgCQA0gxAvgoQgBABgBABQAFgKAEgKQAIgXALgUQASgfgGgWQgCgJgFgKQgWgiA1gWQAJgEAJgEQAggOAjgDQgIAOAAAHQAAAZguA1QguA0AAAQQAAADAAABQgEAHgFAFQgBACgCACQheBdhEA1QgCABgCACQgkAcg0ApQgQANgTAOQgtAkg4AsQhbBEhiA/QgQALgRAKQgpAbgsAZIADARQAFAFAEAGQAFAEASAAQBbAACviCQABAAgBAAQA+guBHg9QBFg7BOhJQAJgIAJgJQCzhsAAgaQAAgbAOggQAZgbAYgaQAyg3AbghQgmAegnAaQgUgHAAgBQgIgFAAgTQAAgJAmgiQA4guAjgfQA5gxArgvQANgUAJgXIAKAEQAAgEAAgEQAAgKAeglQAGgMAGgOQACAAACgCQATgiAcgvQAKgQAIgPQgMAFgPAJQgNgLgNgJQAmgkAdgqQAGgJAEgJQACgEABgDQAGgPgBgPQAIgLAIgKQAyh/A2iUQAAgOgCgLQAQgQANgSQADgDADgFQAHgLALgLQADgDAEgDQCFi2CUisIAXgHQAFgFAEgGQAFgBAAgFQAKgLAKgLIA6hWQAFADADgCQAGgDAFgDQAIgIAHgHQADgGAEgFQACgFACgFQALgdAYgOQABgCABgCQAAgBABAAQABgBAAgCQAAAAAAAAQABAAAAgBQAAgDAAgE").p("EgmpgMkQABgBAAgBQAAAAgBAAQAAABAAAB").p("Eg2SAMxQgJANgKAPQgSAcgZAhQABAAAAAAQARgdARgEQABABABAAQANgRAMgSQAFgLAEgMQAWgZAXghQAYgkAWgmQgZAYgbAVQgBARgvBH").f("#ecdac0").p("EgukACyQgDgHAAgEQgMAAgVAGQgfAKgYAGQAFACAGACQAHADABANQAIAGAFAFQAHAGAGAHQAkgbATgNQgGgFgDgK").p("EgtLADWQgBACgDACQADgCACgCQAAABgBgB").p("Egp9ACxQglAbhPAlQhPAmhyAyQgzAchRBXQh9CEAAABQgHgCgFgCQgbAegZAZQgdAegeAaQgWAmgYAkQgSAcgTAbQgIANgJANQgMASgNARQgcAngdAkQgcAlgeAjQg7BGg/A+QgRARgRAQQgLALgMALIABAIIACAJQAKAKABABQAIAEASAAQAyAABniCQAdgkAsg/QAYghAcgpQAjgyAqg+QBXiBA5hQQAiBOBFAyIACACQAFADAFAEQAFADAFABQAEABAEgBQABAAABgBQAAAEgBADQABABAAABQAAAMA7A9QA9A9AsAHQAHACAGAAQAlAAAegIQBCgPApgvQAagjAKgNQASgWAQAAQBkAABXg5QA9goBKhVQA8hEAbggQATgTAFgGQA5g1AzgEQAEAAADAAQAOAAAKAMQABABABABQAKAKANAAQAAAAABAAQAYgBAYgBQAbgjBJghQAngSArgNQgEgBgDgBQg4AOgMACQgwAMgSAAQg6AAgZgoQgMgUgHgJQgMgNgRgDQhzgZhRAgIAAAAIAAgBQAAgKgHgNQgQgegQgoQgJAIgHADQghATAFAoQACASgCAQQgpAAhjAdQgCgMgCgNQgFgaANgeQgngRgngSQgZgLgZgK").p("EguuAMmQAJgIAEgEIAAgDQADAFgHAJQgHAKgJACQAAgEAHgH").p("Egs6ANBQgJgDgKgCIAIgFQAQgMAEAAIAMAPQgHAEgOAD").p("EgncAFrQgOABgPAAQAAAAAAgBQAUgIAUgIIgEAJQgDAEgEAD").p("EgjJAFWQgCgIgBgFQAAgBAeAAQAPABAPAAQgLAFgKACIgIACIgXALQgDgBgCgG").p("EgxBACtQABAPgGAPQgBADgCAEQgEAJgGAJQgdAqgmAkQANAJANALQAPgJAMgFQAEgFACgFQAHgWAOg7QAOg9A6gdQAFgDAFgCQgbAFgaAJQgCADgBADQgDADgCADQgIAKgIAL").p("EgzGAHzQACgCABgCQABgDABgEQgCAGgDAF").f("#c2a784").p("EgizgL6QgGACgHACIBDAGQgXgNgbgKQAAAMgEAB").f("#c5af8f").p("EgkfgA5QgjAygSAqQgEAKgBALQgGBBAPAoQAEALADAJQAQAoAQAeQAHANAAAKIAAABQBRggBzAZQARADAMANQAHAJAMAUQAZAoA6AAQASAAAwgMQAMgCA4gOQADABAEABQBogeCBgCQAAADADABQABAAABAEQA2gHA2gBQAAADADABQADABAAAQQAAAKgFAJQAIACAGABQA1gTAegJQACgegdAAQgMAAgMgCQhCgLgkgnQgGgFgDgHQgIgVAQgNQAigaA2gUQATgHATgGQAMgEAMgCQARgEARgBQATgCAKgOQArARAWAVQAbAbAeALIAEALIAAABQAMAIAJAIQAzgIAJAlQAAADANABQAlAEAigIQAEgBAAgMQgNgBgMgEQicgthFh9QAAgNAAgMQgNgCgJgGQg3gkhJAdIAAAMQgZgCgZgOQAAALAAANQAAAKAAAMQgHgBgHgBQgKAAgLAAQhVgshMg6QACAEAIAEQAJAjgKAzQgCAMgEAMQgQAzg2gJQhPgNgYhLQgXARgTAUQgkAmg9gcQgkgRgbgiQgjgsghguQgKgOgLgOQgOgUgQgCQgzgFgnAaQgNAJgOAHQgjASAaAV").p("EghtAGUQgzAEg5A1QgFAGgTATQACACABACQALATADAMQACAHAIAIQAEAGAFAGQAOASAUgDQAJgBAKAGQAcANAYARQApAZAeAeQgsAZgjAZQgJAGgJAGQg3ArgSAkQgIARAAAQQAAADAAACQgUALgzAaQg6AWgoAbQgOAJgMAJQgWAOgLAIQggABgPAEQgdAIAAAbQAAAAAAAAQABAFABAFQgBACgBABQACABABABQALAeAtA1QCCCXABAAQCxDgALDqQgIAxAAAnQgFAUgIAZQgJAcgMAiQgnBqANA+QgQA5g0CDQgSAugJAmQAAAAgBABQgGAHgGAHQgFgHgIgJQgaARgJAQQgFAJAAAKQAAAEACAHQgNAGAAANQAAATACACQACADAHACIADADQAHACAQAAQAcA2A7BhQB9DOBEAkQgJAoAoAgQAkAdAnAAQAfgMAUgOQAKACANADQA0AKAWAAQAHAAAGgBQAIABAIAAQA5AAAhgUQAPgKAHgMQAJgNAAgSQAAgSgJgGQgNgEgHgDQgcAFgFAJQgMAVgHAFIhcAAQgNgFgegYQgDgDgEgDQgygsgKgHQg7gsgLAuQgRgOgRgPQgUgzgNgbQgPgjgSgdQgnhAgzghQgHgFgIgEQAFgGAFgJQAXglAahYQgBgDgCgCQAthhAbg+QAZg6ANguQAEgMADgLIAAAAQALgrAAgeQAAhCgMgWQAIgFAEAAQAAgYADggQAhhYAQgrQAHgTAGgTQAJgEAOgGQAPgGAGAAQAHhZAkiiQAgiQAAhDQAAghgCgYQANhcAxiQQA3ihAAgpQAAgEAAgDQAUgJATgIQDVhfBag2QAmgVAQgPQAEgDACgCQAJgKAAgGQAAgigFgDQgGgCAAgFQgbAAgeADQg2AFhCAOQAAgOgDgBQgDgCAAgCQgtALhmAuQhOAYhOAdQABgMAKgQQgpARgDAAQgTAAgZgGQgZgGgjAAQgmAAgTggQgMgTAAgQQAAgKAFgLQgTgIgTgHQgBAAAAAAQgNAAgKgKQgQgHgRgH").p("A+qMkQgQAAgSAAQAWgJAVgJQgEAJgFAJ").p("Egg5AScQgCgEgDgDQAEADAEACQgBABgCAB").p("EghmAWvQhChVgpg0QB9CLALAFQgBAIgEAQQgDALgEAQQgFgdgJgaQgBgCgCgB").p("Egh8Ae9QgJgDgEgFQgFgHgCgPQAJAJAPAPQgCADgCAD").p("AZ3UoQgLgKgVgJQgLAGgZAeQgEAGgFAGQgkAvAAAaQAAAmAQALQACABAoAOQAVgQAPgPQAUgTAKgSQALgSAAgSQAAgngRgSQgCgDgDgC").p("AaqZEQgWAIgSASQggAfAAAoQAAFCDXDvQAHgDAHgEQARBLAbBuQAMA0gDBaQgBBUAHAnQgPAaAAA4QAAAuAdAqQA1BJB9AAQAkAAAKgGQAGgKAGgGIABgEQAFACAFACIA5gMIACgMQAJAAAJAAQAxAABEgDQBLgEAQgEQABgEAGgQQACgFABgNQgggYg+guQgiAEgrAAQgfAAgkgEQgLAEgLAAQgzAAghhWQgcgXgYgjQgxhGgchvQgQg1gOhDQgWhwgOiFQgBgIAAgHQgNgVgMghQgdhMAAgbQAAgDAAgEQgTAAgLgEIgKgGQgGgDAAg5QAAhLAugbQApgXA/ASQA6ASAsArQABABABAAQAMgBAJgEQAGgIAGgJQACABABABIAAgBQAEgPACgJQABgCAAgBQABgFABgDQgFgUgjgeQgVgSgTgNQg1ACgrABQgrACghACQgDAAgEAAQgbACgVADQgBgKgDgIQgFgSgLgNQgBgFgFgDIAAAAQgagcgrAFQgHAAgHACQgHABgIAD").f("#553b2e").p("A8BmMQgFACAAAMQBGA9AYgfQAGgHAAgNQAAgMAHgGQBXhThehKQAAANgDAAQguAIgaAWQAAAMgFAKQgHAOgNALQAqAvglAO").f("#ceb79d").p("A+bkbQAvA5AzAzQABgFAAgHQAAgMgDgCQhMgbAEhbQgMgCgJgGQg8gsAGhqQAAgMgGgIQgGgGgNgBQgMgCgMgBIAJBkQAhAyAkAvQAOAMAIAP").f("#b89e75").p("A+Dk/QgEBbBMAbQADACAAAMQANACAFAHQAWAZAJAZQARAPARAPQAXATAYASQBMA6BVAsQALAAAKAAQgDgBgCgCQhMhShRhOQANACAGgGQAGgGAAgMQAAgNAAgMQgMgBgNgCQgMgBgNgBQgMgCgIgGQgsgjgLhBQgMgBgMgEQgygPgagoQAAgMgGgJQgsg7gyg3QgGBqA8AsQAJAGAMAC").f("#604535").p("A8MlrQgGAFgNgBQAUBFA6AiQAKAFAMACQBHhpAoBwQACAEAMACQA2gQAfgtQADgGANACQAAgMgBAAQhEgKiEgxQAAANgGAHQgYAfhGg9QAAANgGAG").f("#c2a782").p("A8HiAQgJgZgWgZQgFgHgNgCQAAAHgBAFQAYAZAaAW").f("#dcc496").p("Eg05AB0QgQAZgUAbQgpBNhCB9QgMAUgLASQAEAwAXAoQAOgbAOgaQAcg1AhgxQAZgnAdgkQAogzAhg3QAKgRAKgRQAmhIAbhMQg4AfgyAiQgHAMgLALQgQAagWAY").p("Eg5GAMqQAGAWgSAfQgLAUgIAXQgEAKgFAKQABgBABgBQAUgQASgPQAFgFAEgHQAAgBAAgDQAAgQAug0QAug1AAgZQAAgHAIgOQgjADggAOQgJAEgJAEQg1AWAWAiQAFAKACAJ").p("Eg3QAOKQAAACgBAAQABAAABAAQAAgBAAgBQAAAAgBAA").p("Eg+QAQ7QglAagVAfQAsgdBGgiQBDggA9gWQAFgFAEgFQgCACgDABQgoAThEAcQgMAFgMgCQgQgCgQALQgMAIgMAA").f("#f0e5d3").p("EgyyAHEQgeAlAAAKQAAAEAAAEIgKgEQgJAXgNAUQAXgXATgYQADgFACgGQAHgPAMgaQgCADgCAC").p("Egx3AL7QAPgkAZARQhFgygihOQg5BQhXCBQgqA+gjAyQgJAjgrAnQgsA/gdAkQhnCCgyAAQgSAAgIgEQgBgBgKgKIgCgJQgHAFgLAFQgUAJgUAFQgSAAgFgEIAAgDIgBAAQABAEAAAHQAAAWhDA0Qg0AogjAUQgVgHAAgBQgIgFAAgTQAAgJADgJQABAAgBAAQgGANgFALQgmBWAAAqQAAAGgBAWQAJgYAKgSQARgjAKAFQANAGAAA+QAAA0gEAJQgGALgqA1QgUgGgBgBQAAgBgCAAQgBADgBAEIgOgCIABgBQAEgUAGgTQgFAKgQALQAAAGgIAEQgbAbgJAiQghA3gQA/QgDAHgEAFQgFAWgPASQgGAdgLAbQgEALABAJQABAUgOARQgaAfgYAhQgHAJgGgBQgPAAgHAZQgKAhgYAQQgJAFgIADQgfAMgKAPQg6ASgwBvQglBWgIBBQgOAuAAAjQAAADADBNQAKA8AgANQAAACAAACQAAgEA5BHIAAADQADACACACQAIAJAIAKQAqAzAcAaQAQASAIAJQAcgYAlAIQAXAEATAPQAngRCVBAQACgCABgBQAMgHAAgPQAAgHgRgjQgSgjAAgIQAAgGABgFQgGgBgGAAQgBAAgCAAQgBAAgBAAQgVAAgNADQgDgHgFgKQgBgEgDgFQgTgogWgjQhEhsg0AAQgVAAgZgJQgKgEgQgGQgBgBgBgBQAAAAAAgBQAGgIAFgJQAig5AAgPQAAgRgCABQgCAAgBAEQgGgGgWgFQgRgEgNgBQgCiEgcgkIgBAAQARgbAIgOQAJgQAFgOQAMAQAKAPQAQAZAhAHQAkAHAzgVQALgFALgDQANgCAMACQAXAFAYAFQADAAADABQAEgLAFgKQBJiuB6iPQAEABAEACQAJgWAEgYQACgMAHgJQASgUAUgSQAIgPASgeQAohBAsg6QBkiBBZgrQAdgwCRhaQA0ghAngWQAAgCAAgBQAAgEApgeQAigaAmgYQgpALgugVIAAAAQgSgIgMgJQgVgRgBgSQAtgdAYhEQAGgRAGgSQAfheA6hbQAQgYAKgb").p("Eg3DAQeIgOAxQADgWAJgXQAAgCACgCIgOgEQAPgVAKgQQgEAVgHAU").p("Eg92AW/QABgDABgCQALACADABQAEAAAOABQgPAJgTAIQAAgIAAgI").p("EhHRAn7QAJgCADAAQAAACgBAhQgBAZAfAMQAVgHAUgTQADAJAGAJQAGALAbAnIglAKQgLgGgQgDQgdgRgUgIQABgGAAgPQAAgLgPgYQgPgZAAgJQAIACAKAA").p("EhC1AsVQAogCAVgIQAGAHAGAIQANAQAEAMQgWgCgYgFQgMgCgMgDQgJgJgOgMIADAA").p("A1ZHAQAFADAAAiQAAAGgJAKQAQAIALAMQgFgngGgfQgEgWgEgRQgeh8gnBYIgCACQgBAFAAASQAAASAFAZQAegDAbAAQAAAFAGAC").p("A2ZIeQAIAQAHASQAKgRAKgOQABABAAAAQAKgXAIgRQgQAPgmAV").p("A1POjQACAwAAAzQAACNgzCBQgSAugeA4QAAACAAABQAAAmhaCPQgMAmgNAlQgGAAgQAKQgGADgFADQg3BUhNBsQicDcgqA/QgcArgVAhQAAAYgBAYQgBBWgDBVQAAAMgCAMQgOBpA3BPQAbAmAFApQADAXAFAVQABAHABAGQAEAggNATQAeAYANAFIBcAAQAHgFAMgVQAFgJAcgFQAHADANAEQAJAGAAASQAAASgJANQAmACAfgPIAJgmIAZADQBIAQAaghQAHgIADgPQAIgDABgCQgLgmgUgOQgTgigdgcQgOgOgWgIQgdgLgegHQgQgEgQgEQgUgEgcgNQhUgngthFQgNgCgGgGQgyguAMhRQAEgcAEgcQADgZgEgGQgOgEgBgLQgCgfAJgSQAFgJAKgIQgNgtAagSQAAgIADgHQAGAAAJAAQATAAB3isQBPgMByiqQBvijAkiKQAtgsAegoQAEgDADgCQADguADg2QgbAbgbAaQAIgkAGgaQANgzAEgUQAKgxAGguQAKgCAKgBQACglACggIgPAtQgDAFgEAFQALhOAAhDQgEh0gIhmQgKBTgZBz").p("EgzQAUSQgGAGgIAHQAPgJAOgIQgHADgIAB").p("Eg5GAN9QgSAPgUAQQgvAog0AxQgEAFgFAFQgIAIgJAJQgDADgDADQACgCACgBQBEg1BehdQACgCABgC").p("Eg1iALZQgFAFgFAEQgbAhgyA3QgYAagZAbQgOAgAAAbQAAAaizBsQgJAJgJAIQhOBJhFA7QAVgFAPAEQgBgFAAgHQAAgOAkgVQAjgUAdAJQgIgHAAgTQAAgfBdgrQA6gaAcgPQAegjAcglQAGgLAGgOQAFgJAEgHQgBAAgBAAQABAAAAgCQAZghASgcQAKgPAJgNQAvhHABgR").p("Eg60ASTQgHgCgFgCQABABACABQADABAAAQQARgQARgRQgOAJgOAJ").p("Eg9KARbQgNAFgTAWQATgOAQgNQgBAAgCAA").p("Eg3yAXfQACgBABgBQgBABgBAAQAAABgBAA").p("EhDEAtjQgGAIgOAAQAZAGAaADQgPgHgQgK").p("Eg/jAt0QgNAZgVAAQAtAAAAg/QAAgDAAgEQgCAZgJAU").p("AvMJ/QgFgegdgHQgCgBgDAAQAVAQASAW").p("A0QOwQAAABgBABQAAAKAAAKQABgLAAgL").p("AuMOAQAIgOAGgNQgFABgHAAQAAAJgCAR").f("#dab86c").p("EgyRAMuQg6BbgfBeQgGASgGARQgYBEgtAdQABASAVARQAMAJASAIIAAAAQAuAVApgLQAQgJARgJQCrhgCIAHIAAAAQCOgzAegMQCDg0Big0QAIADAKAKQASgHARgGQABAAABgBQBDgxCKhLQASgkA3grQAUgugOgrIAUgcQgYgRgcgNQgKgGgJABQgUADgOgSQgFgGgEgGQgIgIgCgHQgDgMgLgTQgBgCgCgCQgbAgg8BEQhKBVg9AoQhXA5hkAAQgQAAgSAWQgKANgaAjQgpAvhCAPQgiAdgugXQgsgHg9g9Qg7g9AAgMQAAgBgBgBQgEgDgFgDQgFgBgFgDQgFgEgFgDIgCgCQgZgRgPAkQgKAbgQAY").f("#574039").p("AoKtuQANABAMACQAAgNgBAAQhDgOgggiQAAANgCAMQgFAehEglQAMAOAIAPQAFALAAAMQBiAZAOBuQABACAMABQAAgMAEgLQAag/gegnQAAgMAAgN").f("#4d3531").p("AmNsvQAAgNgCgBQg8gRg/gHQAeAngaA/QgEALAAAMQDHBuhFiuQgFgLAAgM").f("#503a34").p("AnxqKQAAgNgFgKQgHgQgNgOQgMgBgJAFQgkAVhEgNQAAANAAAMQBIAWgFAiQgPBWBJgEQAAgMAGgEQBEgohKhFQANABAMAC").f("#573f37").p("AoKqNQBKBFhEAoQgGAEAAAMQCpACAkgYQAIgGAMABQgxhRh+gMQgMgBgNgBQgMgCgNgB").f("#63504c").p("AoKrYQgMgBgBgCQgOhuhigZQAAANgFACQgUAIgZgDQAAANAAAMQBxA3hrBPQgGAEAAAMQAMACANABQAMABANABQAAgMAAgNQBEANAkgVQAJgFAMABQAAgMAAgN").f("#43251c").p("Am3oBQgxA5g7AaIANABQhcA6AdBWQAAAMgEABQhvAYhVARQADBrAgBDQACAFANACQAAgNAAgMQBGAMA3ANIAAgNQgNAAgLgFQgsgUgHg5QBag/Bpg0QAFgCAAgNQglhHCJAHQANABAMABQBeBIiLA6QgFACAAANQANABAMgBQAigBBCgkQANABAAgDQAShyg4g+IAAANQhZhDgLg5QgMgBgFAG").f("#584443").p("Aq7scQgFAehEglQgNgCgIAFQgdARgZAWQAAANAAAMQAAANAAAMQAAANgGAFQgHAGgMgBQBpAfBFgBQABAAAAgNQAAgMAGgEQBrhPhxg3QAAANgCAM").f("#64524f").p("AtosUQAAgNAEgKQAahDgegKQAAgNgGgEQg5gog+gfQgNgBgFAFQg4A8hlhSQAAANADAMQAMA3gogHQAAAMAAANQDHgrBsCPQAFAHANAB").f("#49302c").p("AuWoTQBZgUgrg+QgNgBgIAFQgtAagihzIAMABQAAgJgBgIQgNhbhiAuQAAANAAAMQAAANAAAMQA3A+BOB5QAEAHANABQAAgMAEgB").f("#40231d").p("AuroOQhOh5g3g+QgNgBAAgCQgJgng1AKQAAAZAAAZQAAAMAAANQgNgCAAgBQAAgEgBgDIgkAFQAAAMAAANQAQBDALBGQANBHAIBIQACANAAAMQAdA/ASBGQASBHAIBPQACAMAAANQAMABABAEIAdgKQgNgqgEgzQAZADAUgIQAFgCAAgNQgNgBgCgFQgKgVAAgZQBFgMAygiQAGgEAAgMQgNgCgDAGQgiAxAAhTQAMgMAIgOQAFgJAAgNQAAgMgGgKQgSgfgBgxQBwA+hHiAQgEgGgMgBQgNgBgEgH").f("#4f3224").p("AtPiHQAAgNABgMQAMhXg/gSQAAAMgGAEQgyAihFAMQAAAZAKAVQACAFANABQAAgMAAgNQAxAGAUAeQAGAKAAAMQAlg4AVAfQAEAHANAB").f("#563925").p("AtgiPQgVgfglA4QgNgBgKAEQgPAGgMALQAvBCgTA/QgDAKAAANQgQA0AmAMQADABAAAMQCGAWA8gjQAGgEAAgNQh/gFAYhoQADgMAAgNQAAgMgCgNQgKg3gNgWQgNgBgEgH").f("#462c20").p("AugiMQgUgegxgGQAAANAAAMQAAANgFACQgUAIgZgDQAEAzANAqQAPAtAaAkQAEAHANABQAMACANABQAAgNADgKQATg/gvhCQAMgLAPgGQAKgEANABQAAgMgGgK").f("#361712").p("Apug/QBeAKAigPQAKgFAMABQAAgNAAgMQAAgNAAgMQArgDAFgrQACgMAAgMQAAgNAFgCQCLg6hehIQgMgBgNgBQiJgHAlBHQAAANgFACQhpA0haA/QAHA5AsAUQALAFANAA").f("#523426").p("ArrgyQAAAMAAANQCBAhAvgLQAMgDAMABQA4gBAPgrQAEgLAAgMQgMgBgKAFQgiAPhegKIAAANQg3gNhGgMQAAAMAAAN").f("#7c634b").p("AncgxQgPArg4ABQgQAzAmAMQADABAAANQANABAMABQANACAGgGQAGgGAAgMQAAgNAAgMQBIggA7gwQAHgFAMABIAAgMQheAHgGgFQgMgBgNgCQgMgBgNgBQAAAMgEAL").f("#8a6e4d").p("Ak8gjQA8BZhbALQAAANAAAMQANANAHAQQAFALAAANQANgMAPgGQAKgEAMABQAAgNAAgMQBAhCgKgeQgEgLAAgMQgMgBgLgFQgXgMg2gRQAAANAGAJ").f("#9d8365").p("AlCg5QgMgBgHAFQg7AwhIAgQAAAMAAANQAgAiBEACQANAAAMACQAAgMAAgNQBbgLg8hZQgGgJAAgN").f("#594542").p("AzfuGQgNgBgMgBQAAAMgDAMQgVB4iXg+QAAANAFAKQA8BzhagoQAAAMAAANQB1AVAEARQAEAMAAANQBDAMATgyQABgEANABQAMACANABQAMABANACQAAgNgEgLQgbhZgRhkQgBgJgBgJ").f("#6b5c5c").p("A0QuHQhkAVhMgqQgNgBgMgCQgNgBgMgBQAAAMAAANQAAAMAAANQADApg2gVQgDAoA2gHQAMgCANABQAMACANABQAMABANABQCXA+AVh4QADgMAAgMQgNgBgLAC").f("#3b1d19").p("AytqfQgNgCgMgBQgNgBgMgCQAAANgBAMQgGBEhEABQgTBnAmA1QAGAJAAAMQgfAcApBdQACAFANACQBfgXggCXQgBADgMgBQBDAzA0BCQAGAIAAAMQAMACAGgGQAHgGAAgMQAAgNgCgMQgIhPgShHQgShGgdg/QgNgBgMAAQg6ACgqhZQBYANgajoIANACQAAgNAAgM").f("#472c24").p("AzfqlQgNgBgBAEQgTAyhDgMQAAAMgDAMQgSBHhoAqQAlAdAfAiQAHAIAAAMQAKAtA7BbQAGAJAAANQArAwAzAsQAGAFAAANQAMABABgDQAgiXhfAXQgNgCgCgFQgphdAfgcQAAgMgGgJQgmg1AThnQBEgBAGhEQABgMAAgN").f("#2d100e").p("Ay6qIQAaDohYgNQAqBZA6gCQAMAAANABQAAgMgCgNQgIhIgNhHQgLhGgQhDIgNgC").f("#543d36").p("A1HqVQgEgRh1gVQgNgBgLACQgaAHgaAJQAAANAHAFQCpCZjihkQAAAMAAANQAZAbAUAfQAFAJAAANQBQCGAzgoQAHgFANABQAAgMgHgIQgfgiglgdQBogqAShHQADgMAAgMQAAgNgEgM").f("#877b79").p("A4KuGQghAKheg1QAAANAAAMQBDgJgOBBQgDAMAAAMQAaAQAaALQALAFAMABQB7BnhDhlQgFgJAAgNQgNgBgMACQg2AHADgoQA2AVgDgpQAAgNAAgMQgNgCgLAE").f("#6e5e59").p("A3UslQBDBlh7hnQAAANgFAJQgHAOgNAMQAAAMAAANQAAAMAAANQAAAMAHAHQAGAHAMABQAagJAagHQALgCANABQAAgNAAgMQBaAog8hzQgFgKAAgNQgNgBgMgBQgNgBgMgCQAAANAFAJ").f("#5e4a46").p("A4MsnQgMgBgLgFQgagLgagQIgMgBQAeBUhdhBQAAAMAAANQAAAMADANQANA3gpgIQAAANgFACQgUAIgZgDQANAbAAAYIgNgBQB0BVAfiBIA1gKQAAgNAAgMQAAgNAAgMQANgMAHgOQAFgJAAgN").f("#4e342a").p("A6iojQBeBKhXBTQgHAGAAAMQCEAxBEAKQABAAAAAMQBLA7BMgPQALgDANACQAAgNgGgJQg7hbgKgtQgNgBgHAFQgzAohQiGQAAgNgFgJQgUgfgZgbQgMgCgJAFQgdAPgygEQAAANAAAM").f("#553c2d").p("A3pkpQgfAtg2AQQBpBsB1gWQAEgBAAgMQBNARAqAdQAGAEAAAMQBGBjA3gIQAMgCANABQAAgMgGgIQg0hChDgzQAAgNgGgFQgzgsgrgwQgNgCgLADQhMAPhLg7QgNgCgDAG").f("#6b5441").p("A5MjyQgohwhHBpQAqAvglAOQgFABAAANQANABAMABQANACAMABQAAgNAAgMQCgBWBCALQAMACANACQAIBRBegpQAKgEANABQA1AVgDgpQAAgMAAgNQAAgMgGgEQgqgdhNgRQAAAMgEABQh1AWhphsQgMgCgCgE").f("#836c4f").p("A6JiQQCAAkBCBYQAHAJAAAMQBJgdA3AkQAJAGANACQAAgNAAgLQAAgNAAgMQAMABAGgGQAHgFAAgNQgNgBgKAEQheApgIhRQgNgCgMgCQhCgLighWQAAAMAAANQAAAMAAAN").f("#a28a65").p("A6ih6QBRBOBMBSQACACADABQAHABAHABQAAgMAAgKQAAgNAAgLQAZAOAZACIAAgMQAAgMgHgJQhChYiAgkQAAAMgGAGQgGAGgNgC").f("#604a38").p("A0qghQAAAMAAANQAAALAAANQAAAMAAANQB9gvAkBtQABAEANABQAKBnA7hLQAGgIAAgMQAAgNgFgKQgIgPgMgPQA/gFgZhWQgBgEgMgBQAAAMgHAGQgGAGgMgCQgNgBgMACQg3AIhGhjQAAANAAAMQADApg1gVQAAANgHAFQgGAGgMgB").f("#89704e").p("AwjgcQAZBWg/AFQAMAPAIAPQAFAKAAANQAMACANAAQAMAPAIAPQAFAKAAANQBFAZAyAtQAGAFAAANQD/CEDwCZQAFAEAAAMQANABAMACQANABAMACQAAgNgBgNQgNhwhWgxQAAANAAABQjGgMh/iHQAAgMgFgDQhAgrhRg5QAAgMgDgBQgmgMAQg0QgNgBgMgCQgNgBgEgHQgagkgPgtIgdAK").f("#7a664a").p("AwwC/QAMgLAPgGQAKgEANABQAAgNgFgKQgIgPgMgPQgNAAgMgCQAAAMgGAIQg7BLgKhnQgNgBgBgEQgkhth9AvQBFB9CcAtQAMAEANABQAAgNAAgM").f("#a68e68").p("AwwDYQAAAMgEABQgiAIglgEQAAAKgDADIAcARIBHgCQAEgHAAgLQA+AHA/AGQAMACANABQAAgNgGgFQgygthFgZQgNgBgKAEQgPAGgMALQAAAMAAAN").f("#98815d").p("AzVDEIAJAFQADgBADABQABgBABAAQgJgIgMgIIAEAM").f("#baa37e").p("AzGDJQAAABAAACIBIAqQADgDAAgKQgNgBAAgDQgJglgzAIQgBAAgBAB").p("AwbEFIAUAAICGAqQAAgKAAgJQAAgNAAgMQgNgBgMgCQg/gGg+gHQAAALgEAH").f("#ad9467").p("AzGDMQAAgCAAgBQgDgBgDABIAGAD").f("#967b5a").p("AlHB3QgHgQgNgNQgMgCgNAAQhEgCgggiQAAAMgGAGQgGAGgNgCQBSDiBYiJQAFgIAAgMQAAgNgFgL").f("#64482f").p("AoNA6QgmgMAQgzQgMgBgMADQgvALiBghQAAAMgDABQguAGgagbQAAANgDAMQgYBoB/AFQAAANgGAEQg8AjiGgWQBRA5BAArQAFADAAAMQB7AtBNgMIAAANQAlBMBagiQALgDAMABQAaAbAugGQADAAAAgNQAAgMgGgHQhFhBhLASQAAgMgDgMQgWhbgZhaQANACAMABQAAgNgDgB").f("#725739").p("Am9FOQhaAiglhMIAAgNQhNAMh7gtQB/CHDGAMQAAgBAAgNQAAgMAAgNQANACAGgFQAGgHAAgMQgMgBgLAD").f("#7b5f3b").p("Am/F7QBWAxANBwQABANAAANQBdAPApBDQAEAGAMABQAAgMgGgHQgqgygbg/QAAgNgGgFQgzgsgShHQAagWAxAFQANAAAMABQAnAJgVgjQhTiMgjCEQAAANgDAAQguAGgagbQAAAMgGAHQgGAFgNgCQAAANAAAM").f("#664928").p("AlbGGQASBHAzAsQAGAFAAANQA3A7AIhNQAAgBAMABQAAgMgDgCQglgMAPg0QgMgBgDgFQgKgWAAgZQgMgBgNAAQgxgFgaAW").f("#af946a").p("AuBEvIBIAXQDaBiC2CCQABABACABQANADAMABQAAgMgFgEQjwiZj/iEQAAAMAAANQAAAJAAAK").f("#cdb084").p("AlbJbQgKAAgHgCQAIAHAJAHIAAgM").p("AmNIwQgMgBgNgDQgCgBgBgBQAMAKAMAIQADADADACQgCgIAAgJ").f("#bda27d").p("A0jTaQgVATgWASQgGAagIAkQAbgaAbgbQACgWABgY").p("EggsAg2QAGgJAFgKQgCgCgCgCQgDALgEAM").p("EghrAlgQgdgLgPgTQgaBYgXAlQACAFABAFQADAHgBAHQAzAhAnBAQACgVACgVQABgRACgTQAEgbAEgdQACgLABgNQAGgkAJgiIgjAM").p("Eg3PAOKQAAABAAABQgEAHgFAJQgGAOgGALQAdgkAcgnQgBAAgBgBQgRAEgRAd").p("Eg6YASBQA/g+A7hGQgcAPg6AaQhdArAAAfQAAATAIAHQgdgJgjAUQgkAVAAAOQAAAHABAFQgPgEgVAFQhHA9g+AuQgDAJAAAJQAAATAIAFQAAABAVAHQAjgUA0goQBDg0AAgWQAAgHgBgEIABAAIAAADQAFAEASAAQAUgFAUgJQALgFAHgFIgBgIQAMgLALgLQAAgQgDgBQgCgBgBgBQAFACAHACQAOgJAOgJ").p("Eg/0AW6QgKASgJAYQgEAOgFAPQgNAqAAATQAAAQAGAHQACAAAAABQABABAUAGQAqg1AGgLQAEgJAAg0QAAg+gNgGQgKgFgRAj").p("EhFSAs0IADASQATASBjATQABAAAAAAQAOAAAGgIQAQAKAPAHQA3AZBGAAQAJAAAGgBQAGABALAAIADAAQAVAAANgZQAJgUACgZQAAgFAAgGQAAgmgTgfQgKgQgRgPQgTgSgMAEQgMADgCAVQgBAFAAAGQAAAIASAjQARAjAAAHQAAAPgMAHQgBABgCACQiVhAgnARQgTgPgXgEQglgIgcAYQgGAFgFAG").p("Eg++Aq+QgOACAAAfQAAAFgBAFQAAAWgFAqQgGA0AAARQAAAdADgDQAOAFAdAAQAiAAANgUQAJgPAAgcQAAhIgngxQgDgDgDgDQgSgVgNAE").p("Eg2TAOpQgcApgYAhQArgnAJgj").f("#cbae77").p("EgZoAtAQAHgDgBgNQADgLAAgLIgJAm").f("#cebc99").p("Ege/Ai0QgtBLgGAcQgCAAgRAJQgUALgNACQAAAAgBgBQgOARgTATQgJAigGAkQgBANgCALQgEAdgEAbQgCATgBARQgCAVgCAVQASAdAPAjQANAbAUAzQARAPARAOQALguA7AsQAKAHAyAsQAEADADADQANgTgEggQgBgGgBgHQgFgVgDgXQgFgpgbgmQg3hPAOhpQACgMAAgMQADhVABhWQABgYAAgY").f("#baa990").p("EAlvAP3QgGgFgBgOQgEAEgEAFQAEALAEAJQAGAOAFAMQABgTADgOQgIgDAAAA").f("#cabda7").p("EAlyATyQgUgSgUgSQgDABgCAAQgMAHgNAGQgFADgFADQgBAAgCABQACABABABQAQAQAPAQQAJALALAIQACgDADgDQANgLAHgOQACgDACgE").p("EAi0ASsQhQg7gYBMQAjAUAfAVQAfAWAbAWQAWgMAWgMQghgmgfgoIAAAA").f("#cabd9c").p("EAmAAU9Qg3BAgQA/QgCABAAABQAKALAKAIQACABADABQCgBFCYBNQADACALgJQgKgKgJgJQgfgcgfgaQAuhChchHIAGgGQgBgBgBgBQhng8gjgdQgKAJgHAJ").f("#ece1cc").p("EAj0AYAQgKABgLAJQgLAKgLAJQgHAHgHAGQgYAZgGAZQgBAFgBAHQAKAGALAFQBMArBBAkQAJAGAKAFQAJAFAJAFQALAHALAFQAmAXAgATQAHADAUgRQAGgFAHgGQAHANAHAKQADAKAFAHQAQAEAPAEQgBgBAAgCQgFgYgMgrQgCgGALgJQgKgKgMgHQhSguhVghQgngQgogMQAngcgugkIALgJQgKgKgMAA").f("#f2e1c3").p("AcDQbQCRhDjlgzIgDBFQAMAlgHAkQADAEAEAHQAFgdABgRQAngMAJAXQAEAHAAAmQAAAkgDASQB6gqhYg5IgOAA").f("#d9c7a1").p("Eg9VAcVQgUASgSAUQgHAJgCAMQgEAYgJAWQAFACAGADQAJAFAAASQAAAPgbAxQAigzAmg1QAdgoAdgmQgVARgTANQgSgFgDgCQgIgGAAgTQAAgCAGgL").f("#e5d6bc").p("EhEyAmUQACgBAAARQAAAPgiA5QgFAJgGAIQACABAAACQAQAGAKAEQAZAJAVAAQA0AABEBsQAWAjATAoQADAFABAEQABgBAAAAQAcACANANQABAAABAAQANgTAIgOQACgFgIgLQALgaAHghQgdgbgTgqQgJgVgGgYQgCAdAAAdQAAAdgDABIgEAFQgEAEgSAAQgbAAgJgtQgEgtAAgDQAAiUBCimQgDgBgDAAQgYgFgXgFQgMgCgNACQgLADgLAFQgzAVgkgHQghgHgQgZQgKgPgMgQQgFAOgJAQQgIAOgRAbIABAAQAcAkACCEQANABARAEQAWAFAGAGQABgEACAA").f("#908065").p("Eg+fArPQADADADADQAEgFACgHQgFgQgJgPQAAgEAAgEQhPgDgxgqQgHAhgLAaQAIALgCAFQgIAOgNATQACAAABAAQAGAAAGABQACgVAMgDQAMgEATASQARAPAKAQQALgFALgJQAEAFABgGQACAAABABQABgFAAgFQAAgfAOgCQANgEASAV").f("#fe6d9c").p("EBC0gQLQA3BRA4A+QA5BDA6AuQCFBRgpi2QgeiBhGhhQAAgBgBgBQgGgFgFgGQhLhGhFgnIgGAHQDcDFhgBAQg1Adh6htIgFAF").f("#ff4083").p("EBDsgTFIAGgHQgEgCgEgCIgEAGQADADADAC").f().s("#ff0000").ss(1,1,1,3).p("ARmwQIAAAAQAAAAAAAA").cp();
	this.shape_1.setTransform(338.9,298.8);

	// Layer 2
	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#6f5126").p("EAu/gcrQABABAHAEIAVAAQALgbAug9QArg4ARgxQgygFgzBFQguA8AAAlQAAAbABAA").p("EA1WgVXQgygIg3AwQguAoAAAOQAAAQACAHIAFAAQAXgDAcAEIAGAAQAvgtAEgDQAighAPgYIgNgN").p("EAnage/QhIA0gwBeQguBcAABRQAAAmABAOQABAWAGARIAWAAQApinALghQAAgCABgDQAugCArgdQAogaATghQgugHhEAbQgFACgFACQAfhMAog0IgMgL").p("EAlngGxQA9AkDIAeQAaAAgBgKQgBgBgBgDIAGgBQAMgXgRgRQgCgCgDgDQgEgFgGgGIgJgJQhDgUgjgJQgCgBgCAAQg2gPgbAAQgSgKgUgLQgIgEgHgEQhtg6gXgUQgUgOhRhVQg8hAglAIQAoB5BoBdQBHBABeAoQAAACAAAB").p("ASVQOQgBgGAAgKQgKALgLALQAEAMAEAOQAIgNAGgT").f("#8c805a").p("EA1jgS5QgGgSgpgVIg1gBIgGAAQgcgEgXADIgFAAIhCgCQgFgEgGgBQgKgCAAAaQAAAVADAEQgOANgLARQgMATAAAHQAAAaAEACQADACACgFQAOgBAQgFQALAHAWAEQAHgCAlgOQAKgDAMgCQAngJAzgEQAJgDAEgHQACgCABgEQACgDABgEQABABABAAQAUgEAIgIQAGgHAAgM").p("EA0ngSnQgagGgXgCQACgBADgCQALACAJACQANADALAE").p("EAxzgS9IAAgBIAAAAIAAAB").f("#b1a57a").p("EA0sgSEQgzAEgnAJQgKAEgKAGQhcAygaAyIAVAIQAcgRB1gvQBvgtAGgFIAAgaQgSgGgVgBQgBAEgCACQgEAHgJAD").f("#36211a").p("EAg/gTgIgZAAQgEAzAABtQAABCAQBQQAUBjAjA7QA0BVB+BqQA2AtArAbQAHAEAIAEQAUALASAKQAbAAA2APQAKgBABgEQACgEgFgDIgGgNQk0iXhejdQglhVgKhsQgFg4ABh9").f("#957b4e").p("EAolgB1QgsA9g0BXQhAAihKBgQg0BGgSAtQg3BJhGCGQgmBMgfBIQgbA0gXBDQgLAhgPAwQgcAxAAAMQAAAIAAAFQgbA5gZA3QgQAZgQAeQgtBTgdA2QgmAdgmAvQgeAlgZApQgUAgAAAFQAAAaAFACQACACACgFQAOgMAOgMIATAHQAfglAggrQgqBcgXBkIASAJQAYgzAcg1QAAADAAACQAAARAAAGQABAGACAKIAMAAQgHggAFgnQAWgpAYgrQBIiBA+haQgQAFgPAJQACgFADgFQASgnAWgsQAlg7AvhKQgDAWAAATQAAAbACADQABADAGAHIAVAAQA3iUA+i3QAWhCAUg+QABgDACgDIACgBQgYBAgQBCIAXAJQAWgbBMihQBMihAAgTQAAgagGgCIgCABQAlgzAZgiQAXgVAUgXQgUA+AAAaIAVAJQAVgdA8inQAKgaAIgXQA0hwgFh7QgbAXgnBGQgQAggOAc").p("EAgsANpQAGgNAIgLQgDALgBAMQgFAAgFAB").p("ALJrHQgOAAgHACQgDABgJAEIgGABQAIAAAMgEQAMgDAHgB").p("Ar7YdQC1AkEwAAQAcAAAXgRQAVgQAAgPQAAgDAJgmQAIgmAAgEQAAgcgOgCQgdAAgegCQg1AakzAKQgNgFgDAAQgGgCAAAaQAAABAAABQgSgBgSgBQgSgBg9gGQhRgbhMgpQhFgmhmhHQgfgWgagSQg6gngdgQQhKgohFgGQhDgog2gVQh9gyibgEQAfAPAgAPQC/BcCyBuQAmAdArAdQBGAuA/AcQBAAoAIADQCJBLCdAe").f("#c6a97d").p("EguvAaHQAFgDAEgEQgFADgFACQABABAAAB").p("EgthAZFQgKAIgGAHQAMgKALgKQgDADgEAC").f();
	this.shape_2.setTransform(437.7,228.4);

	this.instance_29 = new lib.patch0401();
	this.instance_29.setTransform(147.3,384.9,1,1,0,0,0,52.2,46);

	// patch02
	this.instance_30 = new lib.patch0201();
	this.instance_30.setTransform(431.1,228.7,1,0.894,0,0,0,325.9,161.2);
	this.instance_30.alpha = 0.89;

	// patch02
	this.instance_31 = new lib.shades001();
	this.instance_31.setTransform(364.1,297.5,0.956,0.857,0,0,0,327.3,179.1);

	// shades
	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#2a1416").p("EA+hgcZQgLANg/gFIgKABQhfgIgKA7QAMCCBLgUQAPgGAOgDQgnBUA9AUQA/glA7gzQBIg2gxg8Qgvgegvgh").p("EAwNghfQgEABgEAAQACACACACQAFAFAFAFQAHAGAGAGIAAgBQgMgKAAgJIABgEIgBgBQABgBAAAAIAAgCQgEAAgDABIgBAA").p("EA0yghfIgBAFQgTALgPAHQgNAIgRAJQg6Afg2AAQgRAAgVgHQBuAwBxh0QgEACgEAC").f("#cdc4a0").p("EA04gxBQg+A7g1AaQiQBkgnCUQgEARgEATQghgKgfgEQhmhkgWjfQAMg0gSgyQgLgZgUASQgMAMgLALQgaAfgaAhQgaAbgaALQjtCbgKFWQg8gigFA5Qi0AYibCZQhOBehcAvQiYBCiQB5QmpE9nlCPQhjAWhhgFQgNgBgLgBQhlgQhdANQiIAMiFA+QiJAViIAkQiAAmiEAGQjeASjjgEQjyAFjog3QjGgpiiAQQjGgpjuARQlxAgkwDOQhoA4hKA7QgNAJgMAKQiGA4hJBVQgfAkgcAiQhnB2hEA+IgFALIgDgCQiUCpgsDkQgBAGgBAHQgfDRiOCeQgCACgBACQACgBADgBIABAAQAsgSA0hBQgpA1geA0QhnCzAeCSQgBAFgBAEQg+DWAsCsQABAGACAGQABAEABAEQAFAXAEAWQg6DUhVCNQDBizHykUQEGiRE8ibQDOhkBigrQCehEEYAdQB/ANCCAfQAIAAAIABQBtAGBHAuQAIgDAHgEIAAgGIABAAQBpAJCJAhQEGBTFhDcQCeB5B6AiQDUBvECAYQA0ALBOAzQBkAeB4gRQBEgCA3AaQBRgLBeAAQDaAABFBWQAwA8gKCQQB/AJEJCRQAxAbAyAdQABgNAAgNQgNg0AjhcQABgEACgEQAjg1Abh4QAshXAlijQAMimA9hCQCBhKBRhqQAEgRBRh0IgKgJQAVgSAVgSQAIgJAJgHQA9g6A5hCQCPiuBWkUQACgGACgFQAehlBahfQBLhLA8iMQAVhRBehRQAFgEAEgEQBwh2A9joQA5guAMhSQA8AbAfgvQAJgPAHgVQgIgGgIgFQgOgJgOgJQh3hLgBhYQgEhVA7gmQAvgaAuAAQAqAAAoAVQDTB4DdBAQA8ACA/gHQB3gUBsg/Qg9gUAnhUQgOADgPAGQhLAUgMiCQAKg7BfAIIAKgBIBKgIQiShmiIh+QgygvgagqQAJhHgSg9QAeAYAZgMQghgGgYg1Qgchsh+hpQgVhigwg8QACgQgHgdQgUhKAihOQAggvgFhDQgBgDAAgEQgEgXASgsQABgFADgFQAbg2AIgcQAGgVgFgGQgdgQg5ArQgNAKgPAO").p("EAx9gi9QAFgDAGgCQA5gYAvAtQAMALAKAJQAVAWAOAOQALAMAGAGQhxB0hugwQgLgEgNgGQgdgOgGgHIAAgGQgGgGgHgGQgFgFgFgFQgCgCgCgCQAFgCAEgCQAHgEAHgEQABgBABAAQACgBAAgBQAfgUAfgiQAGgHAHgIQAGgFAIgEQABgBADgB").p("AGdJeQAFACAFABIgKACQAAgCAAgD").p("Eg0dAyWQAFAAAFABQADg9AGhJQgVBAgVA+QALADAMAE").f("#5f5f67").p("EAx5gi7QgIAEgGAFQgHAIgGAHQgfAigfAUQAPgIAdAJQAFABAGADQgCgIAAgIQAAgKACgKQABgBAAgCQAAAAAAAAQAGgSAOgPQAIgIAJgFQgDABgBAB").p("EAykgjHQAhAAAYAXQAWAXAAAhQAAADAAADQAAACAAADQAAAAAAABQAOgKAOAAQARAAAJAGQAFADAFAHIgBAHQAEgCAEgCQgGgGgLgMQgOgOgVgWQgKgJgMgLQgvgtg5AYQANgFAPAA").f("#150d0b").p("EAx9gi9QgJAFgIAIQgOAPgGASQAAAAAAAAQAAACgBABQgCAKAAAKQAAAIACAIQAFACAIAEQADgCAFgBQgGgJgKgMQAAgKALgFQAMgEAdAAQAAgCAAgCQAAgRALABQALABAAAQQAAAIgBAGQgGADgEABQgFgDgDgCQAAABgBACQgCAJAAAFQAAAFAEAEQAFADAAAGQAAADgBADQAEACADACQAIAAAJAAQArAAARgQQADgDADgDQABgDAAgDQAAgDAAgDQAAghgWgXQgYgXghAAQgPAAgNAFQgGACgFAD").f("#090404").p("EAwVghgIAAACQAAAAgBABIABABIgBAEQAAAJAMAKIAAABIAAAGQAGAHAdAOQANAGALAEQAVAHARAAQA2AAA6gfQARgJANgIQAPgHATgLIABgFIABgHQgFgHgFgDQgJgGgRAAQgOAAgOAKQAAAAgBAAQgDADgDADQgRAQgrAAQgJAAgIAAQgDgCgEgCQABgDAAgDQAAgGgFgDQgEgEAAgFQAAgFACgJQABgCAAgBQgCgCAAgCQgBgBAAgFQgdAAgMAEQgLAFAAAKQAKAMAGAJQgFABgDACQgIgEgFgCQgGgDgFgBQgdgJgPAIQAAABgCABQgEADgEAGQAAgBgBAAIAAAD").f("#856540").p("EAyQgiNQAAAFABABQAAACACACQADACAFADQAEgBAGgDQABgGAAgIQAAgQgLgBQgLgBAAARQAAACAAAC").f("#321e19").p("EAuxgZrQg7AmAEBVQABBYB3BLQAOAJAOAJQAIAFAIAGQAvAjAqAzQADAEAEAEQBWBzBqA0QCYAvCLgpQgBgBgBgBQgUgMgRgPIAPAFQg4g8hChhQgKgNgJgPQhWhohnhHQh5hph4gsQgZgJgYgGQAEgDAFgBQATgFAVAAQBEAABaA2QCHBJCRAUQAmAFAmACQjdhAjTh4QgogVgqAAQguAAgvAa").f("#ff80ac").p("EAvmgZNQgFABgEADQAYAGAZAJQB4AsB5BpQBnBHBWBoQAJAPAKANQBCBhA4A8QALALALALQABABACAAQgBAAAAABQBDBAA6APQAsAJgGhZQgOhlghhPQgSgqgXgkQhrh4h9gfQiRgUiHhJQhag2hEAAQgVAAgTAF").f("#dcd1ba").p("A82E8QBuAaBxAnQgBgFgCAAQgGgDAAgEQgHABgIACQgBgBgCgCQhHguhtgGQgIgBgIAA").f();
	this.shape_3.setTransform(414.9,322.2);

	// Layer 4
	this.instance_32 = new lib.dogshadow_01();
	this.instance_32.setTransform(331.2,619.6,1,1,0,0,0,444,45.9);
	this.instance_32.alpha = 0.29;

	this.addChild(this.instance_32,this.shape_3,this.instance_31,this.instance_30,this.instance_29,this.shape_2,this.shape_1,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape);
}).prototype = p = new Container();
p.constructor = lib.dog_01;
p.nominalBounds = new Rectangle(-147,0,973.4,665.7);

(lib.dogshadow_01 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap14();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.dogshadow_01;
p.nominalBounds = new Rectangle(0,0,888,92);

(lib.imagecopy = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.greenBg();
	this.instance.setTransform(-426,-155.6);

	this.shape = new Shape();
	this.shape.graphics.bf(images.Bitmap1).p("EA4wAHXIAATkIFtAAIAAzkIltAA").f();
	this.shape.setTransform(-26.4,16.5);

	this.addChild(this.shape,this.instance);
}).prototype = p = new Container();
p.constructor = lib.imagecopy;
p.nominalBounds = new Rectangle(-426,-155.6,799.3,344.5);

(lib.Learnmores_popup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);


	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(0).call(this.frame_0).wait(5));

	// Layer 1
	this.text = new Text("Learnmore", "18px HelveticaNeue", "#000000");
	this.text.textBaseline = "top";
	this.text.lineHeight = 18;
	this.text.lineWidth = 118;
	this.text.setTransform(1,1.9);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.text}]}).to({state:[]},1).wait(4));

	// Layer 5
	this.instance = new lib.learnmore_01("single",0);
	this.instance.setTransform(683.9,27.2,1,1,0,0,0,493.4,58.1);

	this.instance_1 = new lib.learnmore_02("single",0);
	this.instance_1.setTransform(683.9,27.2,1,1,0,0,0,493.4,58.1);

	this.instance_2 = new lib.learnmore_03("single",0);
	this.instance_2.setTransform(683.9,27.2,1,1,0,0,0,493.4,58.1);

	this.instance_3 = new lib.learnmore_04("single",0);
	this.instance_3.setTransform(683.9,27.2,1,1,0,0,0,493.4,58.1);

	this.timeline.addTween(Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new MovieClip();

p.constructor = lib.Learnmores_popup;
p.nominalBounds = new Rectangle(1,1.9,118,25.6);

(lib.LM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);


	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(0).call(this.frame_0).wait(2));

	// Layer 1
	this.instance = new lib.learMore1();

	this.instance_1 = new lib.learnMore2();

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new MovieClip();

p.constructor = lib.LM;
p.nominalBounds = new Rectangle(0,0,185,46);

(lib.n_grass_img = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.nature_tree();
	this.instance.setTransform(1829,338.1,1,1,0,0,0,0.6,112);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.n_grass_img;
p.nominalBounds = new Rectangle(14,106.5,2453,578.2);

(lib.nature_tree = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#2f601a").p("AiHh9QBfBfgBCCQhThYg1gKQgDABgDAAQBgAtAVBDQBYAWBZgWQAMgmA+g3QgDAAgCAAQgnASgrAtQgPhMA+hnQgBAAgCAAQhFAvgkB+QAAgEAAgCQg0iRh1g0QgBAAgCgB").f("#244914").p("ABiBVQArgtAngSQg0gCgeBB").p("AAlBPQAkh+BFgvQhOAOgbCZQAAACAAAE").p("AixACQA1AKBTBYQgzhphVAH").p("AiEh8QB1A0A0CRQgJihiggk").f();
	this.shape.setTransform(620.4,209.5,1,1,0,0,0,620.4,209.5);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#2f601a").p("AgoAAQAVAKAGAQQARAFAVgFQACgJAOgMQAAAAgBAAQgLgBgHAPQgDgRAOgWIgBAAQgQAKgIAbQAAAAAAgBQgKgfgagMIgBAAQAVAVgBAcQgSgTgMgDQAAAAgBAA").f("#244914").p("AgJAWQgLgWgTAAQAMADASAT").p("AAIAQQAAABAAAAQAIgbAQgKQgSADgGAh").p("AgcgbQAaAMAKAfQgCgjgigI").f();
	this.shape_1.setTransform(-1477.9,-20.5,1,1,0,0,0,-1477.9,-20.5);

	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#2f601a").p("AAggUQgQAKgIAbQAAAAAAgBQgKgfgagMIgBAAQAVAVgBAcQgSgTgMgDQAAAAgBAAQAVAKAGAQQARAFAVgFQACgJAOgMQAAAAgBAAQgLgBgHAPQgDgRAOgWIgBAA").f("#244914").p("AAIARQAIgbAQgKQgSADgGAhQAAABAAAA").p("AgnAAQAMADASATQgLgWgTAA").p("AgcgbQAaAMAKAfQgCgjgigI").f();
	this.shape_2.setTransform(-1485.7,-20.5,1,1,0,0,0,-1485.8,-20.5);

	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#2f601a").p("AgoAAQAVAKAFAQQASAEAUgEQADgJAOgMQgBAAgBAAQgLgBgHAPQgDgSAOgVIAAAAQgQAKgIAbQAAgBAAAAQgLgggagLIAAAAQAVAVgBAcQgSgUgMgCQgBAAAAAA").f("#244914").p("AAIARQAIgbAQgKQgTADgFAhQAAAAAAAB").p("AgJAWQgLgXgTABQAMACASAU").p("AAIAQQgCgkgjgHQAaALALAg").f();
	this.shape_3.setTransform(-1561.2,-18.6,1,1,0,0,0,-1561.2,-18.6);

	this.shape_4 = new Shape();
	this.shape_4.graphics.f("#2f601a").p("AgygvQAjAkAAAwQggghgTgEQgCAAgBAAQAkASAJAaQAgAIAigIQAEgPAYgVQgCAAAAAAQgOAHgRARQgFgdAXgmQgBAAAAAAQgaASgOAvQAAgCAAgBQgTg2gsgTQAAAAgBgB").f("#244914").p("AAOAeQAOgvAagSQgeAFgKA5QAAABAAAC").p("ABEAIQgUgBgLAZQARgRAOgH").p("AhCAAQATAEAgAhQgTgnggAC").p("AgxguQAsATATA2QgEg8g7gN").f();
	this.shape_4.setTransform(-1570.4,-20.5,1,1,0,0,0,-1570.4,-20.5);

	this.shape_5 = new Shape();
	this.shape_5.graphics.f("#2f601a").p("ABQg0QgnAagVBHQAAgDAAAAQgchShCgdQAAAAgBAAQA1A2gBBIQgugzgegEQgBAAgDAAQA2AZAMAmQAxALAygLQAHgWAjgeQgCAAgCAAQgVAKgYAZQgIgrAjg5QgBAAgBAA").f("#244914").p("AgXA5Qgcg7gwAEQAeAEAuAz").p("AAUAtQAVhHAngaQgsAIgQBWQAAAAAAAD").p("ABkANQgdgBgQAkQAYgZAVgK").p("AhKhFQBCAdAcBSQgEhahagV").f();
	this.shape_5.setTransform(-1761.8,25,1,1,0,0,0,-1761.9,25);

	this.shape_6 = new Shape();
	this.shape_6.graphics.f("#2f601a").p("AAMBFQgOhLA9hoQgCAAgBAAQhEAwglB9QAAgEAAgBQgTg3gdgpIAACSQA9AGA8gPQAMgmA+g3QgCAAgDAAQgmASgrAt").f("#244914").p("ABdAGQgzgCgeBBQArgtAmgS").p("AhhhKIAAAkQAdApATA3QgEhSgsgy").p("AgxA/QAlh9BEgwQhOAOgbCaQAAABAAAE").f();
	this.shape_6.setTransform(-1809.5,209.5,1,1,0,0,0,-1809.5,209.5);

	this.shape_7 = new Shape();
	this.shape_7.graphics.f("#2f601a").p("AEujKQiSBlhNEMQAAgHAAgFQhvk1j5huQgDAAgFgDQDMDLgDEVQiwi+hwgUQgIACgHAAQDNBfAtCRQC8AtC9gtQAZhTCDhzQgFAAgFAAQhRAmhcBfQggiiCEjcQgEAAgDAA").f("#244914").p("ABPCnQBNkMCShlQinAfg4FGQAAAFAAAH").p("ADRC0QBchfBRgmQhugFg/CK").p("Al4ADQBwAUCwC+Qhsjii0AQ").p("AkZkIQD5BuBvE1QgVlYlThL").f();
	this.shape_7.setTransform(-1774.8,195.2,1,1,0,0,0,-1774.8,195.2);

	this.instance = new lib.imagecopy();
	this.instance.setTransform(-606.9,0.7,1.519,1.678,0,0,0,367.1,-83.9);

	this.addChild(this.instance,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new Container();
p.constructor = lib.nature_tree;
p.nominalBounds = new Rectangle(-1814.4,-119.6,2453,578.2);

(lib.OST1L_area2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#ffffff").p("EBQAgMfMif/AAAIAAY/MCf/AAAIAA4/").f();
	this.shape.setTransform(512,80);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.OST1L_area2;
p.nominalBounds = new Rectangle(0,0,1024,160);

(lib.PANEL2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);


	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(0).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.boxHighlight();
	this.instance.setTransform(-2.9,-0.1);
	this.instance._off = true;

	this.timeline.addTween(Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 2
	this.shape = new Shape();
	this.shape.graphics.f("#1a1811").p("AAXhDIhVAAIAAB5IAbAAIAAgyIAyAAIAAgUIgyAAIAAgcIA6AAIAAgX").p("AAkAUIAAAwIAPAAIAAgwIALAAIAAgKIgLAAIAAgEQAAgDACgCQABgBAEAAQABAAABAAQACAAABAAIAAgLQgCAAgCAAQgCAAgCAAQgGAAgFACQgEACgCAEQgCADAAAFIAAAFIgKAAIAAAKIAKAA").f();
	this.shape.setTransform(107.6,195.6);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#11caff").p("AF7AAIhUg0IAAAgIqgAAIAAArIKgAAIAAAeIBUg1").f();
	this.shape_1.setTransform(153.2,85.7);

	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#11caff").p("AkmAWIKhAAIAAgrIqhAAIAAgfIhTA0IBTA1IAAgf").f();
	this.shape_2.setTransform(59.2,173.1);

	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#1a1811").p("AA7gHIBWAAIAAgSIhWAAIAAAS").p("AhPAAQgIAAgHADQgGADgEAIQgDAGgBAJQABAJADAGQAEAHAGAEQAHAEAIAAQAKAAAHgFQAHgEADgLIgNAAQgCAEgCACQgEACgFAAQgGAAgEgDQgEgEAAgHIAqAAQAAgHgCgGQgCgGgDgFQgDgFgFgDQgGgBgIAA").p("AhbASQACgDACgCQADgCAFAAQAGAAADADQADACAAAHIgZAAQAAgCABgD").p("AgSAAQgJAAgFADQgGAEgCAHQgEAHAAAHQAAAIAEAIQACAHAGADQAFAFAKAAQAFAAAFgCQAEgCADgFIAAAIIAOAAIAAhPIgPAAIAAAcQgDgEgFgCQgEgBgFAA").p("AgCAUQACAEAAAFQAAAFgCAEQAAAEgDACQgEADgFAAQgFAAgDgDQgDgDgCgDQAAgEAAgFQAAgFAAgEQACgEADgDQADgCAFAAQAFAAAEACQADADAAAE").p("AA7AdIBWAAIAAgSIhWAAIAAAS").p("AiigVIAABPIARAAIAAhPIgRAA").p("Ah1gIIAAgNIgQAAIAAANIAQAA").p("AiFAAIAAA6IAQAAIAAg6IgQAA").p("AjPABQgFACgCAFIgBAAIAAgIIgPAAIAABOIAQAAIAAgbQADADAEADQAFACAFAAQAIAAAGgEQAGgEADgHQACgHAAgIQAAgIgCgHQgDgHgGgEQgGgDgIAAQgGAAgEAB").p("AjWAUQACgEADgDQADgCAFAAQAFAAADACQADADABAEQACAEAAAFQAAAFgCAEQgBAEgDACQgDADgFAAQgFAAgDgDQgDgCgCgEQgBgEABgFQgBgFABgE").p("AkTABQgFACgCAFIAAAAIAAgIIgPAAIAABOIAPAAIAAgbQADADAFADQAEACAFAAQAJAAAGgEQAGgEACgHQADgHAAgIQAAgIgDgHQgCgHgGgEQgGgDgJAAQgFAAgFAB").p("AkAAUQABAEAAAFQAAAFgBAEQgBAEgDACQgEADgFAAQgFAAgDgDQgDgCgBgEQgBgEAAgFQAAgFABgEQABgEADgDQADgCAFAAQAFAAAEACQADADABAE").p("AGxhNIAABSIAAAAIg0hSIgaAAIAAB5IAZAAIAAhQIAzBQIAbAAIAAh5IgZAA").p("AEhhKIhSAAIAAAWIA5AAQgRAVgLAZQgKAYgCAaIAaAAQAAgLADgOQACgOAFgNQAFgOAHgLQAIgMAJgIIAAgV").p("AlPAAQgHAAgFAAQgHACgDAEQgFAFAAAHIAPAAQABgFADgCQADgCAEAAQADAAACABQACAAACACQABACABADQgBADgDABQgCACgEAAQgFABgFAAQgFABgEABQgFACgCAEQgDAEAAAGQAAAGACADQADAFAEABQAFACAFAAQAGAAAFgBQAFgCAEgEQAAACAAABQAAABABACIAQAAQgBgCgBgEQAAgDAAgFIAAgdQAAgFgCgEQgDgDgDgCQgEgBgFAAQgEAAgEAA").p("AlFAdIAAAGQAAABgBADQgBACAAACQgCADgDABQgCACgFAAQgDAAgDgCQgDgBAAgFQAAgEADgCQADgBADgBQAEgBADgBQAEAAADgC").p("Al7gaIgzAAIAAgcIA7AAIAAgXIhWAAIAAB5IAbAAIAAgxIAzAAIAAgV").f();
	this.shape_3.setTransform(110.8,61.7);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 1
	this.instance_1 = new lib.box1();
	this.instance_1.setTransform(-2,-2);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_1}]}).wait(2));

}).prototype = p = new MovieClip();

p.constructor = lib.PANEL2;
p.nominalBounds = new Rectangle(-2,-2,216,248);

(lib.PANEL3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);


	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(0).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.boxHighlight();
	this.instance.setTransform(-2.9,-0.1);
	this.instance._off = true;

	this.timeline.addTween(Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 2
	this.shape = new Shape();
	this.shape.graphics.f("#1a1811").p("AHgAFIgzhSIgaAAIAAB6IAZAAIAAhRIAyBRIAcAAIAAh6IgZAAIAABSIgBAA").p("AALgHIBXAAIAAgSIhXAAIAAAS").p("AhCAAQgIAAgFADQgHAEgCAHQgDAHAAAHQAAAJADAHQACAGAHAFQAFAEAJAAQAGAAAEgCQAEgCAEgFIAAAIIAPAAIAAhPIgRAAIAAAcQgCgEgFgCQgFgBgFAA").p("AgxAUQACAEAAAFQAAAFgCAEQgBAEgDADQgDACgGAAQgEAAgDgCQgDgDgCgEQgBgEAAgFQAAgFABgEQACgEADgDQACgCAFAAQAGAAADACQADADABAE").p("AhxACQgGgCgHAAQgIAAgIADQgGAEgEAHQgDAGgBAJQABAJADAHQAEAHAGADQAHAEAJAAQAKAAAHgEQAHgFADgKIgOAAQgBADgDACQgEACgFAAQgGAAgEgDQgDgEAAgHIApAAQABgHgCgGQgCgGgDgFQgEgFgFgC").p("Ah2AOQADADABAGIgZAAQAAgCAAgDQACgDADgCQACgCAFAAQAGAAADAD").p("AALAdIBXAAIAAgSIhXAAIAAAS").p("AikgVIgRAAIAAANIARAAIAAgN").p("Ai1AAIAAA6IARAAIAAg6IgRAA").p("AjRgVIAABPIAQAAIAAhPIgQAA").p("AkVAAIAABOIAPAAIAAgcQADAFAFACQAFACAFAAQAIAAAFgEQAHgFACgGQADgHAAgHQAAgJgDgHQgCgHgHgEQgFgDgJAAQgGAAgEABQgFACgCAFIAAAAIAAgIIgPAA").p("AjxANQAEADABAEQABAFAAAEQAAAFgBAEQgBAEgEADQgDACgFAAQgFAAgDgCQgDgDgBgEQgBgEAAgFQAAgFABgEQABgEADgDQADgCAFAAQAFAAADAC").p("AlCABQgFACgDAFIAAAAIAAgIIgPAAIAABOIAQAAIAAgcQADAFAEACQAFACAFAAQAIAAAGgEQAGgFACgGQADgHAAgHQAAgJgDgHQgCgHgGgEQgGgDgIAAQgGAAgEAB").p("AkuAdQAAAFgCAEQgBAEgDADQgDACgFAAQgFAAgDgCQgDgDgCgEQgBgEAAgFQAAgFABgEQACgEADgDQADgCAFAAQAFAAADACQADADABAEQACAFAAAE").p("AEohNQgNAAgKAGQgKAGgFANQgGAOAAAXQAAAXAGAOQAFANAKAGQAKAGANAAQAMAAAKgGQAKgGAFgNQAGgOAAgXQAAgXgGgOQgFgNgKgGQgKgGgMAA").p("AE5goQABAHABAGQABAIgBAEQABAGgBAHQgBAGgBAHQgCAHgEAEQgEAFgHAAQgIAAgEgFQgEgEgCgHQgBgHgBgGQAAgHAAgGQAAgEAAgIQABgGABgHQACgHAEgFQAEgFAIAAQAHAAAEAFQAEAFACAH").p("AC2g0QgIACgIAAIAAASIAeAAIAABNIAYAAIAAh3IgTAAQgCAJgFAFQgFAGgHAC").p("AmLAAQgGACgEAEQgEAFgBAHIAQAAQAAgFADgCQADgCAEAAQADAAACABQADAAABACQABACABADQgBADgCACQgDABgEAAQgEABgFABQgFAAgFACQgEABgDAEQgDADAAAHQAAAGADAEQADADAEACQAFACAFAAQAFAAAFgBQAFgCAFgEQAAACAAABQAAABAAACIAQAAQgBgDAAgDQAAgDAAgEIAAgeQAAgFgDgDQgCgEgEgBQgEgCgEAAQgFAAgDAAQgHAAgGAA").p("Al1AeIAAAFQAAACgBACQAAACgBACQgBACgDACQgDACgEAAQgEAAgCgCQgEgCAAgEQAAgEADgCQADgBADgBQAFgBADAAQADgBADgB").p("AmjhNIhVAAIAAB6IAbAAIAAgyIAzAAIAAgVIgzAAIAAgcIA6AAIAAgX").f();
	this.shape.setTransform(114.3,61.8);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#1a1811").p("AAXhDIhVAAIAAB5IAbAAIAAgyIAyAAIAAgUIgyAAIAAgcIA6AAIAAgX").p("AAkAUIAAAwIAPAAIAAgwIALAAIAAgKIgLAAIAAgEQAAgDACgCQABgBAEAAQABAAABAAQACAAABAAIAAgLQgCAAgCAAQgCAAgCAAQgGAAgFACQgEACgCAEQgCADAAAFIAAAFIgKAAIAAAKIAKAA").f();
	this.shape_1.setTransform(107.6,195.6);

	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#11caff").p("AEng0IAAAgIqgAAIAAArIKgAAIAAAeIBUg1IhUg0").f();
	this.shape_2.setTransform(153.2,85.7);

	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#11caff").p("Akmg0IhTA0IBTA1IAAgfIKhAAIAAgrIqhAAIAAgf").f();
	this.shape_3.setTransform(59.2,173.1);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 1
	this.instance_1 = new lib.box1();
	this.instance_1.setTransform(-2,-2);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_1}]}).wait(2));

}).prototype = p = new MovieClip();

p.constructor = lib.PANEL3;
p.nominalBounds = new Rectangle(-2,-2,216,248);

(lib.PANEL4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);


	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(0).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.boxHighlight();
	this.instance.setTransform(-2.9,-0.1);
	this.instance._off = true;

	this.timeline.addTween(Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 2
	this.shape = new Shape();
	this.shape.graphics.f("#1a1811").p("AH6hNIgZAAIAABRIgBAAIgzhRIgaAAIAAB5IAZAAIAAhQIAyBQIAcAAIAAh5").p("AALgHIBXAAIAAgSIhXAAIAAAS").p("AhxABQgGgCgHAAQgIAAgIAEQgGADgEAHQgDAHgBAJQABAJADAGQAEAHAGAEQAHAEAJAAQAKAAAHgEQAHgFADgLIgOAAQgBAEgDACQgEACgFAAQgGAAgEgEQgDgDAAgHIApAAQABgHgCgGQgCgHgDgEQgEgFgFgD").p("Ah/AKQAGAAADADQADADABAHIgZAAQAAgDAAgCQACgEADgBQACgDAFAA").p("AhYANQgDAHAAAIQAAAIADAHQACAHAHAFQAFAEAJAAQAGAAAEgCQAEgCAEgFIAAAIIAPAAIAAhPIgRAAIAAAcQgCgEgFgDQgFgBgFAAQgIAAgFAEQgHAEgCAG").p("AhFANQACgDAFAAQAGAAADADQADACABAEQACAFAAAEQAAAFgCAFQgBAEgDACQgDADgGAAQgEAAgDgDQgDgDgCgDQgBgFAAgFQAAgEABgFQACgEADgC").p("AALAdIBXAAIAAgTIhXAAIAAAT").p("AjRgVIAABPIAQAAIAAhPIgQAA").p("Ai1gIIARAAIAAgNIgRAAIAAAN").p("Ai1AAIAAA6IARAAIAAg6IgRAA").p("Ak4gBQgGAAgEABQgFADgDAFIAAAAIAAgIIgPAAIAABOIAQAAIAAgcQADAFAEACQAFACAFAAQAIAAAGgEQAGgFACgGQADgHAAgIQAAgIgDgHQgCgHgGgEQgGgEgIAA").p("Ak0ANQADADABAEQACAEAAAFQAAAEgCAFQgBAEgDACQgDADgFAAQgFAAgDgDQgDgCgCgEQgBgFAAgEQAAgFABgEQACgFADgCQADgDAFAAQAFAAADAD").p("AkGAAIgPAAIAABOIAPAAIAAgcQADAFAFACQAFACAFAAQAIAAAFgEQAHgFACgGQADgHAAgIQAAgIgDgHQgCgHgHgEQgFgEgJAAQgGAAgEABQgFADgCAFIAAAAIAAgI").p("AkBANQADgDAFAAQAFAAADADQAEADABAEQABAEAAAFQAAAEgBAFQgBAEgEACQgDADgFAAQgFAAgDgDQgDgCgBgEQgBgFAAgEQAAgFABgEQABgFADgC").p("AFNhKIhCAAIgMBCIAWAAQADgFAEgDQAEgCAHAAQAHAAAEADQAFADACAFQADAFAAAGQAAAGgDAFQgCAFgFADQgEAEgHAAQgIAAgFgFQgFgFgBgIIgZAAQABAMAGAJQAGAIAJAFQAKAEANAAQAMAAAKgGQAKgFAGgKQAGgKAAgMQAAgLgEgJQgEgJgJgGQgIgFgMAAQgHAAgGACQgGACgFAFIAAAAIAFgbIAxAAIAAgU").p("ADJhKQgCAJgFAFQgFAFgHACQgIADgIgBIAAATIAeAAIAABMIAYAAIAAh2IgTAA").p("AmjhNIhVAAIAAB5IAbAAIAAgxIAzAAIAAgVIgzAAIAAgcIA6AAIAAgX").p("AmVAGQgEAEgBAIIAQAAQAAgFADgCQADgCAEAAQADAAACAAQADABABACQABABABAEQgBADgCABQgDACgEAAQgEAAgFABQgFABgFABQgEACgDAEQgDADAAAHQAAAGADADQADAEAEACQAFACAFAAQAFAAAFgBQAFgCAFgEQAAABAAACQAAABAAACIAQAAQgBgDAAgDQAAgEAAgEIAAgdQAAgGgDgDQgCgDgEgCQgEgBgEAAQgFgBgDAAQgHAAgGABQgGACgEAE").p("Al1AjQAAABgBADQAAACgBACQgBACgDACQgDABgEAAQgEAAgCgBQgEgCAAgEQAAgEADgCQADgCADAAQAFgBADgBQADAAADgCIAAAG").f();
	this.shape.setTransform(113,59.5);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#1a1811").p("AAXhDIhVAAIAAB5IAbAAIAAgyIAyAAIAAgUIgyAAIAAgcIA6AAIAAgX").p("AAkAUIAAAwIAPAAIAAgwIALAAIAAgKIgLAAIAAgEQAAgDACgCQABgBAEAAQABAAABAAQACAAABAAIAAgLQgCAAgCAAQgCAAgCAAQgGAAgFACQgEACgCAEQgCADAAAFIAAAFIgKAAIAAAKIAKAA").f();
	this.shape_1.setTransform(107.6,195.6);

	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#11caff").p("AEngUIqgAAIAAArIKgAAIAAAeIBUg1IhUg0IAAAg").f();
	this.shape_2.setTransform(153.2,85.7);

	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#11caff").p("Al5AAIBTA1IAAgfIKhAAIAAgrIqhAAIAAgfIhTA0").f();
	this.shape_3.setTransform(59.2,173.1);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

	// Layer 1
	this.instance_1 = new lib.box1();
	this.instance_1.setTransform(-2,-2);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_1}]}).wait(2));

}).prototype = p = new MovieClip();

p.constructor = lib.PANEL4;
p.nominalBounds = new Rectangle(-2,-2,216,248);

(lib.patch0201 = function() {
	this.initialize();

	// Layer 4
	this.shape = new Shape();
	this.shape.graphics.f("#563823").p("EA/3gsFQAAgZgEgCQgEgCAAgDQhrgEhHCOQgBADgCADQgIANgFAQQgOAhgKAjQgMArAAANQAAAdAMALQABACAEABQAAAJABAHQgBADAAACQAAAGAAAHQAAgBACADQAAAEABADQAGAbAWARQAAABABABQAHANAIAOQAOAaAMASQAEAZAIAXQAAABABABQAbBPA6AJQAYA0AjAAQAaAAAHgIQAEgEADgFQAEAEAAgqQAAgcglgeQgCgCgCgCQAAAAABgCQAEAEAAgqQAAgMgzhRQgCgDgBgDQAHgJANgYQgzhMAAgrQAAgHAGg7QAGgQAIgQQAwhoAAgw").p("EAx+gmvQgSA3AAA1QAAAeADAIQAFAQAQAKQggAdgcAkQABADABACQAAABABgBQAKgBAOAkIArgDQATgbAVgIQAUgHAfAEQAPgGANgEQBKhYBAg8IgKgLQAagVABgMIAAgGQgBgTgDgCQgFgCAAgDQg2gCg0AZQACgRAEgVQAig5ADgGQAVgnAAgVQAAgZgEgCQgFgCAAgDQgEAAgEAAQAig5AAgNQAAgPgCgLQACgFAAgFQAAgZgEgCQgFgCAAgDQg0gUhlCAQgnAygcAyQgcAyAAAUQAAASABAK").p("EAtQgggQg6AngyAeQgWAagRATQgMAUgMAUQg/BugqB2QgCAFgCAFQhlBogFCTQgiBOAAAbQAAAwADAMQAIAhAgAUQAIgCAPgGQAEgCAEgBQAPAOAWAHQAtBIAvA8QCbDIByAAQAQAAAKgGQAXAJAWAFQAIARALAQQAqA/BCAAQAPAAAKgNQADgDAFgIQARAYAjAAQAZAAANgLIANgKQgKgdgUgWQgHgHgHgHQgEgDgDgCQgHgFgHgEQAOgWAAguQAAhggehMQgEgKgFgKIAFgGQgFgIgEgIQACACACACQAkAzAUAAQAZAAALgHIAKgGQAEAEABgeIAAAAQAAgFAAgHQAAgbg2hmQg1hmhAhfQg+hbgpgoQgBgCgBgDQABgHAAgDQABgHAAgfQAAgGAOiuQAKgFALgGQAIgEAIgFQAJANAPAKIgBgEQgMgQgKgcQgBgCgBgBQhIgIgWhwQgXgXgLgwQgEgQgCgQQgUAPgZAR").p("EAtagXsQgFgGgEgGQACgCACgDQACAEADADIAAAK").p("EAvzgQkQAXAcAAAGQAAAPgCAHQgLgSgMgSQABgFABgP").p("Egs8gG6QAEgIAEgJQAXggAcguQAOgWAIgQQADgDADgDQgBABgCAAQANgXAAgEQAAgIgCgBIgCABQgZAcgZAiQgfAegfAwQgIALgLANQAAAAgBABQgsAogmBKIgRgIQgIAIgKAMQgjAtgDACQgHAHgNALQgLANgKAOQASgPAXgVQABAAAAgBQgXAXgeAcQgqA5gqA2QAbgbAkglQgOATgPAWQgSAJgTASQgGAGgFAIQAVgWAYgQQgqA8gxBLQgKAhgOAxQACAAACgBIACgBQAIgXAYgoQACAAADgBQgCgBgBAAQADgHAFgHQAXghAagmQAXgiATgbQAegqAWgeQgBADgBACQgIAMgHAKQgyBBhBBqQgoBBgaAwQgEAMgDAMQguCmgBACQgVAwgzAfQgcA6gqBeQgrBhgUBFIgiBOQgFAIhUBzQhQBtgHARQgBACgBACQgFAFgFAFIhSBVQAPgmAFgZIgOgGQgRAiggBHQggBJgDAlIALgBQARgfAdhBIAHABQBLhGAwgtQBahXAXgzQAHgRABgFQABgFABgIQAcgtAagyQABgCACgDQgBAdAHARQgCAJgBAJQgVBWghBTIgFAMQgEAKgFAKQgBACAAABQgNAZhWB9QgBACgBABQgPAOgSAKQAAABgzAeQgIAEgFAFQgfARgFADQgMAIgJAJQgFADgDACQABgFgCgCIgEAAQgZgCg4BEQgGAIgGAHQggAJgnBYQgQAjgGATQAGgjAMgqQAhhkAKgtIgOgFQgKARgKAXQAEgRADgSQAHgNAIgMQABAQALAJIAKgDQACgfAQgxQABgEACgEQg/BVgpBbQgdBCgHBUQADAKAFAHIADgBQgBAlAJAMIACAAQABADABABQAHABAFgDIAEgEQAAgEABgEQACAIADAFQAIAAAFgDIAEgDQABgOAEgRIAAABQAJgIAFgGQADgGAIgTQAJgSABgFQADgJgBgLIgMgFQAAgBABgBIAIAAQAQgbAxg7IAAAAQAMgJAOgKQAEACAFACQAHgCAKgFQAEgCAEgBQAAABABAAIADgCIAMAFQAFgDAFgDQgcAcgHAQQgHAOACACQABACACgCQARgFBghNQBmhRAMgcQADgHABgEQAUgSAQgXQAMgOALgOQACgCACgEIALAEQAhgsAnhYQAjhPAShQQALgjAEgaIgDgBQAAgCAAgCQACgJABgJQAOgsAJgwQALg3AAgnIAFACQAFgDACgDQACgCAEgKQALgZAHggQAFgPAFgSIABAAQgDAKgBAGIAGAAQAGgLAKgUQABgCAAgCQABgDABgCQAEgHADgJQAHgKAFgKQAAAAABABQgFAjACAUQAEACABgBQADgCADgHQADgHADgHQgBATADAFIAFgCQAHghAEgRQAGgeACgWIgHgDQADgNACgKIACgCQgBgDABgFQADgPACgNIAlhSQABAAABgBQABgDACgBQgDAFgCAFQgJAUACAMIAGAAQAmhSAUgZQARgXAXg1IAcg+IgCgFIgDAAQAKgRAPgXQARgcAMgTIACAAIAJgSQAJgNAKgSQAFgHAEgIQgNBTgbB5IAJAAQACgFABgFQAIgTAGgSQgDAQgEASQgDAFgEAIIBhAAQAIgwAAgXQAAgJAAgHIAEAAQAFgbAXh8QAThnAAgKQAAgHgBgBQgBABgCgCQgKAPgPBCQgEAJgFASQAEgXABgOQAIgVAJgZQAOgkAJgcQABAAAAgBIAAgBQAJgaAFgSQAEgGADgHQAfhCAAgGQAAgHgCgB").p("EgtZgGpQgDAGgEAIQABgEAAgDQADgEADgD").p("EguBgE5QACgCAAgDQAAADgBACIgBAA").p("Egv/gCrQgJAUgIATQgHAJgGAKQAcg/ATglQAAACAAABQAAABgBADQgHAPgJAU").p("EgvtgC1IACgFIABAAQgCADgBAC").p("Egu6gCtQgBAEgCAEQgBADgBACQABgCAAgDQADgHADgJQgBAFgBAD").p("EgwUgCzQABgCAAgBQABgBAAgCQACgBACgDQgEAGgCAE").p("EgwagCkIABACQgBACgBABQgDAIgEAJQAEgNAEgJ").p("EgxbgAqQgLAKgLAOQgKAPgPAWIgBgDIgBgBQAIgOAHgMQAqhQAVgkQAFgKAKgNQgYA3gJAVQgGAQgFAQ").p("Egx3AASQgbApgKAYQgBACgBABIAAgCQgJAJgMAUIAGgNQALgUALgRQAPgXARgW").p("EgxmABGQgGAMgHANQAAgBAAAAIALgYIACAA").p("EguyAAGQAAAAAAgBIAAAAQAAABAAAA").p("EgvTAAQQAAAEgBADQgEAFgEAMQAFgeAFgUQAAAMgBAO").p("EgvUgASQACgHABgHQAAAIgBAJIgCgD").p("EgyaABcQgHANgEAJQgDAJAAACQgBABADAEIgdBAQgFACgGADIAxhsIADAB").p("EgzLACEQgWApgIARQgIASgFAPQAJgfAJghQAPgYAVghQAJgPAIgOQgGAOgHAQQgHANgIAQ").p("EgzEAD2QABgCABgCQgBACgBACIAAAA").p("Eg0XAF4QACgLgEgPIADgBQADABACABQgDAMgDAN").p("Eg0gAGUQgIASgMAbQgFAMgEAIQABgFACgGQAHgXAFgTQABgBABgCQAIgMAFgHQAAAFgBAF").p("Eg2GAI5QgDAHgjC9QgGAdgGAbQgUA+gdBEIAKAFQgFAKgDAMQgYBEgPAeQgHAMgJAPIAAAAIgMgGIAcg/QATglAMghQACgGACgFQAMgcADgLQALgkAmi4IgNgGQgKAPgPAjQgFALgOA5QAAgPABgSQABgCADgSQAehBA7iEQAAAHAAAGIAAAA").p("Eg2DAIlQABgBAAgBQAAABAAABQAAAAgBAA").p("EgvQgFcQgSAYgVAcQAVgVAZgcIgHgD").p("EgyygAqQATgWASgNQgOAGgRAOQgCAGgEAJ").f("#24100f").p("EA3ggoXQgsADgOAvQgGATAAA/IAAAGQAAACAAACQAAAOAAALQgXAbgWAgQgiAygbA3QAEACAAAZQAAAYghAkQACAPAIAHQAHAGAYAIQANgKAVgYIAAAAQAUgQAjgzQAQgUATgYQAMARARAJQAIgCAPgGQAAAAABgBQAGAGAGADQAJgDARgLQAMgHAFAAIAAhCQAWAJAUAKQBKgYAsgVQA3BPBEAAQAaAAAKgMQADgDAEgGQgBgBAAgBQgIgXgEgZQgMgSgOgaQgBAAAAgBQgIgMgHgKIABgEQgBgBAAgBQgWgRgGgbQgBgDAAgEQgCgDAAABQAAgHAAgGQg5hXg3gNQgEAFgEADQgJgLgNgIQgigVgwALQgQAEgNAGQgNgLgRgIQgUAMgLAb").p("EAwogj9QAAhNgTAFQgDABgDACQgBgEAAgBQgLAAgMACIAAAAQgTgGgLgFQhAAmgTAOQgBAAgBgBQgCADgBACQAcgBAeAAQgLALiPBxQgGAagoASQgJADgIADQgOAMgQAMQgHAGgIAFQgLARgPAVQAIgBAJgDQBxgbAnAHQgtBGilBTQgNAGgMAGQACASAJAHQABAAAeAKQAQgNAqgvQARgTAWgaQAygeA6gnQAZgRAUgPQACAQAEAQQALAwAXAXQAWBwBIAIQgHgMgDgRQAAg5AAgDQAAgTAHgnIgFADQgPgGgEgMQgBgFgBgPIAAgYQAAgDAAgFIAAgCQAAgDAAgDQgFgKgDgLQgJgdAAgRQAAgUAIgrQAJgqAAgYIAeAAQAQAPAMANQADgIAEgDQABgGAAgF").p("EAr4ggcQguAEg1AZQgPAHgMAFQgEAGgDAEQgDAFgDADQBhgoAmgPIAEgE").p("EAiTAPwQgfAbgoA/QgZApgdA2QhYClgoA1Qg9BNABCMQAAAlAABJQAAAKAAAKQgEAwgOAkQgFA7g0EyQgIAqgIAwQhAFwAAAmQAAADAHBLQANBKAlAAQANAAADgEQACgFAAAAQADgBAAgWQAAgNgShBQgRhAAAgCQAAgRAjhpQAihpAAgLQAAgYAEg9QADgkAEgxQABgGABgHQACgYABgWQALhnAEgVQAbhsANhFQAUhpADhHQAGh0AKg3QABgEAAgEQAPhKAfg7QAMgWAOgUQAjgwBJiWQARgkANgdQACgEACgDQAjhMAAgLQAAgNgCAAQgCgBAAgC").f("#d1b794").p("EA02gjMQgFgCAAgCQgUgDgYAGQgNAEgPAGQgfgEgUAHQgVAIgTAbIgrADQgOgkgKABQgBABAAgBQgBgCgBgDQgFgKgDgJQgQghgJAEQgEADgDAIQgMgNgQgPIgeAAQAAAYgJAqQgIArAAAUQAAARAJAdQADALAFAKQAAADAAADIAAACQAAAFAAADIAAAYQABAPABAFQAEAMAPAGIAFgDQgHAnAAATQAAADAAA5QADARAHAMQABABABACQAKAcAMAQIABAEIAGAXQAPA4ARAvQAFAOAGANQAAABAAAAQArCgBGAZQAqBJA4AAQAaAAAGgGIAHgGQADADABgfQAGgCAEgFQAHgJARgdQgdgPgegiQgihEgTgqQhNimAAiIQAAgLAZhBQARgqAGgYQAEgDAGgFQAcgXATgUQAhgkAAgYQAAgZgEgC").p("ArkwcQAIANBAAEQAIgCAGgIQADgEAEgLQgbgHgVgEIgtgBIAAAU").p("A+TxAQAJANAdAGQAJgEAFgHQAEgFAEgLQgOgGgLgEQgSAEgRACIAAAM").p("AMgvYQgNAAgCAAQAAAOAKAJQAFAFAGACQARgIAEgNQgNgIgOgB").p("ARWsaQAAATAAAHQACAJADAHQgpgDgIADQgGACgjApIAIAMQATgDAXgRQABAMABAFQABAMAGAIIANAAQgCAJgCAAQgBABAAAaQAAAZACACQgYgFgbgDQgrgEgKAFQAAATACAHQABAMAGAIIB7AAIANgMIgEgNQgLgFgNgFQAOgCAJgHQAEgDABgEQAAgmgNgNIgRAAQAJgIADgLQABgGAAgNQgNgIgPgBQAAABgBgBQAIgHATgQQABABABABQA4gIAZgLQAMgEAGgHQACAIADAFIAWAAQANgMAAgaQgOgJgOgBQgNACgCAAQAAAQABAIQg5gLgXgBQgSgBgHAG").p("APFpwIgGgNQgegSgWgDQgUgDgRAHQAAAHAEALQAEAMAAAEIAPAEQAUAEAbAAQAaAAACgGQACgDgFgD").p("AOtojQgBACAAAbQAAAaAEADQACACACgEIAWAAQAIgIACgLQACgHAAgOQgMgNgcAAIgBgD").p("ASIpfQAAATACAHQABAMAGAIIAVAAQAKgIAEgLQABgGAAgNQgOgIgPgBQgNABgDAA").p("APdqTQgNABgCAAQAAANALAJQAFAFAFACQARgIAEgNQgNgIgOgB").p("APvokQACAIADAGQgBAAAAABQgEAGAAATQAAAcADACQADACAQACIARgIQAAAAAAgBQAIAGAJADQARgIAEgNQgDgGgVgWQgCgCgCgDQADgSgEgPQgPAFgKAFQgHgGgHgEIgJAN").p("ARvneQgNgIgPgBQgMABgDAAQAAANAMAJQAFAFAFACQARgIAEgN").p("AS+q0QAFAHAMAFQAAAIAAAUQAAAGAAAFQAAATABAHQACAMAGAIIAUAAQAJgIADgLQACgGAAgNQAAgZgCgLQgCgKgDgIQADgEAEgKQgZgLgRgCQAAAAgSAAIAAAW").p("AS+ovQAAAYAIAZQADAIACAFQgTAQgIASQgFANACAKQAAABAAABIgPADIgFAZQAAAHAHAMQAGANAAAGIAtgEIAFgZQgBgBAAgCQAAAAABgCQAAgLAFgsQAAgHAAgGIAPAAIAOgMIAAhcIgngEQgFgDgFAAQgLAAAAAa").p("ATpkSIgNgKIgeACIAAAxIgJAAIAAgpIgPgKIgeACQAAAbACALQACATAFAJQATgDAKgHIAAACQgBAPAAAbQAAANAAAIQgCAAgCgBQgNABgDAAQAAANAMAKQAFAFAFACQADgBACgCQABACAAABIAWAAQAKgKABgFQACgFAAgfIAEAAQAKgKABgGQACgGAAggIAAgm").p("ATThyQgDgLgFgGIgcAEIgBAAQgBAFAAAbQAAAaABABQABABAGAEQARgDAJgGQAAACAAAAQAAAeADADIASAIQARgJAFgNQAAgZgCgLQgDgTgJgIIgZAA").p("AT1A+QgNgUgigQQgigQgcAAQAKAhAOAOQASATAyAPQARgIAFgOQgBgBgBgCQADAFAFAEQARAQAeAAQAaAAAGgHQACgDgCgDIgFgNQgcgRgdgFQgXgDgJAEQAAAKAEAI").p("ARGkjQABABAGAGQATgEAKgIQAEgEABgEQAAgmgNgNIgZAAQgCAJgCAAQgBACAAAaQAAAaACAB").p("AQIk0QgogDgTAPQgSANgPApIATAJQAcgLAUgZQAHgKALgSQAAAIAAALQAAAdAKAPQAJAKATAIQARgJAEgNIAAhCIgmgEQgJAAgFAA").p("APbmFIgcAFIgBAAQgBAFAAAbQAAAaAAABQACABAGADQATgCAKgIQAEgDABgEQAAgmgMgN").p("ARNi2IgmgFQgOAJgFAZQgCAPAAApQAAAlACANQAEAUAPAPIARgJQACgRASgkQASgjAAgWQAAgZgIgMQgJgMAAgC").p("AMzkHQADAaAUAVQAPAPAiATQARgJAEgNQgRgcgegRQgZgOgVAA").p("AOoiAQgNABgDAAQAAATACAHQABAMAGAJIAVAAQAKgJADgKQACgHAAgNQgPgIgOgB").p("AOEg/QgOgBgIgBIAAhCIgmgFQgMABgDADQgGAFAAAbQAAAJAIAQQAKASAQAQQgBAEAAAFQAAAFASAbQATAdALALQAJgKABgGQACgGAAgeQAAgfgCgGQAAgEgKgK").p("AMZAjQgYgLgRgBQgOAAgEAAIAAAVQAIANAeAEQAJgDAEgHQAFgFADgL").p("AMiAoIAAAVQAIANAeAEQAJgDAFgHQADgFAEgKQgYgMgRgBQgOAAgEAA").p("AQjASQAIAbAIAMQAOAVAZANQARgIAEgOQgKgOgPgPQgUgWgXgOIgIAO").p("AR4CfIAAAVQAIANAeAEQAKgDAFgGQACgCAGgPIgPgMQgPgDgPACQgMABgEAA").p("ARTCjQgMAAgDAAQAAANAMAKQAFAFAFACQARgJAEgNQgNgIgPAA").p("AQnC0QARgJAEgMQgWgbgZgYIgZAEIgFAaQACACAEAKQAMANAmAR").p("ASIE+QAJANAeAFQALgDAFgHQAEgFADgLQgZgLgRgCQgBAAgTAAIAAAV").p("AN3ClQAAAdAAAFQACAEAGAHIAegEQAFgzAjg0IgPgMQguARgMAZQgFAJAAAX").p("AMqCbQAAAAAAgBQgKgGgKgCQgMgDgJgBQgOAAgFAAIAAAIQgJgEgJgBQgNABgCAAQAAATAAAIQACALAGAJIAWAAQAIgJACgKQABgCAAgBQALAGAUADQAJgDAEgGQAEgFAEgLIAAAA").p("AMzEyQAAAaAEACQACACACgFQAegEANgZQAHgNABgNQgTgbgWATQgSASAAAU").p("AN/GtQgNgIgPgBQgMABgDAAQAAASACAIQABALAGAJIAVAAQAJgJADgKQABgHAAgM").p("APOG2IAAAhQBHAwABABQAVgNAAgXQgMgkgfgIQgHgCgSAAIAAAAQgEgsgPgUQgOgVgaAAQgIAdASAbQAHAMARAR").p("AMKF9IgXgDQgFgEgFgBQgLgCAAAaQAAAaAKAAQAIAAAlgCQAIgDAFgHQAFgFADgLQgIgIgYgG").p("ANSH5QgMABgDAAQAAAGACAGQgCAGAAAJQAAAaAFAAQACAAACgFIAmAAIANgPIAAgZQgQgDgLgCQgIgDgKgB").p("AU+CrQgOgIgOAAQgNAAgCAAQAAAUABAGQACAMAFAJIAWAAQAIgJADgKQACgHAAgN").p("AMqJIQgYgLgRgCQgBAAgSAAIAAAWQAJAMAeAEQAIgDAFgGQAFgGADgK").p("AOhJ7QgYgLgRgCQgBAAgRAAIAAAVQAIANAeAFQAOgFAHgV").p("Ameu6QgNAAgFAAIAAAVQAIANAeAEQASgFAEgUQgZgLgRgC").p("AkPurQAHANAAAGQAWAAAOgGQAHgDAEgEIgNgZQgSgJgOABQgLABgEAHQAAAGAGAN").p("AkewCQgYgLgRgCQgOAAgEAAIAAAVQAIANAeAEQAKgDAEgGQAEgFADgL").p("AgkvyQAEgFADgLQgXgLgSgCQgOAAgEAAIAAAVQAIANAeAEQAJgDAFgG").p("AsNv+IgXgEQgFgEgGgBQgHgBgDAOIAAAAQAAACAAACQAAAEAAADQAAAaAKAAQAIAAAlgDQAJgCAFgHQADgFAEgLQgIgIgYgF").p("AqcutQgFgEgGgBQgKgCAAAaQAAAaAKAAQAIAAAngDQALgEAGgIIACgNQgHgIgZgFIgXgE").p("AsgwkQgQgLgjAJQgkAKgGARQAIANA3AAQAVgQAJgW").p("An7uOQAGAFAFACQARgIAEgNQgNgIgOgBQgNAAgCAAQAAAOAKAJ").p("AhctkQgKAEgFAEQAAAYA5AFQAJgDAFgGQAEgFADgLQgIgIgZgFIgYgEQAAACgGAD").p("AqxiBQAAADAAADQAEAAAEAAQgEgDgEgD").p("AGJwiIgDAcQAAAMAIANIAoAAIALgNQgCgIgJgLQgNgNgGgIIgaAA").p("AGzuOQAGAFAGACQAQgIAFgNQgNgIgPgBQgNAAgEAAQAAAOAMAJ").p("AgCupQgOAAgEAAIAAAVQAIANAeAEQAJgDAEgGQAEgFADgLQgYgLgQgC").p("ACZwPQARgKAHgLQgPgJgPgBQgMABgDAAQAAAMALALQAFAFAFAC").p("ACzuyQgLgCAAAaQAAAaAKAAQAJAAAkgDQAJgCAFgHQAEgFAEgLQgIgIgZgFIgWgEQgFgEgGgB").p("AE5sjQgNgJgPgBQgNACgCAAQAAANALAJQAGAFAFACQAQgIAFgN").p("AAptdQgLgCAAAaQAAAaAKABQAIAAAlgBQAPgIAHgUQgJgIgYgFIgWgEQgGgEgFgB").p("AJ+tYQgNgIgPgBQgNAAgCAAQAAAOALAJQAGAFAFACQARgIAEgN").p("AHptDQgQgCgPABQgNABgFAAIAAAYQAJAKAfAHQAKgFAFgGQADgFAEgKIgNgP").p("AKEnnQgMABgCAAQAAANAKAJQAFAFAFACQAUgIACgNQgNgIgPgB").p("A6CwvQgBgBAAAZQAAATACAGQgOAAgFAAIAAAVQAJANAfAEQAJgCAFgHQAEgFAEgLQgVgJgQgDQABAAAAgBQAPAAASgPQAPgNAFgKIgNgPQgQgDgOACQgLABgCAAQgCAFgDgB").p("A8Yw3QgFgEgFgBQgLgCAAAaQAAAaAKABQAIABAlgDQAJgCAFgIQADgEAFgLQgIgJgZgGIgXgE").p("A7lvTQgcgRgdgFQgXgEgJAEQAAASAPAOQARAPAeAAQAaAAAGgGIAAgHIgFgM").p("AzcvtIgXgEQgGgEgFgBQgLgCAAAaQAAAaAKAAQAIAAAmgDQAJgDAEgGQAEgFAEgLQgIgIgYgF").p("AzEuPQgBABAAAaQAAAaABABQABABAHAEQATgDAJgHIAGgHQAAgmgNgNIgZAAQgCAJgCAA").p("AwZv0QgDgBgDgBQgLgCAAAaQAAAaAKAAQAIAAAmgDQAJgDAEgGQAEgFAEgLQgGgGgOgEIABAAQAPgNAEgLIgNgNQgQgDgNACQgLABgCAAIgFAaQAAABAAAA").p("AvUvOQACALAGAJIAVAAQAJgIACgLQACgGAAgNQgNgIgPgBQgMAAgDAAQAAAUABAH").p("AuQuqQgLABgCAAIgFAaQAAAMAJANQAPAAASgOQAQgNAEgLIgPgNQgQgDgNAC").p("A4RwzIgXgEQgFgEgFgBQgLgCAAAaQAAAaAKABQAIABAlgDQAJgCAFgIQADgEAFgLQgIgJgZgG").p("A45ucQgFgEgFgBQgLgCAAAaQAAACAAAAIAAAVQAJANAdAEQAJgCAFgHQADgDABgFQAJgCAEgHQAEgFAEgLQgIgIgZgFIgXgE").p("A3yvvQAGANAAAGQAqAAAYgGQAMgDADgEQgBgIgIgJIgIgIQgngMgRABQgOAAgHALQAAAGAHAN").p("A2xu6QAUgIACgNQgOgIgOgBQgNAAgCAAQAAAOALAJQAFAFAFAC").p("A0VwkIgRACIgFAcQAAAMAJANQAQAAAYgOQAZgOADgKQgIgJgYgFIgXgD").p("A1qw3QgGgEgFgBQgLgCAAAaQAAAaAKABQAIABAmgDQANgEAIgVQgIgJgYgGIgXgE").p("A07usQACALAGAJIAVAAQAJgIACgLQACgGAAgNQgNgIgPgBQgMAAgDAAQAAAUABAH").p("A1CtUIgXgEQgGgEgFgBQgHgBgCAKQgOAAgFAAIAAAVQAGAJAOAFQADAHAEAAQAIAAAmgBQAPgIAGgUQgIgIgYgF").p("Azns/QAGAKAaAFQAYAFAiAAQAZAAAAgJQgFgNADgGQg6gLgdgCQgVAAgFAAIAAAV").p("AwusyQAXgRAHgVQgvgDgeAcQAGAIAVAEQALABAJAA").p("AtkCaQhEgTgbALQgIADgbAfQAJANAeAEQAxgMAVgLQARgJAEgL").p("AKoilIAAAVQALANAeAEQAJgDAFgHQAEgFADgLQgYgLgRgBQgPAAgGAA").p("AHlj/IgNgMIgeACIAABXIAJANIAVAAQAKgKABgFQACgFAAgfIAAgn").p("AF0ihQAAANALAKQAFAFAFACQATgJADgNQgNgIgPgBQgMABgDAA").p("AF3gMIgPAAQgDAIgBAAQgBACAAAZQAAAaACACQAAACAHAEQASgDAKgHQAFgEABgDQAAgWgFgOQAUgIACgNQgNgIgPgBQgMABgDAAQAAAHADAG").p("AKCg8QgKAGgCAIQACAGAIAUQAHASAAAGIAogDQAEgNAAgnQgIgIgRgFIgQgEQAAACgIAG").p("AFFmFQgCAJgBAAQAAACAAAaQAAAaAAABQABABAHADQASgCAKgIQAFgDABgEQAAgmgNgNIgaAA").p("AC3mSQgNABgCAAQAAANALAJQAGAFAFACQARgIAEgNQgOgIgOgB").p("ACRjYQgPgDgPABQgNACgEAAIAAAVQAJANAeAEQAKgDAFgHQABgCAHgOIgPgM").p("AA8g/QgQgDgOABQgLACgBAAIgFAZQAAANAJANQAPAAAQgPQAQgNAEgLIgNgM").p("AEMBeQgNABgCAAQAAATACAHQABAMAGAJIAVAAQAJgJADgKQABgHAAgNQgOgIgOgB").p("AEGEFIAVAAQAJgHADgLQABgHAAgNQgOgJgOgBQgNABgCAAQAAAUACAHQACANAFAH").p("AFqE4QAGANAAAGQAWAAAPgGQAHgEADgDQgCgHgGgKIgFgIQgRgJgPABQgLABgEAHQAAAGAHAN").p("ACdCyQAQgNAEgLIgNgMQgRgDgOABQgLACgCAAIgFAaQAAAMAIANQAPAAATgP").p("AB/GMQgFgMABgGQg4gKgdgDQgBAAgYAAIAAAVQALARBOAAQAaAAgBgH").p("AB0InQABAMAGAIIAaACQAKABAJAAQACAVAIAAQAJAAAkgCQAJgEAFgGQAEgFAEgLQgFgFgMgEQgBgGABgEQhlgdgMAEQAAAUABAI").p("AFSILQAAAOALAKQAGAFAFACQARgIAEgPQgOgHgOgBQgBAAgOAA").p("AFlF7QABAMAGAIIAVAAQAIgIAEgLQABgHAAgMQgNgIgPgBQgNABgCAAQAAASACAI").p("AIlF+IgEAaQAAANAIAMIAmAAIANgMQgDgKgOgPQANgHAEgLQgOgIgOgBQgMAAgCAAQAAAHACAGIgPAA").p("AGGH1QAAANAEAOQACAGACAFIAZgBQABAVAEAAQACAAACgFQAagCASgPIABAAIAAgBQAGgEAEgHQALgOAEgOQANgLgKgCQgJgBgTAIQgVAHgMAIQgSgEgNgBQgBAAgWAA").p("AHvIxQgSAOAAAVQAAAbAEACQACABACgEQAegEANgZQAHgMABgOQgUgXgVAR").p("ALmFpQgNgIgOgBQgNABgCAAQAAANAKAJQAFAFAGACQARgJAEgM").p("ALLILQgBAAgOAAQAAAOAKAKQAFAFAGACQARgIAEgPQgNgHgOgB").p("AmOgMIAAAWQAGAIAbAFQAZAEAhAAQAaAAgBgJQgFgLABgGQg4gLgegCQgCAAgYAA").p("Ai7AsQgxANgYAVQAIANAeAEQA6gTAEgCQANgGAyghQgogEgyAN").p("ApJBIQAAAaAEAAQACgBACgGQAtgJAUgKQAQgJAEgKQgpgGgRABQgjACAAAW").p("AprCwQgPAAgEAAIAAADQgBABgBgBQgNABgCAAQAAATABAHQABAMAGAJIAXAAQAIgHADgJQAHACAIABQAJgDAFgHQADgFAEgLQgYgKgSgC").p("ArcCfQgegigegGQgSgDggAJQATAPAcASQAYAPAFADQATgDAJgHIAGgH").p("ArWD5QgMACgCAAQAAARABAIQACAMAFAJIAVAAQANgNAAgZQgNgKgPAA").p("AraExQgKgCAAAaQAAAbAEgCQACAAACgGIB1AFQAJgEAFgGQADgFAEgLQgIgIg7gGIg6gDQgFgEgGgB").p("AlfBSQgLgCAAAaQAAAaAKAAQAIAAAlgDQAKgDAEgHQAEgFADgLQgIgIgXgFIgYgEQgFgDgFgB").p("AkUGsQAEgFADgLQgIgIg6gGIg5gDQgFgEgGgBQgMgCAAAaQAAAbAEgCQACAAACgGIB1AFQAJgEAFgG").p("Al9FhIAJAMQAQAAAagOQAYgOAEgKQgWgCgWAIQgVAGgOAO").p("AheF3QAFAFAFACQARgJAFgMQgOgIgPgBQgNABgBAAQAAANALAJ").p("AhyGtQgIgIgZgFIgYgEQgFgEgFgBQgLgCAAAaQAAAaAKAAQAIAAAlgDQAJgDAGgGQADgFAFgL").p("Ag+ITQgvAAggAbQAFAIAVADQALACAKAAQAZgRAHgX").p("AhYJhQAIANBAAEQAPgFAFgUQgsgKgZgDQgCAAgVAAIAAAV").p("Ag+LUQAiAAAVgGQAJgEACgDQgCgIgJgJIgJgIQgVgIgSgBQgOABgCAAQAAASABAIQABAMAHAI").p("ALmJZQhYgMg7AlQAMARA/AAQAcAAAWgQQASgNAEgN").p("AGGK2QAIANBBAEQAJgDAFgGQAEgFAEgLQgugKgagDQgBAAgWAAIAAAV").p("AEbKSQgOAFggAfIAIANQAhgEAggVQAcgYAJgGQgxAAgPAG").p("ADqKDQgMAAgCAAQAAANAKAKQAFAFAFACQARgJAFgMQgOgIgOgB").p("ADkLUIgvgzIgcAFIgBgEQAAACAAAbQAAAFAGAGQAGAEANAIQgMgBgIgBQgCAAgUAAIAAAWQAIAMBAAFQAIgEAFgGQAEgFAEgLQgEgBgDgBQAFgFACgG").p("ABJJ7QgOgIgOgBQgMAAgDAAQAAAUABAHQACALAFAJIAWAAQAIgJADgKQACgGAAgN").lf(["rgba(116,103,99,0)","#24100f"],[0,1],205.9,184.8,103,-101.2).p("EAshgidQCPhxALgLQgeAAgcABQjQAKifCBQgwAnhbBdQhUBVgxAkQhPA7iFA9QgTAIhVAkQgGgFgHgFQhTg4jsALIAAAVQAmAVAxAYQBQAmAjAGIAAAAQh9A1g1AiQhLAxAAAvQAAAFAAAEQgfASg2ALQgiAIgxAHQiKgEidAAIAAAvIk9AAQgCgGgCgBQgEgBAAAbQAAAZAEABIAEABIGrANQg1AOhSAOIqLAAQgCgGgCgBQgEgBAAAbQAAAZAEACIAEABQBzACA+AEQAjACApAEIIYAFIgWAEItKAAQgKAFg1AJIgzAHIgaAaQAAAMAJANIAmAJQgUABhLAHQg+AGhYADQgHgFjVgKQjWgJgCgCQAOgSgQgQIr3gIIARgWQgHgVgqgRInWgEQg6AMh+AJQgaAZgrAWQg4AdgUANQiHASgbAGQgbAHAAAOQAAAVgRAEQgRAFAAAVQAAAaAEgBQACAAACgGIA7ADQBAADAaAAQALAABZgOQARgCASgEQAvgHBAgLQEHgrB6gRQACAOADgBQACAAACgGIBMACQABAWAEgBQACAAACgGID4AFQAAAFAAAFQAAAaAFgBQACAAACgGQBDAFCXAPQAHABAHABQAAAEAAAGQAAAaAEAAQACABACgGIBNABIAtABIDYACQAKgFFLgGQClgECjgCQAjgEDrgKQEpgODBgMQAFgEAIADQACAAAAgYQAAgbgHgCIgIADIiHgIIBdgFQGIgwC+g0QBrgeCHhDQB2gGAogIQAegFAEgLQgGgRgcgVQAGgEAIgHQCqhFDkigQCYhrBvhnQABAAACgBQAAAHABACQABAKAGAJIAVAAQAHgWALgaQARgHARgIQAMgGANgGQClhTAthGQgngHhxAbQgJADgIABQAPgVALgRQAIgFAHgGQAQgMAOgMQAIgDAJgDQAogSAGga").p("EAr0ggYQgmAPhhAoQADgDADgFQADgEAEgGQAMgFAPgHQA1gZAugEIgEAE").p("EAm0geRQAFgDAEgEQAAABABACQgFACgFAC").p("EAm9gdaQg2ArhIAvQg/AqhKArQAhgaAigfQAMgLBYhUQADgCACgDQAsgEAvgO").p("AcV7wIgIgEQAnAFAuAUIhNgV").p("EAhRgaWQgcAcgdAOQAQgRASgUQAggjAdgcQAIgEAGgDIAAAFQgaAjgaAZ").p("AXS1bIAbABQgPAEghAEQAKgEALgF").p("AtTyKIAGACQAIADgOABIAAgG").p("A0zz2IBzAAIgvAIIhEgI").p("AjUl5QgSAQgFAPIgRANQALAAAjgGQAfgEAigEQACgRgGgZQgagEgpAQ").p("ArLh/IgIgEQAAARAIANQAEAIANANICXAEQASAAAOgBQABABABAAQAhAAAjgGQgaACgbAAQhtAAhAgjQgFgEgFgEQgEAAgEAAQgSAAgIgE").f("#796553").p("EAwHgKiQgEgIgEgIIgGAAQgBAAAAgBIgBABIgWAAQgCAIgCACQgBADAAAgQAAAwAZBFQgDACgCABQADAEAGAEQAGAPAHAQQAAACABACQABAUACAGQAGAUATAQQAEAJAFAJQgDAjADAqQgiAAhAgNQgwgKgOAIIAAA8QAJAJALAIQgHAGgFAGQgDgTgKgUIgeAAQAGA1goBlQgpBmgRAqQgkAigwARQgUgCgjACQgjAEgkACQgGgCgGgEQgegTgNgHQgsgZAPA5QgmACg/ACIhgAEQgHgCgIgEIAAgDQABgPAAgPQAAgegMgEQgQgCgHgIIgeAAQgBAMgBAPQgDgZgFgWIgeAAQgDAZgBAiQgBAAAAAAQAAABABAAQAAADAAACQgIgUgRgVQgqgyg2AVQA0BTAICMQAAAeAAAiQAAAfAAAcQgBBKABAPQACBEASAwIAAAhQAGATAFAXQgJAwgCAUIAWAJIABANQgJAfgMAZQgWAuAAAaQAAAgAFgCQACAAADgHQBLgXASg2QADgIACgVIARgCQAFg8AAh/QAAhDgEgwQARhUAMheQAIg8ADg2IAeAAQACACADAAQABAGADgBQABAAACgEQBZAVCqAAQAoAAAfgUIAJAAQACgBADgBQA2gLBRg4QBghCAIg0QABAAAAgCQACgDABgEQAIgLADgHQAEgJACgMQAIgSAJgOQARgeAqhBQAHADAHACQArANAUAAQAfAAABgHIgFgIQAPhcAJg4QAAACABABIAKgFQADAOAAgZQAAgLgHgZQAEgkAEggQAdgBAbgRQgMAaAAAHQAAAQACABQACABABgDQAVgQAxhSQAKgQAIgPQgGAxgHAZIAMAFQAmgYACg0QgDg8AGgaQAGgbAehDQAFgNAFgMIAGAAQASgkAWggQAagmAZgWQACAKAFAHQAGAHARAOQANgXAFgLQAKgTAAgSQAAgQgGgMQgIgOgEgHQgaATgaAWQgKAAgNgBQAGgHAGgIQAAgEgBgDQAqgOAKgHQiDgGgVAjQgcAEgbAPQgfgHgPATQgMAPgBAUQgZAYgNAVQADACAEADQAHAHAHAHQALgUANgSQACABADABIAKgFQABgJAPgPQAIgHAHgLQAUgOAYgIQgKAPgHAUQgMAlgGBPQgCAbgCAWIgaAAQgFAhgaAiIAAAAQg/AXgVAAQgcAAgfgPQgfgPgKAAQgFAIgCAI").p("EAxJgJkQASACAQABQgGAGgHAGQgJAIgHAGQgOAJgLAHQgCgGgCgGQABgGABgFIAIAAQAKgKADgMIABAA").p("EA1igPDQAIgDAIgDQgDADgDADQgFAAgFAA").p("EA1vgOWQAHgKAIgLIATAAQgHAIgHAHQgbAcgOAXQAJgYAEgLQADgFAFgF").p("EA1XgOrQgDAEgDAEQABgEABgEIAEAA").p("AWhMLQg3gRhFAYQACgCADgDQAhgKAkgMQgWAAgWACQBKg3BuAAQAHAAAIAAQgbAGgZAQQgWAAgXAAQgHAAgCAAQgEACAAAQQAAAPADACQABABABgCQCOgBBQADQA3ArAiAdQAWAbAjAoQAAABAAAAQgBACgBAAQAAACAAAQQAAAsARBBQAFAVAIAfQAAAGAAAHQAAAPAFBAQACASADAcQAAABAAAAQgBgBgBgBIgPAAQgDATgDAdQAeAUAaArQAOAaAIAYQAdhOAuhHQANgRAMgPQBuiSAAgxQAAgQgDgBIgEACQhMBShcCNQgUAWgWAjIgBAAQAShOAAgSQAAgUgBgEQgBgEgFgGIgNAAQAEgVAGgdQAEgVADgPQACAJABAHQASgCACgIQgGgSgOgYQAAgQgBgJQgBgSgFgPIgDAAQAAgJAAgJQAAgeg6hHQgIgJgHgJQACgCABgEQgLgXgHgLQgOgTgcgLQgKgEgNgDQgNgKgOgKQAHgEACgGQgEhAhOgIQgWgCg3AFQixg5ifCDIAEAEQAIADAOABQgMAIgKAKQgBABgCABQgdASghAgQgmAngWAkQgPATgDAQQgfArAAAPQAAARAEAFQADACAQABQAIgDAEgMQABgEACgFQAVgOAZgcQAiglAQgOQATgQAZgNQgIARAAAMIANAFQABgBAUgiQAFgIAFgIQBAgZBcgMIAFgP").p("AT2MoQgbAOgcATQgWAPgUAQQADgGAEgHQAEgHAHgJQAFgFAGgFQAZgRA0gUQgFAGgEAG").p("AUCMGQAGgDAGgDQAJgFAKgFQgFAFgEAFQgLADgLAD").p("AZPKaQAHAAAHAAQBHAAAKAWQADAFABAPQAAAJABAGQgLgIgMgIQgNgJgOgHQABAAABABQADAEACAJQAGAJAQAJIgDADQgMgEgsgZQgkgUgWgBQA+ADAUAIQgWgMgWgJ").p("Ac3O6IgCAAQgCgFgCgGQADAFADADIAAAD").p("AddSSQgFAWgIAiIAAgIQAAgBAAgBQAAgXAAgVIANgC").p("AMmNoQi5gChlgBIABgCQiFgijSAzQhCARhkAgQhxAkgbAIQANAUBcAAQAEAAC+gsQABAZALAAQAHAAAGgGQAGgFAFgEQAFAEAIAFIBOACQABABACAAQACAAABgBIEPAHQABAFABAAQACAAABgEQB7ANBUAYQANAHANAGQAEAEAFAFQAKAHAcAYQA7A1AWBDQASgCACgIQAAgbgHgWQAGAHAHAIQAYAZAPARQAAADAAAEQAAAXAJALQAGAIAPALQASA8AjAWIAPgPQgJgTgFgjQABAAAAgBQgBgBAAAAQgBgHgBgGQACgDABgDQgBgBgDgEQgBgDAAgDQgGhEgFggQgIg5gVgVQgVg4gXgcQABgBABgBQgMgGgJgRQgJgQgPgHQghgShjgJIgVgW").p("AMSOxQgRgEgTgEQAFADAHAEQgegBgrgBQgCAAgBgBQAKgEAGgFQA9ABAtADQACABABABIAAAIQgKAAgPgB").p("AOBPbQAKAFAKAEQAEAHADAGQgKgKgMgIQgDgCgCgC").p("APJRHQgGgEgGgFQADgBABgDQgCgJgDgHQAIAMAIANQgCABgBAD").p("AKgOdQgTgCgVgCQAUAAATAAQAAACABAC").p("AJiOcQgDADgDACIkLAAQgZACgJAHQgUABgBAAQgMAAgPABQAMgDAPgCQBVgOD4AAQgCABgDAC").p("AL8PHQAIAAAKAAIgNACQgDgBgCgB").p("EAj9AOHQgBgDgBAAIgEACQgJACgJAEQABgJAHgJQgHACgHACQgBgDgBgBIgEACQgVAGgTAdQgNAPgLAVQgPAegJAfQgnAOgMAyQgBACgBAIQAog/AfgbQAAACACABQACAAAAANQAAALgjBMQAAgBAAAAQgBAGgBAHQgBgDgBgCQgNAdgRAkQhJCWgjAwQgOAUgMAWQABgBACgCQAGgIAHgLQgVArgUA4QgMAigLAkQABgDAAgDQgKA3gGB0QgDBHgUBpQgNBFgbBsQgEAVgLBnQANguAQhBIAGAAQAUhZARhRQAHgfAGgbQABALABAIIANAAQAZiAAMg+QALg9AFgyIAKgBQgHAWgCAkQgDA4ALA9QgKBGAAAKQAAAUAAAFQACAHADAGIANAAQAMgpAIg2QAHg1AAgsQAAgVgBgHQgBgIgDgJQAAgFABgFQAPgmALghQABgDABgCQADgFADgFQgBgBgBAAQACgGACgGQAIgQAJgQQAAgBABgBQAAgBAAgBQAMgKANgkQBLiNAAgaQAAgRgBgDQgCgBgDgEQAQghAAgDQAAgQgDgBIgEACQgEADgEADQACgGACgHQAHgaANgnQAOgnAUgzQAMghAKgYQAPgSATgTQAZgcAYgZQAZgPAigVQBng/AAgmQAAgQgDgCIgEADQgeAHhkBKQg6AqgaAd").p("EAhDAUCQgOATgOAaQgQAYgPAeQADgPADgNQAXgoAbghQgOAGgOAMQAiguATglQgKAfgLAlQgBAAAAgB").p("Af1YUQAAABAAABQgHAHgGAKQAFgOAKgXQgCALAAAH").p("AdabeQgwA8gSC4QgIBQgBB9QA0kyAFg7QAOgkAEgw").p("EAc6AjfQgEAxgDAkQAJgqAAgdQAAgLgCgD").p("Egk8AAeQgMBNgDBEQgHDYBmAuQANAGACgFQAAgFACgDQApBMA/AcQANAHACgFQAAgHACgDQh+hzgZhzQgGgggDg6QgCg3gHgaIgPgFQABgCAAAAQgBgCgGAOQgCAEAEAyQAGBAAPA6QAQBBAXAwQhQhyAHiFQACgTAHg5IAAAAIAAgBQACgPADgTQAJg9gDgmIgSgIQgCADgEAJQgEAIgJA4").p("A7oIJQgeAtguArQABgCABgCQAHgQABgDIgEgIIgQgHQgaAngvAlQAAgFgCgGIgQgIQgfArg0AoQg8Agg9AXQgcAIgbAJQgWAFgXAFQABADACAEQhVAmgjAPQg9AOgxAOQgEAAgEAAQgWgJg7AEQghACgpAFQABADACACQgFACgCACQABAEAEAFQgHAAgHABQhmALgrAVQg3gGhJAVQhLAWhEAoIAJAKQBdgeAwgQQA0gRAtgHQgDAEgBAEQgHAOACABQACAAACgDQCEgHBJgGQCHgKAjggQgHgEgIgEQAEAAAEgCQADADAEACQAegFA6gUQADAAAEgCQAdgGAXgHQBfAACQhJQCyhBAag7QABgDABgCQAbgVAYgUQBHg8ARgoQAEgJgBgWQgBgVgEgLIgQgHQgMAhgSAe").p("EgrLgHEQACgbAAgcQAAgfgHABQgEAAgEAHQgsgFgdCBQgWBlAABaQAAAsACAQQABAZAHAUIAKAAQABAJABACQABADAHAGIAegEQABAJAAAHQgIApgOA8QgJApgHAgIAgAAQAEgTAFgXQAKgoAGgeQADAEACACIAUgKQAFgeAAhLQAAgfgBgRQgJAIgJAHIgLgFIgEADQgDgBAHgOQANgPAMgPQgCgIgEgJQAEgFAEgFIgagMQADgZABgJQAShjAvhOQgWgBgUAE").p("EgzUAPbIALgBQAEgHAFgGIAHABQAFgIAFgIQAPAFAQAAQgKAKgEAIQgBADgBACQgFAMAAADQgCACgCAEQgGAOAAABQAAABADADIARAFQAIgNATgMQAWgEA+gJQBHgKAXgOQgcgPgkgDQAigPACgCQgCgFgIgHQgDgEgDgCQgGAAgbAMQAigPASgKIgEgKQgLgCgTAFQAOgRATgXQAegnAOgMIgTgMQg8ALhQA3QAJgLAEgJQAAAAABgBQAEgFAEgEQAngaAygLQgTgOgVAAQAFgFAEgFQArgUA1gEQgogIgkAFQACgHgCgBIgEAAQg5gFhDBOQg2A+gkBSQgIASgBAFQgBAHAHAH").p("Eg35AKCQhfC9iBCiQgLASgCAFQgJATgBAFQgCAGABAHIALAFQBtiuAegwQAshIA2h6").p("Eg6rASTQgLgIgUAOQgRANgIASQgIAPABADIAIAJQAXgOALgIQARgMAHgQQAGgPgDAAQgCgBgEAC").p("EgpCAMyQgPgTgoAHQgkAHgGANQgGAOACADQABAAACgBQAKACAWAEQAEACAKAEQAMABASgCQAQACAUABQBeAKAPgFQgVgKg8gEQgKgBgJAAQAGgDAEAAQgTgPgQgIQABgCABAA").f("rgba(36,16,15,0.98)").p("Ai6neQgJgRgbAAQh7AAjMCaQg2AphSBFQg/A1gJAEQAZAOArAfQAEADAEADQAFAEAFAEQBAAjBtAAQAbAAAagCQDfgLC2hqQBUgyAyg6QAxg5AAgwQAAhHhJgUQhZgXigBOQgCgUgFgK").p("AjvmzIANAAQgEAHgOANQgQAOgJAAIgMgaIAqgI").p("AAvnNQgOALg/AtQg3AngRAQQgUACgTABQgiAEgfAEQgjAGgLAAIARgNQAFgPASgQQAZgXAygZQBhgxBXAJIAAAE").p("AAmleQAiguAagWQAAAXgcAjQgWAegKADIAAgX").p("AmvlaQgMAPgXAEIAqgkIAAgEQAEAIgLAN").f("#bd9662").p("EghOgJeQgogYg8gEQgHAAgIgBQAAABAAgBQhKgIhQAyQhAALhIBGQgiAigYAkQgWAiAAAQQAAAfAFgBIAFgIQAggOAnggQACAIACACQgCAEgBACQgeAcgfApQgsALgcAgQgbAggQBDQgIAhgMBDQgmBIgkBxIAiAAQANgaANgbQAlgnAag2IAAAAQAag/BChOQAognAZgaQAvgxATgdQAIgHAHgIQAAANACAAQACAAABgEQAXAAAjgKQAqgMAegUQgIgIg8AAQAGgMAOgFQAbAMAygmQAVgRAVgXQgQAhAAASQAAACAEAEQABABAMAHQAAAJAAAOQAABEBdB5QBPBmBKAzQgBAEAAAEQgCARAAAyQAAAhACAfIBTAAQAAhtACg5QgrAOADBQQABAPACAPQgIAFgGAFQgBgKAAgHQACgwAAgdQADgIACgIQAEgEABgFQAAAAgBgBQAFgOAEgMQgFgFgOgDIgOgCQgDAEgEAFQg/g8g6hTQANAMAPAMQA9A0AlAAQACAAACAAQAdATAgAUQARAUAWASQAGAFAFAFQgIgCgFAAIgFAPQARAOBwAnQgZgDgNgGQgGgGAAACQACAGgbANQAsAoAaAUIDBAGQAXAKAXALIBPAAQgUgKgRgIIAdABIARARIAvAAIAGgHIg3g8QhhgEhJgFIAAgBQgGgEgJgEQAFgCAAgEQgHgMACgIQiJgVhohXQhQhUgTgDIgGAJQAAAAgBgBQhAhOgwhIQAQguhJhIIAVAAQALgLACgJQACgJAAgmQAAgqgtgb").p("EgjYgIYQgUAOgaAWQgLAKgLAIQAGgGAFgHQgSgCgUACQAEgBACgCQAugdAfgYQAGAHAGAI").p("EghTgImQgbADgPAQQgBABgBAAIgIAAQACgGAAgEQgFACgGAFQgKgHgLgHQAAgNgEgCIgEACQgDACgFABQgLgGgLgGQAMgJAIgIQAugKAigEIAUAZQAAAOAAAL").p("EgivgHqIAAABQgBACgCACIgFgFQgDAAgEgBQAFgDACgEQAFAEADAE").p("EgivgGuQABgIAFgPQAAAKgBANIgFAA").p("EghPgH2QACAQADALQgGgFgGgGQADgHAEgJ").p("EgiOgGYQACABABAAQABAHABAHQgCgHgDgI").p("EghHgEIQgFgJgGgJQAIAKAKAJQgDAAgEgB").p("A28FqQgDgEgCgDQATAGANgFIACAAIgsgTIAFAMQgEgGgFgFQgCgCgCgDIhHggQASAWATAXQACAEADADQAHAUAXAmIgLAZQgFArAjBDQAsBVBVAxQAGAMAGAMQAQAhASAbIA1h2QghgjgjgrQgBgQABgPQgUgFgKgBQgIgKgHgKQgngygXgeQgEgHgFgGQgCgegGgPIgggPIgBAE").p("A1lI3QAAACABAEQgIgMgGgKQAEAEAEAGQACADADAD").p("AwdGmQAjAhAwAdQBdA6BjAVQAWAVATAOQBnBMCrAAQAfAAgCgJQgHgNADgIQhqgXhtgvQAUgBgBgIQgHgNADgIQiTgchhgqQAbAAgBgJQgHgNACgIQhug3hBgnQBMAYA2AAQAfAAgBgJQgHgNACgIQhPgPhugwIAACCQAJAGAIAF").p("A+jB/QgBAFAAAEQgDAFgWAwQADgWAEgTQAGgHAIgIQADgEACgCIgygXQgXA+gLA+QgUBpAcAvQgEBOANAeQAJAAAIgJQgFgQAEg5QADACAEACQAHAVAKARQALgBAFgGQgJgPgGgYIAAgBQgJghgEgxIAGgDQADgnARgyQAIgUAZg5QADgHACgFIgZgL").p("EgqcgDTIgggOQgJAKgJAKQgMAPgNAPQgHAOADABIAEgDIALAFQAJgHAJgIQAXgTAXgT").f();
	this.shape.setTransform(246.7,239.3);

	// Layer 1
	this.shape_1 = new Shape();
	this.shape_1.graphics.lf(["rgba(116,103,99,0)","#24100f"],[0,1],114.9,263.1,11.9,-23).p("EAkqgN8QgnBPgEAsIEuAWQA8hVBRkWQBSkWCRB+QCTB+CDAdQAwALAPgZQAEABAFAAQAFgFAEgEQAagQAThqQAAgkhHhjQhOhrgtASQAIAKAMATQANAQAUAMQgKAEgDAFQgEAFAAANQhqiaimgrQjRg1j8BBQj8BCmsDaQmtDcjSC0QhvBeh6BtQhpBXlXAuQhcANi6ASQipARhAAKQgoAGgyAdQgeAQg9AoQh7BNhtACQhwADjUgUQhugKh1gOQiyBfhsgzQhtgyiHASQjzAgoJgnQlqgajdAkQj6ApiLB9QgIASgbAVQgEADgLAJQgUARgsAmIgHBjICLAKQANgLA7gUQA3gTAIAAQA0AEAJA1QAGAigBBpQALD1DPC4QAwAqBZAYQAWAGCYAeQBxAWBHAeQBkArBGBIQADAEAEAEICmAAIAAB/QAdATAhAWQCzB2DcB+QIdE0CdAMQBhAHA2gMQAVgEA+gYQB1gvEUAFQD8AFAiilQALg1gNhNQgPhJgBgSQAHABAXgJQAXgJAcADQAgACARALQADACAWAUQAjAhBgAHQBRAGA3hgQAvhQAIhrQAEg6gog6QgagnhBg9QhEhDgWgcQgmg0AEguQAOhsgUidQgWinAFhAQAFhIArg2QAtg5A7AFQCVALA4FgQAdCxgDC0QAEBSAwBbQAcA2BMBpQBLBpAdA3QAxBbAEBSQAugLArghQAkgbABgJQAEg7gaiHQggingIicQgMkFgCgTQgNiZgkhgQBZAhCUCyQAmAvBFBWQA5BFAdAXQBYBDCIBvQBnBWAFABQA9AEA2hMQAtg/ADgrQAEhBk5k5Qh+h/hyhjQh2hngqgTIADgoIFAAXQBXAtA1BBQAkAsAnBRQAsBZAZAjQAwBDBKAsICzANQABgFADgEQAGgKAMABQg5gqghg/QglhEAEhDQABgCAPhLQAPhJAIhgQA8AHAkAcQAYATAZAnQAbAqANAOQAcAaAsADQA/AEAJgSQAEgJAAgTQgBggACgKQAFhIhNg3Qg5ghgtgbQgrgMgggjQhthMg0hmQhIiLARjXQABgaAYguQAXguACgTQAIALAIAPQAXAvANBdQAJBIAQClQATCQAlBJQAOAcATAVQACABADACQAdATApAZQARAFAUACQAoADAggyQAXglACgTQADgxijlpQg1hzg0hxQgehAgehAQAFg/A/gsQAyglAhACQAZACANAiQAIAUAOA2QAlBwB+ASQADATgkBI").p("EAykgVUQgBgBAAgCQAAACABAAIAAAB").p("EAzzgSvQgBADgBABQAAgBAAgDIACAA").lf(["rgba(116,103,99,0)","#24100f"],[0,1],6.9,413.2,29,109.9).p("Egi2ASoQAXA7BNB8IAzh0IiXhD").f();
	this.shape_1.setTransform(337.7,161.1);

	// Layer 2
	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#563823").p("EA4LgXPQhqiaimgrQjRg1j8BBQj8BCmsDaQmtDcjSC0QhvBeh6BtQhpBXlXAuQhdANi5ASQiqARhAAKQgoAGgzAdQgdAQg9AoQh7BNhsACQhwADjVgUQhtgKh1gOQiyBfhtgzQhsgyiHASQjzAgoJgnQlqgajdAkQj6ApiLB9QgIASgbAVQgEADgLAKQgUAQgsAmIgCAfQg6ArhFBVQh7CVAABdQAAAXAAAKQgoBTAAAiQAAAgAFgCIAFgHIAZAAQARgWARgZIAQAHQAsgwArhPQAFgJAEgIIAEgBQAAgCgBgDQAKgRAHgPIABAAQABAFACABQACABADgFQAKgFAKgGQBXgtA7gjQAsgaApgbQAaAJA6AAQAFAAASgRQADABACAAQAKAaAPAmQAfBMAMAYQAsCxCeCMQAwAqBZAYQAVAGCZAeQBxAWBHAeQBkArBGBIQADAEAEAEICmAAIAAB/QAdATAhAWQCzB2DcB+QIcE0CeAMQBhAHA2gMQAVgEA9gYQB2gvETAFQBRACA7gRQgCAIAAAGQAAAeABABQABACAIAEIAdADQAjACAfAAQBBAAAiheQAIgIADgEQAPgWAAhFQAAgKgBgLQABgLAAgGQAAgigMhDQgCgLgCgKQAYAHAjALQBdAeA7AYQAJgEAGgKQAAAFAAADQgoAZAAAYQAAAfAMgEQAHgCAGgIQAlgOBDggQA7gdAwgdQATgBAWgBIAngBQAVgBAYgBQAUAUASAcQARAUAnABIAPgPQgDgKgNgRQA8AyBKBRQAfAjAlAqQAeA2AyBYQgFASgLAZQgEAJgEAIQgMAVAAALQAAAIAAAGQAAADAAADQAAAfAFgBQACgBADgGQAYgHARgNIAEAAQBKg2APg1QAFgOABg1IAAgFQAAgDAAgDQAAgCAAgCIAAgFQAAgCAAgCQAAhXgahSQgfhkg4gCQgXgXgegXQASgKARgNQAkgbABgJQABgWgDggIALgFQAAgGABgGIATgDQAAgHABgJQATgJAFgPQAAgegCgNQgDgWgKgKIgGAAQABgZgBgcQAKAZAGAIQAUgKAFgPQgRhGgfidQgDgagEgWIgCAAQAAgBgBgBQgBgKgCgKQABg0AAhFQAAgVgBgVQAJgDAFgEQAGgEABgEQAAgJACgXQALgIAOgJQADAIADAKQAKAWAWAJQAEgEADgDQAXAUAZAVQA8BIAuApQAJAKAJAKQBeBdB0ATQBJAwBHAmQABgBACgBQABABABAAQA9AEA2hMQAtg/ADgrQACgWgjgyQAHgGADgIQgNglgMhEQgIgpgWgiIgeAAQgCAIgBAFQguhIhmhgQgUgYgVgVQANgJADgLQhTg/hJhfQAAgBAAAAIASAAQANAJAPAJQAtBNBbBVQBhBaBcAgQABABAAAAQgQgEgJAAIAAAZQBEAqBPAbQBWAfBIAAQAeAAgBgJQgHgOADgHQgYgEgYgFIAKABQABgFADgFQAGgKAMABQg5gpgihAQgkhEAEhDQABgCAPhKQAPhKAIhgQA8AHAkAcQAYATAZAnQAbArANAOQAcAaAsADQA/AEAIgSQAFgJAAgTQgBghABgJQAFhEhEg2QAEgBAEgCIARAGQApgSAPgfQAogYAJgCIAAgrQAzAXBAAAQAeAAgBgJQgHgNADgIQhegyg/g4QgVgnggg1Qg/hlgMgVQgCgIgBgJQgMhxgHg4QgFg2gPgtQAJgfAFgaQANANAPAOIAPgHQAAAJAAALQAAAmABAJQABAJAIALIACAAQgNAkgCAZIEuAWQA8hVBRkWQBSkWCRB+QCTB+CDAdQAwALAPgZQAEABAFAAQAFgFAEgEQACgBADgDQAXgWARhgQAAgkhHhjQgDgDgDgFQhJhigsARQAIAKAMATQANAQAUAMQgKAEgDAFQgEAFAAAN").p("EA4cgW1IAAABQgBgBgBgCQABACABAA").p("EA5pgUPIABAAQAAADgBABQAAgBAAgD").p("EAqLgRFQAWAVAYAgQgFAOgIATQgBgegCgIQgBgKgLgLIgeAAQgBADgBADQgLgbgNgbQARAMAUAIQAAABABAA").p("EAnmgUnQAXADANAhQAAABAAAAQgDABgEgBQgPgUgOgR").p("EAn1gRaQgDASgCAVQgEARgEASQACgMABgRQAGgygIgbQgGgBgEAAQADgEAEgFQAIAMAKANQgBAIgCAJ").p("EAkVgPaIgKAAQAOgeABgPQAJALAIAOIgUAAQgBAKgBAK").p("EAj/gLNQgBAVAAAeQAAAbABAPQgihzALibQACgaAXgtQgDA8AABrQAAA0ABAd").p("EAlJgMSQgCAAgCgBQgBgEAAgFQgHh1gGg9QAPArAJBCQAJBIAQClQATCQAlBJQAOAdATAUQACABADACQAdATApAZQAOAFAQABQAAAEAAADQgCACgBABQgOgIgNgIQgrgMgggjQhthMg1hmQgIgPgHgSQADAEAEADIAUgKQAAAAAAgCQACAHADAFQAWgDAKgJQAGgEACgEQgLhFgIh6QACgEACgF").p("EAqGgHUQAOAWAQARQgBAKgBAJQgHAEgIAFQgBgBgBgDQABgDAAgDQABgOgNgr").p("AOqiBQgDgCgEgBQgEgOgGgNQAJAOAIAQ").p("ALRjSQgBABAAABIgBAAQABgBABgB").p("AM4A6QAWgGAXgKQAbgMAVgIQAKAMAMAIQAAAEAAAFQAAAIAAALQAAALAAAMQgDgJgCgIIgeAAQgEAWgBAMQAAAKAAAmQAAAoAUBIQAAAHAAAfQAABABvDhQAFAIAEAJQAAAEAAAGQgLgbgOgVIgeAAIgDASQgBAAgBAKIAAACQAAABAAACQAAAGAAAJQAAAJAFAPQAMBAAXAzQApBWBUBDQAIgEAFgFQAGAGAGADQAKgBAJgDQAeAsAmA6QAjAzAgAoQgHgGgIgHQABAAAAgBQgBAAgCgBQgIgHgJgHIgHAKQgvgIgbgCIgPAAQiJgkhbAMQgoAGgaAQQAJgKAIgLQADgCAEgEIAVAJQBBgpAPglQAFgNAAg2QAAhFgshGQgUgigYgQQgyhBgihRQgGgOgMggIAKgJQgDgIgFgZIAIgHQgViHgKhEQgNhUgHhEQAPggALgk").p("ALJBJQgBARgCASQAAgEgBgGQAAgKgBgLQABgCAAgCIAEAA").p("AKPAvQACACACABIAAAeQgCgRgCgQ").p("AL3DtQgBAAgCAAQABgUABgUQABgGAAgGQAAANAAANQAAANAAAN").p("AWRD9QAAAAAAAAQAAAAAAgBQAAAAAAAB").p("Aa3hDQgHgHgHgGQABgBABgBQAGAIAGAH").p("AXWB/QgLAIgKAKQgCAAgDgBQgBgZgGgRQgBgFgCgFQARAQATAT").p("AWsKkIgIAAQgEAtgBBLQgQhjgHhgQAPAiAVAp").p("AUAOxQAAABAAAAQgBABAAAIQgGgRgHgQQAIAMAGAL").p("AThSEQgFgFgIgHIAYABQAPAHAMACQABABAAAAQADAOAEAPQgXgLgbgKQADgDABgE").p("ALuFRQAFAUAGAZQACAHABAHIAAAAQgBAGAAAFQgDgLgDgLIgIgWQABgNAAgN").p("AHfQbQAAAGAAAEIAAAAIAAAYQgDAFgDAFQgHANgHALQgIgugBgOQAGAAAXgI").p("AHXSmQABAAAAAAQAAACgBADQAAgCAAgD").p("AOqNPQgEAYgIAYQACgKAAgNQABAAAAgBQAAgBgBgBQABgIAAgKQAAgJAAgIQAFAHAEAG").p("AOPOnQABgCABgBQgBADgCACQABgBAAgB").p("AM5RBQACgBABgBQgBABAAABQgBAAgBAA").p("AMaRWQgRAOgJAQQgLgKgMgIQABgBAAgBQAaAAAWgK").p("A8+RIQAXA7BNB8IAzh0IiXhD").p("EgnoALQQABgCAAgCIgBAAQAAgTgEgLQgJgEgKgDQANATAKAZQABgBgBgC").p("EgrdAKsIAFACQABgHABgGQgEAFgDAG").p("EgraANyQABgIAAgHQgLgIgJgKQAHApAJAnQACAFABAGQgBgbABgf").p("Egk/APdQACAQAAARQARgHANgFQADgNABgMIgbgLQgFAHgEAI").p("EgkUASlQgWAyg0A3QBWhDAjhOQAPgiACgKQACgJgGgOIgEgCQAEgOACgGQACgJgGgOIgOgHQAIAsg0Bz").p("EguzAXvQABABAAACQABAAADAAQgDgCgCgB").p("EgxeAZKQg8gMj+A0QgJACgKACQA1gFBPgGQCNgLA8gW").p("Eg3+AV4QAAAEABADQgcAFgFAKQgHARgBAIQAGgDAFgCQAWgbAkgSQgOACgPAB").f("#ede6cd").p("EA5pgULQABgBAAgDIgBAAQAAADAAAB").p("EA7RgTlQAAgxgkhSQgmhXglgWQgDACgDABQADAFADADQBHBjAAAkQgRBggXAWQATAbASAAQAZAAAHgHIAGgGQAFAEAAgq").f("#ddcfa2").p("EA7IgSFQAAAAAAgBQhugUgtAdQgRAMgGASQglAIgRAQQgEAEgDAFQgLgBgHAIQgegigMgKQhEg2AABmIAAAMQAAAFABAEQgFgFgFgFQgYATgLAfQgIATAAAQQAAAIAHAgQAJAtAOAlQAuB2BOAAQAQAAAKgMQACgBADgGQACAAACgBQASADAXAAQAfAAAPgEQAWAEAkAAQA3AAANgEQAagIAAghQAAgOgCgHQABgBABgBQgJgKgKgLIABAAQgDgQgjgyQgmg2gmgnQgLgLgLgKQAAAAAAgBQARgOAMgNQAdgIAVgHQALAEAVAAQAZAAAOgEIAMgFQABgEAFgLQACgGAAgZQAAgZgEgGQgEgFAAgDQgIAAgJAB").f("#c19f71").p("Egn/AKnQgkg8gugJQgfgFgTAYQgGAJgFALQgOgNgMgGQgjgPgLA6QgBAGgBAHIgFgCIg5gZQgDAEgCAGIgFAPQgIAZgBAYQgHBOA6AaQAEAHAFAFQAJAKALAIQAAAHgBAIQgBAfABAbQAAA8AGArQgBAbADAZQAQBmBiArQADACACABQgNAMgOANQgKAYABAVQAAACAAABQgSANgSALQgDAAgDABQg2ALg2AdQgUALgNAJQgtAUgQAiQgLAbABASQADAtA6AbQCSBBC1jFQAdggAcgkQAigSAkgiQAPgNANgNQA0g3AWgyQA0hzgIgsQgHgjgwAPQgNAFgRAHQAAgRgCgQQgCgTgEgQQgPg7gjAZQgqAeg/CWQgJAWgLAVQgCgIgDgIQgFgMgEgKQATgNALgZQgBg6gBhDQgBhjACgxIgagLIAuAAQgGgQgDgLQgGgSgIgPQgKgZgNgT").p("EguyAXyQAAgCgBgBQgRgigugaQgCgCgDgBQgNgTgZgQQhCgshygOQh0gOheAZQgjAJgbAOQgkASgWAbQgFACgGADQiCAvglBVQgBABgIAPQgIASgCARQgEA0A8AbQB8gdCBgaQAKgCAJgCQD+g0A8AMQAGACAEACQARAHAjAUQAbAPAOAEQAmAJAchAQAVgugSgl").f();
	this.shape_2.setTransform(300.1,170.7);

	// Layer 3
	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#9b7417").p("EA1AgYuQhqiaingrQjQg1j9BBQh1AfibA/QARAzAABVQAAAjgKAZQgOAgghAUQgCAAgCgBQgDAIgBAGQASAGALAcQAHAUAOA2QAmBwB+ASQADATglBIQAAABAAABQgDgLgCgJIgeAAQgCARgBAVQgBAAgBAAQgFABgDAAQABglACgWQg3AYgFBAQgDAiAIApQAABhAEAdQAJBMAlBLQATgCALgIQAQAjAVAWQAgBVA1AHQAEAHAEAHQAMASANAOQgfAPhAAtQAUAHASADQghAXgZAgIAeAeQAZgDAqgoQAQgPAQgRQAPAAAVAAQApAAAXgFQAGANAFAIQAPAYAeAPQAZgMAAgcQgSgjgWgKQgFgFgFgFQADgEACgGQAFgPAAgPQgxgwhCgyQgZgjgDgFQgggqgegEQgPhIgUhhQgNg6gJgwIDoARQA7hVBRkWQBSkWCSB+QCSB+CDAdQAxALAPgZQAEABAFAAQAEgFAFgEQAagQAThqQAAgkhIhjQhNhrgtASQAHAKANATQAMAQAUAMQgKAEgDAFQgDAFAAAN").p("EA1PgYWQABACAAAAIAAABQAAgBgBgC").p("EA2fgVuQAAADgBABQAAgBgBgDIACAA").p("EAipgY/QhwA0h/BAQmsDcjTC0QhuBeh7BtQhoBXlXAuQhdANi5ASQiqARhAAKQgoAGgzAdQgdAQg8AoQh8BNhsACQhwADjVgUQhtgKh2gOQixBfhtgzQhsgyiIASQjyAgoKgnQlqgajdAkQj5ApiLB9QgJASgaAVQgFADgKAKQgTAQgpAiQhUAWhkBPQhCA1grA6QgsA8AAArQAAAgAFgCIAFgHQADgCACgCQgUAugPAwQAAAgAFACQADABACgFQAGgEAGgFQgBAFgCAGQgTBmAAAaQAAAJAAAIQAAACAAABQAAAKABAHQAAAKABAFQABAQAHAWIAggEQAAAEAAACQABAQAHAWIAjgFQAGglAQg5QAIACAKACQAegQAdgtQACgCABgDQABAAABgBIABACQAlgNAogrQA9gqAmgYQB+hOBvgfQALAIALAJIgFAdQAvCSA6BfQBVCIBoAaQA1A3A/AvQAWgDALgJIAHgIQgMgJgNgKQBsBACYAAQAUAAAGgEQA8ARAlAXQAFACAFAEQAHAKAHAKIEhAAIAADBQABABAAAAQAAADgBADIAAAYQBfBGDWBnQA2AbAuAUQAvAcAvAUQBQBrC/AmQAXAEAWADQACABACABQAjATAsARQAAAMABAIQgFgBgEgCQiWgug+AAQAvAdA0AvQAhAcA6A7IBFACQBLADAfAAQCDAAFcgvQC/gaBygaQAQABARAAQAAAOAGAMQgEADgDACQgzAcAggBQAKAPAjAFQARgJBcghQBDgbApgZQgCAPAAAJQAAABAAAAQgHAMgFANQgcBAAAAjQAAAgADADQADACATADIAUgKQAVhLAJglQABgDABgDQABgBACgBQAAAEAAADQAAAPABAHQgBALAAAKQAAAgADADQADACATADIAUgKQgDgeAQglQAJgDADAAQABgMABgMQAPgbAZgfQACgCACgDQAqgXBOgsQBHgpA3gYQAdAAA4gEIAAABQAGAEAgAAQAaAABNgEQA2BABfBRQAzAtAlAcQAEAYADATQgMAoAAAfQAAAZADAGQAAACAAABQgDAWAABlQAAAiABAFIAJAOIANAAQgCAEgBAGIAZAKQAWgWAWgoIABACQAWgEALgIQAGgFABgDQAAgHACgNIAXAAQALgmAihHQAhgsAJgaQAIgXABghQgBgNAAgMIAZAAQAKgWADgeQACgSAAgtQAAgQgBgQQAAAAABgBQADgigGglQACgCABgCQANgkgZgzQgPgegYgdQgWgvgfgcQALgSAIgVIAUgKQAChHAMirQAJiLACghQB+CBCpAAQAeAAAAgJQgDgIgBgGIALABQAAAaAFgBQADgBACgHIAxADQA3ACAfAAQATAAAegJQALAGAUADQA9gZAfglQAHgEAGgEQgDgBgCgBQAEgGAEgGQAPgOAJgYQAQgUAMgbQAZg6AAhHQAAgmgCgIQAAgBAAgCQAWgMAAgaQgBgBgDgDQALgDAGgGQAFgGACgJIAWABQABABABAAIABADQASAdA0AOQAUgKAFgPQgGgFgEgFQACAAADAAQAKAAAHgBQALALAMAKQAHgCAFgEQAOgDAJgGQACAMALAKQAGAFAGADQAUgKAFgPQgPgJgRgCQgHABgEgBQABgBABgBQAGgCAAgEQgHgOACgHQgBAAAAgBQgEgYgKgKIgZAAQgBhMgNg7QgRhMgshYIgUAAQAKgfALgeQAAgBABgBQACACABACQACAVAIAOQAEAHAQARQARgCAKgGQAdAXAcAMQACACABABQALAMAQAIQAMAVAJAJIAUgKIADAHQABACABgQQAHgDAFgGQADgFADgJQAJAKAIAKQAUgKAFgPQAAgDgBgEIABAAQAHAAAcgDQAEgBAQgIQAMgGAIAAIAFgeIAAiJQAHgDAFgGQAEgGAEgNQgKgDgKgCIAAgNIgtgFQAAADgIADQgCAAAAABQgEgBgEAAQgDAAgWgBQgSgagggXQg5gggtgcQgDAAgDgCQAAgBgBgCQAEADADACQASAFATACQApADAggyQAXglACgTQADgxiklpQg0hzg0hxQgehAgehAQAEg/A/gsQAZgSAVgJQAAgBAAgBQAAgSAHgbIAAAAQgIgNgHgjQgGghgMgOQgSgXgpgFQAFgMAGgL").p("EAhPgRmQAJALAHAPQAYAvAMBcIgQAAQgDAWgCAMQAAADAAADIgPAAQgDAWgCAQQAAAMAAAoQAAAmACAXIgCAHQAAAFAAAjQAAAjAZA7QglgwgLg7QgHggAAhnQAAgEAHhhQAEhJgGgkQgBABgBAAQAPgfABgP").p("EAiEgJQQANAbASAfQABAGABAEQgcgcgWggQAKgDAHgF").p("Ab9iSIAlgnQAkAsAmBRQAOAdAMAWQgmgqhMhJQgNgMgKgK").p("AcygCQgCgBgCgBQgFgGgGgGQAIAIAHAG").p("AbrA9QAtA2BEAvQBDBIBDA8QgBAVgEAaQhLhhivivIAIgI").p("AecAdQAMAVAJANQAkAyAyAlQgKgDgKgCQgngngcgYQgPgOgPgNQAGgHACgKQABgDABgG").p("EAj/gEFQAFAGAFAFQgGgCgFgCQAAgDABgE").p("EAjKgEsQgBACgCABQAAgCABgDQABABABAB").p("EAikABSQAAgGAAgGQACAKADAJQgDgDgCgE").p("EAnWgBbQgOgVgigaQAlADAQgHQgFAYAAARQAAAGAAAE").p("AK4gBQAAAAAAgBQAAABAAABQAAAAAAgB").p("AVSBuQAKANALAMQAmAvBGBWQA4BFAeAXQBXBDCIBwQAVARARANQgVgCgTgDQgCAAgBgBQhfg6gXgMQgTgLgRgJIAAgCQhShAg9hKQg3hCgghCIgbAAQABgDABgCQgRgHgNgEQgDgogCgYIALgL").p("AVSEdQAAgBAAgCQAGgfAIgaQAAAKAAASQAAAGARAkQAAABAAAAQgPgGgQgF").p("AVpGIQAwA2AZAXQAvAsAzAeIAAAOQgZgOgVgPQg+gsgsg9QgKgRgJgO").p("AVhH9QAAgBAAgCQABABABABQgBABgBAA").p("AZFI/QgDADgBAEQgKgGgKgFQALACANAC").p("ANiJUQgSg6gQg3QAtBcAYAaQADgCADgBQAdAvA0BIQBLBpAeA3QATAlANAkQghgbgkgNQABgBACgCQAHgHAAgOQgHgVgwgYIgogBQgGgFgGgDQADgGAEgKQhChegyhrQAMgIAEgL").p("AN2M6QgHgXgHgaQANAPAOAOQgCAAgBAAIAAAfIgVAAIALgL").p("ANdNEQgHgDgGAAQgMAAAAAeQgagEgbgCQgHhSgUgvQgRglgEgRQgJgkAAg+QAAgFAChAQADAJADAJQAVBGAhA+QAmB4ApA7IgGAA").p("APkR/QALAMAMAOQgegPgegLIAlAA").p("APcP9QARAAAJgCQAXAKASAMQAKAHAPANQgbAAgbABQgSgXgXgSQACAAABAA").p("AO2PAQhtgrg4gIQAAgCAAgBQA1gMA8AXQAlANArAeIgcAA").p("AQIPMQAfAZADAEQASgCAKgHQAcAXAXAfQAAACAAACQABAAABAAQAHAJAHALQABACABABQglgohygwQgBgCgCgDQAOgCAJgG").p("ATZPxQAIAPAHANQABAMAEAAQAAgBABgBQApBLAbAvQAIAOAKASIgHAAQgGCXgPBwQgDAJgCAJQgFAEgFAEQgBgLAAgHQgDgcgKgUIgeAAQgCAbgEAuQgGAGgGAGQgBgCAAgCQABgHABgIIACgBQAHgUgIgYQAAgPgBgBQgDABgDgBQgFgLgIgLIABgBQAIgxgng/QgPgag7hKIAEgLQABgFAAgiQAAgigGgOQALAIAKACQAKgEAGgHQAEgGAEgMQANAUARAeQABACABADQApBiAcALQAWgDALgJQAGgEABgEQgTgkgdg9QgghFgKgdQAEgHAVgK").p("AQ0RXQAAAiADAZQgJgggNgbIATAA").p("AUMMuQgPAxgIApQgFg0gPhMQgNhFgJhEIBFgKQAABaADBGQgEAMgDAN").p("AK2FkQAAACABACQgLAbgFAtQgDAeAABNQgKg6AAgmQAAgZAUhfQAAgCABgDQADASAEAU").p("AGRPZQAjAhBhAHQAOABANgCQgBAAAAABQhTAxAAAvQAAACAAACQgDgCgCgDQgCgSgBgKQgHgog4gPQgHgpgWgiQAAABAAAAQADACAWAU").p("AFGPfQADAFAJATQgBAMgBAIQAAAJAAAfQgGgNgCgSQgCgTAAgi").p("AD7PWQAEASAIAmQASBKAoAOQAKgEAGgHQAAAAABAAQADAZAIAXQgDARgFAVIAAAAQgBACAAACQgCAMgEANQgLAygEAdQgCAFgBAFQgIAegFAXQglgEhegEQAIgEAGgEQgJgIh2gGQCxgVAciIQALg1gMhNQgPhGgBgUQACAIACAJ").p("AGtSIQgCACgCACQAAgGAAgEQACADACAD").p("ALXNwQAEAKAFALQAAAWAFACQACABABgEQAIATAJAUQABgBACgBQABABABABQACAAADABQgMAAgLACQhDAHg6AXQAYgWAWglQAZgsAOg0QAJAVAKAU").p("AIORcICTgCQglAOgNARQgFADgFACQgBABgBABQgUAFgRAGQAGgNAGgOQgcgDgYAGQAAAAAAAAQgIgOAAgJ").p("AKxSmQAFgEAFgCQBFgNCKAAQAkAAAVAGQhVABgtAGQhagBggADQgMACgKAC").p("AB0WDQgGACgEACQgBgCAAgDIALAB").p("ARHTPQAAAAABAAQAQApARAiQgCABgCACQgBgCAAAAQgUgXgSgTQAAgbAJgH").p("APsTVQAHgBAGAAQAAADgBADQgGgCgGgD").p("ATCZ+QgCAGgCAFQABgGABgFIACAA").p("ATKYcIAOABQgDAEgCADQgGAJgFAJQAAgMACgO").p("EAjSAC7QAIANAJANQgNgCgOgCQgNgCgMgCQADgEACgFQgCgGgBgGIAhAD").p("EAiRADLQgVgCgOAAQAAABAAACQgRgOgZgOIBFAFQAEAMAEAK").p("EAg6AEtQAAgCAAgBQAAgHgBgHQAJAJAJAIIgRAA").p("AfzDxQgCgCgCgDQAEgDADgEQAFAHAFAFIgNAA").p("AaEJPQgBAAgBAAIAAgBQAAABACAA").p("EgswgBKQh6gdjGAoQgvAbhICAQhCBzAAAVQAAACAAACQgJALgMAOQgTAMAAACQAAAFAAADQgLAPgMAJQAEgNAEgPQAUhCAEgsQABAAAAgCQAohGAAgjQAAgegCgBQgFABgIgHQgIADgOASQgOAJgiA4QAKgeAPgWQAUgWAIgKQAMgQAAgPQAAgGAAgFQBChgA2gwQgagCgZAFQA3gvA3gYIgEA6ICMAKQAMgLA8gVQA3gTAHAAQA1AEAIA2QAFAYAAA6").p("EgwlgAIQh1BAghAKQAcgNATgSQAQgSAHgIQAWgYA6AH").p("EgsXACkQArBkAYAsQgOgSgLgUQgYgpgdhGQgFgPgGgMQAFAEAEADQAGAMAHAN").p("EguhAAmQhQAihnA1QgiASghASQAJgKAHgIQBghrByAAQAMAAAMAC").p("EglVAImQgHgDgIgEQAIAAAIABQAAADgBAD").p("A/tKLQgSgMgOgKQAUAJALALQAAABABAB").p("EghrAJcQAMAIARAFIgBAIQgbgMgggMQgHgDgHgDQAXAEAUADQACABAAAB").p("Egm0AHwIgBgBQgIgGgIgGQABgCAAgCQAWAFA7AMQgfAAgiAA").p("At9WdQAKADARAJIgyAFIgUgUQAcAAAPAD").p("ArqWaQgJAAgigKIBwABQAHABAHABQg1AHgeAA").p("AdMK4Qg2gMgdgDIgbAAIAAAZQAKAPBLAFQALgDAGgIQAEgGAEgN").p("EghqAPpQAaBCAmArQAJADAJABQAbAtAWAjQATAbAUAYIBOixIkIh1QAFAYALAa").p("A/NT5IAJgWQgFAJgFAMQAAAAABAB").f("#d1b794").p("EAk7ga1Qg1hAhdC2QgGALgFAMQApAFASAXQAMAOAGAhQAHAjAIANIAAAAQgHAbAAASQAAABAAABQAAAaACACQADACAQACIARgIQACgIAHgWQABgGADgIQACABACAAQAhgUAOggQAKgZAAgjQAAhVgRgzQgJgagOgS").f();
	this.shape_3.setTransform(320.5,180.2);

	// Layer 5
	this.shape_4 = new Shape();
	this.shape_4.graphics.f("#d1b794").p("EA+jgw6Qg1AMhNBrQg9BUgtBmQgVgFgWgEQgsA4hVAAQiCAAgyisQgLgkgGgmQgfgHgggFQgIASgHATQgDAHgCAFQgQAOgQAQQhKBKgyBsQg4B6AAB0QAAACgEAZQgCAdAFAXQAQBJBVAAQACAAANgXQALADAOAAQAhhRAchGQAhBbBMAAQAgAAAggTQAcgRAKgcQATAEATAAQA+AAAcgnQAQgWADgcQAQADARACQgMBBAAA5QAAACgBAUQAAAXAGATQATA6BMAAQAEAAArhLQAIgPAJgQQA7BzAxAYQAEAKAEAIQAiBFBCAAQAuAAAdgjQAZgeAAglQAAg3ghglQgOgfgaglQglgxgsgnQgbgsgdgmQBujrAAhxQAAh2g8AN").p("EA19gdrQgKAJgJAKQgJhIgCgcQgCiBggghQgagbgrAoQgjAhggA+QgeA7AAAZQAAACACBHQAFBAAIA4QgPA5AABKQgBgWgDBAQgDAyAHAtQAPBvA+AZQgwBLgtBsQgsBlAAAdQAAAnAJAYQALAZAUAOQgvAkg9BCQg/hKjSEmQhhCGhvC/QgkA+gWAnQgyAghABCQgFAFgFAEQgIgrgPghQgcg7gpAAQgoAAgcA7QgUApgHA6QgTAJgOASQggAkAABAIgBAPQAAAYAGAWQALAlAbASQgrBFAAAZQAAAgAKAVQALAYAYAMQhVBTAAAIQAAAfALAWQAXAvBCAAQCHAAD0kdQAEgFAGgFQD+j7AAghQAAgggFgXQAthHAAgOQAAg2gIgjQA9hJBOhiQB0iTBiiGQBfiBAAgKQAAhfgegfQAegpAehQQAVg5AQhAQANg1AAgOQAAgtgEgiQAggmAzi1QAGgVAGgUQBXgUByg3QgCgagBgdQAAhBAAgCQAAgLAAgMQAAgDAAgEQAAgnAHggQAMhPAig+QAJgPAJgOQgegYgegVQjcibAADZQAAAMAOAhQAUAtAfAmQACACACACQgPAEgPADQgIgJgMgEQglgJg0Az").p("ATHI2Qg8AtgZAtQgEACgDABQhbAmAABXQAAAlAKAYQAXA2BDAAQAZAAArgYQATAEAXAAQAuAAAcgXQAeAHAtALQAyANAfAGQAtBEAkAPIADAoQAGBMAKA/QAIAxAKAlQAAAfADAcQAGA1ANAjQgBBVgdCdQgHAogGAjQgRAggUApQhaC+haESQAAAfALAWQAAACACABQgLAEgLAIQgjAZgcA1QgcA1AAAsIALA5QARBHAXA7QAgBXAoAvQArBeA3AlQACAIADAHQAWBGBSAAQAhAAAggUQAFgDAGgEQAQALBCAzQBfBLAcAAQAgAAAVgWQAQgSABgWQAgAWAmAAQAoAAANgZQAHgOAAgfQAAg4g8gxQhThDijgKQgDgDgDgCQABgIAAgHQgCgFgCgEQAEgSAAgVQAAhAgfglQgRgUgVgJQgIgQgKgUQgLgWgLgUQAJgUAAgWQAAhAgRg3QAfgzAaheQAoiUAAhYQAAgegbg4QA1gyAeilQAYiMAAh8QAAgrgYhCQADgPACgSQAFgugCg7QgBgBABgBQAQgfAAglQAAg8gPhGQAPggAAgzQAAhOg2hRQAOgdAAgtQAAibhng6QhYgxiLAfQh/AbhkBM").p("EAbyAuDQAeACAmgEQAKAMATAdQghgUgpgNQgMgDgLgD").p("EAbDAt+QgPAAgMADQgEAAgDABQACgIABgIQAMAIATAE").p("AP4PoQAsgWAAg9QAAg5hKgvQhig/jSgfQhSgLishiQijhdgrAAQgWAAgqAjQgpAjAAAAQgeAAg3gZQhQglgKgDQgwgQgWAPQgeAUAABJQAAA0BeBHQBbBFCWA/QFlCWFmAAQBbAAAlgT").p("A36iqQgSAPgUATQhsiPhshWQhphTg8ATQg0ARgQBbQgKhJg1g7Qgqgvg5gaQgagfgdgYQhJg7gzAaQgkASgNA5QiBAdhcBXQgMANgMAMIgngRQgMAkgEAhQgBASAAAPQgaA8AABEQAAACAAAmQABAFAAAEIAKAAQgEAWABAUQABAkAQAcQgVAsgWAyIgNAZQgDAHgDAIQg6AOhUAkQh6A1iGBRQh6BLgIASQgNAeAAAXQABAWALASQgXgJgYAIQgrAOgZA4QgFALgXBNQgNAugNAsQgJARgKAUQgjBQhXCRQhWCQgFALQgBACgIASQgrAwgJAUQgHAPgDANQgIANgGANQgbgCgaAKQgtAPgQAlQgNAeAAAXQACA0A+AbQApATA2gaQAZgLAPgOQBBAHBKhNQA/hDAjhOQABgEABgBQALgMAKgNQBOgMELhGQDdg8BbgjQAggCAMgCQCRgVAYg1QADgHACgFQAggKAcgJQBEgXAHgPQAFgLADgLQA7gUA8gVQEMhiC3h0QBhg9BCg+QBKAPDCAMQAHAAAHAAQAcAcAzAWIBgjXQgYgJgbgIQgKgog5gjQg6gjhagXQARgTAEgKQAIgQAEgPIoyj5QgLAegMAjQgpB2gHASQgCAGgCAGQgxgQguANQgDgKgDgKQABgVACgbQAAgSABgQQAzgDApgrQAYgYAXgwIATAAQABgOAAgRQAAgFAAgFQAGgGAFgIQAMgRAHgTQAAADAAACQAAAlADAxIJnAAQgGg6gegKQghgLg3At").p("A/bFGQADgGADgGQADgFADgFQACAEADADQgJAIgIAH").p("A88CZQgMABgLACQAogWAzgDQgGAIgFAKQgdABgcAD").p("EgmhAF8QACAFACAFQgKADgKAEQAHgIAHgIQABAAABgB").p("Egq4AJ6QABAkAXAZQgRAIgRAJQiEAohHAcQgDABgDAAQARglADgHQALgVA1g1QA6gMBDglQAFAFAGAFQgBAFAAAF").p("AwogjQgVgDgXAAIAADrQACAAACAAQBoAAAlgnQATgWAAgnQAAgfgVgXQgIhChbgM").p("EgksATAQgfAHj1A4QgxATg8AXQADgKABgHQh0AdhdAgQgaAIi1CFQg4AjguAWIAAAAQgBADADAFQADACgKAXQgFAMhuBIQh5BPgqAsQgFAGgWAqQgYAxgTAbQgVAdgWARQgBAGgBAGQgVCZA0BFQgCA5AiATQAEAKAFAKQgBADgCACQgNAeAeAcQAeAdgIASQgBADgLALQgJANgCAMQgFAkBGAfQArATAUABQARAAALgKQAbADAUgGQASgHAMgOQAHAFAJADQAyAXAbg9QANgdgug6QgrgzhGgxQgxgjgqgTQgCgGgCgGQgGgYgGgXQAWhPAPgxQATgUASgnQAsh6AWgjQAbgrBKhaQAsg0AUgfQBMgJDWhYQChhCDihoQC+hPB2g7QDdhtAohbQADgHACgFQAHAGALAEQAVAKCVhcQCUhaAJgXQAdhBg8AHQgmAXgfAhQggAlg4AjQgoAZhNAnQg3Abg9AsQgjAZhBAyQh7Bch2Af").p("Eg2TAb7QAUgYAGgLQAJgFAKgFQABgBABgBQgVAqgZA2QgJgRgLgIQAHgKAMgO").p("Egg+AQQQAlgdAXgTQhHAphCA2QgYATghAUQBDghBDg1").p("Egt/AUhQBUgbBwgdQgtgTiYBMQAAAAABgB").p("EgxgAWmQAQgNAPgKQg8Akg+AqQA0gYAngf").p("EAlLApoQgrglg2gPQg8gRgmAXQgNAIgKAMQg0g/g0gvQgIhCghhRQgohkg4hJQg6hKgmAEQgsAEAABuQAAgGA9DZQAFAPAFAPQgLAhAAA4QAAAAgCAdQgBAiAOAcQAYA0BAAWQAAABAAABQACAXAKAUQAhBGBqAAQBKAAAggiQAhAOAzAAQCPAAAAhmQAAglgsgn").p("Eg54AZOQgjgJhRAzQhQAzhLBPQhTBWgiBMQAAABgQAbQgRAggHAeQgPA5AWAjQgEAWgEAUQAAACAAACQgGAHgEAKQgBACgHAQQgJASgBARQgDAgATAVQABBnA3AZQAoARAjgMQAhgLANgfQAFgKAHh7QAFhEABg7QAFgJAEgLQAGgVAPhFQALg0AMgPQA8hEApgvQBMhZAPghQAohagngM").f("#24100f").p("EAg9AMNQgWBRgCAGQgcBJg7BsQgiA+hEB1QgqBNgBBsQAAABABBFQgCARgBARQgJAkgXB4QgUBngQA3QgJBXgsEVQgpD/AAAPQAAAKAKAbQAOAjAPAAQANAAAEgEQABgFAAAAQADgHAAgDQAAgCAAgOQAAgKgIgJQgJgIAAgMQAAh3BOl4QAtgmAomFQAAgNgCgzQACgWAAgRQAAg3gDgbQACgPAEgMQAJgfAlg+QA9hkA0hWQAdgvAbhNQAghcANgaQBBiHCxhPIgEgJQi4gChCBpQgWAjgPA6").p("Egg7ARFQBBgyAjgZQA9gsA3gbQBNgnAogZQA4gjAgglQAfghAmgXQAwgdA7gKQAfgEAhABQAQAAAKABQAFgLgCgCQgBgCABgBQhhgghCALQg2AJgxApQgdAZg8A7Qg6A2g/AcQg8Aag7AsQgHAFgfAYQgXATglAdQhDA1hDAhQgzAYg0AMQhuAajLAvQguALgpALQhwAdhUAbQgBABAAAAQhDAWg5AkQgXAQguAjQgPAKgQANQgnAfg0AYQgjARgpANQgzARgnAJQgCAFgBADQhUAVhMA7Qh3BbhBCRQgBAEgSAmQgJAqAxAVQA5AZAzgmQAWgRAVgdQATgbAYgxQAWgqAFgGQAqgsB5hPQBuhIAFgMQAKgXgDgCQgDgFABgDIAAAAQAugWA4gjQC1iFAagIQBdggB0gdQAtgLAygMQAFgBAFgBQD1g4AfgHQB2gfB7hc").f();
	this.shape_4.setTransform(250.5,262.6);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new Container();
p.constructor = lib.patch0201;
p.nominalBounds = new Rectangle(-167.3,-50.6,848.4,626.4);

(lib.patch0401 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("rgba(142,111,55,0.78)").p("AiilzQAABKAFAXQADANAFAKQAAAKAAAMQAJAnAiAFQACAIABAHQAQBHBUAAQAaAAAGgGQAEgDgDgEIgGgMQgUgagSgzQgJgagJghQgYhXAAgzQAAhTAEgmQgKAJgIASQABgIAAgHQgVAJgNARQgBgQgDgOIgEAAQABgBAAgBQAFgKgCgFQgGAEgFAEQAFgUAGgWQgNgDgKACIgHABQgKAzgHA1QgIA5AAAe").f("#8e6f37").p("AF6jNQgsBGgmA3QgPAbgOAWQhzC4hoA1QjrDUlOB5IARAaQEKg7DniWQgIgDgDgFQAYgIAZgJQAdgVAdgWQgDAAgBgCIgCgHQCzhqCDjNQBJiGA1hQQADgUAAgSQAAg2gCgHIgBAAQgFgCgFgDQgJgEgMAAQgnAmhHBv").f();
	this.shape.setTransform(52.2,35.5);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.patch0401;
p.nominalBounds = new Rectangle(0,-20.9,104.4,113);

(lib.shades001 = function() {
	this.initialize();

	// Layer 11
	this.shape = new Shape();
	this.shape.graphics.f("#261e15").p("EAnxgX1QgFgDAAgDQg9gLgZAKQgYALAAAlQAAAMACAJQhiApjSDMQheBZhGBQQgoAtgRAYQgCAAgBgBQjSAkhZAZQhvAfAAAhQAAABAAACQhnADhCAeQhGAfgBAsQhSAMh4AsQhMAbg7AeQgEABgEABQmmBAkvAtQgQAEgQAPQgSAPAAALIAFAeQAZAZBGAAQC1AAGshXQAIADANAEQAbgJBlgXQB2gaA8gRQAjgLAegKQBtgdAYgSQAMADAOAAQAgAAALgJQAGgGAGgPIADAIQACABAAgfQAAgUgGgQQAhgKAtgMQAmgMAOgLQAOgMACgUQAYgGAsgLQAYgGAYgGQh0AvAAAMQAAAhAOAKQABAAAjAMQBXgVCFgzQgKAsAAB5IAQCJQAWCnAWCLQBJG7A5AAQAeAAAKgKQAEgFABgFQAFAFAAgyQAAgugXiBQABADABADQALAbAMAdQgCAKAAANQAAAzAgBLQAWA3AaAdQAAAGAAAHQAAALAKAXQAPAhAZAZQAGgCAIgDQAWAzAYA2QAMgFASgLQAPgJAFAAIAAh4QgVgzgYhEQgXg/gZhNQhIjbgPgqQhXj4hnh/QgEgcgHgiQgThogWhCQgLgigJgQQAjgNAlgQQAEgBAEgCQABgBACgBQAtgSAkgQQB2g2AAgUQAAgdgFgGQgFgHAAgDQgjAFhfAgQgPAEgPAGQANgKAMgLQB1hdCLiNQATgTARgSQAVgNAVgYQAPgSAIgOQBNhXAKghQAFACAGACQASgDAWgSQAegXAAgdQAAgdgFgC").p("EArDgR6QgSALgNAsQgOAtAAAwIAKBDQAQBSAYBFQBQDbCMAAQAgAAAGgJQAEgGADgPIADAIQACABAAgfQAAgcghgvQgSgZg5hDQhtiBgDg5QgKjRgtAd").p("EAtegCXQgqgYg2gvQAdgDATgQQAUgTgMgQQi4jTiXh+Qjii+iLAMQBxCeB4CCQAQAgAjAwQA2BIBDBHQCtCzBcAAQAjAAAPgNQALgKAJgb").p("AVbOCQAZAAA6gZQA7gZAZAAQC3AABZCcQA8BqAAB+QAAALgeBtQgeBtAAALQAAAhAOANQAHAHAdAJQBVhIAThIQAHgdAAgnQgBgwAAgbQAAikhniEQhYhwiLg9Qg0gXgvgLQgQgggyABQg+ABhnAzQhWAqhPA4QhLA2AAARQAAAaAQAbQAZAvA7AAIDBiGQAEgDAEgD").p("AgTOqIocAAQAAACgTAKQgXAKgIAIQAAAXAOAUQAFAHAGAFQALAKAOAFIIcAAQAcgHAEgCQARgLAAggQAAgggQgHQgVgEgMgF").p("A4xoAQgWgEgMgFQimADhAAJQgvAFgNANQAAAXAOAUQAOAUAWAHIArAAQh9AIhJANQiIAXgRAwQAFgCADAAQAMAYAEAmQAJADAPAFQAGgBAMgCQABgFABgEQAGgZAigMQApgPBjgGQANASAMATQAkgFAqgFQABgBAAAAQBdglBagFQA/gWAAgYQAAgegFgCQgFgDAAgDQgEAAgDAAQARgLAAgfQAAgggQgH").p("A4+gbQhLARgZBYQgDAMgDASQAFANAEAOQBADEAQCZQALAXAKAWQAbA3AcAtQA2BWA4AzQCtAjAVAGQAkAIAfAJQgJgIgJgIQARgPAAgjQgRgSgUgdQgqg7g5hnQAAAAhki5QgUgmgYgtQhPiUgjgqQgFgHgFgFQAJgWAFgQQAKgcAAgHQAAgdgFgCQgFgDAAgDQgVAAgSAE").p("A4dDeQA5CKAxBoQAUAqASAmQgpgrgWgXQhAhCgbg1QgihDAAhUQAAgYAMgnQALAaAVAz").p("AuhHyQAHAAAvgWQgOAdAAAfQAAAhAOANQAHAHAdAJQALgDBUg3QBXg0AmAAQABgEAGgOQACgFAAgRQAMgHAMgIQAkgXAagSQAUgGAdgIQAMgBAQgHQAPgEARgFQB9gpABhWIAAgBQAAgdgFgGQgFgHAAgDQg5gYhUAfQicARiEA+QhlAuigB7IAFAeQAHAIAHAKQAJAHAgAA").p("EgqfgBbQAWgQDIhyQC8hsAAgEQAAgegFgCQgFgDAAgDQhugDkxC+Qh4BLhXBDQhYBDAAASQAAAgAEAEQADADANAGIABAFQAIAFAfAAQBEAAAZgKQAUgIALgYQASgqANgQQAfgsBAgt").f("#473727").p("Ad0ryQAWBCATBoQAHAiAEAcQBnB/BXD4QAPAqBIDbQAZBNAXA/QACgHADgJQgCgQgVhZQgRhEAAgdQAAgNAJhMQAHg/gGgjQglgGghADQgbADgIAAQAAACAAACQgFgXAAgNQAAgCAAgCQAHgDADgFQAFgIAFgSQgEgIgEgHQADgLAFgLQAUgyAAgZQAAgegFgCQgFgDAAgDQgqgOgdAJQgEgSgEgTQgQhJgHh2QgJiYgFgmQgFgpgHglQgkAQgtASQAAACgBABQgBAAgBgBQgEACgEABQglAQgjANQAJAQALAi").p("AezrdQABAPABATQAAADAAADQgDgMAAgGQAAgJABgN").p("Afuu6QgCgGgDgFQgMALgNAKQAPgGAPgE").p("AFKO5QAAgdgFgGQgFgHAAgDQgbgDhTAKQhLAKgjAIIkJgCQgzgShGgNQjsgtkzA1QAAAXAOAUQAOAUAWAHQAkgBAjgBQACAWALAIQABABAjALQApADAiACQgGgFgFgHQgOgUAAgXQAIgIAXgKQATgKAAgCIIcAAQAMAFAVAEQAQAHAAAgQAAAggRALQgEACgcAHIBjAAQA8gPCMgFQAcgJAIgIQAOgOAAgi").p("A59hpQgOAMgSAMQgFAMgEAPQgHAcAAB1QAAAAAAABQADAIACAIQADgSADgMQAZhYBLgRQAAAAgBgBQAFhAgFgnQgWgBgTAFQgKALgLAL").p("A49CRQgMAnAAAYQAABUAiBDQAbA1BABCQAWAXApArQgSgmgUgqQgxhog5iKQgVgzgLga").p("A2fgqQgVgBgOASQgPAUAAAmQAAAGAAAFQgCAFgDAHQgdAJgQAXQgKgagKgVQgFAQgJAWQAFAFAFAHQAjAqBPCUQAYAtAUAmQgEgwAAg1QAAgMAHhqQABgWABgTQAEgBACAAIAEgaQABgHAAgiQAAgigQgVQgOgUgUgD").p("AyRL2QAAAjgRAPQAJAIAJAIQASAGAPAFQANgEAGgIQAOgZANgUQgngchOgnQAUAdARAS").p("A46IRQgKgWgLgXQAEAlABAjQAGACAFAAQAIAAAGAAQAXAoAXAfQgcgtgbg3").f("#69523a").p("A5glbQhaAFhdAlQggAOgiARQgGgKgHgKQgMgTgNgSQhjAGgpAPQgiAMgGAZQgBAEgBAFQgBAPAAAeQgDAmgYAeQgJgZgChBQgBgPgCgNQgEgmgMgYQgDAAgFACQgWAFhFAfQhgArhbAyQkICQAABPQAAA7AUAjQAUAjAAAGQAEAGAGAGQgFAJgFAJQAjAtBnBjQCbCVCrB8QIRF/HYAAQBbAAAhgDQAygGAVgVIAAg8QghghhdgeQgPgFgSgGQgfgJgkgIQgVgGitgjQhCgNhagSQgcgGgagGQAKgTAGgWQAOguAAg1QAAgNgBgOQgBgjgEglQgQiZhAjEQgEgOgFgNQgCgIgDgIQgZhIgchAQAogSAdgTQASgMAOgMQALgLAKgLQBEhLAriLQgzgIg0AC").p("EgkUACAQgIAAgOgKQAQAAAOABQgHAJgBAA").p("EgigAINIgVADIiMh4QALAABBAiQBVAsAdAMQgGATgXAI").p("A/uI7QAjAVAtAZQArAYAlAWQgUgHgSgHQhZgkghgq").f();
	this.shape.setTransform(334,145.2);

	// Layer 12
	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#463726").p("EAjYgNpQghgUgdgFQgRgFgaAAIAACvQgKgxAAguQAAgRAGgyQAEgjgFgSQgTgCgQAAQgMACgDAAQgFAeAABTQAAAIAKAzQgMgbgEgKQhajGgJh1IgeAAQgEAZgBARQAAANAAAoQAAAIAcBdQAGAUAGAUIAAByQANBxB1CgQAKANALAPQgVAGgMAZQgFAIgDAJQABgTAHgTQAFgNgIgHQgTgDgQAAQgHABgFABQACgKAAgJQAAgFgtg3Qg1hCg4g5QipixhXAEIAADNQAVAwCPCRQCDCFAAAeQAABSAKAfQAHAWAbAbQAdAcAcAnQhWhNh6iJQgJgKgIgJQgBgMAAgMQAAggAKgQQAHgMAXgWIgPgPQg3gLgPApQgDAKgCAZQg1g7gagYQh/ipgnhyIgeAAIgFANQAAAFAAAjQAAAwC+DwQAhByB8B9QARAUAUAUQAxAuBTA2QAFADAEACQAAgBAAAAQAyAfA9AiQARAhARAmQA9gFAOgfQAFgKAAgvQAAgqgwhUQgUglgOgZQA7BDBOAAQAeAAAAgKQgHgNACgHQhQgIhBhnQA6AuA+AjQAUgKAFgPQgFgdgVgqQgYgogFgJQgTACgKAKIgGAIQAFARAOAZQALAVAAACQghgZghgeQAEgEACgGQAAgtgPgPQgMAAgSAEQgMADgDgCQgHgaA8hCQATAXAWAYQABAPADAIQAWBFBVAcIAPgPQgLgVgJgRIAAgqQAagCAHgLIAHgMIAAh4IgUAAIAAhbQgGgMgWgaQgbgigZgSIgKAPQADARANAgQgjALgNAkQghgygFgQIAAjhQAVAAALgCQASgDAKgKIgFgP").p("Af8muQAJgPAGgOIAAA0QgIgLgIgKQABgBAAgB").p("EAgbgE4QATA3AYArQAEAIAFAIQg7AigqhHQgrhmgdgjQAfAAAZgSQAfAmAhAiQABACAAAE").p("EAkPgIfIAABbIgKAAQAAgBAAAAQgBgLgBgGQgDgVgJgLQADgMAEgQQAFgUACgQQAIASACAF").p("Ab4q0QACAFADAEQg6gLgRgoQgKgaAFgrQAUAPAUAhQgIAGgCAGQAWAXAXAc").p("AftiEQgTgWgLgVQgKgVAAgLQAEAAARAaQASAaALAXIgKAA").p("AU7pbIAABtQgOgPgfgOIgaAAQAAgFABgFQAPAIARAAQARgCALgLIgFgPQgUgdg8gGQgQAbgGAuQgDAbAAA1QAACxA8CRQAAABAAAAIAAC9QAmCYApBUQA4B2BJAtQAeBTBoAAQAiAAAbgRQAWgNAFgPQg7gLgpgRQgCgHACgFQgogbgjgdQAAgCAAgCQAlAeA1AoQAUgKAFgPQgdgkhWhWQAAAAAAAAQAoAHAyAAQAeAAAAgJQgIgNADgIQgKgJhBgMIgTgCQAHgIAHgJQgugTgXAKQgNgggMgiQABAAAAgBQAJALAJAKQAagUAJgZQgeghgagiQABgQAAgIQgBgaggAAQgCAAgDgBQgVhngKh6QgMkpgTiJIgjAA").p("AU7nSIAABRIgPgCQgIANgGASQgBgLAAgIQAAgXAIgYQAIgaAOgS").p("AUygCQADAHACAIIAAAAQAAATgBASQgCgagCga").p("EgglgAMQAFATAGAVQgDAGgDAHQgEAMgBAdQglhEgXguQgDgFgCgFIgeAAQgDAHgCACQAAADAAAgQAAANAVAsQAJASAMAWQAbAyAtBKQgLAIgDAIQBQCQA8BZQACA6BLBkQAMAPANAQQgBAIgBALQAAAHAAAKQAABWBbBOQAIAGAHAGQArAiBCAnQASAUASARQAAABgBABQgBABgCACQgegRgkgVQgbgRgZgPQg8gkgsgcQgOAHgGATQgFAOAAAPQAiAUBSA7QicgcAAgpQAFgKAAgHQAAgDgCgDQgJgLhFgVQgDAIgCgCQAAABAAAYQAAADAAAEQAAAOAhAfQAqAnA/AfQBXArBoASQAHAIAJAEQANAEAdADQABAAAAAAQACABAAABQADAAADgBQAkADA6ACQA+ACBYgBIAKgeQgVgVgUgSQABgBAAAAQgBAAgBAAQg9g7grgdQgPgKgNgHQgWgLgRgBQADgCABgCQAFgGAEgNQgWgLgxguIALghQgDgJgMgLIgKgKQgKgDgKgDQADgEACgFQgkgcglgjQALAGAKAHQADACADABQAKAGALAGQAKgDAGgHQAAgBAAAAQAFgGAEgNQgcgQgbgVQgegZgcggQgfgmgdgvQgPgagOgdQgZg0gPgeQABgCABgCQgOgogXguQAGAGAGAFQAUgKAFgPQgDgJgEgOQgFgYgIgoQgBgEgBgEQgCgNgDgNQgRhdgQgyQg1inh1AAIAACMIAAAF").p("A+rAuQAIAbAAAOQgPgmgEgVQABgFAAgGQAFAKAFAT").p("A/jCKQAFAjAIAeQACAEABAEQgJgMgFgLQgEgIgEgJQgIgagCghQAIANAIAN").p("Egh1ABbQhZAAgFBtQAAAHgBAHQABACgBACQAAgCgBgDQgUh8ADhvIgtgFQgGgDgGAAQgNAAAAAeQAAA/AUBsQADARAEASQAKA1ANA2QAEAPADAOQgDgKgEgLQgchVgOhRQgMhHgBhDIgeAAQgDAZgBAQQgBAOAAAoQAAB4AsCFQAWBEAiBIQAdA8AhA5QACAJADAIQALAiAUAmQAYBDAoA/QAVAgAZAfQAMgKAJgLQAbAeAgAfQAUgKAFgPQgRgVgQgUQAAgBABAAQACgCABgCQAFgGAEgNQhEhVg5hXQgZg8gWg7QgCgRgCgVQAAgEgBgEQgDgwAAhDQAAgcADgkQACgQACgSQAHg+ALgrQgTgBgOAKQALhKALgeQADgIADgEQgFgBgFAA").p("EghDAM9QgBgGgBgGQAFAGAFAGQgFAAgDAA").f("#604b35").p("AkbQ8IAKgeQgKgPgJgcQgIgYgIgIQgQAAhbgjQhngnhIgNQiqggh4BJQgcgFgigEQgBAAgCAAQAJgGABgEQhEgBg/gBQhXgHhdgBQg6gahUgfQiCgxhHgRQgLgKgMgKQgCgCgCgCQABgCAAgBQAAgPgFgPQgCgGgCgEQgGAHgKADQgLgGgKgGQgBABAAAAQgCgCgDgCQgKgHgLgGQAlAjAkAcQgCAFgDAEQAKADAKADIAKAKQAMALADAJIgLAhQAxAuAWALQgEANgFAGQgBACgDACQARABAWALQANAHAPAKQAVACAZABQBnAeB3AAQAgAAAGgHQADgDgDgEQBnAJBpALQgUAUgSAYQAZAPAtAPIDmAKQAGAHDBAFQCSADA5AA").p("EgglgARQgGgDgHgDQgfgQgQAHIAAAAQAXAuAlBEQABgdAEgMQADgHADgGQgGgVgFgTIAAgF").p("A+1ARQAAAGgBAFQAEAVAPAmQAAgOgIgbQgFgTgFgK").p("A/zBwQACAhAIAaQAMAOAHASQgIgegFgjQgIgNgIgN").p("Egh1ABKQAAAKAAAHQAFAAAFABQgDAEgDAIQAAAAABAAQACgBADgGQAGABAGABQgMgWgJgSQgBAGAAAJ").p("Egg7AM9QgFgGgFgGQABAGABAGQADAAAFAA").p("A9TC7QAAgCAAgBQgBgDgBgCQABAEABAE").p("A9BF6QAPAeAZA0QAOAdAPAaQAAgDgBgBQgDgKgEgJQACgBAAAAQAOgKAJgOQAJARAGAPQAXA2AFAvQAcAgAeAZQAAhjgyhpQgxhphdhhQAEAOADAJQgFAPgUAKQgGgFgGgGQAXAuAOAoQgBACgBAC").p("A8cGdQgGgZgEgTIAAgFQARAbAOAYQgLgCgKAA").p("Egh/AGSQAABDADAwQBfCkAvBOQAKgKADgMQACgIAAgPQgTgfiJj+QAJgrAbggIgPgPQgMgCgKABQgDAkAAAc").p("Egh3AIzQAWA7AZA8QA5BXBEBVQgEANgFAGQgBACgCACQAUALAWAHQAAgYAAgBQACACADgIQBFAVAJALQACADAAADQAKgCgBgFQgHgNADgIQiRg2hViGQg0hUgOhNQACAVACAR").p("EgiyAJuQghg5gdg8QgihIgWhEQAEAVAGAhQASBjAdBSQBBC+BgAzQgog/gYhDQgUgmgLgiQgDgIgCgJ").p("A8zKVQgNgQgMgPQAJAUAJAUQADAFACAFQABgLABgI").p("EgkkACbQAOBRAcBVIAAgIQgNg2gKg1QgEgSgDgRQgGgIgGgI").p("EgjVADVQABADAAACQABgCgBgCQAAAAgBgB").p("A60OWQAZAPAbARQAkAVAeARQACgCABgBQABgBAAgBQgSgRgSgUQhCgngrgiQAMAYALAV").p("A4qRJQACABABABQAAgBgCgBQAAAAgBAA").p("A4nRLQAmAZAlAAQAeAAgBgJQgDgHgBgFQg6gCgkgDQgDABgDAA").f();
	this.shape_1.setTransform(386.4,128.4);

	// Layer 9
	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#69523a").p("EAlWgUnQgZARgcAuQgBgCgBgCQgFgGAAgDQhYAFiTCkQg2A7gqA8QgnA3AAAMQAAAIABAHQgvAngiAdQgOAHgQAIQgFABgFAAQgKABgLADQgCgLgEgCQgSgFAAAAQhSAJiaB5QgaAUgYAUQgHgFgHgFQhLgxAACBQAAAIAAAGIAAABQAAADAAACQg0AFgdATQgOAJgWAXQgFAFgEAEQg0AJhWAZQicAvAAAdQAAAgAOAKQABABAjAMQBRgXCHgcQAzgPAXgWQABgBAAgBQABAJADABQADAEAMAGIABAFQAIAFAfAAQATAACThAQAEgCAFgCQAaAMAxAQIBLAAQADAGACAGQgegcAAApQAABeBdFmQBhF6BQC4QAIgCAPgGQAiDIA6AHQACAEACAEQgJAPAAAcQAAAPAIALQgEAEgEAFIAFAeQAIAIAHAKQAIAHAgAAQAeAAANgHIAMgIQACADABgDQACgGAAgfQAAgegFgCQgFgDAAgDQgKgEgIgCQgCgDgBgDQgBgEgCgEQACgCACgCQAFgIAFgSQgPg6gQhZQgaiNgBgFQgBgGgBgFQgEgmgDgdQgIg+gOg2QADgBADgBQANgGAFAAQAEgWABgLQAAgLAAgmQAAgTgFgaQAJgCAEgDIAHgIQAFAFAAgyQAAgCg8hwQAAgQAAgTQAAh2g8iYQgMghgPggQCGC5CjAAQAHAAAGgBIACAQQASADBWAsQAXALAVAIQAYAVAaAVQABAHACAHQAJApARAiQAZA0AmAbQA1BLAjAXQAOAyA1AAQAgAAAGgJQAEgGADgPIADAIQACABAAgfQAAgngSgcQgRgagZgIQgBAAgBAAQABgEABgDIgFgeQgMgKgKgKQAEgFADgFQgKhEhQhWQAAgGAAgGQgFgkgRgHQgNgGgaAAQglgggtgjQhXhDhVgwQhWgvgsgFIgCAEQgDAKAAAfQAAABAAABQgcgbgbgfQARgBAGgGIAHgHQAFAFAAgyQAAgkgggrQgggpgsgaQgwgdgnAEQgDAAgCAAQgQgSgOgLQgCABgCACQgPgMgQgKQgDgBgCgBIAAgBQA6gcBwg0QCMhFAAgqQAAgdgFgDQgEgBgBgDQA6gLAlgFIAPgwQAAgGgPgRQgNgMgMgHQAAgFgBgGQAQgGAUgSQADgCACgCQAAACAAACQAAAiAOAQQAKALAaAJQAZgRAWggQAXgjAAgaQAAgegFgNQgFgOAAgDQgIgDgHgDQAFgIAFgKQAjg/AAgQQAAgfgPgHQgWgEgNgF").p("AazpIQAMgIALgJQALAYATAbQgEgBgEAAQgSgWgLAOQgFgDgGgCQgBgSgEgCIAAAA").p("AeTlbQgLgPgPgOQgSgzgPgkQAAAAABgBQAlA8AVA5").p("EAnEgNjQAAAuAdBqQAkCEA3ByQCkFKD2AAQAeAAAIgIIAHgHQAFAFAAgyQAAgUi6icQjCijgUgzQgZg/gfirQgZiFgxg/QgeAWgNA9QgHAiAAAj").p("A8cCrQgTAFAAA2IACBIQABANABAOQAAADgBACQgDAeAABjQAAABgEBGQgCBTALBDQAbClBdAnQAMAcANAZQBBB1BpATQAiAXAkAAQAWAAALgIQAIAGAHAHQgKAFgLAJQgRAPAAALIAFAeQCbA3BLAZQB9AqBaAXIFAAAQABAAABgBQAbgBAagDIAGgSQAQADAXAAQBHAAAwgUQAzgVAAgfQAAgegFgCQgFgDAAgDQgegLgzAHQALgNAAgZQAAgggQgHQgWgEgMgFQiLAEg3AIQgJABgIABQABgDAAgDQAAgfgFABIgFAHQh8gQhngaQgygPgfgJQgFgCgHgCQjZhTgwg0Qgtgeg5gtQgQgNgOgLQADgJAEgWQgQgvgPgpQgEgggHgpQgUh+gWhbQADgXAAgLQABgMAAgmQAAg2gQgdQgOgagUADQgUABgPAbQgEAJgEALQgBAAgCAAQgNgigJgSQglhKgFCLQgUAJgLARQgFACgFACQgQgsgXgeQgZghgQAF").p("Ao3SwIAEAAQgCABgDABQABgBAAgB").p("Ap6TMQgIgFgHgDIAfAAQgIAEgIAE").p("AwZLkQAPgHAcgKQAAAAABABQADADAIAEQAEAIAFAFQAHAHAdAJQB4guATgLQAzgdAAguQAAgSgCgIQBDgmBPgoQAZgNAXgMQAXgBARgFIAXgIQABADABgDQACgEAAgPQARgIAPgHQAFAAAFAAQBPgFAAhOQAAgegFgCQgFgDAAgDQjLgxkMCJQhiAyhKA6QhDA2AAAXQAAAbAFALQABACABACQgHAMAAAVQAAAhAOANQAHAHAdAJ").p("EgppAANQAGgCAGgBQAigIAAgiQAAgdgFgDQgFgCAAgDQh7gtisB3QhAAtgvA1QgsAyAAAWQAAAdACAWQADAVAAADIAYAFQAGABAFABQAAAGAAAHQAAAQAKAMQAFAIAjAiQBchJBRhRIACAJQAHAIAHAKQAJAHAgAAQAUgBAUgJQAogSAAgsQAAgegFgCQgFgDAAgDQgEAAgEAAQAmghAAgdQAAgfgFABIgFAHQgBgBgCgBQAEgGADgE").p("EgnDAERQAAAJAOAnQADAGACAGQgfADgHAyQgQgQgPgKQgeAYgNAeQgHASAAANQAAAGAcArQAkA3ApAvQBrB3BhAVQBrBUAiAAQAUAAAKgGQAAAMAAARQAAAVAZAfQAiArA3ACQAJAHAJAGQgPgDgMAAIgDAEQgCAKAAAfQAAASAdAcQArAnBEAAQBAAAANgPQAEgNAGgMQAHAAAGAAQATAAANgPIAcgtQhdgxg8geQgLgFgKgFQACgCACgBIAKgNQgDgkgggrQgdgpgngbQgpgbgaAEQgeAFAAAvQAAgGAOAUQAJALAaAlQgqgZghgDQADgHADgEIgFgeQgxgqgogeQAigJAAgxQgUgYgTgXQAHgEAEgGQAAgCAAgBQAGAAAEgBQA4BlBcAAQAuAAADgzQAVAmAeA1QALgDARgJQAPgIACAAQAEgXAAgHQABgIAAglQAAgfgWglQgUgigcgVQgdgXgTAHQgWAHAAAtQAAALARAkQhMh1gug0QgKgNgJgJQAWAGAWAAQASAAANgPQADgEAagpQgVgRhRhRQhQhSgugkQiYh4AACwQAAgCAbAfQATAVARASQADAQAEAOQACADAAACQgSgLgNAKQgJgPgHgKQgbgngcgSQgyAlAAA4").p("EgjPAE/QAeAVAbAOQgVAQAABLQgBAAgCgCQgmhMgmgzQANAEAQAAQAIAAAGgB").f();
	this.shape_2.setTransform(345,121);

	// Layer 10
	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#8f7856").p("EAqNgUTQglAVgKBHQgDAWAAA7QgJgEgVgJQgUATgQAUQgKAIgIAPQgbgBgbANQgqAWAAApQAAAiAOANQAGAGAZAIQgCAOgCANQgHALgHALQgIAMgFALQgvAGgRAZQgbgHgfAOQgBABgBAAQhZABgLAAQgDAIgGACQgBABAAAdQAAAPARAWQgRACgNACQgjAGgMANQAAAXAOATQANAUAXAIICMAAIAjgFIAEgPIABAAQAdAAAXgwQACgHACgGQAMgCASgLQAGAHAIAHQAUgFAPgKQABgDADgDQAAAAABABQAMgFASgLQAPgJAFAAQAAgeAEgeQAFgCAHgDQAOgFAFAAQACgaACgbQAEAGAEAFQgHAeAAAWQAAAjADAKQAJAbAmANQALgDAQgJQAPgIADAAQACgmAMg+QALg3AAgZQAAhOgTgLQgBAAAAgBIAAjSQgSgcgggM").p("AbcmSQAPgFAAgZQAAgdgFgDQgFgCAAgDQkWAFhKAPQgtAJgRAQQgOAMgCAVQgTgDgLgFQiEgJiTAaQiqAegpA6IAFAeQAKAKBKAIQBAAHAvAAQAFAAAFAAQALAMADABQACABADABQghAPgdASQgLACgIACQgkAFgMANQAAAXANATQAPAUAWAIIAwAAQAQAIAOALQAYAUAgAuQABACABACQgGAIAAAHQAAAhAOAKQABAAAjAMQAFgBAFgBQABAAAAAAQALALAMAJQgeANgOAOIAFAeQAHAIACAKQAFAHAdAAQgOAGgKAGQg4AcgcAyQASAEALARQAQAXAIAHQAvAnC0AAQARAABCgdQBNgjAAgcQAAgegFgCQgFgDAAgDQgZgGg/gFIg4gEQA3gJBFgZQBugpAAggQAAgegFgCQgFgDAAgDQgkgCgjAAQgBgLgDgBQgFgDAAgDQhMgOh4AYQgJgHgIgHQAVgFAGgCQB0gkAAg3QAAgegHgCQgSgFAAAAQgKAAgPACQAAgBAAgBQgXgFgYAAQAMgPAPgWQAegrAAgSQAAgOgEgJQAlgLAzgUIABACQAJAJBCAQQAjAHA3ANICMAAQAdgIADgCQASgKAAghQAAgEAAgEQAHAVADADQAEAEAaAMQAAAOAAARQAAgDAQBdQAWB0AbBeQA+DWBLBCQA7CpAxAAQAJAAAIgBQADAKAFARQAWA2AhAAQAeAAAHgHIAIgIQAFgCAAgyQAAgegTgZQgRgWgYgJQgXgIgQAJQgNglgQgyQAFgJADgRQgRghgYg6QgFgSgFgTQgsilg3hRQgBABgCAAQAAgDgCgDQgJgzgQhPIgjinQAjhKAAgOQAAgfgVglQgUgjgdgbQguAMggBHQggBUgUAhQAFARAEANQgkgNghgJQAAAAAAgBQAAgfgQgHQgWgEgMgFQgSAAgQABQAEgHAAgHQAAgBAAgCQANgBAOgBQAzgDAHgC").p("EAlRgFTQgOAPAAAjIAQA0QAFANAGANQgHAIAAAQQAAAAClDKQCNClA7AgQAEAHAFAFQAHAHAdAJQAOAAAVgRQAVARAEAAQAgAAAKgRQAFgJADgTQg4h2hBhUQAAgBABgBQgEgDgEgCQgJgMgJgLQg5hDgygZQgegcghgjQiMiMgigbQgbAJgJAL").p("AaREiQgxAAixAlQjgAug8A0IAFAeQAMAMAbAHQAfAJBBAHIAFAeQgHAEgQAIQgMAGAAACQhNAJhJAYQhQAcAAAYQAAAgAEAEQADADANAGIAGAFQANAFAfAAQC+AAC+h3QBWg1Azg9QA1hAAAg3QAAgegFgCQgFgDAAgD").p("AB+k1Qg0AGgqAVImGADQgXACgKADQgRAIAAAgQAAAgANAKQACABAjAMIDsAAQhqAYAABRQAAAgANAKQACABAjAMQC7AABPAKQBOAJAFAAQAcAABGglQBOgqAYgoQhfgjhggSQA+gNBRgKQAtgCA1gCQAcgIAEgCQASgKAAghQAAgfgQgHQgWgEgMgFQgnABghACQiegUhBAH").p("AJASOQAhgNANgTQCBgpAAgZQAAgfgFABIgFAHQh8gPhjAXQg+ATgyAOQAFgJAAgJQAAgegHgCQgSgFAAgBQg0AJhMgCQgbgBgVAAQABgEAAgEQAAgggQgHQgWgEgMgFQl2AAhBABQhBABgPADQgMADgKALIgIALQAAAXANAUQACACABACQiZgah4g2QiPhAiHiKQgRgRgwhTQg2hdgXgjQgGgYgGgaQgfiCghg0Qg1hShzgXQAzBEAiCNQAUBQAjCoQAkCLA4BEQBJBWB+AAQALAAAJgCQCGBiCOA6QCsBGCYgEIDDAAQgbAUgSAZIAFAeQAZAZBGAAQADAAF7hQQAxgMAqgKQAQACAUAAQAkAAAngO").p("A3Hk6QgoACiLAQQg6AHg5AHQAsgbAAgXQAAgdgFgDQgFgCAAgDQgYgQi/BLQiHA1gpAjQhjAVhDAVQgTABgJAEQgFADgFAFQhfAkAAAlQAAAgAOAKQABABAjAMQAngSA0gTQgBAHAAAHQAAAYAHAOQhEAbhjAqIAFAeQAOANAaAGQgxABg2AOQh3Ahg/BTIACANQgsAZgSAWIAFAeQAIAIAHAKQAIAHAgAAQBogpA2ggQApgLAzgUQCCg1AAg3QAAgfgFABIgFAHQgMgDgNgDQAQgDBAgRQAdgIAcgIQgeAVgXAdQgTAZgMAbQgGAFgHAEQg+AwgRAWQgDgBgCAAQgVADAAB8QAAgDAFAuQAIA7ANAxQAqCfBSAAQAeAAAFgGQAbAYAmAhQB+BwBPBAQBGA5A7AsQgCAFgCAHQArBAC1BGQCKA1BZALQALACASAAQADAAACAAQADAAACAAQAIAAAHgBQAhgEAggOQAggOAMgSQAuAZApAUQADAUALAKQAGAHAdAJIA7AAQBoAoBEAAQAmAAANgEQAdgLAAglQAAgfgFABIgFAHQgPgEgQgEQABgFAAgEQAAgggQgHQgWgEgMgFQhVgMg3gFQgegOgggQQghgRh6hDQg6gyg2g8Qgvg5gVgXQg6hUgmguQiejDAACzQAAgBBrChQADAEACAGQgKgEgKgDQhcgdgUA1QBmBWDuCLQgcAAgIAEQgLADgIAOQgtgSgygYQgFgDgFgCQAAgWgFABIgFAHQhlgghyhTQg3gpiIh2Qh2hmhFgqQhJguhEgRQgRglgXg6QgIgWgIgTQAAgKAAgNQAAgogPgXQgLgRgPgDQgHgSgBgCQAAgBgBgBQAZgNAbgPQAKAKASASQAMgFATgLQAOgJAFAAQAAgZAFgXQACgBACgBQAzgjAAg3QAAgGAAgFQAKgJAKgJQAogfAPgMQAZgUAAgPQAAgegHgDQAugPAlgOQAIAGAaAIQASgCAQgCQACACACACQgEABgEABQhkAeAAAhQAAAhAPAKQAAAAAjAMQAWgHBZgRQALgEAJgDQBbBsA3A1QgHAYAAAQIABArQABA6AIAyQAaCfBKAAQAgAAAGgJQACgNAFgIIADAIQACABAAgfQAAgpgehfQgVhEgGgzQAFgDAEgFIAcgtQgRgOgYgcQgHhhglAqQgOgTgLgQIAFgDQACADABgDQACgGAAgfQAAgegFgCQgFgDAAgDQgqgQgaALQgNgPgOgLQAugNDggzQCdgHEMgHQAegIADgCQASgKAAghQAAgfgQgHQgWgEgNgFQgYAAgXAAQAFgCACgDQAKgNAAg0QAAghgPgRQgKgKgZgKQjUAAhVACIgrAD").p("AzIjIQAmAIAvANQgwAAgqAAQAAgRgDgGQAEABAEAB").p("A4Wi7QgSAEgSAEQg8AMgsAPQhUAJgwAFQgCgFgCgBQgFgCAAgDQg7AHg+ANQAogXAfgWQDcgkD0gEQhWAIgrASQgCABgCAA").p("EgrCADEQgFgDAAgDQhwADgcA3QgKAUgBAcQAAAQABAcQAAABAAABIAKAlQAOAjAaAaQAMgFATgLQAOgJAFAAQAAgWAEgUQANgLAMgOQAfgkAAgYQAAgCAAgBQAAgcgHgBQAAgBgBAAQAIgSAAgJQAAgegFgC").p("AxBgiQAAAgAPAKQAAAAAjAMQAQAAAZgUQAegYAAgcQAAgdgFgDQgFgCAAgDQgxAAggAUQgeARAAAS").p("AxLgdQgogHgZACQgPAAgUAFQgDAIgFACQgCACAAAbQAAAUAKASQASAgAqAAQAfAAAJgKQAFgFAAgFQAFAFAAgyQAAgdgFgFQgFgHAAgD").p("AmXJmQi1CDAAA8QAAAhANAKQACABAjALQAegXDtiaQCFhdA1g7QB0hGAAghQAAgegFgCQgFgDAAgDQiBgJibBPQhAAhgoAkQgpAkAAAZQAAAOABAK").p("A7ZFVQg4h7AADoIAAAYQAAAkAGAfQATBjBBAAQAiAAAIgNQADgFAFggQgXhJgOgwQgchXgTgp").f();
	this.shape_3.setTransform(318,125);

	// Layer 8
	this.shape_4 = new Shape();
	this.shape_4.graphics.f("#cbb08d").p("EAoCgUsQAQAAAYgVQAegYAAgcQAAgdgFgDQgFgCAAgDQgwAAghAUQgYAOgEAOQgBAAgBgBQgEgFgCgEQgRgVgIASQgKAAgKAEQgmASgZBNQgMAlgHAnQgVADgMAKQgSATgPANQgSgQgXgJQAVgiAAgfQAAgegFgGQgFgGAAgDQgGgCgGgBQgUiOiqB+QhUA/ieCoQChiKA9giQAIAZgBAFQADAEAtApIAAAtQgDAHgKgEQgVgIgaAAQgFAAjSC3QiCBxhPA4QANADAKAEQAagOAbgQQDth9Cig1QgGgDgFgGQAUgTATgTQAEATAFARQBHgUA4gFQA1glACgOQgHgMAHgMIAFgeIAegFQACAHAjA3QAXAlAFAkQAPgMAMgdQANggAAggIAZgPQBDBaCKHJQAAAygZATQgTAOgpAAQhvAAgmgYQgbgQAFgjQAGgtgDgHQgKgXg+AAQgZAAgfAVQAKAeALAcQAOAmAQAgQgOAIgJAIQgUgYgHgkQAAgBgJhBQgBgFgBgGQgVARgYAZQhDBPgWAQIgZgKQgFgXAig+QgLgIgLgJQgwAlg2AAQglAAgbgpQgVgfAAgQQAAgNAqglQAugoAHgWQgsgPgTgCQgagDg4APQgDAHgCAAQgFACAAggQAAgZAfgUQAygfATgVQAAgPgKgKQilBaiFBGQAKAVAEAcQANANAUAVQgLAHgHAJQgOASAAAjQAAAEATA6QAAALABAMQAAACgEAqQgCAeACAbQgDgKgIgEQgWgEgNgFQgHAChIAWQAIgNAJgOQA0hfAAgbQAAgMgCgJQg8Aug6AtIgJAJQAAABAAAAIBNgFIAPAPQgnAbgaAWQAJAYAKAZQAUgGAPAFQAZALACAsQBNgnAEgcQAAACAAACQASBdBDAYQABALACANQgIAWAAANQAAADAUAtQAOBfAQBSQAEAWAFAVQgTAJgUAHQAAgkgDgPQgGgXgzAAQgBAAgMACQAQATARASIgcAtQgMAPgUAAQgYAAghgpQgGABgHAAQgxAAgqgvQgHAMgFAMQAOApAIAfQAbAOAYAlQgRAhgJAKQgOAQgjABQgBABgBABQgPAMhEAwQhHAygdAjIAAABQAAALgTATQgBAFAAAFQAAAwiNBeQhrBJgzAOQhDAxhxBCQBJgGBEgXQgFACgFADQhBAgh5AYQhPAthhAzQgjgLgBgBQgOgKAAgfQhTAgggAGQhYAXhIASQiMAihBAAQgiAAgRgHQgKgEgOgOIgFgeQARgHATgIQgEgEAAgFQgBgKALgPQACgCABgCIjMAwQgGAAgFgBQgGADgHACQgIADgIAEQAAgCAAgBQAAgHgBgFQgFgBgFgCQgKgEgOgOIgBgGQiGAjhJAJQgCAGgDABQgFACAAggQAAgfAPAAQADAAAEAAIgegDQABADAAADQABAIADAFIg9AAQAEgCADgCQgTAJgBAAQgMAAgKgBQgIABgKAAQghAAgNgHQgBgBgHgGQgKAIgQAHQgtATg3AAQghAAgNgHQgDgBgQgRIgFgeQADgDACgCIjXAAQgegVgPgMQgZgVAAgQQAAgBAAAAQgaAYgsAAQh2AAiaiCQgygqhKhKQhehdgSgQQhbhVgjgvQghgrgCgjQgBgRANg4QAOg7AAg6QAAhbAGgWQgagCgRgCQgZgYgQgPQgdgdAAgRQAAgfACgKIADgEQAbgGBXgJQBugKABAAIAjgDQA1gBBzgBQA7hQBxgZQAggGAmgDQC2g7DqAIQCTAFByAZQAHAACSAMQCSANByAAQAPAPAAAPIB7AHQALgDALgCQANgDEbhCQFQhPDAAQQAAADAFACQAFADAAAdQAAAFlfDFQATgHAVgHQCeg1BTAIQAAADAFACQAEACAAARQCeiQCLhxQEJjVCYg0IABgBQALgZAyg2Qg5AXhGAYQj+BWloBXQlgBWk8A2QlPA6itAAQgZAAmTgZQmUgZgZAAQgfAAhOAFIhHAFIgBAAQgKgEgHgCQhUgahlgCQgoAAgwADQlFACjZBKQlHA/AABDQAAAHAAAFQg1AYgmATQkuBLhrBVQAEAQAXAUQgMAKgHAQQgIASAABKQAAACgEAYQgCAbAFAXQAQBFBVAAQAgAAAPgRQAGgHAHgVQAAgIgBgHIADAAQgCASAAAWIAPAdQADAGADAGQgGACgHADQhYAmAAApQAAAhAOAKQABAAAjAMQA2ABApACQAMgiANgQQAVgYANArQAFAOADAVQAGAAAFABQAWANAWAIQgIAPgRAeQAaBwAoCXQABAAAAACQAPABAQAAQAfAAAJgGQAFgJAFgFIAKgeQgSgdgQgRQgbgbgigHIAKgPQAXgXBMgfQAFgeAIgWQBqBtCEBxQC7CgCfBgQCdBeBnAQQgUAYgfAxQAAAEAAAEQAlAdAjAhQB5gDClgGQCrgED2ADQhpAogaALQghANgfAfIAFAeQAQAQADACQANAHAhAAQAdAAB9ggQB8ggARgLQAFgEDchLQCdg2AbggIBMAAQBLgPB9gFQAdgHADgCQASgLAAggQAAgNgBgIQBogWAVAAQgtACgpAuQgiAxgEADIAFAeQBNAQBBgBQAigBAmgEQAAAMAOASQARASATAHQBwApAFAAQANAEAegFQCrhOCMhBQgSgRgbgaQAZgGAcgGQCrgxAAhBQAAgEgBgEIABAAQDAAADgiDQBkg5A8hAQBAhDAAg4QAAgVgEgOQAMgOALgPQANgSAMgRQAAAAAAAAQAAgBAAgBQANgTALgVQAggVAAgPQAAgUgCgIQAGgPAEgOQBdggBXgkQAlgQAjgQQAAAJAAAKIADBaQAFByAMBhQATCbAgBOQgDAHgDAHQgZA3AAAZQAAAhAOANQAHAHAdAJQAdgLAihFQAegBAJgMQADgFAFggQgHgNgHgOQAOgkAAgRQAAhEgZgCQgHAAgIAEQAEhXAGh4QACgwACgmQAfBCAKARQgPBHAAAZQAAARAKAMQADAEAlAlQAUgFAPgKQAPg4AKhCQAKhBAAgmQAAiLgTgOQgMgJgSApQgIgvgPhAQAKgLAWgOQAogYAAgaQAAgHgdhZQghhrgphwQghhbghhPQAggLAkgDQBRgFBEAyQBLA4AgBvQAAABAAAAQAfAXAiAaQA7AwA+A4IAxgJQABgEAEgMIAPgEQABgEAGgOQADgHAAgeQAAgNhZhSQgzgug7gyQAIgCAHgDQBNBlBhAAQA6AAAbgZQAZgXAAgtQAAgDglhhQBvBJCSAAQBAAAANgRQADgEAGgPQAFgOAJgKQiGg9hdh2QAFgIACgSQguhRhFirQgziDghhRQgahvgfg+QADABADAB").p("EAm3gTEQAHArAIAqQgKgbgKgWQgHAGgHAHQAAgdAEgYQAIACAHAC").p("AcfrgQgCAMgDANQgDABgDAAQgZgPgUgKIA4gB").p("AgGlvIgsAAQAXgCAWgDQAAACgBAD").p("ADjPFQACgLACgKQAIAEAXAHQAYgEAbgHQAAACAAADQgfAMgbANQgNgFgPgE").p("A9ghrQABgCgBgCQAJAAAJAAQgJACgJAC").p("EgjeAElQgCABgCACQgDgEgEgFQAGADAFAD").p("A8tCvIARAAQgEACgFACQguAQgWAAQgBAAgHgIQAigOAZgIQAEAFAFAF").p("EgiDAHAQAXgKAkgPQAGAIAHAIQgnAMgbAFQgDgEgDgE").p("EghvAHdQAsAcAwAjQANgCANgBQAWAgARAVQAOATAoBDQgigRgngTQgpg3g5gvQgTgggVgd").p("Au4P3IgFAPQjAAOi8AQQh9AKgXAAQg2AAgngWQgMgKgLgHQAIgCAFgDQApgRAAguQAAgegFgCQgFgDAAgDQghgEg7gaIAIAAQCUAwDLAKQAGABAHABICbAAQgNAMgMANIAFAeQAQARADABQANAHAhAAQAeAAAogIQAVgEAigI").p("AsxQZQgKAAgKABIAJgGQAEACAHAD").p("A8BKxQgUgegOgOQAiAKBGAuQADANABANIgrADQgLgLgUge").p("EAkBgPnQg+AagSATIgIAFQgBAFAfAAQAOAAAYgZQANgNAWgWIgPAF").p("EAm/gJhIAAAtIAtgFQgogogFAA").p("AXOpGQAIAKAIALQANgDANgDQBTgXATg2QgjABgsAaQglAWgcAN").p("EAhOgLAQAGAIAFAIQAjgeADgGQgbAFgWAP").p("EAgWgJ/IgKAKQAMgHARgNQgEgCgDgCQgHAIgFAG").p("EAg5gMfQApgTAagmQAZgngMgYQgWAMgvAiIguAiQAHAVAcAT").p("AZkjgQADAJAEAJQAJgOAIgOIgKgKQgDAJgLAL").p("AWWklQAAADAAACQATgEAWgDQgCgBAAgDQgCgJgEgJQgPAMgSAM").p("AXBjdQgQAJgnAXQAJAFAHAFQATgQAWgWQgBgBgBgD").p("AXJiDQAKAOAKAPQADgDADgCQgFgPgGgQQgHAEgIAD").p("AWNnnQgBgDgBgCQgEABgDACIgKAFQAKgBAJgC").p("ACPHZQgVgBgSgDQACABABABQADABABAKQAQgEAQgF").p("AFEGYQgZAHgbAHIAAABQAAAIgCAHQAfgIAfgJQgEgGgEgGIAAgB").p("ADtF1QgUAAgPAFQAFABAEABQAPgDALgE").p("AQelsQg1AygYAUQAGgCBVgzQBVg0AOgKQg8AFg1Ao").p("ASBi6QhDAchdAtQhOAmhCAfQADAIAAATQAAAFgXAPQAbAEAWAGQANgCAMgDQB4gcCmg+QgHgNgGgMQgSAJgLAEQgGAIgGACQgNAEAAggQAAgYAigcQgCgLgBgL").p("ALHEHQAJgDAJgEQACgKAAgQQgMAAgMADIgLADQACACABACQAJAPADAI").p("ATUDNQAbAIAJAKQg/Asg6AkQABAIAAAMQAAAKgLALQAAABABAAQAAADAFASQABADAAAEQCGiMBag1QgQgVgOgSQg3AigzAe").p("A6fhKQgPAtAAAPIAAAKQAPgOAEgbQAEgagIgIIAAAF").p("A6GAjQgcAYgFAKQgHANAAAkQAAAjACAFQABABAMAJQAWgfAFgyQAEgogGgRIAAAF").p("A2+AjQAWgDAJgVIAEgUIAAgFQgPAAgUAKIAAAn").p("A2WCMQAGgDACgOQgDgWgCgUQgMADgQAQQAIAXARAR").p("A3IEnQAAAfARAhQAKASASAfIAKAAQgUhagZhLQAAADgFAKQgFAKAAAd").p("A6BEHIANAtQAIAaAJATIAKAAQgMhJgcgWIAAAF").p("A0RGLQgJgJgIgKQgMABgNACQgEAAgEAAQAHgEAGgFQAGAAAFgBQACAAABgBQgPgUgOgWQAAAAAAABQgBAKAAAmQAAAgAHAjQAVgMAggNQgBgKgBgMIgFAA").p("A0PIBQgOAAgMAAQAJAWAKAWQA9B+BgAeQADgPABgbQAAAAgBAAQgmgqgbgvQgUglAAgKQAAgZAAgNQgjAKghAG").p("Aw2HdQgEgBgFAAQAFAEAEAFQAAgEAAgE").p("Aj/isQAmgJAigIQgpACgbABIgEAO").p("Aq8mAQiNAAgUAHQgHACAFAGQAEADAJAHQADADAhgDQAYgBBpgJIgPgP").p("AvjH3IAPgFQgPgFgPgEQADAIACAHQAFAAAFgB").p("AorIVQAegEAvgPQAugOAHgHIiCAo").p("AkBFjQgCAAgBAAQh/AlhxAfQBHgJDng+QghADgaAA").p("ApLKZQgXAGgTAFQAWABAWAAIgCgM").p("AqmLRQgSgCgTgDQAJADAMADQAJgBAHAA").p("At9KsQAQAJAMAIQA7AEBNAJQg7gKgugPQgggBgbgE").p("AY4ttQAzg0BYhPQiLBRAAAwQAAABAAAB").p("EAiMgJmQAVgjAfgyQghApgcAcQAFAIAEAI").p("AcNkNQgSgFAAAAQAEgDgDgCQgFgFgfAAQgNAAgtALQAkAmAHALQAMAQADAWQA8gfAAgUQAAgegHgC").p("EgovAMCQgLgXgLgTQApCUApCLQgFAIgFASQgFAIgMADQAtBxAqBVQgDAIgFAUQgKARggAAQgBAAgBAAQBUCMBiAAQAyAAAAg8QgUgWgYglQAnANApAEQhHhdhBiVQgDgIgDgHQg8g1gogqQgUgwgRglQAgAVAyARQgTg5gRg8QgGgVgFgRQgpgigpAAQgDAIgGADQgBAAAAAO").p("AR6N4QAOAUAWAHQAaACAZADQAEAQAJAHQABABAjALQAjgJAxgKQDPAcBqArQANAFAMAFQgHALgGAUQgTA7AAB0QAAA0gOAzQAAAnBABGQAYgOAQgaQAIAJAMALQALgDARgJQAPgIACAAQAFAFAAgxQAsgUAMgyQAEgRAAhCQAAinhahaQglgmg0gaQghgug/gWQhIgZhgAKQhFAGg3AWQhZAGhoARQAAAXAOAU").p("AboQjQAhAeAEAlQACAZgKAmQgCAIgDALQgDhOgQg4QgCgIgDgH").f("#8f7856").p("EAk4gSCIgeAFIgFAeQgHAMAHAMQgCAOg1AlQg4AFhHAUQgSAFgTAGQiiA1jtB9QgbAQgaAOQgKgEgNgDQBPg4CChxQDSi3AFAAQAaAAAVAIQAKAEADgHIAAgtQgtgpgDgEQABgFgIgZQg9AiihCKQgjAegpAkQgQAPgPANQhYBPgzA0QgCADgDACQgyA2gLAZIgBABQiYA0kJDVQiLBxieCQQAAgRgEgCQgFgCAAgDQhTgIieA1QgVAHgTAHQFfjFAAgFQAAgdgFgDQgFgCAAgDQjAgQlQBPQkbBCgNADQgLACgLADIh7gHQAAgPgPgPQhyAAiSgNQiSgMgHAAQhygZiTgFQjqgIi2A7QgmADggAGQhxAZg7BQQhzABg1ABIgjADQgBAAhuAKQhXAJgbAGIgDAEQgCAKAAAfQAAARAdAdQAQAPAZAYQARACAaACQgGAWAABbQAAA6gOA7QgNA4ABARQACAjAhArQAjAvBbBVQASAQBeBdQBKBKAyAqQCaCCB2AAQAsAAAagYQAAAAAAABQAAAQAZAVQAPAMAeAVIDXAAQgCACgDADIAFAeQAQARADABQANAHAhAAQA3AAAtgTQAQgHAKgIQAHAGABABQANAHAhAAQAKAAAIgBQAKABAMAAQABAAATgJQAOgGAVgLIAOACIAeADQgEAAgDAAQgPAAAAAfQAAAgAFgCQADgBACgGQBJgJCGgjIABAGQAOAOAKAEQAFACAFABQANADARAAQAFABAGAAIDMgwQgBACgCACQgLAPABAKQAAAFAEAEQgTAIgRAHIAFAeQAOAOAKAEQARAHAiAAQBBAACMgiQBIgSBYgXQAggGBTggQAAAfAOAKQABABAjALQBhgzBPgtQAcgQAbgQQBxhCBDgxQAzgOBrhJQCNheAAgwQAAgFABgFQATgTAAgLIAAgBQAdgjBHgyQBEgwAPgMQABgBABgBQAjgBAOgQQAJgKARghQgYglgbgOQgIgfgOgpQAFgMAHgMQAqAvAxAAQAHAAAGgBQAhApAYAAQAUAAAMgPIAcgtQgRgSgQgTQgjgqgdgzQA8gwAAgTQAAgMgDgMQgDgWgMgQQgHgLgkgmQgLgMgNgOQgKACgKABQACgHAAgLQAAgGgBgHQgCgsgZgLQgPgFgUAGQgKgZgJgYQAagWAngbIgPgPIhNAFQAAAAAAgBIAJgJQA6gtA8guQAFgEAFgEQAjgeAAgkQAAgZgEgVQgEgcgKgVQCFhGClhaQAKAKAAAPQgTAVgyAfQgfAUAAAZQAAAgAFgCQACAAADgHQA4gPAaADQATACAsAPQgHAWguAoQgqAlAAANQAAAQAVAfQAbApAlAAQA2AAAwglQALgIAKgLQADgCADgDQAcgcAhgpQgfAygVAjQgDAGgDAEQgEAIgEAHQgiA+AFAXIAZAKQAWgQBDhPQAYgZAVgRQAFgDAFgEQAfgVAZAAQA+AAAKAXQADAHgGAtQgFAjAbAQQAmAYBvAAQApAAATgOQAZgTAAgyQiKnJhDhaIgZAPQAAAggNAgQgMAdgPAMQgFgkgXglQgjg3gCgH").p("EAkQgPsQgWAWgNANQgYAZgOAAQgfAAABgFIAIgFQASgTA+gaIAPgF").p("EAnsgI5IgtAFIAAgtQAFAAAoAo").p("AYPppQAsgaAjgBQgTA2hTAXQgNADgNADQgIgLgIgKQAcgNAlgW").p("EAh/gLUQgDAGgjAeQgDAEgEADQgXAUgSAMQgRANgMAHIAKgKQAFgGAHgIQALgOARgWQAIgIAIgHQAWgPAbgF").p("EAgWgNHIAugiQAvgiAWgMQAMAYgZAnQgaAmgpATQgcgTgHgV").p("AZyj0IAKAKQgIAOgJAOQgEgJgDgJQALgLADgJ").p("AW3k9QAEAJACAJQAAADACABQgWADgTAEQAAgCAAgDQASgMAPgM").p("AXDjZQgWAWgTAQQgHgFgJgFQAngXAQgJQABADABAB").p("AXYiKQAGAQAFAPQgDACgDADQgKgPgKgOQAIgDAHgE").p("AV6nkIAKgFQADgCAEgBQABACABADQgJACgKAB").p("ABvHiQgBgKgDgBQgBgBgCgBQASADAVABQgQAFgQAE").p("AFEGZQAEAGAEAGQgfAJgfAIQACgHAAgIIAAgBQAbgHAZgHIAAAB").p("ADTF8QgEgBgFgBQAPgFAUAAQgLAEgPAD").p("ASPmZQgOAKhVA0QhVAzgGACQAYgUA1gyQA1goA8gF").p("ASEikQgiAcAAAYQAAAgANgEQAGgCAGgIQALgEASgJQAGAMAHANQimA+h4AcQgMADgNACQgWgGgbgEQAXgPAAgFQAAgTgDgIQBCgfBOgmQBdgtBDgcQABALACAL").p("AK7DwQgBgCgCgCIALgDQAMgDAMAAQAAAQgCAKQgJAEgJADQgDgIgJgP").p("AU+CNQAOASAQAVQhaA1iGCMQAAgEgBgDQgFgSAAgDQgBAAAAgBQALgLAAgKQAAgMgBgIQA6gkA/gsQgJgKgbgIQAzgeA3gi").p("A6fhPQAIAIgEAaQgEAbgPAOIAAgKQAAgPAPgtIAAgF").p("A6GAeQAGARgEAoQgFAygWAfQgMgJgBgBQgCgFAAgjQAAgkAHgNQAFgKAcgYIAAgF").p("A2+gEQAUgKAPAAIAAAFIgEAUQgJAVgWADIAAgn").p("A2vBkQAQgQAMgDQACAUADAWQgCAOgGADQgRgRgIgX").p("A3DEAQAFgKAAgDQAZBLAUBaIgKAAQgSgfgKgSQgRghAAgfQAAgdAFgK").p("A6BECQAcAWAMBJIgKAAQgJgTgIgaIgNgtIAAgF").p("A0MGLQABAMABAKQggANgVAMQgHgjAAggQAAgmABgKQAAgBAAAAQAOAWAPAUQAEAEACAEQAIAKAJAJIAFAA").p("AzLHxQAAANAAAZQAAAKAUAlQAbAvAmAqQABAAAAAAQgBAbgDAPQhggeg9h+QgKgWgJgWQAMAAAOAAQAhgGAjgK").p("Aw2HlQgEgFgFgEQAFAAAEABQAAAEAAAE").p("Aj7i6QAbgBApgCQgiAIgmAJIAEgO").p("AqtlxQhpAJgYABQghADgDgDQgJgHgEgDQgFgGAHgCQAUgHCNAAIAPAP").p("AvtH4QgCgHgDgIQAPAEAPAFIgPAFQgFABgFAA").p("AmpHtQgHAHguAOQgvAPgeAEICCgo").p("AjGFgQjnA+hHAJQBxgfB/glQABAAACAAQAaAAAhgD").p("ApJKlQgWAAgWgBQATgFAXgGIACAM").p("Aq2LSQgMgDgJgDQATADASACQAFABAEAAQgFACgFACQgCgBgCgBQgGgBgFgB").p("AtCKxQAuAPA7AKQhNgJg7gEQgMgIgQgJQAbAEAgAB").p("EgryAFmQgFAPgFASQgPA+AAA8QAAABANB8QAHAyAHAuQgHAMAAAYQAAAaArB5QBXF4CKACQABAAABAAQAgAAAKgRQAFgUADgIQgqhVgthxQAMgDAFgIQAFgSAFgIQgpiLgpiUQgEgRgFgRQAAgCgBAAQgoiXgahwQgGgcgGgaQgIAGgHAIQgBgPgCgMQgDgVgFgOQgNgrgVAYQgNAQgMAi").f();
	this.shape_4.setTransform(343.8,143.5);

	// Layer 1
	this.shape_5 = new Shape();
	this.shape_5.graphics.f("#ecd59d").p("EA0RgkxQAAhHgCgSQgDgYgHgaIi6AAQAAAFABACQAFAUAMAQQAAAJAAAKIABAZQgBAcAAAbQAAACgDAkQgCArAEAjQANBrA/AEQAUAaAZAJQAAATADAHQAJAbAmAMQAJgCARgHQAOgGAFAAIAEgaQABgFAAgRQAFgCACgCIAIgIQAFAFAAgyQAAgmgehLQgehMAAgV").p("EA1cgbpQgJACgJACQgCgCAAgCQgigBg9AbQiQAmhiA9QhCApghArQgDgHgGgCQgWgFgNgFQggAkgoAkQgyAvgDACQgtAtAAA7QAAAIAAAHQgDADgEAEQgRgXgcABQBwh5AAgQQAAgggPgGQgWgFgNgFQilBejfDmQjyD4AAByQAAAFAAAFQhBBvgKAOQhZCDiHDpQhYCZgbA2QgpAcgpAoQg0AxgmA2QgiAwAAAOQAAAgAOAKQABABAjAMQAtgUCdh+QCoiHAAgfQAAgdgFgDQgFgCAAgDQgGgBgFAAQAGgHAGgHQAHABAHAAQAeAAAJgKQAFgFABgFQAFAFAAgyQAbgbAgghQBTglEbk5QAogsAlgqQADAAAFAAQBFAABqjRQAJgQAIgRQAmg0AAgLQAAgFgBgFQAVgaAAgLQAAgOgBgIQAEgMAEgJQBfhZArg5QAmgbBKg3IAIgDQABgCACgDQA0gmBEg0QBMg4A3grQBUgxAagRQA4gmAAgYQAAgdgFgDQgFgCAAgE").p("AO/hzQgFgPAAgCQgIABgKACQgCgBAAgCQgHADgIAEQi4AmhhBPQheBLAABkQAAABAAABQgoAhgZAZQgGgDhEgvQg7gogMAAQg3AAjNhFQg3gSlQh2Qkeh3iAgSQjnhEg1AQIAFAeQBIAjBLAjQgpgJgtgHQgKgCgKgCQgBgagPgGQgWgEgMgFQjsgjkwBvQhwAohSAvQhMArAAASQAAAgAOAKQABABAjAMQA4gMAvgeQBHgvATgJQBLgkCKgUQACACACADQAcAeA+AAQEQAAC5AyQAvALBIAWQA8AQA2AAQAOAAAMgCQBIAdCKA2QCBA2BFAzQARAMAUANQAeAgAvALQAnAVAwAWQACAQALAPQAOAUAVAIQAngEAmgDQBGAcBTAdQE2BuBGAAQAgAAAIgGQAFgEAFgKIAKgeQgVghhBgcQALADAMAFQCBAwBAA3QAeAAAIgIIAHgHQAFAFAAgyQAAg+h9gyQgTgHgUgHQADgsAFgmQBMhFBuiLQCDijAAgZQAAgegFgGQgFgHAAgCQg7AChIA6QgBgPgEgI").p("AKrCMQgDgEgDgDQADgEADgFQAAAIAAAI").p("AKyFBQADAOAGAMQgfgIgigGQAqgEANgHQAAAAABgB").p("AHXEvQARAFANAEQgKgCgKgBQgDgCgHgE").p("AScFLQglgHggADQgcAEgIAAQgBAIAAAJQgNgBgGAiQgjhwgTgPQgfgXAADmQAAgLB3GAQAAAFAAAFQgBBDAGBuQgPA/gFBUQgEA2AAC6QAAACgCBuQgBBOABBGQABAuACArQAPFYBKAAQAWAAAMgHQADAGADAIQAkBSAnBHQAvBYAnA1QgGAJgFAPIAFAeQANAMAEAEQADAJAGAIQgDABgDABIgCAEQgDAKAAAfQAAAXBKBBQAMAVAMAIQAKAHAVAGQA2AjAvAAQAzAAAOgSQAAgBABgCQAMABAMAAQAoAAAMgPQANgZAPgUQiChChCgRQgbgGgXgCQgMgHgMgFQgCgHgCgHQACgCACgBIAKgeQgDgIgDgIQAEgOACgFQgMgSggg6QAagBAIgNQAFgSAFgHQgViAgnh6IAAAAQAAgBgBgBQgFgRgGgRQgWhAgchCQABgDABgBQAAgMAAgMQAFgBADgDIAHgHQAFgKAAgyQAAgDgiiHQgUhSggiCQgBgIgCgIQAKgCAPgHQAOgFAFAAQAEgYABgGQAAgJAAgkQAAhggRhsQgIgygKgtQAEgEADgEQAGgJACgTQgkhJgUhrQgQh2gIgvQgEgTgDgRQAHhpAAgOQAAgggPgLQgWgHgNgFQgaAPgVAZQgDgRAAgLQAAgRAJg4QAHgsgGgZ").p("ASiWrQAKgEAFgBQAOA3ALAwQgOAMgCBrQAAAOAAAQQAAgGAUBEQAAAHAAAGQAAAJAAAHQAAADAAAEIAAACQABAqADAQQAEAcANAVQAMA3ASBSQg3hRgcgBQgCgRgCgNQgKhJgOgzIAAldQAHgCAJgE").p("EghNAC7QhOAOhnAwQg/AeiHBLQjIBwiMA5QgyAUgrANQgBgHgCgFQgFgPAAgCQgtAIgiAIQhXASgMAKQgNALAAAZQgBAQACAzQAAAIgDAbQgDAcAGAUQAGAUAPAOQgBACAAABQAAAiAOANQAHAGAdAKICgAAQAfgMAegLQDkhbDeiJQABgBACgBQBmguBDguQBDgtAAgXQAAgFAAgFQAmghAagfQAJgDAKgFQBhgpAAglQAAgegFgCQgFgDAAgCQgVAAgdAGQAAgBAAAAQAAgegFgGQgFgHAAgCQghAAglARQAAgXgFgFQgFgHAAgC").p("EgrgALWQADgCACgBQAFgBAGgBQgIACgIAD").p("EgueALwQgCAAgCAAQABgDAAgBQACABABAD").p("EgnTASQQABABAjAMQBag5DDidQEJjTAAg8QAAgegFgGQgFgGAAgDQhRgTg8BAQgNAOgtA6QgpA1gjAjQgPAPiaBqQiSBsAAApQAAAgAOAK").p("A6PFpQBNgnBnicQBaiJAAgaQAAgcgFgKQgFgKAAgDQh/AGhoCsQg0BXgbBZQAAAgAOAKQABABAjAM").p("EghNAQaQgWgEgMgFQgfAMiQCZQibCmAAA2QAAALABAJQgbAVgqAsQg0A4AAATQAAAgAOAKQABABAjAMQAVgHA3hDQA2hBAAgOQAAgIgBgGQBEg1B8iXQCBidAAgZQAAgfgQgH").p("Ego7AT3Qh1AchsCzQgJAPgKAQQgwBWgdBYQgdBYAAA5QAAAGADALQgHgCgGgCQgaAWgTAeQgdAtgKA+QgGApAACTQAABRADAZQAJA9AhAoQACADADADQAMgFASgLQAPgJAFAAQAAhvAUiaQARiEAChGQAGAGAFAGQALgDARgJQAPgIACAAQAEhaBEiPQAbg5AlhCQBBhuAYgqQAohFAAgQQAAgdgFgDQgFgCAAgD").p("EgoTAZzQgrgCgjATQg5AggeBZQgPAvgHA6QgHALgFANQgMAdAAAsQgBAZACAvQAAB/AyBbQBlC0ENAAQApAAAOgSQAMgZANgRQjmiwgngiQgQg8gqgyQgegkgHgMQgQgcAAggQAAgLABgLQAIgKALgMQAogtAAgQQAAgdgFgDQgFgCAAgDQgGAAgGABQAGgNAGgOQAyhqAAgLQAAgMgBgIQgBgLgDgBQgFgCAAgD").p("AbMegQgRghgNgKQAAgMAAgLQAAhogPg9QgMgtgQgIQgDgCgEABQgDAAgDABQgRAIgLAuQgQA+AABoQAABRAEAZQAJBCAlApQADgBAEgCQABAXADAUQAGAkANAYQAAAMABAcQAFA3AYAsQBKCNDiAAQAjAAAPgOQALgKAJgaQgXgNg9g3QhLhFgngjQgugpgkgaQAAgFAAgGQAAghgWhJQgWhKgagx").p("EgztADqQgWB3gTCmQgTCeAAAzQAAABAAAAQgNAlgFA6QAAAGgBAJQgJApgFA6QgHBLAACtQAAAfANAKQgNAYAAAlQAAALAFAQQgMAOgNARIAFAeQAHAHAHALQAJAHAgAAQBkAAAnhvQAVg8AAhZQAAgxgWiSQgJg8gKg2QgBh+gMhVQACgbABgeQALjaAAgSQAAjigTgGQgPgEgaCO").f("#f2e2bd").p("EAyFgp1QgFgEgFgBQgeAWgMAwQgIAeAAAdQAAArACASIC6AAQgHgZgLgaQgjALgRAgQgDh8gKg6QgSgKgTgIQgEAKgEAN").f("#dec898").p("AnHuJQAVAHAjAAQA2AABXg3QBZg4AAgqQAAgdgFgDQgFgCAAgEQhHgUhxA5QhmA0gYAvIAFAeQAMAMARAG").p("AgTwtQgxgSgbARQgIAFgaAfIAFAfQAHAHAHALQAJAHAgAAQAeAAAMgIIANgHQABADABgDQADgGAAggQAAgdgFgDQgFgCAAgE").f();
	this.shape_5.setTransform(314,273);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new Container();
p.constructor = lib.shades001;
p.nominalBounds = new Rectangle(-28.9,-10.9,686,554);

(lib.sledgeMc = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.sledge();
	this.instance.setTransform(1.7,0,0.758,0.758);

	this.shape = new Shape();
	this.shape.graphics.f("rgba(130,112,77,0.62)").p("ARcHMQgzAVgbAAIoQAAI85AAIh7AAIgUAAQgDAOAfAIQARADAlAEIA9AAIc5AAIKtAAQAogEAagNQAXgNACgPQACgPgWgJQAAAAgBAAQgZgKgrACQgbACg2AZ").f();
	this.shape.setTransform(148.3,51);

	this.addChild(this.shape,this.instance);
}).prototype = p = new Container();
p.constructor = lib.sledgeMc;
p.nominalBounds = new Rectangle(0,0,296.6,102);

(lib.Summary_forcevector = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.arrr();
	this.instance.setTransform(-4.7,-73.9);

	// Layer 5
	this.instance_1 = new lib.fnText("synched",0);
	this.instance_1.setTransform(9.5,-85.1,0.577,0.577,0,0,180,20.6,16.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new Container();
p.constructor = lib.Summary_forcevector;
p.nominalBounds = new Rectangle(-6.2,-100.4,31.5,106.5);

(lib.Summary_forcevector_down = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.fgText("synched",0);
	this.instance.setTransform(9.1,-84.5,0.577,0.577,180,0,0,20.6,16.9);

	// Layer 4
	this.instance_1 = new lib.upArrow();
	this.instance_1.setTransform(-4.7,-73.9);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new Container();
p.constructor = lib.Summary_forcevector_down;
p.nominalBounds = new Rectangle(-6.6,-98.4,31.5,104.5);

(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bgGrey();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.Symbol1;
p.nominalBounds = new Rectangle(0,0,1025,768);

(lib.Symbol101 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("rgba(40,19,16,0.78)").p("AE5lKQgRgRgTgQQgJAEgCAEQgGAIAAAcQAAABAOAvIgFAAQAHAVAMAkQgCAcAAAlQAAAvBLElQBOEwAsBuQADgBAEgBQApB8AUAVQACgBABAAQAMBEANAyQAvC6BIAAQAzAAAJhnQAAgFAAgFQADgKAAgoQAAgFgDgVQgBgiAAgIQAAhvgfjaQggjbAAhmQAAgVARhcQARhaAAgWQAAgbgMgJQgHgDgFgBQAAgBAAgBQAUgYAMgIQAXgPAgAAQAAAAABAAQAgAbAqAZQALAHALAFQAQAQATAVQA6A+B9CeQCDCmAxA3QBaBlAiAAQAZAAAGgGIAHgHQADgIAFgGQAAgCAAgYQAAgvhviWQh0idgIgsQgVh8hUhjQhhhxibgrQjxi2hzAfQgsgKgtgCQhtgFhZAuQA8AxAgBK").p("AGABMQAHAVAHAVQABAIACAIQgJgegIgc").p("AKtO8QgHgYgJgbQAJAQAJALQgBAQgBAMIAAgE").f("#6f5126").p("EAtjgSmQggg+g/g2QhBg5hIgWQi1g4hhCzQgQAegMA+QgCAIgBAHQgGAAgFgBQgXAfgZAdQgzA5gyAAQgYAAgHgMQgHgLgLAAQgDgjgCgPQgEgXgIgRIgPAAQAIgqAUhWQAiiZAAgBQAAgagGgDIgHAEQAAAAgBAAQAcgoAnghQhmAOg2CCQgTAtgKAxQgeBlAABhQAABbAHAbQAMAyAqAiQgFACgFACQAFAGAXAEQAFADAGAEQAEgCAEgCQABAAABAAQAGAAAGABQAZAgAjAAQAbAAAKgGQAGgDAAgDIgEgNQgFgDgFgCQDLgKAzijQAPguAKheQAIhRAOgYIAygCQA3gCAbAAQA0AABQBAQBTBCAMACQAJgDAFgHQADgFAEgL").p("EAglgRTQAAANACAUQAFAxAJAqQgBADgDAIQgDAOAIAMQAEAGAJAFQACAHADAHQgfgigJgoQgEgUAAhNQAAgFAAgGIAJgE").f("#3a1b18").p("ArCXHQA7guAAgfQAAgSgEgIQgKgSglgLQhrghlGAcQhehJkohnQiwg8gugSQh0gsg9gmQBugdCmhYQDeh2AAhXQAAgZgHgJQgGgIAAgDQgRgJgrAAQgDAAjvBwQjvBwgDAAQiIAAh9hdQgzgmgggqQgegoAAgcQAAgqAjh2QAjh2AAgkQAAhOgmgLQgigKgyAsQgyAsgiBHQgmBOAABKQAAAVgDA+QgBAeAFASQADALARAkQgugMg0gUQhhgrgpgPQhEgbgkAGQgtAJgXA8QATAdCbA3QASAGAPAGQgBAGAAAHQAAAaAFAAQACABACgGQAZAKBOAhQBNAdA3AAQAJAAAVgMQAEgCADgCQArA1B/BBQC9BfA3ArQC3CUF2CSQF/CXDUAAQBUAABHg3").f();
	this.shape.setTransform(291.5,-20.7);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.Symbol101;
p.nominalBounds = new Rectangle(0,-174,583,306.7);

(lib.und_pan1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);


	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(0).call(this.frame_0).wait(2));

	// Layer 3
	this.instance = new lib.boxHighlight();
	this.instance.setTransform(-2.9,-0.1);
	this.instance._off = true;

	this.timeline.addTween(Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Layer 2
	this.shape = new Shape();
	this.shape.graphics.f("#1a1811").p("AA7gHIBWAAIAAgSIhWAAIAAAS").p("AgSAAQgJAAgFADQgGAEgCAHQgEAHAAAHQAAAIAEAIQACAHAGADQAFAFAKAAQAFAAAFgCQAEgCADgFIAAAIIAOAAIAAhPIgPAAIAAAcQgDgEgFgCQgEgBgFAA").p("AAAAdQAAAFgCAEQAAAEgDACQgEADgFAAQgFAAgDgDQgDgDgCgDQAAgEAAgFQAAgFAAgEQACgEADgDQADgCAFAAQAFAAAEACQADADAAAEQACAEAAAF").p("AhPAAQgIAAgHADQgGADgEAIQgDAGgBAJQABAJADAGQAEAHAGAEQAHAEAIAAQAKAAAHgFQAHgEADgLIgNAAQgCAEgCACQgEACgFAAQgGAAgEgDQgEgEAAgHIAqAAQAAgHgCgGQgCgGgDgFQgDgFgFgDQgGgBgIAA").p("AhbASQACgDACgCQADgCAFAAQAGAAADADQADACAAAHIgZAAQAAgCABgD").p("AA7AdIBWAAIAAgSIhWAAIAAAS").p("AiigVIAABPIAQAAIAAhPIgQAA").p("AiFAAIAAA6IAQAAIAAg6IgQAA").p("Ah1gIIAAgNIgQAAIAAANIAQAA").p("AkTABQgFACgCAFIAAAAIAAgIIgPAAIAABOIAPAAIAAgbQADADAFADQAEACAFAAQAJAAAGgEQAGgEACgHQADgHAAgIQAAgIgDgHQgCgHgGgEQgGgDgJAAQgFAAgFAB").p("Aj/AdQAAAFgBAEQgBAEgDACQgEADgFAAQgFAAgDgDQgDgCgBgEQgBgEAAgFQAAgFABgEQABgEADgDQADgCAFAAQAFAAAEACQADADABAEQABAEAAAF").p("AjmAAIAABOIAQAAIAAgbQADADAEADQAFACAFAAQAIAAAGgEQAGgEADgHQACgHAAgIQAAgIgCgHQgDgHgGgEQgGgDgIAAQgGAAgEABQgFACgCAFIgBAAIAAgIIgPAA").p("AjWAUQACgEADgDQADgCAFAAQAFAAADACQADADABAEQACAEAAAFQAAAFgCAEQgBAEgDACQgDADgFAAQgFAAgDgDQgDgCgCgEQgBgEABgFQgBgFABgE").p("AGxhNIAABSIAAAAIg0hSIgaAAIAAB5IAZAAIAAhQIAzBQIAbAAIAAh5IgZAA").p("ADihHQgKAGgGANQgFAOgBAXQABAXAFANQAGAPAKAFQAKAGAMAAQAMAAAKgGQAKgFAGgPQAGgNAAgXQAAgXgGgOQgGgNgKgGQgKgGgMAAQgMAAgKAG").p("ADlgPQAAgEAAgIQAAgGACgHQACgHADgFQAEgFAIAAQAHAAAFAFQAEAFABAHQACAHABAGQAAAIAAAEQAAAGAAAGQgBAHgCAHQgBAHgEAEQgFAEgHABQgIgBgEgEQgDgEgCgHQgCgHAAgHQAAgGAAgG").p("AlPAAQgHAAgFAAQgHACgDAEQgFAFAAAHIAPAAQABgFADgCQADgCAEAAQADAAACABQACAAACACQABACABADQgBADgDABQgCACgEAAQgFABgFAAQgFABgEABQgFACgCAEQgDAEAAAGQAAAGACADQADAFAEABQAFACAFAAQAGAAAFgBQAFgCAEgEQAAACAAABQAAABABACIAQAAQgBgCgBgEQAAgDAAgFIAAgdQAAgFgCgEQgDgDgDgCQgEgBgFAAQgEAAgEAA").p("AlFAdIAAAGQAAABgBADQgBACAAACQgCADgDABQgCACgFAAQgDAAgDgCQgDgBAAgFQAAgEADgCQADgBADgBQAEgBADgBQAEAAADgC").p("Al7gaIgzAAIAAgcIA7AAIAAgXIhWAAIAAB5IAbAAIAAgxIAzAAIAAgV").f();
	this.shape.setTransform(110.8,61.7);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#1a1811").p("AA7gHIBWAAIAAgSIhWAAIAAAS").p("AhPAAQgIAAgHADQgGADgEAIQgDAGgBAJQABAJADAGQAEAHAGAEQAHAEAIAAQAKAAAHgFQAHgEADgLIgNAAQgCAEgCACQgEACgFAAQgGAAgEgDQgEgEAAgHIAqAAQAAgHgCgGQgCgGgDgFQgDgFgFgDQgGgBgIAA").p("AhbASQACgDACgCQADgCAFAAQAGAAADADQADACAAAHIgZAAQAAgCABgD").p("AgSAAQgJAAgFADQgGAEgCAHQgEAHAAAHQAAAIAEAIQACAHAGADQAFAFAKAAQAFAAAFgCQAEgCADgFIAAAIIAOAAIAAhPIgPAAIAAAcQgDgEgFgCQgEgBgFAA").p("AAAAdQAAAFgCAEQAAAEgDACQgEADgFAAQgFAAgDgDQgDgDgCgDQAAgEAAgFQAAgFAAgEQACgEADgDQADgCAFAAQAFAAAEACQADADAAAEQACAEAAAF").p("AA7AdIBWAAIAAgSIhWAAIAAAS").p("Ah1gIIAAgNIgQAAIAAANIAQAA").p("AiFAAIAAA6IAQAAIAAg6IgQAA").p("AiigVIAABPIAQAAIAAhPIgQAA").p("AjmAAIAABOIAQAAIAAgbQADADAEADQAFACAFAAQAIAAAGgEQAGgEADgHQACgHAAgIQAAgIgCgHQgDgHgGgEQgGgDgIAAQgGAAgEABQgFACgCAFIgBAAIAAgIIgPAA").p("AjWAUQACgEADgDQADgCAFAAQAFAAADACQADADABAEQACAEAAAFQAAAFgCAEQgBAEgDACQgDADgFAAQgFAAgDgDQgDgCgCgEQgBgEABgFQgBgFABgE").p("AkTABQgFACgCAFIAAAAIAAgIIgPAAIAABOIAPAAIAAgbQADADAFADQAEACAFAAQAJAAAGgEQAGgEACgHQADgHAAgIQAAgIgDgHQgCgHgGgEQgGgDgJAAQgFAAgFAB").p("Aj/AdQAAAFgBAEQgBAEgDACQgEADgFAAQgFAAgDgDQgDgCgBgEQgBgEAAgFQAAgFABgEQABgEADgDQADgCAFAAQAFAAAEACQADADABAEQABAEAAAF").p("AGxhNIAABSIAAAAIg0hSIgaAAIAAB5IAZAAIAAhQIAzBQIAbAAIAAh5IgZAA").p("ADihHQgKAGgGANQgFAOgBAXQABAXAFANQAGAPAKAFQAKAGAMAAQAMAAAKgGQAKgFAGgPQAGgNAAgXQAAgXgGgOQgGgNgKgGQgKgGgMAAQgMAAgKAG").p("ADlgPQAAgEAAgIQAAgGACgHQACgHADgFQAEgFAIAAQAHAAAFAFQAEAFABAHQACAHABAGQAAAIAAAEQAAAGAAAGQgBAHgCAHQgBAHgEAEQgFAEgHABQgIgBgEgEQgDgEgCgHQgCgHAAgHQAAgGAAgG").p("Al7gaIgzAAIAAgcIA7AAIAAgXIhWAAIAAB5IAbAAIAAgxIAzAAIAAgV").p("AlPAAQgHAAgFAAQgHACgDAEQgFAFAAAHIAPAAQABgFADgCQADgCAEAAQADAAACABQACAAACACQABACABADQgBADgDABQgCACgEAAQgFABgFAAQgFABgEABQgFACgCAEQgDAEAAAGQAAAGACADQADAFAEABQAFACAFAAQAGAAAFgBQAFgCAEgEQAAACAAABQAAABABACIAQAAQgBgCgBgEQAAgDAAgFIAAgdQAAgFgCgEQgDgDgDgCQgEgBgFAAQgEAAgEAA").p("AlFAdIAAAGQAAABgBADQgBACAAACQgCADgDABQgCACgFAAQgDAAgDgCQgDgBAAgFQAAgEADgCQADgBADgBQAEgBADgBQAEAAADgC").f();
	this.shape_1.setTransform(110.8,61.7);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// Layer 1
	this.instance_1 = new lib.box1();
	this.instance_1.setTransform(-2,-2);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_1}]}).wait(2));

}).prototype = p = new MovieClip();

p.constructor = lib.und_pan1;
p.nominalBounds = new Rectangle(-2,-2,216,248);

(lib.popup_101 = function() {
	this.initialize();

	// white bg
	this.instance = new lib.bg();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.popup_101;
p.nominalBounds = new Rectangle(0,0,986,430);

(lib.popup_201 = function() {
	this.initialize();

	// white bg
	this.instance = new lib.bg2();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.popup_201;
p.nominalBounds = new Rectangle(0,0,986,430);

(lib.popup_301 = function() {
	this.initialize();

	// white bg
	this.instance = new lib.bg3();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.popup_301;
p.nominalBounds = new Rectangle(0,0,986,430);

(lib.popup_401 = function() {
	this.initialize();

	// white bg
	this.instance = new lib.bg4();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.popup_401;
p.nominalBounds = new Rectangle(0,0,986,430);

(lib.z01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#f3edde").p("AH5m/IgHAAQgDAsAfBLQASAqAkBLIAEgEQgehOgNgmQgYhBgMgz").p("AEUndQAAAQAFAWQAHAWAIARIAFgEQgRgzAAgaQAAgSAHgiQgGAFgFARQgEARAAAR").p("ADilzQAHAAAIACIAAAzQgEAGAAADQAAAEAIACQADgFACgGQAAgFAAgRQAAgXgCgGQgFgSgXgGQgDABgHAHQgJAJgDADIAFADQAKgGANAB").p("AE2lLQgeAxgNATIAGAAQAvg8Aog3QgWAGgcAp").p("AFUkHQANgLAZgcQAYgdAJgNQgDACgeAeQgoAqgDADIAFAE").p("AFyjgQALApAAACQAGAbAAANQAAAxgRAtQgMAcggBAIAHAAQAlhCALghQAPgoAAgvQAAgPgGgZQgFgXgJgUIgGAA").p("AFyjGQAQA3gkBKQghBBhDA/IAEAEQBchkAKgRQAWgjAAhAQAAgggCgNIgGAA").p("AF6jvQAEgUAdgcQAPgQAjggQgaALgfAiQgdAhgFAUIAIgC").p("ADOk4QgXgMgSglQgPgogFgMIgHAAQANAsAGANQAQAiAgARIABgH").p("ADGicQACAmgjA9QgUAkgxBGIAEAFQAXgiAxhFQAmg9gFguIgHAA").p("AFVi9IgGAAQAMAogfA7QgcA1g3A0IAEAFQA6g1AXglQAbgrAAgwQAAgQgBgEQgBgDgCgF").p("AEricQgNAKgWA5QgYA9gZAbIAFADQAcgaAWgyQANgfAQgz").p("AGrj2QgTAggMAlIAIgCQATgnA3hTQgbARgYAm").p("AHZiXQgIAUgKALIAAA/IAGAAQADgOAMgsQAMglAAgVQgKAGgFAQ").p("AGdh3QgHgSAegoQAmg0AEgMQgPAHgeAtQgdAsAAAUQAAANABACQAAABADAAQAFgDAAgH").p("AItAUQgjAQhOABQgQgbgJgLIgGAAQALAVAJAQQhMgGgEACQAIAGAfAFQAcAFASAAQACAgAyAsQA5AzBIAQQg9gQg5g1QgDgCgCgCQAjAZA1AOQhJgZgrg2QgKgRgIgNQA7gCAegNQgcAQgVAKIAFAEQAegJAugfQASgMAMgKQAEgBADgBQgCABgBAAQAOgLAGgHQgEABgtAbIgTAK").p("AGUB4QANANBFAuQBDAsAUAKIAAgFQgSgQhLgvQhIgtgEgCIAAAC").p("AC/CnQgXAwgSAbQABgMACgJQgXATgNA9QgRBUgOAeIAHAAQAPgTALgUQgBAJAAAKQgCAPgBANQgHARgDAIIAFAAQADgCACgDQgCAYAAAQIAIgDQAAgRAEgkQAYgmAKgRQAWglAAgdIgBgZIgHAAQAGAbgcAxQgOAZgKATQADgmAAgIQAAgDAAgCQAFgPADgQQAFglAFgbQAXgaAYgwQAPgcAVg0QgNAJgbA5").p("AFPCHQgCAJgMAfQgHASgDAPQgPAegDAMIAGAAQAbgZASgtQARgqgBgcIgHAAQgBAMgLAYQABgGgBgFIgGAA").p("AEvC3QALghACgXQggAUAABYQAAAkACAMQAHAnAZAEQgTgSgFgeQgBgHAAgVQAAgGAAgIQAAgYAKgd").p("AF6DVIAABJIAJAZIAJgCQgGgVgCgbQgCghgBgPIgHAA").p("AF6GgQANA2AJAXQASArAiAgIABgEQhPhoALh/IgHAAIAABT").p("AEFGWQAAAiAGAoQAAAlAEARIAFgFQAAguAFg7QABgRAJhTQgeAQAABC").p("AGUEMQA4ALAlAiQAfAcAFAeIAIgDQgPgegegeQgrgrgtgDQAAAAgCACQgCACAAAC").p("AHnEFQArAqAYARIACgEQgIgZg3gwQg0gtgcgLIAAACQARAQA5A4").p("AGWE8QgCACAAACQAxASA5AmQArAdASASIAEgFQgEgZg7ghQgygdg2gSQAAABgCAC").p("AHhF/IAABXQAFARANAfQAPAjACAGIAIgBQgDgMgRhMQgMg0gEgjIgHAA").p("ABpn/IAAA0IAFAAQADgcAPg/QgFADgHANQgIASgDAF").p("AAEnqQgKBQAAACIAGAAQABgWAOgvQAPgzADgWQgWAEgHA4").p("ACIlYIgGAAIAAAnQAFAPADAWQADAaACAFIAEgEIAAg0QgFgLgCgQQgCgRgCgH").p("Ag8ouQgMAFgPA2QgQA2ACAcIAGAAQAEgWAMgwQARg/ACgI").p("AiSo3QgmAWglA2QgoA6AGAhIAGAAQAPggAggyQATgdAlg4").p("AjOmMIgGAAQADAVgQAeQgUAkgCAMIAJgCQATgdAEgHQAMgXAAgWQAAgNgBAAQgBABgBgE").p("Ai7lYQgIAaAAANIAJgCQAAgQAFgWQAHgXADgKQgIAHgIAb").p("AiBl6QgGACgEAPQgFAOAAAQQAAAcACAJQAFAXARAIQgIgqgCgSQgEgeAFgZ").p("AgXlYQgKASAWAkQATAhATAJQgdgzgPgtIgGAA").p("Ahdl6IAABCQAEAFAPAWQAQAWAJAHQgWgTgHgqQgEgtgEgQIgHAA").p("ACbikQAJA3g1BKQgtA9hRBDIAEAEQDEifgYhmIgGAA").p("AkynNQggBPgDAIIAGAAQAbg6AMgdQAVgzABgdIgHAAQgDAcgWA0").p("AkVnkQgVAqgRAuQAQgVAbg0QAIgQAghBQgSAOgbA0").p("AmblCQgFAMgYAnQgTAkAHAQIAHAAQAFgVAkglQAsgtAIgNQgPAIgaAaQgaAbgFADIgCgCQASgeAHgcIgCgNQgKAAgXAcQgdAhgFADQAAgFgIgNQgJgNgIgHQASATgBAnQgBAqAFAHQAJgaASgjQATgmARgTIAAAH").p("AkIlqQAAgTgCgGIgGAAQAAAQgJAoQgIAggJAcIAHAAQASgnAEgNQAFgQAAgX").p("Aoam2QADAUAIAfQAJAiAKAWIAEgEQgFgNgJgmQgLgsgCgIIgHAA").p("AoxlAQAEAKAEAJIgCAAQADAJAHALQANAlADAZIAIgDQgBgOgDgPQASAYAQAIIACgFQgSgfgdghQgGgQgHgSQgXg1gcguIgHACQAOAdAgBG").p("ApfkLQAIBBAXBdIAEgDIAAg0QgDgKgKgqQgJglgGgOIgHAA").p("AozjvQAAAdAVAZIAEgEQgDgggQgUIgGAC").p("ApwiBIAABzIAHAAQADg5gDg6IgHAA").p("AoahWQgFAmgNAwQgHAcgRA8IAIgCQAnhNAChfIgHAA").p("AozhOQgEANgLAmQgKAkgKAPQAUgKAKghQABgFAKg2IgGAA").p("AnviIQAGAgAFAyQAGAtAAARQAAA3gJAZIAJgCQAIgaAAg3QAAgRgFgtQgGgzgIgfIgGAD").p("AlLknQAQgTAggmQgTAHggAnQgiApgHAcIAGAAQALgYAbgi").p("AmRhOIAABTQAFANAFAZQAGAXAOAOIAEgFQgVgggEgtQABgygDgaIgHAA").p("Ak7hnIAABxIAHAAQADg3gDg6IgHAA").p("Aj/gQQAShAAFggQgQAPgQBTIAJgC").p("AniFAQBCgeBAgxQA4grAegmQgHAFhMA+QhGA4hEAhIAFAE").p("AjcDkQAAAAAxhEQgGADgvA3QgtAzguAUIAEAFQA5gcAigm").p("AhhBYQBLg+AyhGQAvhCASg/QgGAHhFBrQg/Big4AtIAEAE").p("AjUAGQAngOAThwQgRAIgRAwQgJAZgPAt").p("AjDBpQA/g/BiiIQgjAfgvA+QgdAkgyBG").p("AgjDdQAagnAJgNQgSALgdAhQgqA0gEADQAegLAcgk").p("AhEEHQh2CLAABPQAAAPABAGQABAEAGALIAJgDQgTg0AohJQA4hUAYgq").p("AASEVIAHAAQAjgYAcgwQAbgyANgUQgRAHghAvQgSAbgqA9").p("AhAGVQgUBDABA1IAFAAQALhMA6iOQghAWgWBM").f();
	this.shape.setTransform(62.5,56.8);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.z01;
p.nominalBounds = new Rectangle(0,0,125,113.5);

(lib.understanding_1 = function() {
	this.initialize();

	    
	// Layer 2
	this.mcCaption = new lib.closeCaptioning();
	this.mcCaption.setTransform(512.1,634,1,1,0,0,0,360,40);
	this.mcCaption.visible =false;
	
	// Layer 3
	this.instance = new lib.mcStartScreen();
	this.instance.setTransform(512,405.5,1,1,0,0,0,512,245.5);

	// Layer 2
	this.learnMoreClose = new lib.closeBtn();
	this.learnMoreClose.setTransform(991.1,162.9);

	// learnMore
	this.learnMorePopup = new lib.Learnmores_popup();
	this.learnMorePopup.setTransform(-146.9,209.6);

	// submit_Btn
	this.btnSubmit = new lib.okay_button();
	this.btnSubmit.setTransform(900.8,560);

	// TICKS
	this.tick3 = new lib.CrossMark();
	this.tick3.setTransform(1058.6,197.5,0.638,0.638,0,0,0,131.3,5.7);

	this.tick1 = new lib.CrossMark();
	this.tick1.setTransform(583.7,197.5,0.638,0.638,0,0,0,131.3,5.7);

	this.tick0 = new lib.CrossMark();
	this.tick0.setTransform(347.3,197.5,0.638,0.638,0,0,0,131.2,5.7);

	this.tick2 = new lib.TickMark();
	this.tick2.setTransform(821.7,197.4,0.638,0.638,0,0,0,131.4,5.6);

	// panel
	this.panel_3 = new lib.PANEL4();
	this.panel_3.setTransform(869.9,320.5,1,1,0,0,0,105.8,121.9);

	this.panel_2 = new lib.PANEL3();
	this.panel_2.setTransform(633.9,320.5,1,1,0,0,0,105.8,121.9);

	this.panel_1 = new lib.PANEL2();
	this.panel_1.setTransform(393.9,319.5,1,1,0,0,0,105.8,121.9);

	this.panel_0 = new lib.und_pan1();
	this.panel_0.setTransform(154.4,318.6,1,1,0,0,0,105.8,121.9);

	// learnMore
	this.learnMore_2 = new lib.LM();
	this.learnMore_2.setTransform(537.5,605.5);

	this.learnMore_1 = new lib.LM();
	this.learnMore_1.setTransform(292.5,605.5);

	this.learnMore_0 = new lib.LM();
	this.learnMore_0.setTransform(42.8,603.3);

	// Layer 1
	this.learnMore_3 = new lib.LM();
	this.learnMore_3.setTransform(787.5,605.5);

	this.text = new Text("Click to select the correct answer. Then click OK.", "18px HelveticaNeueLT Std", "#6e6e6e");
	this.text.textBaseline = "top";
	this.text.lineHeight = 18;
	this.text.lineWidth = 401;
	this.text.setTransform(20,120);

	this.text_1 = new Text("In which situation is the frictional force the greatest?", "20px HelveticaNeueLT Std", "#000000");
	this.text_1.textBaseline = "top";
	this.text_1.lineHeight = 20;
	this.text_1.lineWidth = 497;
	this.text_1.setTransform(20,90);

	this.instance_1 = new lib.OST1L_area2();
	this.instance_1.setTransform(512,84.4,1,1,0,0,0,512,84.4);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(512,289.8,0.999,0.999,0,0,0,512.7,290);

	this.addChild(this.instance_2,this.instance_1,this.text_1,this.text,this.learnMore_3,this.learnMore_0,this.learnMore_1,this.learnMore_2,this.panel_0,this.panel_1,this.panel_2,this.panel_3,this.tick2,this.tick0,this.tick1,this.tick3,this.btnSubmit,this.learnMorePopup,this.learnMoreClose,this.instance,this.mcCaption);
}).prototype = p = new Container();
p.constructor = lib.understanding_1;
p.nominalBounds = new Rectangle(-145.9,0,1170,767.6);

(lib.arrr = function() {
	this.initialize(images.arrr);
}).prototype = new Bitmap();
p.constructor = lib.arrr;
p.nominalBounds = new Rectangle(0,0,29,80);

(lib.bg = function() {
	this.initialize(images.bg);
}).prototype = new Bitmap();
p.constructor = lib.bg;
p.nominalBounds = new Rectangle(0,0,986,430);

(lib.bg2 = function() {
	this.initialize(images.bg2);
}).prototype = new Bitmap();
p.constructor = lib.bg2;
p.nominalBounds = new Rectangle(0,0,986,430);

(lib.bg3 = function() {
	this.initialize(images.bg3);
}).prototype = new Bitmap();
p.constructor = lib.bg3;
p.nominalBounds = new Rectangle(0,0,986,430);

(lib.bg4 = function() {
	this.initialize(images.bg4);
}).prototype = new Bitmap();
p.constructor = lib.bg4;
p.nominalBounds = new Rectangle(0,0,986,430);

(lib.bgGrey = function() {
	this.initialize(images.bgGrey);
}).prototype = new Bitmap();
p.constructor = lib.bgGrey;
p.nominalBounds = new Rectangle(0,0,1025,768);

(lib.Bitmap1 = function() {
	this.initialize(images.Bitmap1);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap1;
p.nominalBounds = new Rectangle(0,0,202,233);

(lib.Bitmap14 = function() {
	this.initialize(images.Bitmap14);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap14;
p.nominalBounds = new Rectangle(0,0,888,92);

(lib.Bitmap7 = function() {
	this.initialize(images.Bitmap7);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap7;
p.nominalBounds = new Rectangle(0,0,81,29);

(lib.box1 = function() {
	this.initialize(images.box1);
}).prototype = new Bitmap();
p.constructor = lib.box1;
p.nominalBounds = new Rectangle(0,0,216,248);

(lib.boxHighlight = function() {
	this.initialize(images.boxHighlight);
}).prototype = new Bitmap();
p.constructor = lib.boxHighlight;
p.nominalBounds = new Rectangle(0,0,216,248);

(lib.cross = function() {
	this.initialize(images.cross);
}).prototype = new Bitmap();
p.constructor = lib.cross;
p.nominalBounds = new Rectangle(0,0,25,25);

(lib.DogAnim08 = function() {
	this.initialize(images.DogAnim08);
}).prototype = new Bitmap();
p.constructor = lib.DogAnim08;
p.nominalBounds = new Rectangle(0,0,973,595);

(lib.forArrow = function() {
	this.initialize(images.forArrow);
}).prototype = new Bitmap();
p.constructor = lib.forArrow;
p.nominalBounds = new Rectangle(0,0,120,29);

(lib.fourBoxes = function() {
	this.initialize(images.fourBoxes);
}).prototype = new Bitmap();
p.constructor = lib.fourBoxes;
p.nominalBounds = new Rectangle(0,0,183,120);

(lib.frame = function() {
	this.initialize(images.frame);
}).prototype = new Bitmap();
p.constructor = lib.frame;
p.nominalBounds = new Rectangle(0,0,1100,604);

(lib.greenBg = function() {
	this.initialize(images.greenBg);
}).prototype = new Bitmap();
p.constructor = lib.greenBg;
p.nominalBounds = new Rectangle(0,0,641,207);

(lib.learMore1 = function() {
	this.initialize(images.learMore1);
}).prototype = new Bitmap();
p.constructor = lib.learMore1;
p.nominalBounds = new Rectangle(0,0,185,46);

(lib.learnMore2 = function() {
	this.initialize(images.learnMore2);
}).prototype = new Bitmap();
p.constructor = lib.learnMore2;
p.nominalBounds = new Rectangle(0,0,185,45);

(lib.play_1 = function() {
	this.initialize(images.play_1);
}).prototype = new Bitmap();
p.constructor = lib.play_1;
p.nominalBounds = new Rectangle(0,0,94,94);

(lib.redCircle = function() {
	this.initialize(images.redCircle);
}).prototype = new Bitmap();
p.constructor = lib.redCircle;
p.nominalBounds = new Rectangle(0,0,156,112);

(lib.sledge = function() {
	this.initialize(images.sledge);
}).prototype = new Bitmap();
p.constructor = lib.sledge;
p.nominalBounds = new Rectangle(0,0,389,131);

(lib.tick = function() {
	this.initialize(images.tick);
}).prototype = new Bitmap();
p.constructor = lib.tick;
p.nominalBounds = new Rectangle(0,0,60,60);

(lib.upArrow = function() {
	this.initialize(images.upArrow);
}).prototype = new Bitmap();
p.constructor = lib.upArrow;
p.nominalBounds = new Rectangle(0,0,29,80);


// symbols:
(lib.closeCaptioning = function() {
	this.initialize();

	// Layer 1
	this.tf = new Text("This x2is one line\nand anotherrrrrh22kkk?°", "16px undefined", "#000000");
	this.tf.textBaseline = "top";
	this.tf.lineHeight = 18;
	this.tf.lineWidth = 688;
	this.tf.setTransform(11,9.2);

	this.instance = new lib.CloseCaption();

	this.addChild(this.instance,this.tf);
}).prototype = p = new Container();
p.constructor = lib.closeCaptioning;
p.nominalBounds = new Rectangle(0,0,720,80);

(lib.CloseCaption = function() {
	this.initialize(images.CloseCaption);
}).prototype = new Bitmap();
p.constructor = lib.CloseCaption;
p.nominalBounds = new Rectangle(0,0,720,80);
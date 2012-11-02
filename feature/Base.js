if (!window.lib) { window.lib = {}; }

var p; // shortcut to reference prototypes

// stage content:
(lib.Base = function() {
	this.initialize();

	      
	// Layer 2
	this.mcCaption = new lib.closeCaptioning();
	this.mcCaption.setTransform(512.1,634,1,1,0,0,0,360,40);
	this.mcCaption.visible =false;
	
	// Layer 17
	this.fadeScreen = new lib.mcStartScreen();
	this.fadeScreen.setTransform(512,405.5,1,1,0,0,0,512,245.5);
	
	// boxes
	this.box_mc = new lib.boxes_fe();
	this.box_mc.setTransform(101.1,259.3);

	// textboxes
	this.grass_value = new lib.grass_value();
	this.grass_value.setTransform(471.5,462.5,1,1,0,0,0,0.5,0);
	
	// ARROWS
	this.Arrow1 = new lib.main_arrow_r();
	this.Arrow1.setTransform(130.7,373.1,1,1,180,0,0,39.9,0);
	this.Arrow1.visible=false;
	
	this.Arrow = new lib.main_arrow();
	this.Arrow.setTransform(237.1,375.6,1,1,0,0,0,39.9,0);
	this.Arrow.visible=false;
	
	this.downArrow = new lib.Summary_forcevector_down();
	this.downArrow.setTransform(184.8,420.1,1,1,180,0,0,8.5,-36.4);

	this.upArrow = new lib.Summary_forcevector();
	this.upArrow.setTransform(184.8,326.5,1,1,0,0,179.9,8.5,-38.1);

	// startBtn
	this.startBtn = new lib.Start_button();
	this.startBtn.setTransform(624.9,548.1);

	// reset
	this.resetBtn = new lib.RESET_button();
	this.resetBtn.setTransform(624.9,548.1);

	// sledge
	this.instance = new lib.Bitmap5_1();
	this.instance.setTransform(37,304.5);

	// BotStrip
	this.mcDogStrip8 = new lib.mcDogStrip4();
	this.mcDogStrip8.setTransform(810.1,352.8,0.611,0.662,0,0,0,91.4,25.5);
	this.mcDogStrip8.visible =false;
	
	this.mcDogStrip6 = new lib.mcDogStrip3();
	this.mcDogStrip6.setTransform(699.4,354.6,0.611,0.662,0,0,0,93.8,28.3);
	this.mcDogStrip6.visible =false;
	
	this.mcDogStrip4 = new lib.mcDogStrip2();
	this.mcDogStrip4.setTransform(589.7,352.8,0.611,0.662,0,0,0,91.7,25.5);
	this.mcDogStrip4.visible =false;
	
	this.mcDogStrip2 = new lib.mcDogStrip1();
	this.mcDogStrip2.setTransform(480.1,352.8,0.611,0.662,0,0,0,92.7,25.5);
	this.mcDogStrip2.visible =false;
	
	this.mcDogStrip0 = new lib.mcDogStrip0();
	this.mcDogStrip0.setTransform(382.5,351.9,0.611,0.662,0,0,0,79.6,25.5);
	this.mcDogStrip0.visible =false;
	
	// DogsTop
	this.mcDog0 = new lib.mcMainDog();
	this.mcDog0.setTransform(428.4,359.7,0.611,0.662,0,0,0,106.4,73.6);
	this.mcDog0.visible =false;
	
	this.mcDog8 = new lib.mcMainDog();
	this.mcDog8.setTransform(797.6,311.8,0.611,0.662);
	this.mcDog8.visible =false;
	
	this.mcDog6 = new lib.mcMainDog();
	this.mcDog6.setTransform(694.9,313.1,0.611,0.662);
	this.mcDog6.visible =false;
	
	this.mcDog4 = new lib.mcMainDog();
	this.mcDog4.setTransform(583.6,313.1,0.611,0.662);
	this.mcDog4.visible =false;
	
	this.mcDog2 = new lib.mcMainDog();
	this.mcDog2.setTransform(476,314.4,0.611,0.662);
	this.mcDog2.visible =false;
	
	// Strip
	this.mcDogStrip3 = new lib.mcDogStrip9();
	this.mcDogStrip3.setTransform(495.8,336.8,0.9,0.9,0,0,0,57.7,18.7);
	this.mcDogStrip3.visible =false;
	
	this.mcDogStrip5 = new lib.mcDogStrip7();
	this.mcDogStrip5.setTransform(598.4,339.1,0.9,0.9,0,0,0,61.6,18.7);
	this.mcDogStrip5.visible =false;
	
	this.mcDogStrip7 = new lib.mcDogStrip6();
	this.mcDogStrip7.setTransform(715.2,334.6,0.611,0.662,0,0,0,106.1,25.4);
	this.mcDogStrip7.visible =false;
	
	this.mcDogStrip1 = new lib.mcDogStrip5();
	this.mcDogStrip1.setTransform(379.7,337.4,0.611,0.662,0,0,0,108.5,25.4);
	this.mcDogStrip1.visible =false;
	
	// DogsBottom
	this.mcDog7 = new lib.mcMainDog();
	this.mcDog7.setTransform(706.6,291.9,0.611,0.662);
	this.mcDog7.visible =false;
	
	this.mcDog5 = new lib.mcMainDog();
	this.mcDog5.setTransform(584.3,295.9,0.611,0.662);
	this.mcDog5.visible =false;
	
	this.mcDog3 = new lib.mcMainDog();
	this.mcDog3.setTransform(482.8,295.9,0.611,0.662);
	this.mcDog3.visible =false;
	
	this.mcDog1 = new lib.mcMainDog();
	this.mcDog1.setTransform(382.5,295.9,0.611,0.662);
	this.mcDog1.visible =false;
	
	// bottomPanel
	this.mcRoad = new lib.mcRoad();
	this.mcRoad.setTransform(556.6,555.6,1,1,0,0,0,34.5,34.5);
	this.mcRoad.alpha =0.01
	
	this.mcGrass = new lib.mcGrass();
	this.mcGrass.setTransform(464.6,555.6,1,1,0,0,0,33.5,33.5);
	this.mcGrass.alpha =0.01
	
	this.mcSnow = new lib.mcSnow();
	this.mcSnow.setTransform(370.6,556.6,1,1,0,0,0,37.5,37.5);
	this.mcSnow.alpha =0.01
	
	this.dogInc = new lib.dogInc();
	this.dogInc.setTransform(952.2,548.6,1,1,0,0,0,14,13.5);
	this.dogInc.alpha =0.01
	this.dogInc.scaleX = this.dogInc.scaleY = 1.5 
	
	this.dogDec = new lib.dogDec();
	this.dogDec.setTransform(846.7,548.1,1,1,0,0,0,14.5,14);
	this.dogDec.alpha =0.01
	this.dogDec.scaleX = this.dogDec.scaleY = 1.5 
	
	this.boxInc = new lib.boxInc();
	this.boxInc.setTransform(181.1,549.1,1,1,0,0,0,15,15);
	this.boxInc.alpha =0.01
	this.boxInc.scaleX = this.boxInc.scaleY = 1.5 
	
	this.boxDec = new lib.boxDec();
	this.boxDec.setTransform(77.5,547.1,1,1,0,0,0,15.5,15.5);
	this.boxDec.alpha =0.01
	this.boxDec.scaleX = this.boxDec.scaleY = 1.5 
	
	this.dogCount = new Text("0", "bold 35px HelveticaNeueLT Std", "#ffffff");
	this.dogCount.textAlign = "center";
	this.dogCount.textBaseline = "top";
	this.dogCount.lineHeight = 35;
	this.dogCount.lineWidth = 24;
	this.dogCount.setTransform(897,526.6);
	this.dogCount.shadow = new Shadow("#000000",1,1,1);

	this.boxCount = new Text("0", "bold 35px HelveticaNeueLT Std", "#ffffff");
	this.boxCount.textAlign = "center";
	this.boxCount.textBaseline = "top";
	this.boxCount.lineHeight = 35;
	this.boxCount.lineWidth = 24;
	this.boxCount.setTransform(128.7,528.4);
	this.boxCount.shadow = new Shadow("#000000",1,1,1);

	this.instance_1 = new lib.Bitmap6_1();
	this.instance_1.setTransform(20,498.4);

	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("A1jqCQiPAAhlBmQgiAigXAmQgsBNAABeQAACPBlBlQBlBlCPAAQBfAABMgtQAngVAigjQBlhlAAiPQAAiPhlhkQhkhmiQAA").f("#ffffff").p("A6pm8QhjBjAACKQAACLBjBhQBhBjCLAAQCLAABihjQANgMALgOQhMAthfAAQiPAAhlhlQhlhlAAiPQAAheAshNQgNAMgMAM").f().s("#ffffff").ss(1,1,1,3).p("A1jqCQCQAABkBmQBlBkAACPQAACPhlBlQgiAjgnAV").p("A6PnTQAWgnAigiQBlhmCPAA").p("A6PnTQgtBMAABeQAACPBlBlQBlBlCPAAQBfAABMgt");
	this.shape.setTransform(514.5,578.4);

	// snoww
	this.mcSnow_1 = new lib.snow();
	this.mcSnow_1.setTransform(1580,319.8,1,1,0,0,0,1585,190);
	this.mcSnow_1.visible =false;
	
	// grassScreeen
	this.mcGrass_1 = new lib.grass();
	this.mcGrass_1.setTransform(1499.7,341.9,1,1,0,0,0,1503,170);
	this.mcGrass_1.visible =false;
	
	// roadScreen
	this.mcRoad_1 = new lib.road();
	this.mcRoad_1.setTransform(1463.3,343.9,1,1,0,0,0,1500,170);
	this.mcRoad_1.visible =false;
	
	// Layer 9
	this.instance_2 = new lib.Bitmap4_1();
	this.instance_2.setTransform(20,172);

	// BG
	this.text = new Text("Click a ground surface. Select the number of boxes to put on the sled, and number of dogs to pull it. Then click Start.", "18px HelveticaNeueLT Std", "#6e6e6e");
	this.text.textBaseline = "top";
	this.text.lineHeight = 18;
	this.text.setTransform(20,120);

	this.text_1 = new Text("What factors affect the force needed to start and keep an object moving along a surface?", "20px HelveticaNeueLT Std", "#000000");
	this.text_1.textBaseline = "top";
	this.text_1.lineHeight = 20;
	this.text_1.setTransform(20,90);

	this.instance_3 = new lib.OST1L_area2();
	this.instance_3.setTransform(512,84.4,1,1,0,0,0,512,84.4);
	this.instance_3.shadow = new Shadow("#000000",0,3,5);

	this.instance_4 = new lib.Bitmap2();

	this.addChild(this.instance_4,this.instance_3,this.text_1,this.text,this.instance_2,this.mcRoad_1,this.mcGrass_1,this.mcSnow_1,this.shape,this.instance_1,this.boxCount,this.dogCount,this.boxDec,this.boxInc,this.dogDec,this.dogInc,this.mcSnow,this.mcGrass,this.mcRoad,this.mcDog1,this.mcDog3,this.mcDog5,this.mcDog7,this.mcDogStrip1,this.mcDogStrip7,this.mcDogStrip5,this.mcDogStrip3,this.mcDog2,this.mcDog4,this.mcDog6,this.mcDog8,this.mcDog0,this.mcDogStrip0,this.mcDogStrip2,this.mcDogStrip4,this.mcDogStrip6,this.mcDogStrip8,this.instance,this.resetBtn,this.startBtn,this.downArrow,this.Arrow,this.Arrow1,this.grass_value,this.box_mc,this.upArrow,this.fadeScreen,this.mcCaption);
}).prototype = p = new Container();
p.constructor = lib.Base;
p.nominalBounds = new Rectangle(-36.7,0,3201.8,768);


// symbols:
(lib.road = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap3_1();
	this.instance.setTransform(0,0,1.458,1);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.road;
p.nominalBounds = new Rectangle(0,0,3000,340);

(lib.grass = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap7();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.grass;
p.nominalBounds = new Rectangle(0,0,3006,340);

(lib.snow = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap11();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.snow;
p.nominalBounds = new Rectangle(0,0,3170,380);

(lib.mcRoad = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("AD0jzQhlhliPAAQiOAAhlBlQhlBlAACOQAACPBlBlQBlBlCOAAQCPAABlhlQBlhlAAiPQAAiOhlhl").f();
	this.shape.setTransform(34.5,34.5);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.mcRoad;
p.nominalBounds = new Rectangle(0,0,69,69);

(lib.mcGrass = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("ADtjsQhihiiLAAQiKAAhiBiQhiBiAACKQAACLBiBiQBiBiCKAAQCLAABihiQBihiAAiLQAAiKhihi").f();
	this.shape.setTransform(33.5,33.5);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.mcGrass;
p.nominalBounds = new Rectangle(0,0,67,67);

(lib.mcSnow = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("AEJkJQhuhtibAAQibAAhuBtQhtBuAACbQAACbBtBuQBuBuCbAAQCbAABuhuQBuhuAAibQAAibhuhu").f();
	this.shape.setTransform(37.5,37.5);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.mcSnow;
p.nominalBounds = new Rectangle(0,0,75,75);

(lib.dogInc = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("ABjhfQgpgng6AAQg5AAgpAnQgpAoAAA3QAAA4ApAnQApAoA5AAQA6AAApgoQApgnAAg4QAAg3gpgo").f();
	this.shape.setTransform(14,13.5);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.dogInc;
p.nominalBounds = new Rectangle(0,0,28,27);

(lib.dogDec = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("AAAiLQg7AAgrApQgqApAAA5QAAA6AqApQArApA7AAQA7AAArgpQArgpAAg6QAAg5grgpQgrgpg7AA").f();
	this.shape.setTransform(14.5,14);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.dogDec;
p.nominalBounds = new Rectangle(0,0,29,28);

(lib.boxInc = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("ABqhpQgsgsg+AAQg9AAgsAsQgsAsAAA9QAAA+AsAsQAsAsA9AAQA+AAAsgsQAsgsAAg+QAAg9gsgs").f();
	this.shape.setTransform(15,15);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.boxInc;
p.nominalBounds = new Rectangle(0,0,30,30);

(lib.boxDec = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("ABuhtQgugthAAAQg/AAguAtQgtAuAAA/QAAAkAPAfQALAXATAUQAXAWAbAMQAbALAgAAQBAAAAugtQAtguAAhAQAAg/gtgu").f();
	this.shape.setTransform(15.5,15.5);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.boxDec;
p.nominalBounds = new Rectangle(0,0,31,31);

(lib.mcDogStrip9 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","#000000"],[0,1],11.9,11.5,-10.6,10.1).p("AA0j1IgOgCIAAABIAAAMQgBAAgCABQgjAGghgGQgCAAgBgBIABgJIgPAAIAAABIgCAWIANAFQABAAACABQAeAIAngIQAAgBABAAQAGgBAGgCIAGgb").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgjAVQgBAFAAAEQAhAGAjgGQACgHABgH").p("AgkjWQgTBugDBKQgEBaASBWQAOATAUANQAMAIAaAMQgThzADhlQAChUAThwQgnAIgegI").lf(["#662e1d","#723531"],[0,1],-265.6,-51.5,-265.6,-51.5).p("AAcDGQgagMgMgIQgUgNgOgTIALA2QAaAfAXAOQAMAIAHAAIgCgTIgBgBQAAgCAAgEQgBgBAAgBQgDgbAAAA").f("#460000").p("AA7D7IgagRIACATQAPAEAJgG").f();
	this.shape.setTransform(112.9,25.5);

	this.shape_1 = new Shape();
	this.shape_1.graphics.lf(["#431d12","#5b403e"],[0,1],-472.7,34.8,-472.7,34.8).p("AkvgiQgCgBgDAAIABABIAOAoQAVADAXADQEdAnESgVIAAgjQkZAVkfgrQgXgEgWgD").f();
	this.shape_1.setTransform(31.4,26.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new Container();
p.constructor = lib.mcDogStrip9;
p.nominalBounds = new Rectangle(0.4,0,118.4,50.9);

(lib.mcDogStrip7 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#431d12","#5b403e"],[0,1],-472.7,34.8,-472.7,34.8).p("AE1gFQkYAVkggsQgXgEgWgDQgCAAgCgBIABACIANAnQAWAEAXADQEcAmESgVIAAgi").f();
	this.shape.setTransform(30.9,23.7);

	this.mcDogStrip7 = new lib.mcDogStrip8();
	this.mcDogStrip7.setTransform(119.2,18.8,0.679,0.736,0,0,0,5.8,25.5);

	this.addChild(this.mcDogStrip7,this.shape);
}).prototype = p = new Container();
p.constructor = lib.mcDogStrip7;
p.nominalBounds = new Rectangle(0,0,123.3,37.5);

(lib.mcDogStrip6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","#000000"],[0,1],11.9,11.5,-10.7,10.1).p("AA0j1IgOgCIAAABIAAAMQgBAAgCABQgjAGghgGQgCAAgBgBIABgJIgPAAIAAABIgCAWIANAFQABAAACABQAeAIAngIQAAgBABAAQAGgBAGgCIAGgb").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgjAVQgBAFAAAEQAhAGAjgGQACgHABgH").p("AgkjWQgTBugDBKQgEBaASBWQAOATAUANQAMAIAaAMQgThzADhlQAChUAThwQgnAIgegI").lf(["#662e1d","#723531"],[0,1],-265.6,-51.5,-265.6,-51.5).p("AAcDGQgagMgMgIQgUgNgOgTIALA2QAaAfAXAOQAMAIAHAAIgCgTIgBgBQAAgCAAgEQgBgBAAgBQgDgbAAAA").f("#460000").p("AA7D7IgagRIACATQAPAEAJgG").f();
	this.shape.setTransform(205.9,25.5);

	this.shape_1 = new Shape();
	this.shape_1.graphics.lf(["#431d12","#5b403e"],[0,1],-502.1,29.9,-502.1,29.9).p("AJOhIQonCvpIhlQgXgEgXgEQgCAAgCgBIABACIANAnQAWAEAWAEQJOBbIhioIgIgl").f();
	this.shape_1.setTransform(60.1,35.3);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new Container();
p.constructor = lib.mcDogStrip6;
p.nominalBounds = new Rectangle(0.4,0,211.4,50.9);

(lib.Dog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	// Layer 6
	this.instance = new lib.DogAnim01();
	this.instance.setTransform(-147,3.5);

	this.instance_1 = new lib.DogAnim02();
	this.instance_1.setTransform(-142.7,-15.4);

	this.instance_2 = new lib.DogAnim03();
	this.instance_2.setTransform(-147,0);

	this.instance_3 = new lib.DogAnim04();
	this.instance_3.setTransform(-142.8,15.8);

	this.instance_4 = new lib.DogAnim05();
	this.instance_4.setTransform(-149,4.5);

	this.instance_5 = new lib.DogAnim06();
	this.instance_5.setTransform(-147,0);

	this.instance_6 = new lib.DogAnim07();
	this.instance_6.setTransform(-147,0);

	this.instance_7 = new lib.DogAnim08();
	this.instance_7.setTransform(-147,0);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).wait(1));

	// Layer 4
	this.instance_8 = new lib.DogAnim09();
	this.instance_8.setTransform(-123.7,562.7);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance_8}]}).wait(8));

}).prototype = p = new MovieClip();

p.constructor = lib.Dog;
p.nominalBounds = new Rectangle(-147,3.5,973,677.3);

(lib.mcDogStrip0 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.mcDogStrip0;
p.nominalBounds = new Rectangle(0,0,159,51);

(lib.mcDogStrip1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#431d12","#5b403e"],[0,1],42.4,-3.5,42.3,-9.7).p("AOGhXIgBgHIgCgIIhQAEIgBAHIAHAoIAEALIBLgDIABgBIABgIIgDgZIgBgK").lf(["#431d12","#5b403e"],[0,1],-531.5,-46.1,-531.5,-46.1).p("AMyhbQs6E0sskeIAAACIABAKIACAYIAAADQM5EXMxksIgHgo").lf(["#431d12","#5b403e"],[0,1],-129.8,-1.5,-129.9,-7.8).p("As0hFIgBgGIgDgIIhPAEIgCAHIAHAoIAEAMIBMgDIAAgCIABgFIAAgDIgCgYIgBgKIAAgC").f();
	this.shape.setTransform(90.6,36.7);

	this.shape_1 = new Shape();
	this.shape_1.graphics.lf(["#ffffff","#000000"],[0,1],11.8,11.5,-10.7,10.1).p("AAjjXQAFgBAGgCIAHgbIgPgCIAAABIAAAMQgBAAgBABQgjAGgigGQgBAAgCgBIACgJIgPAAIAAABIgCAWIANAFQABAAABABQAfAIAmgIQAAgBACAA").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFgBAEQAiAGAjgGQABgHABgH").p("Ag5geQgEBaARBWQAOATAVANQAMAIAZAMQgShzADhlQABhUAThwQgmAIgfgIQgTBugCBK").lf(["#662e1d","#723531"],[0,1],-265.6,-51.5,-265.6,-51.5).p("AgJCyQgVgNgOgTIAMA2QAZAfAXAOQAMAIAHAAIgCgTIAAgBQgBgCAAgEQgBgBAAgBQgDgbAAAAQgZgMgMgI").f("#460000").p("AA7D7IgagRIACATQAQAEAIgG").f();
	this.shape_1.setTransform(179.3,25.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new Container();
p.constructor = lib.mcDogStrip1;
p.nominalBounds = new Rectangle(0,0,185.2,50.9);

(lib.mcDogStrip2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#431d12","#5b403e"],[0,1],41.3,-3.3,41.3,-9.6).p("AN8ggQgGgEgFgDIAAgqQAFADAFADIAAgFIgDgIIhPACIgCAHIAFAoIAEALIBMAAIAAgE").lf(["#431d12","#5b403e"],[0,1],-531.4,-61.2,-531.4,-61.2).p("AMnhPQthEptBk9IABAKIABAYIgBAIQNREzNVkhIgFgo").f();
	this.shape.setTransform(89.2,37.1);

	this.shape_1 = new Shape();
	this.shape_1.graphics.lf(["#ffffff","#000000"],[0,1],11.8,11.5,-10.7,10.1).p("AAmj2IAAAMQgBAAgBABQgjAGgigGQgBAAgCgBIACgJIgPAAIAAABIgCAWIANAFQABAAABABQAfAIAmgIQAAgBACAAQAFgBAGgCIAHgbIgPgCIAAAB").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFgBAEQAiAGAjgGQABgHABgH").p("AgkjWQgTBugCBKQgEBaARBWQAOATAVANQAMAIAZAMQgShzADhlQABhUAThwQgmAIgfgI").lf(["#662e1d","#723531"],[0,1],-265.6,-51.5,-265.6,-51.5).p("AAfDhQgDgbAAAAQgZgMgMgIQgVgNgOgTIAMA2QAZAfAXAOQAMAIAHAAIgCgTIAAgBQgBgCAAgEQgBgBAAgB").f("#460000").p("AA7D7IgagRIACATQAQAEAIgG").f();
	this.shape_1.setTransform(177.6,25.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new Container();
p.constructor = lib.mcDogStrip2;
p.nominalBounds = new Rectangle(0,0,183.5,50.9);

(lib.mcDogStrip3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#431d12","#5b403e"],[0,1],43.4,-12.8,43.2,-19).p("AOQioIhQAGIgBAHIABAIIABABIAFAeIAAABIAEAKIBMgDIACgJIAAgCIgEgXIgBgRIAAgBIgDgI").lf(["#431d12","#5b403e"],[0,1],43,-8.5,43.1,-14.7).p("AL6hkQsiHwtjnrQgGgEgFgDIgBArQAGACAGAEQOIHSMvoAQANgJANgIIgFgeQgjAYgkAW").f();
	this.shape.setTransform(92,39.5);

	this.shape_1 = new Shape();
	this.shape_1.graphics.lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFAAAEQAhAGAjgGQABgHABgH").p("AAhjWQgmAIgfgIQgTBugCBKQgEBaASBWQANATAVANQAMAIAZAMQgShzADhlQABhUAThw").lf(["#ffffff","#000000"],[0,1],11.9,11.5,-10.6,10.1).p("AAjjXQAGgBAGgCIAGgbIgPgCIAAABIAAAMQgBAAgBABQgjAGghgGQgCAAgCgBIACgJIgPAAIAAABIgCAWIANAFQABAAABABQAfAIAmgIQAAgBACAA").lf(["#662e1d","#723531"],[0,1],-265.6,-51.5,-265.6,-51.5).p("AggDIQAZAfAYAOQALAIAIAAIgDgTIAAgBQgBgCAAgEQAAgBAAgBQgEgbAAAAQgZgMgMgIQgVgNgNgTIALA2").f("#460000").p("AA7D7IgagRIADATQAPAEAIgG").f();
	this.shape_1.setTransform(181.8,25.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new Container();
p.constructor = lib.mcDogStrip3;
p.nominalBounds = new Rectangle(0,0,187.7,56.4);

(lib.mcDogStrip4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#431d12","#5b403e"],[0,1],41.1,-2.1,41.3,-8.3).p("AN4g+IhPAAIgDAHIAAABQACgBABAAIAGAoQgCABgCAAIAEAKIBLACIACgJIgBgZIgBgSIgCgI").lf(["#431d12","#5b403e"],[0,1],-531.5,-56.1,-531.5,-56.1).p("AMmg2QtFEjtcldIACARIADAXQNqFUM3kaQACAAACgBIgGgoQgBAAgCAB").f();
	this.shape.setTransform(89.2,33.4);

	this.shape_1 = new Shape();
	this.shape_1.graphics.lf(["#ffffff","#000000"],[0,1],11.9,11.5,-10.6,10.1).p("AAjjXQAGgBAGgCIAGgbIgPgCIAAABIAAAMQgBAAgBABQgjAGghgGQgCAAgCgBIACgJIgPAAIAAABIgCAWIANAFQABAAABABQAfAIAmgIQAAgBACAA").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFAAAEQAhAGAjgGQABgHABgH").p("AgkjWQgSBugDBKQgEBaASBWQAOATAUANQAMAIAZAMQgShzADhlQAChUAShwQgmAIgfgI").lf(["#662e1d","#723531"],[0,1],-265.6,-51.5,-265.6,-51.5).p("AAcDGQgZgMgMgIQgUgNgOgTIALA2QAZAfAYAOQALAIAIAAIgDgTIAAgBQgBgCAAgEQAAgBAAgBQgEgbAAAA").f("#460000").p("AA7D7IgagRIADATQAPAEAIgG").f();
	this.shape_1.setTransform(176.9,25.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new Container();
p.constructor = lib.mcDogStrip4;
p.nominalBounds = new Rectangle(0,0,182.8,50.9);

(lib.mcDogStrip5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","#000000"],[0,1],11.8,11.5,-10.7,10.1).p("AAjjXQAFgBAGgCIAHgbIgPgCIAAABIAAAMQgBAAgBABQgjAGgigGQgBAAgCgBIACgJIgPAAIAAABIgCAWIANAFQABAAABABQAfAIAmgIQAAgBACAA").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFgBAEQAiAGAjgGQABgHABgH").p("AgkjWQgTBugCBKQgEBaARBWQAOATAVANQAMAIAZAMQgShzADhlQABhUAThwQgmAIgfgI").lf(["#662e1d","#723531"],[0,1],-265.6,-51.5,-265.6,-51.5).p("AAcDGQgZgMgMgIQgVgNgOgTIAMA2QAZAfAXAOQAMAIAHAAIgCgTIAAgBQgBgCAAgEQgBgBAAgBQgDgbAAAA").f("#460000").p("AA7D7IgagRIACATQAQAEAIgG").f();
	this.shape.setTransform(211.1,25.5);

	this.shape_1 = new Shape();
	this.shape_1.graphics.lf(["#431d12","#5b403e"],[0,1],30.4,1.6,30.3,-4.6).p("AM5goIgBgFIgCgIIhXAFIgCAGIAIApIAEAKIBTgDIABgHIAAgCIgCgYIgCgN").lf(["#431d12","#805e5c"],[0,1],30.4,1.6,30.3,-4.6).p("ALdgqQmLA/mFAMIhGACQBWAABUgDQA8gBA5gCIACAOQEfgPEegdIgIgp").lf(["#431d12","#805e5c"],[0,1],59.3,1,59.2,-5.1).p("AAxAgQhUADhWAAQi2AAi1gKQirgJitgSIAAAfQCuANCrAHQC2AGB4gBQB5gBAmgBQAogBA1gCIBhgGIgCgOQg5ACg8AB").f();
	this.shape_1.setTransform(82.9,39.2);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new Container();
p.constructor = lib.mcDogStrip5;
p.nominalBounds = new Rectangle(0,0,217,50.9);

(lib.mcDogStrip8 = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#ffffff","#000000"],[0,1],11.9,11.5,-10.7,10.1).p("AA1j1IgOgCIAAABIAAAMQgCAAgBABQgjAGgigGQgBAAgBgBIABgJIgPAAIAAABIgCAWIANAFQABAAACABQAeAIAmgIQABgBABAAQAGgBAGgCIAGgb").lf(["#621914","#804938"],[0,1],-5.5,-0.6,3.8,-0.6).p("AAmj3QgjgQgiAVQgBAFgBAEQAiAGAjgGQABgHABgH").p("AgjjWQgUBugCBKQgEBaASBWQANATAVANQAMAIAZAMQgShzADhlQAChUAShwQgmAIgegI").lf(["#662e1d","#723531"],[0,1],-265.6,-51.5,-265.6,-51.5).p("AAgDjQAAgBAAgBQgEgbAAAAQgZgMgMgIQgVgNgNgTIALA2QAZAfAYAOQALAIAIAAIgDgTIAAgBQgBgCAAgE").f("#460000").p("AA7D7IgagRIADATQAPAEAIgG").f();
	this.shape.setTransform(5.9,25.5);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.mcDogStrip8;
p.nominalBounds = new Rectangle(0,0,11.8,50.9);

(lib.mcMainDog = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);


	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(0).call(this.frame_0).wait(3));

	// Layer 1
	this.instance = new lib.dogStatic();
	this.instance.setTransform(0.3,0.1);

	this.instance_1 = new lib.DogAnim02();
	this.instance_1.setTransform(92.1,69.2,0.218,0.218,0,0,0,498,335.4);

	this.instance_2 = new lib.DogAnim09();
	this.instance_2.setTransform(101.1,129.4,0.218,0.218,0,0,0,456.5,59);

	this.mcDog0 = new lib.Dog();
	this.mcDog0.setTransform(32.2,-0.7,0.218,0.218);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.mcDog0}]},1).wait(1));

}).prototype = p = new MovieClip();

p.constructor = lib.mcMainDog;
p.nominalBounds = new Rectangle(0.3,0.1,212,129);

(lib.Start_button = function() {
	this.initialize();

	// Layer 2
	this.text = new Text("Start", "bold 16px HelveticaNeueLT Std", "#ffffff");
	this.text.textAlign = "center";
	this.text.textBaseline = "top";
	this.text.lineHeight = 16;
	this.text.lineWidth = 78;
	this.text.setTransform(38.3,1.7);
	this.text.shadow = new Shadow("#000000",1,1,3);

	// Layer 4
	this.shape = new Shape();
	this.shape.graphics.lf(["#1c4069","#004187","#004793","#024997","#67a3e5","#70a5df","#3982d2"],[0,0.102,0.204,0.231,0.8,0.831,1],0.4,13,0.4,-12.9).p("AGIAeIAAg7QAAgqgegdQgagbgngCQgCAAgDAAIpHAAQgqAAgdAdQgdAdAAAqIAAA7QAAApAdAeQAeAdApAAIJHAAQADAAACAAQAmgCAbgbQAegeAAgp").f();
	this.shape.setTransform(38.4,13.3);

	// Layer 5
	this.instance = new lib.base();
	this.instance.setTransform(38.8,13,1,1,0,0,0,38.8,13);
	this.instance.shadow = new Shadow("#666666",1,1,2);

	this.addChild(this.instance,this.shape,this.text);
}).prototype = p = new Container();
p.constructor = lib.Start_button;
p.nominalBounds = new Rectangle(-0.7,0,78.4,26.3);

(lib.base = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.lf(["#005df0","#007bf0","#008cee","#4fade9"],[0,0.494,0.553,1],0,13,0,-12.9).p("AFnBlQAdgeAAgpIAAg7QAAgqgdgdQgdgdgqAAIo/AAQgqAAgdAdQgdAdAAAqIAAA7QAAApAdAeQAeAdApAAII/AAQApAAAegd").f();
	this.shape.setTransform(38.8,13);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.base;
p.nominalBounds = new Rectangle(0,0,77.6,26);

(lib.Summary_forcevector = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);


	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(0).call(this.frame_0).wait(5));

	// Layer 3
	this.shape = new Shape();
	this.shape.graphics.f("#8bb0dd").p("AglBTIgBBCIBKAAIAAh1IABAAIAAgDIBrAdIiUjNIiLDTIBqghIAAA0").f();
	this.shape.setTransform(9.6,-9.1);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#8bb0dd").p("AAlAZIAAgCIBrAcIiUjNIiLDTIBqghIAABCIgBBCIBKAAIAAiDIABAA").f();
	this.shape_1.setTransform(9.6,-9.8);

	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#8bb0dd").p("AAlgpIAAgCIBrAcIiUjOIiLDUIBqghIAADHIgBBCIBKAAIAAkIIABAA").f();
	this.shape_2.setTransform(9.6,-16.5);

	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#8bb0dd").p("AAlhyIAAgDIBrAdIiUjOIiLDTIBqggIAAFZIgBBCIBKAAIAAmaIABAA").f();
	this.shape_3.setTransform(9.6,-23.8);

	this.shape_4 = new Shape();
	this.shape_4.graphics.f("#8bb0dd").p("AAljZIAAgCIBrAcIiUjOIiLDTIBqggIAAInIgBBCIBKAAIAApoIABAA").f();
	this.shape_4.setTransform(9.6,-34.1);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

	// Layer 5
	this.instance = new lib.fnText("synched",0);
	this.instance.setTransform(9.5,-34.6,0.577,0.577,0,0,180,20.6,16.9);

	this.timeline.addTween(Tween.get(this.instance).wait(1).to({y:-38},0).wait(1).to({y:-50},0).wait(1).to({y:-65},0).wait(1).to({y:-85},0).wait(1));

}).prototype = p = new MovieClip();

p.constructor = lib.Summary_forcevector;
p.nominalBounds = new Rectangle(-6.2,-49.9,31.5,55.6);

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

(lib.Summary_forcevector_down = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);


	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(0).call(this.frame_0).wait(5));

	// Layer 3
	this.instance = new lib.fgText("synched",0);
	this.instance.setTransform(9.1,-34.5,0.577,0.577,180,0,0,20.6,16.8);

	this.timeline.addTween(Tween.get(this.instance).wait(1).to({regY:16.9,y:-36.4},0).wait(1).to({y:-49.4},0).wait(1).to({y:-63.4},0).wait(1).to({y:-84.4},0).wait(1));

	// Layer 4
	this.shape = new Shape();
	this.shape.graphics.f("#8bb0dd").p("AglBTIgBBCIBKAAIAAh1IABAAIAAgDIBrAdIiUjNIiLDTIBqghIAAA0").f();
	this.shape.setTransform(9.6,-9.1);

	this.shape_1 = new Shape();
	this.shape_1.graphics.f("#8bb0dd").p("AAlAZIAAgCIBrAcIiUjNIiLDTIBqghIAABCIgBBCIBKAAIAAiDIABAA").f();
	this.shape_1.setTransform(9.6,-9.8);

	this.shape_2 = new Shape();
	this.shape_2.graphics.f("#8bb0dd").p("AAlgpIAAgCIBrAcIiUjOIiLDUIBqghIAADHIgBBCIBKAAIAAkIIABAA").f();
	this.shape_2.setTransform(9.6,-16.5);

	this.shape_3 = new Shape();
	this.shape_3.graphics.f("#8bb0dd").p("AAlhyIAAgDIBrAdIiUjOIiLDTIBqggIAAFZIgBBCIBKAAIAAmaIABAA").f();
	this.shape_3.setTransform(9.6,-23.8);

	this.shape_4 = new Shape();
	this.shape_4.graphics.f("#8bb0dd").p("AAljZIAAgCIBrAcIiUjOIiLDTIBqggIAAInIgBBCIBKAAIAApoIABAA").f();
	this.shape_4.setTransform(9.6,-34.1);

	this.timeline.addTween(Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).wait(1));

}).prototype = p = new MovieClip();

p.constructor = lib.Summary_forcevector_down;
p.nominalBounds = new Rectangle(-6.6,-48.4,31.5,54.2);

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

(lib.main_arrow = function() {
	this.initialize();

	// Layer 2
	this.head = new lib.rig_head();
	this.head.setTransform(36,-1.3,1,1,0,0,0,12.2,0);

	this.line1 = new lib.rig_arrow();
	this.line1.setTransform(24,-1.1,1,1,0,0,0,23.9,0);

	// Layer 1
	this.txt = new lib.fnText_fric();
	this.txt.setTransform(53.6,25.9,0.577,0.577,0,0,0,20.6,16.8);

	this.addChild(this.txt,this.line1,this.head);
}).prototype = p = new Container();
p.constructor = lib.main_arrow;
p.nominalBounds = new Rectangle(0.1,-15.2,73.9,54.8);

(lib.rig_arrow = function() {
	this.initialize();

	// Layer 1
	this.line1 = new lib.tail_arr_r();
	this.line1.setTransform(47.8,-0.7,1.499,1.499,-0.7,0,0,31.9,-0.3);

	this.addChild(this.line1);
}).prototype = p = new Container();
p.constructor = lib.rig_arrow;
p.nominalBounds = new Rectangle(0,-3.8,24.1,7.7);

(lib.tail_arr_r = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#8bb0dd").p("AAxgXIiAgBIAAAvICAABIAfAAIAAgvIgfAA").f();
	this.shape.setTransform(8,-0.1);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.tail_arr_r;
p.nominalBounds = new Rectangle(0,-2.5,16,4.9);

(lib.rig_head = function() {
	this.initialize();

	// Layer 1
	this.head = new lib.head_arr_r();
	this.head.setTransform(12.1,0,1.499,1.499,-0.7,0,0,7.9,0);

	this.addChild(this.head);
}).prototype = p = new Container();
p.constructor = lib.rig_head;
p.nominalBounds = new Rectangle(0,-13.8,24.3,27.7);

(lib.head_arr_r = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#8bb0dd").p("AgggXIgvAAIAAAvIAvAAIgUBEICEhcIiDhaIATBD").f();
	this.shape.setTransform(8,0);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.head_arr_r;
p.nominalBounds = new Rectangle(0,-9,16,18.3);

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

(lib.main_arrow_r = function() {
	this.initialize();

	// Layer 1
	this.head = new lib.left_head();
	this.head.setTransform(36,-1.3,1,1,0,0,0,12.2,0);

	this.line1 = new lib.left_arr();
	this.line1.setTransform(24,-1.1,1,1,0,0,0,23.9,0);

	this.txt = new lib.fnText_fric_new();
	this.txt.setTransform(37.8,-28,0.577,0.577,180,0,0,20.6,16.8);

	this.addChild(this.txt,this.line1,this.head);
}).prototype = p = new Container();
p.constructor = lib.main_arrow_r;
p.nominalBounds = new Rectangle(0.1,-41.7,65.1,54.1);

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

(lib.left_arr = function() {
	this.initialize();

	// Layer 1
	this.line1 = new lib.tail_arr_r();
	this.line1.setTransform(47.8,-0.7,1.499,1.499,-0.7,0,0,31.9,-0.3);

	this.addChild(this.line1);
}).prototype = p = new Container();
p.constructor = lib.left_arr;
p.nominalBounds = new Rectangle(0,-3.8,24.1,7.7);

(lib.left_head = function() {
	this.initialize();

	// Layer 1
	this.head = new lib.head_arr_r();
	this.head.setTransform(12.1,0,1.499,1.499,-0.7,0,0,7.9,0);

	this.addChild(this.head);
}).prototype = p = new Container();
p.constructor = lib.left_head;
p.nominalBounds = new Rectangle(0,-13.8,24.3,27.7);

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

(lib.grass_value = function() {
	this.initialize();

	// Layer 1
	this.acceleration = new lib.acceleration_1_txt();
	this.acceleration.setTransform(63.6,16.7,1,1,0,0,0,56.8,14.1);

	this.velocity = new lib.velocity1_txt();
	this.velocity.setTransform(63.6,-16.2,1,1,0,0,0,56.8,14.1);

	this.text = new Text("Acceleration:", "20px HelveticaNeueLT Std", "#000000");
	this.text.textBaseline = "top";
	this.text.lineHeight = 20;
	this.text.setTransform(-120.3,3);

	this.text_1 = new Text("Velocity:", "20px HelveticaNeueLT Std", "#000000");
	this.text_1.textBaseline = "top";
	this.text_1.lineHeight = 20;
	this.text_1.setTransform(-78,-29.9);

	this.addChild(this.text_1,this.text,this.velocity,this.acceleration);
}).prototype = p = new Container();
p.constructor = lib.grass_value;
p.nominalBounds = new Rectangle(-120.3,-30.6,236.2,61);

(lib.velocity1_txt = function() {
	this.initialize();

	// Layer 2
	this.txt = new Text("0.00 m/s", "20px HelveticaNeueLT Std", "#ffffff");
	this.txt.textAlign = "right";
	this.txt.textBaseline = "top";
	this.txt.lineHeight = 20;
	this.txt.lineWidth = 105;
	this.txt.setTransform(105,0.4);

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("AogiLIAAEXIRBAAIAAkXIxBAA").f().s("#999999").ss(2,1,1,3).p("AogiLIRBAAIAAEXIxBAAIAAkX").cp();
	this.shape.setTransform(54.5,13.7);

	this.addChild(this.shape,this.txt);
}).prototype = p = new Container();
p.constructor = lib.velocity1_txt;
p.nominalBounds = new Rectangle(0,-0.2,109,28);

(lib.acceleration_1_txt = function() {
	this.initialize();

	// Layer 2
	this.txt = new Text("0.00 ", "20px HelveticaNeueLT Std", "#ffffff");
	this.txt.textAlign = "right";
	this.txt.textBaseline = "top";
	this.txt.lineHeight = 20;
	this.txt.lineWidth = 108;
	this.txt.setTransform(107,0);

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("AogiLIAAEXIRBAAIAAkXIxBAA").f().s("#999999").ss(2,1,1,3).p("AogiLIRBAAIAAEXIxBAAIAAkX").cp();
	this.shape.setTransform(54.5,13.7);

	this.addChild(this.shape,this.txt);
}).prototype = p = new Container();
p.constructor = lib.acceleration_1_txt;
p.nominalBounds = new Rectangle(-0.9,-0.2,110,28);

(lib.boxes_fe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{},true);

	
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(Tween.get(this).wait(0).call(this.frame_0).wait(3));

	
	// Layer 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(50.5,43.3);

	this.instance_1 = new lib.Bitmap4();
	this.instance_1.setTransform(22.9,42.3);

	this.instance_2 = new lib.Bitmap5();
	this.instance_2.setTransform(-7,42.3);

	this.instance_3 = new lib.Bitmap6();
	this.instance_3.setTransform(-7,-7);

	this.timeline.addTween(Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).wait(1));

}).prototype = p = new MovieClip();

p.constructor = lib.boxes_fe;

(lib.RESET_button = function() {
	this.initialize();

	// Layer 2
	this.text = new Text("Reset", "bold 16px HelveticaNeueLT Std", "#ffffff");
	this.text.textAlign = "center";
	this.text.textBaseline = "top";
	this.text.lineHeight = 16;
	this.text.lineWidth = 78;
	this.text.setTransform(38.3,1.7);
	this.text.shadow = new Shadow("#000000",1,1,3);

	// Layer 4
	this.shape = new Shape();
	this.shape.graphics.lf(["#1c4069","#004187","#004793","#024997","#67a3e5","#70a5df","#3982d2"],[0,0.102,0.204,0.231,0.8,0.831,1],0.4,13,0.4,-12.9).p("AGIAeIAAg7QAAgqgegdQgagbgngCQgCAAgDAAIpHAAQgqAAgdAdQgdAdAAAqIAAA7QAAApAdAeQAeAdApAAIJHAAQADAAACAAQAmgCAbgbQAegeAAgp").f();
	this.shape.setTransform(38.4,13.3);

	// Layer 5
	this.instance = new lib.base();
	this.instance.setTransform(38.8,13,1,1,0,0,0,38.8,13);
	this.instance.shadow = new Shadow("#666666",1,1,2);

	this.addChild(this.instance,this.shape,this.text);
}).prototype = p = new Container();
p.constructor = lib.RESET_button;
p.nominalBounds = new Rectangle(-0.7,0,78.4,26.3);

(lib.Bitmap1 = function() {
	this.initialize(images.Bitmap1);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap1;
p.nominalBounds = new Rectangle(0,0,159,51);

(lib.Bitmap11 = function() {
	this.initialize(images.Bitmap11);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap11;
p.nominalBounds = new Rectangle(0,0,3170,380);

(lib.Bitmap2 = function() {
	this.initialize(images.Bitmap2);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap2;
p.nominalBounds = new Rectangle(0,0,1025,768);

(lib.Bitmap3 = function() {
	this.initialize(images.Bitmap3);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap3;
p.nominalBounds = new Rectangle(0,0,75,70);

(lib.Bitmap3_1 = function() {
	this.initialize(images.Bitmap3_1);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap3_1;
p.nominalBounds = new Rectangle(0,0,2058,340);

(lib.Bitmap4 = function() {
	this.initialize(images.Bitmap4);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap4;
p.nominalBounds = new Rectangle(0,0,130,70);

(lib.Bitmap4_1 = function() {
	this.initialize(images.Bitmap4_1);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap4_1;
p.nominalBounds = new Rectangle(0,0,989,472);

(lib.Bitmap5 = function() {
	this.initialize(images.Bitmap5);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap5;
p.nominalBounds = new Rectangle(0,0,183,70);

(lib.Bitmap5_1 = function() {
	this.initialize(images.Bitmap5_1);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap5_1;
p.nominalBounds = new Rectangle(0,0,301,102);

(lib.Bitmap6 = function() {
	this.initialize(images.Bitmap6);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap6;
p.nominalBounds = new Rectangle(0,0,183,119);

(lib.Bitmap6_1 = function() {
	this.initialize(images.Bitmap6_1);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap6_1;
p.nominalBounds = new Rectangle(0,0,989,160);

(lib.Bitmap7 = function() {
	this.initialize(images.Bitmap7);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap7;
p.nominalBounds = new Rectangle(0,0,3006,340);

(lib.DogAnim01 = function() {
	this.initialize(images.DogAnim01);
}).prototype = new Bitmap();
p.constructor = lib.DogAnim01;
p.nominalBounds = new Rectangle(0,0,973,591);

(lib.DogAnim02 = function() {
	this.initialize(images.DogAnim02);
}).prototype = new Bitmap();
p.constructor = lib.DogAnim02;
p.nominalBounds = new Rectangle(0,0,996,671);

(lib.DogAnim03 = function() {
	this.initialize(images.DogAnim03);
}).prototype = new Bitmap();
p.constructor = lib.DogAnim03;
p.nominalBounds = new Rectangle(0,0,973,644);

(lib.DogAnim04 = function() {
	this.initialize(images.DogAnim04);
}).prototype = new Bitmap();
p.constructor = lib.DogAnim04;
p.nominalBounds = new Rectangle(0,0,984,629);

(lib.DogAnim05 = function() {
	this.initialize(images.DogAnim05);
}).prototype = new Bitmap();
p.constructor = lib.DogAnim05;
p.nominalBounds = new Rectangle(0,0,977,640);

(lib.DogAnim06 = function() {
	this.initialize(images.DogAnim06);
}).prototype = new Bitmap();
p.constructor = lib.DogAnim06;
p.nominalBounds = new Rectangle(0,0,973,644);

(lib.DogAnim07 = function() {
	this.initialize(images.DogAnim07);
}).prototype = new Bitmap();
p.constructor = lib.DogAnim07;
p.nominalBounds = new Rectangle(0,0,973,610);

(lib.DogAnim08 = function() {
	this.initialize(images.DogAnim08);
}).prototype = new Bitmap();
p.constructor = lib.DogAnim08;
p.nominalBounds = new Rectangle(0,0,973,595);

(lib.DogAnim09 = function() {
	this.initialize(images.DogAnim09);
}).prototype = new Bitmap();
p.constructor = lib.DogAnim09;
p.nominalBounds = new Rectangle(0,0,913,118);

(lib.dogStatic = function() {
	this.initialize(images.dogStatic);
}).prototype = new Bitmap();
p.constructor = lib.dogStatic;
p.nominalBounds = new Rectangle(0,0,212,129);


(lib.mcStartScreen = function() {
	this.initialize();

	// Layer 1
	this.mcPlay = new lib.play();
	this.mcPlay.setTransform(512,245.5,1,1,0,0,0,47,47);

	this.shape = new Shape();
	this.shape.graphics.f("rgba(0,0,0,0.337)").p("EBQAgmWMif/AAAMAAABMtMCf/AAAMAAAhMt").f();
	this.shape.setTransform(512,245.5);

	this.addChild(this.shape,this.mcPlay);
}).prototype = p = new Container();
p.constructor = lib.mcStartScreen;
p.nominalBounds = new Rectangle(0,0,1024,491);

(lib.play = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.play_1();

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.play;
p.nominalBounds = new Rectangle(0,0,94,94);

(lib.play_1 = function() {
	this.initialize(images.play_1);
}).prototype = new Bitmap();
p.constructor = lib.play_1;
p.nominalBounds = new Rectangle(0,0,94,94);


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
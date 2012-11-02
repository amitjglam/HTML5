if (!window.lib) { window.lib = {}; }

var p; // shortcut to reference prototypes

// stage content:
(lib.intro = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.introduction();
	this.instance.setTransform(512,384,1,1,0,0,0,512,384);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.intro;
p.nominalBounds = new Rectangle(0,0,1024,768);


// symbols:
(lib.introduction = function() {
	this.initialize();

	// Layer 2
	this.mcCaptionView = new lib.hsscoreshellCaptionView();
	this.mcCaptionView.setTransform(172.1,600,1,1,0,0,0,9.6,7.6);
	this.mcCaptionView.visible =false;
	// Layer 1
	this.text = new Text("What is friction?", "20px HelveticaNeueLT Std", "#000000");
	this.text.textBaseline = "top";
	this.text.lineHeight = 20;
	this.text.setTransform(20,90);

	this.instance = new lib.OST1L_area2();
	this.instance.setTransform(512,68.6,1,0.813,0,0,0,512,84.4);

	this.instance_1 = new lib.IntroBackground();
	this.instance_1.setTransform(512,408.5,1,1,0,0,180,512,360.5);

	this.addChild(this.instance_1,this.instance,this.text,this.mcCaptionView);
}).prototype = p = new Container();
p.constructor = lib.introduction;
p.nominalBounds = new Rectangle(0,0,1024,768);

(lib.IntroBackground = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(0,-47.9);

	this.addChild(this.instance);
}).prototype = p = new Container();
p.constructor = lib.IntroBackground;
p.nominalBounds = new Rectangle(0,-47.9,1024,768);

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

(lib.hsscoreshellCaptionView = function() {
	this.initialize();

	// buttons
	this.btnDown = new lib.ArrowButton();
	this.btnDown.setTransform(698.3,54.9,1.5,1.5,0,0,0,7.5,7.5);

	this.btnUp = new lib.UpArrowButton();
	this.btnUp.setTransform(687,16.2,1.5,1.5);

	// textfield
	this.tf = new Text("This x2is one line\nand anotherrrrrh22kkkλ°", "16px undefined", "#000000");
	this.tf.textBaseline = "top";
	this.tf.lineHeight = 18;
	this.tf.lineWidth = 660;
	this.tf.setTransform(10,8);

	this.instance = new lib.captionBG();
	this.instance.setTransform(450,33.5,1,1,0,0,0,450,33.5);
	this.instance.alpha = 0.7;
	this.instance.shadow = new Shadow("#000000",4,4,5);

	this.addChild(this.instance,this.tf,this.btnUp,this.btnDown);
}).prototype = p = new Container();
p.constructor = lib.hsscoreshellCaptionView;
p.nominalBounds = new Rectangle(0,0,700,62.8);

(lib.UpArrowButton = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#333333").p("AAZAZIgZgxIgYAxIAxAA").f();
	this.shape.setTransform(0,-0.4);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.UpArrowButton;
p.nominalBounds = new Rectangle(-2.4,-2.9,5,5);

(lib.ArrowButtonInner = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#000000").p("AAABLQAfAAAWgXQAWgVAAgfQAAgegWgWQgWgWgfAAQgeAAgXAWQgVAWAAAeQAAAfAVAVQAXAXAeAA").f();
	this.shape.setTransform(7.5,7.5);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.ArrowButtonInner;
p.nominalBounds = new Rectangle(0,0,15,14.9);

(lib.ArrowButton = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#333333").p("AAZgYIgxAAIAYAxIAZgx").f();
	this.shape.setTransform(0,0.8);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.ArrowButton;
p.nominalBounds = new Rectangle(-2.4,-1.7,5,5);

(lib.captionBG = function() {
	this.initialize();

	// Layer 1
	this.shape = new Shape();
	this.shape.graphics.f("#ffffff").s("rgba(1,1,1,0)").ss(2,1,1,3).rc(-350,-30,700,60,10,10,0,0);
	this.shape.setTransform(350,30);

	this.addChild(this.shape);
}).prototype = p = new Container();
p.constructor = lib.captionBG;
p.nominalBounds = new Rectangle(0,0,700,60);

(lib.CopyRight = function() {
	this.initialize();

	// Layer 1
	this.text = new Text("Copyright © Houghton Mifflin Harcourt Publishing", "11px HelveticaNeueLT Std Med", "#000000");
	this.text.textAlign = "center";
	this.text.textBaseline = "top";
	this.text.lineHeight = 11;
	this.text.setTransform(128.2,0);

	this.addChild(this.text);
}).prototype = p = new Container();
p.constructor = lib.CopyRight;
p.nominalBounds = new Rectangle(0,0,256.4,16.9);

(lib._6Red_bg = function() {
	this.initialize(images._6Red_bg);
}).prototype = new Bitmap();
p.constructor = lib._6Red_bg;
p.nominalBounds = new Rectangle(0,0,1000,750);

(lib.Bitmap1 = function() {
	this.initialize(images.Bitmap1);
}).prototype = new Bitmap();
p.constructor = lib.Bitmap1;
p.nominalBounds = new Rectangle(0,0,1024,768);
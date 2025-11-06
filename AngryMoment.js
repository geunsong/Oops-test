(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"AngryMoment_atlas_1", frames: [[0,0,492,1200]]},
		{name:"AngryMoment_atlas_2", frames: [[902,0,782,964],[902,966,900,688],[0,0,900,912],[0,914,900,911]]},
		{name:"AngryMoment_atlas_3", frames: [[0,0,1000,1000],[0,1002,1000,1000],[1002,0,1000,1000],[1002,1002,860,969]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.무그림자 = function() {
	this.initialize(ss["AngryMoment_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.샴푸 = function() {
	this.initialize(ss["AngryMoment_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.양말 = function() {
	this.initialize(ss["AngryMoment_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.젓가락 = function() {
	this.initialize(ss["AngryMoment_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.컵 = function() {
	this.initialize(ss["AngryMoment_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.콘센트 = function() {
	this.initialize(ss["AngryMoment_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.티셔츠 = function() {
	this.initialize(ss["AngryMoment_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.펜 = function() {
	this.initialize(ss["AngryMoment_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.화장지 = function() {
	this.initialize(ss["AngryMoment_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.화장지버튼 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("clickwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.화장지();
	this.instance.setTransform(-430,-417);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-14.9996,x:-523.2,y:-291.45},0).wait(1).to({y:-215.45},0).wait(1).to({rotation:0,x:-430,y:-417},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-523.2,-514,1081.4,1234.5);


(lib.펜버튼 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("clickwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.펜();
	this.instance.setTransform(-430,-435);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:15,x:-302.9,y:-531.45},0).wait(1).to({y:-483.05},0).wait(1).to({rotation:0,x:-430,y:-435},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-538.7,-531.4,1105.2,1161.3);


(lib.티셔츠버튼 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("clickwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.티셔츠();
	this.instance.setTransform(-450,-456);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:15,x:-316.6,y:-556.9},0).wait(1).to({y:-517},0).wait(1).to({rotation:0,x:-450,y:-456},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-552.6,-556.9,1105.4,1153.8);


(lib.콘센트버튼 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("clickwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.콘센트();
	this.instance.setTransform(-500,-500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:14.9996,x:-353.5,y:-612.3},0).wait(1).to({x:-353.55,y:-546.95},0).wait(1).to({rotation:0,x:-500,y:-500},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-612.3,-612.3,1224.6999999999998,1290.1);


(lib.cupbt = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("clickwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.컵();
	this.instance.setTransform(-410,-355);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:-15.0001,x:-487.65,y:-236.75},0).wait(1).to({scaleX:1,scaleY:1,rotation:-14.9996,x:-487.7,y:-188.4},0).wait(1).to({rotation:0,x:-410,y:-355},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-487.7,-469.6,1047.4,945.8);


(lib.젓가락버튼 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("clickwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.젓가락();
	this.instance.setTransform(-391,-482);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:15.0001,x:-252.85,y:-566.65},0).wait(1).to({x:-252.8,y:-518.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:-391,y:-480},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-502.3,-566.6,1004.8,1182);


(lib.양말버튼 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("clickwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.양말();
	this.instance.setTransform(-500,-500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:15.0003,x:-353.45,y:-612.25},0).wait(1).to({scaleX:1,scaleY:1,rotation:14.9996,x:-353.55,y:-543.95},0).wait(1).to({rotation:0,x:-500,y:-500},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-612.3,-612.2,1224.6999999999998,1293);


(lib.샴푸버튼 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("clickwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.샴푸();
	this.instance.setTransform(-307,-683);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-14.9996,x:-473.25,y:-580.2},0).wait(1).to({y:-504.2},0).wait(1).to({rotation:0,x:-307,y:-683},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-473.2,-707.5,785.7,1362.4);


(lib.무버튼 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_2 = function() {
		playSound("clickwav");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(2));

	// Layer_1
	this.instance = new lib.무그림자();
	this.instance.setTransform(-500,-500);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:-14.9996,x:-612.3,y:-353.5},0).wait(1).to({y:-304.2},0).wait(1).to({rotation:0,x:-500,y:-500},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-612.3,-612.3,1224.6999999999998,1274);


// stage content:
(lib.AngryMoment = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {icon:0,CupAnimation:4,PenAnimation:5,ChopstickAnimation:6,ShampooAnimation:7,ToiletpaperAnimation:8,TshirtAnimation:9,OutletAnimation:10,SocksAnimation:11,RadishAnimation:12};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,4,5,6,7,8,9,10,11,12];
	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		
		// ---------------------
		// 초기화면 배경 영상
		// ---------------------
		if (!document.getElementById("bgVideo")) {
		    const video = document.createElement("video");
		    video.id = "bgVideo";
		    video.src = "wave5.mp4"; // 경로 확인
		    video.autoplay = true;
		    video.loop = true;
		    video.muted = true;
		    video.playsInline = true;
		
		    video.style.position = "fixed";
		    video.style.top = "0";
		    video.style.left = "0";
		    video.style.width = "100%";
		    video.style.height = "100%";
		    video.style.objectFit = "cover";
		    video.style.zIndex = "-1"; // 캔버스 뒤
		    video.style.pointerEvents = "none";
		
		    document.body.appendChild(video);
		}
		
		// ---------------------
		// 버튼 클릭 시 다른 레이블 이동 + 배경 영상 제거
		// ---------------------
		const gotoAnimation = (label) => {
		    const bg = document.getElementById("bgVideo");
		    if (bg) bg.remove(); // 배경 영상 제거
		    this.gotoAndStop(label);
		};
		
		this.cupbt.addEventListener("click", () => gotoAnimation("CupAnimation"));
		this.penbt.addEventListener("click", () => gotoAnimation("PenAnimation"));
		this.chopstickbt.addEventListener("click", () => gotoAnimation("ChopstickAnimation"));
		this.shampoobt.addEventListener("click", () => gotoAnimation("ShampooAnimation"));
		this.toiletpaperbt.addEventListener("click", () => gotoAnimation("ToiletpaperAnimation"));
		this.tshirtbt.addEventListener("click", () => gotoAnimation("TshirtAnimation"));
		this.outletbt.addEventListener("click", () => gotoAnimation("OutletAnimation"));
		this.socksbt.addEventListener("click", () => gotoAnimation("SocksAnimation"));
		this.radishbt.addEventListener("click", () => gotoAnimation("RadishAnimation"));
		
		var _this = this;
		/*
		Start the complete animation.
		*/
		createjs.Ticker.removeEventListener('tick', stage);
		createjs.Ticker.addEventListener('tick', stage);
		
		
		
		
		
		
		
		
		this.stop();
		
		// ---------------------
		// (기존 초기화면 배경 영상 및 gotoAnimation 함수 코드는 그대로 유지)
		// ---------------------
		
		// ---------------------
		// 버튼들을 배열로 묶기 (이제 이들은 Wrapper 무비 클립 인스턴스임)
		// ---------------------
		const buttons = [
		    this.cupbt,
		    this.penbt,
		    this.chopstickbt,
		    this.shampoobt,
		    this.toiletpaperbt,
		    this.tshirtbt,
		    this.outletbt,
		    this.socksbt,
			this.radishbt
		];
		
		// ---------------------
		// 미세 움직임을 위한 설정값
		// ---------------------
		// **배열로 변경**하여 인덱스로 접근
		const buttonMoveStates = []; 
		const moveRange = 3.5; // 움직임 범위 증가
		const moveSpeed = 0.04; // 움직이는 속도
		
		// 버튼별 초기 상태 설정 및 초기 위치 저장
		buttons.forEach((btn, index) => {
		    // 초기 위치를 저장합니다.
		    btn.originalX = btn.x;
		    btn.originalY = btn.y;
		
		    // 인덱스를 기반으로 상태 객체를 배열에 푸시
		    buttonMoveStates.push({ 
		        phaseX: index * 5, 
		        phaseY: index * 7  
		    });
		});
		
		// ---------------------
		// Ticker 이벤트 리스너 추가: 버튼 미세 움직임 처리
		// ---------------------
		// 'stage'에 리스너를 추가하는 기존 코드는 유지
		// createjs.Ticker.removeEventListener('tick', stage);
		// createjs.Ticker.addEventListener('tick', stage); // 메인 스테이지 업데이트 코드
		
		createjs.Ticker.addEventListener('tick', handleButtonMovement);
		
		// handleButtonMovement 함수 정의
		function handleButtonMovement(event) {
		    if (event.paused) return;
		
		    buttons.forEach((btn, index) => { 
		        const state = buttonMoveStates[index];
		        
		        // 시간 흐름에 따라 단계(phase)를 업데이트
		        state.phaseX += moveSpeed;
		        state.phaseY += moveSpeed * 1.5;
		
		        // X축 위치 업데이트: Wrapper 무비 클립의 x/y를 변경
		        btn.x = btn.originalX + Math.sin(state.phaseX) * moveRange;
		        
		        // Y축 위치 업데이트
		        btn.y = btn.originalY + Math.sin(state.phaseY) * moveRange * 1.5;
		    });
		    
		    // 참고: 스테이지 업데이트는 이미 다른 리스너에 의해 처리되고 있다고 가정
		}
	}
	this.frame_4 = function() {
		this.stop();
		
		const video = document.createElement("video");
		video.src = "cup2.mp4";
		video.loop = false; // 👈 한 번만 재생
		video.muted = false;
		video.autoplay = false;
		video.style.position = "absolute";
		video.style.top = "0px";
		video.style.left = "0px";
		video.style.width = "100%";
		video.style.height = "100%";
		video.style.zIndex = "100";
		document.body.appendChild(video);
		
		// 초기화 함수
		const resetToStart = () => {
		    if (document.body.contains(video)) {
		        document.body.removeChild(video);
		    }
		    this.gotoAndStop("icon");
		    stage.update();
		
		    // 이벤트 제거
		    document.body.removeEventListener("click", resetToStart);
		    video.removeEventListener("ended", handleVideoEnd);
		};
		
		// 영상 종료 후 자동 초기화
		const handleVideoEnd = () => {
		    resetToStart();
		};
		
		// 영상 재생
		video.play().then(() => {
		    document.body.addEventListener("click", resetToStart); // 클릭 시 즉시 초기화
		    video.addEventListener("ended", handleVideoEnd);       // 영상이 끝나면 자동 초기화
		}).catch((err) => {
		    console.error("영상 재생 오류:", err);
		});
	}
	this.frame_5 = function() {
		this.stop();
		
		const video = document.createElement("video");
		video.src = "pen.mp4";
		video.loop = false; // 👈 한 번만 재생
		video.muted = false;
		video.autoplay = false;
		video.style.position = "absolute";
		video.style.top = "0px";
		video.style.left = "0px";
		video.style.width = "100%";
		video.style.height = "100%";
		video.style.zIndex = "100";
		document.body.appendChild(video);
		
		// 초기화 함수
		const resetToStart = () => {
		    if (document.body.contains(video)) {
		        document.body.removeChild(video);
		    }
		    this.gotoAndStop("icon");
		    stage.update();
		
		    // 이벤트 제거
		    document.body.removeEventListener("click", resetToStart);
		    video.removeEventListener("ended", handleVideoEnd);
		};
		
		// 영상 종료 후 자동 초기화
		const handleVideoEnd = () => {
		    resetToStart();
		};
		
		// 영상 재생
		video.play().then(() => {
		    document.body.addEventListener("click", resetToStart); // 클릭 시 즉시 초기화
		    video.addEventListener("ended", handleVideoEnd);       // 영상이 끝나면 자동 초기화
		}).catch((err) => {
		    console.error("영상 재생 오류:", err);
		});
	}
	this.frame_6 = function() {
		this.stop();
		
		const video = document.createElement("video");
		video.src = "chopstick.mp4";
		video.loop = false; // 👈 한 번만 재생
		video.muted = false;
		video.autoplay = false;
		video.style.position = "absolute";
		video.style.top = "0px";
		video.style.left = "0px";
		video.style.width = "100%";
		video.style.height = "100%";
		video.style.zIndex = "100";
		document.body.appendChild(video);
		
		// 초기화 함수
		const resetToStart = () => {
		    if (document.body.contains(video)) {
		        document.body.removeChild(video);
		    }
		    this.gotoAndStop("icon");
		    stage.update();
		
		    // 이벤트 제거
		    document.body.removeEventListener("click", resetToStart);
		    video.removeEventListener("ended", handleVideoEnd);
		};
		
		// 영상 종료 후 자동 초기화
		const handleVideoEnd = () => {
		    resetToStart();
		};
		
		// 영상 재생
		video.play().then(() => {
		    document.body.addEventListener("click", resetToStart); // 클릭 시 즉시 초기화
		    video.addEventListener("ended", handleVideoEnd);       // 영상이 끝나면 자동 초기화
		}).catch((err) => {
		    console.error("영상 재생 오류:", err);
		});
	}
	this.frame_7 = function() {
		this.stop();
		
		const video = document.createElement("video");
		video.src = "shampoo.mp4";
		video.loop = false; // 👈 한 번만 재생
		video.muted = false;
		video.autoplay = false;
		video.style.position = "absolute";
		video.style.top = "0px";
		video.style.left = "0px";
		video.style.width = "100%";
		video.style.height = "100%";
		video.style.zIndex = "100";
		document.body.appendChild(video);
		
		// 초기화 함수
		const resetToStart = () => {
		    if (document.body.contains(video)) {
		        document.body.removeChild(video);
		    }
		    this.gotoAndStop("icon");
		    stage.update();
		
		    // 이벤트 제거
		    document.body.removeEventListener("click", resetToStart);
		    video.removeEventListener("ended", handleVideoEnd);
		};
		
		// 영상 종료 후 자동 초기화
		const handleVideoEnd = () => {
		    resetToStart();
		};
		
		// 영상 재생
		video.play().then(() => {
		    document.body.addEventListener("click", resetToStart); // 클릭 시 즉시 초기화
		    video.addEventListener("ended", handleVideoEnd);       // 영상이 끝나면 자동 초기화
		}).catch((err) => {
		    console.error("영상 재생 오류:", err);
		});
	}
	this.frame_8 = function() {
		this.stop();
		
		const video = document.createElement("video");
		video.src = "toiletpaper.mp4";
		video.loop = false; // 👈 한 번만 재생
		video.muted = false;
		video.autoplay = false;
		video.style.position = "absolute";
		video.style.top = "0px";
		video.style.left = "0px";
		video.style.width = "100%";
		video.style.height = "100%";
		video.style.zIndex = "100";
		document.body.appendChild(video);
		
		// 초기화 함수
		const resetToStart = () => {
		    if (document.body.contains(video)) {
		        document.body.removeChild(video);
		    }
		    this.gotoAndStop("icon");
		    stage.update();
		
		    // 이벤트 제거
		    document.body.removeEventListener("click", resetToStart);
		    video.removeEventListener("ended", handleVideoEnd);
		};
		
		// 영상 종료 후 자동 초기화
		const handleVideoEnd = () => {
		    resetToStart();
		};
		
		// 영상 재생
		video.play().then(() => {
		    document.body.addEventListener("click", resetToStart); // 클릭 시 즉시 초기화
		    video.addEventListener("ended", handleVideoEnd);       // 영상이 끝나면 자동 초기화
		}).catch((err) => {
		    console.error("영상 재생 오류:", err);
		});
	}
	this.frame_9 = function() {
		this.stop();
		
		const video = document.createElement("video");
		video.src = "Tshirt2.mp4";
		video.loop = false; // 👈 한 번만 재생
		video.muted = false;
		video.autoplay = false;
		video.style.position = "absolute";
		video.style.top = "0px";
		video.style.left = "0px";
		video.style.width = "100%";
		video.style.height = "100%";
		video.style.zIndex = "100";
		document.body.appendChild(video);
		
		// 초기화 함수
		const resetToStart = () => {
		    if (document.body.contains(video)) {
		        document.body.removeChild(video);
		    }
		    this.gotoAndStop("icon");
		    stage.update();
		
		    // 이벤트 제거
		    document.body.removeEventListener("click", resetToStart);
		    video.removeEventListener("ended", handleVideoEnd);
		};
		
		// 영상 종료 후 자동 초기화
		const handleVideoEnd = () => {
		    resetToStart();
		};
		
		// 영상 재생
		video.play().then(() => {
		    document.body.addEventListener("click", resetToStart); // 클릭 시 즉시 초기화
		    video.addEventListener("ended", handleVideoEnd);       // 영상이 끝나면 자동 초기화
		}).catch((err) => {
		    console.error("영상 재생 오류:", err);
		});
	}
	this.frame_10 = function() {
		this.stop();
		
		const video = document.createElement("video");
		video.src = "outlet2.mp4";
		video.loop = false; // 👈 한 번만 재생
		video.muted = false;
		video.autoplay = false;
		video.style.position = "absolute";
		video.style.top = "0px";
		video.style.left = "0px";
		video.style.width = "100%";
		video.style.height = "100%";
		video.style.zIndex = "100";
		document.body.appendChild(video);
		
		// 초기화 함수
		const resetToStart = () => {
		    if (document.body.contains(video)) {
		        document.body.removeChild(video);
		    }
		    this.gotoAndStop("icon");
		    stage.update();
		
		    // 이벤트 제거
		    document.body.removeEventListener("click", resetToStart);
		    video.removeEventListener("ended", handleVideoEnd);
		};
		
		// 영상 종료 후 자동 초기화
		const handleVideoEnd = () => {
		    resetToStart();
		};
		
		// 영상 재생
		video.play().then(() => {
		    document.body.addEventListener("click", resetToStart); // 클릭 시 즉시 초기화
		    video.addEventListener("ended", handleVideoEnd);       // 영상이 끝나면 자동 초기화
		}).catch((err) => {
		    console.error("영상 재생 오류:", err);
		});
	}
	this.frame_11 = function() {
		this.stop();
		
		const video = document.createElement("video");
		video.src = "socks.mp4";
		video.loop = false; // 👈 한 번만 재생
		video.muted = false;
		video.autoplay = false;
		video.style.position = "absolute";
		video.style.top = "0px";
		video.style.left = "0px";
		video.style.width = "100%";
		video.style.height = "100%";
		video.style.zIndex = "100";
		document.body.appendChild(video);
		
		// 초기화 함수
		const resetToStart = () => {
		    if (document.body.contains(video)) {
		        document.body.removeChild(video);
		    }
		    this.gotoAndStop("icon");
		    stage.update();
		
		    // 이벤트 제거
		    document.body.removeEventListener("click", resetToStart);
		    video.removeEventListener("ended", handleVideoEnd);
		};
		
		// 영상 종료 후 자동 초기화
		const handleVideoEnd = () => {
		    resetToStart();
		};
		
		// 영상 재생
		video.play().then(() => {
		    document.body.addEventListener("click", resetToStart); // 클릭 시 즉시 초기화
		    video.addEventListener("ended", handleVideoEnd);       // 영상이 끝나면 자동 초기화
		}).catch((err) => {
		    console.error("영상 재생 오류:", err);
		});
	}
	this.frame_12 = function() {
		this.stop();
		
		const video = document.createElement("video");
		video.src = "radish.mp4";
		video.loop = false; // 👈 한 번만 재생
		video.muted = false;
		video.autoplay = false;
		video.style.position = "absolute";
		video.style.top = "0px";
		video.style.left = "0px";
		video.style.width = "100%";
		video.style.height = "100%";
		video.style.zIndex = "100";
		document.body.appendChild(video);
		
		// 초기화 함수
		const resetToStart = () => {
		    if (document.body.contains(video)) {
		        document.body.removeChild(video);
		    }
		    this.gotoAndStop("icon");
		    stage.update();
		
		    // 이벤트 제거
		    document.body.removeEventListener("click", resetToStart);
		    video.removeEventListener("ended", handleVideoEnd);
		};
		
		// 영상 종료 후 자동 초기화
		const handleVideoEnd = () => {
		    resetToStart();
		};
		
		// 영상 재생
		video.play().then(() => {
		    document.body.addEventListener("click", resetToStart); // 클릭 시 즉시 초기화
		    video.addEventListener("ended", handleVideoEnd);       // 영상이 끝나면 자동 초기화
		}).catch((err) => {
		    console.error("영상 재생 오류:", err);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1).call(this.frame_9).wait(1).call(this.frame_10).wait(1).call(this.frame_11).wait(1).call(this.frame_12).wait(2));

	// cup
	this.cupbt = new lib.cupbt();
	this.cupbt.name = "cupbt";
	this.cupbt.setTransform(875.75,621.7,0.2,0.2,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.cupbt, 0, 1, 2, false, new lib.cupbt(), 3);

	this.timeline.addTween(cjs.Tween.get(this.cupbt).wait(14));

	// pen
	this.penbt = new lib.펜버튼();
	this.penbt.name = "penbt";
	this.penbt.setTransform(1120.2,477.65,0.18,0.18,0,0,0,3.1,0);
	new cjs.ButtonHelper(this.penbt, 0, 1, 2, false, new lib.펜버튼(), 3);

	this.timeline.addTween(cjs.Tween.get(this.penbt).wait(14));

	// chopstick
	this.chopstickbt = new lib.젓가락버튼();
	this.chopstickbt.name = "chopstickbt";
	this.chopstickbt.setTransform(573.4,157.5,0.2,0.2);
	new cjs.ButtonHelper(this.chopstickbt, 0, 1, 2, false, new lib.젓가락버튼(), 3);

	this.timeline.addTween(cjs.Tween.get(this.chopstickbt).wait(14));

	// shampoo
	this.shampoobt = new lib.샴푸버튼();
	this.shampoobt.name = "shampoobt";
	this.shampoobt.setTransform(408.45,315.6,0.15,0.15,0,0,0,0,0.4);
	new cjs.ButtonHelper(this.shampoobt, 0, 1, 2, false, new lib.샴푸버튼(), 3);

	this.timeline.addTween(cjs.Tween.get(this.shampoobt).wait(14));

	// toiletpaper
	this.toiletpaperbt = new lib.화장지버튼();
	this.toiletpaperbt.name = "toiletpaperbt";
	this.toiletpaperbt.setTransform(795.9,370.6,0.17,0.17,0,0,0,0.3,0.9);
	new cjs.ButtonHelper(this.toiletpaperbt, 0, 1, 2, false, new lib.화장지버튼(), 3);

	this.timeline.addTween(cjs.Tween.get(this.toiletpaperbt).wait(14));

	// tshirt
	this.tshirtbt = new lib.티셔츠버튼();
	this.tshirtbt.name = "tshirtbt";
	this.tshirtbt.setTransform(162.8,144.95,0.2,0.2,0,0,0,0.2,0.5);
	new cjs.ButtonHelper(this.tshirtbt, 0, 1, 2, false, new lib.티셔츠버튼(), 3);

	this.timeline.addTween(cjs.Tween.get(this.tshirtbt).wait(14));

	// outlet
	this.outletbt = new lib.콘센트버튼();
	this.outletbt.name = "outletbt";
	this.outletbt.setTransform(1044.6,193.7,0.28,0.28,0,0,0,0,0.2);
	new cjs.ButtonHelper(this.outletbt, 0, 1, 2, false, new lib.콘센트버튼(), 3);

	this.timeline.addTween(cjs.Tween.get(this.outletbt).wait(14));

	// socks
	this.socksbt = new lib.양말버튼();
	this.socksbt.name = "socksbt";
	this.socksbt.setTransform(521.65,547.55,0.26,0.26,0,0,0,0.2,0);
	new cjs.ButtonHelper(this.socksbt, 0, 1, 2, false, new lib.양말버튼(), 3);

	this.timeline.addTween(cjs.Tween.get(this.socksbt).wait(14));

	// radish
	this.radishbt = new lib.무버튼();
	this.radishbt.name = "radishbt";
	this.radishbt.setTransform(190.55,493.15,0.2,0.2,0,0,0,0.2,0.2);
	new cjs.ButtonHelper(this.radishbt, 0, 1, 2, false, new lib.무버튼(), 3);

	this.timeline.addTween(cjs.Tween.get(this.radishbt).wait(14));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(692.2,382.2,529.3999999999999,342.40000000000003);
// library properties:
lib.properties = {
	id: 'E1355972504B4B4A81921F27C88F8CE3',
	width: 1280,
	height: 720,
	fps: 30,
	color: "#FFFFFF",
	opacity: 0.00,
	manifest: [
		{src:"images/AngryMoment_atlas_1.png?1762163412502", id:"AngryMoment_atlas_1"},
		{src:"images/AngryMoment_atlas_2.png?1762163412502", id:"AngryMoment_atlas_2"},
		{src:"images/AngryMoment_atlas_3.png?1762163412502", id:"AngryMoment_atlas_3"},
		{src:"sounds/clickwav.mp3?1762163412514", id:"clickwav"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['E1355972504B4B4A81921F27C88F8CE3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;
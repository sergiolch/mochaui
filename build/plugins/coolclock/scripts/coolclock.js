window.CoolClock=function(e,c,b,d,a){return this.init(e,c,b,d,a)};CoolClock.config={clockTracker:{},tickDelay:1000,longTickDelay:15000,defaultRadius:85,renderRadius:100,defaultSkin:"default",skins:{"default":{outerBorder:{lineWidth:0,radius:99,fillColor:"#577a9e",color:"#fff",alpha:0},smallIndicator:{lineWidth:6,startAt:82,endAt:89,color:"#fff",alpha:0.15},largeIndicator:{lineWidth:6,startAt:82,endAt:89,color:"#fff",alpha:0.5},hourHand:{lineWidth:6,startAt:0,endAt:53,color:"#fff",alpha:1},minuteHand:{lineWidth:6,startAt:0,endAt:80,color:"#fff",alpha:1},secondHand:{lineWidth:2,startAt:-18,endAt:88,color:"#fff",alpha:1},secondDecoration:{lineWidth:0,startAt:79,radius:5,fillColor:"#fff",color:"#fff",alpha:1}},defaultOld:{outerBorder:{lineWidth:6,radius:98,color:"#fff",alpha:0},smallIndicator:{lineWidth:2,startAt:86,endAt:91,color:"#555",alpha:1},largeIndicator:{lineWidth:3,startAt:80,endAt:91,color:"#555",alpha:1},hourHand:{lineWidth:4,startAt:-1,endAt:56,color:"#141414",alpha:1},minuteHand:{lineWidth:4,startAt:-1,endAt:78,color:"#141414",alpha:1},secondHand:{lineWidth:1,startAt:-16,endAt:80,color:"#ce1717",alpha:1},secondDecoration:{lineWidth:2,startAt:0,radius:7,fillColor:"#fff",color:"#ce1717",alpha:0}},mochaUI1:{outerBorder:{lineWidth:185,radius:1,color:"#000",alpha:0},smallIndicator:{lineWidth:3,startAt:88,endAt:94,color:"#595959",alpha:1},largeIndicator:{lineWidth:3,startAt:82,endAt:94,color:"#ddd",alpha:1},hourHand:{lineWidth:4,startAt:0,endAt:58,color:"#fff",alpha:1},minuteHand:{lineWidth:4,startAt:0,endAt:78,color:"#fff",alpha:1},secondHand:{lineWidth:4,startAt:82,endAt:94,color:"#98B8D9",alpha:1},secondDecoration:{lineWidth:3,startAt:0,radius:6,fillColor:"white",color:"white",alpha:1}},mochaUI2:{outerBorder:{lineWidth:185,radius:1,color:"#000",alpha:0},smallIndicator:{lineWidth:3,startAt:88,endAt:94,color:"#2CC2D1",alpha:1},largeIndicator:{lineWidth:3,startAt:82,endAt:94,color:"#1BFFD9",alpha:1},hourHand:{lineWidth:4,startAt:0,endAt:58,color:"#fff",alpha:1},minuteHand:{lineWidth:4,startAt:0,endAt:78,color:"#fff",alpha:1},secondHand:{lineWidth:4,startAt:82,endAt:94,color:"#EFCD5F",alpha:1},secondDecoration:{lineWidth:0,startAt:0,radius:6,fillColor:"#fff",color:"#000",alpha:1}},mochaUI3:{outerBorder:{lineWidth:185,radius:1,color:"#000",alpha:0},smallIndicator:{lineWidth:3,startAt:88,endAt:94,color:"#C7C3B7",alpha:1},largeIndicator:{lineWidth:3,startAt:82,endAt:94,color:"#C7C3B7",alpha:1},hourHand:{lineWidth:4,startAt:-1,endAt:58,color:"#C7C3B7",alpha:1},minuteHand:{lineWidth:4,startAt:-1,endAt:78,color:"#C7C3B7",alpha:1},secondHand:{lineWidth:3,startAt:82,endAt:94,color:"#ce1717",alpha:1},secondDecoration:{lineWidth:0,startAt:0,radius:6,fillColor:"#999",color:"#000",alpha:0}}}};CoolClock.prototype={init:function(){var a;canvasId="myClock";this.canvasId=canvasId;this.displayRadius=75;this.skinId="default";this.showSecondHand=true;this.tickDelay=1000;this.canvas=new Element("canvas",{id:this.canvasId,width:this.displayRadius*2,height:this.displayRadius*2,styles:{width:this.displayRadius*2,height:this.displayRadius*2}}).inject($("clocker"));if(MochaUI.ieSupport=="excanvas"&&Browser.Engine.trident){G_vmlCanvasManager.initElement(this.canvas)}this.renderRadius=CoolClock.config.renderRadius;this.scale=this.displayRadius/this.renderRadius;this.ctx=this.canvas.getContext("2d");this.ctx.scale(this.scale,this.scale);this.gmtOffset=a!=null?parseFloat(a):a;CoolClock.config.clockTracker[canvasId]=this;this.initializing=true;this.tick();return this},fullCircle:function(a){this.fullCircleAt(this.renderRadius,this.renderRadius,a)},fullCircleAt:function(a,c,b){this.ctx.save();this.ctx.globalAlpha=b.alpha;this.ctx.lineWidth=b.lineWidth;if(document.all){this.ctx.lineWidth=this.ctx.lineWidth*this.scale}this.ctx.beginPath();this.ctx.arc(a,c,b.radius,0,2*Math.PI,false);this.ctx.closePath();if(document.all){this.ctx.arc(a,c,b.radius,-0.1,0.1,false)}if(b.fillColor){this.ctx.fillStyle=b.fillColor;this.ctx.fill()}if(b.color){this.ctx.strokeStyle=b.color;this.ctx.stroke()}this.ctx.restore()},reflection:function(){this.ctx.fillStyle="rgba(250, 250, 250, .4)";this.ctx.beginPath();this.ctx.arc(100,100,98,0,Math.PI,true);this.ctx.bezierCurveTo(60,80,160,80,196,100);this.ctx.fill()},bg:function(){this.ctx.beginPath();this.ctx.fillStyle="#577a9e";this.ctx.arc(100,100,99,0,2*Math.PI,false);this.ctx.fill()},center:function(){this.ctx.beginPath();this.ctx.fillStyle="#577a9e";this.ctx.arc(100,100,8,0,2*Math.PI,false);this.ctx.fill();this.ctx.strokeStyle="#fff";this.ctx.lineWidth=2;this.ctx.arc(100,100,8,0,2*Math.PI,false);this.ctx.stroke()},radialLineAtAngle:function(b,a){this.ctx.save();this.ctx.translate(this.renderRadius,this.renderRadius);this.ctx.rotate(Math.PI*(2*b-0.5));this.ctx.globalAlpha=a.alpha;this.ctx.strokeStyle=a.color;this.ctx.lineWidth=a.lineWidth;this.ctx.lineCap="round";if(document.all){this.ctx.lineWidth=this.ctx.lineWidth*this.scale}if(a.radius){this.fullCircleAt(a.startAt,0,a)}else{this.ctx.beginPath();this.ctx.moveTo(a.startAt,0);this.ctx.lineTo(a.endAt,0);this.ctx.stroke()}this.ctx.restore()},render:function(a,c,d){var e=CoolClock.config.skins[this.skinId];this.ctx.clearRect(0,0,this.renderRadius*2,this.renderRadius*2);this.bg();this.fullCircle(e.outerBorder);for(var b=0;b<60;b++){this.radialLineAtAngle(b/60,e[b%5?"smallIndicator":"largeIndicator"])}this.radialLineAtAngle((a+c/60)/12,e.hourHand);this.radialLineAtAngle((c+d/60)/60,e.minuteHand);if(this.showSecondHand){this.radialLineAtAngle(d/60,e.secondHand);if(!Browser.Engine.trident){this.radialLineAtAngle(d/60,e.secondDecoration)}}this.center()},nextTick:function(){setTimeout("CoolClock.config.clockTracker['"+this.canvasId+"'].tick()",this.tickDelay)},stillHere:function(){return $(this.canvasId)!=null},refreshDisplay:function(){var c=new Date();if(this.gmtOffset!=null){var a=new Date(c.valueOf()+(this.gmtOffset*1000*60*60));this.render(a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds())}else{var b=c.getHours();var d=c.getMinutes();var f=c.getSeconds();var e;this.refreshTime(b,d,f);this.render(b,d,f)}},refreshTime:function(a,c,e){var b=new Date();var d;if(a>=12){d=" PM"}else{d=" AM"}if(a>12){a-=12}if(a==0){a=12}if(c<10){c="0"+c}if(e==0||this.initializing==true){$("clock_title").set("html",a+":"+c+d);if($("clock_dockTabText")){$("clock_dockTabText").set("html",a+":"+c+d)}this.initializing=false}},tick:function(){if(this.stillHere()){this.refreshDisplay();this.nextTick()}}};
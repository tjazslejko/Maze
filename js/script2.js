var y = 2;
var x = 234;
var nar = 1;
var dx = 1;
var dy = 1;
 
var audio=new Audio('zvok/ozadi.mp3');
				audio.loop=true;
				audio.play();
				
var zajec = new Image();
zajec.src="slike/zajec5.png";

function drawIt() {
		ctx.fillStyle = "blue";
		if(nar==1){
	
		ctx.fillRect(x,y,1,1);
		
		labirint();

		}
		else if(nar==2){
			ctx.clearRect(x-11,y-11,27,27);
		ctx.drawImage(zajec, x-10, y-10, 23, 23);
			//c.clearRect(0,0,canvas.width,canvas.height);
			//c.drawImage(zajec,x,y);
		labirint();
		}
	
	
	if(x==234 && y>=2 && y<=10)
	y+=dy;
	if(y==10 && x>=170 && x<=234)
	x-=dx;
	if(x==170 && y>=10 && y<=26)
	y+=dy;
	if(y==26 && x>=170 && x<=186)
	x+=dx;
	if(x==186 && y>=26 && y<=42)
	y+=dy;
	if(y==42 && x>=170 && x<=250)
	x+=dx;
	if(x==250 && y>=42 && y<=58)
	y+=dy;
	if(y==58 && x<=250 && x>=234)
	x-=dx;
	if(x==234 && y>=58 && y<=74)
	y+=dy;
	if(y==74 && x<=234 && x>=186)
	x-=dx;
	if(x==186 && y>=74 && y<=90)
	y+=dy;
	if(y==90 && x<=202 && x>=186)
	x+=dx;
	if(x==202 && y<=106 && y>=90)
	y+=dy;
	if(y==106 && x<=202 && x>=170)
	x-=dx;
	if(x==170 && y<=170 && y>=106)
	y+=dy;
	if(y==170 && x<=186 && x>=170)
	x+=dx;
	if(x==186 && y<=218 && y>=170)
	y+=dy;
	if(y==218 && x>=170 && x<=186)
	x-=dx;
	if(x==170 && y<=218 && y>=202)
	y-=dy;
	if(y==202 && x<=170 && x>=154)
	x-=dx;
	if(x==154 && y>=154 && y<=202)
	y-=dy;
	if(y==154 && x<=154 && x>=122)
	x-=dx;
	if(x==122 && y>=154 && y<=170)
	y+=dy;
	if(y==170 && x>=122 && x<=138)
	x+=dx;
	if(x==138 && y>=170 && y<=250)
	y+=dy;
	if(y==250 && x<=154 && x>=138)
	x+=dx;
	if(x==154 && y>=250 && y<=266)
	y+=dy;
	if(y==266 && x>=154 && x<=170)
	x+=dx;
	if(x==170 && y>=266 && y<=282)
	y+=dy;
	if(y==282 && x>=122 && x<=170)
	x-=dx;
	if(x==122 && y>=234 && y<=282)
	y-=dy;
	if(y==234 && x<=122 && x>=106)
	x-=dx;
	if(x==106 && y>=234 && y<=282)
	y+=dy;
	if(y==282 && x<=106 && x>=90)
	x-=dx;
	if(x==90 && y>=266 && y<=282)
	y-=dy;
	if(y==266 && x<=90 && x>=74)
	x-=dx;
	if(x==74 && y>=266 && y<=282)
	y+=dy;
	if(y==282 && x>=58 && x<=74)
	x-=dx;
	if(x==58 && y>=282 && y<=298)
	y+=dy;
	if(y==298 && x>=26 && x<=58)
	x-=dx;
	if(x==26 && y>=298 && y<=314)
	y+=dy;
	if(y==314 && x>=10 && x<=26)
	x-=dx;
	if(x==10 && y>=314 && y<=378)
	y+=dy;
	if(y==378 && x>=10 && x<=26)
	x+=dx;
	if(x==26 && y>=362 && y<=378)
	y-=dy;
	if(y==362 && x>=26 && x<=42)
	x+=dx;
	if(x==42 && y>=346 && y<=362)
	y-=dy;
	if(y==346 && x>=42 && x<=74)
	x+=dx;
	if(x==74 && y>=314 && y<=346)
	y-=dy;
	if(y==314 && x>=74 && x<=106)
	x+=dx;
	if(x==106 && y>=314 && y<=346)
	y+=dy;
	if(y==346 && x>=106 && x<=122)
	x+=dx;
	if(x==122 && y>=346 && y<=362)
	y+=dy;
	if(y==362 && x>=106 && x<=122)
	x-=dx;
	if(x==106 && y>=362 && y<=410)
	y+=dy;
	if(y==410 && x>=106 && x<=138)
	x+=dx;
	if(x==138 && y>=394 && y<=410)
	y-=dy;
	if(y==394 && x>=122 && x<=138)
	x-=dx;
	if(x==122 && y>=378 && y<=394)
	y-=dy;
	if(y==378 && x>=122 && x<=154)
	x+=dx;
	if(x==154 && y>=378 && y<=394)
	y+=dy;
	if(y==394 && x>=154 && x<=170)
	x+=dx;
	if(x==170 && y>=394 && y<=442)
	y+=dy;
	if(y==442 && x>=170 && x<=202)
	x+=dx;
	if(x==202 && y>=442 && y<=458)
	y+=dy;
	if(y==458 && x>=186 && x<=202)
	x-=dx;
	if(x==186 && y>=458 && y<=474)
	y+=dy;
	if(y==474 && x>=168 && x<=250)
	x+=dx;
	if(x==250 && y>=474 && y<=482)
	y+=dy;
	if(x==250&&y==482){
			x=234;
			y=2;
		
		if(nar==1){
			nar++;
		}
		else{
			ctx.clearRect(x,y,4,4);    
		nar++;
		console.log("HELLO WORLD");
		document.getElementById("jajca").style.visibility="visible";
		swal("ZAJEC JE PRIŠEL DO KONCA!! DOBIL SI VELIKONOČNA JAJCA");
			setTimeout(function(){
			ctx.clearRect(100,200,1000,1000);    
			y = 2;
			x = 234;
			nar = 1;
			}, 400000);
		}
		
	}
				
	
	
}
setInterval(drawIt, 15);
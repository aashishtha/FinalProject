// JavaScript Document


window.onload=loadImg;
//window.onload=glimpse;

/*document.getElementById('map-canvas').style.display='block';
document.getElementById('pano').style.display='block';
document.getElementById('map-canvas1').style.display='block';
document.getElementById('searchDiv').style.display='block';*/

var myImg= new Array(4);
  	myImg[0]= "slider1";
  	myImg[1]= "slider2";
  	myImg[2]= "slider3";
  	myImg[3]= "slider4";
  	myImg[4]= "slider5";
	
var description=new Array(4);
	description[0]="EXCEPTEU ROCCAECAT";  
	description[1]="CORRELATI CHE LEPI"; 
	description[2]="CARATTERISTICHE GLI"; 
	description[3]="MONDO E ALTRE DEL"; 
	description[4]="INTRINSECHE PIANTE"; 

var descriptionDown=new Array(4);
	descriptionDown[0]="SUNT CULPA OFFIC A DESERUNT";
	descriptionDown[1]="SPONTANEAMENTE GLI PIANTE E";
	descriptionDown[2]="SECONDA DEL PARICOLARE ANCE";
	descriptionDown[3]="POTREBBE ESSERE DISTINTO DI";
	descriptionDown[4]="INNATURALE SINTETICI UMANA";
	

var testimonialText=new Array(2);
	testimonialText[0]="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud<br/>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit <br/>in voluptate velit esse cillum dolore eu pariatur.";
	testimonialText[1]="Planetarum trends in longum tempus est mensura caeli tempus. Qui de caelo nota sunt, ex variis causis,<br/>comprehendo oceanus excursus, summa albedo, CONSERVATORIUM gasorum, in qua vivunt, et lumen<br/> variationes et mutationes ad planetae orbitam. Secundum historiae monumentis";
	testimonialText[2]="Naturae totius universi corporei, est diversa ratio originalis gestat; coepit cum quibusdam core of<br/>ut firmiter, lucratus est verbum cuiuscumque semper. Hic modus loquendi in ultimis ita per saeculorum<br/> adventum moder-in tellure, notum est quacdam vehementissi";



var testimonialDesigner=new Array(2);
	testimonialDesigner[0]="John Doe - UX Designer";
	testimonialDesigner[1]="Deiven Jolie - Programmer";
	testimonialDesigner[2]="Adrianna Lima - Model";	
	
	




var myImgSrc = "images/";

var myImgEnd = ".png";
var loLimit=0;
var upLimit=4;
var i = 0;

var x=2;
var z=2;

function loadImg(){
	document.getElementById('imgSrc').src= myImgSrc + myImg[i] + myImgEnd;

}


function prev(){
  if(i<1){
    var l = upLimit;
	i=upLimit;
  } else {
	 	i--;
    var l = i;
  }
  
  document.getElementById('imgSrc').src = myImgSrc + myImg[l] + myImgEnd;
  document.getElementById('textTop').innerHTML=description[l];
  document.getElementById('textDown').innerHTML=descriptionDown[l];
}

function next(){
  if(i>3){
    var l = loLimit;
	i=loLimit;
  } else {
	  i++;
    var l = i;
  }
  document.getElementById('imgSrc').src = myImgSrc + myImg[l] + myImgEnd;
  document.getElementById('textTop').innerHTML=description[l];
  //textAnimate(l);
  document.getElementById('textDown').innerHTML=descriptionDown[l];
}


function circle(a){
		
		if(a==1)
		{	
			document.getElementById('testimon').style.background='#ffffff';
			document.getElementById('circle1').src='images/testActive.png';
			document.getElementById('circle2').src='images/testInactive.png';
			document.getElementById('circle3').src='images/testInactive.png';
		}
		if(a==2)
		{	
			document.getElementById('testimon').style.background='#f6f4f4';
			document.getElementById('circle2').src='images/testActive.png';
			document.getElementById('circle3').src='images/testInactive.png';
			document.getElementById('circle1').src='images/testInactive.png';
		}
		if(a==3)
		{	
			document.getElementById('testimon').style.background='#f3f1f1';
			document.getElementById('circle3').src='images/testActive.png';
			document.getElementById('circle1').src='images/testInactive.png';
			document.getElementById('circle2').src='images/testInactive.png';
		}
	
	
}


/*function textAnimate(l){
	for(var rem=0;rem<description.length;rem++)
	{
		var text1=document.getElementById('testText');
		text1.innerHTML+=description[l][rem];	
	}
}*/




function testimony(){
	if(z>3)
	{
		z=1;
	}
	
	document.getElementById('testText').innerHTML=testimonialText[z-1];
	
	document.getElementById('testFoot').innerHTML=testimonialDesigner[z-1];
	
	circle(z);
	
	z++;

}

function glimpse(){
	document.getElementById('tab1').style.background='#eb2b36';
	document.getElementById('tab2').style.background='#3d8896';
	
	document.getElementById('map-canvas1').style.display='none';
	document.getElementById('searchDiv').style.display='none';
	document.getElementById('map-canvas').style.display='block';
	document.getElementById('pano').style.display='block';
}

function direction(){
	document.getElementById('tab1').style.background='#3d8896';
	document.getElementById('tab2').style.background='#eb2b36';
	
	document.getElementById('map-canvas').style.display='none';
	document.getElementById('pano').style.display='none';
	document.getElementById('map-canvas1').style.display='block';
	document.getElementById('searchDiv').style.display='block';
}



setInterval(next,3000);
setInterval(testimony,3000);

setTimeout(glimpse,1000);
//var gclear=setInterval(glimpse,9000);

//clearInterval(gclear);

document.getElementById('tab1').style.background='#eb2b36';
/*document.getElementById('map-canvas1').style.display='none';
document.getElementById('searchDiv').style.display='none';*/
var button = document.getElementById('button');
var container = document.getElementById('container');
var rocznik;

button.addEventListener("click",
                        losuj);

function losuj(){
    rocznik = Math.floor(Math.random()*6+1997);
    container.textContent = rocznik;
}

function check(){
    var price = document.getElementById("pole").value;
    var market_price;
        if (rocznik == 1997) market_price=2524;
        else if (rocznik == 1998) market_price = 2269;
        else if (rocznik == 1999) market_price = 2450;
        else if (rocznik == 2000) market_price = 2371;
        else if (rocznik == 2001) market_price = 2580;
        else if (rocznik == 2002) market_price = 3570;
        else if (rocznik == 2003) market_price = 3308;
    var deviation = Math.random()*100-50;
    var suggest = market_price+deviation;
        if (price<(suggest-50)) document.getElementById("answer").innerHTML="Proponowana cena jest za niska";
        else if (price>(suggest+50)) document.getElementById("answer").innerHTML="Proponowana cena jest za wysoka";
        else document.getElementById("answer").innerHTML="Proponowana cena jest OK";
}

var number = 1;
var timer1 = 0;
var timer2 = 0;

function setSlide(slideNumber){
    clearTimeout(timer1);
    clearTimeout(timer2);
    number = slideNumber;
    
    hide();
    setTimeout("changeSlide()",500);
}

function hide(){
    $("#slider").fadeOut(500);
}

function changeSlide(){
    
    if (number>5) number = 1;
    if (number==1) document.getElementById("slider").innerHTML="<img class=\"slide\" src=\"images/slides/slide1.jpg\"/>";
    if (number==2) document.getElementById("slider").innerHTML="<img class=\"slide\" src=\"images/slides/slide2.jpg\"/>";
    if (number==3) document.getElementById("slider").innerHTML="<img class=\"slide\" src=\"images/slides/slide3.jpg\"/>";
    if (number==4) document.getElementById("slider").innerHTML="<img class=\"slide\" src=\"images/slides/slide4.jpg\"/>";
    if (number==5) document.getElementById("slider").innerHTML="<img class=\"slide\" src=\"images/slides/slide5.jpg\"/>";
    number = Math.floor(Math.random()*5)+1;
    
    $("#slider").fadeIn(500);
    timer1 = setTimeout("hide()",4500);
    timer2 = setTimeout("changeSlide()",5000);
}


window.onload = start;

var flag = 0;
var porownanie;
var first;
var second;
var error = false;
var score = 100;
var counter = 0;

var blank = new Array(20);
for (i=0; i<20; i++){
    blank[i] = "images/memory/pytajnik.jpg";
}

var images = new Array(20);
var revers = new Array(20);
var kit;
var kit_nr = '1';

function setKit(kit){
    this.kit = kit;
    if (kit == '1') kit_nr = '1';
    if (kit == '2') kit_nr = '2';
    if (kit == '3') kit_nr = '3';
    document.getElementById("setButton1").style.background = "darkorange";
    document.getElementById("setButton2").style.background = "darkorange";
    document.getElementById("setButton3").style.background = "darkorange";
    document.getElementById("setButton"+kit_nr).style.background = "green";
    start();
}

function start(){
    
    score = 100;
    counter = 0;
    for (i=1; i<11; i++){
            images[i*2-2] = "images/memory/icon"+i+"_"+kit_nr+".png";
            images[i*2-1] = "images/memory/icon"+i+"_"+kit_nr+".png";
    }
    
    for (i=0; i<20; i++){
    var rnd = Math.floor(Math.random()*19);
    while (images[rnd]=="pz"){
            rnd++;
            if (rnd > 19) rnd = 0;
        }
    revers[i] = images[rnd];
    images[rnd] = "pz";        
}
    
    var divInside = "";
    
    for (i=0; i<20; i++){
        var element = "obraz" + i;
        divInside = divInside + '<div class="box" onclick="check('+i+');" id="'+element+'"><img src="' + blank[i] + '"/></div>';
        if ((i+1)%5 == 0) divInside = divInside + '<div style="clear:both"></div>';
    }
    
    document.getElementById("square").innerHTML = divInside;
}

function check(nr){
    if (error == true){
            document.getElementById("obraz"+first).innerHTML = '<img src="' + blank[first] + '"/>';
            document.getElementById("obraz"+second).innerHTML = '<img src="' + blank[second] + '"/>';
        error = false;
    }
    if (flag == 0){
    document.getElementById("obraz"+nr).innerHTML = '<img src="'+revers[nr]+'"/>';
    document.getElementById("obraz"+nr).style.border = "2px solid blue";
    document.getElementById("obraz"+nr).setAttribute("onclick",";");
    document.getElementById("score").innerHTML = "Twój wynik: "+score;
        porownanie = revers[nr];
        first = nr;
        flag++;
    }
    else if (flag == 1){
        document.getElementById("obraz"+nr).innerHTML = '<img src="'+revers[nr]+'"/>';
        flag = 0;
        second = nr;
        if (porownanie == revers[nr]){
            document.getElementById("obraz"+nr).style.border = "2px solid orange";
            document.getElementById("obraz"+nr).style.cursor = "default";
            document.getElementById("obraz"+nr).setAttribute("onclick",";");
            document.getElementById("obraz"+first).style.border = "2px solid orange";
            document.getElementById("obraz"+first).style.cursor = "default";
            document.getElementById("obraz"+first).setAttribute("onclick",";");
            document.getElementById("score").innerHTML = "Twój wynik: "+score;
            counter++;
            if (counter == 10) document.getElementById("score").innerHTML = "Wygrałeś! Uzyskałeś świetny wynik: "+score;
        }
        else{
            error = true;
            score = score -1;
            document.getElementById("obraz"+first).style.border = "none";
            document.getElementById("obraz"+first).setAttribute("onclick","check("+first+");");
            document.getElementById("score").innerHTML = "Twój wynik: "+score;
        }
    }
    
}
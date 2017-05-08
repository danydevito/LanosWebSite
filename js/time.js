window.onload = refreshDate;

function refreshDate(){
    var today = new Date();

    var day = today.getDate();
        if (day<10)day = "0"+day;
    var month = today.getMonth()+1;
        if (month<10)month = "0"+month;
    var year = today.getFullYear();
    var second = today.getSeconds();
        if (second<10)second = "0"+second;
    var minute = today.getMinutes();
        if (minute<10)minute = "0"+minute;
    var hour = today.getHours();
        if (hour<10)hour = "0"+hour;


    document.getElementById("timer").innerHTML = 
        day+"/"+month+"/"+year+" | "+hour+":"+minute+":"+second;
    
    setTimeout("refreshDate()",1000);   
}
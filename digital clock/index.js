function clock() {
    var monthNames = ["january", "february", "march", "april", "may", "june", "julay", "augst", "september", "october", "november", "december"];
    var dayName = ["sunday", "monday", "tuesday", "wednesday", "tuesday", "friday", "saturday"];

    var today = new Date();
    document.getElementById('date').innerHTML = (dayName[today.getDay()] + " " + today.getDate() + '' + monthNames[today.getMonth()] + '' + today.getFullYear());

    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var dayName = h < 11 ? 'AM' : 'PM'

    h=h<10? '0' +h:h;
    m=h<10? '0' +m:m;
    s=h<10? '0' +s:s;

    document.getElementById("hours").innerHTML=h;
    document.getElementById("min").innerHTML=m;
    document.getElementById("sec").innerHTML=s;

}
var inter = setInterval(clock, 400)


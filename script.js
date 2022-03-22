function refresh(){
    var t = 1000; // rafraîchissement en millisecondes
    setTimeout('showDate()',t);
}

function showDate() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    var time = h + ':' + m;
    document.getElementById('horloge').innerHTML = time;
    refresh();
 } 
 
 fetch("https://www.boredapi.com/api/activity")
.then(reponse =>reponse.json())
.then(reponse2 => console.table(reponse2))


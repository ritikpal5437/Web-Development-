let clock=document.getElementById("time");
function updateClock(){
    let date=new Date();    
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    clock.innerHTML=`${hours}:${minutes}:${seconds}`;
}
updateClock();
setInterval(updateClock, 1000);

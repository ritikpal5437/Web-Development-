// let clock=document.getElementById("time");
// let dateelement=document.getElementById("date");
// function update() {
//     const now = new date();
//     let day=now.getDate();
//     let  month=now.getMonth() + 1;
//     let  year=now.getFullYear();
//     day = String(day).padStart(2, '0');
//     month = String(month).padStart(2, '0');
//     date.innerHTML=`${day}/${month}/${year}`;
    
// }
// update();

// function updateClock(){
//     let date=new Date();    
//     let hours=date.getHours();
//     let minutes=date.getMinutes();
//     let seconds=date.getSeconds();
   
//     clock.innerHTML=`${hours}:${minutes}:${seconds}`;
// }
// updateClock();
// setInterval(updateClock, 1000);

let clock = document.getElementById("time");
let dateElement = document.getElementById("date"); 

function updateDate() { 
    const now = new Date(); 
    
    let day = now.getDate();  
    let month = now.getMonth() + 1; // Month 0-index hota hai isliye +1
    let year = now.getFullYear();
    day = String(day).padStart(2, '0');
    month = String(month).padStart(2, '0');
    
    dateElement.innerHTML = `${day}/${month}/${year}`;
}
updateDate();

function updateClock() {
    let now = new Date();    
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
   
    clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
updateClock();
setInterval(updateClock, 1000);
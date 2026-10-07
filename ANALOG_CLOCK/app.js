let hr = document.getElementById('hour');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

function displayTime(){
    let date = new Date();

    //getting hours min and seconds fron date
   let  hh = date.getHours();
   let  mm = date.getMinutes();
   let  ss = date.getSeconds();

   //30 min difference 

   mm = mm - 30;
   if (mm < 0) {
    mm = mm + 60;
    hh = hh - 1;
    
   }

   if (hh < 0) {
    hh = 23;
    
   }

   let hRotation = 30 *hh + mm/2;
   let mRotation = 6*mm;
   let sRotation = 6*ss;


   hr.style.transform = `rotate(${hRotation}deg)`;
   min.style.transform = `rotate(${mRotation}deg)`;
   sec.style.transform = `rotate(${sRotation}deg)`;



}

setInterval(displayTime, 1000)
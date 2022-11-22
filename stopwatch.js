let hrs=0,min=0,sec=0,stopped=true;

function calculate(){
    if(sec<10)
    sec="0"+sec
    if(min<10)
    min="0"+min
    if(hrs<10)
    hrs="0"+hrs
document.getElementById('hrs').innerHTML=hrs
document.getElementById("min").innerHTML=min
document.getElementById('sec').innerHTML=sec

sec=parseInt(sec)
min=parseInt(min)
hrs=parseInt(hrs)
if (stopped)
return;
 sec+=1;
 if(sec==60)
 {
    min+=1;
    sec=0;
 }
 if(min==60)
 {
    hrs+=1
    min=0;
 }

setTimeout(calculate,1000)
}

function start(){
    stopped=false;
    calculate()
}

function stop(){
    stopped=true;
    calculate()
}

function reset(){
    hrs=0;
    min=0;
    sec=0
    stopped=true
    calculate()
}
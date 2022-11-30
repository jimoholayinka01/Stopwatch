let timerx;
function goo(){
    let min = document.getElementById('minutes').value;
    let sec = document.getElementById('secs').value;
    let audio = new Audio('ding-ding-sound-effect.mp3')
    timerx = setInterval(function(){
    sec--
    minute.innerHTML = String(min).padStart(2,0)
    second.innerHTML = String(sec).padStart(2,0)
        if(min==0 && sec==0){
        clearInterval(timerx)
        document.getElementById('but').disabled= false;
        audio.play()
    }
        if (sec==0){
        sec = 60;
        min--
    }
},1000)
    if(sec<60){
        document.getElementById('but').disabled= true;
    }
    if(sec>60){
        alert('Seconds cannot be greater than 60')
        min = 0
        sec = 0
        sec ++     
    }
}
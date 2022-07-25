const countdown =() =>{
    const countDate = new Date('July 30, 2022 10:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    //DIAS
    if(textDay <= 9){    
        document.querySelector('.day').innerText = 0 + textDay.toString();
    } else {
        document.querySelector('.day').innerText = textDay;
    }
    //HORAS
    if(textHour <= 9){
        document.querySelector('.hour').innerText = 0 + textHour.toString();
    } else {
        document.querySelector('.hour').innerText = textHour;
    }
    //MINUTOS
    if(textMinute <= 9){
        document.querySelector('.minute').innerText = 0 + textMinute.toString();
    } else {
        document.querySelector('.minute').innerText = textMinute;
    }
    //SEGUNDOS
    if(textSecond <= 9){
        document.querySelector('.second').innerText = 0 + textSecond.toString();
    } else {
        document.querySelector('.second').innerText = textSecond;
    }
    
    //cuando llega a 0
    //if(gap < 10000){}
};

countdown();
setInterval(countdown, 1000);

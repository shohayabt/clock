function clock(){
    let date = new Date();
    let hours = date.getHours();
    let minuts = date.getMinutes(); 
        minuts = minuts < 10 ? minuts = '0' + minuts : minuts; 
    let seconds = date.getSeconds();
        seconds = seconds < 10 ? seconds = '0' + seconds : seconds; 
        if(hours > 12){
            hours = hours - 12
            hours = hours < 10 ? hours = '0' + hours : hours;
            document.querySelector('small').innerText = 'pm';
        }else{
            document.querySelector('small').innerText = 'am';
        }
    let newTime = `${hours}:${minuts}:${seconds}`
    document.getElementById('time').innerText = newTime;

    setInterval(clock,1000)
}
clock();

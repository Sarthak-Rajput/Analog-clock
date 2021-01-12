setInterval(() => {
  
    d = new Date();
    h = d.getHours();
    m = d.getMinutes();
    s = d.getSeconds();
    
    htime = 30*h + m/2;
    mtime = 6*m;
    stime = 6*s;

    hour.style.transform = `rotate(${htime}deg)`;
    minutes.style.transform = `rotate(${mtime}deg)`;
    seconds.style.transform = `rotate(${stime}deg)`;

}, 1000);
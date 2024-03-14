let hr = document.querySelector('#hrs');
let mn = document.querySelector('#min');
let sc = document.querySelector('#sec');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes()*6;
    let ss=day.getSeconds()*6;

    hr.style.Transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.Transform = `rotateZ(${mm}deg)`;
    sc.style.Transform=`rotateZ(${ss}deg)`;
    
})
let aud;
let pres;

window.addEventListener("keydown",function(eve){
    const press = document.querySelector(`.${eve.key}`);
    
    if(!press)return;
    if(pres){
        if(pres.classList.contains('playing'))
        pres.classList.remove('playing');
    }
    pres = press;
    press.classList.add('playing');
    console.log(press);
});


window.addEventListener('keydown', function(eve){
    const au = document.querySelector(`audio[code=${eve.code}]`);
    if(!au)return;
    if(aud)
    aud.pause();
    aud = au;
    au.currentTime = 0;
    au.play();
});
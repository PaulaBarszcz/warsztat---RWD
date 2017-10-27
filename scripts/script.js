document.addEventListener("DOMContentLoaded", function(){

var mobile = window.matchMedia("screen and (max-width: 500px)");
var trigger = document.getElementById('burger');
var nav = document.querySelector('nav');

trigger.addEventListener('click',function(){
    var display = nav.style.display;
    if(display === 'block'){
        nav.style.display = 'none';
        nav.classList.remove("active");

    } else {
        nav.style.display = 'block';
        nav.classList.add("active");
    }
});

mobile.addListener( function(mob){
    if (!mob.matches) {
        nav.removeAttribute('style');
        nav.classList.remove("active");
    }
});

}); //end of DOMContentLoaded
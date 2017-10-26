document.addEventListener("DOMContentLoaded", function(){

var mobile = window.matchMedia("screen and (max-width: 500px)");
var trigger = document.getElementById('burger');
var nav = document.querySelector('nav');
var allis = document.querySelectorAll("li");

trigger.addEventListener('click',function(){
    var display = nav.style.display;
    if(display === 'block'){
        nav.style.display = 'none';
        nav.classList.remove("active");
        nav.firstElementChild.classList.remove("active_ul");
        for (var i=0; i<allis.length; i++) {
            allis[i].classList.remove("active_li");
        }
    } else {
        nav.style.display = 'block';
        nav.classList.add("active");
        nav.firstElementChild.classList.add("active_ul");
        for (var i=0; i<allis.length; i++) {
            allis[i].classList.add("active_li");
        }  
    }
});

mobile.addListener( function(mob){
    if (!mob.matches) {
        nav.removeAttribute('style');
        nav.firstElementChild.classList.remove("active_ul");
        for (var i=0; i<allis.length; i++) {
            allis[i].classList.remove("active_li");
        }
    }
});

}); //end of DOMContentLoaded
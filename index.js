window.addEventListener('scroll',function(){
    var menu=document.querySelector('.menu');
    if(window.scrollY>50){
        menu.classList.add('scrolled');
    }else{
        menu.classList.remove('scrolled');
    }
});
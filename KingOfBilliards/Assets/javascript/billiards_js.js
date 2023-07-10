window.onload = function () {
    // MOBILE NAV-BAR
    const menu_btn = document.querySelector ('.hamburger');
    const mobile_menu = document.querySelector ('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });

    // NAV BAR COLOR ON SCROLL
    const headerEl = document.querySelector('.header');

    window.addEventListener('scroll', () => {
        if(window.scrollY > 100){
            headerEl.classList.add('header-scrolled');
        } else if (window.scrollY <= 100){
            headerEl.classList .remove('header-scrolled');
        }
    });
};

function toggle(){
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');

    var popup = document.getElementById('popup-1');
    popup.classList.toggle('active');
}

function toggle1(){
    var blur = document.getElementById('blur2');
    blur.classList.toggle('active');
    
    var popup = document.getElementById('popup-2');
    popup.classList.toggle('active');
}

function toggle2(){
    var blur = document.getElementById('blur3');
    blur.classList.toggle('active');
    
    var popup = document.getElementById('popup-3');
    popup.classList.toggle('active');
}





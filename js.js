(function(){
    const nav_header = document.querySelector(".header_nav")
    const line = document.querySelector(".line")
    const first_sec = document.querySelector(".first-section")
    // const burgerScroll = document.querySelector(".header_burger")
    window.onscroll=()=>{
        if (window.pageYOffset>50){
            nav_header.classList.add('header-nav-active')
            line.classList.add('header-nav-line')
            first_sec.classList.add('first-section-active')
            // burgerScroll.classList.add('header_burger_scroll')
        }
        else{
            nav_header.classList.remove('header-nav-active')
            line.classList.remove('header-nav-line') 
            // burgerScroll.classList.remove('header_burger_scroll')
        }
    }
}());

// Burger Handler
(function(){
    const burgerItem = document.querySelector(".header_burger")
    const closeItem = document.querySelector(".header-nav-close")
    const navMenu =  document.querySelector("nav")
    const navLink =  document.querySelectorAll(".header-left-link")
    navLink.forEach(el => {
        el.addEventListener('click',()=>{
            navMenu.classList.remove('right_menu')
        })
    });
    console.log(navLink)
    burgerItem.addEventListener('click',()=>{
        navMenu.classList.add('right_menu')
    })
    closeItem.addEventListener('click',()=>{
        navMenu.classList.remove('right_menu')
    })

}())
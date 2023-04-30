(function(){
    const nav_header = document.querySelector(".header_nav")
    const line = document.querySelector(".line")
    const first_sec = document.querySelector(".first-section")
    window.onscroll=()=>{
        if (window.pageYOffset>50){
            nav_header.classList.add('header-nav-active')
            line.classList.add('header-nav-line')
            first_sec.classList.add('first-section-active')
        }
        else{
            nav_header.classList.remove('header-nav-active')
            line.classList.remove('header-nav-line') 
            first_sec.classList.remove('first-section-active') 
        }
    }
}())
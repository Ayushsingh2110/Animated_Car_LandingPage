const Menu = document.getElementById("nav-menu");
const Hamburger = document.getElementById("Ham-burger");
const NavLinks = document.querySelectorAll(".nav_link");


/*===== Toggle Menu =====*/
Hamburger.addEventListener("click", () => {
    Hamburger.classList.toggle('active');
    Menu.classList.toggle('active');
})

NavLinks.forEach((nav_link) => {
    nav_link.addEventListener("click", () => {
        Menu.classList.remove("active");
        Hamburger.classList.remove("active");
    })
})

/*============== SCROLL SECTION ACTIVE LINK ==============*/
const sections = document.querySelectorAll('section[id]');
function scrollActive(){
    sections.forEach(section => {
        const PageY = window.pageYOffset + 73
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute("id");
        if(PageY > sectionTop && PageY <= sectionTop+sectionHeight){
            document.querySelector('#nav-menu a[href="#'+sectionId+'"]').classList.add("active-link")
        }else{
            document.querySelector('#nav-menu a[href="#'+sectionId+'"]').classList.remove("active-link")
        }
    })
}

window.addEventListener("scroll", scrollActive)

/*============== SCROLL UP ==============*/
const scrollUp = document.getElementById('scrollUp');
function showScrollUp(){
    if(this.scrollY >= 350){
        scrollUp.classList.add("show-scroll");
    }else{
        scrollUp.classList.remove("show-scroll");
    }
}

window.addEventListener("scroll", showScrollUp)
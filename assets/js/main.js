const Menu = document.getElementById("nav-menu");
const Hamburger = document.getElementById("Ham-burger");
const NavLinks = document.querySelectorAll(".nav_link");

/*======== NAVBAR SCROLL EFFECT ======== */
const navbar = document.getElementById("header");
function navbarScroll(){
    if(this.pageYOffset > 50){
        navbar.classList.add("scrolled")
    }else{
        navbar.classList.remove("scrolled")
    }
}
window.addEventListener("scroll", navbarScroll)

/*======== Toggle Menu ========*/
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

/*============= SCROLL REVEAL ANIMATION ==============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "50px",
    delay: 200,
    duration: 2500,
    reset: false

})

sr.reveal(".home_title, .popular_container, .featured_card")
sr.reveal(".home--car_name")
sr.reveal(".home--car_category", {delay: 300})
sr.reveal(".home--car_img", {delay: 400})
sr.reveal(".car_data div", {delay: 400, interval: 100, origin: "bottom"})

sr.reveal(".about_img--file", {origin: "left"})
sr.reveal(".about_data, .featured--filter_icons", {origin: "right", interval: 100})

sr.reveal(".feature_group--img", {origin: "bottom"})
sr.reveal(".feature--card_1",  {origin: "left", delay: 300})
sr.reveal(".feature--card_2",  {origin: "right", delay: 400})
sr.reveal(".feature--card_3",  {origin: "left", delay: 300})

sr.reveal(".offer_content", {origin: "left"})
sr.reveal(".offer_img", {origin: "right"})

sr.reveal(".logo_img", {interval: 100})
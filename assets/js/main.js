const Menu = document.getElementById("nav-menu");
const Hamburger = document.getElementById("Ham-burger");
const NavLinks = document.querySelectorAll(".nav_link");

function linkAction(){
    Menu.classList.remove("active");
    Hamburger.classList.remove("active");
}
/*===== Toggle Menu =====*/
Hamburger.addEventListener("click", () => {
    Hamburger.classList.toggle('active');
    Menu.classList.toggle('active');
})

NavLinks.forEach((nav_link) => {
    nav_link.addEventListener("click", () => {
        linkAction();
        //checkActiveNav(nav_link)
    })
})

function checkActiveNav(nav){
    NavLinks.forEach((navLink) => {
        if(navLink.classList.contains("active")){
            navLink.classList.remove("active")
        }
    })
    for(attr of nav.attributes){
        if(attr.name === "href" && attr.value === window.location.hash){
            nav.classList.add("active");
        }
    }
}
const navElement = document.querySelector(".navbar");
const navLinkEls = document.querySelectorAll(".nav-link");
const sectionEls = document.querySelectorAll(".section");
const brandName = document.querySelector("brand-name");

let currentSection = 'home';
window.addEventListener('scroll', () => {
    sectionEls.forEach(sectionEl => {
        if (window.scrollY >= sectionEl.offsetTop) {
            currentSection = sectionEl.id;
            console.log("Current section:", currentSection); // For debugging
        }
    })
    // navLinkEls.forEach(navLinkEl => {
    //     if (navLinkEl.href.includes(currentSection)) {
    //         console.log("my name");
    //         document.querySelector('.active').classList.remove('active');
    //         navLinkEl.classList.add('active');
    //     }
    // })
});

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        navElement.classList.add('navbar-scrolled');
        //brandName.classList.add('brand-name-scrolled');
        //loginEl.classList.add('login-button-scrolled', 'normal-btn-scrolled');
        
    }
    else if (window.scrollY < 100) {
        navElement.classList.remove('navbar-scrolled');
        //brandName.classList.remove('brand-name-scrolled');
        //loginEl.classList.remove('login-button-scrolled', 'normal-btn-scrolled');
    }
});
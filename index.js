const navElement = document.querySelector(".navbar");
const navLinkEls = document.getElementById(".nav-link");
const sectionEls = document.querySelectorAll(".section");
const brandName = document.querySelector(".brand-name");
const loginBtn = document.querySelector(".login-button");
const navBtns = document.querySelectorAll(".nav-btn")

let currentSection = 'home';
// window.addEventListener('scroll', () => {
//     sectionEls.forEach(sectionEl => {
//         if (window.scrollY >= sectionEl.offsetTop) {
//             currentSection = sectionEl.id;
//             console.log("Current section:", currentSection); // For debugging
//         }
//     })
//     // navLinkEls.forEach(navLinkEl => {
//     //     if (navLinkEl.href.includes(currentSection)) {
//     //         console.log("my name");
//     //         document.querySelector('.active').classList.remove('active');
//     //         navLinkEl.classList.add('active');
//     //     }
//     // })
// });

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        navElement.classList.add('navbar-scrolled');
        brandName.classList.add('brand-name-scrolled');
        loginBtn.classList.add('login-button-scrolled');
        navBtns.forEach(navBtn => {
            navBtn.classList.add('nav-btn-scrolled');
        })
    }
    else if (window.scrollY < 100) {
        navElement.classList.remove('navbar-scrolled');
        brandName.classList.remove('brand-name-scrolled');        
        loginBtn.classList.remove('login-button-scrolled');
        navBtns.forEach(navBtn => {
            navBtn.classList.remove('nav-btn-scrolled');
        })
        //navBtn.classList.remove('nav-btn-scrolled');
    }
});
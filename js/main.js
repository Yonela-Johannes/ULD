// // ========================= SHOW MENU =================
    const navMenu = document.getElementById('nav-menu')
    const navToggle = document.getElementById('nav-toggle')
    const navClose = document.getElementById('nav-close')

    const navLink = document.querySelectorAll('.nav_link')

    if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
            console.log("You have clicked me")
        })
    }
    if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
    }

    function linkAction(){
        navMenu.classList.remove('show-menu')
    }
navLink.forEach(n => n.addEventListener('click', linkAction))
// // ======================== REMOVE MENU MOBILE
// const navLink = document.querySelector('.nav-menu');

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
//     // When each nav is clicked, click removes the show-menu class
//     navMenu.classList.remove('show-menu')
// }
// // navLink.forEach(n => n.addEventListener('click', linkAction))

// // ======================== SCROLL SECTIONS 
// const sections = document.querySelectorAll('section[id')

// window.addEventListener('scroll', scrollActive)

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     section.forEach(current => {
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scollY <= sectionTop + sectionHeight){
//             document.querySelector('nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')   
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)
// // ======================== CHANGE BACKGROUND HEADER =================
// function scrollHeader(){
//     const nav = document.getElementById('header')
//     // When the scroll is greater than 200 viewport height, add the scroll-headder class
//     if(this.scrollY > 200) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')

// }
// window.addEventListener('scroll', scrollHeader)

// // ======================== SHOW SCROLLTOP =================
// function scrollTop(){
//     const scrollTop = document.getElementById('scrolltop')
//     // When the scroll is greater than 560 viewport height, add the scroll-headder class
//     if(this.scrollY > 560) scrollTop.classList.add('scroll-top'); else sccrollTop.classList.remove('scroll-top')

// }
// window.addEventListener('scroll', scrollTop)

// // ======================== REMOVE MENU MOBILE

// // ------------SLIDER------------------//

// const myslide = document.querySelectorAll('.myslider')

//     let counter = 1;
// slidefun(counter);

// let timer = setInterval(autoslide, 3000);

// function autoslide(n){
//     counter += 1;
//     slidefun(counter);
// }
// function resetTimer(){
//     // clearInterval(timer);
//     // timer = setInterval(autoslide, 800);
// }

// function slidefun(n){
//     let i;
//     for(i = 0; i < myslide.length; i++){
//         myslide[i].style.display = "none";
//     }
//     if(n > myslide.length){
//         counter = 1;
//     }
//     if(n < 1){
//         counter = myslide.length;
//     }
//     myslide[counter - 1].style.display = "block";
// }


// ======= Portfolio swiper

// let swiper = new Swiper('.testimonial_container', {
//     loop: true,
//     grabCursor: true,
//     spaceBetween: 48,
//     pagination: {
//         el: 'swiper-pagination',
//         clickable: true,
//         dynamicBullets: true,
//     },
//     breakpoints: {
//         568:{
//              slidesPerView: 2,
//         }
//     }
// });
// ======= home swiper

let homeSwiper = new Swiper('.home-swiper', {
    effect: 'coverflow',
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 10,
    coverflowEffect: {
        stretch: 0,
        depth: 100,
        slideShadow: true,
  
    },
    loop: true,
    autoplay:  {
        delay: 2000,
        disableOnInteraction: false,
    },

});
// ============= Services Swiper
let swiper = new Swiper(".mySwiper", {
    effect: 'coverflow',
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 25,
    coverflowEffect: {
        stretch: 0,
        depth: 200,
        slideShadow: true,
        modifer: 1,
    },
    loop: true,
    autoplay:  {
        delay: 2000,
        disableOnInteraction: false,
    },
  });

// ============= Testimonials Swiper

let testimonial = new Swiper(".testimonial_swiper", {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    autoplay:  {
        delay: 4000,
        disableOnInteraction: false,
    },
  });


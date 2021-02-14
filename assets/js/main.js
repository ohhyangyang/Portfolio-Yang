/*===== MENU SHOW =====*/ 
// const showMenu = (toggleId, navId,burgerId) =>{
//     const toggle = document.getElementById(toggleId),
//     nav = document.getElementById(navId)
//     burger = document.querySelector(burgerId);

  
//         toggle.addEventListener('click', ()=>{
//             nav.classList.toggle('show')
//             burger.classList.toggle('open')
//         })
    
// }
// showMenu('nav-toggle','nav-menu','.menu-btn__burger')

/*===== REMOVE MENU MOBILE =====*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
//     navMenu.classList.remove('show')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/*SCROLL HOME*/
sr.reveal('.home__title', {})
sr.reveal('.home__scroll', {delay: 200})
// sr.reveal('.home__img', {origin:'right'})

/*SCROLL ABOUT*/
sr.reveal('.about__img', {delay: 500})
sr.reveal('.about__subtitle', {delay: 300})
sr.reveal('.about__profession', {delay: 400})
sr.reveal('.about__text', {delay: 500})
sr.reveal('.about__social-icon', {delay: 600, interval: 200})

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {})
sr.reveal('.skills__name', {distance: '20px', delay: 50, interval: 100})
sr.reveal('.skills__img', {delay: 400})

/*SCROLL PORTFOLIO*/
// sr.reveal('.portfolio__img', {})

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {})
sr.reveal('.contact__text', {interval: 200})
sr.reveal('.contact__input', {delay: 400})
sr.reveal('.contact__button', {delay: 600})

/*===== CURSOR ANIMATION =====*/

/*CURSOR*/
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 40)+"px; left: "+(e.pageX - 40)+"px;")
})

document.addEventListener('wheel', e => {

    cursor.setAttribute("style", "top: "+(e.pageY - 30)+"px; left: "+(e.pageX - 30)+"px; transition-duration: 0ms;")
})


/*===== CURSOR EXPANSION =====*/

/*OVER ORIJECTS*/
const works=document.querySelectorAll('.portfolio__link-name');

function cursorExpand(obj,cursor,str=''){
    obj.addEventListener('mouseover',()=>{
        cursor.classList.add('expand')

        cursor.innerHTML=str
        cursor.setAttribute("style", "color:black")
    })

    obj.addEventListener('mouseleave',()=>{
        cursor.classList.remove('expand')
        cursor.innerHTML=''
    })
}

works.forEach(work=>{
    
    cursorExpand(work,cursor,'OPEN')
})

/*OVER NAVS*/
const navLogo=document.querySelector('.nav__logo');
const navWork=document.querySelector('.nav__works');

cursorExpand(navLogo,cursor);
cursorExpand(navWork,cursor);



Splitting()
ScrollOut({
  targets: '.word',
  scrollingElement: '.container',
})





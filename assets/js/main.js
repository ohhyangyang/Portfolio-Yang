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
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

/*SCROLL HOME*/
sr.reveal(".home__title", {});
sr.reveal(".home__scroll");
// sr.reveal('.home__img', {origin:'right'})

/*SCROLL ABOUT*/
sr.reveal(".about__img");
sr.reveal(".about__subtitle");
sr.reveal(".about__profession");
sr.reveal(".about__text");
sr.reveal(".about__social-icon");

/*SCROLL SKILLS*/
sr.reveal(".skills__subtitle");
sr.reveal(".skills__name");
sr.reveal(".skills__img");

/*SCROLL PORTFOLIO*/
// sr.reveal('.portfolio__img', {})

/*SCROLL CONTACT*/
sr.reveal(".contact__subtitle", {});
sr.reveal(".contact__text");
sr.reveal(".contact__input");
sr.reveal(".contact__button");

/*===== CURSOR ANIMATION =====*/

/*CURSOR*/
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 40) + "px; left: " + (e.pageX - 40) + "px;"
  );
});

document.addEventListener("wheel", (e) => {
  cursor.setAttribute(
    "style",
    "top: " +
      (e.pageY - 30) +
      "px; left: " +
      (e.pageX - 30) +
      "px; transition-duration: 0ms;"
  );
});

/*===== CURSOR EXPANSION =====*/

/*OVER ORIJECTS*/
const works = document.querySelectorAll(".portfolio__link-name");

function cursorExpand(obj, cursor, str = "") {
  obj.addEventListener("mouseover", () => {
    cursor.classList.add("expand");

    cursor.innerHTML = str;
    cursor.setAttribute("style", "color:black");
  });

  obj.addEventListener("mouseleave", () => {
    cursor.classList.remove("expand");
    cursor.innerHTML = "";
  });
}

works.forEach((work) => {
  cursorExpand(work, cursor, "OPEN");
});

/*HOVER NAVS*/
const navLogo = document.querySelector(".nav__logo");
const navWork = document.querySelector(".nav__works");

cursorExpand(navLogo, cursor);
cursorExpand(navWork, cursor);

/////////////////////////////////////////////////////////////////////////////////
/*HOVER PROJECT TITLES*/

const projectTitles = document.querySelectorAll(".portfolio__link-name p");
const projectTitlesArr = [...projectTitles];
projectTitlesArr.map((targetTitle) => {
  targetTitle.addEventListener("mouseover", () => {
    // console.log(event)
    projectTitlesArr.forEach((title) => {
      console.log(title);
      title.setAttribute("style", "opacity:0.4;");
      targetTitle.setAttribute("style", "opacity:1; ");
    });
  });

  // handleTitiles(projectTitlesArr,targetTitle,'mouseover',0.4,1);

  targetTitle.addEventListener("mouseleave", (event) => {
    // console.log(event)
    projectTitlesArr.forEach((title) => {
      console.log(title);
      title.setAttribute("style", "opacity:1;");
    });
  });
});

function clickProject(target, url) {
  target &&
    target.addEventListener("click", () => {
      // console.log(event)
      projectTitlesArr.forEach((title) => {
        title.setAttribute("style", "opacity:0;");
        target.setAttribute("style", "opacity:1; ");

        setTimeout(() => {
          window.location.assign(url);
        }, 1000);
      });
    });
}

clickProject(projectTitlesArr[0], "./work01.html");
clickProject(projectTitlesArr[1], "./work02.html");
clickProject(
  projectTitlesArr[2],
  "https://drive.google.com/file/d/1H7foBJZ2M-NYxX2VR_uNlm9sutbAe3sD/view?usp=sharing"
);
clickProject(projectTitlesArr[3], "https://x-book.herokuapp.com/");
clickProject(
  projectTitlesArr[4],
  "https://www.matachana.com/User-Help-Tools/HPO/1_Preparing-the-load_en.html"
);
clickProject(projectTitlesArr[5], "https://albertpastor.cat/");

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*SCROLL CHANGE BACKGROUND-COLOR*/
// sr.reveal('.first-section div');

const firstSection = document.querySelector(".first-section");


const toTop = document.querySelector(".to-top");
const workCursor = document.querySelector(".work-cursor");

window.addEventListener("scroll", changeBackground);

changeBackground();

function changeBackground() {
  const scrollY = window.pageYOffset;

  const sectionHeight = firstSection.offsetHeight - 100;

  if (scrollY > sectionHeight) {
    document.querySelector(".background").classList.add("colorTwo");
    toTop.setAttribute("style", "display:block;");

    // document.querySelector('.background').classList.remove('colorOne');
  } else {
    // document.querySelector('.background').classList.add('colorOne');
    document.querySelector(".background").classList.remove("colorTwo");
    toTop.setAttribute("style", "display:display;");
  }
}

/*TOTOP EXPANSION*/

cursorExpand(toTop, workCursor, "TOP");

/*RESOURCE EXPANSION*/
const links = document.querySelectorAll(".show-cursor");
const linksArr = [...links];
linksArr.forEach((link) => {
  // console.log(link)
  cursorExpand(link, workCursor, "OPEN");
});

/*SCROLL TO SECOND SECTION*/
// const secondSection = document.querySelector(".second-section");
// secondSection.scrollIntoView({behavior: "auto"})

// // Initial state
// let scrollPos = 0;
// // adding scroll event
// window.addEventListener("scroll", function () {
//   // detects new state and compares it with the new one
//   const scrollY = window.pageYOffset;
//   const sectionHeight = firstSection.offsetHeight - 100;
  

//   if (
//     document.body.getBoundingClientRect().top < scrollPos &&
//     scrollY < sectionHeight
//   ) {
//     // console.log("DOWN");
//     // console.log(secondSection.offsetTop)
//     // window.scrollTo(0,secondSection.offsetTop)
//     // secondSection.scrollIntoView()
//     // document.body.scrollTop = secondSection.offsetTop
//   } 

//   // saves the new position for iteration.
//   scrollPos = document.body.getBoundingClientRect().top;
// });

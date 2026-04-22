/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) => {
    const toggleBtn = document.getElementById(headerToggle),
          nav = document.getElementById(navbarId)
    
    if (toggleBtn && nav) {
        toggleBtn.addEventListener('click', () => {
            nav.classList.toggle('show-menu')
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')


/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))

const nav = document.getElementById("navbar");
const toggleBtn = document.getElementById("header-toggle");

const navLinks = document.querySelectorAll("#navbar a[href^='#']:not([href='#'])");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("show-menu");
        toggleBtn.classList.remove("bx-x"); 
    });
});


/*==================== DROPDOWN ====================*/
document.querySelectorAll(".nav__dropdown > .nav__link").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault(); 
    });
});
/*==================== REVEAL PROJECT TITTLE ====================*/
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".js-reveal");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.3 
    }
  );

  reveals.forEach(el => observer.observe(el));
});
/*==================== PROJECTS ANIMATION ====================*/

const btn = document.querySelector(".projects-more-btn");
const extra = document.querySelector(".projects-extra");

btn.addEventListener("click", () => {
  extra.classList.toggle("is-open");

  btn.textContent = extra.classList.contains("is-open")
    ? "View less projects"
    : "View more projects";
});
/*==================== TEXT ANIMATION ====================*/
function toggleText() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btn = document.getElementById("btnMore");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        dots.style.display = "none";
        btn.innerText = "less";
    } else {
        moreText.style.display = "none";
        dots.style.display = "inline";
        btn.innerText = "more...";
    }
}
function toggleText2() {
    let dots = document.getElementById("dots2");
    let moreText = document.getElementById("more2");
    let btn = document.getElementById("btnMore2");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        dots.style.display = "none";
        btn.innerText = "less";
    } else {
        moreText.style.display = "none";
        dots.style.display = "inline";
        btn.innerText = "more...";
    }
}

/*==================== CAROUSEL TOAST ====================*/

const carousel = document.getElementById("carrusel");
const toast = document.getElementById("toast-hint");
const isMobile = window.innerWidth < 768;
toast.innerText = isMobile 
    ? "Tap the image " 
    : "Click or hover the image ";

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            toast.classList.add("show");
            setTimeout(() => {
                toast.classList.remove("show");
            }, 4000);
            observer.unobserve(carousel);
        }
    });
}, {
    threshold: 0.5 
});

observer.observe(carousel);

document.querySelectorAll("#carrusel img").forEach(img => {
    img.addEventListener("click", () => {
        toast.classList.remove("show");
    });
});

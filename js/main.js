/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
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
extra.scrollIntoView({ behavior: "smooth" });

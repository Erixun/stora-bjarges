
const navlinks = Array.from(document.querySelectorAll(".nav-div a"));

navlinks.forEach( navlink => navlink.addEventListener("mouseover", () => {
  navlink.style.color = "green";
}));

window.addEventListener("click", (e) => {

  if( e.target.target == "main") {
    Array.from(document.querySelectorAll(".nav-div a.current")).forEach( navlink => navlink.classList.remove("current"));
    Array.from(document.querySelectorAll(".nav-div a[class=\'"+e.target.classList[0]+"\']")).forEach( link => link.classList.add("current"));
    }
  })



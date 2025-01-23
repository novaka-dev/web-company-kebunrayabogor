// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika Menu Di click
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar buat ngilangin nav active
const menu = document.querySelector
('#menu');

document.addEventListener('click',function(e){
    if(!menu.contains(e.target)&& !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});
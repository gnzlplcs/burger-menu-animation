const menuBtn = document.querySelector('.menu-btn');
const sidebar = document.querySelector('.side-menu');
let menuOpen = false;
let sidebarOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen && !sidebarOpen) {
    menuBtn.classList.add('open');
    sidebar.classList.add('open');
    menuOpen = true;
    sidebarOpen = true;
  } else {
    menuBtn.classList.remove('open');
    sidebar.classList.remove('open');
    menuOpen = false;
    sidebarOpen = false;
  }
});
const navbarNav = document.querySelector('.navbar-nav')

//ketika search diklik
document.querySelector('#menu').onclick = ()=> {
    navbarNav.classList.toggle('active')
}

//klik di luar sidebar di klik keluar dari nav
const menu = document.querySelector('#menu')

document.addEventListener('click', function(out){
    if(!menu.contains(out.target) && !navbarNav.contains(out.target)){
        navbarNav.classList.remove('active');
    }
})
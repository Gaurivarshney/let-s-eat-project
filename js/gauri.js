var menuIcon = document.querySelector(".menu-bar");
var sideBar = document.querySelector(".side-bar");
 
menuIcon.onclick = function(){
    sideBar.classList.toggle("small-bar");
}

window.onscroll = () =>{
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
}

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}
// document.getElementById("skill-item").addEventListener("mouseover", mouseOver);
// document.getElementById("skill-item").addEventListener("mouseout", mouseOut);

// function mouseOver() {
//   document.getElementById("skill-item").style.color = "white";
// }
// function mouseOut() {
//   document.getElementById("skill-item").style.color = "black";
// }
 var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('fondo-negro', 'shadow');
    } else {
        nav.classList.remove('fondo-negro', 'shadow');
    }
});
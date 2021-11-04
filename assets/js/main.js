/* Mobile Menu Show when scren less than 900 */
openNav = () => {
    document.getElementById('overlaymenu').style.width = "100%";
};
closeNav = () => {
    document.getElementById('overlaymenu').style.width = "0";
}

// Go to top btn automatictly when cross hero section
topBtn = document.getElementById("scrollUp")

scroll = () => {
    if (document.body.scrollTop > sticky || document.documentElement.scrollTop > sticky) {
        topBtn.style.display = "block";
    }
    else { topBtn.style.display = "none"; }
}
// Go to top when click button
topScroll = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/*  Go to  down verticaly 800px when click button*/
downScroll = () => {
    window.scrollBy(0, 800);
}

window.onscroll = () => {
    navSticky();
    scroll();
}
/* Functional Sticky Navbar */
const navbar = document.querySelector("nav");
const services = document.querySelector("#about");
const sticky = services.offsetTop;

navSticky = () => {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}
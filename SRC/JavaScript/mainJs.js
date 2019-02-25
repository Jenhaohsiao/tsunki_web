function switchLogo() {
    console.log("switchLogo");
}



function scrollToPoint(_elementID) {
    console.log("scrollTo:", _elementID);

    var elementPoint = document.getElementById(_elementID);
    console.log("elementPoint:", elementPoint);
    elementPoint.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center"
    });
}

// Sticky Navigation
window.onscroll = function() {
    setNavbarSticky()
};

var navbar = document.getElementById("main-navbar");
var sticky = navbar.offsetTop;

function setNavbarSticky() {

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// Sticky Navigation end
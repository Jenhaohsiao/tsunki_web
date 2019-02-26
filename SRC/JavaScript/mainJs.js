function switchLogo() {
    console.log("switchLogo");
}


var navbar = document.getElementById("main-navbar");
var sticky = navbar.offsetTop;


function scrollToPoint(_elementID) {

    if (_elementID !== "pageTop") {

        navbar.classList.add("sticky");
    }

    var elementPoint = document.getElementById(_elementID).offsetTop - 100;
    console.log("elementPoint:", elementPoint);
    // elementPoint.scrollIntoView({
    //     behavior: "smooth",
    //     block: "start",
    //     inline: "center"
    // });

    window.scroll({ top: elementPoint, behavior: "smooth" });
}

// Sticky Navigation
window.onscroll = function() {
    setNavbarSticky()
};



function setNavbarSticky() {

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// Sticky Navigation end
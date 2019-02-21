function switchLogo() {
    console.log("switchLogo");
}



function scrollToPoint(_elementID) {
    console.log("scrollTo:", _elementID);

    var elementPoint = document.getElementById(_elementID);
    console.log("elementPoint:", elementPoint);
    elementPoint.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" });
}

// largest scope 
let position = 0;

//next button
const nextSlide = function() {

    const slideShow = document.getElementById('slideShow'); //grab the element from the DOM

    position -= 500; //decrement the position by the width of the image
    
    if (position < -9500) { //if reached end of slide
        position = -9500; //don't go any further
    } else {
        slideShow.style.transform = `translateX(${position}px)`;    //access the style transform on the element and apply position
    }
}

//previous button
const prevSlide = function() { 

    const slideShow = document.getElementById('slideShow'); //grab the element from the DOM

    position += 500; //increment the position by the width of the image

    if (position > 0) {  //if reached beginning of slide
        position = 0; //don't go any further
    } else {
        slideShow.style.transform = `translateX(${position}px)`;    //access the style transform on the element and apply position
    }
}
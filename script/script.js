
console.log('Thank you for checking our code!:)')

// NAVBAR ANIMATION 
const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
    for(const i = 0; i < imgContent.length; i++) {
        x = e.pageX;
        y = e.pageY;
        imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
    }
};

document.addEventListener('mousemove', showImgContent);

var typed = new Typed('#element', {
    strings: ["Brewing Life's Daily Moments"],
    typeSpeed: 50,
    startDelay: 30,
});
// MAIN PAGE FLOATING TEXT ANIMATION 


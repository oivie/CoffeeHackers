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


// --------TYPE IT--------- 


// MAIN PAGE FLOATING TEXT ANIMATION 

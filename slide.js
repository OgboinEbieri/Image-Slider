let sliders = document.querySelector('.img_slide');
let imgs = ['a.png','b.jpg','c.png','d.png','e.png','f.jpg','g.jpg','h.jpg','i.jpg','j.jpg'];
let a= 0;

//the prev button, when clicked takes the user to the previous image 
function prev(){
    if (a<=0) ;
    return slider();
};

//the next button it clicked and is incremented by 1 which displays the next picture
function nxt() {
    if (a >= imgs.length);
    a++ ;
    return slider()
}

//function slider gets the images using queryselector method and sets the images using the setattribute to get 
// the images by incrementing it by one
function slider(){
    return sliders.setAttribute('src','img/' +imgs[a]);
}

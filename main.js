{/*
<div class="carousel-item active">
    <img class="d-block w-100" src="./imgs/1.jpeg" alt="First slide">
</div>

<div class="carousel-item">
    <img class="d-block w-100" src="./imgs/02.jpg" alt="Second slide">
</div>

<div class="carousel-item">
    <img class="d-block w-100" src="./imgs/3.jpg" alt="Third slide">
</div>

 */}

var carousel = document.querySelector('.carousel-inner');
var carouselParent = document.querySelector('.carousel')

var imgs = ['./imgs/1.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg'];
var index;

for (imgs, i = imgs.length; i--;) {

    var img = document.createElement('img');
    var carousel_item = document.createElement('div');
    carousel_item.classList.add('carousel-item');
    img.classList.add('d-block', 'w-100');

    index = imgs.splice(Math.floor(Math.random() * (i + 1)), 1)[0];

    img.setAttribute('src', index)

    carousel_item.appendChild(img);
    carousel.appendChild(carousel_item)


}

carousel.appendChild(carousel_item)
carouselParent.appendChild(carousel)
console.log(carouselParent)






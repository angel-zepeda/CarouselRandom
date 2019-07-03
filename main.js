var $numberofSlides = $('.carousel-item').length;
var $currentSlide = Math.floor((Math.random() * $numberofSlides));
var $item = $('.carousel-item');


$('.carousel-indicators li').each(function () {
    var $slideValue = $(this).attr('data-slide-to');
    if ($currentSlide == $slideValue) {
        $(this).addClass('active');
        $item.eq($slideValue).addClass('active');
    } else {
        $(this).removeClass('active');
        $item.eq($slideValue).removeClass('active');
    }
});


// var carousel = document.querySelector('.carousel-inner');
// var carouselParent = document.querySelector('.carousel-main')
// var imgs = ['./imgs/1.jpg', './imgs/2.jpg', './imgs/3.jpg', './imgs/4.jpg'];
// var index;

// for (imgs, i = imgs.length; i--;) {
//     var img = document.createElement('img');
//     var carousel_item = document.createElement('div');
//     carousel_item.classList.add('carousel-item');
//     img.classList.add('d-block', 'w-100');
//     index = imgs.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
//     img.setAttribute('src', index)
//     carousel_item.appendChild(img);
//     carousel.appendChild(carousel_item)
// }
// carousel.appendChild(carousel_item)
// carouselParent.appendChild(carousel)
// console.log(document.querySelector('body'))



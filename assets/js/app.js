$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    dots:false,
    navText : ['<i class="fa-solid fa-angles-left"></i>','<i class="fa-solid fa-angles-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3,
            nav:true,
            slideBy : 3,
            smartSpeed : 100
        }
    }
})
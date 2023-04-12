$('.burger').on('click',function(event){
 $('.navigation-bar').slideToggle('200');
 $('.toggle-open').toggleClass('open');
 $('.toggle-close').toggleClass('close');
});

const sr=ScrollReveal({
origin:'top',
distance:'20px',
duration:1500,
reset:true
});
ScrollReveal().reveal('.right,.col,.aboutus-img,.right-side',{origin:'left'});
ScrollReveal().reveal('.left,.home-image,.left-side,.aboutus-content',{origin:'right'});
ScrollReveal().reveal('.content,.product-img,.head,.product-item,.newsletter-wrapper,.footer-col',{interval:100});
/*ScrollReveal().reveal('.item,.footer-about,.footer-col',{interval:100});*/
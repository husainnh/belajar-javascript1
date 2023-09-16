// fitur image

const image= document.querySelector('.imageProduct');
const  imageProuduct = document.querySelector('.foto');

image.addEventListener('click', function(e){
    if (e.target.className === 'gmbar') {
        imageProuduct.src = e.target.src;
        imageProuduct.classList.add('img-animation')

        setTimeout(() => {
            imageProuduct.classList.remove('img-animation')
        }, 500);
    }
    
})



// fitur images slide
 
const best = document.querySelector('.best')
const hot = document.querySelector('.hot')
const newd = document.querySelector('.new')
const acc = document.querySelector('.acc')
const imgSlide = document.querySelector('.image-slide')
const img1 = document.querySelector('.img1')
const img2 = document.querySelector('.img2')
const img3 = document.querySelector('.img3')


best.addEventListener('click', (e) =>{
    if (img1.style.display = 'block') {
    img2.style.display = 'none'
    imgSlide.classList.add('img-animation');
    setTimeout(() => {
        imgSlide.classList.remove('img-animation')
    }, 500);
    
}


});

hot.addEventListener('click', (e) =>{
if (img2.style.display = 'none') {
    img2.style.display = 'block'
    imgSlide.style.justifyContent = 'center';
    imgSlide.classList.add('img-animation');
    setTimeout(() => {
        imgSlide.classList.remove('img-animation')
    }, 500);

}

});


newd.addEventListener('click', (e) =>{
    if (img2.style.display = 'none') {
        img3.style.display = 'block'
        imgSlide.style.justifyContent = 'center';
        imgSlide.classList.add('img-animation');
        setTimeout(() => {
            imgSlide.classList.remove('img-animation')
        }, 500);
    
    }
    
    });




// fitur navigasi acctive
const links = document.querySelectorAll('.nav-link');
    
if (links.length) {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
          link.classList.remove('active');
      });
      e.preventDefault();
      link.classList.add('active');
    });
  });
}


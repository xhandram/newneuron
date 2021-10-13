window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        dots: '#dots',
        arrows: {
          prev: '#prev-slide',
          next: '#next-slide'
        }
    })
  })
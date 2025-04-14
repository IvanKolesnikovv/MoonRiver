new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.btn-next',
    prevEl: '.btn-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  loop: true,
  simulateTouch: true,
  touchRatio: 2,
  grabCursor: true,

  mousewheel:{
    sensitivity:1
    // eventsTarget: ".swiper-wrapper"
  },
  slidesPerView:5,
  
});


document.addEventListener('DOMContentLoaded', function () {
  // Получаем все элементы с классом 'swiper-pagination-bullet'
  const bullets = document.querySelectorAll('.swiper-pagination-bullet');

  // Проходимся по каждому элементу и изменяем его стиль
    bullets.forEach(function (bullet) {
      bullet.style.backgroundColor = '#656565';

        const activeBullet = document.querySelector('.swiper-pagination-bullet-active');

        bullets.forEach(function (activeBullet) {
            if (activeBullet) {
        activeBullet.style.backgroundColor = 'white';
        }})
    });
});




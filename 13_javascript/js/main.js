window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__search-btn').addEventListener('click', function() {
    document.querySelector('.search-active-container').classList.toggle('hidden');
  });
  document.querySelector('.search-active-container__close').addEventListener('click', function() {
    document.querySelector('.search-active-container').classList.toggle('hidden');
  });

  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.burger-menu').classList.toggle('is-activ');
    document.querySelector('body').classList.toggle('lock');
  });

  document.querySelectorAll('.worcking-steps__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.about-working__step-card').forEach(function(tabContent) {
        tabContent.classList.add('hidden');
      });
      document.querySelector(`[data-target="${path}"]`).classList.remove('hidden');
    });
  });
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

$( function() {
  $( "#accordion" ).accordion({
    active: 7 ,
    heightStyle: "content"
  });
} );


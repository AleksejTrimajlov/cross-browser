window.addEventListener('DOMContentLoaded', function() {

  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.burger-menu').classList.toggle('is-activ');
    document.querySelector('.header__burger').classList.toggle('active');
  });

});

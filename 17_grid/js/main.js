window.addEventListener('DOMContentLoaded', function() {
  if( window.innerWidth < 570){
  document.querySelector('.nav').classList.toggle('burger-menu');
  }
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__burger').classList.toggle('active');
    document.querySelector('.nav').classList.toggle('burger-menu--activ');
  });

});

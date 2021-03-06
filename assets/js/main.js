(function () {
  u('.blog-title').attr('href', '/');
  u('.blog-title').removeClass('icon icon-arrow-left');

  u('body').removeClass('no-js');
  u('.singlepost').addClass('animate__animated animate__fadeIn');
  if (u('p img').attr('alt') == 'coverimage') {
    if (window.screen.width > 960) {
      u('header').addClass('no-background');
      u('.panel-cover--overlay').addClass('animate__animated animate__fadeOut');
      u('.panel-cover__logo').addClass('visibility-hidden');
      u('.main-button').addClass('visibility-hidden');
      u('.soc').addClass('visibility-hidden');
      u('.blog-title').attr('href', '/#blog');
      u('.blog-title').text('');
      u('.blog-title').addClass('icon icon-arrow-left');
    } else {
      u('.coverimage').addClass('hidden');
      document.getElementsByClassName("panel-cover")[0].style.backgroundImage = "url('" + u('p img').attr('src') + "')"; 
    }
  }

  if (
    (window.location.hash && window.location.hash === '#blog') ||
        window.location.pathname.substring(0, 5) === '/tag/' ||
        window.location.pathname.substring(0, 6) === '/page/' ||
        window.location.pathname.substring(0, 8) === '/resume/'
  ) {
    animateSider();
    if (window.location.pathname.substring(0, 8) === '/resume/'){
      u('.mainDetails #name ').addClass('animate__animated animate__bounce');
    }
  }

  if (u('.panel-cover').hasClass('panel-cover--collapsed') === false) {
    u('.panel-cover__title').addClass('animate__animated animate__fadeInDown');
    u('.panel-cover__description').addClass('animate__animated animate__fadeIn');
    u('.navigation-wrapper').addClass('animate__animated animate__fadeInUp');
  } else {
    u('.mobile-top-right-button').addClass('display-block');
    u('.mobile-top-right-button').addClass('animate__animated animate__fadeInDown');
  }

  u('.btn-mobile-menu__icon').on('click', function () {
    u('.navigation-wrapper').toggleClass('visible');
    u('.btn-mobile-menu__icon').toggleClass(
      'icon-list icon-x-circle animate__animated animate__fadeIn'
    );
  });

  u('.navigation-wrapper .blog-button').on('click', function () {
    u('.navigation-wrapper').toggleClass('visible');
    u('.btn-mobile-menu__icon').toggleClass( 'icon-list icon-x-circle animate__animated animate__fadeIn');
  });

  u('a.blog-button').on('click', function () {
    animateSider();
  });

  function animateSider () {
    if (window.screen.width > 960) {
      u('.panel-cover').addClass('panel-cover--collapsed animate__animated animate__fadeInLeft');
    } else {
      u('.panel-cover').addClass('panel-cover--collapsed animate__animated animate__fadeInDown');
      u('.mobile-top-right-button').addClass('display-block');
      u('.mobile-top-right-button').addClass('animate__animated animate__fadeInDown');
    }
    u('article').addClass('animate__animated animate__fadeIn');
  }
})();

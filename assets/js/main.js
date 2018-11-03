(function ($) {
  $(document).ready(function () {
    $('.panel-cover__logo').css('visibility', 'visible')
    $('.main-button').css('visibility', 'visible')
    $('.soc').css('visibility', 'visible')
    $('.blog-title').attr('href', '/')
    $('.blog-title').text('Kevin Cui')
    $('.blog-title').removeClass('icon icon-arrow-left')

    $('body').removeClass('no-js')
    $('.singlepost').addClass('animated fadeIn')
    var img = $('p img[alt="coverimage"]').attr('src')
    if (typeof img !== 'undefined') {
      if (window.screen.width > 960) {
        $('header').css('background-image', '')
        $('.panel-cover--overlay').fadeOut(200)
        $('.panel-cover__logo').css('visibility', 'hidden')
        $('.main-button').css('visibility', 'hidden')
        $('.soc').css('visibility', 'hidden')
        $('.blog-title').attr('href', '/#blog')
        $('.blog-title').text('')
        $('.blog-title').addClass('icon icon-arrow-left')
      } else {
        $('header').css('background-image', 'url(' + img + ')')
        $('p img[alt="coverimage"]')
          .css('display', 'none')
          .next('sup')
          .css('display', 'none')
      }
    }

    if (
      (window.location.hash && window.location.hash === '#blog') ||
    window.location.pathname.substring(0, 5) === '/tag/' ||
    window.location.pathname.substring(0, 6) === '/page/' ||
    window.location.pathname.substring(0, 8) === '/resume/'
    ) {
      animateSider()
    }

    if ($('.panel-cover').hasClass('panel-cover--collapsed') === false) {
      $('.panel-cover__title').addClass('animated fadeInDown')
      $('.panel-cover__description').addClass('animated fadeIn')
      $('.navigation-wrapper').addClass('animated fadeInUp')
    } else {
      $('.mobile-top-right-button').css('display', 'block')
      $('.mobile-top-right-button').addClass('animated fadeInDown')
    }

    $('.btn-mobile-menu__icon').click(function () {
      $('.navigation-wrapper').toggleClass('visible')
      $('.btn-mobile-menu__icon').toggleClass(
        'icon-list icon-x-circle animated fadeIn'
      )
    })

    $('.navigation-wrapper .blog-button').click(function () {
      $('.navigation-wrapper').toggleClass('visible')
      $('.btn-mobile-menu__icon').toggleClass(
        'icon-list icon-x-circle animated fadeIn'
      )
    })

    $('a.blog-button').click(function () {
      animateSider()
    })

    function animateSider () {
      if (window.screen.width > 960) {
        $('.panel-cover').addClass('panel-cover--collapsed animated fadeInLeft')
      } else {
        $('.panel-cover').addClass('panel-cover--collapsed animated fadeInDown')
        $('.mobile-top-right-button').css('display', 'block')
        $('.mobile-top-right-button').addClass('animated fadeInDown')
      }
      $('article').addClass('animated fadeIn')
    }
  })
})(jQuery)
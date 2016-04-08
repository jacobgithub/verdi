function activate(div, btn, css) {
  $(btn).addClass(css);
  $(div).fadeIn(1000).css('display', 'block');
}

function remove(div, btn, css) {
  $(btn).removeClass(css);
  $(div).css('display', 'none');
}

var buttons = {
  appface: function() {
    $('#home-btn').on('click', function() {
      activate('#home-app', '#home-btn', 'btn-active');
      remove('#events-app', '#events-btn', 'btn-active')
      remove('#history-app', '#history-btn', 'btn-active')
      remove('#gallery-app', '#gallery-btn', 'btn-active')
      remove('#about-app', '#about-btn', 'btn-active')
      remove('#contact-app', '#contact-btn', 'btn-active')
      remove('#map-app', '#map-btn', 'btn-active')
    });

    $('#events-btn').on('click', function() {
      activate('#events-app', '#events-btn', 'btn-active');
      remove('#home-app', '#home-btn', 'btn-active')
      remove('#history-app', '#history-btn', 'btn-active')
      remove('#gallery-app', '#gallery-btn', 'btn-active')
      remove('#about-app', '#about-btn', 'btn-active')
      remove('#contact-app', '#contact-btn', 'btn-active')
      remove('#map-app', '#map-btn', 'btn-active')
    });

    $('#history-btn').on('click', function() {
      activate('#history-app', '#history-btn', 'btn-active');
      remove('#home-app', '#home-btn', 'btn-active')
      remove('#events-app', '#events-btn', 'btn-active')
      remove('#gallery-app', '#gallery-btn', 'btn-active')
      remove('#about-app', '#about-btn', 'btn-active')
      remove('#contact-app', '#contact-btn', 'btn-active')
      remove('#map-app', '#map-btn', 'btn-active')
    });

    $('#gallery-btn').on('click', function() {
      activate('#gallery-app', '#gallery-btn', 'btn-active');
      remove('#home-app', '#home-btn', 'btn-active')
      remove('#history-app', '#history-btn', 'btn-active')
      remove('#events-app', '#events-btn', 'btn-active')
      remove('#about-app', '#about-btn', 'btn-active')
      remove('#contact-app', '#contact-btn', 'btn-active')
      remove('#map-app', '#map-btn', 'btn-active')
    });

    $('#about-btn').on('click', function() {
      activate('#about-app', '#about-btn', 'btn-active');
      remove('#events-app', '#events-btn', 'btn-active')
      remove('#history-app', '#history-btn', 'btn-active')
      remove('#gallery-app', '#gallery-btn', 'btn-active')
      remove('#home-app', '#home-btn', 'btn-active')
      remove('#contact-app', '#contact-btn', 'btn-active')
      remove('#map-app', '#map-btn', 'btn-active')
    });

    $('#contact-btn').on('click', function() {
      activate('#contact-app', '#contact-btn', 'btn-active');
      remove('#home-app', '#home-btn', 'btn-active')
      remove('#history-app', '#history-btn', 'btn-active')
      remove('#gallery-app', '#gallery-btn', 'btn-active')
      remove('#about-app', '#about-btn', 'btn-active')
      remove('#events-app', '#events-btn', 'btn-active')
      remove('#map-app', '#map-btn', 'btn-active')
    });

    $('#map-btn').on('click', function() {
      activate('#map-app', '#map-btn', 'btn-active');
      remove('#home-app', '#home-btn', 'btn-active')
      remove('#history-app', '#history-btn', 'btn-active')
      remove('#gallery-app', '#gallery-btn', 'btn-active')
      remove('#about-app', '#about-btn', 'btn-active')
      remove('#contact-app', '#contact-btn', 'btn-active')
      remove('#events-app', '#events-btn', 'btn-active')
    });

  }
}

$(document).ready(function() {
  // App buttons
  buttons.appface();
})
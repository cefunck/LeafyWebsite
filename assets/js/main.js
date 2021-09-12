window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("header").css("height","7rem");
  } else {
    $("header").css("height","10rem");
  }
}

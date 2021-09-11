$(window).scroll(function() {
    if ($(this).scrollTop() == 0) {
        //Do whatever you want to do
        $("nav").css("height","15%");
    }
    else {
      $("nav").css("height","10%");
    }
});

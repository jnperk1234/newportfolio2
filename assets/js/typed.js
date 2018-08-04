$(function(){
    $(".typed").typed({
        strings: ["A Desginer.", "A Developer.", "A Dreamer."],
        typeSpeed: 1,
        loop: true,
        backDelay: 1000 
    });
});

$('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop:  ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
});
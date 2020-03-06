// Courtney Merkel - Final Project JavaScript
// sourced from: https://www.taniarascia.com/responsive-dropdown-navigation-bar/ 
(function ($) {
    $(function () {
        $('nav ul li > a:not(:only-child)').click(function (e) {
            $(this).siblings('.nav-dropdown').toggle();
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        $('html').click(function () {
            $('.nav-dropdown').hide();
        });
    });
    document.querySelector('#nav-toggle').addEventListener('click', function () {
        this.classList.toggle('active');
    });
    $('#nav-toggle').click(function () {
        $('nav ul').toggle();
    });
})(jQuery);

// sourced from: https://css-tricks.com/snippets/jquery/simple-auto-playing-slideshow/
$("#slideshow > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow');
}, 4000);

// for FAQ page
$("#slideshow2 > div:gt(0)").hide();

setInterval(function () {
    $('#slideshow2 > div:first')
        .fadeOut(1000)
        .next()
        .fadeIn(1000)
        .end()
        .appendTo('#slideshow2');
}, 4000);
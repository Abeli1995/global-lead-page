$(document).ready(function() {
    $('.hamburger-menu').click(function() {
        $('.hamburger-menu').toggleClass('open-menu');
        $('.nav-container').toggleClass('open-menu')
    });
});
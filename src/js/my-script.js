$(document).ready(function () {
    $('.burger_menu').on('click', function () {
        $('.burger_menu').toggleClass('active');
        $('.header .nav').toggleClass('active')
    })
});
// document.querySelector('.burger_menu').addEventListener('click', function () {
//     document.querySelector('.burger_menu').classList.add = 'active';
// });
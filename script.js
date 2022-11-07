// Function handles active menu item    
$(function () {
    $('.nav-btn').on('click', function () {
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
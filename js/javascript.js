$('.btn-dark').on('click', function () {
    $('.wrap').toggleClass('active');

    return false;
});

$('.wrap').on('click', function () {
    $('.wrap').removeClass('active');
});

$('.btn').on('click', function () {
    $('.wrap').toggleClass('active');

    return false;
});


$(".wrap").click(function () {
    $(".wrap").hide();
});

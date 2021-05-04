$.fn.equalHeights = function () {
    var max_height = 0;
    $(this).each(function () {
        max_height = Math.max($(this).height(), max_height);
    });
    $('.post.type-post').each(function () {
        $(this).css('height', max_height);
    });
};

window.onload = function () {
    if ($('.post.type-post').length) {
        $('.post.type-post').equalHeights();
    }
}
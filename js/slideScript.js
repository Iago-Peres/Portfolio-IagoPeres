$(document).ready(function () {
    $('#projetos-container').click(() => {
        let content = $('#projetos');
        let img = $('#collapse-img');

        if (img.attr('src') === "imgs/collapse.png") {
            img.attr('src', 'imgs/collapse_down.png');
        } else if (img.attr('src') === "imgs/collapse_down.png") {
            img.attr('src', 'imgs/collapse.png');
        }

        content.slideToggle(300, function () {
            if (content.is(':visible')) {
                content.css({
                    'display': 'grid'
                });
            } else {
                content.css('display', 'none');
            }
        });
    });
});
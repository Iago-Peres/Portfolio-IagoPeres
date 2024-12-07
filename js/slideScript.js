$(document).ready(function () {
    $('#projetos-container').click(() => {
        let content = $(this).next('#projetos');

        content.slideToggle(300, function () {
            if (content.is(':visible')) {
                content.css({
                    'display': 'flex',
                    'flex-flow': 'row wrap'
                });
            } else {
                content.css('display', 'none');
            }
        });
    });
});
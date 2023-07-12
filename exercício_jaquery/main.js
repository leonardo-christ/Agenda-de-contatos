$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault()
        const novatarefa = $('#tarefa').val()
        const novalinha = $('<li></li>')
        $(`<li>${novatarefa}</li>`).appendTo(novalinha)
        $(novalinha).appendTo('ul')
        $("li").click(function() {
            $(this).addClass("riscado");
        })
        $('#tarefa').val("")
    })
})
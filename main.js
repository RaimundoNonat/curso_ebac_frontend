$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();

        const inputTarefa = $('input').val();
        const novaTarefa = $('.lista');
        $(`<li> ${inputTarefa}</li>`).appendTo(novaTarefa);
        $('input').val('');


        $("ul").on("click", "li", function () {
            $(this).css("text-decoration", "line-through") 
        });
    
    
    })

})


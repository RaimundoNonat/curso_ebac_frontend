$(document).ready(function () {

    $('form').on('submit', function (e) {
        e.preventDefault();

        const inputTarefa = $('input').val();
        const novaTarefa = $('.lista');
        $(`<ul> <li> ${inputTarefa}</li> </ul>`).appendTo(novaTarefa);
        $('input').val('');


        $(novaTarefa).click(function () {
            $('li').css("text-decoration", "line-through") 
        });
    
    
    })

})


$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00.000-000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            email: {
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Preenchimento obrigatório',
            telefone: 'Preenchimento obrigatório',
            cpf: 'Preenchimento obrigatório',
            email: 'Preenchimento obrigatório',
            endereco: 'Preenchimento obrigatório',
            cep: 'Preenchimento obrigatório',
            
        } 
    })

})
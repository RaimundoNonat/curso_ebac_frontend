const form = document.getElementById('formulario')

const numero1 = document.getElementById('numA')
const numero2 = document.getElementById('numB')


function Limpar() {
    document.getElementById('numA').value = '';
    document.getElementById('numB').value = '';
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const erroIguais = `Os números são iguais, tente novamente!`;
    const sucesso = `Formulário validado com sucesso!`;
    const erro = `Ops... 1º número é maior que o 2º. Tente novamente!`;

    if (Number(numero2.value) == Number(numero1.value)) {
        document.querySelector('.erro-iguais').innerHTML = erroIguais;
    }
    else if (Number(numero2.value) > Number(numero1.value)) {
        document.querySelector('.sucesso').innerHTML = sucesso;
    } else {
        document.querySelector('.erro').innerHTML = erro;
    };

    Limpar()

    form.addEventListener('click', function(){
        document.querySelector('.erro-iguais').innerHTML = '';
        document.querySelector('.sucesso').innerHTML = '';
        document.querySelector('.erro').innerHTML = '';
    });
});



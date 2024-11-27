function Funcionarios(nome, cargo, salario,) {
    this.nome = nome;
    this.dizNome = function () {
        console.log(this.nome);

    }
    this.cargo = cargo;
    this.salario = salario;

    ConsultaCargo.call(this, cargo);
    ConsultaSalario.call(this, salario);
}

function ConsultaCargo(cargo) {
    this.ConsultaCargo = function () {
        console.log(this.cargo);
    }
}

function ConsultaSalario(salario) {
    this.ConsultaSalario = function () {
        console.log(this.salario);
    }
}

const novoFuncionario1 = new Funcionarios('Maria', 'Dev Back-end JR', 4400);
const novoFuncionario2 = new Funcionarios('Pedro', 'Dev Front-end JR', 4200);
const novoFuncionario3 = new Funcionarios('Jose', 'Dev FullStack', 5000);

//Definido a classe calculadora
class Calculadora {
    constructor() {
        // Inicializando o visor com o valor 0
        this.valor = '0'

    }

    // Método para adicionar um número no visor
    adicionarNumero(numero) {
        if (this.valor === '0') {
            //Se o valor atual for 0 vai substituir
            this.valor = numero
        } else {
            //Senão, adiciona o número no final do valor atual
            this.valor += numero
        }
        this.atualizarVisor()
    }
    adicionarOperacao(operacao) {
        if (
            this.valor.slice(-1) === '+' ||
            this.valor.slice(-1) === '-' ||
            this.valor.slice(-1) === '*' ||
            this.valor.slice(-1) === '/'
        ) {
            this.valor = this.valor.slice(0,-1) + operacao
        } {
            this.valor += operacao;
        }

        // Atualizar o visor
        this.atualizarVisor()
    }

    limpar() {

        //Metodo para atualizar o visor
        this.valor = '0'
        this.atualizarVisor()
    }
    
    resultado() {
        try {
            // Usa a função eval() para calcular o resultado da expressão
            this.valor = eval(this.valor).toString()
        } catch (e) {
            // Se houver umerro na expressão, exibe a mensagem de Erro
            this.valor = 'Error'
        }
        // Método para atualizar o visor com o valor atual da calculadora
        this.atualizarVisor()
    }

    atualizarVisor() {
        document.getElementById('visor').value = this.valor
    }

}

let calculadora = new Calculadora();
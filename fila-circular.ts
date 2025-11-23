class FilaCircular {
    private dados: Array<number>;
    private capacidade: number;
    private cheia: boolean = false;

    // ponteiros (front e back)
    private f: number = -1; b: number = -1;

    constructor(capacidade: number) {
        this.dados = [];
        this.capacidade = capacidade;
        this.cheia = this.cheia;
    }

    adicionar(num: number): void {
        if (this.estaVazia()) {
            this.f += 1;
            this.b += 1;
        }
        else if (this.estaCheia()) {
            return console.log("fila cheia");
        }
        // caso imcompleta (incluindo quando vazia)
        this.dados[this.b] = num;
        this.b = (this.b + 1) % this.capacidade;
    }

    remover() {
        if (this.estaVazia()) {
            console.log("pilha vazia");
            return;
        }
        // verificando se o valor futuro é igual ao ponteiro b
        let proximoF: number = (this.f + 1) % this.capacidade; // ele enquanto descrito já executado
        // resetando os ponteiros caso seja necessario
        if (proximoF === this.b){
            this.f = -1;
            this.b = -1;
        }
        else {
            this.f = (this.f + 1) % this.capacidade;
        }
        
    }

    exibirTamanho(): number {
        if (this.estaVazia()) {
            return 0;
        }
        else if (this.estaCheia()) {
            return this.capacidade;
        }
        let contador = this.f;
        let resultado: number = 0;
        do {
            contador = (contador + 1) % 5;
            resultado++;
        } while (contador < this.b);
        return resultado;
    }

    exibirFila(): void {
        if (this.estaVazia()) {
            return console.log("[]");
        }
        else if (this.estaCheia()) {
            return console.log(this.dados);
        }
        let stringFila: string = '[ ';
        let registrador = this.f;
        while (registrador != this.b) {
            stringFila += `${this.dados[registrador]} `;
            registrador = (registrador + 1) % this.capacidade;
        }
        stringFila += ']';
        return console.log(stringFila);
    }

    estaCheia(): boolean {
        if (this.b === this.f) {
            this.cheia = true;
            return true;
        }
        return false
    }

    estaVazia() {
        if (this.b === -1 && this.f === -1) {
            return true
        }
        return false;
    }

    getInicio(){
        return console.log(`Inicio da fila: ${this.dados[this.f]}`);
    }

    getFinal(){
        return console.log(`Final da fila: ${this.dados[this.b]}`);
    }

    getCapacidade(){
        return console.log(`Capacidade: ${this.capacidade}`);
    }

    getEspacoDisponivel(){
        return console.log(`Espaço disponível: ${this.capacidade - this.exibirTamanho()}`)
    }
}

const fila = new FilaCircular(4);
fila.adicionar(4);
fila.adicionar(3);
fila.adicionar(2);
fila.remover();
fila.remover();
fila.remover();
fila.adicionar(5);
fila.adicionar(4);

fila.exibirTamanho();
fila.getEspacoDisponivel();
console.log(fila.estaCheia());
fila.exibirFila();

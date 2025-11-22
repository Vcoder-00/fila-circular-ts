class FilaCircular {
    private dados: Array<number>;
    private capacidade: number;
    private cheia: boolean = false;

    // ponteiros (front e back)
    private f: number = -1; b: number = -1;

    constructor(capacidade: number) {
        this.dados = [];
        this.capacidade = capacidade;
    }

    adicionar(num: number): void {
        //caso a fila esteja vazia, os ponteiros f e o b ficam com 0, para marcar o inicio do Array
        if (this.estaVazia()) {
            this.f = 0;
            this.b = 0;
            this.dados[this.b] = num;
            return;
        }
        else if (this.estaCheia()) {
            return console.log("fila cheia");
        }

        // caso incompleta 
        this.b = (this.b + 1) % this.capacidade;
        this.dados[this.b] = num;
    }

    remover() {
        if (this.estaVazia()) {
            return console.log("Fila vazia"); 
        }

        // verificando se o valor futuro é igual ao ponteiro b
        let proximoF: number = (this.f + 1) % this.capacidade;

        // resetando os ponteiros caso seja necessario
        if (this.f === this.b) {
            this.f = -1;
            this.b = -1;
        }
        else {
            this.f = proximoF;
        }
    }

    exibirTamanho(): number {
        if (this.estaVazia()) {
        return 0;
    }
    else if (this.estaCheia()) {
        return this.capacidade;
    }

    // Corrigindo erro de retornar um espaço a mais dentro da fila
    let contador = this.f;
    let resultado = 1; 

    while (contador !== this.b) {
        contador = (contador + 1) % this.capacidade;
        resultado++;
    }

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
        //corrigindo: antes o while não exibia o ultimo item da fila, na pos num
        while (true) {
            stringFila += `${this.dados[registrador]} `;
            if (registrador === this.b) {
                break;           
            }
            registrador = (registrador + 1) % this.capacidade;
        }

        stringFila += ']';
        return console.log(stringFila);
    }

    estaCheia(): boolean {
        // corrigido: erro da fila aparecer cheia no inicio
        if (((this.b + 1) % this.capacidade) === this.f) {
            this.cheia = true;
            return true;
        }
        return false;
    }

    estaVazia() {
        //Aqui se o ponteiro b e o ponteiro f estiverem na pos -1 retorna true para fila vazia, se não retorna false
        if (this.b === -1 && this.f === -1) {
            return true;
        }
        return false;
    }

    getInicio() {
        return console.log(`Inicio da fila: ${this.dados[this.f]}`);
    }

    getFinal() {
        return console.log(`Final da fila: ${this.dados[this.b]}`);
    }

    getCapacidade() {
        return console.log(`Capacidade: ${this.capacidade}`);
    }

    getEspacoDisponivel() {
        return console.log(`Espaço disponível: ${this.capacidade - this.exibirTamanho()}`);
    }
}

const fila = new FilaCircular(5);
fila.exibirTamanho();

fila.adicionar(12)
fila.adicionar(1)
fila.adicionar(2)
fila.adicionar(3)
fila.adicionar(4)

fila.remover()
fila.remover()
fila.remover()


fila.exibirFila()

fila.getEspacoDisponivel();

console.log(fila.estaCheia());

fila.exibirFila();

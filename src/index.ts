import { FilaCircular } from "./fila/fila-circular";
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
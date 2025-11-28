# Fila Circular em TypeScript

Implementação de uma **fila circular** utilizando **TypeScript**, desenvolvida como parte da disciplina de **Estrutura de Dados**.

---

## Integrantes
- Vitor Lopes @Vcoder-00
- Mateus Araújo @MateusARJ

--Professor: Jonathas Jivago

## 📚 Sobre o Projeto
Este projeto tem como objetivo demonstrar o funcionamento de uma **fila circular**, uma estrutura de dados que permite o reaproveitamento de posições já liberadas, evitando desperdício de memória e melhorando a eficiência em operações de enfileiramento e desenfileiramento.

---

## ⚙️ Funcionalidades
- Criar uma fila circular com tamanho definido
- Inserir elementos na fila (`adicionar`)
- Remover elementos da fila (`remover`)
- Verificar se a fila está cheia ou vazia
- Visualizar o estado atual da fila
- Exibir o tamanho atual da fila

---

## 🛠️ Tecnologias Utilizadas
- [TypeScript](https://www.typescriptlang.org/) – linguagem principal
- [Node.js](https://nodejs.org/) – execução e testes
- [npm](https://www.npmjs.com/) – gerenciamento de pacotes
- [ts-node](https://www.npmjs.com/package/ts-node) – execução de arquivos TypeScript diretamente
- [Parcel](https://parceljs.org/) - empacotador de aplicações web
---

## 🚀 Como Executar
1. Clone este repositório:
   ```bash
   git clone https://github.com/Vcoder-00/fila-circular-ts.git
2. use o comando abaixo para entrar na pasta do projeto:
   ```bash
   cd fila-circular-ts
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Compile o TypeScript:
   ```bash
   npx tsc
   ```
5. Execute o arquivo compilado:
   ```bash
   ts-node ./fila-circular.ts
   ```
## 🚀 Possivel também testar por meio do parcel
1. Instale as dependências:
   ```bash
   npm install 
   ```
1. Faça as interações da fila no arquivo `index.ts`
2. Use o comando abaixo para realizar a build do projeto:
   ```bash
   npm run start
   ```
3. Veja o resultado no console do navegador.
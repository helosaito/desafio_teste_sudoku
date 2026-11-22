# desafio_teste_sudoku

Projeto de testes automatizados de **Sudoku Binário**.

## 1. Colaborador(es)

- Colaborador 1:Heloísa Sayuri Silva Saito 
- Colaborador 2: Maria Eduarda de Castro Lachimia

## 2. Especificação do desafio

O desafio consiste em criar casos de teste em JavaScript para tabuleiro 6 x 6.

## 3. Estrutura do projeto

```
.
├── package.json
├── README.md
├── src/
│   └── SudokuBinario.js
└── tests/
    └── SudokuBinario.test.js
```

- `src/SudokuBinario.js`: implementação da classe testada.

- `tests/SudokuBinario.test.js`: casos de teste automatizados.

## 4. Funcionamento dos casos de teste

Os testes usam Jest e seguem três etapas: preparar o jogo, executar uma ação e verificar o resultado esperado com `expect`.

Casos testados: criação, valores permitidos, limite de zeros e uns, regra de três iguais, resolução e posições inválidas.

## 5. Instalação e execução

```bash
npm install
npm test
```

Para cobertura:

```bash
npm run test:coverage
```

## 6. Observações do enunciado

- A realização dos desafios é opcional.

- O trabalho pode ser feito em dupla.

- As contribuições dos integrantes devem aparecer no repositório.

- Serão considerados no máximo 5 desafios entregues.

- O repositório segue o padrão de nomenclatura exigido: `desafio_teste_sudoku`.

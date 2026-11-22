# Sudoku Binário 6 × 6 — desafio de testes

## Desafio

O desafio é elaborar testes automatizados para um tabuleiro de Sudoku Binário 6 × 6. A implementação de um algoritmo que resolva o tabuleiro não é obrigatória na atividade; a classe deste projeto valida tabuleiros, mas não calcula soluções.

Cada casa é `0`, `1` ou `null`, que representa casa vazia. A validação verifica que cada linha e coluna não tenha mais de três zeros nem mais de três uns e que não existam três valores iguais consecutivos. Um tabuleiro é considerado resolvido quando está completo, válido e não repete nenhuma linha ou coluna. Essas regras descrevem o comportamento codificado na versão auditada; confirme-as com o enunciado original antes de tratá-las como especificação oficial.

## Colaboradores

- Heloísa Sayuri Silva Saito

- Maria Eduarda de Castro Lachimia

## Arquivos

- `SudokuBinario.js`: implementação da classe de validação.

- `SudokuBinario.test.js`: testes com `node:test` e `node:assert/strict`.

## Casos de teste

| Caso | O que verifica |
| --- | --- |
| Cria um tabuleiro vazio de seis linhas por seis colunas | A dimensão é 6 × 6 e o tabuleiro inicial não está completo. |
| Aceita valores binários em set e rejeita outros valores | `set` grava 0 ou 1 e rejeita valor 2. |
| Valida um tabuleiro parcial dentro dos limites | Uma casa vazia é permitida enquanto as regras de linha e coluna continuam válidas. |
| Reconhece um tabuleiro completo válido e resolvido | A amostra completa satisfaz as regras e é reconhecida como solução. |
| Rejeita três valores iguais consecutivos em uma linha | Três uns consecutivos tornam a linha inválida e fazem a validação falhar. |
| Rejeita três valores iguais consecutivos em uma coluna | Três zeros consecutivos tornam a coluna inválida. |
| Rejeita mais de três valores iguais em uma linha ou coluna | Quatro zeros numa linha ou quatro uns numa coluna são recusados. |
| Rejeita dimensões e valores iniciais fora do domínio | Tabuleiro que não mede 6 × 6 ou contém valor diferente de `null`, 0 e 1 é rejeitado. |
| Rejeita posições fora do tabuleiro e índices fracionários | `set` recusa linha ou coluna fora do intervalo e índices não inteiros. |

## Como executar

Requer Node.js 18 ou superior. Não há dependências externas. Na pasta deste projeto, execute:

```bash
node --test
```

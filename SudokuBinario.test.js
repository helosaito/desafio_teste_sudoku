const test = require('node:test');
const assert = require('node:assert/strict');
const { SudokuBinario } = require('./SudokuBinario');

const tabuleiroValido = [
    [0, 0, 1, 0, 1, 1],
    [0, 0, 1, 1, 0, 1],
    [1, 1, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 1],
    [1, 0, 1, 1, 0, 0],
    [1, 1, 0, 1, 0, 0]
];

test('cria um tabuleiro vazio de seis linhas por seis colunas', () => {
    const jogo = new SudokuBinario();
    assert.equal(jogo.tabuleiro.length, 6);
    assert.equal(jogo.tabuleiro.every((linha) => linha.length === 6), true);
    assert.equal(jogo.completo(), false);
});

test('aceita valores binários em set e rejeita outros valores', () => {
    const jogo = new SudokuBinario();
    jogo.set(0, 0, 1);
    assert.equal(jogo.tabuleiro[0][0], 1);
    assert.throws(() => jogo.set(0, 1, 2), /valor deve ser 0 ou 1/);
});

test('valida um tabuleiro parcial dentro dos limites', () => {
    const jogo = new SudokuBinario(tabuleiroValido.map((linha) => [...linha]));
    jogo.tabuleiro[0][0] = null;
    assert.equal(jogo.validar(), true);
    assert.equal(jogo.completo(), false);
});

test('reconhece um tabuleiro completo válido e resolvido', () => {
    const jogo = new SudokuBinario(tabuleiroValido);
    assert.equal(jogo.validar(), true);
    assert.equal(jogo.completo(), true);
    assert.equal(jogo.resolvido(), true);
});

test('rejeita três valores iguais consecutivos em uma linha', () => {
    const jogo = new SudokuBinario();
    jogo.set(0, 0, 1);
    jogo.set(0, 1, 1);
    jogo.set(0, 2, 1);
    assert.equal(jogo.linhaValida(0), false);
    assert.equal(jogo.validar(), false);
});

test('rejeita três valores iguais consecutivos em uma coluna', () => {
    const jogo = new SudokuBinario();
    jogo.set(0, 0, 0);
    jogo.set(1, 0, 0);
    jogo.set(2, 0, 0);
    assert.equal(jogo.colunaValida(0), false);
});

test('rejeita mais de três valores iguais em uma linha ou coluna', () => {
    const tabuleiro = Array.from({ length: 6 }, () => Array(6).fill(null));
    tabuleiro[0] = [0, 0, 0, 0, null, null];
    const jogoLinha = new SudokuBinario(tabuleiro);
    assert.equal(jogoLinha.linhaValida(0), false);

    const tabuleiroColuna = Array.from({ length: 6 }, () => Array(6).fill(null));
    for (let linha = 0; linha < 4; linha += 1) {
        tabuleiroColuna[linha][0] = 1;
    }
    const jogoColuna = new SudokuBinario(tabuleiroColuna);
    assert.equal(jogoColuna.colunaValida(0), false);
});

test('rejeita dimensões e valores iniciais fora do domínio', () => {
    assert.throws(() => new SudokuBinario([[0]]), /6 x 6/);
    const tabuleiro = Array.from({ length: 6 }, () => Array(6).fill(null));
    tabuleiro[0][0] = 2;
    assert.throws(() => new SudokuBinario(tabuleiro), /null, 0 ou 1/);
});

const { SudokuBinario } = require('../src/SudokuBinario');
const valido = [[0, 0, 1, 0, 1, 1], [0, 0, 1, 1, 0, 1], [1, 1, 0, 0, 1, 0], [0, 1, 0, 0, 1, 1], [1, 0, 1, 1, 0, 0], [1, 1, 0, 1, 0, 0]];
describe('Sudoku Binário 6 x 6', () => {
    test('cria tabuleiro 6 x 6', () => { const s = new SudokuBinario(); expect(s.tabuleiro).toHaveLength(6); expect(s.tabuleiro[0]).toHaveLength(6); });
    test('aceita somente 0 e 1', () => { const s = new SudokuBinario(); s.set(0, 0, 1); expect(s.tabuleiro[0][0]).toBe(1); expect(() => s.set(0, 1, 2)).toThrow('0 ou 1'); });
    test('cada linha e coluna possui no máximo três de cada valor', () => { const s = new SudokuBinario(valido); expect(s.validar()).toBe(true); });
    test('rejeita três valores iguais consecutivos', () => { const s = new SudokuBinario(); s.set(0, 0, 1); s.set(0, 1, 1); s.set(0, 2, 1); expect(s.linhaValida(0)).toBe(false); });
    test('identifica tabuleiro resolvido', () => { const s = new SudokuBinario(valido); expect(s.resolvido()).toBe(true); });
    test('rejeita posição inválida', () => { const s = new SudokuBinario(); expect(() => s.set(6, 0, 1)).toThrow('Posição inválida'); });
});

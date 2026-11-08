class SudokuBinario {
    constructor(tabuleiro = Array.from({ length: 6 }, () => Array(6).fill(null))) { if (tabuleiro.length !== 6 || tabuleiro.some(l => l.length !== 6)) throw new Error('O tabuleiro deve ser 6 x 6.'); this.tabuleiro = tabuleiro.map(l => [...l]); }
    set(linha, coluna, valor) { if (linha < 0 || linha >= 6 || coluna < 0 || coluna >= 6) throw new Error('Posição inválida.'); if (![0, 1].includes(valor)) throw new Error('O valor deve ser 0 ou 1.'); this.tabuleiro[linha][coluna] = valor; }
    linhaValida(linha) { const l = this.tabuleiro[linha]; return l.filter(v => v === 0).length <= 3 && l.filter(v => v === 1).length <= 3 && !this.temTripla(l); }
    colunaValida(coluna) { const c = this.tabuleiro.map(l => l[coluna]); return c.filter(v => v === 0).length <= 3 && c.filter(v => v === 1).length <= 3 && !this.temTripla(c); }
    temTripla(valores) { for (let i = 0; i < valores.length - 2; i++) if (valores[i] !== null && valores[i] === valores[i + 1] && valores[i] === valores[i + 2]) return true; return false; }
    completo() { return this.tabuleiro.every(l => l.every(v => v === 0 || v === 1)); }
    validar() { return this.tabuleiro.every((_, i) => this.linhaValida(i) && this.colunaValida(i)); }
    resolvido() { return this.completo() && this.validar() && new Set(this.tabuleiro.map(l => l.join(''))).size === 6 && new Set(this.tabuleiro[0].map((_, c) => this.tabuleiro.map(l => l[c]).join(''))).size === 6; }
}
module.exports = { SudokuBinario };

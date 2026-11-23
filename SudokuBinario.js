class SudokuBinario {
    constructor(tabuleiro = Array.from({ length: 6 }, () => Array(6).fill(null))) {
        if (!Array.isArray(tabuleiro) || tabuleiro.length !== 6) {
            throw new Error('O tabuleiro deve ser 6 x 6.');
        }
        for (const linha of tabuleiro) {
            if (!Array.isArray(linha) || linha.length !== 6) {
                throw new Error('O tabuleiro deve ser 6 x 6.');
            }
            for (const valor of linha) {
                if (valor !== null && valor !== 0 && valor !== 1) {
                    throw new Error('Cada casa deve ser null, 0 ou 1.');
                }
            }
        }
        this.tabuleiro = tabuleiro.map((linha) => [...linha]);
    }

    set(linha, coluna, valor) {
        if (
            !Number.isInteger(linha) ||
            !Number.isInteger(coluna) ||
            linha < 0 || linha >= 6 ||
            coluna < 0 || coluna >= 6
        ) {
            throw new Error('Posição inválida.');
        }
        if (valor !== 0 && valor !== 1) {
            throw new Error('O valor deve ser 0 ou 1.');
        }
        this.tabuleiro[linha][coluna] = valor;
    }

    linhaValida(linha) {
        if (!Number.isInteger(linha) || linha < 0 || linha >= 6) {
            return false;
        }
        const valores = this.tabuleiro[linha];
        return this.contagensValidas(valores) && !this.temTripla(valores);
    }

    colunaValida(coluna) {
        if (!Number.isInteger(coluna) || coluna < 0 || coluna >= 6) {
            return false;
        }
        const valores = this.tabuleiro.map((linha) => linha[coluna]);
        return this.contagensValidas(valores) && !this.temTripla(valores);
    }

    contagensValidas(valores) {
        return valores.filter((valor) => valor === 0).length <= 3 &&
            valores.filter((valor) => valor === 1).length <= 3;
    }

    temTripla(valores) {
        for (let indice = 0; indice < valores.length - 2; indice += 1) {
            const valor = valores[indice];
            if (
                valor !== null &&
                valor === valores[indice + 1] &&
                valor === valores[indice + 2]
            ) {
                return true;
            }
        }
        return false;
    }

    completo() {
        return this.tabuleiro.length === 6 &&
            this.tabuleiro.every((linha) =>
                Array.isArray(linha) &&
                linha.length === 6 &&
                linha.every((valor) => valor === 0 || valor === 1)
            );
    }

    validar() {
        if (!Array.isArray(this.tabuleiro) || this.tabuleiro.length !== 6) {
            return false;
        }
        for (const linha of this.tabuleiro) {
            if (!Array.isArray(linha) || linha.length !== 6) {
                return false;
            }
            if (linha.some((valor) => valor !== null && valor !== 0 && valor !== 1)) {
                return false;
            }
        }
        return this.tabuleiro.every((_, indice) =>
            this.linhaValida(indice) && this.colunaValida(indice)
        );
    }

    resolvido() {
        if (!this.completo() || !this.validar()) {
            return false;
        }
        const linhasUnicas = new Set(this.tabuleiro.map((linha) => linha.join(''))).size === 6;
        const colunas = this.tabuleiro[0].map((_, coluna) =>
            this.tabuleiro.map((linha) => linha[coluna]).join('')
        );
        return linhasUnicas && new Set(colunas).size === 6;
    }
}

module.exports = { SudokuBinario };

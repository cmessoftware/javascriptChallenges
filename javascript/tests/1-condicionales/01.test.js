const  { comparar, comparar2 } = require("../../ejercicios/1-condicionales/01.js");

describe('Comparar temperatura', function() {
    it('Comparar con cero', function() {
        expect(comparar(10)).toBe("Positivo");
        expect(comparar(0)).toBe("Cero");
        expect(comparar(-10)).toBe("Negativo");
        expect(comparar("AS")).toBe("Numero invalido");
    });
    it('Pasar numero a letras', function() {
        expect(comparar2(10)).toBe("Diez");
        expect(comparar2(0)).toBe("Cero");
        expect(comparar2(-10)).toBe("Menos diez");
        expect(comparar2("AS")).toBe("Numero no encontrado");
    })
});
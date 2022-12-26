const {rango} = require("../../ejercicios/1-condicionales/06.js");

describe('Numero en un rango dado.', function() {
    it('deberia mostrar que esta dentro del rango', function() {
        expect(rango(10,0,12)).toBe("Dentro del rango");
        expect(rango(12,0,14)).toBe("Dentro del rango");
        expect(rango(-9,-15,12)).toBe("Dentro del rango");
        expect(rango(10,9,12)).toBe("Dentro del rango");
        expect(rango(120,100,122)).toBe("Dentro del rango");
    });
    it('deberia mostrar que es Menor al minimo del rango', function() {
        expect(rango(-13,0,20)).toBe("Menor al minimo del rango");
        expect(rango(-110,0,102)).toBe("Menor al minimo del rango");
        expect(rango(-9,-1,10)).toBe("Menor al minimo del rango");
        expect(rango(34,44,332)).toBe("Menor al minimo del rango");
        expect(rango(44,56,100)).toBe("Menor al minimo del rango");
    });
    it('deberia mostrar que es Mayor al maximo del rango', function() {
        expect(rango(13,0,12)).toBe("Mayor al maximo del rango");
        expect(rango(110,0,102)).toBe("Mayor al maximo del rango");
        expect(rango(-9,-15,-12)).toBe("Mayor al maximo del rango");
        expect(rango(34,0,12)).toBe("Mayor al maximo del rango");
        expect(rango(44,0,42)).toBe("Mayor al maximo del rango");
    });
});
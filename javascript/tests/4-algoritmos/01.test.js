const  burbuja = require("../../ejercicios/4-algoritmos/01.js");

describe('Ordenamiento burbuja', function() {
    it('deberia mostrar a la lista de entrada ordenada', function() {
        expect(burbuja([5,4,1,3,2])).toBe([1,2,3,4,5]);
        expect(burbuja([5,4,1,3,22,-3,0,111,20,45])).toBe([-3,0,1,3,4,5,20,22,45,111]);
        expect(burbuja([15,42,10,-3,-22])).toBe([-22,-3,10,15,42]);
        expect(burbuja([14,44,12,3,-5,33,2])).toBe([-5,2,3,12,14,33,44]);
        expect(burbuja([23,-5,66,100,2,33,8])).toBe([-5,2,8,23,66,100]);
    });
});
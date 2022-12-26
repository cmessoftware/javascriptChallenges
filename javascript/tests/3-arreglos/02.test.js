const promedio = require("../../ejercicios/3-arreglos/02.js");

describe('Promedio', function() {
    it('deberia mostrar el promedios', function() {
        expect(promedio([5,4,1,3,2])).toBe(3);
        expect(promedio([5,4,1,3,22,-3,0,111,20,45])).toBe(20.8);
        expect(promedio([15,42,10,-3,-22])).toBe(8.4);
        expect(promedio([14,44,12,3,-5,33,2])).toBe(14.714285714285714);
        expect(promedio([23,-5,66,100,2,33,8])).toBe(32.42857142857143);
    });
});
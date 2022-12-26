const nplicados = require("../../ejercicios/3-arreglos/03.js");

describe('Mostrar nplicados', function() {
    it('deberia mostrar los nplicados', function() {
        expect(nplicados([5,4,1,3,22,3,0,11,20,45,20])).toStrictEqual(["1:5","1:4","1:1","2:3","1:22","1:0","1:11","2:20","1:45"].sort());
        expect(nplicados([5,4,1,3,2,1])).toStrictEqual(["1:2", "1:3", "1:4", "1:5", "2:1"].sort());
        expect(nplicados([15,42,10,-3,-22,15,-22])).toStrictEqual(["2:15","1:42","1:10","1:-3","2:-22"].sort());
        expect(nplicados([14,44,12,3,-5,33,2,2,2,2,14])).toStrictEqual(["2:14","1:44","1:12","1:3","1:-5","1:33","4:2"].sort());
        expect(nplicados([23,2,-5,66,100,2,33,8,9,10,9])).toStrictEqual(["1:23","1:-5","1:66","1:100","2:2","1:33","1:8","2:9","1:10"].sort());
    });
});
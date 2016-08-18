// Definir variables
var test = require('unit.js')
var objeto = {
  mensaje: 'No hay clases'
, curso: 301
}
num = 72
cad = 'Xcode 11 Apple'
var func = require('./taller.js')

// Realizar pruebas
describe('Aprendiendo mediante el taller', function() {
  it('La cadena "cad" contiene la palabra "Apple"', function() {
    test
      .string(cad)
      .contains('Apple'); // Test 1
  });

  it('La entrada "false" tiene salida "100"', function() {
    test
      .number(func(false))
      .is(100); // Test 2
  });

  it('El objeto "objeto" tiene la propiedad "curso"', function() {
    test
      .object(objeto)
      .hasProperty('curso'); // Test 3
  });

  it('El objeto "objeto" tiene la propiedad "mensaje" con valor "No hay clases"', function() {
    test
      .object(objeto)
      .hasProperty('mensaje', 'No hay clases'); // Test 4
  });

  it('La cadena "cad" empieza con "Xcode"', function() {
    test
      .string(cad)
      .startsWith('Xcode'); // Test 5
  });

  it('Número "num" tiene el valor "72"', function() {
    test
      .number(num)
      .is(72); // Test 6
  });

  it('La entrada con valor "50" tiene salida "true"', function() {
    test
      .bool(func(50))
      .isTrue(); // Test 7
  });

  it('La entrada con valor "prueba" tiene salida "4"', function() {
    test
      .number(func("prueba"))
      .is(4); // Test 8
  });

  it('La entrada con el valor "true" tiene salida "false"', function() {
    test
      .bool(func(true))
      .isNotTrue(); // Test 9
  });

  it('La entrada con la función "function(){}" tiene salida "OK"', function() {
    test
      .string(func(function(){}))
      .is('OK'); // Test 10
  });

  it('La entrada con valor "make clean" tiene salida "All done"', function() {
    test
      .string(func("make clean"))
      .is('All done'); // Test 11
  });

  it('La entrada con valor "-50" tiene salida "50"', function() {
    test
      .number(func(-50))
      .is(50); // Test 12
  });

  it('Problema con entrada "{a: 4}" tiene salida "10"', function() {
    test
      .number(func({a: 4}))
      .is(10); // Test 13
  });

  it('La cadena "cad" no es "Xcode Apple" "Xcode"', function() {
    test
      .string(cad)
      .isNot('Xcode Apple'); // Test 14
  });
        
});

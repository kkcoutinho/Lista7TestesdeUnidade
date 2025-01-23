const funcoes = require('../src/funcoes')
//Arrange - configura:
const massa = require('..//fixtures/massa')

test.each(massa.array.map(bloco => [
    bloco.base,
    bloco.altura,
    bloco.esperado]))
    ('multiplicar %f * %f com massa', (base, altura, esperado) => {
       //Executa
       const  resultadoObtido = funcoes.areaParalelograma(base, altura)
       // Valida
       expect(resultadoObtido).toBe(esperado)
    })

const funcoes = require('../src/funcoes')
//Arrange - configura:
test('testeQuadrado', () => {
    const lado1 = 8
    const lado2 = 8
    const resultadoEsperado = 64
//Act - Executa:
    const resultadoObtido = funcoes.areaQuadrado(lado1, lado2)
//Assert - Valida:
expect(resultadoObtido).toBe(resultadoEsperado)
})

//5 Testes Paralelograma:
//Prepara - Configura:
test('paralelograma1', () => {
    const base = 5
    const altura = 8
    const resultadoEsperado = 40
// Act - Executa:
    const resultadoObtido = funcoes.areaParalelograma(base, altura)
// Assert - Valida
    expect(resultadoObtido).toBe(resultadoEsperado)
})

//Prepara - Configura:
test('paralelograma2', () => {
    const base = 6
    const altura = 3
    const resultadoEsperado = 18
// Act - Executa:
    const resultadoObtido = funcoes.areaParalelograma(base, altura)
// Assert - Valida
    expect(resultadoObtido).toBe(resultadoEsperado)
})

//Prepara - Configura:
test('paralelograma3', () => {
    const base = 7
    const altura = 4
    const resultadoEsperado = 28
// Act - Executa:
    const resultadoObtido = funcoes.areaParalelograma(base, altura)
// Assert - Valida
    expect(resultadoObtido).toBe(resultadoEsperado)
})

//Prepara - Configura:
test('paralelograma4', () => {
    const base = 9
    const altura = 4
    const resultadoEsperado = 36
// Act - Executa:
    const resultadoObtido = funcoes.areaParalelograma(base, altura)
// Assert - Valida
    expect(resultadoObtido).toBe(resultadoEsperado)
})

//Prepara - Configura:
test('paralelograma5', () => {
    const base = 7
    const altura = 7
    const resultadoEsperado = 49
// Act - Executa:
    const resultadoObtido = funcoes.areaParalelograma(base, altura)
// Assert - Valida
    expect(resultadoObtido).toBe(resultadoEsperado)
})
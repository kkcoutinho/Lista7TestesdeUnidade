const funcoes = require('../src/funcoes')
//Arrange - configura:
test('testeTriangulo', () => {
    const base = 8
    const altura = 8
    const resultadoEsperado = 32
//Act - Executa:
    const resultadoObtido = funcoes.areaTriangulo(base, altura)
//Assert - Valida:
expect(resultadoObtido).toBe(resultadoEsperado)
})

//5 Testes Triangulo:
//Prepara - Configura:
test('triangulo1', () => {
    const base = 5
    const altura = 8
    const resultadoEsperado = 20
// Act - Executa:
    const resultadoObtido = funcoes.areaTriangulo(base, altura) 
// Assert - Valida
    expect(resultadoObtido).toBe(resultadoEsperado)
})

//Prepara - Configura:
test('Triangulo2', () => {
    const base = 6
    const altura = 3
    const resultadoEsperado = 9
// Act - Executa:
    const resultadoObtido = funcoes.areaTriangulo(base, altura) 
// Assert - Valida
    expect(resultadoObtido).toBe(resultadoEsperado)
})

//Prepara - Configura:
test('Triangulo3', () => {
    const base = 7
    const altura = 4
    const resultadoEsperado = 14
// Act - Executa:
    const resultadoObtido = funcoes.areaTriangulo(base, altura) 
// Assert - Valida
    expect(resultadoObtido).toBe(resultadoEsperado)
})

//Prepara - Configura:
test('Triangulo4', () => {
    const base = 9
    const altura = 4
    const resultadoEsperado = 18
// Act - Executa:
    const resultadoObtido = funcoes.areaTriangulo(base, altura) 
// Assert - Valida
    expect(resultadoObtido).toBe(resultadoEsperado)
})

//Prepara - Configura:
test('Triangulo5', () => {
    const base = 7
    const altura = 7
    const resultadoEsperado = 24.5
// Act - Executa:
    const resultadoObtido = funcoes.areaTriangulo(base, altura) 
// Assert - Valida
    expect(resultadoObtido).toBe(resultadoEsperado)
})
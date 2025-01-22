const funcoes = require('../src/funcoes')
//Arrange - configura:
const massa = require('..//fixtures/massaTriangulo')

// Teste da área do triângulo
test('testeTrianguloMassa', () => {
  const base = 8;
  const altura = 8;
  const resultadoEsperado = 32;

  const resultadoObtido = funcoes.areaTriangulo(base, altura);

  expect(resultadoObtido).toBe(resultadoEsperado);
});

// Testes com dados do arquivo JSON
const dadosTriangulos = obterDados();

dadosTriangulos.forEach((dado, index) => {
  test(`Triangulo ${index + 1}`, () => {
    const { base, altura, resultadoEsperado } = dado;

    const resultadoObtido = funcoes.areaTriangulo(base, altura);

    expect(resultadoObtido).toBe(resultadoEsperado);
  });
});

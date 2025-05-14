# 🧪 Testes de Unidade - Cálculo de Áreas

Este repositório contém um conjunto de testes unitários automatizados para funções matemáticas de cálculo de áreas, utilizando **Jest**. 
Os testes validam diferentes cenários com **massas de dados estruturadas** em arrays e arquivos JSON, garantindo cobertura ampla e confiabilidade nos resultados.

## 📌 Funcionalidades

- **Cálculo da área de um quadrado** 
✅ Teste unitário simples.
- **Cálculo da área de um paralelogramo** 
✅ Teste com massa de dados em array.
- **Cálculo da área de um triângulo** 
✅ Teste com massa de dados em formato JSON.

## 🚀 Estrutura do Projeto

📂 **Projeto**
- 📁 `__tests__`
  - 📄 `massaParalelograma.spec.js` ➝ Teste parametrizado para paralelogramo.
  - 📄 `massaTriangulo.spec.js` ➝ Teste unitário para triângulo.
  - 📄 `testeParalelogramaMassa.spec.js` ➝ Teste com massa de dados do paralelogramo.
  - 📄 `testeQuadrado.spec.js` ➝ Teste simples para cálculo de quadrado.
  - 📄 `testeTrianguloMassa.spec.js` ➝ Teste usando massa de dados para triângulo.
- 📁 `fixtures`
  - 📄 `massa.js` ➝ Arquivo de massa de dados para paralelogramo.
  - 📄 `massaTriangulo.js` ➝ Arquivo de massa de dados para triângulo.

## 🛠 Tecnologias Utilizadas
- **JavaScript** 🚀
- **Jest** para testes automatizados
- **Node.js** como ambiente de execução

## 🔥 Como Executar os Testes
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute os testes:
   ```bash
   npm test
   ```

## 📖 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para explorar e contribuir!

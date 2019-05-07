# Validador de Cartão de crédito
**A biblioteca é utilizada para validar números de Cartões de Crédito**. A atual versão não aceita letras, caracteres especiais, mais ou menos que 16 dígitos.

## Como instalar

Para instalar, digite o comando a seguir no terminal.
> $  npm install card-validator-evm

## Como utilizar

Para utilizar a biblioteca, digite o comando a seguir no terminal.
> const validator = require('card-validator-evm');
> 
> console.log(validator.cardValidator('4556155664231703'))
> 
> // returns "true"

## Roadmap

Versão 2.0.0 (sem previsão, aceita-se contribuições)
- implementação para gerar números de Cartões de Crédito válidos.
- implementação para verificar qual a operadora do cartão (Visa, Mastercard, American Express, etc)

Versão 1.0.0
- funcionalidades: verifica se número do cartão de crédito é válido. Não aceita letras ou caracteres especiais. Não aceita dígitos iguais. Também não aceita cartões com mais ou menos que 16 dígitos.
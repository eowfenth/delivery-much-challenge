# Delivery Much Challenge ![License | GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

<div align="center">Code for Back-end Challenge</div>

### O que é este projeto?

Este projeto é código referente ao desafio da Delivery Much para posição de back-end. O desafio envolve integrar diretamente a API do RecipePuppy, uma api aberta para obter receitas baseadas em ingredientes. Você pode saber mais sobre o desafio e como é esperada a utilização deste projeto [aqui](https://github.com/delivery-much/challenge);

### O que este projeto utiliza?

Este projeto foi montado utilizando `Typescript`, `Koa` e `Axios`. Os testes foram feitos com `Jest`.

### Como instalar e rodar

Para instalar, basta digitar no seu terminal `npm ci`.

#### Variáveis de Ambiente

Existem variáveis de ambiente que você precisa preencher. Acesse o arquivo `.env-example`, renomeie-o para `.env` e preencha as variáveis.

-   A variável `GIPHY_API_KEY` é necessária e você pode obtê-la [aqui](https://developers.giphy.com/docs/api).
-   A variável `PORT` é opcional e possui valor padrão como `8081`;

#### Rodando...

Caso queira rodar sem a utilização de docker, você pode fazer de duas formas:

1. A primeira é utilizando o `ts-node` sem necessidade de compilar os arquivos `.ts`.

Para isso, rode:
`npm run start`

2. A segunda opção é buildando o projeto. Para isso:

-   Build o projeto com `npm run build`
-   Rode o projeto com `npm run start:build`

### Como instalar e rodar usando Docker

-   Build seu projeto utilizando `npm build`
-   Depois, monte sua imagem docker com `docker build -t nome_da_imagem .`
-   Uma vez montada, rode-a utilizando `docker run -p 8081:8081 nome_da_imagem`

### Uso

Agora que você já está rodando este projeto, você pode fazer requisições utilizando seu navegador ou algum cliente http. Um exemplo caso você tenha rodado o projeto com as configurações padrão:

```
    http://localhost:8081/recipes?i=onion,galic
```

Isso é o suficiente para você receber as receitas que possuem alguns desses ingredientes.

A API possui apenas um endpoint que respeita a seguinte ordem:

`http://{HOST}/recipes/?i={ingredient_1},{ingredient_2}`

### Licença

Este projeto está sob licença `GPL-3`. Leia o arquivo `licence` para saber mais.

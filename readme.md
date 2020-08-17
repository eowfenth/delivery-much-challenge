# Delivery Much Challenge ![License | GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

<div align="center">Code for Back-end Challenge</div>

### O que este projeto utiliza?

Este projeto foi montado utilizando `Typescript`, `Koa` e `Axios`. Os testes foram feitos com `Jest`.

### Como instalar e rodar

Caso queira rodar sem a utilização de docker, você pode fazer de duas formas:

1. A primeira é utilizando o `ts-node` sem necessidade de compilar os arquivos `.ts`.

Para isso, rode:
    `npm run start`

2. A segunda opção é buildando o projeto. Para isso:
    
- Build o projeto com `npm run build`
- Rode o projeto com `npm run start:build`

### Como instalar e rodar usando Docker

- Build seu projeto utilizando `npm build`
- Depois, monte sua imagem docker com `docker build -t nome_da_imagem .`
- Uma vez montada, rode-a utilizando `docker run -p 8081:8081 nome_da_imagem`

### Licença

Este projeto está sob licença [GPL-3]. Leia o arquivo `licence` para saber mais.
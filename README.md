<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Description

api developed to target sales growth for small and medium companies, cataloging their products and generating orders, contributing to the scale of our customers' sales.

## resources used

- Framework - [Nestjs](https://docs.nestjs.com/)
- Documentation - [Swagger](https://swagger.io/)
- data base - [Mongodb Atlas](https://account.mongodb.com/account/login?n=%2Fv2%2F5faa0b201b04bd4fcbc03819%23metrics%2FreplicaSet%2F619993c28328920008270a56%2Fexplorer%2Fumbler%2Fproducts%2Ffind)
- ORM - [Mongoose](https://mongoosejs.com/)
- Validations - [Class validator](https://github.com/typestack/class-validator)
- Containers - [Docker](https://www.docker.com/)
- typing - [Typescript](https://www.typescriptlang.org/)
- package manager - [yarn](https://yarnpkg.com/)
- UX/UI - [Catalog Umbler](https://xd.adobe.com/view/7a57c282-fd52-4d1e-b5a1-586df2dad90a-2f04/screen/2bd2986b-b223-42fd-a3fa-5853515250b2/)

## Installation

```bash
$ yarn install
```

## Docker

```bash
# run build
$ docker build -t catalog-app .

# Starting an application container
$ docker run catalog-app
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ npm run start:dev

# production mode
$ yarn start:prod
```



## Stay in touch

- linkedin - [Lucas Carvalho](https://www.linkedin.com/in/lucas-carvalho-b465071b3/)
- instagram - [@ilucaas3](https://www.instagram.com/ilucaas3/)

## Observation
- unitary tests - The development of unit tests was not implemented due to limited time. however, the entire project is prepared to receive test implementations.

- Websockets - The connection with web sockets had its server configured, however the correction test was not possible due to limited time, the socket.emit and socket.on functions are not the way they should be, but to test two endpoints were developed that serve to return a query by its id and all queries by the user id.

- The challenge - The application is a simple catalog of products from a store where you just have to list, add, remove
and edit the products in the cart, allowing you to complete the order.
However, some features were needed to take full advantage of the api.

- technical knowledge - The knowledge in using the nestjs framework was acquired during the development process.

## about Nestjs

- Organização de código e Typescript  
- Modularidade e Injeção de dependências
- ORMs maduros e suporte a SQL e MongoDB
- Similaridade com outros frameworks consagrados

## License

catalog app is [UNLICENSED](LICENSE).
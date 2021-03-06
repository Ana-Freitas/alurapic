# Project AluraPic

> É um projeto básico apenas para aprendizado sobre as principais funcionalidade e conceitos do Vue.js. Esse projeto consiste em uma SPA (Single Page Application), em que realizamos um CRUD de imagens, uma galeria básica. Abaixo estão os conceitos e funcionalidades abordados no curso.

## Infraestrutura
-------------
* Node.js (6.x) que pode ser baixado em: https://nodejs.org/
  * A utilizada nesse projeto foi  6.17.1. Para ver a versão em seu terminal execute `node -v`
* Editor de Código

## Clonando e Executando Projeto
  
* Copie a url do repositório e no seu terminal execute `git clone https://github.com/Ana-Freitas/alurapic.git`
* Ainda no terminal, dentro da pasta do projeto, rode `npm install` para instalar as dependencias. Esse comando irá gerar a pasta node_modules
    * Execute também esse comando dentro da pasta da api e do server (este não é obrigatório). Se quiser pode isolar eles em outro diretório, pois ambos são projetos à parte, fornecido pelo Alura porém também foram utilizado no AluraPic.
* Para executar o projeto, dentro da pasta da api, execute no terminal `npm start` e dentro do projeto execute `npm run dev`. Abrirá em localhost:8080, caso a porta não esteja ocupada.

## Aprendizado
  * Iniciar um projeto, vue-cli e comandos
  * SPA
  * Estrutura de projeto
  * Interpolação e Data Binding
  * Componentes
  * Diretivas (v-for, v-bind, v-on, v-model, v-if e v-else, v-show) 
  * VueResource
  * Lifecycle Hooks
  * Http e Promisses
  * Consumir API e Padrão REST
  * Shared Component
  * Estados (data, computed, props)
  * Rotas
  * Modelo e Service
  * VeeValidate
  * Distruibuição de projeto
  * Code spliting e lazy loading
  * Importando arquivos (bootstrap, css, js)

## Referência
  #### https://www.alura.com.br/

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

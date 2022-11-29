# Instruções Gerais:

## Executar o projeto:
```
npm run serve
```

## Configuração conexão com o backend:
src/main.js
- passar a rota de acordo com a porta que seu backend está rodando
Exemplo:
```
https://8080-dhbarboza-springlab-rktl4470q54.ws-us77.gitpod.io
```

## Configuração das rotas:
src/router/index.js
Na propriedade 'path' em tenho o nome da rota

## Váriaveis e métodos globais:
src/store/index.js

## Criação e configuração das páginas:
src/views/pagina.vue

## 1 - Adiciono uma nova pagina:
src/views/nomePagina.vue

## 2 - Adicionar página no AppView.vue
src/views/AppView.vue
- Configuras os métodos (GET)

## 3 - Adicionar a rota no Router
src/router/index.js
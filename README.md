<p align="center"><img src="frontend/src/assets/heroes.png" width="50%"/></p>

<h1 align="center">Be The Hero</h1>
<p align="center">Projeto desenvolvido durante a <i>Semana OmniStack 11, da RocketSeat</i></p>


## Sobre o projeto

O *Be The Hero* é um sistema com o objetivo de ajudar ONGs a cadastrarem e, através do apoio social de pessoas com acesso ao aplicativo, angariarem recursos para casos relacionados a área de atuação destas.

**Para ONGs**

ONGs podem se registrar e registrar seus casos através do site. Cada caso possui o detalhamento e recursos que precisam de apoio, incluindo custos.

**Para os heróis (pessoas que querem ajudar)**

Qualquer pessoa com acesso ao aplicativo pode visualizar os casos registrados pela ONG e, caso tenha interesse em ajudar, pode entrar em contato com estas através de e-mail ou whatsapp, disponíveis na tela de detalhes de cada caso.

> *Este projeto pode ser parametrizado e ajustado para outros tipos de organizações, assim como adaptado em termos de design, fluxo e funcionalidades.*

## Stack (javascript)

- **Backend**: Desenvolvido em Node com Express, SQLite e Knex
- **Frontend**: Desenvolvido em React, com Axios, React Router Dom e libs auxiliares
- **Mobile**: Desenvolvido em React Native & Expo, com Axios, React Navigation e libs auxiliares

## Para executar o projeto
```
cd backend
yarn start

cd frontend
yarn start

cd mobile 
yarn start

```
> Obs.: caso esteja executando o projeto mobile em seu dispositivo físico, insira o IP da máquina ou servidor em que o backend está sendo executado, no arquivo `mobile/src/services/api.js` 

## Algumas *notas* sobre o projeto

### Start & Backend
- github.com/facebook/create-react-app
- express
- nodemon
- express router
- sqlite
- insomnia.rest/
- knexjs.org/
- routes
- controllers
- database
- migrations
- migrations -> directory
- knex.schema.createTable
- npx knex migrate:create nomeDMigration
- npx knex migrate:latest
- async / await
- request.params
- request.query
- request.headers.authorization
- response.header
- crypto
- connection / offset / limit / join / count
- Insomnia


### Frontend Web - React
- axios
- assets
- routes
- useState (react)
- useHistory (react-router-dom)
- BrowserRouter, Route, Switch (react-router-dom)
- react-router-dom
- react-icons/fi
- Feather Icons
- FiArrowLeft
- Link (react-router-dom)
- e.preventDefault()
- localStorage
- history.push()
- alert()
- Conceitos: jsx, propriedades, estado, imutabilidade
- Fira Code
- template strings
- arrow functions
- async / await functions
- Intl para formatação de inputs monetários
- mvc
- muito css
- flexbox
- Google Fonts
- transition / filter / justify-content
- desestruturação de objetos javascript

### Frontend Mobile - React Native
- Expo
- npm install -g expo-cli
- expo init, blank
- react-navigation
- intl
- react-dom
- useNavigation (react-navigation/native)
- useRoute
- useEffect, useState (react)
- Linking (whatsapp) e MailComposer
- View, Text, TouchableOpacity, FlatList
- Constants (expo-contants)
- StyleSheet, StyleSheet.create
- createStackNavigator (react-navigation/stack)


------------


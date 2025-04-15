# JovemManny-Consumo-de-APIs-REST-em-Desenvolvimento-Mobile

# Consumo-de-APIs-REST-em-Desenvolvimento-Mobile
# Trabalho do Jacques
# App de Previsão do Tempo

Este é um aplicativo mobile de **previsão do tempo** desenvolvido com **React Native**, **Expo** e **TypeScript**, usando **expo-router** para navegação entre telas. O app consome dados da **API OpenWeatherMap** para exibir a previsão atual de qualquer cidade do mundo.

---
# Tecnologias Utilizadas
React Native Framework para desenvolvimento de apps mobile com JavaScript/TypeScript

Expo – Ferramenta que facilita o desenvolvimento com React Native, fornecendo recursos prontos como build, debug e emulador

TypeScript Superset do JavaScript que adiciona tipagem estática ao código

expo-router Sistema de navegação baseado em rotas de arquivos, facilita a criação de navegação com tabs, drawer e modais

OpenWeatherMap API API pública utilizada para buscar informações climáticas de cidades do mundo

React Navigation (via expo-router) Utilizado para navegação por abas (tabs) e menu lateral (drawer)

Componentes personalizados O app utiliza botões, containers e ícones customizados criados em arquivos próprios dentro da pasta components


## Funcionalidades

- Tela de boas-vindas com introdução do app
- Busca por nome de cidade
- Exibição do clima atual com:
  - Temperatura
  - Descrição do clima
  - Nome formatado da cidade e país
  - Ícone representando o tipo de clima
- Estilização moderna com efeitos de sombra e cores suaves roxa
- Navegação com abas e drawer

---

## Estrutura de Pastas
.

expo Arquivos de configuração interna do Expo (gerado automaticamente)

app Diretório principal usado pelo expo-router para navegação entre telas

drawer layout e telas associadas ao menu lateral (drawer navigation)

tabs    Layout e telas da navegação por abas (tab navigation)

layout.tsx   Define a estrutura visual das abas (ícones, rotas, etc)

index.tsx       Tela inicial de boas-vindas

 weather.tsx     Tela principal onde mostra a previsão do tempo

_layout.tsx     Layout global do app (envolve drawer e tabs)

 +html.tsx      Arquivo opcional para renderizar conteúdo web (pouco usado)
 
+not-found.tsx  Tela exibida quando uma rota não é encontrada

modal.tsx tela do tipo modal (janela flutuante)

assets

images ícones e imagens usadas para representar condições climáticas (nuvens, chuva, etc)

app.tsx lógica e layout da tela de clima (onde busca os dados da API)

Button.tsx botão customizado

Container.tsx componente de layout visual

EditScreenInfo.tsx, HeaderButton.tsx, ScreenContent.tsx, TabBarIcon.tsx componentes auxiliares usados em diferentes partes do app

styles

styles.tsx onde ficam definidos os estilos reutilizáveis

node_modules

app.json
Arquivo de configuração do projeto Expo, define nome, ícone, splash, entre outros

gitignore
Lista de arquivos e pastas que o Git deve ignorar (como node_modules)

babel.config.js, metro.config.js
Arquivos de configuração do compilador (Babel) e do empacotador (Metro)

app-env.d.ts, expo-env.d.ts
Arquivos com definições de tipos para TypeScript

global.css
Usado em alguns projetos para estilos globais (não é muito comum em React Native)

# Requisitos para fazer rodar
Entrar no CMD

Entrar na pasta onde você abaixou 

Colocar o nome e dar enter 

Ao achar a pasta tem que fazer o seguinte código, npm i

Quando fizer este código e instalar o comando npm i

Tem que executar o comando de npm run web para ver como está o app

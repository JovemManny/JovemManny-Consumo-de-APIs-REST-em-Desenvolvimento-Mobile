<<<<<<< HEAD
# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.
=======
# 📱 Pokédex App - Consumo de APIs REST em Desenvolvimento Mobile

Projeto desenvolvido por **Jacques** como parte do trabalho de **Consumo de APIs REST em Desenvolvimento Mobile**, utilizando tecnologias modernas como React Native, Expo e TypeScript.

---

## 🧠 Sobre o Projeto

Este aplicativo mobile exibe informações detalhadas sobre Pokémon usando a [PokeAPI](https://pokeapi.co/). Você pode:

- Visualizar os primeiros Pokémon ao abrir o app
- Buscar um Pokémon pelo nome
- Ver sua imagem, tipo, altura, peso e habilidades
- Carregar uma lista maior com o botão **"Ver Todos os Pokémon"**

---

## 🚀 Tecnologias Utilizadas

- **React Native** – Framework para desenvolvimento mobile
- **Expo** – Ferramenta para facilitar builds e testes
- **TypeScript** – Tipagem estática no JavaScript
- **expo-router** – Navegação baseada em arquivos
- **Axios** – Para fazer requisições à API
- **PokeAPI** – API pública com dados completos da Pokédex

---

## ✨ Funcionalidades

- ✅ Tela inicial com botão de entrada
- 🔍 Campo de busca por nome do Pokémon
- 📋 Lista inicial com 20 Pokémon (nome + imagem)
- 🎯 Exibição detalhada de cada Pokémon:
  - Nome
  - Sprite (imagem)
  - Tipos
  - Altura, peso
  - Habilidades
- 📦 Botão para **Ver Todos os Pokémon** (até 100)
- 💅 Interface leve, colorida e inspirada no tema Pokémon

---

## 📁 Estrutura de Pastas

projeto-pokedex/
├── app/
│   ├── index.tsx           # Tela inicial
│   ├── pokemon.tsx         # Tela principal (lista + busca)
│   ├── _layout.tsx         # Layout global
│   └── +not-found.tsx      # Página de erro (404)
│
├── components/
│   ├── Button.tsx          # Botão customizado
│   └── PokeCard.tsx        # Card de exibição do Pokémon
│
├── styles/
│   └── styles.tsx          # Estilos globais reutilizáveis
│
├── assets/
│   └── images/             # (Opcional) Imagens customizadas ou sprites locais
│
├── app.json                # Configuração do projeto Expo
├── package.json            # Dependências e scripts npm
├── tsconfig.json           # Configuração do TypeScript
├── babel.config.js         # Configuração do Babel
├── metro.config.js         # Configuração do Metro Bundler


---

## ▶️ Como Executar

```bash
# 1. Instalar dependências
npm install

# 2. Rodar o app no navegador
npm run web

# ou rodar no Expo Go
npm start
>>>>>>> e3b12d62596322c03c1b436d3c80dcea9b153a59

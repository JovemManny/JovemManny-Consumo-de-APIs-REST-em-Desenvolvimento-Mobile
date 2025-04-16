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

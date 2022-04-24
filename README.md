# Automatização de abertura de tickets no GLPI 🤖
Aplicação feita com intuito de estudar a criação de um crawler (robô) que fazr abertura de tickes no GLPI (pensando no contexto da empresa onde trabalho atualmente e facilitar a vida dos técnicos do setor de suporte).

## Tecnologias Utilizadas

- Nodes Js
- Puppeteer
- Dotenv

## Como Utilizar:
- Fazer o clone da aplicação
- executar o comando: ``` npm i ```
- configurar o usuário e senha de acordo com o ``` .env.example ```
- Informar o campos de categoria, requerente, título, descrição e solução do chamado de acordo com o exemplo: 
```
let category = "teste";
let applicant = "normal";
let title = "Title Test";
let description = "Description Test";
let solution = "Solution Test";
```
- Executar o comando ``` npm run dev ``` para iniciar a aplicação 🚀
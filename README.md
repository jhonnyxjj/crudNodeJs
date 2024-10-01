# User Management API

Este projeto é uma API simples de gerenciamento de usuários desenvolvida com **Node.js**. A API utiliza módulos nativos, como `http` e `url`, para fornecer funcionalidades básicas de CRUD (Criar, Ler, Atualizar e Deletar) para usuários.

## Tecnologias Utilizadas

- **Node.js**: Uma plataforma JavaScript do lado do servidor, que permite a construção de aplicações escaláveis e de alto desempenho.
- **Módulos Nativos**: Utilização dos módulos `http` e `url` do Node.js para manipulação de requisições HTTP e parsing de URLs.

## Funcionalidades

A API oferece as seguintes operações:

- **Listar Usuários**: Permite a recuperação de uma lista de usuários existentes.
- **Criar Usuário**: Possibilita a adição de um novo usuário à lista.
- **Atualizar Usuário**: Permite a modificação das informações de um usuário específico.
- **Deletar Usuário**: Facilita a remoção de um usuário da lista.

## Estrutura do Projeto

O projeto é organizado de forma a separar as responsabilidades, com um módulo principal que gerencia as requisições e um serviço dedicado que lida com as operações relacionadas aos usuários.

## Como Executar

Para executar a API, basta clonar o repositório, instalar as dependências (se houver) e iniciar o servidor. A API escuta na porta 3000 por padrão.


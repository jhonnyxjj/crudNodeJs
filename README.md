# User Management API

Este projeto implementa uma API simples de gerenciamento de usuários utilizando Node.js e módulos nativos, como `http` e `url`. A API permite listar, criar, atualizar e deletar usuários.

## Funcionalidades

- **Listar Usuários**: Retorna uma lista de usuários.
- **Criar Usuário**: Adiciona um novo usuário.
- **Atualizar Usuário**: Atualiza as informações de um usuário existente.
- **Deletar Usuário**: Remove um usuário existente.

## Estrutura do Código

### Servidor HTTP

O servidor HTTP é criado utilizando o módulo nativo `http` do Node.js. Ele escuta requisições HTTP na porta 3000 e roteia as requisições com base no método HTTP (GET, POST, PUT, DELETE) e no caminho (`/users`).

```javascript
const http = require('http');
const url = require('url');
const { listUsers, createUser, updateUser, deleteUser } = require('../services/userService');


Aqui está a explicação completa do código em Markdown:

markdown
Copiar código
# User Management API

Este projeto implementa uma API simples de gerenciamento de usuários utilizando Node.js e módulos nativos, como `http` e `url`. A API permite listar, criar, atualizar e deletar usuários.

## Funcionalidades

- **Listar Usuários**: Retorna uma lista de usuários.
- **Criar Usuário**: Adiciona um novo usuário.
- **Atualizar Usuário**: Atualiza as informações de um usuário existente.
- **Deletar Usuário**: Remove um usuário existente.

## Estrutura do Código

### Servidor HTTP

O servidor HTTP é criado utilizando o módulo nativo `http` do Node.js. Ele escuta requisições HTTP na porta 3000 e roteia as requisições com base no método HTTP (GET, POST, PUT, DELETE) e no caminho (`/users`).

```javascript
const http = require('http');
const url = require('url');
const { listUsers, createUser, updateUser, deleteUser } = require('../services/userService');
Aqui utilizamos o http para criar o servidor e o url para manipular a URL das requisições. As funções para manipular os usuários (listUsers, createUser, updateUser, deleteUser) são importadas de um serviço externo (userService).

Roteamento de Requisições
Dentro do callback http.createServer, o código trata as diferentes rotas e métodos HTTP para gerenciar os usuários.


Listar Usuários (GET /users)
if (req.method === 'GET' && pathname === '/users') {
    return listUsers(req, res);
}

Este bloco de código verifica se o método HTTP é GET e se a rota acessada é /users. Caso seja, a função listUsers é chamada para retornar a lista de usuários.

Criar Usuário (POST /users)
if (req.method === 'POST' && pathname === '/users')

Aqui, a API verifica se o método HTTP é POST e se a rota é /users. A função createUser é chamada para processar os dados enviados no corpo da requisição e criar um novo usuário.

Atualizar Usuário (PUT /users/
)
if (req.method === 'PUT' && pathname.startsWith('/users/')) {
    return updateUser(req, res, pathname);
}

Neste trecho, a API trata a atualização de usuários. O método HTTP PUT é utilizado, e a função updateUser é chamada para modificar os dados de um usuário específico, cujo id é extraído do caminho.

Deletar Usuário (DELETE /users/
)
if (req.method === 'DELETE' && pathname.startsWith('/users/')) {
    return deleteUser(req, res, pathname);
}

Este bloco de código lida com a remoção de usuários. A função deleteUser é chamada para remover um usuário com base no id fornecido na URL.

Funções do Serviço de Usuários
O serviço de usuários implementa quatro funções principais:

listUsers: Retorna todos os usuários no formato JSON.

const listUsers = (res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
};

createUser: Lê o corpo da requisição, adiciona um novo usuário ao array users e retorna uma resposta com status 201.

const createUser = (req, res) => {
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        try {
            const newUser = JSON.parse(body);
            users.push(newUser);
            res.statusCode = 201;
            res.end('User created');
        } catch (error) {
            res.statusCode = 400;
            res.end('Invalid JSON');
        }
    });
};

updateUser: Atualiza um usuário específico com base no id.

const updateUser = (req, res, pathname) => {
    const id = pathname.split('/')[2];
    let body = '';
    req.on('data', chunk => {
        body += chunk.toString();
    });
    req.on('end', () => {
        const updatedUser = JSON.parse(body);
        const index = users.findIndex(user => user.id === id);
        if (index !== -1) {
            users[index] = updatedUser;
            res.statusCode = 200;
            res.end('User updated');
        } else {
            res.statusCode = 404;
            res.end('User not found');
        }
    });
};

deleteUser: Remove um usuário com base no id.

const deleteUser = (res, pathname) => {
    const id = pathname.split('/')[1];
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        res.statusCode = 200;
        res.end('User deleted');
    } else {
        res.statusCode = 404;
        res.end('User not found');
    }
};


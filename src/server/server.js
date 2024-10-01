const http = require('http');
const url = require('url');
const { listUsers, createUser, updateUser, deleteUser } = require('../services/userService');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    if (req.method === 'GET' && pathname === '/users') {
        return listUsers(req, res);
    }
    if (req.method === 'POST' && pathname === '/users') {
        return createUser(req, res);
    }
    if (req.method === 'PUT' && pathname.startsWith('/users/')) {
        return updateUser(req, res, pathname);
    }
    if (req.method === 'DELETE' && pathname.startsWith('/users/')) {
        return deleteUser(req, res, pathname);
    }

    res.statusCode = 404;
    res.end('Not Found');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

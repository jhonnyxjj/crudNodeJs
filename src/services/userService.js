const users = [
    {
        name: "Pedro",
        age: 27,
        sex: "M"
    },
    {
        name: "Ana",
        age: 25,
        sex: "F"
    }
]

const listUsers = (res) => {
    res.statusCode = 200; //stattus ok!;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(users));
};

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
        }
        res.statusCode = 404;
        res.end('User not found');
    });
};

const deleteUser = (res, pathname) => {
    const id = pathname.split('/')[1];
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        res.statusCode = 200;
        res.end('User deleted');
    }
    res.statusCode = 404;
    res.end('User not found');

};

module.exports = { listUsers, createUser, updateUser, deleteUser };

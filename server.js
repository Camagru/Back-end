const express = require('express');
const server  = express();
const db_account = require('./DB_modules/account_modules')


server.get('/', (req, res) => {

    db_account.get()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {``
            res.status(400).json({error: "Cannot get users"})
        })
})

server.post('/', (req, res) => {
    const data = req.body;

    db_account.createAccount(data)
        .then(() => {
            res.status(201).json({message: "Account has been created"})
        })
        .catch(err => {
            res.status(400).json({error: "Cannot create an account"})
        })
})

module.exports = server
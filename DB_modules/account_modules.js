const knex = require('knex');
const knexConfig = require('../knexfile');
// const knexConfig = require('./knexfile');

const db = knex(knexConfig.development);


module.exports = {
    createAccount,
    get
}
function createAccount(user) {
    return db('account')
        .insert(user);
}

function get() {
    console.log('here')
    return db('account')
}

function loginUser(username) {
    return db('account')
        .where('name', username)
        .first()
}
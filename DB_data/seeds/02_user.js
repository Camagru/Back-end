
exports.seed = function(knex) {
  return knex('user').insert([
    {account_id: 1, username: 'vsmolii', avatar: ':)'},
  ]);
};

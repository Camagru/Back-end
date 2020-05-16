
exports.seed = function(knex) {
      return knex('picture').insert([
        {account_id: 1, picture: 'some picture'},
      ]);
};


exports.seed = function(knex) {
  return knex('comments').insert([
    {account_id: 1, picture_id: 1, comment: 'first comment'},
  ]);
};

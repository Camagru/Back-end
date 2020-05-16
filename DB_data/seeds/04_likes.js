
exports.seed = function(knex) {
  return knex('likes').insert([
    {account_id: 1, picture_id: 1},
  ]);
};

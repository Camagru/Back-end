
exports.seed = function(knex) {
      return knex('settings').insert([
        {account_id: 1, new_name: 'newname', new_username: 'newusername', new_password: 'newpass', dark_mode: false},
      ]);
};

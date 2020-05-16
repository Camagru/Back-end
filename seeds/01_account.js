
exports.seed = function(knex) {
      return knex('account').insert([
        {name: 'petrovi4', password: '1234', confirm_password: '1234', email: 'petrovi4@gmail.com'},
        {name: 'kaban', password: '1234', confirm_password: '1234', email: 'kaban@gmail.com'}
      ]);
};

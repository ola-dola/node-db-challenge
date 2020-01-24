
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {Name: 'Laptop', Description: 'Used to wash clothes'},
        {Name: 'Printer'},
        {Name: 'SanDisk', Description: 'Used to san disk'},
        {Name: 'Cardboard', Description: 'Used to board card'}
      ]);
    });
};

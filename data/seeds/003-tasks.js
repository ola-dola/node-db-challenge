
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {Description: 'rowValue1', Notes: "arbigerl", ProjectID: 29, Completed: false, ResourceID: 29},
        {Description: 'rowValue2', Notes: "arbigerl", ProjectID: 29, Completed: false, ResourceID: 29},
        {Description: 'rowValue3', Notes: "arbigerl", ProjectID: 30, Completed: false, ResourceID: 30},
        {Description: 'rowValue4', Notes: "arbiger3", ProjectID: 30, Completed: false, ResourceID: 30},
        {Description: 'rowValue34', Notes: "arbiger4", ProjectID: 31, Completed: false, ResourceID: 31}
      ]);
    });
};

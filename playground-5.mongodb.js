/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('dps-citations');

// Insert a few documents into the sales collection.
db.getCollection('apprehending-officers').insertMany(
  [
    { title: 'puso', name: 'mike allan borromeo', designation: 'traffic enforcer' },
    { title: 'puso', name: 'michael fernandez', designation: 'traffic enforcer' },
    { title: 'puso', name: 'michael macugay', designation: 'traffic enforcer' },
    { title: 'puso', name: 'jazmin mamaclay', designation: 'traffic enforcer' },
    { title: 'puso', name: 'emmanuel navarrete', designation: 'traffic enforcer' },
    { title: 'puso', name: 'rhealiza pasion', designation: 'traffic enforcer' },
    { title: 'puso', name: 'rocher john ramos', designation: 'traffic enforcer' },
    { title: 'puso', name: 'eugene salgado', designation: 'traffic enforcer' },
    { title: 'puso', name: 'reynor sarandi', designation: 'traffic enforcer' },
  ]
);

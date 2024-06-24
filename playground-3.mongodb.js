/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
// all password is haha
use('dps-citations');

// Create a new document in the collection.
db.getCollection('users').insertMany([
  {
    username: 'kechie',
    password: '$2a$12$YIctUUQJtNO1aRW8Q2GaNOeq5WYiVdT2EibR6TLj2PgSx73SKpQpa',
    userrole: 'dpsadmin',
  },
  {
    username: 'dpschief',
    password: '$2a$12$YIctUUQJtNO1aRW8Q2GaNOeq5WYiVdT2EibR6TLj2PgSx73SKpQpa',
    userrole: 'dpschief',
  },
  {
    username: 'dpsstaff',
    password: '$2a$12$YIctUUQJtNO1aRW8Q2GaNOeq5WYiVdT2EibR6TLj2PgSx73SKpQpa',
    userrole: 'staff',
  }
]);

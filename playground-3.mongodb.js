/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
// all password is hahahahahahaha
use('oscp');

// Create a new document in the collection.
db.getCollection('users').insertMany([
  {
    username: 'kechie',
    password: '$2a$12$YIctUUQJtNO1aRW8Q2GaNOeq5WYiVdT2EibR6TLj2PgSx73SKpQpa',
    userrole: 'oscpadmin',
  },
  {
    username: 'oscpcmo',
    password: '$2a$12$YIctUUQJtNO1aRW8Q2GaNOeq5WYiVdT2EibR6TLj2PgSx73SKpQpa',
    userrole: 'oscpcmo',
  },
  {
    username: 'oscpzoning',
    password: '$2a$12$YIctUUQJtNO1aRW8Q2GaNOeq5WYiVdT2EibR6TLj2PgSx73SKpQpa',
    userrole: 'oscpzoning',
  },
  {
    username: 'oscpbfp',
    password: '$2a$12$YIctUUQJtNO1aRW8Q2GaNOeq5WYiVdT2EibR6TLj2PgSx73SKpQpa',
    userrole: 'oscbfp',
  },
  {
    username: 'oscpassessor',
    password: '$2a$12$YIctUUQJtNO1aRW8Q2GaNOeq5WYiVdT2EibR6TLj2PgSx73SKpQpa',
    userrole: 'oscpassessor',
  },
  {
    username: 'oscplng',
    password: '$2a$12$YIctUUQJtNO1aRW8Q2GaNOeq5WYiVdT2EibR6TLj2PgSx73SKpQpa',
    userrole: 'oscplindandgrade',
  },
  {
    username: 'oscpstructural',
    password: '$2a$12$YIctUUQJtNO1aRW8Q2GaNOeq5WYiVdT2EibR6TLj2PgSx73SKpQpa',
    userrole: 'oscpstructural',
  },
  {
    username: 'oscparchitectural',
    password: '$2a$12$YIctUUQJtNO1aRW8Q2GaNOeq5WYiVdT2EibR6TLj2PgSx73SKpQpa',
    userrole: 'oscparchitectural',
  },
  {
    username: 'oscpelectrical',
    password: '$2a$12$YIctUUQJtNO1aRW8Q2GaNOeq5WYiVdT2EibR6TLj2PgSx73SKpQpa',
    userrole: 'oscpelectrical',
  },
  {
    username: 'oscpsanitary',
    password: '$2a$12$YIctUUQJtNO1aRW8Q2GaNOeq5WYiVdT2EibR6TLj2PgSx73SKpQpa',
    userrole: 'oscpsanitary',
  },
  {
    username: 'oscpmechanical',
    password: '$2a$12$YIctUUQJtNO1aRW8Q2GaNOeq5WYiVdT2EibR6TLj2PgSx73SKpQpa',
    userrole: 'oscpmechanical',
  }
]);

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
db.getCollection('violations').insertMany(
  [
    { violation: 'arrogant driver', amount: 150 },
    { violation: 'jaywalking', amount: 150 },
    { violation: 'invalid/fake registration or unregistered', amount: 3000 },
    { violation: 'improper display of licence plates', amount: 150 },
    { violation: 'overspeeding', amount: 150 },
    { violation: 'overloading', amount: 150 },
    { violation: 'driving under influence of liquor', amount: 5000 },
    { violation: 'defective accessories (side mirror, tail and head lights)', amount: 150 },
    { violation: 'anti-nuisance', amount: 150 },
    { violation: 'failure to wear helmet (driver)', amount: 1000 },
    { violation: 'failure to wear helmet (backride)', amount: 1000 },
    { violation: 'inappropriate use of helmet', amount: 1000 },
    { violation: 'using mobile phone/ any similar device/ gadgets while driving or operating motorized vehicle', amount: 150 },
    { violation: 'allowing children of any age to sit on the gas tank of any motorcycle while in motion', amount: 150 },
    { violation: 'failure of driver of a 4-wheel vehicle including the front seat passenger to wear seatbelts', amount: 150 },
    { violation: 'driving without driver\'s license', amount: 3000 },
    { violation: 'driving with expired driver\'s license', amount: 3000 },
    { violation: 'failure to carry driver\'s license while driving or operating a motorized vehicle', amount: 3000 },
    { violation: 'failure to present driver\'s license', amount: 3000 },
    { violation: 'failure to carry or/cr', amount: 150},
    { violation: 'disregarding traffic sign', amount: 150},
    { violation: 'driving with student permit', amount: 150 },
    { violation: 'blocking pedestrian lane', amount: 150 },
    { violation: 'no parking', amount: 150 },
    { violation: 'no loading/unloading zone', amount: 150 },
    { violation: 'wrong parking', amount: 150 },
    { violation: 'double parking', amount: 150 },
    { violation: 'obstruction', amount: 150 },
    { violation: 'six meters', amount: 150 },
    { violation: 'no trade name disregarding traffic sign/signal', amount: 150 },
    { violation: 'no u-turn', amount: 150 },
    { violation: 'no entry', amount: 150 },
    { violation: 'no left turn', amount: 150 },
    { violation: 'no right turn', amount: 150 },
    { violation: 'driving on the wrong side', amount: 150 },
    { violation: 'overspeeding', amount: 150 },
    { violation: 'overcharging', amount: 1500 },
    { violation: 'failure to display fare guide', amount: 150 },
    { violation: 'failure to register at night', amount: 150 },
    { violation: 'failure to carry mtop', amount: 150 },
    { violation: 'failure to display "not for hire"', amount: 150 },
    { violation: 'driving without tdic', amount: 150 },
    { violation: 'expired tricycle driver i.d', amount: 250 },
    { violation: 'plying national road', amount: 150 },
    { violation: 'no trashcan', amount: 150 },
    { violation: 'wearing slippers/sandals', amount: 150 },
    { violation: 'using bonnet or mask', amount: 150 },
    { violation: 'backriding', amount: 150 },
    { violation: 'overloading', amount: 150 },
    { violation: 'refuse conveyance', amount: 1000 },
    { violation: 'using in the commission of a crime', amount: 5000 },
    { violation: 'no fare guide', amount: 1500 },
    { violation: 'speed limit of 50 kph passing through gilbert bridge', amount: 200 },
    { violation: 'no loading or unloading along the southern and northern approach of the gilbert bridge', amount: 1000 }
  ]
);

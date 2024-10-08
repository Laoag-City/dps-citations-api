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
db.getCollection('citations').insertMany(
  [
    {
      "firstName": "Jeffrey",
      "lastName": "Silva",
      "middleName": "Megan",
      "homeAddress": "6236 Roberta Terrace Suite 675 Johnfurt, DE 03100",
      "licenseNumber": "aX38993087",
      "dateApprehended": "2024-05-27",
      "timeApprehended": "10:40:48",
      "streetApprehended": "Eric Corners",
      "plateNumber": "Ljn629",
      "vehicleColor": "Bisque",
      "apprehendingOfficer": "Donna Leach",
      "amendStatus": true,
      "violations": [
        {
          "violation": "Speeding",
          "amount": 200,
          "remarks": "Exceeded speed limit by 20mph"
        },
        {
          "violation": "Running a red light",
          "amount": 150,
          "remarks": "Passed through red light at intersection"
        }
      ]
    },
    {
      "firstName": "Ariel",
      "lastName": "Brown",
      "middleName": "Nancy",
      "homeAddress": "50374 Owens Station Coleville, OR 41271",
      "licenseNumber": "oB93754166",
      "dateApprehended": "2024-08-03",
      "timeApprehended": "17:40:44",
      "streetApprehended": "Paula Forges",
      "plateNumber": "Teh868",
      "vehicleColor": "Crimson",
      "apprehendingOfficer": "Kyle Owens",
      "amendStatus": false,
      "violations": [
        {
          "violation": "Illegal parking",
          "amount": 100,
          "remarks": "Parked in a no-parking zone"
        },
        {
          "violation": "Running a red light",
          "amount": 150,
          "remarks": "Passed through red light at intersection"
        }
      ]
    },
    {
      "firstName": "Christopher",
      "lastName": "Meyers",
      "middleName": "Julie",
      "homeAddress": "70148 Michele Trail Suite 353 Lake Tiffanyfort, WY 01817",
      "licenseNumber": "OP92234163",
      "dateApprehended": "2024-03-06",
      "timeApprehended": "19:34:28",
      "streetApprehended": "Morris Spur",
      "plateNumber": "pcG834",
      "vehicleColor": "MidnightBlue",
      "apprehendingOfficer": "Dana Robles",
      "amendStatus": false,
      "violations": [
        {
          "violation": "Running a red light",
          "amount": 150,
          "remarks": "Passed through red light at intersection"
        }
      ]
    },
    {
      "firstName": "Joseph",
      "lastName": "Stevens",
      "middleName": "Hailey",
      "homeAddress": "28211 Elizabeth Prairie Suite 041 Brownmouth, KY 20658",
      "licenseNumber": "ty13697565",
      "dateApprehended": "2024-11-21",
      "timeApprehended": "04:59:06",
      "streetApprehended": "Stewart Flat",
      "plateNumber": "WAJ067",
      "vehicleColor": "MediumOrchid",
      "apprehendingOfficer": "Darryl Cochran",
      "amendStatus": true,
      "violations": [
        {
          "violation": "Illegal parking",
          "amount": 100,
          "remarks": "Parked in a no-parking zone"
        }
      ]
    },
    {
      "firstName": "Emily",
      "lastName": "Rodriguez",
      "middleName": "Brooke",
      "homeAddress": "1832 Daniel Inlet Lake Jessica, ND 58893",
      "licenseNumber": "RD43582899",
      "dateApprehended": "2024-02-15",
      "timeApprehended": "03:04:29",
      "streetApprehended": "Jessica Way",
      "plateNumber": "Xqd527",
      "vehicleColor": "Gold",
      "apprehendingOfficer": "Jerry Dixon",
      "amendStatus": true,
      "violations": [
        {
          "violation": "Illegal parking",
          "amount": 100,
          "remarks": "Parked in a no-parking zone"
        },
        {
          "violation": "Speeding",
          "amount": 200,
          "remarks": "Exceeded speed limit by 20mph"
        }
      ]
    },
    {
      "firstName": "Michael",
      "lastName": "Clark",
      "middleName": "Patricia",
      "homeAddress": "4248 Richardson Ford Apt. 816 East Michael, MT 97512",
      "licenseNumber": "MC47528166",
      "dateApprehended": "2024-07-12",
      "timeApprehended": "02:18:54",
      "streetApprehended": "Clark Mission",
      "plateNumber": "Fmk947",
      "vehicleColor": "Orchid",
      "apprehendingOfficer": "Steven Hall",
      "amendStatus": false,
      "violations": [
        {
          "violation": "Running a red light",
          "amount": 150,
          "remarks": "Passed through red light at intersection"
        }
      ]
    },
    {
      "firstName": "Laura",
      "lastName": "Johnson",
      "middleName": "Brian",
      "homeAddress": "385 Young Road Suite 557 South Sarah, KS 66483",
      "licenseNumber": "LJ98654522",
      "dateApprehended": "2024-06-02",
      "timeApprehended": "08:14:37",
      "streetApprehended": "Young Groves",
      "plateNumber": "Yir326",
      "vehicleColor": "Azure",
      "apprehendingOfficer": "Amy Gonzalez",
      "amendStatus": true,
      "violations": [
        {
          "violation": "Speeding",
          "amount": 200,
          "remarks": "Exceeded speed limit by 20mph"
        }
      ]
    },
    {
      "firstName": "Brandon",
      "lastName": "Martinez",
      "middleName": "Christopher",
      "homeAddress": "Unit 9659 Box 0958 DPO AE 90583",
      "licenseNumber": "BM21354789",
      "dateApprehended": "2024-09-29",
      "timeApprehended": "18:31:25",
      "streetApprehended": "Stewart Flat",
      "plateNumber": "WAJ067",
      "vehicleColor": "MediumOrchid",
      "apprehendingOfficer": "Darryl Cochran",
      "amendStatus": true,
      "violations": [
        {
          "violation": "Illegal parking",
          "amount": 100,
          "remarks": "Parked in a no-parking zone"
        }
      ]
    },
    {
      "firstName": "Kathleen",
      "lastName": "Pierce",
      "middleName": "Kathy",
      "homeAddress": "9447 Freeman Divide Suite 732 Porterburgh, KY 65465",
      "licenseNumber": "ux88041388",
      "dateApprehended": "2024-04-28",
      "timeApprehended": "05:32:03",
      "streetApprehended": "Farmer Shore",
      "plateNumber": "svD820",
      "vehicleColor": "Snow",
      "apprehendingOfficer": "Megan Carter",
      "amendStatus": false,
      "violations": [
        {
          "violation": "Speeding",
          "amount": 200,
          "remarks": "Exceeded speed limit by 20mph"
        },
        {
          "violation": "Running a red light",
          "amount": 150,
          "remarks": "Passed through red light at intersection"
        }
      ]
    },
    {
      "firstName": "Hannah",
      "lastName": "Daugherty",
      "middleName": "Rachel",
      "homeAddress": "USCGC Gray FPO AE 78432",
      "licenseNumber": "tc31337331",
      "dateApprehended": "2024-05-18",
      "timeApprehended": "05:29:05",
      "streetApprehended": "Thornton Squares",
      "plateNumber": "CQl962",
      "vehicleColor": "Lime",
      "apprehendingOfficer": "Travis Hebert",
      "amendStatus": true,
      "violations": [
        {
          "violation": "Illegal parking",
          "amount": 100,
          "remarks": "Parked in a no-parking zone"
        }
      ]
    }
  ]
  );
  
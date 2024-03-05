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
use('oscp');

// Insert a few documents into the sales collection.
db.getCollection('oscpapplications').insertMany(
  [
    {
      "owner": "Corporation I",
      "title": "Fence Construction",
      "dateApplied": "2024-03-01",
      "conversionStatus": "Approved",
      "cPermitStatus": true,
      "ownerName": "Julia Nacino",
      "applicationTitle": "Construction of 3 Storey Residential House in",
      "conversionSignatories": [
        {
          "signatory": "Zoning",
          "status": null,
          "remarks": null,
          "signDate": "2024-03-02"
        },
        {
          "signatory": "BFP",
          "status": "Approved",
          "remarks": null,
          "signDate": "2024-03-02"
        },
        {
          "signatory": "Assessor",
          "status": "Approved",
          "remarks": null,
          "signDate": "2024-03-02"
        }
      ],
      "constructionPermitSignatories": [
        {
          "signatory": "Electrical",
          "status": "Pending",
          "remarks": null,
          "signDate": null
        }
      ]
    },
    {
      "owner": "Ms Owner 2",
      "title": "Title 10",
      "dateApplied": "2024-03-02",
      "conversionStatus": true,
      "cPermitStatus": false,
      "ownerName": "Hannah",
      "applicationTitle": "Construction of 3 Storey Residential House in Brgy 29",
      "conversionSignatories": [
        {
          "signatory": "Zoning",
          "status": null,
          "remarks": null,
          "signDate": "2024-03-02"
        },
        {
          "signatory": "BFP",
          "status": "Approved",
          "remarks": null,
          "signDate": "2024-03-02"
        },
        {
          "signatory": "Assessor",
          "status": "Approved",
          "remarks": null,
          "signDate": "2024-03-02"
        }
      ],
      "constructionPermitSignatories": [
        {
          "signatory": "Line and Grade",
          "status": "Rejected",
          "remarks": "Non-compliant with regulations",
          "signDate": null
        },
        {
          "signatory": "Structural",
          "status": "Pending",
          "remarks": "Awaiting final approval",
          "signDate": null
        },
        {
          "signatory": "Architectural",
          "status": "Approved",
          "remarks": "Permit granted",
          "signDate": null
        },
        {
          "signatory": "Electrical",
          "status": "Approved",
          "remarks": "Permit granted",
          "signDate": null
        },
        {
          "signatory": "Sanitary",
          "status": "Approved",
          "remarks": "Permit granted",
          "signDate": null
        },
        {
          "signatory": "Mechanical",
          "status": "Approved",
          "remarks": "Permit granted",
          "signDate": null
        }
      ]
    },
    {
      "owner": "Owner 3",
      "title": "Title 3",
      "dateApplied": "2024-03-4",
      "conversionStatus": true,
      "ownerName": "George 3",
      "applicationTitle": "Fence Construction",
      "conversionSignatories": [
        {
          "signatory": "Zoning",
          "status": null,
          "remarks": null,
          "signDate": "2024-03-02"
        },
        {
          "signatory": "BFP",
          "status": "Approved",
          "remarks": null,
          "signDate": "2024-03-02"
        },
        {
          "signatory": "Assessor",
          "status": "Approved",
          "remarks": null,
          "signDate": "2024-03-02"
        }
      ],
      "constructionPermitSignatories": [
        {
          "signatory": "Line and Grade",
          "status": "Rejected",
          "remarks": "Non-compliant with regulations",
          "signDate": null
        },
        {
          "signatory": "Structural",
          "status": "Pending",
          "remarks": "Awaiting final approval",
          "signDate": null
        },
        {
          "signatory": "Architectural",
          "status": "Approved",
          "remarks": "Permit granted",
          "signDate": null
        },
        {
          "signatory": "Electrical",
          "status": "Approved",
          "remarks": "Permit granted",
          "signDate": null
        },
        {
          "signatory": "Sanitary",
          "status": "Approved",
          "remarks": "Permit granted",
          "signDate": null
        },
        {
          "signatory": "Mechanical",
          "status": "Approved",
          "remarks": "Permit granted",
          "signDate": null
        }
      ]
    }
  ]
  );
  
  // Run a find command to view items sold on April 4th, 2014.
  //const salesOnApril4th = db.getCollection('sales').find({
  //  date: { $gte: new Date('2014-04-04'), $lt: new Date('2014-04-05') }
  //}).count();
  
  // Print a message to the output window.
  //console.log(`${salesOnApril4th} sales occurred in 2014.`);
  
  // Here we run an aggregation and open a cursor to the results.
  // Use '.toArray()' to exhaust the cursor to return the whole result set.
  // You can use '.hasNext()/.next()' to iterate through the cursor page by page.
  //db.getCollection('sales').aggregate([
  // Find all of the sales that occurred in 2014.
  //  { $match: { date: { $gte: new Date('2014-01-01'), $lt: new Date('2015-01-01') } } },
  // Group the total sales for each product.
  //  { $group: { _id: '$item', totalSaleAmount: { $sum: { $multiply: [ '$price', '$quantity' ] } } } }
  //]);
  
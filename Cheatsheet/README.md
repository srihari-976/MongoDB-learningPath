# MongoDB Commands Reference

## Database Commands

### View all databases
     show dbs

### Create a new or switch databases
    use dbname

### View current database
     db

### Delete database
    db.dropDatabase()

## Collection Commands

### Show Collections
    show collections

### Create a collection
    db.createCollection('collectionname')

### Drop a collection
     db.collectionname.drop()


## Row (Document) Commands

### Show all Rows in a Collection
    db.collectionname.find()

### Show all Rows in a Collection (Prettified)
     db.collectionname.find().pretty()

### Find the first row matching the object

     db.collectionname.findOne({name: 'Hari'})

### Insert One Row
    db.companys.insertOne(
    { 
        name: "Google",
        ceo: "Sundar Pichai",
        founded: 1998
    })
    
### Insert many Rows

    db.companys.insertMany([
    {
        name: "Amazon",
        ceo: "Jeff Bezos",
        founded: 1994
    },
    {
        name: "Tesla",
        ceo: "Elon Musk",
        founded: 2003
    },
    {
        name: "Microsoft",
        ceo: "Satya Nadella",
        founded: 1975
    }
    ])

### Search in a MongoDB Database
    db.collectionname.find({ceo: 'Srihari'})

### Limit the number of rows in output
    db.collectionname.find().limit(2)

### Count the number of rows in the output
    db.collectionname.find().count()

### Searching only one
    db.collectionname.find({name: 'Google'}).limit(1)
### or
     db.collectionname.findOne({name: 'Google'})

### Count the particular data in number of rows
     db.collectionname.find({name: 'Google'}).count()

### Sorting the data in ascending order
     db.collectionname.find().sort({name: 1})

### Sorting the data in descending order
    db.collectionname.find().sort({name: -1})

### Skipping the number of rows
    db.collectionname.find().skip(2)

### Update a row
    db.collectionname.updateOne({name: 'Google'}, {$set: {founded: 1998}})

### Update a row if no match is found
    db.collectionname.updateOne({name: 'Dell'}, {$set: {founded: 1998}}, {upsert: true})

### Rename the element in row
    db.collectionname.updateOne({name: 'Jarvis'}, {$rename: {name: 'Friday'}})

### Increment the element in row
    db.collectionname.updateOne({name: 'Jarvis'}, {$inc: {founded: 1}})

### Delete the row
    db.collectionname.deleteOne({name: 'Jarvis'})
### or
    db.collectionname.remove({name: 'Jarvis'})

### Less than operator
     db.collectionname.find({founded: {$lt: 1998}})

### Greater than operator
    db.collectionname.find({founded: {$gt: 1998}})

### Less than or Equal

     db.collectionname.find({founded: {$lte: 1998}})

### Greater than or Equal
     db.collectionname.find({founded: {$gte: 1998}})

### Not Equal
    db.collectionname.find({founded: {$ne: 1998}})

### Equal
    db.collectionname.find({founded: {$eq: 1998}})

### Adding current date

    db.collectionname.updateOne({name: 'Jarvis'}, {$currentDate: { currentDate: true }})

### Multiplying operator

    db.collectionname.updateOne({name: 'Jarvis'}, {$mul: {founded: 2, quantity: 2}})

### Aggregation operator
    db.collectionname.aggregate([
    {$group: {_id: '$name', total: {$sum: '$founded'}}}
    ])


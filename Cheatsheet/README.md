# MongoDB Commands Reference

## Database Commands

### View all databases
    ```javascript
     show dbs

### Create a new or switch databases
    ```javascript
    use dbname

### View current database
    ```javascript
     db

### Delete database
    ```javascript
    db.dropDatabase()

## Collection Commands

### Show Collections
    ```javascript
    show collections

### Create a collection
    ```javascript
    db.createCollection('collectionname')

### Drop a collection
    ```javascript
     db.collectionname.drop()


## Row (Document) Commands

### Show all Rows in a Collection
    ```javascript
    db.collectionname.find()

### Show all Rows in a Collection (Prettified)
    ```javascript
     db.collectionname.find().pretty()

### Find the first row matching the object
     ```javascript
     db.collectionname.findOne({name: 'Hari'})

### Insert One Row
    ```javascript
    db.companys.insertOne(
    { 
        name: "Google",
        ceo: "Sundar Pichai",
        founded: 1998
    })
    
### Insert many Rows
    ```javascript

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
    ```javascript
    db.collectionname.find({ceo: 'Srihari'})

### Limit the number of rows in output
    ```javascript
    db.collectionname.find().limit(2)

### Count the number of rows in the output
javascript
db.collectionname.find().count()

### Searching only one
    ```javascript
    db.collectionname.find({name: 'Google'}).limit(1)
### or
    ```javascript
     db.collectionname.findOne({name: 'Google'})

### Count the particular data in number of rows
    ```javascript
     db.collectionname.find({name: 'Google'}).count()

### Sorting the data in ascending order
    ```javascript
     db.collectionname.find().sort({name: 1})

### Sorting the data in descending order
    ```javascript
    db.collectionname.find().sort({name: -1})

### Skipping the number of rows
    ```javascript
    db.collectionname.find().skip(2)

### Update a row
    ```javascript
    db.collectionname.updateOne({name: 'Google'}, {$set: {founded: 1998}})

### Update a row if no match is found
    ```javascript
    db.collectionname.updateOne({name: 'Dell'}, {$set: {founded: 1998}}, {upsert: true})

### Rename the element in row
    ```javascript
    db.collectionname.updateOne({name: 'Jarvis'}, {$rename: {name: 'Friday'}})

### Increment the element in row
    ```javascript
    db.collectionname.updateOne({name: 'Jarvis'}, {$inc: {founded: 1}})

### Delete the row
    ```javascript
    db.collectionname.deleteOne({name: 'Jarvis'})
### or
    ```javascript
    db.collectionname.remove({name: 'Jarvis'})

### Less than operator
    ```javascript
     db.collectionname.find({founded: {$lt: 1998}})

### Greater than operator
    ```javascript
    db.collectionname.find({founded: {$gt: 1998}})

### Less than or Equal
     ```javascript
     db.collectionname.find({founded: {$lte: 1998}})

### Greater than or Equal
    ```javascript
     db.collectionname.find({founded: {$gte: 1998}})

### Not Equal
    ```javascript
    db.collectionname.find({founded: {$ne: 1998}})

### Equal
    ```javascript
    db.collectionname.find({founded: {$eq: 1998}})

### Adding current date
     ```javascript
    db.collectionname.updateOne({name: 'Jarvis'}, {$currentDate: { currentDate: true }})

### Multiplying operator
     ```javascript
    db.collectionname.updateOne({name: 'Jarvis'}, {$mul: {founded: 2, quantity: 2}})

### Aggregation operator
    ```javascript
    db.collectionname.aggregate([
    {$group: {_id: '$name', total: {$sum: '$founded'}}}
    ])


db.companys.find().sort({name:1}) // sorting in acensding

db.companys.find().sort({name:-1}) // sorting in descending

db.companys.find().skip(1) //skips first two documents(rows)

db.companys.find().skip(2) // skips first two documents(rows)

db.companys.find().limit() //limits the number of documents in output
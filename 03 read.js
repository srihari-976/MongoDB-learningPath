db.companys.find().count()

db.companys.find().limit(2)

db.companys.find({ceo:'Srihari'})

db.companys.find({founded:{$lt:1998}})

db.companys.find({founded:{$gt:1998}})

db.companys.find({founded:{$lte:1998}})

db.companys.find({founded:{$gte:1998}})

db.companys.find({founded:{$ne:1998}})

db.companys.find({founded:{$eq:1998}})
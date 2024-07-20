db.companys.updateOne({name:'Dell'},{$set:{ceo:'Michael S. Dell',founded:1984}})

db.companys.updateOne({name:'Dell'},{$set:{founded:1998}},{upsert: true})

db.companys.updateOne({name:'Jarvis'},{$rename:{name:'Friday'}})

db.companys.updateOne({name:'Jarvis'},{$inc:{founded:1}})

db.companys.updateMany({name:'Jarvis'},{$unset:{founded:1}})

db.companys.updateOne({ name: 'Jarvis' },{$currentDate: { currentDate: true }})

db.companys.updateOne({name:'Jarvis'},{$mul:{founded:2,quantity:2}})
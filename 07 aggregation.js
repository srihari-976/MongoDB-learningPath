db.companys.aggregate([{$group:{_id:'$name',total:{$sum:'$founded'}}}])

db.companys.aggregate([{$group:{_id:'$name',total:{$min:'$founded'}}}])

db.companys.aggregate([{$group:{_id:'$name',total:{$max:'$founded'}}}])

db.companys.aggregate([{$group:{_id:'$name',total:{$avg:'$founded'}}}])

db.companys.aggregate([{$group:{_id:'$name',total:{$push:'$founded'}}}])


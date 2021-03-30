use sliit

db.student.insert({
    "name": "John",
    "dateOfBirth": "1990-01-01T00:00:00Z",
    "subjects": ["Application frameworks", "Computer architecture"]
    }
)

db.student.find()
db.student.find({"name": "John"})
db.student.find({"_id": ObjectId("6062a4d9e8d7f0486fede377")})

db.student.insertMany([{
    "name": "Smith",
    "dateOfBirth": "1990-01-15T00:00:00Z",
    "subjects": ["Application frameworks", "Computer architecture"],
    "isActive": true
    },
    {
    "name": "Jane",
    "dateOfBirth": "1990-02-15T00:00:00Z",
    "subjects": ["Application frameworks", "Computer architecture"],
    "isActive": false
    }
])


db.student.updateOne({
    "name": "Smith",
    "isActive": true
    },
    {
      $push:{"subjects": "Distributed computing"}
    })

db.student.updateOne({
    "name": "John"
    },
    {
      $set:{"isActive": false}
    })

db.student.deleteOne({
    "name": "John"
    })


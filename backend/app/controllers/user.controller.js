const User = require('../models/user.model.js');
 
 
// POST a User
exports.create = (req, res) => {
    // Create a User
    const user = new User({
        name: req.body.name,
        age: req.body.age
    });
 
    // Save a User in the MongoDB
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
 
 
// FETCH all Users
exports.findAll = (req, res) => {
    User.find()
    .then(users => {
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};
 
 
// FIND a User
exports.findOne = (req, res) => {
    User.findById(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving User with id " + req.params.userId
        });
    });
};
 
exports.findByAge = (req, res) => {
  User.find({ age: req.params.age})
      .then( 
        users => {
          res.send(users)
        }
      )
      .catch(err => {
        res.status(500).send("Error -> " + err);
      })
}
 
// UPDATE a User
exports.update = (req, res) => {
    // Find user and update it
    User.findOneAndUpdate({ _id: req.params.userId }, {
        name: req.body.name,
    age: req.body.age,
    active: req.body.active
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Error updating user with id " + req.params.userId
        });
    });
};
 
// DELETE a User
exports.delete = (req, res) => {
    User.findByIdAndRemove(req.params.userId)
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });
        }
        res.send({message: "User deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "User not found with id " + req.params.userId
            });                
        }
        return res.status(500).send({
            message: "Could not delete user with id " + req.params.userId
        });
    });
};
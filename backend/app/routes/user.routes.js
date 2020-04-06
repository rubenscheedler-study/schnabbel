module.exports = function(app) {
 
    var users = require('../controllers/user.controller.js');
 
  // Create a new users
    app.post('/api/user', users.create);
 
    // Retrieve all userss
    app.get('/api/users', users.findAll);
 
    // Retrieve a single user by Id
    app.get('/api/users/:userId', users.findOne);
 
    // Update a user with Id
    app.put('/api/users/:userId', users.update);
  
  // Retrieve user Age
    app.get('/api/users/age/:age', users.findByAge);
 
    // Delete a user with Id
    app.delete('/api/users/:userId', users.delete);
}
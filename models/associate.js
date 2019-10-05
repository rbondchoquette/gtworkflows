var mongoose = require('mongoose');

var Schema = mongoose.Schema; 

var AssociateSchema = new Schema({
    name: {type: String, uppercase: true},
    email: {type: String, uppercase: true},
    capacity: {type: String, uppercase: true},
    shareholder: {type: String, uppercase: true},
});

module.exports = mongoose.model('Associate', AssociateSchema);
  



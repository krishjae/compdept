const mongo = require('mongoose');

const Schema = new mongo.Schema({
    FirstName: String,
    LastName: String,
    Password: String,
    Email: String,
    Role: String
},{timestamps: true});

module.exports = mongo.model("user", Schema);

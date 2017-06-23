/**
 * Created by pradeepkar on 22/06/17.
 */

var mongoose = require('mongoose');

mongoose.connect('mongodb://sourav_dutta:delgence55@ds159371.mlab.com:59371/project_management');

var db = mongoose.connection;

db.once('open', function() {
    console.log('MongoDB Successfully Connected!!');
});


/*================== User schema ==============*/

var personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    role : {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});
var Person = mongoose.model("Users", personSchema);

/*-------------------------- Project Schema ----------------*/
var projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    client_id:{
        type: mongoose.Schema.ObjectId,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    start_date : {
        type: Date,
        required: true
    },
    priority: String,
    description:{
        type: String,
        required: true
    },
    milestone:[{
            milestone_name: { type: String, required: true },
            milestone_desc: { type: String, required: true }
    }],
    task:[{
        task_name: { type: String, required: true },
        task_desc: { type: String, required: true },
        assigned_developer: mongoose.Schema.ObjectId,
        task_start_date: Date,
        task_end_date: Date
    }]
});

module.exports = {
    getModel: function(){
        return Person;
    },
    getPersonSchema: function(){
        return personSchema;
    }
};


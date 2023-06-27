const Mongoose = require('mongoose');

const ControllerSchema = Mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    access: {
        type:String,
        default: "admin",
        required: true
    }
});

const Controller = Mongoose.model('controller', ControllerSchema);
module.exports = Controller;
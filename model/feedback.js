const Mongoose = require('mongoose');


const FeedbackSchema = Mongoose.Schema({
    mobileNumber: {
        type:String,
        required:true,
    },
    type: {
        type:String,
        required:true,
        default:'Complaint'
    },
    description: {
        type:String,
        required:true,
        minLength:1
    },
    date: {
        type:String,
        required:true
    }
})

const Feedback = Mongoose.model('feedback', FeedbackSchema);
module.exports = Feedback;
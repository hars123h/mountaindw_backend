const Mongoose = require('mongoose');

const WithdrawalSchema = Mongoose.Schema({
    fullName: {
        type:String, 
        required:true
    },
    phoneNo: {
        type:String, 
        required:true
    },
    bankAccount: {
        type:String, 
        required:true
    },
    ifsc: {
        type:String, 
        required:true
    },
    bankName: {
        type:String, 
        required:true
    },
    withdrawalAmount: {
        type:Number, 
        required:true
    },
    afterDeduction: {
        type:Number, 
        required:true
    },
    user_id: {
        type:Mongoose.Types.ObjectId, 
        required:true
    },
    time: {
        type:Date, 
        required:true
    },
    status: {
        type:String, 
        required:true
    }

});

const Withdrawal = Mongoose.model('withdrawal', WithdrawalSchema);
module.exports = Withdrawal;


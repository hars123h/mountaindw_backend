const Mongoose = require('mongoose');

const BankSchema = Mongoose.Schema({
    
    fullName: {
        type:String,
        default:''
    },
    phoneNo: {
        type: String,
        default:''
    },
    bankAccount: {
        type: String,
        default:''
    },
    bankName: {
        type: String,
        default:''
    },
    ifsc: {
        type: String,
        default:''
    }
});

const Bank = Mongoose.model('bank', BankSchema);
module.exports = Bank;
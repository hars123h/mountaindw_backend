const Mongoose = require('mongoose');

const RechargeSchema = Mongoose.Schema({
    refno: {
        type: String,
        required: true,
        minLength:12
    },
    recharge_value: {
        type: Number,
        required: true
    },
    status: {
        type:String,
        required: true
    },
    user_id: {
        type: Mongoose.Types.ObjectId,
        required: true
    },
    mobno: {
        type: String,
        required: true,
        minLength: 10
    },
    time: {
        type: Date,
        required: true
    },
    parent_id: {
        type: Mongoose.Types.ObjectId,
        required: true
    },
    grand_parent_id: {
        type: Mongoose.Types.ObjectId,
        required: true
    },
    grand_parent_id: {
        type: Mongoose.Types.ObjectId,
        required: true
    },
    great_grand_parent_id: {
        type: Mongoose.Types.ObjectId,
        required: true
    }
})

const Recharge = Mongoose.model('recharge', RechargeSchema);
module.exports = Recharge;
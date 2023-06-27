const Mongoose = require('mongoose');

const AmountSchema = Mongoose.Schema({
    amount: {
        type: Number, 
        required: true,
    },
    mwamount: {
        type: Number,
        required: true
    },
    invite_bonus: {
        type: Number,
        required: true,
    },
    level1_percent: {
        type: Number,
        required: true,
    },
    level2_percent: {
        type: Number,
        required: true,
    },
    level3_percent: {
        type: Number,
        required: true,
    },
    recharge_bonus: {
        type: Number,
        required: true
    },
    withdrawal_fee: {
        type: Number, 
        required: true
    },
    upi_id: {
        type: String,
        required: true
    },
    plan_state: {
        type: Array,
        default: [],
    },
    promo_code: {
        type: String
    }
});

const Amount = Mongoose.model('amount', AmountSchema);
module.exports = Amount;



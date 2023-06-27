const Mongoose = require('mongoose');

const PlanSchema = Mongoose.Schema({
    product_type: {
        type:String,
        required:true,
    },
    plan_name: {
        type:String,
        required: true
    },
    plan_type: {
        type: String, 
        required: true
    },
    plan_amount: {
        type: Number,
        required: true
    },
    plan_daily_earning: {
        type: Number,
        required: true
    },
    plan_cycle: {
        type: Number,
        required: true
    },
    quantity: {
        type:Number,
        required: true
    },
    date_purchased: {
        type: String,
        required: true
    },
    date_till_rewarded: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    ddmmyy: {
        type: Number,
        required: true
    },
});

const Plan = Mongoose.model('plan', PlanSchema);
module.exports = Plan;
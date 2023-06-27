const Mongoose = require("mongoose");
const Plan = require('./plan');
const Bank = require('./bank');
const mongoosePaginate = require('mongoose-paginate-v2');


const UserSchema = new Mongoose.Schema({
  mobno: {
    type: String,
    required: true,
  },
  pwd: {
    type: String,
    minlength: 6,
    required: true,
  },
  wpwd: {
    type:String,
    minlength: 6,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    default: "Basic",
    required: true,
  },
  balance: {
    type:Number,
    default: 0,
  },
  recharge_amount: {
    type: Number,
    default: 0
  },
  withdrawal_sum: {
    type: Number,
    default: 0
  },
  earning: {
    type: Number,
    default: 0
  },
  user_invite: {
    type: String,
    minlength: 6,
    required: true
  },
  parent_invt: {
    type: String, 
    required: true
  },
  grand_parent_invt: {
    type:String,
  },
  directRecharge: {
    type: Number,
    default: 0
  },
  indirectRecharge: {
    type: Number,
    default: 0
  },
  in_indirectRecharge: {
    type: Number,
    default: 0
  },
  directMember: {
    type:[Mongoose.Types.ObjectId],  
    default:[]
  },
  indirectMember: {
    type: [Mongoose.Types.ObjectId],
    default: []
  },
  in_indirectMember: {
    type: [Mongoose.Types.ObjectId],
    default: []
  },
  availed_promocode: {
    type: Array,
    default: []
  },
  boughtLong: {
    type:Number,
    default: 0,
  },
  showShort: {
    type:Number,
    default: 0
  },
  boughtShort: {
    type:Number,
    default: 0
  },
  lastWithdrawal: {
    type:Date,
    required: true
  },
  parent_id: {
    type:Mongoose.Types.ObjectId
  },
  grand_parent_id: {
    type:Mongoose.Types.ObjectId
  },
  great_grand_parent_id: {
    type:Mongoose.Types.ObjectId
  },
  plans_purchased:{
    type:Array,
    default:[]
  },
  bank_details: {
    type:Bank.schema,
    default:{}
  },
  placed_recharges: {
    type:Array,
    default:[]
  },
  withdrawals: {
    type:Array,
    default:[]
  },
  invite_reward1: {
    type:String,
    default:'NO'
  },
  invite_reward2: {
    type:String,
    default:'NO'
  },
  invite_reward3: {
    type:String,
    default:'NO'
  },
  invite_reward4: {
    type:String,
    default:'NO'
  },
  invite_reward5: {
    type:String,
    default:'NO'
  }
})

UserSchema.plugin(mongoosePaginate);

const User = Mongoose.model("user", UserSchema)
module.exports = User
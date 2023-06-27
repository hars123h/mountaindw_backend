const Mongoose = require('mongoose');
const BlockedSchema = Mongoose.Schema({
    user_id: {
        type: String
    }
});

const Blocked = Mongoose.model('blocked', BlockedSchema);
module.exports = Blocked;
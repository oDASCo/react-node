const mongoose  = require('mongoose');
const Schema  = mongoose.Schema;

const recipientSchema = new Schema({
    email: String,
    clicked: { type: Boolean, default: false }
});

mongoose.model('recipient', recipientSchema);

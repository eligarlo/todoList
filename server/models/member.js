const mongoose = require('mongoose');

const memberSchema = mongoose.Schema({
  member: { type: String, required: true },
});

module.exports = mongoose.model('Member', memberSchema);

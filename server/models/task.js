const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  task: { type: String, required: true },
  member: { type: String, required: true },
  date: { type: String, required: true },
});

module.exports = mongoose.model('Task', taskSchema);

const mongoose = require('mongoose');


const AnswerSchema = new mongoose.Schema({
  qid: String,
  text: String
}, { _id: false });

const AttemptSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, index: true },
  drillId: { type: mongoose.Schema.Types.ObjectId, required: true },
  answers: { type: [AnswerSchema], default: [] },
  score: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now, index: true }
});

AttemptSchema.index({ userId: 1, createdAt: -1 });



module.exports = mongoose.model('Attempt', AttemptSchema);

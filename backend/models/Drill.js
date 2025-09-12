const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  qid: { type: String, required: true },
  prompt: { type: String, required: true },
  options: { type: [String], required: true },       // MCQ options
  correctAnswer: { type: String, required: true }    // Correct option
}, { _id: false });

const DrillSchema = new mongoose.Schema({
  title: { type: String, required: true },
  difficulty: { type: String, enum: ['easy','medium','hard'], default: 'easy' },
  tags: { type: [String], default: [] },
  questions: { type: [QuestionSchema], default: [] }
});

DrillSchema.index({ tags: 1 });
DrillSchema.index({ difficulty: 1 });
module.exports = mongoose.model('Drill', DrillSchema);

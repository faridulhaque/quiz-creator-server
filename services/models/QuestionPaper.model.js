import mongoose from "mongoose";
import QuestionsSchema from "./questions.model.js";

const QuestionPaperSchema = new mongoose.Schema({
  moderator: {
    type: String,
    required: true,
    min: 5,
    max: 50,
  },
  status: {
    type: String,
    default: "Incomplete",
  },
  title: {
    type: String,
    required: true,
    min: 1,
    max: 100,
  },
  quantity: {
    type: Number,
    required: true,
    min: 5,
    max: 40,
  },
  attendance: {
    type: [{
      attendant: {
        type: String,
        default: ""
      },
      present: {
        type: Boolean,
        default: false
      }
    }],
    default: []
  },
  questions: {
    type: [QuestionsSchema],
    default: [],
  },
  duration: {
    type: Object,
    default: { hour: 0, min: 0, sec: 0 },
  },
  start: {
    type: Date,
    required: true,
    
  },
}, { timestamps: true });

const questionPaperModel = mongoose.model("QuestionPaper", QuestionPaperSchema);

export default questionPaperModel;

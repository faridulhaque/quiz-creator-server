import mongoose from "mongoose";

const QuestionsSchema = new mongoose.Schema({
  question: {
    type: String,
    default: "",
  },
  answers: {
    type: [
      {
        text: {
          type: String,
          required: true,
        },
        isCorrect: {
          type: Boolean,
          required: true,
        },
      },
    ],
    default: [],
  },
});

export default QuestionsSchema;
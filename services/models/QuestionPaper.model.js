import mongoose from "mongoose";
import QuestionsSchema from "./questions.model.js";

const QuestionPaperSchema = new mongoose.Schema({
    moderator: {
        type: String,
        required: true,
        min: 5,
        max: 50
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
    questions: {
        type: [QuestionsSchema],
        default: [],
    },

    duration: String,
    start: String,


}, { timestamps: true })


const questionPaperModel = mongoose.model("QuestionPaper", QuestionPaperSchema);

export default questionPaperModel;



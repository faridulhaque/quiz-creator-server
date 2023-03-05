import mongoose from "mongoose";

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
    questionsGroup: {
        question: {
            type: String,
            required: true,
        },
        answers: {
            type: [
                {
                    text: {
                        type: String,
                        required: true
                    },
                    isCorrect: {
                        type: Boolean,
                        required: true
                    }
                }
            ],
            default: []
        }
    },
}, { timestamps: true })


const questionPaperModel = mongoose.model("QuestionPaper", QuestionPaperSchema);

export default questionPaperModel;
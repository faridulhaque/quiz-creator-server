import express from "express";
const questionsGroupRouter = express.Router()
import { addNewQuestion, deleteQuestion, updateQuestion } from "../controllers/quiz/questionGroup.js";


questionsGroupRouter.put("/add/:id", addNewQuestion)
questionsGroupRouter.patch("/update/:paperId/:questionId", updateQuestion)
questionsGroupRouter.delete("/del/:paperId/:questionId", deleteQuestion)


export default questionsGroupRouter;
import express from "express";
import { addQuestions, clearQuestions } from "../controllers/quiz/questions.js";
const questionsRouter = express.Router()


questionsRouter.post("/create", addQuestions)
questionsRouter.delete("/delete/:id", clearQuestions)


export default questionsRouter;
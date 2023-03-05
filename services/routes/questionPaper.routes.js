import express from "express";
import { createQuestionPaper, addQuestionGroup } from "../controllers/quiz/questionPaper.js";


const questionPaperRouter = express.Router()

questionPaperRouter.post("/create", createQuestionPaper)
questionPaperRouter.put("/:id/add", addQuestionGroup)


export default questionPaperRouter;
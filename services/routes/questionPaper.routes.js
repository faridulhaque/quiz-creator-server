import express from "express";
import { createQuestionPaper, updateQuestionPaper, deleteQuestionPaper } from "../controllers/quiz/questionPaper.js";


const questionPaperRouter = express.Router()

questionPaperRouter.post("/create", createQuestionPaper)
questionPaperRouter.patch("/:id/update", updateQuestionPaper)
questionPaperRouter.delete("/:id/delete", deleteQuestionPaper)


export default questionPaperRouter;
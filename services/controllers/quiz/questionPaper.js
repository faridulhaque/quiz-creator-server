import questionPaperModel from "../../models/questionPaper.model.js";

export const createQuestionPaper = async (req, res, next) => {
  try {
    const { moderator, title, quantity, duration, start, questionGroup } = req.body;
    const newPaper = new questionPaperModel({
      moderator, title, quantity, duration, start, questionGroup
    })

    const result = await newPaper.save()

    res.status(200).json({ message: "You create a question paper, add your questions now!", data: result })
  } catch (error) {
    res.status(400).json({ error: error })
  }
}




export const addQuestionGroup = async (req, res, next) => {
  try {

    const id = req.params.id
    const result = await questionPaperModel.findByIdAndUpdate(id, { questions: req.body.questions }, { new: true })
    res.status(200).json({ message: "Question group updated successfully", data: result });
  } catch (error) {
    res.status(400).json({ error: error });
  }
}
import questionPaperModel from "../../models/questionPaper.model.js";

// create question paper for the first time
export const createQuestionPaper = async (req, res, next) => {
  try {
    const { moderator, title, quantity, duration, start, } = req.body;
    const newPaper = new questionPaperModel({
      moderator, title, quantity, duration, start, 
    })

    const result = await newPaper.save()

    res.status(200).json({ message: "You create a question paper, add your questions now!", data: result })
  } catch (error) {
    res.status(400).json({ error: error })
  }
}


// update question paper info anytime
export const updateQuestionPaper = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, duration, start } = req.body;
    const result = await questionPaperModel.findByIdAndUpdate(id, { title, duration, start }, { new: true })
    res.status(200).json({ data: result, message: "Question paper updated successfully" })
  } catch (error) {
    res.status(400).json({ error: error })
  }
}


// delete question paper
export const deleteQuestionPaper = async (req, res) => {

  try {

    const id = req.params.id;
    const result = await questionPaperModel.findByIdAndDelete(id)


    res.status(204).json({ message: 'Question paper deleted successfully', data: result })
  } catch (error) {
    res.status(400).json({ error: error })

  }
}







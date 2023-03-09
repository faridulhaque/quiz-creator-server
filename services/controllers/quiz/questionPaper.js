import questionPaperModel from "../../models/questionPaper.model.js";

// create question paper for the first time
export const createQuestionPaper = async (req, res, next) => {
  console.log(req.body)
  try {
    const { moderator, title, duration, start, } = req.body;

    const newPaper = new questionPaperModel({
      moderator, title, duration, start,
    })

    const result = await newPaper.save()

    res.status(200).json({ message: "You create a question paper, add your questions now!", data: result })
  } catch (error) {
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      res.status(400).json({ errors });
    } else {
      res.status(400).json({ error: error.message });
    }
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



export const getQuestionPapers = async (req, res) => {
  try {

    const result = await questionPaperModel.find({ moderator: req.params.email })

    res.status(200).json({ data: result, message: `${result?.length} data found!` })

  }
  catch (error) {
    res.status(400).json({ error: error })

  }
}






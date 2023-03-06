import questionPaperModel from "../../models/questionPaper.model.js";

// add question to the paper for the first time
export const addQuestions = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await questionPaperModel.findByIdAndUpdate(
      id,
      { questions: req.body.questions },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Question group updated successfully", data: result });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};


// clear questions array
export const clearQuestions = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await questionPaperModel.updateOne(
      {_id: id}, { $set: { questions: [] }},
    );
    res
      .status(200)
      .json({ message: "Questions deleted successfully", data: result });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};



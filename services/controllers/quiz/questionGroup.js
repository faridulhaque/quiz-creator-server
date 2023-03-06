import questionPaperModel from "../../models/questionPaper.model.js";


export const addNewQuestion = async (req, res) => {

    try {
        const paperId = req.params.id
        const question = req.body.questionGroup
        console.log(question);
        const result = await questionPaperModel.findByIdAndUpdate(paperId, { $push: { questions: question } }, { new: true })

        res.send({ message: "Question added successfully", data: result })

    } catch (error) {
        res.status(404).json({ error: error });
    }
}


export const deleteQuestion = async (req, res) => {
    try {
        const paperId = req.params.paperId
        const questionId = req.params.questionId
        const result = await questionPaperModel.findByIdAndUpdate(paperId, { $pull: { questions: { _id: { $eq: questionId } } } }, { new: true })

        res.send({ message: "Question deleted successfully", data: result })

    } catch (error) {
        res.status(404).json({ error: error });
    }
}


// update question
export const updateQuestion = async (req, res) => {
    try {
        const paperId = req.params.paperId
        const questionId = req.params.questionId
        const question = req.body.questionGroup
        const isPulled = await questionPaperModel.findByIdAndUpdate(paperId, { $pull: { questions: { _id: { $eq: questionId } } } })

        if (isPulled._id) {
            const result = await questionPaperModel.findByIdAndUpdate(paperId, { $push: { questions: question } }, { new: true })
            res.send({ message: "Question updated successfully", data: result })
        }


    } catch (error) {
        res.status(404).json({ error: error });
    }
}
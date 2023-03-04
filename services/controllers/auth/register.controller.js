const register = async (req, res) => {
    try {
        res.status(200).json({})
    } catch (error) {
        res.status(400).json({ error: error })
    }
}

export default register;
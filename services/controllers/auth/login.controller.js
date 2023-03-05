import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import UserModel from "../../models/user.model.js";

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email: email })
        if (!user._id) {
            return res.status(409).json({ message: 'User not found' })
        }
        else {
            const isMatched = await bcrypt.compare(password, user.password)

            if (!isMatched) {
                return res.status(400).json({ message: 'Password did not match' })
            }
            else {
                const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
                const result = {
                    email: user.email,
                    name: user.name,
                    picturePath: user.picturePath,
                    _id: user._id,
                }
                res.status(200).json({ data:result, token, message: "You have successfully logged in!" })
            }
        }

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export default login;
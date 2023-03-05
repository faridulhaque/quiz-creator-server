import bcrypt from "bcrypt"
import UserModel from "../../models/user.model.js"

const register = async (req, res, next) => {
    try {

        const {
            name, email, password, picturePath,
        } = req.body


        const isExisted = await UserModel.findOne({ email })

        if (isExisted) {
            return res.status(409).json({ message: "Email already in use!" })
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt)
        const newUser = new UserModel({

            name,
            email,
            password: passwordHash,


        })

        const savedUser = await newUser.save();
        const result = savedUser.toObject()
        delete result.password

        res.status(201).json({ data: result, message: "Your registration is successful" })

    }
    catch (err) {
        res.status(500).json({ error: err.message })

    }
}

export default register;
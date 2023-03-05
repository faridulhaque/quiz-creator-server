import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            min: 2,
            max: 20
        },
        email: {
            type: String,
            required: true,
            min: 5,
            max: 50
        },
        password: {
            type: String,
            required: true,
            min: 8,
            max: 20
        },
        picturePath: {
            type: String,
            default: "https://i.ibb.co/6YK1cXs/avatar.jpg"
        },

    }, {
    timestamps: true
}
)

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
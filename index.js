import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import helmet from "helmet"
import morgan from 'morgan'
import authRoutes from './services/routes/auth.routes.js';
import questionPaperRoutes from './services/routes/questionPaper.routes.js'
import questionsRoutes from './services/routes/questions.routes.js'
import questionGroupRoutes from './services/routes/questionGroup.routes.js'

dotenv.config()

const app = express()

app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ "policy": "cross-origin" }))
app.use(morgan('common'))
app.use(bodyParser.json({ limit: "300mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "300mb", extended: true }))
app.use(cors())


app.use("/auth", authRoutes)
app.use("/qp", questionPaperRoutes)
app.use("/questions", questionsRoutes)
app.use("/qg", questionGroupRoutes)


// mongoose connect
const PORT = process.env.PORT || 8080;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>{
    app.listen(PORT, ()=> console.log(`server has been connected to ${PORT}`))
})
.catch((error)=> console.log(error, `did not connect to ${PORT}`))
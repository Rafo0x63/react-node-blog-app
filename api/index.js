import express from "express"
import postRoutes from "./routes/posts.js"
import authRoutes from "./routes/auth.js"
import cors from "cors"
import cookieParser from "cookie-parser"
import multer from "multer"

const app = express()

app.use(cookieParser())


const corsOptions = {
    origin:"http://localhost:5173",
    credentials:true,
    optionSuccessStatus:200,
}



app.use(cors(corsOptions))

app.use(express.json())

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "../client/public/upload")
    },
    filename: function(req, file, cb) {
        cb(null, Date.now()+file.originalname)
    }
})

const upload = multer({storage})

app.post("/api/upload", upload.single("file"), function(req, res) {
    const file = req.file
    res.status(200).json(file.filename)
})

app.use("/api/posts", postRoutes)
app.use("/api/auth", authRoutes)

app.listen(8800, () => {
    console.log("Connected!")
})
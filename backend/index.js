import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import contactRoutes from './routes/contact.routes.js'
import newsRoutes from "./routes/news.routes.js"
import volunteerRoute from "./routes/volunteer.routes.js"
import adminLogin from './routes/admin.routes.js'
import dotenv from 'dotenv';
dotenv.config(); // ✅ Make sure this line runs before anything else

const PORT = process.env.PORT



const app = express()
app.use(express.json()); // ✅ This parses JSON from req.body

app.use(cors())

app.use("/api/news",newsRoutes)
app.use("/api/contact",contactRoutes)
app.use("/api/volunteer",volunteerRoute)
app.use("/api/admin",adminLogin)
connectDB();
app.listen(PORT, ()=> console.log("Server Start"))

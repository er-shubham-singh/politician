import express from 'express'
import { createNews, getAllNews } from '../controllers/news.controller.js'
import { authenticate } from '../middleware/authMiddleware.js'
import { upload } from '../middleware/upload.js'
const router = express.Router()

router.get("/all-news",getAllNews)
router.post("/create-news", authenticate,upload.single('image'), createNews)

export default router
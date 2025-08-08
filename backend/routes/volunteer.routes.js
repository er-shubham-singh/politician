import express from 'express'
import { createVolunteer } from '../controllers/volunteerController.js'

const router = express.Router()

router.post("/create-volunteer",createVolunteer)

export default router
import { createVolunteerServices } from "../services/Volunteer.services.js";


export const createVolunteer = async (req,res)=>{
    try{
        const data = req.body;
        const volunteer = await createVolunteerServices(data)
        res.status(201).json({message:"registered successfully", volunteer})
    } catch(error){
        res.status(400).json({error:error.message})
    }
}
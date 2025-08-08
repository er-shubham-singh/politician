import Volunteer from "../model/Volunteer.js"


export const createVolunteerServices = async(data)=>{
    const {name,email,phone,message}=data
    if(!name || !email || !phone){
        throw new Error("all field required")
    }

    const volunteer = new Volunteer({name,email,phone,message})
    return volunteer.save()
}
// import { createNewsService, getAllNewsServices } from "../services/news.services.js"

// export const getAllNews = async(req,res) =>{
//     try{
//         const newsList = await getAllNewsServices()
//         res.status(200).json({message:"fetch successfully",success:true, data:newsList})
//     }catch(error){
//             res.status(500).json({message:"fetched failed",success:false,error:error.message})
//     }
// }

// export const createNews = async(req,res)=>{
//     try{
//         const newsData = req.body;
//         const news = await createNewsService(newsData)
//         res.status(201).json({message:"news added",news})
//     } catch(error){
//         res.status(501).json({error:"failed to create", details:error.message})
//     }
// }

import { createNewsService, getAllNewsServices } from "../services/news.services.js";
import cloudinary from '../config/cloudinaryConfig.js'; 
export const getAllNews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const newsList = await getAllNewsServices(page, limit);

    res.status(200).json({
      message: "Fetched successfully",
      success: true,
      ...newsList, // contains pagination info + data
    });
  } catch (error) {
    res.status(500).json({
      message: "Fetch failed",
      success: false,
      error: error.message,
    });
  }
};



export const createNews = async (req, res) => {
  try {
    const { title, summary, date, link } = req.body;

    if (!title || !summary || !date) {
      return res.status(400).json({ error: "Title, summary and date are required" });
    }

    let imageUrl = null;

    // Check if file is uploaded
    if (req.file) {
      // Upload image buffer to Cloudinary
      const uploadResult = await cloudinary.uploader.upload_stream(
        { folder: "news_images" },
        (error, result) => {
          if (error) {
            throw new Error("Cloudinary upload failed");
          }
          return result;
        }
      );

      // Note: upload_stream requires special handling, use a promise wrapper:

      imageUrl = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "news_images" },
          (error, result) => {
            if (error) return reject(error);
            resolve(result.secure_url);
          }
        );
        stream.end(req.file.buffer);
      });
    }

    // Prepare data with imageUrl
    const newsData = {
      title,
      summary,
      date,
      imageUrl,
      link: link || null,
    };

    const news = await createNewsService(newsData);

    res.status(201).json({ message: "News added", news });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create", details: error.message });
  }
};

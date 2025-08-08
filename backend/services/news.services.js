// import News from "../model/News.js"


// export const getAllNewsServices = async() =>{
//         const news = await News.find().sort({_id:-1})
//         return news
// }

// export const createNewsService = async(newsData)=>{
//     const {title,summary,date} = newsData
//     if(!title || !date || !summary){
//         throw new Error("All field required")
//     }

//     const news = new News({title,summary,date})
//     return await news.save()
// }

import News from "../model/News.js";
import axios from "axios";
import dotenv from 'dotenv'
dotenv.config()

const NEWS_API_KEY = process.env.API_KEY;



export const getAllNewsServices = async (page = 1, limit = 10) => {
  // 1. Get news from MongoDB
  const localNews = await News.find().sort({ _id: -1 }).lean();

  const formattedLocal = localNews.map(item => ({
    _id: item._id.toString(),
    title: item.title,
    summary: item.summary,
    date: item.date,
    imageUrl: item.imageUrl || null,
    link: item.link || null,
    source: "Local Database",
  }));

  // 2. Get news from external API
  const externalNewsResponse = await axios.get(
    `https://newsapi.org/v2/everything`,
    {
      params: {
        q: "india",
        sortBy: "publishedAt",
        apiKey: NEWS_API_KEY,
      },
    }
  );

  const formattedExternal = externalNewsResponse.data.articles.map((article, index) => ({
    _id: `api-${index}`, // unique fake ID for frontend
    title: article.title,
    summary: article.description || article.content || "",
    date: article.publishedAt,
    imageUrl: article.urlToImage || null,
    link: article.url || null,
    source: article.source?.name || "External Source",
  }));

  // 3. Merge & sort by date (latest first)
  const mergedNews = [...formattedLocal, ...formattedExternal].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // 4. Pagination logic
  const totalItems = mergedNews.length;
  const totalPages = Math.ceil(totalItems / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedNews = mergedNews.slice(startIndex, endIndex);

  return {
    currentPage: page,
    totalPages,
    totalItems,
    pageSize: limit,
    data: paginatedNews,
  };
};


// export const createNewsService = async (newsData) => {
//   const { title, summary, date, imageUrl, link } = newsData;
//   if (!title || !date || !summary) {
//     throw new Error("All fields required");
//   }

//   const news = new News({
//     title,
//     summary,
//     date,
//     imageUrl: imageUrl || null,
//     link: link || null,
//   });

//   return await news.save();
// };


export const createNewsService = async (newsData) => {
  const { title, summary, date, imageUrl, link } = newsData;

  if (!title || !date || !summary) {
    throw new Error("All fields required");
  }

  const news = new News({
    title,
    summary,
    date,
    imageUrl: imageUrl || null,
    link: link || null,
  });

  const savedNews = await news.save();

  return {
    _id: savedNews._id.toString(),
    title: savedNews.title,
    summary: savedNews.summary,
    date: savedNews.date,
    imageUrl: savedNews.imageUrl || null,
    link: savedNews.link || null,
    source: "Local Database",
  };
};


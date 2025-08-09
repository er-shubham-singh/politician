import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: {
    type: String,   
  },
  summary: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default: null,
  },
  link: {
    type: String,
    default: null,
  },
});

const News = mongoose.model("News", newsSchema);

export default News;

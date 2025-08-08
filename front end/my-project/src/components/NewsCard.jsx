import React from "react";
import { CalendarIcon } from "lucide-react";

const cleanText = (text) => {
  if (!text) return "no data";
  return text
    .replace(/<[^>]+>/g, "")
    .replace(/\{\s*window\.open.*?\}\s*/g, "")
    .replace(/\[\+\d+\s*chars\]/g, "")
    .replace(/&gt;/g, ">")
    .replace(/&lt;/g, "<")
    .replace(/&amp;/g, "&")
    .trim();
};

const NewsCard = ({ title, date, summary, imageUrl, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="border border-gray-200 bg-white rounded-2xl shadow-sm hover:shadow-lg transition cursor-pointer overflow-hidden"
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={cleanText(title)}
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-bold text-blue-700 mb-2 line-clamp-2">
          {cleanText(title)}
        </h3>
        
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <CalendarIcon size={16} className="mr-1" />
          {date}
        </div>

        <p className="text-gray-700 text-sm line-clamp-3">
          {cleanText(summary)}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;

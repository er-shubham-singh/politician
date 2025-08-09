import React, { useEffect, useState } from "react";
import NewsCard from "./components/NewsCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../src/Redux/news/Action";
import NewsModal from "./components/NewsModal";

const News = () => {
  const dispatch = useDispatch();
  const { newsList, loading, error, currentPage, totalPages } = useSelector((state) => state.news);

  const [selectedNews, setSelectedNews] = useState(null);
  const [isPageLoading, setIsPageLoading] = useState(loading); 

  useEffect(() => {
    dispatch(fetchNews(currentPage, 10)); 
  }, [dispatch, currentPage]);

  useEffect(() => {
    setIsPageLoading(loading);
  }, [loading]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {

      dispatch(fetchNews(page, 10));
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
        Latest News & Updates
      </h2>

      {isPageLoading && (
        <div className="flex justify-center items-center py-10">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {!isPageLoading && (
        <>
          {error && <p className="text-center text-red-500">{error}</p>}

          <div className="grid md:grid-cols-3 gap-6">
            {newsList && newsList.length > 0 ? (
              newsList.map((news, idx) => (
                <NewsCard
                  key={news._id || idx}
                  title={news.title}
                  date={new Date(news.date).toDateString()}
                  summary={news.summary}
                  imageUrl={news.imageUrl}
                  onClick={() => setSelectedNews(news)}
                />
              ))
            ) : (
              <p className="text-center text-gray-600">No news available.</p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2 items-center">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              >
                Prev
              </button>

              <span className="px-4 py-2 text-blue-700 font-semibold">
                Page {currentPage} of {totalPages}
              </span>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      )}

      {selectedNews && (
        <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
      )}
    </div>
  );
};

export default News;

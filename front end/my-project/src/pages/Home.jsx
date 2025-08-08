import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../Redux/news/Action";
import NewsCard from "../components/NewsCard";
import NewsModal from "../components/NewsModal";
import SplashScreen from "../components/SplashScreen";
import HeroCarousel from "../components/HeroCarousel";

const Home = () => {
  const dispatch = useDispatch();
  const { newsList, loading, error, totalPages } = useSelector(
    (state) => state.news
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNews, setSelectedNews] = useState(null);
  const [showSplash, setShowSplash] = useState(true);
  const [isPageLoading, setIsPageLoading] = useState(false);

  // Fetch data when page changes
  useEffect(() => {
    setIsPageLoading(true);
    dispatch(fetchNews(currentPage, 6));
  }, [dispatch, currentPage]);

  // Hide splash after 3s
  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // Hide page loader when redux finishes loading
  useEffect(() => {
    if (!loading) {
      setIsPageLoading(false);
    }
  }, [loading]);

  if (showSplash) return <SplashScreen />;

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Carousel */}
      {newsList && newsList.length > 0 && (
        <HeroCarousel
          slides={newsList.slice(0, 5)} // only first 5 news
          onSlideClick={(news) => setSelectedNews(news)}
        />
      )}

      {/* Vision & Mission */}
      <section className="py-12 px-6 grid md:grid-cols-2 gap-6 text-center md:text-left">
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">Vision</h2>
          <p className="text-gray-600">
            To build a society where everyone has access to equal opportunities,
            education, and healthcare.
          </p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">Mission</h2>
          <p className="text-gray-600">
            Empowering communities through transparent governance and people-centric initiatives.
          </p>
        </div>
      </section>

      {/* News Section */}
      <section className="p-6">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">
          Latest News & Updates
        </h2>

        {isPageLoading ? (
          <div className="flex justify-center items-center py-10">
            <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
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
                !loading && (
                  <p className="text-center text-gray-600">No news available.</p>
                )
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 gap-2 items-center">
                <button
                  onClick={() => setCurrentPage((prev) => prev - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                  Prev
                </button>

                <span className="px-4 py-2 text-blue-700 font-semibold">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* Modal */}
      {selectedNews && (
        <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
      )}
    </div>
  );
};

export default Home;

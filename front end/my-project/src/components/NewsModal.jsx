import React from "react";
import ReactDOM from "react-dom";
import "./NewsModal.css";

const NewsModal = ({ news, onClose }) => {
  return ReactDOM.createPortal(
    <div className="news-modal-backdrop" onClick={onClose}>
      <div
        className="news-modal-container"
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click from closing
      >
        {/* Close Button */}
        <button className="news-modal-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        {/* Image */}
        {news.imageUrl && (
          <img
            src={news.imageUrl}
            alt={news.title}
            className="news-modal-image"
          />
        )}

        {/* Title */}
        <h2 className="news-modal-title">{news.title}</h2>
        <p className="news-modal-date">
          {new Date(news.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Summary / Content */}
        <p className="news-modal-content">{news.summary}</p>

        {/* Source link */}
        {news.link && (
          <a
            href={news.link}
            target="_blank"
            rel="noopener noreferrer"
            className="news-modal-button"
          >
            Read Full Article →
          </a>
        )}
      </div>
    </div>,
    document.body
  );
};

export default NewsModal;

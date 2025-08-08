import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNews, resetNewsCreate } from "../Redux/news/Action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateNews = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [date, setDate] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.news);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (success) {
      toast.success("News created successfully!", {
        position: "top-right",
        autoClose: 3000, // 3 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      // Reset form fields after success
      setTitle("");
      setSummary("");
      setDate("");
      setImageFile(null);

      // Optionally reset success flag in redux after showing toast
      dispatch(resetNewsCreate());
    }
  }, [success, dispatch]);

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0] || null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!token) {
      alert("You must be logged in to create news.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("summary", summary);
    formData.append("date", date);

    if (imageFile) {
      formData.append("image", imageFile);
    }

    dispatch(createNews(formData, token));
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 border rounded shadow relative">
      <h2 className="text-xl font-bold mb-4">Create News</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="News Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
          disabled={loading} // Disable form while loading
        />

        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
          disabled={loading} // Disable form while loading
        ></textarea>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
          disabled={loading} // Disable form while loading
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
          disabled={loading} // Disable form while loading
        />

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 px-4 rounded text-white ${
            loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-700 hover:bg-blue-800"
          }`}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>

        {error && (
          <p className="text-red-600 mt-2 text-center font-medium">{error}</p>
        )}
      </form>

      {/* Toast container to show toast messages */}
      <ToastContainer />
    </div>
  );
};

export default CreateNews;

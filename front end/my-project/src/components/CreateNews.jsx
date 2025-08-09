import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNews, resetNewsCreate } from "../Redux/news/Action";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const CreateNews = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [date, setDate] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [buttonText, setButtonText] = useState("Submit");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.news);
  const { token } = useSelector((state) => state.auth);
useEffect(() => {
  if (loading) {
    setButtonText("Submitting...");
  }
}, [loading]);


  useEffect(() => {
    if (success) {
      setButtonText("Data Saved ✅");
      toast.success("News created successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
      setTitle("");
      setSummary("");
      setDate("");
      setImageFile(null);

      setTimeout(() => {
        setButtonText("Submit");
      }, 2000);

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

  setButtonText("Submitting...");

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
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Go to Home
        </button>
      </div>

      <h2 className="text-xl font-bold mb-4">Create News</h2>

      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="News Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
          disabled={loading}
        />

        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
          disabled={loading}
        ></textarea>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
          disabled={loading}
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="mb-4"
          disabled={loading}
        />

<button
  type="submit"
  disabled={loading || buttonText === "Data Saved ✅"}
  className={`w-full py-2 px-4 rounded text-white ${
    loading || buttonText === "Data Saved ✅"
      ? "bg-blue-400 cursor-not-allowed"
      : "bg-blue-700 hover:bg-blue-800"
  }`}
>
  {buttonText}
</button>


        {error && (
          <p className="text-red-600 mt-2 text-center font-medium">{error}</p>
        )}
      </form>

      <ToastContainer />
    </div>
  );
};

export default CreateNews;

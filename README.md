# 🏛️ Politician Website – Full Stack Assignment (B2World)

This is a full-stack MERN website built as an assignment for the Full Stack Developer role at **B2World – A Unit of BTOW Pvt. Ltd.**  
It is a fully responsive and modern website for a political figure, showcasing biography, vision, news, gallery, and contact features.

---

##  Tech Stack

###  Frontend
- **React.js**
- **MUI (Material UI)** – For UI components
- **React Toastify** – Toast notifications
- **Framer Motion** – Animations
- **React Icons & Lucide Icons** – Icon libraries
- **Cloudinary** – Image hosting
- **Axios, Redux Toolkit** – API & state management

###  Backend
- **Node.js + Express.js**
- **MongoDB + Mongoose**
- **Cloudinary SDK** – For media uploads

---

##  Features

-  **Home Page** with splash loader and typing effect
-  **About Section** (biography, education, achievements)
-  **Vision & Mission** cards
-  **Gallery** with images hosted on Cloudinary
-  **News & Updates** with pagination and loader
-  **Contact Form** (Name, Email, Message)
-  **Social Media Integration**
-  **Responsive Design**
-  **Page transitions and animations** using Framer Motion
-  **User-friendly notifications** with Toastify
- **Only Admin can login with email and password then after he get access to add news which need one image, title, summary, and date**
- **Any one can join as Volunteer but ony he/she hase to submit name,   mobile number and reason that why they want to join**

---

##  Folder Structure

```bash
test/
├── frontend/my-project
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── assets/
│   └── App.js
│
├── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── server.js
│
├── .gitignore
├── README.md
└── package.json

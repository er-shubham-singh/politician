// seedAdmin.js
import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import Admin from "./model/admin.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await connectDB();

    const existing = await Admin.findOne({ email: "admin@xyz.com" });
    if (existing) {
      console.log("Admin already exists 🚫");
      return process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    const newAdmin = await Admin.create({
      name: "Shubham Admin",
      email: "admin@xyz.com",
      password: hashedPassword,
    });

    console.log("✅ Admin created successfully:", newAdmin);
    process.exit();
  } catch (err) {
    console.error("❌ Error creating admin:", err.message);
    process.exit(1);
  }
};

createAdmin();

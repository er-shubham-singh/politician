import jwt from "jsonwebtoken";
import Admin from "../model/admin.js";
import bcrypt from "bcryptjs";

export const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("🔐 Login attempt:", email, password);

    const admin = await Admin.findOne({ email });
    if (!admin) {
      console.log("❌ Admin not found");
      return res.status(401).json({ error: "Invalid credentials (admin not found)" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      console.log("❌ Password does not match");
      return res.status(401).json({ error: "Invalid credentials (wrong password)" });
    }

    const token = jwt.sign({ id: admin._id, role: "admin" }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      message: "Login successful",
      token,
      admin: {
        email: admin.email,
        id: admin._id,
        role: "admin",
      },
    });
  } catch (error) {
    console.log("💥 Login error:", error);
    res.status(500).json({ error: "Server error during login" });
  }
};

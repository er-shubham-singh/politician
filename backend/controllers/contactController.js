import { createContactService } from "../services/contact.service.js";

export const createContact = async (req, res) => {
  try {
    const response = await createContactService(req.body);
    res.status(201).json({ message: "Contact form submitted!", data: response });
  } catch (err) {
    res.status(500).json({ error: "Server error", detail: err.message });
  }
};

import Contact from "../model/Contact.js";

export const createContactService = async (contactData) => {
  const { name, email, message } = contactData;

  if (!name || !email || !message) {
    throw new Error("All fields are required");
  }

  const contact = new Contact({ name, email, message });
  return await contact.save();
};

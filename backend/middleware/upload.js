import multer from 'multer';

// Use memory storage to directly upload from buffer
const storage = multer.memoryStorage();
export const upload = multer({ storage });

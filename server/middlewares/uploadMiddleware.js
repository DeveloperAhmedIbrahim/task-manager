import multer from "multer";

// Configure storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// File filter
const fileFilter = (req, file, cb) => {
    const allowTypes = ['image/jpeg', 'image/jpg', 'image/png', 'text/plain'];
    if (allowTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Only .jpeg, .jpg, .png formates are allowed'), false);
    }
}

const upload = multer({ storage, fileFilter });

export default upload;
import express from 'express';
import { registerUser, loginUser, getAllUsers, getUserbyId } from '../controllers/user-controller.js';
import { createCategory, getAllCategories, getCategoryById } from '../controllers/category-controller.js';
import { createBlog, getAllBlogs, getBlogById, updateBlog   } from '../controllers/blog-controller.js';

const router = express.Router();

//user
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/users', getAllUsers);
router.get('/user/:id',getUserbyId);
router.get('/health', (req, res) => {
    res.status(200).json({message: "API is healthy", status: "success"});
});

//category
router.post('/category', createCategory);
router.get('/categories', getAllCategories);
router.get('/category/:id', getCategoryById);


//blogs
router.post('/blog', createBlog);
router.get('/blogs', getAllBlogs);
router.get('/blog/:id', getBlogById);
router.put('/blog/update/:id', updateBlog);

export default router;
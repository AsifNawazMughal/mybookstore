import express from 'express';
import routes from './routes/routes.js';
import { connectDB } from './config/db_connection.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api',routes)


// app.get('/',(req,res)=>{
//     res.send('Hello World');
// })

// app.get("/blog",(req,res)=>{
//     res.json(blogPosts);
// })

// app.get("/blog/:id",(req,res)=>{
//     const {id}  = req.params;
//     const blogPost = blogPosts.find(post => post.id === parseInt(id));
//     if(blogPost){
//         res.json(blogPost);
//     }else{
//         res.status(404).json({message:"Blog post not found"});
//     }

// })

// app.get("/users",(req,res)=>{
//     res.json(users);
// })

// app.get("/users/:id",(req,res)=>{
//     const id = req.params.id; 
//     const user = users.find(user=> user.id === parseInt(id));
//     if(user){
//         res.json(user);
//     }else{
//         res.status(404).json({message:"User not found"});
//     }
// })

connectDB();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
import express from 'express';

const router = express.Router();

// localhost:5000/posts
// http://localhost:5000/posts

router.get('/', (req, res) => {
    res.send('THIS WORKS!');
});

export default router;


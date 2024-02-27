const express = require('express');
const router = express.Router();
const {
    getBlog,
    addBlog,
    deleteBlog,
    updateBlog
} = require('./controller.js');

router.get('/', getBlog);
router.post('/add', addBlog);
router.delete('/delete/:id', deleteBlog);
router.put('/update/:id', updateBlog);

module.exports = router;

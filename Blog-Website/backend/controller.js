const mongoose = require('mongoose');
const data = require('./model.js');

const getBlog = async (req, res) => {
    let list;
    try {
        list = await data.find();
    } catch (e) {
        console.log(e)
    }

    if (!list) {
        return res.status(404).json({ message: "No Blogs Found" });
    }
    return res.status(200).json({ list });
};

const addBlog = async (req, res) => {
    const { title, description } = req.body;
    const currentDate = new Date();
    const newBlog = new data({
        title,
        description,
        currentDate
    });
    try {
        await newBlog.save();
        return res.status(200).json({ newBlog });
    } catch (e) {
        console.log(e);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const deleteBlog = async (req, res) => {
    const id = req.params.id;
    try {
        const findBlog = await data.findByIdAndDelete(id);
        if (!findBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        return res.status(200).json({ message: "Blog deleted successfully" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

const updateBlog = async (req, res) => {
    const id = req.params.id;
    const { title, description } = req.body;
    try {
        const updatedBlog = await data.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        );
        if (!updatedBlog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        return res.status(200).json({ updatedBlog });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    getBlog,
    addBlog,
    deleteBlog,
    updateBlog
};

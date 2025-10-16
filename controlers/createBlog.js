const BlogsModel = require('../Model/blogsModel');

const createBlog = async (req, res) => {
    try {
        const { title, content, author } = req.body;

        const newBlog = new BlogsModel({ title, content, author });

        const response = await newBlog.save();
        console.log("Request body:", req.body);
        res.status(201).send({ success: true, data: response });

    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
};

module.exports = createBlog;
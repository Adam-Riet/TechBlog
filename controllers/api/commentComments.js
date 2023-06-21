const router = require('express').Router();
const { Comment } = require('../models');

router.post('/comments', async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(201).json(newComment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

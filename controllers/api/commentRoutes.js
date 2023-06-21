const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/comments', withAuth, async (req, res) => {
  console.log(req.body);
  try {
    console.log(req.body);
    const newComment = await Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    });

    console.log(newComment);
    
    res.redirect(req.headers.referer);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

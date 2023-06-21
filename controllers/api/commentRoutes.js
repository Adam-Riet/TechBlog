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

// router.get('/posts/:id', withAuth, async (req, res) => {
//   try {
//     const postData = await Post.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//         {
//           model: Comment, // Also include the comments
//           include: [
//             {
//               model: User, // Include user details for each comment
//               attributes: ['name'],
//             },
//           ],
//         },
//       ],
//     });

//     const post = postData.get({ plain: true });

//     console.log(post);
    
//     res.render('post', {
//       ...post,
//       logged_in: req.session.logged_in,
//       title: 'Comments'
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;

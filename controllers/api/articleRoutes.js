const router = require('express').Router();
const { Article } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newArticle = await Article.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newArticle);
  } catch (err) {
    res.status(400).json(err);
  }
});


  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const articleData = await Article.destroy({
        where: {
          id: req.params.id,
          author_id: req.session.author_id,
        },
      });
  
      if (!articleData) {
        res.status(404).json({ message: 'No article found with this id!' });
        return;
      }
  
      res.status(200).json(articleData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

  module.exports = router;
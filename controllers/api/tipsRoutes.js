const router = require('express').Router();
const { Tips } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newTips = await Tips.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newTips);
  } catch (err) {
    res.status(400).json(err);
  }
});

  
router.delete('/:id', withAuth, async (req, res) => {
    try {
      const tipsData = await Tips.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!tipsData) {
        res.status(404).json({ message: 'No tip found with this id!' });
        return;
      }
  
      res.status(200).json(tipsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

 

  module.exports = router;
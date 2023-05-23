const router = require('express').Router();
const { Article, Tips, User } = require('../models');
const withAuth = require('../utils/auth.js');

router.get('/', async (req, res) => {
  try {
    const articleData = await Article.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const articles = articleData.map((article) => article.get({ plain: true }));
    console.log(articles)
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      articles, 
      
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  };
});


router.get('/tips', async (req, res) => {
  try {
    const tipsData = await Tips.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        }
      ]
    })
    const tips = tipsData.map((tip) => tip.get({ plain: true }));

    res.render('tips', {
      tips,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

   
});


router.get('/newtip', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Tips }],
    });

    const user = userData.get({ plain: true });

    res.render('newtip', {
      ...user,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

   
});


router.get('/newarticle', async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Article }],
    });

    const user = userData.get({ plain: true });

    res.render('newarticle', {
      ...user,
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }

   
});

router.get('/article/:id', async (req, res) => {
  try {
    const articleData = await Article.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const article = articleData.get({ plain: true });

    res.render('article', {
      ...article,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/tips/:id', async (req, res) => {
  try {
    const tipsData = await Tips.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const tip = tipsData.get({ plain: true });

    res.render('tip', {
      ...tip,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // need to change the article model to article
      include: [{ model: Article }],
    });

    const user = userData.get({ plain: true });
    //need profile.handlebars in view folder
    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    // res.redirect('/newtip');
    return;
  }

  res.render('login');
});

module.exports = router;

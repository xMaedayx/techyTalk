const router = require('express').Router();
const userRoutes = require('./userRoutes');
const articleRoutes = require('./articleRoutes.js');
const commentsRoutes = require('./commentsRoutes.js');

router.use('/Users', userRoutes);
router.use('/Article', articleRoutes);
router.use('/Comments', commentsRoutes);


module.exports = router;
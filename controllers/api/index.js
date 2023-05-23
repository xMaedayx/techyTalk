const router = require('express').Router();
const userRoutes = require('./userRoutes');
const articleRoutes = require('./articleRoutes.js');
const tipsRoutes = require('./tipsRoutes.js');

router.use('/Users', userRoutes);
router.use('/Article', articleRoutes);
router.use('/Tips', tipsRoutes);


module.exports = router;
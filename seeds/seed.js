const sequelize = require('../config/connection');
const { User, Article, Tips } = require('../models');
const userData = require ("./userData.json");
const tipsData = require("./tipsData.json");
const articleData = require("./articleData.json");



const seedDatabase = async () =>  {
    await sequelize.sync({ force: true});

    const users = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });

    // await Article.bulkCreate(articleData, {
    //     individualHooks: true,
    //     returning: true,


    // } );

    for (const article of articleData) {
        await Article.create({
          ...article,
          user_id: users[Math.floor(Math.random() * users.length)].id,
        });
      }

    // await Tips.bulkCreate(tipsData, {
    //     individualHooks: true, 
    //     returning: true, 


    // });

    for (const tips of tipsData) {
        await Tips.create({
          ...tips,
          user_id: users[Math.floor(Math.random() * users.length)].id,
        });
      }

process.exit(0);
};

seedDatabase();
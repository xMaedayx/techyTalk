const { Sequelize } = require('sequelize');
const User = require('./User');
const Article = require('./Article');
const Tips = require('./Tips');

User.hasMany(Article, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

User.hasMany(Tips, {
   foreignKey: "user_id",
   onDelete: "CASCADE"
 
});

Article.belongsTo(User, {
    foriegnKey: "user_id",

});

Tips.belongsTo(User, {
    foreignKey: "user_id"

});









module.exports = { 
    User, 
    Article, 
    Tips,
 };

// user and articles destructuring (refer index.js in mini28)
const { Sequelize } = require('sequelize');
const User = require('./User');
const Article = require('./Article');
const Comments = require('./Comments');

User.hasMany(Article, {
    foreignKey: "user_id",
    onDelete: "CASCADE"
});

User.hasMany(Comments, {
   foreignKey: "user_id",
   onDelete: "CASCADE"
 
});

Article.belongsTo(User, {
    foriegnKey: "user_id",

});

Article.hasMany(Comments, {
    foreignKey: "article_id",
    onDelete: "CASCADE"
});

Comments.belongsTo(User, {
    foreignKey: "user_id"

});









module.exports = { 
    User, 
    Article, 
    Comments,
 };

// user and articles destructuring (refer index.js in mini28)
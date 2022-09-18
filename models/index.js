const User = require('./User.js');
const Post = require('./Post.js');
const Comment = require('./Comment.js');

// Create Associations here
User.hasMany(Post, {
    foreignKey: 'user_id'
});
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});
Post.hasMany(Comment, {
    foreignKey: 'post_id',
});
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});


// export data
module.exports = { User, Post, Comment };
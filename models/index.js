const User = require('./User');
const Wedding = require('./Wedding');
const Event = require('./Event');
const Event_item = require('./Event_item');

// create associations
User.hasOne(Wedding, {
    foreignKey: 'owner'
});

Wedding.belongsTo(User, {
    foreignKey: 'owner',
});

Event.belongsTo(Wedding, {
    foreignKey: 'wedding_id'
});

Event.hasMany(Event_item, {
    foreignKey: 'event_id'
});

Event_item.belongsTo(Event, {
    foreignKey: 'event_id'
})


module.exports = { User, Post, Vote, Comment };
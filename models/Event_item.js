const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

// create our Post model
class Event_item extends Model {}

// create fields/columns for Post model
Event_item.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false 
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: true
        },
        event_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'event',
                key: 'id'
            }
        }
    },
        {
          sequelize,
          freezeTableName: true,
          underscored: true,
          modelName: 'event_item'
        }
      );

module.exports = Event_item;
    
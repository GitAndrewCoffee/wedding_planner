const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

// create our Post model
class Event extends Model {}

// create fields/columns for Post model
Event.init(
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
        start_time: {
            type: DataTypes.TIME,
            allowNull: true,
          },
        end_time: {
            type: DataTypes.TIME,
            allowNull: true,
        },
        user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
            }
        }
    },
        {
          sequelize,
          freezeTableName: true,
          underscored: true,
          modelName: 'event'
        }
      );

module.exports = Event;
    
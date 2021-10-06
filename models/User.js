const {Model,DataTypes}= require('sequelize');
const sequelize = require('../config/connection');
class User extends Model{}
User.init(
    {
    id: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true

    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          // this means the password should be 5 or more characters
          len: [5]
        }
      }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
      }
    );

module.exports = User;
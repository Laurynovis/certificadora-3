// User.js
import { DataTypes } from 'sequelize';
import { sequelize } from './database/connection.js';

export const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  typeuser: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'users', 
});

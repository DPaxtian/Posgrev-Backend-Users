import Sequelize from 'sequelize';

export const sequelize = new Sequelize('uvposgres', 'uvposgres', 'root123', {
  host: 'localhost',
  dialect: 'mysql'

});
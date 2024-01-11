import Sequelize from 'sequelize';

export const sequelize = new Sequelize('pruebaposgres', 'uvposgres', 'root1', {
  host: 'localhost',
  dialect: 'mysql'

});
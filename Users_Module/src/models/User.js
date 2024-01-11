    import { DataTypes } from 'sequelize';
    import {sequelize} from '../database/dbConfig.js';

    export const User = sequelize.define('User',{
        ID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        rol: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombreUsuario:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        identificadorPrograma: {
            type: DataTypes.STRING,
            allowNull: true
        },
    },{
        freezeTableName: true,
        timestamps: false
    })
const mongoose = require("mongoose");

const DBURI = 'mongodb+srv://uvposgrev:root1@cluster0.fn3jqmo.mongodb.net/Posgrev';

const connect = () => {
    mongoose.connect(DBURI)
        .then(() => {
            console.log('Connected to database');
        })
        .catch((err) => {
            console.error('Data base Error!:', err);
        });
};

module.exports = () => {
    connect();
};
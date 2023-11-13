const mongoose = require("mongoose");

const DBURI = 'mongodb://uvposgrev:root1@127.0.0.1:27017/Posgrev?authMechanism=DEFAULT&authSource=Posgrev';

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
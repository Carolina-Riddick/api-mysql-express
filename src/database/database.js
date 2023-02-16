import mysql from "promise-mysql";
import config from "./../config";

const connection = mysql.createConnection({
    host: config.host,
    user: config.user,
    database: config.database,
    password : config.password
});

const getConnection = () => {
    return connection;

}

module.exports = {
    getConnection 
};
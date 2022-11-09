require('dotenv').config();

const config = {
    app:{
        port: process.env.PORT || 3030,
        env: process.env.NODE_ENV || 'dev',
    },
    db:{
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        db: process.env.DB_NAME,
        port: process.env.DB_PORT
    }
}
module.exports = {config};
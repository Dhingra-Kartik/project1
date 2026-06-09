const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000, //if at any point of time someone forgets dotenv || we used this. This is though not the way, you can creat eone feature branch of this
    ATLAS_DB_URL : process.env.ATLAS_DB_URL,
    LOG_DB_URL : process.env.LOG_DB_URL,
    OUR_NODE_ENV : process.env.OUR_NODE_ENV
}
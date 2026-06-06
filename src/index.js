const express = require('express');
const bodyParser = require('body-parser')
const {PORT} = require('./config/server.config');
const apiRouter = require('./routes');
const BaseError = require('./errors/baseError');
const ErrorHandler = require('./utils/errorHandler');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true})); //qs library is used when you do extended:true
app.use(bodyParser.text());

app.get('/ping', (req, res) => {
    return res.json({message: 'Problem Service is Alive'});
})

app.use('/api', apiRouter);

app.use(ErrorHandler);  //Let's have it after all the requests.

app.listen(PORT, () => {
console.log(`Server Started at port: ${PORT}`);
});

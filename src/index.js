const express = require('express');
const bodyParser = require('body-parser')
const {PORT} = require('./config/server.config');
const apiRouter = require('./routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true})); //qs library is used when you do extended:true
app.use(bodyParser.text());

app.get('/ping', (req, res) => {
    return res.json({message: 'Problem Service is Alive'});
})

app.use('/api', apiRouter);
app.listen(PORT, () => {
console.log('Server Started at port: ${PORT}');
});
//installing nodemon, make sure you add under scripts in package.json
//"dev": "npx nodemon src/index.js",
//npm run dev, is only required to run at port 3000
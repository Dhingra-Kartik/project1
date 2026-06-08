const express = require('express');
const bodyParser = require('body-parser')
const {PORT} = require('./config/server.config');
const apiRouter = require('./routes');
const BaseError = require('./errors/baseError');
const ErrorHandler = require('./utils/errorHandler');
const connectToDb = require('./config/db.config');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended: true})); //qs library is used when you do extended:true
app.use(bodyParser.text());

app.get('/ping', (req, res) => {
    return res.json({message: 'Problem Service is Alive'});
})

app.use('/api', apiRouter);

app.use(ErrorHandler);  //Let's have it after all the requests.

app.listen(PORT, async () => {
console.log(`Server Started at port: ${PORT}`);
await connectToDb();
console.log("Successfully Connected to DB");
// const mongoose = require('mongoose');
//     const catSchema = new mongoose.Schema({ name: String, age: Number });
//     const Cat = mongoose.model('Cat', catSchema);

//     const kitty = await Cat.create({ name: "Whiskers", age: 23 });
//     console.log("🐱 Cat created:", kitty);
});

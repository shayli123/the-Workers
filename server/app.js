const express = require('express')
const mongoose = require('mongoose')
const router = require('./routers/api')
const dotenv = require('dotenv')
const app = express();
const bodyParser = require('body-parser')
app.use(bodyParser.json())
dotenv.config()

const connectionParams = {
    newUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    keepAlive: true,
    useCreateIndex: true,
    useFindAndModify: false

}
mongoose.connect(process.env.DB_CONNECT, connectionParams)
    .then(() => {
        console.log('AtraProject mongoDB connect!')
    })
    .catch((err) => {
        console.log({ error: err })
    })

app.use(bodyParser.json())
app.use((req, res, next) => {
    console.log('on middlware', req.method)
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methodes", "PUT, POST, PATCH ,DELETE, GET, delete");

        return res.status(200).json({});
    }
    next();
});
app.use(express.json())
app.use('/', router)
app.listen(4000, () => {
    console.log("app listen port 4000")
})

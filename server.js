const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const properties = require('./config/properties');
const customersRoutes =  require('./customers/customers.routes');
const db = require('./config/database');
//Init db
db();
const bodyParserJSON = bodyParser.json();
const bodyParserURLEncoded = bodyParser.urlencoded({extended: true});
const app = express();
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use(cors());
//init ROUTER
const router = express.Router();
app.use('/api',router);
customersRoutes(router);
app.listen(properties.PORT,()=> console.log(`Server is running on ${properties.PORT}`));
'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const catRoute = require('./routes/catRoute.js');
const userRoute = require('./routes/userRoute.js');
require('dotenv').config()

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.use('/cat', catRoute);
app.use('/user',userRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

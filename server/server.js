const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());

//Connect database
connectDB();

//Initialise middleware
app.use(express.json());

app.use(bodyParser.json());

app.use('/api', require('./routes/api'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`));


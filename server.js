const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const OSCPRoutes = require('./routes/DPSCitationRoutes');

require('dotenv').config();

const app = express();
app.use(cors())

const port = process.env.PORT || 3002;

app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI_DEV, {
})
.then(()=>{
  console.log(process.env.NODE_ENV);
  console.log('Connected to MongoDB');
})
.catch((err)=>{
  console.error('Error connecting to MongoDB:', err.message)
});

app.use('/users', userRoutes);
app.use('/dpscitations',  OSCPRoutes)

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

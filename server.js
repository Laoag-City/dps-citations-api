const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const DPSCitationsRoutes = require('./routes/DPSCitationRoutes');

require('dotenv').config();

const app = express();
app.use(cors())

const port = process.env.PORT || (process.env.NODE_ENV === 'production' ? 3081 : 3002);;

app.use(bodyParser.json());

let mongoUri;

// Choose appropriate MongoDB URI based on environment
if (process.env.NODE_ENV === 'production') {
  mongoUri = process.env.MONGO_URI_PROD;
} else {
  mongoUri = process.env.MONGO_URI_DEV;
}

mongoose.connect(mongoUri, {
})
.then(()=>{
  console.log(process.env.NODE_ENV);
  console.log('Connected to MongoDB');
})
.catch((err)=>{
  console.error('Error connecting to MongoDB:', err.message)
});

app.use('/users', userRoutes);
app.use('/dpscitations',  DPSCitationsRoutes)

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

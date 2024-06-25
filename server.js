const fs = require('fs');
const https = require('https');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const DPSCitationsRoutes = require('./routes/DPSCitationRoutes');

require('dotenv').config();

const app = express();
app.use(cors());

const port = process.env.PORT || (process.env.NODE_ENV === 'production' ? 3081 : 3002);
app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/dpscitations', DPSCitationsRoutes);

// Determine MongoDB URI and server setup based on environment
if (process.env.NODE_ENV === 'production') {
  mongoUri = process.env.MONGO_URI_PROD;
  // Load TLS certificate and key
  const options = {
    cert: fs.readFileSync('/node-tls/fullchain.pem'),
    key: fs.readFileSync('/node-tls/privkey.pem')
  };

  mongoose.connect(mongoUri, {}).then(() => {
    console.log('Production environment');
    console.log('Connected to MongoDB', mongoUri);
    https.createServer(options, app).listen(port, () => {
      console.log(`Server is up and running on port ${port} with TLS`);
    });
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
} else {
  mongoUri = process.env.MONGO_URI_DEV;

  mongoose.connect(mongoUri, {}).then(() => {
    console.log('Development environment');
    console.log('Connected to MongoDB', mongoUri);
    app.listen(port, () => {
      console.log(`Server is up and running on port ${port}`);
    });
  }).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
  });
}

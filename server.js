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
 

const port = process.env.PORT || (process.env.NODE_ENV === 'production' ? 3081 : 3002);
app.use(bodyParser.json());

let mongoUri;

// Choose appropriate MongoDB URI based on environment
if (process.env.NODE_ENV === 'production') {
  mongoUri = process.env.MONGO_URI_PROD;
} else {
  mongoUri = process.env.MONGO_URI_DEV;
}

mongoose.connect(mongoUri, {
}).then(()=>{
  console.log(process.env.NODE_ENV);
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err.message);
});

app.use('/users', userRoutes);
app.use('/dpscitations', DPSCitationsRoutes);

//Non https
//app.listen(port, () => {
//  console.log(`Server is up and running on port ${port}`);
//});

//https
// Load TLS certificate and key
const options = {
  // key: fs.readFileSync('/etc/letsencrypt/live/your_domain/privkey.pem'),
  // cert: fs.readFileSync('/etc/letsencrypt/live/your_domain/fullchain.pem')
  cert: fs.readFileSync('/node-tls/fullchain.pem'),
  key: fs.readFileSync('/node-tls/privkey.pem')
};

https.createServer(options, app).listen(port, () => {
  console.log(`Server is up and running on port ${port} with TLS`);
});

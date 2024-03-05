const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
//const applicationController = require('./controllers/applicationController');
//const userController = require('./controllers/userController')
//const auth = require('./middlewares/auth');
//const OSCPApplicationRoutes = require('./routes/OSCPApplicationRoutes')
const userRoutes = require('./routes/userRoutes');
const OSCPRoutes = require('./routes/DPSCitationRoutes');
//const OSCPApplicationRoutes = require('/routes/OSCPApplicationRoutes');

require('dotenv').config();

const app = express();
app.use(cors())

const port = process.env.PORT || 3001;
//const MONGO_URI = '';

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

//app.post('/users/register', userController.register);
//app.post('/users/login', userController.login);

//app.post('/applications', applicationController.createApplication);

//no auth version
//app.get('/applications', applicationController.getApplications);

// Example of a protected route
//app.get('/applications',auth, applicationController.getApplications);
//app.get('/applications/:id', applicationController.getApplicationById);
//app.put('/applications/:id', applicationController.updateApplication);
//app.delete('/applications/:id', applicationController.deleteApplication);

app.use('/users', userRoutes);
app.use('/oscpapplications',  OSCPRoutes)

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});

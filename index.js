const express = require('express');
const app = express();

//import routes
const authRoute = require('./routes/auth');

//route middleware
app.use('/api/user', authRoute);

app.listen(4000, () => console.log('Server Up and running'));
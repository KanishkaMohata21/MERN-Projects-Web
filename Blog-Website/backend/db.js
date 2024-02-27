const mongoose = require('mongoose');

mongoose.set('strict', false);

mongoose.connect('url')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Connection error', error));

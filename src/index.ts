import express from 'express';
import mongoose from 'mongoose';

mongoose.connect('mongodb://127.0.0.1:27017')
  .then(() => {
    const app = express();

    app.listen(3001, () => {
      console.log('Server started on http://localhost:3001');
    });
  })
  .catch(() => console.error('Could not connect to MongoDB...'));

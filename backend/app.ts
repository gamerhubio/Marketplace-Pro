import dotenv from "dotenv"
import  "express-async-errors"
dotenv.config()

import  express from 'express';
const  app = express();


import  connectDB from './db/connect';
import  mainRouter from './routes/main'

import  notFoundMiddleware from './middleware/not-found';
import  errorHandlerMiddleware from './middleware/error-handler';

// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1', mainRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
     await connectDB(`${process.env.MONGO_URI}`);
    app.listen(port, () =>
        // tslint:disable-next-line:no-console
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();

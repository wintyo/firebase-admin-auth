import express from 'express';
import cors from 'cors';
import * as functions from 'firebase-functions';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORSを許可する
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

const apiRouter = express.Router();

apiRouter.get('/health', (req, res) => {
  res.send('I am OK!');
});

app.use('/api', apiRouter);

export const api = functions.https.onRequest(app);

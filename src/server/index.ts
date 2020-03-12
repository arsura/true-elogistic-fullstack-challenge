import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import router from './router';

const port = process.env.SERVER_PORT || 8080;

const app = express();
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

router(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.env.PWD + '/dist/client')));
  app.get('/*', function(_: Request, res: Response) {
    res.sendFile(path.join(process.env.PWD + '/dist', 'client', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
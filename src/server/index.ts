import express from 'express';
import path from 'path';
import router from './routes';

const port = process.env.SERVER_PORT || 8080;

const app = express();

router(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.env.PWD + '/dist/client')));
  app.get('/*', function(req: any, res: any) {
    res.sendFile(path.join(process.env.PWD + '/dist', 'client', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
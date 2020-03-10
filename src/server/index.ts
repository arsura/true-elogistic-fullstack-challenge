import express from 'express';
import path from 'path';

const port = process.env.SERVER_PORT || 3000;

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.env.PWD + '/dist')));
  app.get('/*', function(req: any, res: any) {
    res.sendFile(path.join(process.env.PWD + '/dist', 'index.html'));
  });
}

app.get('/api/ping', (req: any, res: any) => {
  res.send('pong');
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

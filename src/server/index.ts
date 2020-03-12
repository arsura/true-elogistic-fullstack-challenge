import Express from 'express';
import Path from 'path'

const port = process.env.SERVER_PORT || 8081;

const app = express();

app.get('/api', (req: any, res: any) => {
  res.status(200).json({
    status: 200,
    health: 'OK'
  });
});

app.get('/api/ping', (req: any, res: any) => {
  res.send('pong');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(process.env.PWD + '/dist/client')));
  app.get('/*', function(req: any, res: any) {
    res.sendFile(path.join(process.env.PWD + '/dist', 'client', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

const express = require('express');
const path = require('path');

const port = process.env.SERVER_PORT || 3000;

const app = express();

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

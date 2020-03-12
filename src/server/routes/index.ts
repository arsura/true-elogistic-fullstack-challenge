// [GET]       /api/product
// [PUT]       /api/product/update
// [POST]      /api/product/create
// [DELETE]    /api/product/delete

import express = require('express');

function router(app: express.Express) {
  app.get('/api', (req: any, res: any) => {
    res.status(200).json({
      status: 200,
      health: 'OK'
    });
  });

  app.get('/api/ping', (req: any, res: any) => {
    res.send('pong');
  });

  app.get('/api/pong', (req: any, res: any) => {
    res.send('ping');
  });
}

export = router;

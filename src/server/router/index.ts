import express, { Request, Response } from 'express';
import { getProducts, createProduct } from '../controller/product';

function router(app: express.Express) {
  app.get('/api', (req: Request, res: Response) => {
    res.status(200).json({
      status: 200,
      health: 'OK'
    });
  });

  app.get('/api/product', getProducts);
  app.post('/api/product', createProduct);
}

export default router;

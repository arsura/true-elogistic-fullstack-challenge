import { Request, Response } from 'express';

interface IProduct {
  name: string
}

export function getProducts(req: Request, res: Response) {
  res.status(200).json({
    status: 200,
    health: 'OK'
  });
}

export function createProduct(req: Request, res: Response) {
  const product: IProduct = req.body;
  res.status(202).json({
    status: 202,
    data: product
  });
}

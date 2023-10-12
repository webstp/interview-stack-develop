import express, { Response, Request } from 'express';
import Product, { ProductStatus } from '../models/Product';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const status = req.query.status as ProductStatus;
    if (status && !Object.values(ProductStatus).includes(status as ProductStatus)) {
      return res.status(400).json({ data: [], message: `Invalid Product Status: ${status}` })
    }
    const query = Product.query();

    if (status) {
      query.where('ProductStatus', status);
    }

    res.json({ data: await query, message: '' });
  }
  catch (error) {
    res.status(500).json({ data: [], message: (error as any)?.message || error })
  }
});

export default router;
import request from 'supertest';
import Product, { ProductStatus } from '../../../api/models/Product'

import { app } from '../../../app';

describe('Products', () => {
  let seededProducts: Product[];

  beforeEach(async () => {
    seededProducts = await Product.query().insertGraphAndFetch([
      { ProductName: 'Test Product 1', ProductPhotoURL: 'example.com', ProductStatus: ProductStatus.Active },
      { ProductName: 'Test Product 1', ProductPhotoURL: 'example.com', ProductStatus: ProductStatus.InActive }
    ]);
  });

  afterEach(async () => {
    await Product.query().delete().whereIn('ProductID', seededProducts.map((p: any) => p.ProductID));
  });

  describe('GET /products', () => {
    it('should return all products', async () => {
      const response = await request(app).get('/api/products');
      expect(response.status).toEqual(200);
      expect(response.body.data.length).toEqual(2);
    });

    it('should return products with status Active', async () => {
      const response = await request(app).get(`/api/products?status=${ProductStatus.Active}`);
      expect(response.status).toEqual(200);
      expect(response.body.data.length).toEqual(1);
    });

    it('should return products with status InActive', async () => {
      const response = await request(app).get(`/api/products?status=${ProductStatus.InActive}`);
      expect(response.status).toEqual(200);
      expect(response.body.data.length).toEqual(1);
    });

    it('should fail with status 400 when status is invalid', async () => {
      const status = 'Foo';
      const response = await request(app).get(`/api/products?status=${status}`);
      expect(response.status).toEqual(400);
      expect(response.body.message).toEqual(`Invalid Product Status: ${status}`);
    });
  });
});
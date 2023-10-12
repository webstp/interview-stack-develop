import { Model } from "objection";

export enum ProductStatus {
  Active = 'Active',
  InActive = 'InActive',
};

export default class Product extends Model {
  ProductID!: number;
  ProductName!: string;
  ProductPhotoURL!: string;
  ProductStatus: ProductStatus = ProductStatus.InActive;

  static tableName = 'Product';

  // Used to specify the primary key
  static get idColumn() {
    return 'ProductID';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['ProductName', 'ProductPhotoURL'],

      properties: {
        ProductID: { type: 'integer' },
        ProductName: { type: 'string', minLength: 1, maxLength: 100 },
        ProductPhotoURL: { type: 'string', minLength: 1, maxLength: 255 },
        ProductStatus: { type: 'string', enum: ['Active', 'InActive'] },
      }
    }
  }
}
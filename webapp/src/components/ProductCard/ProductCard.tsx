import React from 'react';
import { ProductProps } from '../interfaces';

const ProductCard = (props: ProductProps) => (
  <div
    className="transition ease-in duration-250 hover:scale-105 bg-neutral-300 flex flex-col rounded overflow-hidden"
  >
    <img 
      className="bg-neutral-400 object-cover"
      data-testid='product-card-img'
      src={props.ProductPhotoURL}
      alt={props.ProductName}
    />
    <div
      className="flex justify-between items-center px-3 py-2"
    >
      <span
        data-testid='product-card-name'
      >
        { props.ProductName }
      </span>
      <div 
        className={`flex items-center ${props.ProductStatus === 'Active' ? 'bg-green-600' : 'bg-red-600'} text-white text-sm rounded-full px-2 py-1`}
        data-testid='product-card-status'
      >
        { props.ProductStatus }
      </div>
    </div>
  </div>
)

export default ProductCard;
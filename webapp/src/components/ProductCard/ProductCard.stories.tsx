import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from './ProductCard';
import { ProductStatus } from '../interfaces';

export default {
  title: 'ProductCard',
  component: ProductCard,
  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <div
    className="grid grid-cols-5 gap-4"
  >
    <ProductCard {...args} />
  </div>
);

export const Product = Template.bind({});
Product.args = {
  ProductPhotoURL: 'https://via.placeholder.com/256',
  ProductName: 'Test Product',
  ProductStatus: ProductStatus.Active
};
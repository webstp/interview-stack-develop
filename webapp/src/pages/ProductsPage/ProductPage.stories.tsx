import React from "react";
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import ProductsPage from "./ProductsPage";
import { ACTIVE_PRODUCTS_URL } from "../ApiHelper";

export default {
  title: 'Products Page',
  component: ProductsPage,
  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
} as ComponentMeta<typeof ProductsPage>;

const Template: ComponentStory<typeof ProductsPage> = () => <ProductsPage />;

export const GetDataSuccess = Template.bind({});
GetDataSuccess.parameters = {
  mockData: [
    {
      url: ACTIVE_PRODUCTS_URL,
      method: 'GET',
      status: 200,
      response: {
        data: [
          {
            ProductID: 1,
            ProductName: "Test Product",
            ProductPhotoURL: "https://via.placeholder.com/256",
            ProductStatus: "Active"
          },
          {
            ProductID: 2,
            ProductName: "Test Product 2",
            ProductPhotoURL: "https://via.placeholder.com/256",
            ProductStatus: "Active"
          }
        ],
        message: "",
      }
    },
  ],
};

export const GetDataFailure = Template.bind({});
GetDataFailure.parameters = {
  mockData: [
    {
      url: ACTIVE_PRODUCTS_URL,
      method: 'GET',
      status: 500,
      response: {
        data: [],
        message: "Error",
      }
    },
  ],
};
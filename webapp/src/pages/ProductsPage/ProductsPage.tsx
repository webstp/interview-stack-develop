import React, { useEffect, useState } from "react";
import PageWrapper from '../PageWrapper';
import { getActiveProducts } from "../ApiHelper";
import Spinner from "../../components/Spinner/Spinner";
import { Product } from "../../components/interfaces";
import ProductCard from "../../components/ProductCard/ProductCard";

const DATA_STATES = {
  waiting: 'WAITING',
  loaded: 'LOADED',
  error: 'ERROR'
};

const ProductsPage = () => {
  const [loadingState, setLoadingState] = useState(DATA_STATES.waiting);
  const [data, setData] = useState<Product[]>([]);

  const getProducts = async () => {
    setLoadingState(DATA_STATES.waiting);
    const { activeProducts, errorOccured } = await getActiveProducts();
    setData(activeProducts);
    setLoadingState(errorOccured ? DATA_STATES.error : DATA_STATES.loaded);
  };

  useEffect(() => {
    getProducts();
  }, []);

  let content;

  if (loadingState === DATA_STATES.waiting) {
    content = (
      <div 
        className="flex flex-row justify-center w-full pt-4"
        data-testid="loading-spinner-container"
      >
        <Spinner />
      </div>
    )
  }
  else if (loadingState === DATA_STATES.loaded) {
    content = (
      <div
        className="grid grid-cols-5 gap-4"
        data-testid="products-container"
      >
        {data.map(product => (
          <ProductCard 
            key={product.ProductID}
            ProductPhotoURL={product.ProductPhotoURL}
            ProductName={product.ProductName}
            ProductStatus={product.ProductStatus}
          />
        ))}
      </div>
    )
  }
  else {
    content = (
      <div
        className="flex flex-row justify-center w-full pt-4 text-3xl font-bold text-white"
        data-testid="error-container"
      >
        An error occurred fetching the data!
      </div>
    )
  }
  
  return (
    <PageWrapper>
      { content }
    </PageWrapper>
  );
};

export default ProductsPage

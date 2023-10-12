import react from 'react';
import { create, ReactTestRenderer} from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import ProductCard from './ProductCard';
import { ProductStatus } from '../interfaces';

describe('ProductCard', () => {
  let tree: ReactTestRenderer;

  beforeEach(() => {
    tree = create(
      <MemoryRouter>
        <ProductCard 
          ProductPhotoURL="https://via.placeholder.com/256"
          ProductName="Test Product"
          ProductStatus={ProductStatus.Active}
        />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    tree.unmount();
  });

  it('rendersProductCard', async () => {
    const testInstance = tree.root;
    await testInstance.findByProps({ 'data-testid': 'product-card-img'});
    await testInstance.findByProps({ 'data-testid': 'product-card-name'});
    await testInstance.findByProps({ 'data-testid': 'product-card-status'});
  });
});
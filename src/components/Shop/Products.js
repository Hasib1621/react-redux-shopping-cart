import classes from './Products.module.css';
import ProductItem from './ProductItem';

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First book',
    description: 'The first book',
  },
  {
    id: 'p2',
    price: 5,
    title: 'My 2nd book',
    description: 'The 2nd book',
  },
  {
    id: 'p3',
    price: 5,
    title: 'My 3rd book',
    description: 'The 3rd book',
  },
];

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default Products;

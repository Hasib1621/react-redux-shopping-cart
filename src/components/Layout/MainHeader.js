import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <h2>Shopping Cart with Redux</h2>
      <nav>
        <CartButton />
      </nav>
    </header>
  );
};

export default MainHeader;

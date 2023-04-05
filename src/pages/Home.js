import { useContext } from 'react';
import Favorites from '../components/Favorites';
import Products from '../components/Products';
import SearchProduct from '../components/SearchProduct';
import CartContext from '../store/cart-context';

const Home = () => {
  const { cartState } = useContext(CartContext);
  return (
        <>
          <Favorites favItems={cartState.items.filter((e) => e.fav)} />
          <SearchProduct items={cartState.items} />
          <Products />
        </>
  );
};

export default Home;
import { useContext } from 'react';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import styled from 'styled-components';
import { CartItem } from './CartItem';
import { TotalCart } from './TotalCart';

const TitleHHH = styled.h3`
  text-align: center;
  margin: 1rem auto;
`;

const TitleDiv = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr 1fr;
  & h5 {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin: 0;
  }
`;

const EmptyCartDiv = styled.div`
  text-align: center;
  & h5 {
    background-color: #eee;
    font-size: 2.4rem;
    padding: 2rem 0;
    margin: 2rem 0;
    font-weight: normal;
  }

  & button {
    background-color: var(--dark-blue);
    padding: 1.6rem 5rem;
    margin: 2rem 0;
  }

  & button:hover {
    background-color: var(--blue);
  }
`;

function Cart() {
  const { cartDispatch, cartState } = useContext(CartContext);

  let totalPrice = 0;
  if (cartState.cart)
    for (const e of cartState.cart) totalPrice += e.price * e.quantity;

  return (
    <Modal>
      <TitleHHH>Shoppig Cart</TitleHHH>
      <TitleDiv>
        <h5>Product</h5>
        <h5>Price</h5>
        <h5>Quantity</h5>
      </TitleDiv>

      {cartState.cart.map((e) => (
        <CartItem key={e.id} item={e} />
      ))}

      {cartState.cart.length > 0 ? (
        <TotalCart totalPrice={totalPrice} />
      ) : (
        <>
          <EmptyCartDiv>
            <h5>Buy something awsome!</h5>
            <button onClick={() => cartDispatch({ type: 'TOGGLE_CART' })}>
              Close
            </button>
          </EmptyCartDiv>
        </>
      )}
    </Modal>
  );
}

export default Cart;

import { useContext } from 'react';
import styled from 'styled-components';
import CartContext from '../../store/cart-context';
import { useNavigate } from 'react-router-dom';

const TotalDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  & h3 {
    width: 100%;
    margin: 0;
    padding: 0.5rem 1.5rem;
    text-align: right;
    background-color: #ddd;
    font-size: 2rem;
    text-transform: uppercase;
  }
  & h4 {
    margin: 0;
    text-align: right;
    width: 100%;
    padding: 0.5rem 1.5rem;
    background-color: var(--light-grey);
    font-size: 3rem;
    font-weight: bold;
  }
`;

const BtnDiv = styled.div`
  display: flex;
  column-gap: 1.7rem;
  margin: 2rem 0;

  & button {
    padding: 1.1rem 4rem;
  }

  & #order-btn {
    background-color: var(--dark-blue);
  }
  & button#order-btn:hover {
    background-color: var(--blue);
  }

  & #close-btn {
    color: var(--dark-blue);
    background-color: transparent;
    border: 0.2rem solid var(--dark-blue);
  }

  & button#close-btn:hover {
    background-color: var(--dark-blue);
    color: #fff;
  }
`;

export const TotalCart = ({ totalPrice }) => {
  const { cartDispatch } = useContext(CartContext);
  const navigate = useNavigate();

  const orderHandler = () => {
    alert('...Ordering \nThank you for using this demo page.');
    cartDispatch({ type: 'TOGGLE_CART' });
    cartDispatch({ type: 'CLEAR_CART' });
    navigate('/');
  };

  return (
    <TotalDiv>
      <h3>Total</h3>
      <h4>${totalPrice.toFixed(2)}</h4>
      <BtnDiv>
        <button
          id="close-btn"
          onClick={() => cartDispatch({ type: 'TOGGLE_CART' })}
        >
          Close
        </button>
        <button id="order-btn" onClick={orderHandler}>
          Order
        </button>
      </BtnDiv>
    </TotalDiv>
  );
};

import styled from 'styled-components';
import delIcon from '../../assets/close.svg';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const ProductsDiv = styled.div`
  border-bottom: 0.1rem solid #eee;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: 4fr 1fr 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 5fr 1fr 1fr;
  }
`;

const LeftContentDiv = styled.div`
  display: flex;
  column-gap: 2rem;
  align-items: center;
  h3 {
    font-size: 1.5rem;
  }

  @media (min-width: 480px) {
    h3 {
      font-size: 1.7rem;
    }
  }

  & button {
    border-radius: 50%;
    background-color: transparent;
    padding: 0;
  }
`;
const ProdImgDiv = styled.div`
  max-width: 13rem;
  display: none;
  & img {
    width: 100%;
  }
  @media (min-width: 768px) {
    display: unset;
  }
`;
const DelImg = styled.img`
  width: 2.3rem;
  opacity: 0.5;
  transition: all 150ms ease-out;
  filter: grayscale(1);
  
  &:hover {
    transform: scale(120%);
    filter: none;
    opacity: 1;
  }
`;

const PriceDiv = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  font-weight: bolder;
  margin: 0 1rem;

  @media (min-width: 480px) {
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    font-size: 2.3rem;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & select {
    text-align: right;
    padding: 0.5rem;
    width: 5rem;
  }

  @media (min-width: 480px) {
    & select {
      width: 8rem;
    }
    & input {
      width: 8rem;
    }
  }
`;

export const CartItem = ({ item }) => {
  const { cartDispatch } = useContext(CartContext);

  const quantityHandler = (e) => {
    const itemSelected = { ...item, quantity: +e.target.value };
    cartDispatch({ type: 'UPDATE_ITEM_CART', payload: itemSelected });
  };
  
  const deleteHandler = () => {
    cartDispatch({ type: 'DELETE_ITEM_CART', payload: item.id });
  }
  return (
    <ProductsDiv>
      <LeftContentDiv>
        <button onClick={deleteHandler}>
          <DelImg src={delIcon} alt="delete item" />
        </button>
        <ProdImgDiv>
          <img src={item.image} alt={item.title} />
        </ProdImgDiv>
        <h3>
          {item.title} {item.brand}
        </h3>
      </LeftContentDiv>
      <PriceDiv>${item.price.toFixed(2)}</PriceDiv>
      <InputDiv>
        <select onChange={quantityHandler}>
          <option>{item.quantity}</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </InputDiv>
    </ProductsDiv>
  );
};

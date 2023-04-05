import styled, { keyframes } from 'styled-components';
import star from '../assets/star.svg';
import { useParams } from 'react-router-dom';
import { useContext, useRef, useState } from 'react';
import CartContext from '../store/cart-context';

const ContentDiv = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 2rem 2.7rem 0 rgba(0, 0, 0, 0.15);
  border-radius: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ProdImgDiv = styled.div`
  background-color: #fff;
  padding: 2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-right-radius: 1rem;
  border-top-left-radius: 1rem;

  @media (min-width: 768px) {
    border-top-right-radius: 0;
    border-bottom-left-radius: 1rem;
  }
  & img {
    max-width: 47rem;
    width: 100%;
  }

  @media (min-width: 768px) {
    & img {
      max-width: 100%;
    }
  }
`;

const InfoDiv = styled.div`
  background-color: var(--dark-blue);
  color: #fff;
  padding: 4.5rem 5rem 4.5rem 3.5rem;
  border-top-right-radius: 0;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  @media (min-width: 768px) {
    border-bottom-left-radius: 0;
    border-top-right-radius: 1rem;
    max-width: 37rem;
  }

  & form {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  & input[type='checkbox'] {
    appearance: none;
    height: 2.5rem;
    width: 100%;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  & input[type='checkbox']:after {
    content: url(${star});
    transform: scale(60%);
    opacity: 0.4;
    transition: all 200ms ease-out;
  }

  & input[type='checkbox']:hover:after,
  & input[type='checkbox']:checked:hover:after {
    transform: scale(80%);
  }

  & input[type='checkbox']:checked:after {
    transform: scale(60%);
    opacity: 1;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h2 {
    font-size: 2.5rem;
    margin: 0;
  }
`;

const IconDiv = styled.div`
  & p {
    text-transform: uppercase;
    margin: 0 0 0rem 0.2rem;
    font-size: 1rem;
  }

  & div {
    font-size: 1.9rem;
    color: var(--light-blue);
  }

  @media (min-width: 480px) {
    font-size: 2.8rem;
  }
`;

const IconsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 2rem;
  margin: 3rem 0;
`;

const DescriptionP = styled.p`
  color: var(--light-grey);
  line-height: 2.3rem;
  text-align: justify;
  margin: 3rem 0;
`;

const FieldDiv = styled.div`
  & label {
    text-transform: uppercase;
    margin: 0 0 0.3rem 0.2rem;
    font-size: 1rem;
    display: block;
  }

  & input {
    background-color: transparent;
    color: #fff;
    border: 0.1rem solid var(--grey);
    border-radius: 0.3rem;
    width: 7rem;
    font-size: 1.5rem;
    padding: 0.5rem 0;
    text-align: right;
  }

  @media (min-width: 480px) {
    width: 10rem;
  }

  & input[type='number']::-webkit-inner-spin-button {
    margin: 0 0.7rem;
  }
`;

const zoomIn = keyframes`
  from { transform: scale(30%)}
  to { transform: scale(100%)}
`

const BtnDiv = styled.div`
  ${(props) => props.sent && 'display: none;'}
  & button {
    padding: 2rem;
    animation: ${zoomIn} 200ms ease-in;
  }

  @media (min-width: 480px) {
    & button {
      padding: 1.5rem 3.5rem;
    }
  }
`;

const MsgDiv = styled.div`
  ${(props) => !props.sent && 'display: none;'}
  padding: 1.3rem 1.2rem;
  & p {
    margin: 0;
    padding: 0.5rem;
    background-color: #004a3d;
    border: 0.1rem solid #a7ffba30;
    color: #a7ffba;
    border-radius: 0.5rem;
  }

  @media (min-width: 480px) {
    padding: 1.1rem 2.2rem;
    & p {
      padding: 0.2rem 1rem;
    }
  }
`;

const ProductDetail = () => {
  const { cartDispatch, cartState } = useContext(CartContext);
  const { items } = cartState;
  const quantityRef = useRef();
  const { prodID: id } = useParams();
  const item = items.find((e) => e.id === id);
  const [sent, setSent] = useState(false);

  const addCartHanlder = (e) => {
    e.preventDefault();
    const itemSelected = {
      ...item,
      quantity: +quantityRef.current.value,
    };
    cartDispatch({ type: 'ADD_CART', payload: itemSelected });
    setSent(true);
    setTimeout(() => {
      setSent(false);
    }, 2000);
  };

  const favHandler = () =>
    cartDispatch({
      type: 'UPDATE_ITEMS',
      payload: { ...item, fav: !item.fav },
    });

  return (
    <ContentDiv>
      <dialog>Algo</dialog>
      <ProdImgDiv>
        <img src={item.image} alt={item.title} />
      </ProdImgDiv>
      <InfoDiv>
        <input
          onClick={favHandler}
          type="checkbox"
          defaultChecked={item.fav ? true : false}
        />
        <TitleDiv>
          <h2>{item.title + ' ' + item.brand}</h2>
        </TitleDiv>
        <IconsDiv>
          <IconDiv>
            <p>Price</p>
            <div>{item.price.toFixed(2)}</div>
          </IconDiv>
          <IconDiv>
            <p>Warranty</p>
            <div>{item.warranty}</div>
          </IconDiv>
          <IconDiv>
            <p>Origin</p>
            <div>{item.origin}</div>
          </IconDiv>
        </IconsDiv>
        <DescriptionP>{item.description}</DescriptionP>
        <form onSubmit={addCartHanlder}>
          <FieldDiv>
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              id="quantity"
              defaultValue={1}
              min="1"
              max="5"
              ref={quantityRef}
            />
          </FieldDiv>
          <MsgDiv sent={sent}>
            <p>Sent to cart!</p>
          </MsgDiv>

          <BtnDiv sent={sent}>
            <button type="submit">Add to cart</button>
          </BtnDiv>
        </form>
      </InfoDiv>
    </ContentDiv>
  );
};

export default ProductDetail;

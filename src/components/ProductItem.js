import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Card from './UI/Card';
import star from '../assets/star.svg';
import { useContext } from 'react';
import CartContext from '../store/cart-context';

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--light-grey);
  border-radius: 1rem;

  & img {
    cursor: pointer;
  }
`;

const PriceBtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;

  & div {
    font-size: 2rem;
    font-weight: bold;
  }
`;

const GreyP = styled.p`
  color: #999;
  text-align: ${({ right }) => (right ? 'right' : 'left')};
`;

const FooterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 1.5rem;

  & p {
    width: 100%;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;

  & img {
    width: 2.1rem;
    height: 2.1rem;
    padding: 0;
    margin-top: 0.5rem;
    ${({ fav }) => !fav && 'opacity: 0.3;'}
    transition: opacity 400ms ease-out;
    cursor: pointer;
  }

  & img:hover {
    opacity: 1;
  }

  & input[type='checkbox'] {
    appearance: none;
    height: 2.5rem;
    width: 2.5rem;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & input[type='checkbox']:after {
    content: url(${star});
    transform: scale(40%);
    opacity: 0.4;
    filter: grayscale(1);
    transition: all 200ms ease-out;
  }

  & input[type='checkbox']:hover:after,
  & input[type='checkbox']:checked:hover:after {
    transform: scale(60%);
    filter: none;
  }
  
  & input[type='checkbox']:checked:after {
    transform: scale(40%);
    filter: none;
    opacity: 1;
  }
`;

const ProductItem = ({ item }) => {
  const { title, image, warranty, price, origin, id, fav } = item;
  const navigate = useNavigate();
  const { cartDispatch } = useContext(CartContext);

  const favHandler = () => cartDispatch({type: 'UPDATE_ITEMS', payload: { ...item, fav: !fav} });

  return (
    <Card>
      <ImageDiv>
        <img src={image} alt={title} onClick={() => navigate(id)} />
      </ImageDiv>
      <div>
        <TitleDiv fav={fav}>
          <h4>{title}</h4>
          <input
            onClick={favHandler}
            type="checkbox"
            defaultChecked={fav ? true : false}
          />
        </TitleDiv>
        <GreyP>
          warranty {warranty} months | {origin}
        </GreyP>
      </div>
      <PriceBtnDiv>
        <div>${price.toFixed(2)}</div>
        <button onClick={() => navigate(id)}>View details</button>
      </PriceBtnDiv>
      <FooterDiv>
        <GreyP right={true}>Shipping in 3 days</GreyP>
      </FooterDiv>
    </Card>
  );
};

export default ProductItem;

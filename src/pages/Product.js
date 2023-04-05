import {useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProductDetail from '../components/ProductDetail';
import MoreInfo from '../components/MoreInfo';

const TitleDiv = styled.div`
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
`;

const BtnDiv = styled.div`
  text-align: center;
  margin-top: 7rem;

  & button {
    text-transform: uppercase;
    background-color: var(--dark-blue);
    padding: 2rem 7rem;
  }

  & button:hover {
    background-color: var(--blue);
  }
`;

const Product = () => {
  const navigate = useNavigate();

  return (
    <section>
      <TitleDiv>
        <h4>Product Detail</h4>
      </TitleDiv>
      <ProductDetail  />
      <BtnDiv>
        <button onClick={() => navigate('/')}>&laquo; Volver</button>
      </BtnDiv>
      <MoreInfo />
    </section>
  );
};

export default Product;



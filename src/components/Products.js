import styled from "styled-components";
import ProductItem from "./ProductItem";
import { useContext } from "react";
import CartContext from "../store/cart-context";

const TitleDiv = styled.div`
  margin-top: 8rem;
  & h3 {
    margin: 0.5rem auto;
  }
  & p {
    margin: 0.9em auto;
    color: var(--grey);
  }
`;

const ProductItemDiv = styled.div` 
    display: flex;
    flex-direction: column;
    margin: 3.7rem auto;
    gap: 2.5rem;
    
    @media (min-width: 580px) {
        grid-template-columns: repeat(2, 1fr) ;
        display: grid;
    }
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(3, 1fr) ;
    }
`

const Products = () => {
  const {cartState} = useContext(CartContext);

  return (
    <section>
      <TitleDiv>
        <h3>All Products</h3>
        <p>The best products at the best prices, if you need it we have it.</p>
      </TitleDiv>
      <ProductItemDiv>
        {cartState.items.map((e) => (
          <ProductItem key={e.id} item={e} />
        ))}
      </ProductItemDiv>
    </section>
  );
};

export default Products;


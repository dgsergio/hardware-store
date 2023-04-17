import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import FavoritesIcons from "./FavoritesIcons";

const FavoriteDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 2fr 2fr 1fr;
  }
`;

const ImageDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 3rem 1.7rem 2rem 0;

  @media (min-width: 768px) {
    margin: 0 1.7rem 0 0;
  }

  & img {
    max-width: 36rem;
    width: 100%;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  & h2 {
    font-size: 4rem;
    margin: 0;
  }
  & h3 {
    font-size: 3.7rem;
    color: var(--blue);
    margin: 0;
  }
  & p {
    color: var(--grey);
    margin-top: 2rem;
  }
`;

const BuyDiv = styled.div`
  & button {
    display: none;
  }

  @media (min-width: 768px) {
    & button {
      margin-top: 1.7rem;
      padding: 1.7rem 3.7rem;
      display: unset;
    }
  }
`;

const BuyMovilDiv = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  & button {
    margin-bottom: 2rem;
    padding: 2rem 5rem;
    display: unset;
  }

  @media (min-width: 768px) {
    & button {
      display: none;
    }
  }
`;

const Favorite = ({ fav }) => {
  const { id, title, brand, image, description, price, warranty, origin } = fav;
  const navigate = useNavigate();
  return (
    <FavoriteDiv>
      <InfoDiv>
        <h2>{title}</h2>
        <h3>{brand}</h3>
        <p>{description}</p>
        <BuyDiv>
          <button onClick={() => navigate(id)}>Discover now</button>
        </BuyDiv>
      </InfoDiv>
      <ImageDiv>
        <img src={image} alt={title} />
      </ImageDiv>
      <FavoritesIcons price={price} warranty={warranty} origin={origin} />
      <BuyMovilDiv>
        <button onClick={() => navigate(id)}>Discover now</button>
      </BuyMovilDiv>
    </FavoriteDiv>
  );
};

export default Favorite;

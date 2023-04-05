import styled from "styled-components";
import coin from "../assets/coin.svg";
import warrantyIcon from "../assets/warranty.svg";
import world from "../assets/world.svg";

const IconsDiv = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  column-gap: 3rem;
  margin: 0 3rem 2rem;
  flex-direction: row;
  
  @media (min-width: 550px) {
    display: flex;
    }
    @media (min-width: 768px) {
      flex-direction: column;
      margin: 0;
  }
`;

const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & h4 {
    font-size: 1.5rem;
    margin: 0;
  }
  & p {
    font-size: 1.2rem;
    margin: 0;
  }

  @media (min-width: 768px) {
    & h4 {
    font-size: 2.4rem;
  }
  }
`;

const IconDiv = styled.div`
  display: flex;
  padding: 2rem 0;
  column-gap: 1.5rem;
  align-items: center;
@media (min-width: 768px) {
    
}

  & img {
    margin-top: 0.7rem;
    width: 4.6rem;
    background-color: #fff;
    padding: 1rem;
    border-radius: 1rem;
    color: var(--orange);
    box-shadow: 0 0.5rem 2.7rem 0 rgba(0, 0, 0, 0.2);
  }
`;
const FavoritesIcons = ({price, warranty, origin}) => {
  return (
    <IconsDiv>
      <IconDiv>
        <img src={coin} alt="coin icon" />
        <DetailDiv>
          <h4>${price.toFixed(2)}</h4>
          <p>Price</p>
        </DetailDiv>
      </IconDiv>
      <IconDiv>
        <img src={warrantyIcon} alt="warranty icon" />
        <DetailDiv>
          <h4>{warranty}</h4>
          <p>Month</p>
        </DetailDiv>
      </IconDiv>

      <IconDiv>
        <img src={world} alt="world icon" />

        <DetailDiv>
          <h4>{origin}</h4>
          <p>Origin</p>
        </DetailDiv>
      </IconDiv>
    </IconsDiv>
  );
};

export default FavoritesIcons;

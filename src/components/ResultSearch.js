import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ResultDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.1rem solid #eee;
  font-size: 1.1rem;
  &:last-child {
    border-bottom: none;
  }

  & a {
    margin: 0 2rem;
    border: 0.1rem solid var(--light-blue);
    color: var(--light-blue);
    padding: 0.8rem 1.1rem;
    border-radius: 0.7rem;
    font-weight: 700;
    transition: background 200ms ease-in-out;
  }
  & a:hover {
    background-color: var(--light-blue);
    color: rgb(255, 255, 255);
  }
`;

const ImageDiv = styled.div`
  max-width: 5.5rem;
  & img {
    width: 100%;
    background-color: var(--light-grey);
    border-radius: 1rem;
    margin: 0.5rem 2rem;
    padding: 1rem;
  }
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 500px) {
    column-gap: 0.5rem;
    flex-direction: row;
  }

  & h4 {
    margin: 0.2rem;
  }
`;

export const ResultSearch = ({ items }) => {
  return (
    <ResultDiv>
      <ImageDiv>
        <img src={items.image} alt={items.title} />
      </ImageDiv>
      <InfoDiv>
        <h4>{items.title},</h4>
        <h4>{items.brand}</h4>
      </InfoDiv>
      <Link to={items.id}>View product</Link>
    </ResultDiv>
  );
};

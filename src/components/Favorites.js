import styled from 'styled-components';
import next from '../assets/next.svg';
import previus from '../assets/previus.svg';
import { useState } from 'react';
import Favorite from './Favorite';

const FavoritesSection = styled.section`
  display: flex;
  width: 100%;
  gap: 1rem;
  margin: 0 0 3rem;
`;


const IconImg = styled.img`
  cursor: pointer;
  opacity: 0.5;
  transition: all 300ms ease-out;

  &:hover {
    opacity: 1;
    transform: scale(120%);
  }
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0 0.5rem;
  column-gap: 1rem;
  justify-content: center;
  border-bottom: 0.1rem solid #ddd ;
  
  @media (min-width: 768px) {
    justify-content: left;
  }

  & img { 
    width: 2.5rem;
    filter: grayscale(1);
  }
  & h3 {
    font-size: 1.6rem;
    color: #999;
    letter-spacing: 0.2rem;
    padding: 0.5rem 0;
    margin: 0;
    text-transform: uppercase;
  }
`;

const NotFavP = styled.p`
  margin: 0.9em auto;
  color: var(--grey);
`;

const Favorites = ({ favItems }) => {
  const [counter, setCounter] = useState(0);

  const addOrSub = (e, op) => {
    if (op === undefined || op === 'add') {
      setCounter((pV) => pV + 1);
      return;
    } else if (op === 'sub') {
      setCounter((pV) => pV - 1);
    }
    return;
  };

  return (
    <>
      <TitleDiv>
        <h3>Your favorite products</h3>
      </TitleDiv>
      {favItems.length === 0 && (
        <NotFavP>You have not selected your favorite products yet</NotFavP>
      )}
      <FavoritesSection>
        {favItems[counter - 1] && (
          <IconImg
            src={previus}
            onClick={() => addOrSub(undefined, 'sub')}
            alt="previus favorite"
          />
        )}
        {favItems.length !== 0 && <Favorite fav={favItems[counter]} />}
        {favItems[counter + 1] && (
          <IconImg src={next} onClick={addOrSub} alt="next favorite" />
        )}
      </FavoritesSection>
    </>
  );
};

export default Favorites;

import styled, { keyframes } from 'styled-components';
import search from '../assets/search.svg';
import { useRef, useState } from 'react';
import { ResultSearch } from './ResultSearch';

const SearchSection = styled.section`
  background-color: #fff;
  padding: 2.5rem 0;
  margin: 2rem auto;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 2.7rem 0 rgba(0, 0, 0, 0.1);

  & form {
    display: flex;
    justify-content: center;
    gap: 2rem;
  }

  & button {
    display: flex;
    column-gap: 0.5rem;
    font-size: 1.5rem;
    letter-spacing: 0.05rem;
    font-weight: normal;
    padding: 1.5rem 2.7rem;
    align-items: center;
    background-color: var(--dark-blue);
  }
  & button:hover {
    background-color: var(--blue);
  }

  & img {
    width: 1.7rem;
    stroke: #fff;
  }

  @media (max-width: 480px) {
    /* carefull max-width */
    & button div {
      display: none;
    }
  }

  & input {
    width: 50%;
    border-radius: 1rem;
    border: 0.3rem solid var(--light-grey);
    padding: 0 3rem;
    font-size: 1.5rem;
  }

  & input::placeholder {
    color: #aaa;
  }

  @media (min-width: 768px) {
    & input {
      width: 70%;
    }
  }

  & input:focus {
    outline-style: none;
    background-color: #fff;
    border: 0.2rem solid var(--dark-blue);
  }
`;

const ContainerResultDiv = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  box-shadow: 0 0.5rem 2.7rem 0 rgba(0, 0, 0, 0.1);
`;

const PopUp = keyframes`
  0% {
    transform: scale(0%)
  }
  100% {
    transform: scale(100%)
  }
  `;

const MsgDiv = styled.div`
  background-color: var(--dark-blue);
  color: #fff;
  border-radius: 1rem;
  padding: 1.5rem;
  font-size: 1.5rem;
  text-align: center;
  box-shadow: 0 0.5rem 2.7rem 0 rgba(0, 0, 0, 0.1);
  animation: ${PopUp} 300ms ease-out;
`;

const SearchProduct = ({ items }) => {
  const inputRef = useRef();
  const [searchedItems, setSearchedItems] = useState([]);
  const [message, setMessage] = useState(null);

  const searchHandler = (e) => {
    e.preventDefault();
    const query = inputRef.current.value;
    if (query.length < 2) {
      setMessage('The search term must have at least 2 characters');
      setSearchedItems([]);
      return;
    } else {
      setMessage(null);
    }
    const results = items.filter(
      (e) =>
        e.title.toLowerCase().includes(query.toLowerCase()) ||
        e.brand.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedItems(results);
    if (results.length === 0) {
      setMessage('No product found matching the search term')
    }
  };

  return (
    <>
      <SearchSection>
        <form onSubmit={searchHandler}>
          <input
            type="text"
            ref={inputRef}
            placeholder="Search for a product"
          />
          <button type="submit">
            <img src={search} alt="search icon" />
            <div>Search</div>
          </button>
        </form>
      </SearchSection>
      {searchedItems.length > 0 && (
        <ContainerResultDiv>
          {searchedItems.map((e) => (
            <ResultSearch key={e.id} items={e} />
          ))}
        </ContainerResultDiv>
      )}
      {message && <MsgDiv onClick={()=>{setMessage(null)}}>{message}</MsgDiv>}
    </>
  );
};

export default SearchProduct;

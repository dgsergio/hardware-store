import styled from "styled-components";

const CardDiv = styled.div`
  background-color: #fff;
  border: 0.1rem solid #ddd ;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 2.7rem 0 rgba(0, 0, 0, 0.1);
  padding: 1.2rem;

  & button {
    background-color: transparent;
    border: 0.1rem solid var(--light-blue);
    color: var(--light-blue);
    font-size: 1.2rem;
    padding: 0.8rem 1.1rem;
  }

  
  & button:hover {
    background-color: var(--light-blue);
    color: #fff;
  }

  & img {
    max-width: 100%;
    padding: 2rem;
    height: 15rem;
  }

  & h4 {
    font-size: 1.9rem;
    margin: 0;
  }

  & p {
    font-size: 1.1rem;
    margin: 0.2rem auto;
  }
`;

const Card = ({ children }) => {
  return <CardDiv>{children}</CardDiv>;
};

export default Card;

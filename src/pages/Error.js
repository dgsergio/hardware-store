import React from 'react';
import styled from 'styled-components';
import Navegation from '../components/Navegation';
import { useNavigate } from 'react-router-dom';

const ContainerDiv = styled.div`
  margin: 0 auto;
  padding: 0 3rem;
  max-width: 102.4rem;
`;

const Main = styled.main`
  text-align: center;
  & img {
    position: absolute;
    bottom: 2rem;
    opacity: 0.2;
    z-index: -1;
  }
  & h3 {
    margin: 15vh 0 0;
  }
  & h4 {
    color: var(--blue);
    font-size: 3rem;
    font-style: italic;
    margin: 0.5rem 0;
  }
`;

const Btn = styled.button`
  margin-top: 7rem;
  text-transform: uppercase;
  background-color: var(--dark-blue);
  padding: 2rem 7rem;

  &:hover {
    background-color: var(--blue);
  }
`;

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <ContainerDiv>
      <Navegation />
      <Main>
        <img src="/img/error.png" alt="monkey error" />
        <h3>Something went wrong</h3>
        <h4>We'll be back soon!</h4>
        <Btn onClick={() => navigate('/')}>&laquo; Volver</Btn>
      </Main>
    </ContainerDiv>
  );
};

export default ErrorPage;

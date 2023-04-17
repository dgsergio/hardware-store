import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navegation from '../components/Navegation';
import Footer from '../components/Footer';

const ContainerDiv = styled.div`
  margin: 0 auto;
  padding: 0 3rem;
  max-width: 102.4rem;
`;

const Root = () => {
  return (
    <ContainerDiv>
      <Navegation />
        <Outlet />
      <Footer />
    </ContainerDiv>
  );
};

export default Root;
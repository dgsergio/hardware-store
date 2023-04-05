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

export const loader = async () => {
  try {
    const response = await fetch(
      'https://hardware-store-93ec6-default-rtdb.firebaseio.com/products.json'
    );
    if (!response.ok)
      throw new Error('Fail to resolve the request error: ' + response.status);
    const data = await response.json();
    let dataArray = [];
    for (let id in data) {
      dataArray = [...dataArray, { id, ...data[id] }];
    }
    return dataArray;
  } catch (err) {
    return { error: true, message: 'Fail to fetch data.' };
  }
};

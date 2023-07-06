import React from 'react'
import Forms from '../components/Forms';
import List from '../components/List';
import Header from '../components/Header';
import { styled } from 'styled-components';

function Home() {

  return (
    <LayOut>
      <StBox>
        <Header />
        <Forms />
        <List />
      </StBox>
    </LayOut>
  )
}

const LayOut = styled.div`
  padding: auto;
`;

const StBox = styled.div`
  width: 900px;
  height: 1000px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;

export default Home
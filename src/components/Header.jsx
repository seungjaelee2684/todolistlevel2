import React from 'react'
import { styled } from 'styled-components';

function Header() {
  return (
    <>
      <TitleStyle>
        <h2> My Todo List</h2><h3>React</h3>
      </TitleStyle>
    </>
  )
}

const TitleStyle = styled.div`
  border-left: 8px solid pink;
  padding: 0px 10px;
  margin: 20px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header
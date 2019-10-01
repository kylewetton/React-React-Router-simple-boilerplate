import React from 'react';
import sc from 'styled-components';
import Main from './main';
import Header from './header';

export default function App() {
  return (

    <AppContainer>
      <Header />
      <Main />
    </AppContainer>

  );
}


const AppContainer = sc.div`
  background: #dddddd;
  border: 1px solid red;
`

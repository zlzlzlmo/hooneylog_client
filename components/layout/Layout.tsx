import React from 'react';
import Header from './header/Header';
import Introduce from './introduce/Introduce';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Introduce />
      {children}
    </>
  );
};

export default Layout;

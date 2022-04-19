import React from 'react';
import Content from './content/Content';
import Footer from './footer/Footer';
import Header from './header/Header';
import Introduce from './introduce/Introduce';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Introduce />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default Layout;

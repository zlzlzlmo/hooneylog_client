import React from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

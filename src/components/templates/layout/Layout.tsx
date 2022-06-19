import React from 'react';
import styled from 'styled-components';
import Footer from './footer/Footer';
import Header from './header/Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 10rem;
  position: relative;
  width: 100vw;
  min-height: 100vh;
`;

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;

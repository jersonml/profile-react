import React from 'react';
import Navbar from './Navbar';
import { StyledContainer } from '../assets/styles/components/layout';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <StyledContainer>
        {children}
      </StyledContainer>
    </div>
  );
};

export default Layout;
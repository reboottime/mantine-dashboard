import styled from '@emotion/styled';
import { Navbar } from '@mantine/core';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  overflow-x: hidden;
  height: 100%;
`;

export const StyledMain = styled.main`
  flex-grow: 1;
  padding: 1.5rem 1.5rem;
  transition: width 0.3s ease, transform 0.3s ease;
`;

export const StyledNavbar = styled(Navbar)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: width 0.3s ease;
  overflow-x: hidden;
`;

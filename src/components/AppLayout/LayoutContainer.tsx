import { createContext, useContext, useMemo, useState } from 'react';

import { StyledContainer } from './Styled';

const LayoutModeContext = createContext({
  isMiniMode: false,
  setIsMiniMode: (_isMiniMode: boolean) => {}
});

const LayoutContainer: React.FC<any> = ({ children }) => {
  const [isMiniMode, setIsMiniMode] = useState(false);

  const value = useMemo(
    () => ({
      isMiniMode,
      setIsMiniMode
    }),
    [isMiniMode, setIsMiniMode]
  );

  return (
    <StyledContainer>
      <LayoutModeContext.Provider {...{ value, children }} />
    </StyledContainer>
  );
};

export default LayoutContainer;

export const useAppLayoutMode = () => {
  return useContext(LayoutModeContext);
};

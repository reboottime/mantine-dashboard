import {
  createContext,
  useContext,
  useMemo,
  useState
} from 'react';

const AppModeContext = createContext({
  isMiniMode: false,
  setIsMiniMode: (_isMiniMode: boolean) => {}
});

const AppMode: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMiniMode, setIsMiniMode] = useState(false);

  const value = useMemo(() => ({
    isMiniMode,
    setIsMiniMode
  }),
  [isMiniMode, setIsMiniMode]
  );

  return (<AppModeContext.Provider {...{ value, children }} />);
};

export default AppMode;

export const useAppMode = () => {
  return useContext(AppModeContext);
};

import { useMediaQuery } from 'react-responsive';

export const BREAKPOINTS = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

// breakpoints related
export const useIsSm = () => {
  return useMediaQuery({ query: `(max-width: ${BREAKPOINTS.sm - 1}px)` });
};

export const useIsMd = () => {
  return useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.sm}px) and (max-width: ${BREAKPOINTS.md - 1}px)`
  });
};

export const useIsLg = () => {
  return useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.md}px) and (max-width: ${BREAKPOINTS.lg - 1}px)`
  });
};

export const useIsXl = () => {
  return useMediaQuery({
    query: `(min-width: ${BREAKPOINTS.lg}px) and (max-width: ${BREAKPOINTS.xl - 1}px)`
  });
};

export const useIsXxl = () => {
  return useMediaQuery({ query: `(min-width: ${BREAKPOINTS.xl}px)` });
};

// device related
export const useIsPortrait = () => {
  return useMediaQuery({ query: '(orientation: portrait)' });
};

export const useIsRetina = () => {
  return useMediaQuery({ query: '(min-resolution: 2dppx)' });
};

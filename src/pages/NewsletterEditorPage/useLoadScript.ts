import { useEffect } from 'react';

const useLoadScript = (
  scriptSrc: string,
  callback?: CallableFunction
) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    script.onload = () => {
      if (callback) {
        callback();
      } else {
        // eslint-disable-next-line no-console
        console.info(`script: ${scriptSrc} loaded`);
      }
    };
    document.body.appendChild(script);
  }, [callback, scriptSrc]);
};

export default useLoadScript;

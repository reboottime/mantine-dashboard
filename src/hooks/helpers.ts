import { throttle } from 'lodash';
import { useEffect, useState } from 'react';

export const useUserIsIdle = (ms: number) => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const handleUserActivity = throttle(() => {
      clearTimeout(timer);
      setIsIdle(false);

      timer = setTimeout(() => {
        setIsIdle(true);
      }, ms);
    }, 250);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setIsIdle(false);
      }
    };

    const eventNames = ['mousemove', 'mousedown', 'resize', 'keydown', 'touchstart', 'wheel'];

    eventNames.forEach((eventName) => {
      window.addEventListener(eventName, handleUserActivity, false);
    });
    document.addEventListener('visibilitychange', handleVisibilityChange);

    timer = setTimeout(() => {
      setIsIdle(true);
    }, ms);

    return () => {
      eventNames.forEach((eventName) => {
        window.removeEventListener(eventName, handleUserActivity, false);
      });
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      clearTimeout(timer);
    };
  }, [ms]);

  return isIdle;
};

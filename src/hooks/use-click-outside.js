import { useEffect, useCallback } from 'react';

const events = ['mousedown', 'touchstart'];

const useClickOutside = (refs, onClickOutside) => {
  const isOutside = useCallback(
    (element) => refs.every((ref) => !ref.current || !ref.current.contains(element)),
    [refs]
  );

  const handleClick = useCallback(
    (event) => {
      if (isOutside(event.target)) {
        onClickOutside();
      }
    },
    [isOutside, onClickOutside]
  );

  useEffect(() => {
    events.forEach((event) => document.addEventListener(event, handleClick));
    return () => events.forEach((event) => document.removeEventListener(event, handleClick));
  }, [handleClick]);
};

export default useClickOutside;

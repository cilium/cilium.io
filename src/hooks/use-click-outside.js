import { useEffect } from 'react';

const events = [`mousedown`, `touchstart`];
export default (refs, onClickOutside) => {
  const isOutside = (element) =>
    refs.every((ref) => !ref.current || !ref.current.contains(element));
  useEffect(() => {
    const onClick = (event) => {
      if (isOutside(event.target)) {
        onClickOutside();
      }
    };
    events.forEach((event) => document.addEventListener(event, onClick));
    return () => {
      events.forEach((event) => document.removeEventListener(event, onClick));
    };
  }, []);
};

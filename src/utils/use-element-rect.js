import { useLayoutEffect, useState } from 'react';

const useElementtRect = () => {
  const [rect, setRect] = useState(null);
  const [current, setCurrent] = useState(null);

  useLayoutEffect(() => {
    if (current) {
      const observer = new ResizeObserver((e) => setRect(e[0].contentRect));

      observer.observe(current);
      return () => observer.unobserve(current);
    }
  }, [current]);

  return [rect, setCurrent];
};

export default useElementtRect;

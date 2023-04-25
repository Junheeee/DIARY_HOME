import { useEffect, useState } from 'react';

interface UseIntersectionObserverProps extends IntersectionObserverInit {
  onIntersect: IntersectionObserverCallback;
  options?: {
    root?: Document;
    rootMargin?: string;
    threshold?: number;
  };
}

export const useIntersectionObserver = ({
  onIntersect,
  options = { root: null, rootMargin: '0px', threshold: 0 }
}: UseIntersectionObserverProps) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver(onIntersect, options);
    observer.observe(target);
    return () => target && observer.disconnect();
  }, [onIntersect, options, target]);

  return { setTarget };
};

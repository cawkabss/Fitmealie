import { useEffect } from 'react';

export const useEventListener = (
  node: any,
  event: string,
  cb: (event: Event) => void
) => {
  useEffect(() => {
    node.addEventListener(event, cb);

    return () => {
      node.removeEventListener(event, cb);
    };
  });
};

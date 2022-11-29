import React, { useRef } from 'react';
import cx from 'classnames';

import { useEventListener } from 'hooks/useEventListener';
import { useMergeRefs } from 'hooks/useMergeRefs';

import css from './PaymentForm.module.sass';

interface Props {
  src: string,
  className?: string,
  onMessage?: (msg: any) => void,
  onLoad?: () => void,
  onError?: () => void,
  onResize?: () => void,
}

export const PaymentForm = React.forwardRef<HTMLIFrameElement, Props>((
  {
    src,
    className,
    onMessage,
    onLoad,
    onError,
    onResize,
  },
  ref
) => {
  const localRef = useRef<HTMLIFrameElement>();
  const mergeRefs = useMergeRefs();

  const handlePostMessage = (msg: any) => {
    if (!msg?.data) {
      return;
    }

    const height = msg?.data?.height;

    if (height && localRef.current) {
      localRef.current.style.height = `${height ?? 350}px`;
      onResize && onResize();
    }

    onMessage && onMessage(msg);
  };

  const handleFormLoadSuccess = () => {
    onLoad && onLoad();
  };

  const handleFormLoadError = () => {
    onError && onError();
  };

  useEventListener(window, 'message', handlePostMessage);

  return (
    <div className={css.root}>
      <iframe
        ref={mergeRefs([localRef, ref])}
        src={src}
        title="payment form"
        frameBorder="0"
        className={cx(css.root, className)}
        onLoad={handleFormLoadSuccess}
        onError={handleFormLoadError}
      />
    </div>
  );
});

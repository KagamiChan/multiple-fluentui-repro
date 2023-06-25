import React from 'react'

import { renderGuestUI, unmountGuestUI } from './guest-ui/main';

export const GuestUI = () => {
  const rootRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    renderGuestUI?.(rootRef.current);
    return () => {
      unmountGuestUI?.(rootRef?.current);
    };
  }, []);

  return (
      <div ref={rootRef}></div>)
}

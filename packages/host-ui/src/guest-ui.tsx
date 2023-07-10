import React from 'react'

export const GuestUI = () => {
  const rootRef = React.useRef<HTMLDivElement>();

  React.useEffect(() => {
    (window as any).__renderGuestUI?.(rootRef.current);
    return () => {
      (window as any).__unmountGuestUI?.(rootRef?.current);
    };
  }, []);

  return (
      <div ref={rootRef}></div>)
}

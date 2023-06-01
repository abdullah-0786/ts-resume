import React, { useEffect } from 'react';
import * as defaultSmoothScroll from 'smoothscroll-polyfill';

interface Props {
  onClick?: (arg: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => unknown;
  children?: React.ReactNode;
  offset?: number;
  [key: string]: unknown;
}

function Scroller({ offset, children, onClick, ...rest }: Props) {
  useEffect(() => {
    defaultSmoothScroll.polyfill();
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    let offsetValue = 0;
    if (offset) {
      offsetValue = offset;
    }

    const id = e.currentTarget.getAttribute('href')?.slice(1);
    if (id) {
      const $anchor = document.getElementById(id);
      if ($anchor) {
        const offsetTop = $anchor.getBoundingClientRect().top + window.pageYOffset;
        window.scroll({
          top: offsetTop - offsetValue,
          behavior: 'smooth',
        });
      }
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a {...rest} onClick={smoothScroll}>
      {children}
    </a>
  );
}
export default Scroller;

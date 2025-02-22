import type { JSX } from "preact";

export const A = ({
  href,
  onClick,
  children,
  containerCls,
}: {
  href: string;
  onClick: () => void;
  children: JSX.Element;
  containerCls?: string;
}) => (
  <a
    href={href}
    onClick={onClick}
    // {...props}
    class={`block overflow-hidden w-6 h-12 bg-transparent wiggle-left ${containerCls}`}
  >
    {children}
  </a>
);

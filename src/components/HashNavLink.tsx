import { MouseEvent, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToHash } from "@/lib/scrollToHash";

type HashNavLinkProps = {
  hash: string;
  className?: string;
  children: ReactNode;
};

export const HashNavLink = ({ hash, className, children }: HashNavLinkProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const id = hash.startsWith("#") ? hash.slice(1) : hash;

    if (location.pathname === "/") {
      scrollToHash(hash);
      window.history.replaceState(null, "", hash);
      return;
    }

    navigate({ pathname: "/", hash: id });
  };

  return (
    <a href={hash} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

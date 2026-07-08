import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PageWrapper } from "@/components/PageWrapper";
import { scrollToHash } from "@/lib/scrollToHash";

export const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    const frameId = window.requestAnimationFrame(() => {
      scrollToHash(location.hash);
    });

    return () => {
      window.cancelAnimationFrame(frameId);
    };
  }, [location.pathname, location.hash]);

  return <PageWrapper />;
};

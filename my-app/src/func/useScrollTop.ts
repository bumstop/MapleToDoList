import { useEffect } from "react";

export const useScrollTop = () => {
  useEffect(() => {
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);
};

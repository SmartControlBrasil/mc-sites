import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HOME_SECTION_IDS = new Set([
  "inicio",
  "sobre",
  "projetos",
  "processo",
  "servicos",
  "blog",
]);

function scrollToHashElement(hash: string): boolean {
  const id = hash.replace(/^#/, "");

  if (!id || !HOME_SECTION_IDS.has(id)) {
    return false;
  }

  const element = document.getElementById(id);

  if (!element) {
    return false;
  }

  element.scrollIntoView({ behavior: "smooth", block: "start" });
  return true;
}

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      let attempts = 0;
      const maxAttempts = 20;

      const tryScroll = () => {
        const scrolled = scrollToHashElement(location.hash);

        if (!scrolled && attempts < maxAttempts) {
          attempts += 1;
          requestAnimationFrame(tryScroll);
        }
      };

      requestAnimationFrame(tryScroll);
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return null;
}

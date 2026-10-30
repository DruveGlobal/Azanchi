import { useCallback, useEffect, useRef, useState } from "react";

export type Theme = "light" | "dark";

function currentTheme(): Theme {
  if (typeof document === "undefined") return "light";
  const param = new URLSearchParams(window.location.search).get("theme");
  if (param === "light" || param === "dark") return param;
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(currentTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;
    try {
      localStorage.setItem("azanchi.theme", theme);
    } catch {
      /* private mode — the page still works, it just forgets */
    }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#1c1a17" : "#f5f1e8");
    try {
      const url = new URL(window.location.href);
      if (url.searchParams.has("theme")) {
        url.searchParams.delete("theme");
        window.history.replaceState(null, "", url);
      }
    } catch {
      /* ignore */
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);

  return { theme, toggle };
}

export function useScrolled(threshold = 12) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/** Adds `is-in` to [data-reveal] elements as they enter the viewport. */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((n) => n.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    nodes.forEach((node) => {
      // Anything already on screen at first paint (the hero) should not wait.
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        node.classList.add("is-in");
      } else {
        io.observe(node);
      }
    });

    return () => io.disconnect();
  }, []);
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: { threshold?: number; once?: boolean } = {},
) {
  const { threshold = 0.35, once = true } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true);
            if (once) io.unobserve(entry.target);
          } else if (!once) {
            setInView(false);
          }
        }
      },
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold, once]);

  return { ref, inView };
}

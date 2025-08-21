"use client"

import { useRef, useEffect } from "react";

// LagScroll component for lag scroll effect
function LagScroll({ children }) {
  const scrollRef = useRef(null);
  const y = useRef(0);
  const targetY = useRef(0);
  const raf = useRef();

  useEffect(() => {
    const handleScroll = () => {
      targetY.current = window.scrollY;
    };

    const animate = () => {
      y.current += (targetY.current - y.current) * 0.08;
      if (scrollRef.current) {
        scrollRef.current.style.transform = `translateY(${-y.current}px)`;
      }
      raf.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    raf.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  // Set body height to allow scrolling
  useEffect(() => {
    if (scrollRef.current) {
      document.body.style.height = `${scrollRef.current.getBoundingClientRect().height}px`;
    }
    return () => {
      document.body.style.height = "";
    };
  }, [children]);

  return (
    <div
      ref={scrollRef}
      style={{
        willChange: "transform",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
        zIndex: 0,
      }}
    >
      {children}
    </div>
  );
}

export default function LagScrollWrapper({ children }) {
  return <LagScroll>{children}</LagScroll>;
}

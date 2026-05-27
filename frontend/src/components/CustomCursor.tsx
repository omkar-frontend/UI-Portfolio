import { useEffect, useRef, useState } from "react";

const LERP = 0.18;

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const frame = useRef<number>(0);
  const visibleRef = useRef(false);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [textMode, setTextMode] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;

    document.documentElement.classList.add("custom-cursor-active");

    const updateCursorMode = (x: number, y: number) => {
      const el = document.elementFromPoint(x, y);
      const isText = Boolean(
        el?.closest(
          "textarea, [contenteditable='true'], input:not([type='button']):not([type='submit']):not([type='reset']):not([type='checkbox']):not([type='radio']):not([type='file']):not([type='image']):not([type='hidden'])"
        )
      );
      const isInteractive = Boolean(
        !isText &&
          el?.closest("a, button, [role='button'], select, label, [data-cursor='pointer']")
      );
      setTextMode(isText);
      setInteractive(isInteractive);
    };

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      visibleRef.current = true;
      setVisible(true);
      updateCursorMode(e.clientX, e.clientY);
    };

    const onLeave = () => {
      visibleRef.current = false;
      setVisible(false);
    };
    const onViewportChange = () => {
      if (!visibleRef.current) return;
      updateCursorMode(target.current.x, target.current.y);
    };

    const animate = () => {
      position.current.x += (target.current.x - position.current.x) * LERP;
      position.current.y += (target.current.y - position.current.y) * LERP;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
      }

      frame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("scroll", onViewportChange, { passive: true });
    window.addEventListener("resize", onViewportChange);
    document.addEventListener("mouseleave", onLeave);
    frame.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onViewportChange);
      window.removeEventListener("resize", onViewportChange);
      document.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden
      className={`custom-cursor ${visible ? "custom-cursor--visible" : ""} ${interactive ? "custom-cursor--interactive" : ""} ${textMode ? "custom-cursor--text" : ""}`}
    >
      <svg
        className="custom-cursor__pointer"
        width="14"
        height="18"
        viewBox="0 0 12 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1L1 13.5L4.2 10.3L6.5 15.5L8.5 14.5L6.2 9.3L10.5 9.3L1 1Z"
          fill="currentColor"
          stroke="white"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      <svg
        className="custom-cursor__pointer-hand"
        width="16"
        height="18"
        viewBox="-32 0 512 512"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M448 240v96c0 3.084-.356 6.159-1.063 9.162l-32 136C410.686 499.23 394.562 512 376 512H168a40.004 40.004 0 0 1-32.35-16.473l-127.997-176c-12.993-17.866-9.043-42.883 8.822-55.876 17.867-12.994 42.884-9.043 55.877 8.823L104 315.992V40c0-22.091 17.908-40 40-40s40 17.909 40 40v200h8v-40c0-22.091 17.908-40 40-40s40 17.909 40 40v40h8v-24c0-22.091 17.908-40 40-40s40 17.909 40 40v24h8c0-22.091 17.908-40 40-40s40 17.909 40 40zm-256 80h-8v96h8v-96zm88 0h-8v96h8v-96zm88 0h-8v96h8v-96z" />
      </svg>
      <svg
        className="custom-cursor__text"
        width="12"
        height="20"
        viewBox="0 0 12 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M5 3h2v14H5V3ZM2 3h8v2H2V3ZM2 15h8v2H2v-2Z"
          fill="currentColor"
          stroke="white"
          strokeWidth="1"
          strokeLinejoin="round"
        />
      </svg>
      {/* <p className="custom-cursor__label">Omkar</p> */}
    </div>
  );
}

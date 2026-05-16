import { useEffect, useRef, useState } from "react";

const LERP = 0.18;

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const position = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const frame = useRef<number>(0);
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [textMode, setTextMode] = useState(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;

    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      setVisible(true);

      const el = document.elementFromPoint(e.clientX, e.clientY);
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

    const onLeave = () => setVisible(false);

    const animate = () => {
      position.current.x += (target.current.x - position.current.x) * LERP;
      position.current.y += (target.current.y - position.current.y) * LERP;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;
      }

      frame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    frame.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
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

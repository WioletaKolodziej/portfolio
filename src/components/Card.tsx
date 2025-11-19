import React, { useState, useRef, type ReactNode } from "react";
import { FiPlus, FiX } from "react-icons/fi";

export interface CardProps {
  title: string;
  description?: ReactNode;
  bg: string;
  text?: string;
  tall?: boolean;
  link?: string;
  expanded?: ReactNode;
  gridRef?: React.RefObject<HTMLDivElement | null>;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  bg,
  text,
  tall,
  link,
  expanded,
  gridRef
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [style, setStyle] = useState<any>(null);

  const cardRef = useRef<HTMLDivElement>(null);
  const Wrapper = link ? "a" : "div";

  const open = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!cardRef.current || !gridRef?.current) return;

    const card = cardRef.current.getBoundingClientRect();
    const grid = gridRef.current.getBoundingClientRect();

    // Start: z pozycji Karty
    setStyle({
      top: card.top - grid.top,
      left: card.left - grid.left,
      width: card.width,
      height: card.height,
    });

    setIsExpanded(true);

    // Animate to: granice Grida
    requestAnimationFrame(() => {
      setStyle({
        top: 0,
        left: 0,
        width: grid.width,
        height: grid.height,
      });
    });
  };

  const close = () => {
    if (!cardRef.current || !gridRef?.current) return;

    const card = cardRef.current.getBoundingClientRect();
    const grid = gridRef.current.getBoundingClientRect();

    // Animate back to card
    setStyle({
      top: card.top - grid.top,
      left: card.left - grid.left,
      width: card.width,
      height: card.height,
    });

    setTimeout(() => setIsExpanded(false), 300);
  };

  return (
    <>
      <Wrapper
        ref={cardRef as any}
        href={link}
        target="_blank"
        className={`
          relative
          rounded-3xl
          p-8
          flex flex-col
          shadow-xl
          transition-transform
          hover:scale-[1.02]
          cursor-pointer
          ${tall ? "h-[420px]" : "h-[305px]"}
        `}
        style={{ backgroundColor: bg}}
      >
         { !expanded && <div
    className="
      absolute inset-0
      bg-blue-200 bg-opacity-60
      flex items-center justify-center
      opacity-0 hover:opacity-80
      transition-opacity
      text-blue-950 text-lg font-semibold
      rounded-3xl
    "
  >
    Click to see the project
  </div>}
        {expanded && (
          <button
            className="absolute right-6 top-6 hover:opacity-70 transition"
            onClick={open}
          >
            <FiPlus size={40} style={{ color: text }} className="opacity-90" />
          </button>
        )}

        <div className="mt-auto text-center px-2">
          <h2 className="text-3xl leading-tight" style={{ color: text }}>
            {title}
          </h2>
          {description && (
            <p className="mt-3 text-base font-light opacity-90">
              {description}
            </p>
          )}
        </div>
      </Wrapper>

      {/* Overlay animowany do rozmiaru Grida */}
      {isExpanded && (
        <div
          className="absolute z-[50] rounded-3xl p-10 overflow-auto shadow-2xl"
          style={{
            backgroundColor: bg,
            position: "absolute",
            transition: "all 0.3s ease",
            ...style,
          }}
        >
          <button
            className="absolute top-6 right-6 text-white hover:opacity-70 transition"
            onClick={close}
          >
            <FiX size={38} style={{ color: text }}/>
          </button>

          <h2 className="text-4xl font-semibold mb-6" style={{ color: text }}>
            {title}
          </h2>

          <div className="text-lg opacity-90 leading-relaxed" style={{ color: text }}>
            {expanded || "No expanded content provided."}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;

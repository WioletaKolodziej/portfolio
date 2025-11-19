import React, { type ReactNode } from "react";
import { FiPlus } from "react-icons/fi";

export interface CardProps {
  title: string;
  description?: ReactNode;
  bg: string;
  text?: string;
  tall?: boolean;
  link?: string;
  expandable?: boolean;
}

const Card: React.FC<CardProps> = ({ title, description, bg, text, tall, link, expandable }) => {
  const Wrapper = link ? "a" : "div";

  return (
    <Wrapper
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
      style={{ backgroundColor: bg }}
    >
      {expandable && <div className="absolute right-6 top-6">
        <FiPlus size={30} className="opacity-90" />
      </div>}

      <div className="mt-auto text-center px-2">
        <h2 className={`text-3xl leading-tight`} style={{ color: text }}>{title}</h2>
        {description && (
          <p className="mt-3 text-base font-light opacity-90">{description}</p>
        )}
      </div>
    </Wrapper>
  );
};

export default Card;

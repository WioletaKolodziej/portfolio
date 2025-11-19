import React, { useRef } from "react";
import Card from "./Card";
import HeaderTile from "./HeaderTile";
import { cardsData } from "../data/cards";

const Grid: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={gridRef}
      className="mt-12 flex flex-col lg:flex-row gap-8 h-full relative"
    >
      <div className="flex-1 flex flex-col gap-8">
        <HeaderTile
          title={cardsData.header.title}
          subtitle={cardsData.header.subtitle}
        />
        <Card
          title={cardsData.about.title}
          description={cardsData.about.description}
          bg={cardsData.about.bg}
          tall
          expanded={cardsData.about.expanded}
          gridRef={gridRef}
        />
      </div>

      <div className="flex-3 grid grid-cols-1 content-between sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.firstRow.map((c) => (
          <Card key={c.title} title={c.title} bg={c.bg} link={c.link} />
        ))}
        {cardsData.secondRow.map((c) => (
          <Card
            key={c.title}
            title={c.title}
            bg={c.bg}
            text={c.text}
            expanded={c.expanded} 
            gridRef={gridRef}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
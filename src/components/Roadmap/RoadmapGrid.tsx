import React from "react";
import {
  RoadmapContext,
  ItemType,
  SectionType,
} from "../../context/RoadmapContext";

import RoadmapSection from "./RoadmapSection";
import RoadmapItem from "./RoadmapItem";

type Props = {};

const RoadmapGrid: React.FC<Props> = (props) => {
  const { roadmap, setRoadmap } = React.useContext(RoadmapContext)!;

  // Handling the remove section button
  const handleRemoveSection = (sectionIndex: number) => {
    const newRoadmap = roadmap.filter(
      (section: SectionType, index: number) => index !== sectionIndex
    );
    setRoadmap(newRoadmap);
  };

  // Handling the remove item button according to the selected section value
  const handleRemoveItem = (sectionIndex: number, itemIndex: number) => {
    const newRoadmap = roadmap.map((section: SectionType, index: number) => {
      if (index === sectionIndex) {
        return {
          ...section,
          items: section.items.filter(
            (item: ItemType, index: number) => index !== itemIndex
          ),
        };
      }
      return section;
    });
    setRoadmap(newRoadmap);
  };

  return (
    <div className="roadmap">
      {roadmap.map((section: SectionType, sectionIndex: number) => (
        <RoadmapSection
          key={sectionIndex}
          color={section.color}
          title={section.section}
          onRemoveSection={() => handleRemoveSection(sectionIndex)}
        >
          {section.items.map((item: ItemType, itemIndex: number) => (
            <RoadmapItem
              key={itemIndex}
              onClick={() => handleRemoveItem(sectionIndex, itemIndex)}
              title={item.title}
              from={item.from}
              to={item.to}
              duration={item.duration}
              completed={item.completed}
              color={section.color}
            />
          ))}
        </RoadmapSection>
      ))}
    </div>
  );
};

export default RoadmapGrid;

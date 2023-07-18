import React from "react";
import Color from "color";

type Props = {
  color: string;
  title: string;
  onRemoveSection: () => void;
  children: React.ReactNode;
};

const RoadmapSection: React.FC<Props> = ({
  color,
  title,
  onRemoveSection,
  children,
}) => {
  const lightenedColor = Color(color).lighten(0.4);

  return (
    <div
      className="section"
      style={{ border: `2px solid ${color}`, backgroundColor: lightenedColor }}
    >
      <button
        type="button"
        className="section-remove"
        onClick={onRemoveSection}
      >
        -
      </button>
      <h2>{title}</h2>
      <div className="items">{children}</div>
    </div>
  );
};

export default RoadmapSection;

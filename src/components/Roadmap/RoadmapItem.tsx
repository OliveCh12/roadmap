// import React from "react";

type Props = {
  onClick: () => void;
  title: string;
  from: string;
  to: string;
  duration: number;
  completed: boolean;
  color: string;
};

const RoadmapItem = (props: Props) => {
  return (
    <div
      className={props.completed ? "item item-completed" : "item"}
      style={{
        gridColumn: `1 / span ${props.duration}`,
        backgroundColor: props.color,
      }}
    >
      <button
        type="button"
        className="item-remove"
        onClick={() => props.onClick()}
      >
        -
      </button>
      <span className="item-title">{props.title}</span>
      <span className="item-details">
        {props.from} - {props.to} ({props.duration} days)
      </span>
    </div>
  );
};

export default RoadmapItem;

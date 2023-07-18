import React from "react";

type Props = {};

const RoadmapTimeline = (props: Props) => {
  // generate an array of each month starting from the current month
  const months = Array.from(Array(12).keys()).map((i) => {
    const date = new Date();
    date.setMonth(date.getMonth() + i);

    // return month and the year inside and object
    return {
      month: date.toLocaleString("default", { month: "long" }),
      year: date.getFullYear(),
    };
  });

  return (
    <div>
      <h1>Roadmap Timeline</h1>
      <div className="timeline">
        {months.map((month, index) => (
          <div key={index} className="timeline-item">
            <span>{month.month}</span>
            <span>{month.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoadmapTimeline;

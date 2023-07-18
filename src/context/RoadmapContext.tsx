import React, { createContext, useState } from 'react';

export type ItemType = {
  title: string;
  from: string;
  to: string;
  duration: number;
  completed: boolean;
};

export type SectionType = {
  section: string;
  color: string;
  items: ItemType[];
};

type RoadmapContextType = {
  roadmap: SectionType[];
  setRoadmap: React.Dispatch<React.SetStateAction<SectionType[]>>;
};

export const RoadmapContext = createContext<RoadmapContextType | undefined>(
  undefined
);

const RoadmapProvider = ({ children }) => {
  const [roadmap, setRoadmap] = useState<SectionType[]>([
    {
      section: "Work",
      color: "#FFB84C",
      items: [
        {
          title: "DAO, average",
          from: "2023-08-01",
          to: "2023-08-31",
          duration: 31,
          completed: false,
        },
        {
          title: "Get a better job",
          from: "2023-09-01",
          to: "2023-09-30",
          duration: 30,
          completed: false,
        },
      ],
    },
    {
      section: "Home",
      color: "#F16767",
      items: [
        {
          title: "Make the bed",
          from: "2023-08-01",
          to: "2023-08-31",
          duration: 31,
          completed: true,
        },
        {
          title: "Do the dishes",
          from: "2023-09-01",
          to: "2023-09-30",
          duration: 30,
          completed: false,
        },
      ],
    },
    {
      section: "School",
      color: "#A459D1",
      items: [
        {
          title: "Make the bed",
          from: "2023-08-01",
          to: "2023-08-31",
          duration: 31,
          completed: false,
        },
        {
          title: "Do the dishes",
          from: "2023-09-01",
          to: "2023-09-30",
          duration: 30,
          completed: false,
        },
      ],
    },
  ]);

  return (
    <RoadmapContext.Provider value={{ roadmap, setRoadmap }}>
      {children}
    </RoadmapContext.Provider>
  );
};

export default RoadmapProvider;

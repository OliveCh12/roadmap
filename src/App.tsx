import { useState } from "react";
import RoadmapProvider from "./context/RoadmapContext";

import Layout from "./Layout";
import Sidebar from "./components/Sidebar";
import RoadmapTimeline from "./components/Roadmap/RoadmapTimeline";
import RoadmapGrid from "./components/Roadmap/RoadmapGrid";
import "./App.css";
import "./scss/main.scss";

function App() {
  // Generate state containing array of objects
  const [values, setValues] = useState({
    section: "",
    color: "",
    items: [],
  });

  // Generate an array of 12 months starting from the current month
  const months = Array.from(Array(12).keys()).map((i) => {
    const date = new Date();
    date.setMonth(date.getMonth() + i);

    // return month and the year inside and object
    return {
      month: date.toLocaleString("default", { month: "long" }),
      year: date.getFullYear(),
    };
  });

  // Generate an array of 100 random items
  const items = Array.from(Array(100).keys()).map((i) => {
    const date = new Date();
    date.setMonth(date.getMonth() + i);

    // return month and the year inside and object
    return {
      title: `Item ${i}`,
      from: date.toLocaleDateString(),
      to: date.toLocaleDateString(),
      complete: false,
    };
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <RoadmapProvider>
      <Layout sidebar={<Sidebar />}>
        <RoadmapTimeline />
        <RoadmapGrid />
      </Layout>
    </RoadmapProvider>
  );
}

export default App;

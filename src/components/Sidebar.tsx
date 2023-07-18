import { useContext, useState } from "react";
import { RoadmapContext, SectionType, ItemType} from "../context/RoadmapContext";
import { format, differenceInMonths } from "date-fns";

type Props = {
  isActive?: boolean;
};

const Sidebar: React.FC<Props> = (props) => {
  const { roadmap, setRoadmap } = useContext(RoadmapContext);

  // Values for the forme inputs
  const [section, setSection] = useState({ section: "", color: "", items: [] });
  const [selectedSection, setSelectedSection] = useState("");
  const [item, setItem] = useState({ title: "", from: "", to: "", duration: 0, completed: false });
  
  // Handling input changes according to sections inputs
  const handleSectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSection({
      ...section,
      [name]: value,
    });
  };

  const handleSectionSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSection(e.target.value);
  };

  // Handling input changes according to items inputs
  const handleItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Calculating the duration between the two dates from and to values using date-fns library
    const from = new Date(item.from);
    const to = new Date(item.to);
    const duration = differenceInMonths(to, from)
    // const duration = Math.abs(to.getTime() - from.getTime());
    // const days = Math.ceil(duration / (1000 * 60 * 60 * 24));

    setItem({
      ...item,
      [name]: value,
      duration: duration,
    });
  };

  // Handling the add section button
  const handleAddSection = () => {
    setRoadmap([...roadmap, section]);
  }

  // Handling the add item button according to the selected section value 
  const handleAddItem = () => {
    const newRoadmap = roadmap.map((section: SectionType) => {    
      if (section.section === selectedSection) {
        return {
          ...section,
          items: [...section.items, item],
        };
      }
      return section;
    });
    setRoadmap(newRoadmap);
  };

  return (
    <aside className={`sidebar ${props.isActive ? "active" : ""}`}>
      <h1>
        Roadmap {new Date().getFullYear()} / {new Date().getFullYear() + 1}
      </h1>
      <form className="form">
        <fieldset>
          <legend>Manage Sections</legend>
          <label htmlFor="section">Section</label>
          <input
            type="text"
            name="section"
            id="section"
            onChange={handleSectionChange}
          />
          <label htmlFor="color">Color</label>
          <input
            type="color"
            name="color"
            id="color"
            onChange={handleSectionChange}
          />
          <button type="button" onClick={handleAddSection}>
            Add Section
          </button>

        </fieldset>
        <fieldset>
          <legend>Manages Items</legend>
          <label htmlFor="section">Section</label>
          <select name="section" onChange={handleSectionSelect}>
            {roadmap.map((section: SectionType, index: number) => (
              <option key={index} value={section.section}>{section.section}</option>
            ))}
          </select>
          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={handleItemChange}/>
          <label htmlFor="from">From</label>
          <input type="date" name="from" id="from" onChange={handleItemChange}/>
          <label htmlFor="to">To {item.duration} month(s)</label>
          <input type="date" name="to" id="to" onChange={handleItemChange} />
          <button type="button" onClick={handleAddItem}>Add Item</button>
        </fieldset>
      </form>
    </aside>
  );
}

export default Sidebar
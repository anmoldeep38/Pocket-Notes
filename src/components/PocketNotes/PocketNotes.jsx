import { useState, useEffect } from "react";
import Groups from "../Groups";
import Notes from "../Notes";

const PocketNotes = () => {
  const [transformValue, setTransformValue] = useState(0);

  const handleScreenResize = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768) {
      setTransformValue(0);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleScreenResize);
    return () => {
      window.removeEventListener("resize", handleScreenResize);
    };
  }, []);

  return (
    <div className="min-h-[100vh] min-w-[100vw] font-roboto overflow-hidden">
      <div
        style={{ transform: `translateX(${transformValue * 100}%)` }}
        className=" min-h-[100%] min-w-[100%] font-roboto grid grid-flow-col grid-cols-0 md:grid-cols-customColumns"
      >
        <Groups setTransformValue={setTransformValue} />
        <Notes setTransformValue={setTransformValue} />
      </div>
    </div>
  );
};

export default PocketNotes;

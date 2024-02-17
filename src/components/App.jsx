import PocketNotes from "./PocketNotes/PocketNotes";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PocketNotes />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

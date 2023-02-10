import Layout from "./Components/Layout";
import {Routes, Route} from 'react-router-dom';
import Home from "./Components/Home";
import NewAssign from "./Components/Assignments/NewAssign";
import NewNote from "./Components/Notes/NewNote";
import Notes from "./Components/Notes/Notes";
import Assigns from "./Components/Assignments/Assigns";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="/assignments">
          <Route index element={<Assigns/>}></Route>
          <Route path="new" element={<NewAssign/>}></Route>
        </Route>
        <Route path="/notes">
          <Route index element={<Notes />}></Route>
          <Route path="new" element={<NewNote />}></Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;

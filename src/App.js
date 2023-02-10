import Header from "./Components/Header";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header/>}>
        {/* <Route index ></Route> */}
      </Route>
    </Routes>
  );
}

export default App;

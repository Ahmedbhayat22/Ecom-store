import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Userlayout from "./components/Layout/Userlayout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Userlayout/>} >{/* User layout */}</Route>
        <Route>{/* admin layout */}</Route>
      </Routes>
    </Router>
  );
};

export default App;

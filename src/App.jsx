import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home/Home';

const DashBoard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  )
}



function App() {

  return (
    <div className="app">
      <Router>
        <DashBoard />
      </Router>
    </div>
  );
};


export default App

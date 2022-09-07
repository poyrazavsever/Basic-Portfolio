import { Routes, Route, NavLink  } from "react-router-dom";
import MainPage from "./Components/MainPage"
import About from "./Components/About";
function App() {
  return (
    <div>

      <nav className="h-20 w-ful bg-primary flex items-center justify-between gap-4 px-8">

        <div>
          <img src="Images/logo1.png" alt="logoImage" className="h-20 w-20" />
        </div>

        <div className="flex gap-4 items-center justify-start">
            <NavLink to = "/" 
            className={({ isActive }) =>
            isActive ? "text-lg font-medium text-white bg-fourth px-2 py-1" : "text-lg px-2 py-1"}> Home</NavLink>

            <NavLink to = "/about" className={({ isActive }) =>
            isActive ? "text-lg font-medium text-white bg-fourth px-2 py-1" : "text-lg px-2 py-1"}>About</NavLink>
        </div>
        

      </nav> 

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

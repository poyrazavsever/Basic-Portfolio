import { Routes, Route, NavLink  } from "react-router-dom";
import MainPage from "./Components/MainPage"
import About from "./Components/About";
function App() {
  return (
    <div className="lg:w-1/2 mx-auto">
     <nav className="h-20 z-50 w-full lg:w-1/2 bg-white border-b border-red-200 flex items-center justify-around gap-4 px-8 fixed ">

      <div>
        <img src="Images/logo1.png" alt="logoImage" className="h-16 w-16" />
      </div>

      <div className="flex gap-4 items-center justify-start">
          <NavLink to = "/" 
          className={({ isActive }) =>
          isActive ? "text-base text-black bg-red-200 px-2 py-1" : "text-base  px-2 py-1"}> Home</NavLink>

          <NavLink to = "/about" className={({ isActive }) =>
          isActive ? "text-base text-black bg-red-200 px-2 py-1" : "text-base  px-2 py-1"}>About</NavLink>

          <NavLink to = "/contact" className={({ isActive }) =>
          isActive ? "text-base text-black bg-red-200 px-2 py-1" : "text-base  px-2 py-1"}>Contact</NavLink>
      </div>


    </nav> 

    <div className="h-48"></div>

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="about" element={<About />} />
    </Routes>

    </div>

   
   
  );
}

export default App;

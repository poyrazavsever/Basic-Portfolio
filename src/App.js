import {useState} from "react"
import { Routes, Route, NavLink  } from "react-router-dom";
import MainPage from "./Components/MainPage"
import About from "./Components/About";
import ContactSection from "./Components/ContactSection";
import {BsFillLightbulbFill, BsFillLightbulbOffFill} from "react-icons/bs"
function App() {

  const [darkMode, setDarkMode] = useState(false)
  const changeMode = () =>{
    darkMode ? setDarkMode(false) : setDarkMode(true);
  }
  return (
    <div className={`lg:w-screen mx-auto ${darkMode ? `dark` : ``} relative dark:bg-gray-800`}>

      <div>
        <nav className="h-20 z-50 w-full lg:w-screen mx-auto backdrop-blur-lg border-b border-red-200 dark:border-b-2 dark:border-gray-500 flex items-center justify-around gap-4 px-8 fixed dark:bg-gray-800 dark:text-white">

          <a href="https://pavsever.com" className="z-10">
            <img src="Images/logo1.png" alt="logoImage" className="h-12 w-12 sm:h-16 sm:w-16 lg:w-24 lg:h-24" />
          </a>

          <div className="flex gap-4 items-center z-10">
            
              <NavLink to = "/" 
              className={({ isActive }) =>
              isActive ? "activeLink" : "text-base  px-2 py-1"}> Home</NavLink>

              <NavLink to = "/about" className={({ isActive }) =>
              isActive ? "activeLink" : "text-base  px-2 py-1"}>About</NavLink>

              <NavLink to = "/contact" className={({ isActive }) =>
              isActive ? "activeLink" : "text-base  px-2 py-1"}>Contact</NavLink>

              <button className="text-xl pl-3 transition-all text-red-400 hover:text-red-600 dark:text-gray-400 hover:dark:text-gray-200" onClick = {changeMode}>
                {darkMode ? <BsFillLightbulbFill /> : <BsFillLightbulbOffFill /> }
                
              </button>

          </div>


        </nav> 

        <div className="h-48 dark:bg-gray-800"></div>

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element = {<ContactSection />} />
        </Routes>
      </div>
      

    </div>

   
   
  );
}

export default App;

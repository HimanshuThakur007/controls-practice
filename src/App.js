import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Portfolio from './Components/Portfolio'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'

import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Themes/globalStyles";
import { lightTheme, darkTheme } from "./Themes/Themes"

import  {useDarkMode} from "./Themes/useDarkMode"
import Toggle from "./Themes/Toggler"

const App = () => {

//   const [theme, setTheme] = useState('light');
//   const themeToggler = () => {
//     theme === 'light' ? setTheme('dark') : setTheme('light')
// }

const [theme, themeToggler] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (

    // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <ThemeProvider theme={themeMode}>
      <>
      <GlobalStyles/>
      
      <BrowserRouter>
      {/* <button onClick={themeToggler}>Switch Theme</button> */}
      <div className='themeButton'>
      <Toggle theme={theme} toggleTheme={themeToggler} />
      </div>
        <Routes>
        <Route exact path="/" element={<Portfolio />} >
        <Route index element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        </Route>
       </Routes>
       
       </BrowserRouter>
       </>
    </ThemeProvider>
  )
}

export default App
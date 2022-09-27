import NavBar from './NavBar'
import React from 'react'
import "./Portfolio.css"
import { Outlet } from 'react-router-dom';

// import {ThemeProvider} from "styled-components";
// import { GlobalStyles } from "./Components/globalStyles";



const Portfolio = () => {

  // const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    // <ThemeProvider theme={themeMode}>
      <>
      {/* <GlobalStyles/> */}

    <div className='container'>
    
    <NavBar/>
       <Outlet/>
    </div>
    
    
      
       </>
    // </ThemeProvider>
  )
}

export default Portfolio
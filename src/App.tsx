// import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { useState } from 'react';
// import { ThemeProvider, createGlobalStyle } from 'styled-components';
// import { lightTheme, darkTheme } from './theme';
import Header from './Componets/Header/Header'
import MainContent from './Componets/Main/MainContent'
import Footer from './Componets/Footer/Footer'
import AboutUs from './Componets/AboutUs/AboutUs';
import ContactUs from './Componets/ContactUs/ContactUs';

// const GlobalStyle = createGlobalStyle`
//   body {
//     background-color: ${({ theme }) => theme.body};
//     color: ${({ theme }) => theme.text};
//     margin: 0;
//     padding: 0;
//     transition: background-color 0.3s ease, color 0.3s ease;
//   }
// `;

function App() {
  // const [darkMode, setDarkMode] = useState(false);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
    // <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    //   <GlobalStyle />
    //   <div>
    //     <button onClick={() => setDarkMode(!darkMode)}>
    //       Toggle Theme
    //     </button>
    //     <Router>
    //       <div className="App">
    //         <Header />
    //         <Routes>
    //           <Route path="/" element={<MainContent />} />
    //           <Route path="/about-us" element={<AboutUs />} />
    //           <Route path="/contact-us" element={<ContactUs/>}/>
    //         </Routes>
    //         <Footer />
    //       </div>
    //     </Router>
    //   </div>
    // </ThemeProvider>
  );
}

export default App;
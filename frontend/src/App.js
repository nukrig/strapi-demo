import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import ReviewDetails from "./pages/ReviewDetails";
import SiteHeader from "./components/SiteHeader";
import ContactPage from './pages/contact/ContactPage';
import AboutPage from './pages/about/AboutPage';

function App() {
  const [language, setLanguage] = useState('ka');
  const [showLanguages,setShowLanguages] = useState(false)


  const globeClick = () => {
    setShowLanguages(!showLanguages);
  };
    const languageClick = (lang) =>{
      setLanguage(lang)
      setShowLanguages(false)
    }
  return (
    <div className="app">
      <SiteHeader language={language} showLanguages={showLanguages} globeClick={globeClick} languageClick={languageClick} />
      <Routes>
        <Route exact path="/strapi-demo" element={<Homepage language={language}  />}/>
        <Route path='/strapi-demo/about' element={<AboutPage language={language}/>}/>
        <Route path="/strapi-demo/contact" element={<ContactPage language={language}  />}/>
        <Route path="/strapi-demo/details" element={<ReviewDetails language={language} />}/>
        <Route path="/strapi-demo/details/:id" element={<ReviewDetails language={language} />}/>
      </Routes>
    </div>
  );
}

export default App;

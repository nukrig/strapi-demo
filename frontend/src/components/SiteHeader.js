import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faHouse } from '@fortawesome/free-solid-svg-icons';

export default function SiteHeader({showLanguages,globeClick,languageClick}) {
  const handleLanguageSelection = (selectedLanguage) => {
    languageClick(selectedLanguage);
  };
  return (
        
    <div className='site-header'>
          <Link to='/strapi-demo'><h1><FontAwesomeIcon icon={faHouse} style={{ color: '#8e2ad6', fontSize: '1em',marginRight:'10px'}} 
          />STRAPI
          </h1> </Link>
          <div style={{display:'flex',alignItems:'center',gap:'10px',position:'relative'}}>
              <ul className='pages'>
                <Link to={'/strapi-demo'}><li>Home</li></Link>
                <Link to={'/strapi-demo/about'}><li>About</li></Link>
                <Link to={'/strapi-demo/Contact'}><li>Contact</li></Link>
              </ul>
                <FontAwesomeIcon className='globe-icon' icon={faGlobe} onClick={globeClick} />
            {showLanguages && 
              <div className='header-lang' >
                  <span onClick={()=>{handleLanguageSelection('ka')}}>ქართული</span>
                  <span onClick={()=>{handleLanguageSelection('en')}}>english</span>
                  <span onClick={()=>{handleLanguageSelection('ru')}}>русский</span>
              </div>}
          </div>
    </div>
      
  )
}
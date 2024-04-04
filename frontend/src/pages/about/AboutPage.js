import React, { useEffect, useState } from 'react'
import './AboutStyles.css'
import axios from 'axios';

export default function AboutPage({language}) {
  const [response,setResponse] = useState([])
  const [isLoading,setIsLoading]=useState(false)
  useEffect(() => {
    axios.get(`https://strapi-demo-app-d3vw.onrender.com/api/abouts?locale=${language}`)
   .then(response => {
     setResponse(response.data.data[0].attributes);
     setIsLoading(true)
   })
}, [language]);

  return (
    <>
    {isLoading ? 
    
    (<div className='about'>
      <img src='https://socar.ge/wp-content/uploads/thegem-logos/logo_fe25d9e9169b4e10d35e557b02b3236a_1x.png' alt='socar' />
      <h1>{response.heading}</h1>
      <div className='aboutParagraph'>
        <img className='socarBuildingImg' src='https://socar.ge/wp-content/uploads/2021/03/DSC_6323.jpg' alt='socar'/>
        <span>{response.paragraph}</span>
      </div>
      <h2>{response.subtext}</h2>
      <div className='country'>
          <div>
            <img src='https://socar.ge/wp-content/uploads/2022/08/Flag_of_Turkey.svg.png' alt='socar' />
            <span>{response.country1}</span>
          </div>
          <div>
            <img src='https://socar.ge/wp-content/uploads/elementor/thumbs/Flag_of_Ukraine.svg-pt3lb7eo35ud6epve5kosia9wp9n9cp8k6cia1cct8.webp' alt='socar' />
            <span>{response.country2}</span>
          </div>
          <div>
            <img src='https://socar.ge/wp-content/uploads/elementor/thumbs/UAE-q46kf10ggu6qwf1p4am2y8g2zk2js9zs02vly9sq8s.png' alt='socar'/>
            <span>{response.country3}</span>
          </div>
          <div>
            <img src='https://socar.ge/wp-content/uploads/elementor/thumbs/320px-Flag_of_Romania.svg-pt3ldmtnqr61656w7pczqe855jas57c9w70nwrqqqk.webp' alt='socar'/>
            <span>{response.country4}</span>
          </div>
          <div>
            <img src='https://socar.ge/wp-content/uploads/elementor/thumbs/Switzerland-pt3lw74wpykwgw84t88qh7kvihsr601fg2uw4i7tuk.png'alt='socar' />
            <span>{response.country5}</span>
          </div>
          <div>
            <img src='https://socar.ge/wp-content/uploads/2023/11/Austria-Flag.png' alt='socar' />
            <span>{response.country6}</span>
          </div>
      </div>
    </div>) 
    : 
    <div style={{display:'flex',justifyContent:'center'}}>
      <img style={{width:'10%', marginTop:30}} src='https://i.gifer.com/ZKZg.gif' alt='loading'/>
      <p style={{fontSize:22,fontWeight:'bold',color:'red'}}>გამოყენებულია Strapi-ს სერვერის უფასო ვერსია, შესაბამისად პირველ ჩატვირთვას სჭირდება შედარებით დიდი დრო, მადლობა მოთმინებისთვის...</p>
    </div>
    }
    
    </>
  )
}

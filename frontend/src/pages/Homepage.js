import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import MyDatePicker from '../components/calendar/Calendar';

export default function Homepage(language) {
    const [response,setResponse]=useState([])
    useEffect(() => {
         axios.get(`https://strapi-demo-app-d3vw.onrender.com/api/reviews?locale=${language.language}`)
        .then(response => {
          setResponse(response.data.data);
        })
    }, [language]);
  return (
    <div >
        <MyDatePicker/>
        {response.map(review => (
            <div key={review.id} className='review-card'>
                <img src={review.attributes.link} style={{float:'right',width:'60px',height:'60px',borderRadius:'40px'}}/>
                <div className='rating' >
                    {review.attributes.rating}
                    <FontAwesomeIcon icon={faStar} style={{ color: 'rgb(321, 346, 77)', fontSize: '.3em' }} />
                </div>
                <h2><b>{review.attributes.title}</b></h2>
                <small>{review.attributes.subtext}</small>
                <p>{review.attributes.paragraph.substring(0,400)}...</p>
                <Link to={`/details/${review.id}`}> {review.attributes.details}</Link>
            </div>
    ))}
    </div>
  )
}

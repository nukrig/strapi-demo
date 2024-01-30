import React from 'react'
import { useEffect, useState } from "react";
import { useParams ,Link } from 'react-router-dom'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faSignsPost } from '@fortawesome/free-solid-svg-icons';

export default function ReviewDetails() {
    const { id } = useParams()
    const [details,setDetails]=useState([])
    useEffect(() => {
         axios.get(`https://strapi-demo-app-d3vw.onrender.com/api/reviews/${id}`)
        .then(response => {
          setDetails(response.data.data);
        })
    }, [id]);
  return (
    <div>
      {details.id ? (
    
        <div className='review-card'>
             <FontAwesomeIcon icon={faSignsPost} style={{ color: 'rgb(321, 346, 77)', fontSize: '3em', float:'right', borderBottom:'2px solid #8e2ad6',boxShadow:'5px 5px 50px #8e2ad6'}} />
            <div className='rating'>
                {details.attributes.rating}
                <FontAwesomeIcon icon={faStar} style={{ color: 'rgb(321, 346, 77)', fontSize: '.3em' }} />
            </div>
            <h2><b>{details.attributes.title}</b></h2>
            <small style={{display:'block'}}>{details.attributes.subtext}</small>
            <div style={{textAlign:'center', marginTop:20}}>
              <img src={details.attributes.link} style={{width:'100px',height:'100px',textAlign:'center',borderRadius:'20px'}} alt='image'/>
            </div>
            <p>{details.attributes.paragraph}...</p>

            <Link to={'/strapi-demo'}>{details.attributes.navigation}</Link>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
      }

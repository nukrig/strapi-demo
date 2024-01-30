import React from 'react'
import './ContactStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';


export default function ContactPage() {
  return (
    <div className='contact'>
            <div>
              <a href='https://maps.app.goo.gl/NvEBwhE1rnuTA9jv9' target='blank'>
                  <FontAwesomeIcon className='contact-icon' icon={faLocationDot} />
                  <span >300 არაგველის ქუჩა 24, 0144, თბილისი,საქართველო</span>
              </a>
            </div>
            <div>
              <a href="tel:+1234567890">
                  <FontAwesomeIcon className='contact-icon' icon={faPhone} />
                  <span >*0001</span>
              </a>
            </div>
            <div>
              <a href="mailto:recipient@example.com">
                  <FontAwesomeIcon className='contact-icon' icon={faEnvelope} />
                  <span >info@sgp.ge</span>
              </a>
            </div>
            <div>
                <a href='https://www.facebook.com/socar.ge/?hc_ref=SEARCH&fref=nf' target='blank'>
                    <FontAwesomeIcon className='contact-icon' icon={faFacebookF} />
                    <span >Facebook</span>
                </a>
            </div>
        </div>
    )
}
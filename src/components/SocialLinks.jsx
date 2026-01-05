import React from 'react'
import { BsDiscord } from "react-icons/bs";
import { FaYoutube, FaWhatsappSquare } from "react-icons/fa";
import { AiFillInstagram, AiFillTikTok } from "react-icons/ai";




const SocialLinks = () => {



    const sendWhatssapp = () => {
        
        const number = '972506860169';
        const formattedPhoneNumber = number.replace(/\D/g, '');

        const message = 'תודה רבה על האתר! אתה לא סקאמר'

        const URL = `https://wa.me/${formattedPhoneNumber}?text=${message}`;

        window.open(URL, '_blank')
    }



  return (
      <div className='social'>

          <a href='https://www.facebook.com/arik.alexandrov'
              target='_blank'>
              <AiFillInstagram />
          </a>
          <a href='https://www.facebook.com/arik.alexandrov'
              target='_blank'>
              <BsDiscord />
          </a>
          <a href='https://www.facebook.com/arik.alexandrov'
              target='_blank'>
              <AiFillTikTok />
          </a>
          <a href='https://www.facebook.com/arik.alexandrov'
              target='_blank'>
              <FaYoutube />
          </a>

          <button className='whats-btn'
              onClick={sendWhatssapp}
          >
              <FaWhatsappSquare />
          </button>

          
      </div>
  )
}

export default SocialLinks
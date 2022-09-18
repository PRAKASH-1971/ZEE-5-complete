import React from 'react'
import "./css/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-links' id='footer-links'>
            <img src="https://i.ibb.co/whV37WQ/image-1-2.png" alt="" />
           <div>
            <h5>Connect with Us</h5>
            <span><i class="fab fa-instagram"></i></span>
            <span><i class="fab fa-facebook"></i></span>
            <span><i class="fab fa-twitter"></i></span>
            <span><i class="fab fa-youtube"></i></span>
           </div>
        </div>
        <div className='aboutt' id='aboutt'>
            <p>About Us  |</p>
            <p>Help Center  |</p>
            <p>Privacy Policy  |</p>
            <p>Terms of Use  </p>
        </div>
        <div  className='ulli'>
            <ul>
                <h6>Popular TV Shows</h6>
                <li>Kumkum Bhagya</li>
                <li>Kundali Bhagya</li>
                <li>Bhagya Lakshmi</li>
                <li>Tujhse Hai Raabta</li>
                <li>Kyun Rishton Mein Katti Batti</li>
            </ul>
            <ul>
                <h6>Premium Movies</h6>
                <li>Kya Meri Sonam Gupta Bewafa Hai?</li>
                <li>Helmet</li>
                <li>200 Halla Ho</li>
                <li>14 Phere</li>
                <li>Dial 100</li>
            </ul>
            <ul id='dis'>
                <h6>Popular LIVE TV Channels</h6>
                <li>Aaj Tak</li>
                <li>Zee News</li>
                <li>Zee TV HD</li>
                <li>&TV HD</li>
                <li>Zee Marathi HD</li>
            </ul>
            <ul className='dis'>
                <h6>Popular Web Series</h6>
                <li>Sunflower</li>
                <li>Jeet Ki Zid</li>
                <li>Bicchoo Ka Khel</li>
                <li>State of Siege: 26/11</li>
                <li>Naxalbari</li>
            </ul>
            <ul className='dis'>
<h6>Bollywood Top Celebrities</h6>
                <li>Sunny Leone</li>
                <li>Disha Patani</li>
                <li>Deepika Padukone</li>
                <li>Salman Khan</li>
                <li>Nora Fatehi</li>
            </ul>

        </div>
        <div className='footer-links' id='footer-links' >
            <img src="https://i.ibb.co/6gWWCBt/image-1-3.png" alt="" />
        </div>
    </div>
  )
}

export default Footer
import React from 'react'
import "./css/Movies.css"
import Zeerow from './Zeerow'
import Navbar from './Navbar'
import Carasoul from './Carasoul'
import topkannada  from "./db.json"
import Footer from './Footer'

function News() {
  var project = topkannada.Zeenews
  var project2 = topkannada.Zeenewsrow1
  var project3 = topkannada.Zeenewsrow2
  var project4 = topkannada.Zeenewsrow3

  return (
    <div className='movies'>
 <Navbar/>
      <Carasoul  
        img1="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-10z5117550/cover/indiatoday1170mobile6cb312cb9e4b4fe4b26373571731006f.jpg"
        name1=""
        name2=""
        img2="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1904997942/cover/wion1170mobile66ac0a069aea4234b260859e46493989.jpg"
        img3="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-externallin_53397245/cover/suvarna1170c3478922e69a4667bfee66f8912db51f.jpg" 
        name3=""
        name4=""
        img4="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-externalli_182727687/cover/tv9kannada1170674a257d5af240b6a4003f8df70cef60.jpg" />
      <Zeerow  title={<b>Free Live news Channels</b>} 
            isLargeRow data={project}/>
      <Zeerow  title={<b>Russia</b>} 
            isLargeRow data={project2}/>
      <Zeerow  title={<b>COVID-19🦠😷: 12,213 fresh cases</b>} 
            isLargeRow data={project3}/>
      <Zeerow  title={<b>Business & Finance</b>} 
            isLargeRow data={project4}/>
            <Footer/>
    </div>
  )
}

export default News
import React from 'react'
import "./css/Movies.css"
import Zeerow from './Zeerow'
import Navbar from './Navbar'
import Carasoul from './Carasoul'
import topkannada  from "./db.json"
import Footer from './Footer'

function Tvshow() {
  var project = topkannada.Zeetvshow1
  var project2 = topkannada.Zeetvshow2
  var project3 = topkannada.Zeetvshow3

  return (
    <div className='movies'>
 <Navbar/>
      <Carasoul  
        img1="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-2058/cover/1920x77019d463e4bde44aa5bcac145229b5fefa.jpg"
        name1="Jothe Jotheyali"
        name2="Dance Karnataka Dance"
        img2="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-4z5129918/cover/1920x7700f5da8ec67104769be34dec364a5aec1.jpg"
        img3="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-1392/cover/1920x770d85eadf2046f4c0a9c563811c65ae8d9.jpg" 
        name3="Gattimela"
        name4="Hitler Kalyana"
        img4="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-3273/cover/1920x770ba1ce97a6c354845966c31fb7dbbd166.jpg" />
      <Zeerow  title={<b>Zee Kannada Shows</b>} 
            isLargeRow data={project}/>
      <Zeerow  title={<b>Young Romantics | Kannada</b>} 
            isLargeRow data={project2}/>
      <Zeerow  title={<b>Watch Again Exclusively on ZEE5</b>} 
            isLargeRow data={project3}/>
      <Footer/>
    </div>
  )
}

export default Tvshow
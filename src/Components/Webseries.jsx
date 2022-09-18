import React from 'react'
import "./css/Movies.css"
import Zeerow from './Zeerow'
import Navbar from './Navbar'
import Carasoul from './Carasoul'
import topkannada  from "./db.json"
import Footer from './Footer'

function Webseries() {
  var project = topkannada.topkannada
  var project2 = topkannada.Zee5mix
  var project3 = topkannada.Zee5latest
  var project4 = topkannada.Zee5top10
  var project1 = topkannada.Zee5originals

  return (
    <div className='movies'>
      <Navbar/>
      <Carasoul  
        img1="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-1958/cover/061958incover.jpg"
        name1="The Kashmir Files"
        name2="Drishya 2"
        img2="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-2375/cover/062375incover901100890.jpg"
        img3="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-1533/cover/1920x770a302c5058f864847b9a808663b2f8c171043178d600246b9832c5554bdd5107a.jpg" 
        name3="Ek Love ya"
        name4="Mungilpete"
        img4="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-6-1325/cover/061325incover.jpg" />
            <Zeerow  title={<b>Zee5 Originals</b>} data={project1}
            isLargeRow />
      <Zeerow  title={<b>Zee5 originals</b>} 
            isLargeRow data={project2}/>
      <Zeerow  title={<b>Latest on Zee5 </b>} 
            isLargeRow data={project3}/>
      <Zeerow  title={<b>Top 10 Movies </b>} 
            isLargeRow data={project4}/>
            <Zeerow  title={<b>Top Kannada Movies</b>} 
                  isLargeRow data={project}/>
                  <Footer/>
    </div>
  )
}

export default Webseries
import React from 'react'
import "./css/Movies.css"
import Zeerow from './Zeerow'
import Navbar from './Navbar'
import Carasoul from './Carasoul'
import topkannada  from "./db.json"
import Footer from './Footer'

function Movies() {
  var project = topkannada.topkannada
  var project2 = topkannada.Zee5mix
  var project3 = topkannada.Zee5latest
  var project4 = topkannada.Zee5top10
  return (
    <div className='movies'>
      <Navbar/>
      <Carasoul  
        img1="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5141112/cover/thekashmirfilesposter021920x77018052022withlogo149e7b89ed39417484a89bf09b2f7ce8.jpg"
        name1="The Kashmir Files"
        name2="Drishya 2"
        img2="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z597633/cover/1920x770d53f9123b1354670ba8839eeb263ed6a.jpg"
        img3="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5125514/cover/1920x7709bd4ca07abd6468f8987644f83666ced.jpg" 
        name3="Ek Love ya"
        name4="Mungilpete"
        img4="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5142244/cover/1920x770cda21e7146e14cbfbfd0285d59f2f383.jpg" />
      <Zeerow  title={<b>Top Kannada Movies</b>} 
            isLargeRow data={project}/>
      <Zeerow  title={<b>Zee5 originals</b>} 
            isLargeRow data={project2}/>
      <Zeerow  title={<b>Latest on Zee5 </b>} 
            isLargeRow data={project3}/>
      <Zeerow  title={<b>Top 10 Movies </b>} 
            isLargeRow data={project4}/>
            <Footer/>
    </div>
  )
}

export default Movies
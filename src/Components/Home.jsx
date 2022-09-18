import React from 'react'
import Carasoul from './Carasoul'
import Navbar from './Navbar'
import Row from './Row'
import requests from './request';
import Zeerow from './Zeerow';
import topkannada  from "./db.json"
import Footer from './Footer';

function Home() {
    var project = topkannada.topkannada
    var project1 = topkannada.Zee5originals

  return (
    <div className='Home'>
        <Navbar/>
        <Carasoul  
        img1="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5148988/cover/1920x7703d1609e793eb48b690c1a254fb99f7c9.jpg" 
        name1="RRR"
        name2="Garuda Gamana Vrishabha Vahana"
        img2="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z571846/cover/1920x770cdd0cb64f2eb453bb2c879868e201adb88d5717209b24798a5058fc6fbdde4c5.jpg"
        name3="Valimai"
        name4="Mungilpete"
        img3="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5117568/cover/1920x7700f1283cec3ed46f49e380c515491781d.jpg" img4="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-0-1z5142244/cover/1920x770cda21e7146e14cbfbfd0285d59f2f383.jpg" />
         <Zeerow  title={<b>Top Kannada</b>} data={project}
            isLargeRow />
        <Row title={<b>IMDB Top Picks</b>} fetchUrl={requests.fetchNetflixOriginals} 
            isLargeRow />
        <Row title={<b>Popular Movies</b>} fetchUrl={requests.fetchTopRated} 
            isLargeRow />
         <Zeerow  title={<b>Zee5 Originals</b>} data={project1}
            isLargeRow />
        <Row title={<b>Latest Movies on Zee5</b>} fetchUrl={requests.fetchTrending} 
            isLargeRow
             />
        <Row title={<b>Kids Movies</b>} fetchUrl={requests.fetchComedyMovies} 
            isLargeRow
             />
        <Row title={<b>Top 10 Movies</b>} fetchUrl={requests.fetchActionMovies} 
            isLargeRow
             />
             <Row title={<b>Horror Movies</b>} fetchUrl={requests.fetchHorrorMovies} isLargeRow/> 
            <Row title={<b>Romance Movies</b>} fetchUrl={requests.fetchRomanceMovies} isLargeRow/> 
            <Row title={<b>Documentaries</b>} fetchUrl={requests.fetchDocumentaries} isLargeRow/> 
            <Footer/>
    </div>
  )
}

export default Home
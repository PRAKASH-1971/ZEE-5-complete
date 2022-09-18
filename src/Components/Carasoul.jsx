import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function Carasoul(props) {
   console.log(props)

  return (
    <Carousel className='caraseoul' style={{"z-index":0}}>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={props.img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h2>{props.name1}</h2>
          <button className='watch-button'>Watch</button>
          <button className='buy-button'>BUY PLAN</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src={props.img2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h2>{props.name2}</h2>
          <button className='watch-button'>Watch</button>
          <button className='buy-button'>BUY PLAN</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.img3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h2>{props.name3}</h2>
          <button className='watch-button'>Watch</button>
          <button className='buy-button'>BUY PLAN</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.img4}
          alt="Third slide"
        />
        <Carousel.Caption>
        <h2>{props.name4}</h2>
          <button className='watch-button'>Watch</button>
          <button className='buy-button'>BUY PLAN</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://akamaividz2.zee5.com/image/upload/w_1188,h_475,c_scale,f_webp,q_auto:eco/resources/0-101-externall_1373180003/cover/kannada_1170x65_1650501086.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <button className='watch-button'>Watch</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carasoul
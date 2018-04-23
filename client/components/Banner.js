import React from 'react'
import Slider from 'react-slick'

export default class Banner extends React.Component {
  render() {
    const settings = {
      autoplay: true,
      speed: 1000,
      dots: true,
      autoplaySpeed: 8000,
      arrows:false,
      accessibility: false,
      adaptiveHeight: true
    }
    return (
      <div className="jumbotron">
        <Slider {...settings}>
          <div className="container-fluid">
            <img src="allbeams_web-banner.png" alt="Banner 1" />
          </div>

          <div className="container-fluid">
            <img src="allbeams_web-banner2.png" alt="Banner 2" />
          </div>

          <div className="container-fluid">
            <img src="allbeams_web-banner3.png" alt="Banner 3" />
          </div>
        </Slider>
      </div>
    )
  }
}

import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

export default function ImageSlider() {
    const settings = {dots:true}
    return(
        <Slider {...settings}>
            <div>
                <img src = "https://picsum.photos/400/200"/>
            </div>
            <div>
                <img src = "https://picsum.photos/400/200"/>
            </div>
            <div>
                <img src = "https://picsum.photos/400/200"/>
            </div>
        </Slider>
    )
}
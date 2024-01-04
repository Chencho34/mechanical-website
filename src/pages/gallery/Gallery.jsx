import { images } from '../../constants/data'
import './Gallery.css'

export default function Gallery() {
  return (
    <div className='gallery' id='/gallery'>
      <h1 className='gallery__title'>Gallery</h1>    
        <div className="image__gallery">
          {images.map((image, index) => (
            <div key={index} className="image__item">
              <img className='image' src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </div>  
    </div>
  )
}

import './Gallery.css'

export default function Gallery() {
  const images = [
    'https://img.freepik.com/foto-gratis/trabajador-servicio-coche-musculoso-reparando-vehiculo_146671-19605.jpg',
    'https://www.shutterstock.com/shutterstock/photos/2182572153/display_1500/stock-photo-automotive-mechanic-repairman-using-tablet-and-pulling-dipstick-to-checking-engine-oil-level-engine-2182572153.jpg',
    'https://img.remediosdigitales.com/a48c6b/que-coches-dan-urticaria-a-los-mecanicos/1366_2000.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwnL_NUCKWLyZ3KxRUDhHQRKryXv48y5mzLNaTNDBSWKb_t_-zJukos_OwwLCaM4v62eU&usqp=CAU',
    'https://fiorp.org/wp-content/uploads/2019/02/GettyImages-929108146.jpg',
    'https://patiodeautos.com/wp-content/uploads/2018/09/6-consejos-para-convertirte-en-un-mejor-mecanico-de-autos.jpg',
    'https://blog.reparacion-vehiculos.es/hs-fs/hubfs/Im%C3%A1genes_Post/Enero_2016/ser-buen-mecanico.jpg?width=788&height=525&name=ser-buen-mecanico.jpg',
    'https://sergioescobar.cl/wp-content/uploads/2021/01/Mecanicos-certificados-en-nuestras-marcas.jpg',
  ];
  
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

import React from 'react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


const Gallery: React.FC = () => {


  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    breakpoints: {
      '(max-width: 768px)': {
        slides: {perView:1, spacing: 10},
      },
      '(max-width: 1024px)': {
        slides: {perView:2, spacing: 12},
      },
    },
    slides: {
      perView: 3,
      spacing: 16,
    },
  });  

  useEffect(()=>{
    if (!instanceRef) return;

    const interval = setInterval(()=>{
      instanceRef.current?.next();
    }, 3000);

    return()=>{
      clearInterval(interval);
    };
  }, [instanceRef])

  const images = [
    { src: './bucket/bucket_1.jpg', alt: 'Букет 1' },
    { src: './bucket/bucket_2.jpg', alt: 'Букет 2' },
    { src: './bucket/bucket_3.jpg', alt: 'Букет 3' },
    { src: './bucket/bucket_4.jpg', alt: 'Букет 4' },
  ];

  return (<section className="gallery">
    <h2>Наші роботи</h2>
    <div ref={sliderRef} className='keen-slider'>
      {images.map((img,index)=>(
        <div className='keen-slider__slide' key={index}>
          <img src={img.src} alt={img.alt} />
        </div>
      ))}

    </div>
    <Link to="./gallery" className='button'> Переглянути всі </Link>
  </section>)
}

export default Gallery
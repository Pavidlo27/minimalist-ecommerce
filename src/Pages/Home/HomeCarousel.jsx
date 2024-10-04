import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation'; // Import navigation styles

import { getNewProds } from '../../api';

export default () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [prods, setProds] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function loadProds() {
      try {
        const data = await getNewProds();
        setProds(data);
      } catch (err) {
        setError(err);
      }
    }

    loadProds();
  }, []);

  const productElements = prods.map(prod => (
    <SwiperSlide key={prod.id}>
      <Link to={`/categories/${prod.id}`}>
        <div className='border-2 border-gray-300 hover:border-black' data-aos='zoom-in-up'>
          <img src={prod.firstImg} alt="" />
          <div className='p-3'>
            <h3 className='text-lg'>{prod.name}</h3>
            <p className='text-lg font-semibold'>{prod.price}.00$</p>
          </div>
        </div>
      </Link>
    </SwiperSlide>
  ));

  const resize = () => {
    if (window.innerWidth <= 640) {
      setSlidesPerView(1.4);
    } else {
      setSlidesPerView(3.5);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', resize);
    resize();
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className='relative'>
      <h2 className='text-2xl font-semibold mb-10' data-aos='fade-up'>
        Trending Now
      </h2>
      {error && <h1 className='text-xl'>{error}</h1>}
      <Swiper
        modules={[Navigation, FreeMode]}
        navigation
        freeMode={true}
        spaceBetween={12}
        slidesPerView={slidesPerView}
        className='-mx-5 px-5 lg:-mx-14 lg:px-14'
      >
        {productElements}
      </Swiper>
    </div>
  );
};

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode'
// import 'swiper/css/navigation'
import { FreeMode, Navigation, Autoplay } from 'swiper/modules'
import { Link } from 'react-router-dom';

export default ({ products }) => {
  const productElements = products.map(prod => (
    <SwiperSlide>
      <Link to={`categories/${prod.id}`}>
        <div key={prod.id} className=' border-2 border-gray-300 hover:border-black'>
          <img src={prod.firstImg} alt="" />
          <div className='p-3'>
            <h3 className='text-lg '>{prod.name}</h3>
            <p className='text-lg font-semibold'>{prod.price}.00$</p>
          </div>
        </div>
      </Link>
    </SwiperSlide>
  ))
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-10'
      >Trending Now</h2>
      <Swiper
        modules={[Navigation, FreeMode, Autoplay]}
        autopla
        navigation
        freeMode={true}
        spaceBetween={20}
        slidesPerView={1.5}
        className='-mx-5 px-5'
      >
        <div className='w-[]'>
          <h1>daafafafa</h1>
          {productElements}
        </div>
      </Swiper>
    </div>
  );
};
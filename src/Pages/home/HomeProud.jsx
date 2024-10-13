import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProudProds } from '../../api';
import loaderImg from '@/assets/images/BlackDot.png';

const HomeProud = () => {
  const [prods, setProds] = useState([]);
  const [error, setError] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const [loadedImages, setLoadedImages] = useState({}); // To track image loading states

  useEffect(() => {
    async function loadProds() {
      try {
        const data = await getProudProds();
        setProds(data);
      } catch (err) {
        setError(err.message);
      }
    }

    loadProds();
  }, []);

  const handleShowMore = () => {
    setShowMore(prev => !prev);
  };

  const handleImageLoad = (id) => {
    setLoadedImages(prevState => ({
      ...prevState,
      [id]: true, // Set the image as loaded based on product id
    }));
  };

  const productElements = prods
    .slice(0, showMore ? prods.length : 4)
    .map(prod => (
      <Link
        to={`/categories/${prod.id}`}
        key={prod.id}
        data-aos='zoom-in-up'
      >
        <div className='relative border-2 border-gray-300 hover:border-black flex flex-col h-full'>
          {/* Image with loading state */}
          <div className='relative overflow-hidden bg-gray-200'>
            <div
              className={`aspect-square w-full flex items-center justify-center ${loadedImages[prod.id] ? 'hidden' : 'block'} `}
            >
              <div className="loader"></div>
            </div>
            <img
              src={prod.firstImg}
              alt="product"
              className={`object-cover w-full transition-opacity duration-300 ${loadedImages[prod.id] ? 'opacity-100' : 'opacity-0'}`} // Fade in when loaded
              onLoad={() => handleImageLoad(prod.id)}
            />
          </div>
          <div className="p-3 flex-grow flex flex-col">
            <h3 className="text-lg">{prod.name}</h3>
            <p className="text-lg font-semibold mt-auto">{prod.price}.00$</p>
          </div>
        </div>
      </Link>
    ));

  return (
    <section>
      <h2 className='my-10 text-2xl font-semibold'>Products we are proud of</h2>
      {error && <h1 className='text-xl text-red-500'>{error}</h1>} {/* Styled error message */}
      <div className='grid gap-3  md:grid-cols-4'>
        {productElements}
      </div>
      <button
        className='mt-5 text-black text-xl font-semibold hover:underline'
        onClick={handleShowMore}
      >
        {showMore ? 'Show Less' : 'Show More...'}
      </button>
    </section>
  );
};

export default HomeProud;

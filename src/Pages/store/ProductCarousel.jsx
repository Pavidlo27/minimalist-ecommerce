import React, { useEffect, useState } from 'react';
import loaderImg from '@/assets/images/BlackDot.png';

function ProductCarousel({ product }) {
  const imgs = [
    { id: 0, value: product.firstImg },
    { id: 1, value: product.secondImg },
    { id: 2, value: product.thirdImg },
  ];

  const [activeImg, setActiveImg] = useState(imgs[0]);
  const [isLoaded, setIsLoaded] = useState(false); // For each active image loading
  console.log(activeImg)
  const handleClick = (index) => {
    // Only set the active image if the image is not already active
    if (activeImg.id !== index) {
      setIsLoaded(false);
      setActiveImg(imgs[index]);
    }
  };

  // Reset the active image when the product changes
  useEffect(() => {
    setActiveImg(imgs[0]);
    setIsLoaded(false);
  }, [product.id]);

  return (
    <div className="w-full mr-6 lg:w-1/2 lg:p-16">
      {/* Main Image */}
      <div className='relative overflow-hidden rounded-md bg-slate-100'>
        <div
          className={`absolute object-cover inset-0 flex justify-center items-center ${isLoaded ? 'hidden' : ''}`}
        >
          <div className='loader'></div>
        </div>

        <img
          src={activeImg.value}
          alt="product-image"
          className={`object-cover w-full h-full transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      {/* Thumbnails */}
      <div className='grid grid-cols-3 gap-3 mt-3'>
        {imgs.map((img, index) => (
          <div
            className={`border-2 rounded-md overflow-hidden cursor-pointer ${activeImg.id === index ? 'border-gray-300' : 'border-white'}`}
            key={img.id}
            onClick={() => handleClick(index)}
          >
            <img
              className='object-cover w-full h-full'
              src={img.value}
              alt={`thumbnail-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCarousel;

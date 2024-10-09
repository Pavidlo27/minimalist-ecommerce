import React, { useEffect, useState } from 'react';
import loaderImg from '@/assets/images/BlackDot.png';

function ProductCarousel({ product }) {
  const [isHighResolutionLoaded, setIsHighResolutionLoaded] = useState(false)

  const imgs = [
    { id: 0, value: product.firstImg },
    { id: 1, value: product.secondImg },
    { id: 2, value: product.thirdImg },
  ];
  const [wordData, setWordData] = useState(imgs[0])
  const handleClick = (index) => {
    const wordSlider = imgs[index];
    setWordData(wordSlider)
  }


  //To fix product img problem
  useEffect(() => {
    setWordData(imgs[0])
  }, [product.id])


  return (
    <div className="w-full mr-6 lg:w-1/2 lg:p-16">
      <div className=' overflow-hidden rounded-md bg-slate-200'>
        <img src={loaderImg} alt="" className={`object-cover w-full h-full ${isHighResolutionLoaded ? 'hidden' : ''}`} />
        <img src={wordData.value} alt="product-image" className={`object-cover w-full h-full ${isHighResolutionLoaded ? '' : 'hidden'}`} onLoad={() => setIsHighResolutionLoaded(true)} />
      </div>
      <div className='grid grid-cols-3 gap-3 mt-3 '>
        {imgs.map((data, i) =>
          <div className={` ${wordData.id == i ? "border-gray-300" : "border-white"} border-2 rounded-md overflow-hidden`} key={i} >
            <img className='object-cover w-full h-full' src={data.value} onClick={() => handleClick(i)} height="70" width="100" />
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCarousel;
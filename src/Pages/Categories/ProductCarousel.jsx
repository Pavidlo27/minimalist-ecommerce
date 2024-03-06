import React, { useEffect, useState } from 'react';


function ProductCarousel({ product }) {
  console.log(product)
  const imgs = [
    { id: 0, value: product.firstImg },
    { id: 1, value: product.secondImg },
    { id: 2, value: product.thirdImg },
  ];
  const [wordData, setWordData] = useState(imgs[0])
  const [val, setVal] = useState(0)
  const handleClick = (index) => {
    console.log(index)
    setVal(index)
    const wordSlider = imgs[index];
    setWordData(wordSlider)
  }

  return (
    <div className="w-full mr-6">
      <div className=' overflow-hidden rounded-md bg-slate-200'>
        {/* <button className='h-8 w-8 rounded-md bg-gray-800' onClick={handlePrevious}>P</button> */}
        <img src={wordData.value} className='object-cover w-full h-full ' />
        {/* <button className='btns' onClick={handleNext}>N</button> */}
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
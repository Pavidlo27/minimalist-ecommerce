import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProudProds } from '../../api';

const HomeProud = () => {
  const [prods, setProds] = useState([]);
  const [error, setError] = useState();
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    async function loadProds() {
      try {
        const data = await getProudProds();
        setProds(data);
      } catch (err) {
        setError(err);
      }
    }

    loadProds();
  }, []);

  const handleShowMore = () => {
    setShowMore((prev) => !prev);
  };

  const productElements = prods
    .slice(0, showMore ? prods.length : 4)
    .map((prod) => (
      <Link
        to={`/categories/${prod.id}`}
        key={prod.id}
        data-aos="zoom-in-up"
      >
        <div className="border-2 border-gray-300 hover:border-black flex flex-col h-full">
          <img src={prod.firstImg} alt="" className="object-cover h-48 w-full" />
          <div className="p-3 flex-grow flex flex-col">
            <h3 className="text-lg">{prod.name}</h3>
            <p className="text-lg font-semibold mt-auto">{prod.price}.00$</p>
          </div>
        </div>
      </Link>
    ));

  return (
    <section>
      <h2 className="my-10 text-2xl font-semibold">Products we are proud of</h2>
      {error && <h1 className="text-xl">{error}</h1>}
      <div className="grid gap-2 md:gap-3 grid-cols-2 lg:grid-cols-4">
        {productElements}
      </div>
      <button
        className="mt-5 text-black text-xl font-semibold hover:underline"
        onClick={handleShowMore}
      >
        {showMore ? 'Show Less' : 'Show More...'}
      </button>
    </section>
  );
};

export default HomeProud;

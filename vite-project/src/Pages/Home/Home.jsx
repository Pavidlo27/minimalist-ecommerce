import React from 'react'
import HomeMain from './HomeMain'

import { getVans } from '../../api'
import { useLoaderData } from 'react-router-dom'
import HomeProud from './HomeProud'
import HomeBanner from './HomeBanner'
import HomeCarousel from './HomeCarousel'

export function loader() {
  return getVans()
}

const Home = () => {
  const products = useLoaderData()
  return (
    <article>
      <HomeMain />
      <HomeProud products={products} />
      <HomeBanner
        bannerTitle='Creative harmonious living'
        bannerText='RAOUF Products are all made 
        to standard sizes so that you can mix and match 
        them freely.'
      />
      <HomeCarousel products={products} />
      <HomeBanner
        bannerTitle='Comfortable & Elegante Living'
        bannerText='RAOUF Products are all made to 
        standard sizes so that you can mix and match 
        them freely.'
      />
    </article>
  )
}

export default Home
import React from 'react'
import HomeMain from './HomeMain'

import HomeProud from './HomeProud'
import HomeBanner from './HomeBanner'
import HomeCarousel from './HomeCarousel'

import bannerImg1 from '../../assets/images/bannerImg1.jpg'
import bannerImg2 from '../../assets/images/bannerImg2.jpg'
import FAQ from '../../components/FAQ'



const Home = () => {
  return (
    <article>
      <HomeMain />
      <HomeProud />
      <HomeBanner
        bannerTitle='Creative harmonious living'
        bannerText='RAOUF Products are all made 
        to standard sizes so that you can mix and match 
        them freely.'
        bannerImg={bannerImg1}
      />
      <HomeCarousel />
      <HomeBanner
        bannerTitle='Comfortable & Elegante Living'
        bannerText='RAOUF Products are all made to 
        standard sizes so that you can mix and match 
        them freely.'
        bannerImg={bannerImg2}
        reverse={true}
      />
      <FAQ />
    </article>
  )
}

export default Home
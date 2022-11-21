import Head from 'next/head';
import Carousel from '/components/carousel/carousel.jsx';
import { dashboardLists } from './constants/carouselList';

export default function Home() {
  return (
    <div className="min-h-screen bg-white pt-8">
    {/* <div className="min-h-screen bg-[#EEEEEE] pt-8"> */}
      <div className="bg-[#EEEEEE] mx-16">
        <Carousel images={dashboardLists} width={1000} height={500} />
      </div>
    </div>
  )
}

import React from 'react'
import ChatBot from "react-chatbotify";
import Client from '../Components/pages/Home/Client';
import Specialization from '../Components/pages/Home/Specialization';
import ImageGrid from '../Components/pages/Home/ImageGrid';
import Partners from '../Components/pages/Home/Partners';
import WhyPEB from '../Components/pages/Home/WhyPeb';
import ServiceHome from '../Components/pages/Home/ServiceHome';
import Carousel from '../Components/pages/Home/Carousel';
import ProjectsSectionHome from '../Components/pages/Home/ProjectsSectionHome';
import WhyUs from '../Components/pages/Home/WhyUs';
import DirectorDesk from '../Components/pages/Home/DirectorDesk';

const steps = [
  {
    id: '0',
    message: 'hey',
    end: true
  }
];
const HomePage = () => {
  return (
    <>
   <Carousel/>
    <Client />
    <Specialization />
    <DirectorDesk/>
    <ProjectsSectionHome/>
    <WhyUs/>
    <WhyPEB/>
    <ServiceHome/>
    <ImageGrid />
    <ChatBot steps={steps} />
    <Partners />
    </>
  )
}

export default HomePage
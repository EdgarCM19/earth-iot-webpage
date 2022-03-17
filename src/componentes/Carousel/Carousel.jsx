import React from 'react'
import { CarouselContainer,
  CarouselImage,
  CarouselInfo,
  CarouselItem,
  CarouselText,
  CarouselTitle,
  RightArrowButton, 
  LeftArrowButton } from './CarouselElements'

import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { useState } from 'react';
import { carouselData } from './CarouselData';

const Carousel = ({ data }) => {

  const [selectedIndex, setSelectedIndex] = useState(0);

  const nextIndex = () => {
    const newIndex = selectedIndex + 1 === carouselData.length ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
  }

  const prevIndex = () => {
    const newIndex = selectedIndex === 0 ? carouselData.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
  }

  return (
    <CarouselContainer>
      { data.map(e => {
        return(
        <CarouselItem  id={e.id} className={e.id === selectedIndex ? "showed" : ""}>
          <CarouselInfo>
           <CarouselTitle>{e.title}</CarouselTitle>
            <CarouselText>{e.content}</CarouselText>
          </CarouselInfo>
          <CarouselImage src={e.img}/>
        </CarouselItem>
        );
      })}
      {/* <CarouselItem>
        <CarouselInfo>
          <CarouselTitle>TItulo del proyecto</CarouselTitle>
          <CarouselText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores tenetur laboriosam itaque veritatis quis optio, laborum aliquid quam qui ipsum numquam totam deserunt, dolore doloribus illum hic cumque adipisci! Consectetur.
          </CarouselText>
        </CarouselInfo>
        <CarouselImage src='/images/projects.jpg'/>
      </CarouselItem> */}
      <RightArrowButton onClick={nextIndex}><FiArrowRight /></RightArrowButton>
      <LeftArrowButton onClick={prevIndex}><FiArrowLeft /></LeftArrowButton>
    </CarouselContainer>
  )
}

export default Carousel;

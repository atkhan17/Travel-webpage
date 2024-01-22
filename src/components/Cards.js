import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
  return (
    <div className="cards">
        <h1>Check out these EPIC Destinations</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src="images/img-5.webp"
                    text="Explore the gardens of the Cameron Highlands in Malaysia"
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem 
                    src="images/img-1.webp"
                    text="Travel through the Azores in Portugal on a 
                    Private Cruise"
                    label='Luxury'
                    path='/services'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src="images/img-2.webp"
                    text="Ever dreamed of exploring the moon? Take a trip to the Atacama Desert in Chile"
                    label='Adrenaline'
                    path='/services'
                    />
                    <CardItem 
                    src="images/img-3.jpg"
                    text="Book a river rafting tour through the Grand Canyon National Park in Arizona, US"
                    label='Adventure'
                    path='/services'
                    />
                    <CardItem 
                    src="images/img-8.webp"
                    text="Take a walk through the Arashiyama Bamboo Grove in Japan"
                    label='Adventure'
                    path='/sign-up'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Cards
import {React, useEffect} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Cards() {
  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' data-aos="slide-left" >
            <CardItem
              src='/images/2021-10-15 14-23-05.PNG'
              text='Redgate finance'
              blurb='A financing website that was built using the React framework. Built using a template I had built on my own.
'
            />
            <CardItem
              src='../images/mcgovern.PNG'
              text='McGovern finance solutions'
              blurb='A website built using the React framework with Node.Js backend. followed a pre-determined template for the design of the website.'

            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;

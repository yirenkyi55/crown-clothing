import React from 'react';
import './homePage.styles.scss';

export const HomePage = () => (
  <div className='homePage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>HATS</h1>
          <span className='sub-title'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>JACKETS</h1>
          <span className='sub-title'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>SNEAKERS</h1>
          <span className='sub-title'>SHOP NOW</span>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>WOMENS</h1>
          <span className='sub-title'>SHOP NOW</span>
        </div>
      </div>

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>MENS</h1>
          <span className='sub-title'>SHOP NOW</span>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;

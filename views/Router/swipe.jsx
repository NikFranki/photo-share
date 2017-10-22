import React from 'react';
import SwipeableViews from 'react-swipeable-views';

const MyComponent = () => (
  <SwipeableViews>
    <div className="slide" style={styles.slide}>
      <div style={styles.slide1}>
      </div>
    </div>
    <div className="slide" style={styles.slide}>
      <div style={styles.slide2}>
      </div>
    </div>
    <div className="slide" style={styles.slide}>
      <div style={styles.slide3}>
      </div>
    </div>
  </SwipeableViews>
);

const urlSrc = [
    '../../../img/America.jpg',
    '../../../img/Mountains.jpg',
    '../../../img/Shore.jpg',
]

const styles = {
  slide: {
    width: '100%',
    height: '40vw',
    position: 'relative',
    overflow: 'hidden'
  },
  slide1: {
    backgroundImage: 'url('+urlSrc[0]+')',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vw',
    maxHeight: '600px',
    maxHeight: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: '1'
  },
  slide2: {
    backgroundImage: 'url('+urlSrc[1]+')',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vw',
    maxHeight: '600px',
    maxHeight: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: '1'
  },
  slide3: {
    backgroundImage: 'url('+urlSrc[2]+')',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vw',
    maxHeight: '600px',
    maxHeight: '200px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    zIndex: '1'
  },
};

export default MyComponent;

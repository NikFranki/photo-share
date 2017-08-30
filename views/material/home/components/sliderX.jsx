import React from 'react';

const SliderX = ({imgSrcs}) => {
    console.log(132);
    return (
        <ul className="slider">
          {
              imgSrcs.map((value, key)=>{
                return (
                  <li key={key}><a><img src={value} /></a></li>
                )
              })
          }
        </ul>
    );
}

export default SliderX;

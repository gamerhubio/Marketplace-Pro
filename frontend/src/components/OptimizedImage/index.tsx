import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ alt, src, height, width, blurHash }) => {

  return (
    <LazyLoadImage
      alt={alt}
      effect="blur"
      height={height}
      width={width}
      wrapperProps={{
        style: {transitionDelay: "1s"},
      }}
      src={src} />
    )
};


export default OptimizedImage
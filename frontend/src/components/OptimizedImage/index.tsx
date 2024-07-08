import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Blurhash } from "react-blurhash";
import 'react-lazy-load-image-component/src/effects/blur.css';

const OptimizedImage = ({ alt, src, height, width, blurHash }) => {



  return (
    <LazyLoadImage
      alt={alt}
      effect={blurHash ? undefined : "blur"}
      height={height}
      width={width}
      placeholder={blurHash ? <Blurhash hash={blurHash} width={width} height={height} resolutionX={32} resolutionY={32} punch={1} /> : undefined}
      threshold={1}
      wrapperProps={{
        style: {transitionDelay: "1s"},
      }}
      src={src} />
    )
};


export default OptimizedImage